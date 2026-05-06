"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function NewBlogPostPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    slug: "",
    body: "",
    excerpt: "",
    category: "General",
    status: "draft",
    seo_title: "",
    seo_description: "",
  });

  function generateSlug(title: string) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.from("blog_posts").insert({
      ...form,
      slug: form.slug || generateSlug(form.title),
      published_at: form.status === "published" ? new Date().toISOString() : null,
    });

    if (error) {
      alert("Error creating post: " + error.message);
      setLoading(false);
      return;
    }

    // Trigger revalidation
    await fetch("/api/revalidate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: "/blog", secret: process.env.NEXT_PUBLIC_REVALIDATION_SECRET || "" }),
    });

    router.push("/admin/blog");
    router.refresh();
  }

  return (
    <div>
      <h1 className="font-heading text-2xl text-white mb-8">New Blog Post</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-5">
            <Card hover={false} className="p-6 space-y-5">
              <Input
                label="Title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value, slug: generateSlug(e.target.value) })}
                placeholder="Enter post title"
                required
              />
              <Input
                label="Slug"
                value={form.slug}
                onChange={(e) => setForm({ ...form, slug: e.target.value })}
                placeholder="url-friendly-slug"
              />
              <Textarea
                label="Content (HTML)"
                value={form.body}
                onChange={(e) => setForm({ ...form, body: e.target.value })}
                placeholder="Write your blog post content in HTML..."
                rows={15}
                required
              />
              <Textarea
                label="Excerpt"
                value={form.excerpt}
                onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                placeholder="Brief summary for listing pages..."
                rows={3}
              />
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <Card hover={false} className="p-6 space-y-4">
              <h3 className="text-white font-medium">Publishing</h3>
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-neutral-300">Status</label>
                <select
                  value={form.status}
                  onChange={(e) => setForm({ ...form, status: e.target.value })}
                  className="w-full bg-dark-surface border border-dark-border rounded-sm px-4 py-3 text-neutral-200 focus:outline-none focus:border-gold-500/50"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
              <Input
                label="Category"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                placeholder="e.g. Knowledge, Leadership"
              />
            </Card>

            <Card hover={false} className="p-6 space-y-4">
              <h3 className="text-white font-medium">SEO</h3>
              <Input
                label="SEO Title"
                value={form.seo_title}
                onChange={(e) => setForm({ ...form, seo_title: e.target.value })}
                placeholder="Custom title for search engines"
              />
              <Textarea
                label="SEO Description"
                value={form.seo_description}
                onChange={(e) => setForm({ ...form, seo_description: e.target.value })}
                placeholder="Meta description for search results"
                rows={3}
              />
            </Card>

            <Button type="submit" variant="primary" className="w-full" disabled={loading}>
              {loading ? "Saving..." : "Create Post"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
