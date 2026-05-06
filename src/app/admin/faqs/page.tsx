"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Plus, Trash2 } from "lucide-react";

export default function AdminFAQsPage() {
  const [faqs, setFaqs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => { load(); }, []);

  async function load() {
    const supabase = createClient();
    const { data } = await supabase.from("faqs").select("*").order("sort_order");
    setFaqs(data || []);
  }

  async function addNew() {
    const supabase = createClient();
    await supabase.from("faqs").insert({
      question: "New Question",
      answer: "Answer here...",
      category: "General",
      sort_order: faqs.length + 1,
    });
    load();
  }

  async function update(id: string, field: string, value: any) {
    const supabase = createClient();
    await supabase.from("faqs").update({ [field]: value }).eq("id", id);
  }

  async function remove(id: string) {
    if (!confirm("Delete this FAQ?")) return;
    const supabase = createClient();
    await supabase.from("faqs").delete().eq("id", id);
    load();
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
        <h1 className="font-heading text-2xl text-white">FAQs</h1>
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
        {faqs.map((faq) => (
          <Card key={faq.id} hover={false} className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 space-y-3">
                <Input
                  label="Question"
                  defaultValue={faq.question}
                  onBlur={(e) => update(faq.id, "question", e.target.value)}
                />
                <Textarea
                  label="Answer"
                  defaultValue={faq.answer}
                  onBlur={(e) => update(faq.id, "answer", e.target.value)}
                  rows={3}
                />
                <Input
                  label="Category"
                  defaultValue={faq.category}
                  onBlur={(e) => update(faq.id, "category", e.target.value)}
                />
              </div>
              <button onClick={() => remove(faq.id)} className="p-2 text-neutral-400 hover:text-red-400 mt-6">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
