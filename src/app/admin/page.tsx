import { createClient } from "@/lib/supabase/server";
import { FileText, PenSquare, MessageSquare, Users, Mail } from "lucide-react";
import Card from "@/components/ui/Card";

async function getStats() {
  const supabase = await createClient();

  const [posts, contacts, applications, subscribers] = await Promise.all([
    supabase.from("blog_posts").select("id", { count: "exact", head: true }),
    supabase.from("contact_submissions").select("id", { count: "exact", head: true }).eq("read", false),
    supabase.from("membership_applications").select("id", { count: "exact", head: true }).eq("status", "pending"),
    supabase.from("newsletter_subscribers").select("id", { count: "exact", head: true }).eq("active", true),
  ]);

  return {
    totalPosts: posts.count || 0,
    unreadContacts: contacts.count || 0,
    pendingApplications: applications.count || 0,
    activeSubscribers: subscribers.count || 0,
  };
}

export default async function AdminDashboard() {
  let stats = { totalPosts: 0, unreadContacts: 0, pendingApplications: 0, activeSubscribers: 0 };

  try {
    stats = await getStats();
  } catch (e) {
    // Fallback to zeros if DB not connected
  }

  const cards = [
    { label: "Blog Posts", value: stats.totalPosts, icon: PenSquare, color: "text-blue-400" },
    { label: "Unread Messages", value: stats.unreadContacts, icon: MessageSquare, color: "text-yellow-400" },
    { label: "Pending Applications", value: stats.pendingApplications, icon: Users, color: "text-green-400" },
    { label: "Newsletter Subscribers", value: stats.activeSubscribers, icon: Mail, color: "text-purple-400" },
  ];

  return (
    <div>
      <h1 className="font-heading text-2xl text-white mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {cards.map((card) => (
          <Card key={card.label} hover={false} className="p-6">
            <div className="flex items-center justify-between mb-3">
              <card.icon className={`w-5 h-5 ${card.color}`} />
            </div>
            <p className="text-3xl font-bold text-white">{card.value}</p>
            <p className="text-sm text-neutral-400 mt-1">{card.label}</p>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card hover={false} className="p-6">
          <h2 className="text-white font-medium mb-4">Quick Actions</h2>
          <div className="space-y-2">
            <a href="/admin/blog" className="block px-4 py-3 bg-dark-surface rounded-sm text-neutral-300 hover:text-gold-500 hover:bg-dark-bg transition-colors text-sm">
              Manage Blog Posts
            </a>
            <a href="/admin/pages" className="block px-4 py-3 bg-dark-surface rounded-sm text-neutral-300 hover:text-gold-500 hover:bg-dark-bg transition-colors text-sm">
              Edit Page Content
            </a>
            <a href="/admin/submissions" className="block px-4 py-3 bg-dark-surface rounded-sm text-neutral-300 hover:text-gold-500 hover:bg-dark-bg transition-colors text-sm">
              View Submissions
            </a>
            <a href="/admin/settings" className="block px-4 py-3 bg-dark-surface rounded-sm text-neutral-300 hover:text-gold-500 hover:bg-dark-bg transition-colors text-sm">
              Site Settings
            </a>
          </div>
        </Card>

        <Card hover={false} className="p-6">
          <h2 className="text-white font-medium mb-4">Getting Started</h2>
          <div className="space-y-3 text-sm text-neutral-400">
            <p>Welcome to the Elite Illuminati Official admin panel. From here you can manage all aspects of your website.</p>
            <ul className="space-y-2 mt-3">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-1.5 shrink-0" />
                <span>Use <strong className="text-neutral-300">Pages</strong> to edit homepage and static page content</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-1.5 shrink-0" />
                <span>Use <strong className="text-neutral-300">Blog Posts</strong> to create and publish articles</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-1.5 shrink-0" />
                <span>Use <strong className="text-neutral-300">Submissions</strong> to view contact and application forms</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-1.5 shrink-0" />
                <span>Use <strong className="text-neutral-300">Settings</strong> to update contact info and social links</span>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
}
