"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function EditPagePage() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;
  const [loading, setLoading] = useState(false);
  const [sections, setSections] = useState<any[]>([]);
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    async function load() {
      const supabase = createClient();

      const { data: page } = await supabase
        .from("pages")
        .select("*")
        .eq("slug", slug)
        .single();

      if (page) {
        setPageTitle(page.title);
      }

      const { data: secs } = await supabase
        .from("page_sections")
        .select("*")
        .eq("page_id", page?.id)
        .order("sort_order", { ascending: true });

      setSections(secs || []);
    }
    load();
  }, [slug]);

  async function handleSave() {
    setLoading(true);
    const supabase = createClient();

    for (const section of sections) {
      await supabase
        .from("page_sections")
        .update({ content: section.content })
        .eq("id", section.id);
    }

    // Trigger revalidation
    const pathMap: Record<string, string> = {
      home: "/",
      about: "/about",
      beliefs: "/beliefs",
      join: "/join",
      contact: "/contact",
      "privacy-policy": "/privacy-policy",
      "terms-conditions": "/terms-conditions",
    };

    await fetch("/api/revalidate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: pathMap[slug] || `/${slug}`, secret: "" }),
    });

    setLoading(false);
    alert("Page updated successfully!");
    router.refresh();
  }

  function updateSectionContent(index: number, content: string) {
    const updated = [...sections];
    try {
      updated[index].content = JSON.parse(content);
    } catch {
      // Keep as-is if invalid JSON
    }
    setSections(updated);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-heading text-2xl text-white">Edit: {pageTitle}</h1>
        <Button variant="primary" onClick={handleSave} disabled={loading}>
          {loading ? "Saving..." : "Save Changes"}
        </Button>
      </div>

      <div className="space-y-6">
        {sections.map((section, i) => (
          <Card key={section.id} hover={false} className="p-6">
            <h3 className="text-gold-500 font-medium mb-3 uppercase text-sm tracking-wider">
              {section.section_key.replace(/_/g, " ")}
            </h3>
            <Textarea
              value={JSON.stringify(section.content, null, 2)}
              onChange={(e) => updateSectionContent(i, e.target.value)}
              rows={10}
              className="font-mono text-xs"
            />
          </Card>
        ))}

        {sections.length === 0 && (
          <Card hover={false} className="p-8 text-center">
            <p className="text-neutral-400">No sections found for this page.</p>
          </Card>
        )}
      </div>
    </div>
  );
}
