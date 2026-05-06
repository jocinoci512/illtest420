"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import {
  Eye,
  LayoutDashboard,
  FileText,
  PenSquare,
  MessageSquare,
  Users,
  Image,
  Settings,
  Navigation,
  Search,
  Star,
  HelpCircle,
  LogOut,
  CreditCard,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Pages", href: "/admin/pages", icon: FileText },
  { label: "Blog Posts", href: "/admin/blog", icon: PenSquare },
  { label: "Testimonials", href: "/admin/testimonials", icon: Star },
  { label: "FAQs", href: "/admin/faqs", icon: HelpCircle },
  { label: "Membership", href: "/admin/membership", icon: CreditCard },
  { label: "Submissions", href: "/admin/submissions", icon: MessageSquare },
  { label: "Media", href: "/admin/media", icon: Image },
  { label: "Navigation", href: "/admin/navigation", icon: Navigation },
  { label: "SEO", href: "/admin/seo", icon: Search },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-dark-surface border-r border-dark-border flex flex-col z-40">
      {/* Logo */}
      <div className="p-6 border-b border-dark-border">
        <Link href="/admin" className="flex items-center gap-2">
          <Eye className="w-5 h-5 text-gold-500" />
          <span className="font-heading text-sm text-white tracking-wider">Admin Panel</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3 overflow-y-auto">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm transition-colors",
                    isActive
                      ? "bg-gold-500/10 text-gold-500 border-l-2 border-gold-500"
                      : "text-neutral-400 hover:text-white hover:bg-dark-card"
                  )}
                >
                  <item.icon className="w-4 h-4 shrink-0" />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-3 border-t border-dark-border">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm text-neutral-400 hover:text-red-400 hover:bg-dark-card transition-colors w-full"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm text-neutral-400 hover:text-white hover:bg-dark-card transition-colors mt-1"
        >
          <Eye className="w-4 h-4" />
          <span>View Website</span>
        </Link>
      </div>
    </aside>
  );
}
