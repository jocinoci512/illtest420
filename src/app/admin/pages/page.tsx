import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Edit } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default async function AdminPagesPage() {
  const supabase = await createClient();
  let pages: any[] = [];

  try {
    const { data } = await supabase
      .from("pages")
      .select("*")
      .order("created_at", { ascending: true });
    pages = data || [];
  } catch (e) {}

  return (
    <div>
      <h1 className="font-heading text-2xl text-white mb-8">Pages</h1>

      <div className="space-y-3">
        {pages.map((page) => (
          <Card key={page.id} hover={false} className="p-4 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-white font-medium">{page.title}</h3>
                <Badge variant={page.published ? "success" : "default"}>
                  {page.published ? "Published" : "Draft"}
                </Badge>
              </div>
              <p className="text-sm text-neutral-500 mt-1">/{page.slug}</p>
            </div>
            <Link
              href={`/admin/pages/${page.slug}`}
              className="p-2 text-neutral-400 hover:text-gold-500 transition-colors"
            >
              <Edit className="w-4 h-4" />
            </Link>
          </Card>
        ))}

        {pages.length === 0 && (
          <Card hover={false} className="p-8 text-center">
            <p className="text-neutral-400">No pages found. Run the seed migration to populate initial content.</p>
          </Card>
        )}
      </div>
    </div>
  );
}
