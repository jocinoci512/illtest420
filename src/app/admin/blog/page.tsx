import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Plus, Edit, Trash2 } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default async function AdminBlogPage() {
  const supabase = await createClient();
  let posts: any[] = [];

  try {
    const { data } = await supabase
      .from("blog_posts")
      .select("*")
      .order("created_at", { ascending: false });
    posts = data || [];
  } catch (e) {}

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-heading text-2xl text-white">Blog Posts</h1>
        <Button variant="primary" href="/admin/blog/new">
          <Plus className="w-4 h-4 mr-2" />
          New Post
        </Button>
      </div>

      {posts.length === 0 ? (
        <Card hover={false} className="p-12 text-center">
          <p className="text-neutral-400">No blog posts yet. Create your first post to get started.</p>
        </Card>
      ) : (
        <div className="space-y-3">
          {posts.map((post) => (
            <Card key={post.id} hover={false} className="p-4 flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-white font-medium">{post.title}</h3>
                  <Badge variant={post.status === "published" ? "success" : "default"}>
                    {post.status}
                  </Badge>
                </div>
                <p className="text-sm text-neutral-500 mt-1">
                  {post.category} &bull; {new Date(post.created_at).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href={`/admin/blog/${post.id}`}
                  className="p-2 text-neutral-400 hover:text-gold-500 transition-colors"
                >
                  <Edit className="w-4 h-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
