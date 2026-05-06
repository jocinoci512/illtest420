"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function AdminMembershipPage() {
  const [tiers, setTiers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => { load(); }, []);

  async function load() {
    const supabase = createClient();
    const { data } = await supabase.from("membership_tiers").select("*").order("sort_order");
    setTiers(data || []);
  }

  async function update(id: string, field: string, value: any) {
    const supabase = createClient();
    await supabase.from("membership_tiers").update({ [field]: value }).eq("id", id);
  }

  async function saveAll() {
    setLoading(true);
    await fetch("/api/revalidate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: "/join", secret: "" }),
    });
    setLoading(false);
    alert("Changes published!");
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-heading text-2xl text-white">Membership Tiers</h1>
        <Button variant="primary" onClick={saveAll} disabled={loading}>
          {loading ? "Publishing..." : "Publish Changes"}
        </Button>
      </div>

      <div className="space-y-6">
        {tiers.map((tier) => (
          <Card key={tier.id} hover={false} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Input
                label="Name"
                defaultValue={tier.name}
                onBlur={(e) => update(tier.id, "name", e.target.value)}
              />
              <Input
                label="Description"
                defaultValue={tier.description}
                onBlur={(e) => update(tier.id, "description", e.target.value)}
              />
            </div>
            <Textarea
              label="Features (JSON array)"
              defaultValue={JSON.stringify(tier.features, null, 2)}
              onBlur={(e) => {
                try { update(tier.id, "features", JSON.parse(e.target.value)); } catch {}
              }}
              rows={5}
              className="font-mono text-xs"
            />
          </Card>
        ))}
      </div>
    </div>
  );
}
