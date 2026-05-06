"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Plus, Trash2, Eye, EyeOff } from "lucide-react";

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => { load(); }, []);

  async function load() {
    const supabase = createClient();
    const { data } = await supabase.from("testimonials").select("*").order("sort_order");
    setTestimonials(data || []);
  }

  async function addNew() {
    const supabase = createClient();
    await supabase.from("testimonials").insert({
      name: "New Testimonial",
      quote: "Enter quote here...",
      role: "Member",
      sort_order: testimonials.length + 1,
    });
    load();
  }

  async function update(id: string, field: string, value: any) {
    const supabase = createClient();
    await supabase.from("testimonials").update({ [field]: value }).eq("id", id);
  }

  async function remove(id: string) {
    if (!confirm("Delete this testimonial?")) return;
    const supabase = createClient();
    await supabase.from("testimonials").delete().eq("id", id);
    load();
  }

  async function toggleVisibility(id: string, current: boolean) {
    const supabase = createClient();
    await supabase.from("testimonials").update({ visible: !current }).eq("id", id);
    load();
  }

  async function saveAll() {
    setLoading(true);
    await fetch("/api/revalidate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: "/", secret: "" }),
    });
    setLoading(false);
    alert("Changes published!");
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-heading text-2xl text-white">Testimonials</h1>
        <div className="flex gap-3">
          <Button variant="outline" onClick={addNew}>
            <Plus className="w-4 h-4 mr-2" /> Add New
          </Button>
          <Button variant="primary" onClick={saveAll} disabled={loading}>
            {loading ? "Publishing..." : "Publish Changes"}
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {testimonials.map((t) => (
          <Card key={t.id} hover={false} className="p-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                label="Name"
                defaultValue={t.name}
                onBlur={(e) => update(t.id, "name", e.target.value)}
              />
              <Input
                label="Role"
                defaultValue={t.role}
                onBlur={(e) => update(t.id, "role", e.target.value)}
              />
              <div className="flex items-end gap-2">
                <button onClick={() => toggleVisibility(t.id, t.visible)} className="p-2 text-neutral-400 hover:text-gold-500">
                  {t.visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                </button>
                <button onClick={() => remove(t.id)} className="p-2 text-neutral-400 hover:text-red-400">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="mt-3">
              <Textarea
                label="Quote"
                defaultValue={t.quote}
                onBlur={(e) => update(t.id, "quote", e.target.value)}
                rows={2}
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
