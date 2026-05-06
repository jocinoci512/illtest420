"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Plus, Trash2 } from "lucide-react";

export default function AdminNavigationPage() {
  const [headerItems, setHeaderItems] = useState<any[]>([]);
  const [footerItems, setFooterItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => { load(); }, []);

  async function load() {
    const supabase = createClient();
    const { data } = await supabase.from("navigation_items").select("*").order("sort_order");
    setHeaderItems((data || []).filter((i: any) => i.location === "header"));
    setFooterItems((data || []).filter((i: any) => i.location === "footer"));
  }

  async function addItem(location: string) {
    const supabase = createClient();
    const items = location === "header" ? headerItems : footerItems;
    await supabase.from("navigation_items").insert({
      label: "New Link",
      href: "/",
      location,
      sort_order: items.length + 1,
    });
    load();
  }

  async function updateItem(id: string, field: string, value: any) {
    const supabase = createClient();
    await supabase.from("navigation_items").update({ [field]: value }).eq("id", id);
  }

  async function removeItem(id: string) {
    if (!confirm("Delete this navigation item?")) return;
    const supabase = createClient();
    await supabase.from("navigation_items").delete().eq("id", id);
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
    alert("Navigation updated!");
  }

  function renderItems(items: any[], location: string) {
    return (
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-3 bg-dark-surface p-3 rounded-sm">
            <Input
              defaultValue={item.label}
              onBlur={(e) => updateItem(item.id, "label", e.target.value)}
              className="flex-1"
              placeholder="Label"
            />
            <Input
              defaultValue={item.href}
              onBlur={(e) => updateItem(item.id, "href", e.target.value)}
              className="flex-1"
              placeholder="/path"
            />
            <button onClick={() => removeItem(item.id)} className="p-2 text-neutral-400 hover:text-red-400">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
        <button
          onClick={() => addItem(location)}
          className="flex items-center gap-2 text-sm text-neutral-400 hover:text-gold-500 px-3 py-2"
        >
          <Plus className="w-4 h-4" /> Add Item
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-heading text-2xl text-white">Navigation</h1>
        <Button variant="primary" onClick={saveAll} disabled={loading}>
          {loading ? "Publishing..." : "Save & Publish"}
        </Button>
      </div>

      <div className="space-y-8">
        <Card hover={false} className="p-6">
          <h2 className="text-white font-medium mb-4">Header Navigation</h2>
          {renderItems(headerItems, "header")}
        </Card>

        <Card hover={false} className="p-6">
          <h2 className="text-white font-medium mb-4">Footer Navigation</h2>
          {renderItems(footerItems, "footer")}
        </Card>
      </div>
    </div>
  );
}
