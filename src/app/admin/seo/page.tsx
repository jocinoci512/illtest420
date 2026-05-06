"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function AdminSEOPage() {
  const [seoData, setSeoData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => { load(); }, []);

  async function load() {
    const supabase = createClient();
    const { data } = await supabase.from("seo_metadata").select("*").order("page_slug");
    setSeoData(data || []);
  }

  async function update(id: string, field: string, value: string) {
    const supabase = createClient();
    await supabase.from("seo_metadata").update({ [field]: value }).eq("id", id);
  }

  async function saveAll() {
    setLoading(true);
    // Revalidate all pages
    const paths = ["/", "/about", "/beliefs", "/join", "/blog", "/contact"];
    for (const path of paths) {
      await fetch("/api/revalidate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path, secret: "" }),
      });
    }
    setLoading(false);
    alert("SEO settings published!");
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-heading text-2xl text-white">SEO Settings</h1>
        <Button variant="primary" onClick={saveAll} disabled={loading}>
          {loading ? "Publishing..." : "Save & Publish"}
        </Button>
      </div>

      <div className="space-y-6">
        {seoData.map((item) => (
          <Card key={item.id} hover={false} className="p-6">
            <h3 className="text-gold-500 font-medium mb-4 uppercase text-sm tracking-wider">
              /{item.page_slug}
            </h3>
            <div className="space-y-4">
              <Input
                label="SEO Title"
                defaultValue={item.title}
                onBlur={(e) => update(item.id, "title", e.target.value)}
              />
              <Textarea
                label="Meta Description"
                defaultValue={item.description}
                onBlur={(e) => update(item.id, "description", e.target.value)}
                rows={2}
              />
              <Input
                label="OG Image URL"
                defaultValue={item.og_image || ""}
                onBlur={(e) => update(item.id, "og_image", e.target.value)}
                placeholder="https://..."
              />
            </div>
          </Card>
        ))}

        {seoData.length === 0 && (
          <Card hover={false} className="p-8 text-center">
            <p className="text-neutral-400">No SEO data found. Run the seed migration first.</p>
          </Card>
        )}
      </div>
    </div>
  );
}
