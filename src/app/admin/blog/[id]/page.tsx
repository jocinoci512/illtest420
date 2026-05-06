"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function EditBlogPostPage() {
  const router = useRouter();
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);
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

  useEffect(() => {
    async function load() {
      const supabase = createClient();
      const { data } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("id", params.id)
        .single();

      if (data) {
        setForm({
          title: data.title || "",
          slug: data.slug || "",
          body: data.body || "",
          excerpt: data.excerpt || "",
          category: data.category || "General",
          status: data.status || "draft",
          seo_title: data.seo_title || "",
          seo_description: data.seo_description || "",
        });
      }
    }
    load();
  }, [params.id]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase
      .from("blog_posts")
      .update({
        ...form,
        published_at: form.status === "published" ? new Date().toISOString() : null,
      })
      .eq("id", params.id);

    if (error) {
      alert("Error updating post: " + error.message);
      setLoading(false);
      return;
    }

    await fetch("/api/revalidate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: "/blog", secret: "" }),
    });

    router.push("/admin/blog");
    router.refresh();
  }

  async function handleDelete() {
    if (!confirm("Are you sure you want to delete this post?")) return;
    setDeleting(true);

    const supabase = createClient();
    await supabase.from("blog_posts").delete().eq("id", params.id);

    await fetch("/api/revalidate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: "/blog", secret: "" }),
    });

    router.push("/admin/blog");
    router.refresh();
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-heading text-2xl text-white">Edit Post</h1>
        <button
          onClick={handleDelete}
          disabled={deleting}
          className="px-4 py-2 text-sm text-red-400 hover:text-red-300 border border-red-500/30 rounded-sm hover:bg-red-500/10 transition-colors"
        >
          {deleting ? "Deleting..." : "Delete Post"}
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-5">
            <Card hover={false} className="p-6 space-y-5">
              <Input
                label="Title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                required
              />
              <Input
                label="Slug"
                value={form.slug}
                onChange={(e) => setForm({ ...form, slug: e.target.value })}
              />
              <Textarea
                label="Content (HTML)"
                value={form.body}
                onChange={(e) => setForm({ ...form, body: e.target.value })}
                rows={15}
                required
              />
              <Textarea
                label="Excerpt"
                value={form.excerpt}
                onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                rows={3}
              />
            </Card>
          </div>

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
              />
            </Card>

            <Card hover={false} className="p-6 space-y-4">
              <h3 className="text-white font-medium">SEO</h3>
              <Input
                label="SEO Title"
                value={form.seo_title}
                onChange={(e) => setForm({ ...form, seo_title: e.target.value })}
              />
              <Textarea
                label="SEO Description"
                value={form.seo_description}
                onChange={(e) => setForm({ ...form, seo_description: e.target.value })}
                rows={3}
              />
            </Card>

            <Button type="submit" variant="primary" className="w-full" disabled={loading}>
              {loading ? "Saving..." : "Update Post"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
