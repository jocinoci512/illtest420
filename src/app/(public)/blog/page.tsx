import { Metadata } from "next";
import Link from "next/link";
import { Eye, Calendar, User } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Insights & Wisdom | Elite Illuminati Official Blog",
  description: "Read the latest insights, teachings, and wisdom from Elite Illuminati Official. Knowledge shared for seekers of truth.",
};

const posts = [
  {
    slug: "the-power-of-knowledge",
    title: "The Power of Knowledge: Why the Enlightened Never Stop Learning",
    excerpt: "In an age where information is abundant yet wisdom remains scarce, the true seeker understands that knowledge is not merely the accumulation of facts.",
    category: "Knowledge",
    author: "Elite Illuminati Official",
    date: "2024-12-01",
  },
  {
    slug: "leadership-in-uncertain-times",
    title: "Leadership in Uncertain Times: Lessons from the Order",
    excerpt: "The twenty-first century presents challenges unprecedented in human history. For those trained in the ways of the Order, uncertainty is not a threat — it is an opportunity.",
    category: "Leadership",
    author: "Elite Illuminati Official",
    date: "2024-11-25",
  },
  {
    slug: "the-meaning-of-brotherhood",
    title: "The Sacred Bond: Understanding Brotherhood in the Order",
    excerpt: "In a world that increasingly isolates individuals, the ancient concept of brotherhood has never been more vital. Within Elite Illuminati Official, brotherhood is a living covenant.",
    category: "Brotherhood",
    author: "Elite Illuminati Official",
    date: "2024-11-18",
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-navy via-dark-bg to-dark-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.04)_0%,transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white tracking-wider mb-6">
            Insights & Wisdom
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Knowledge shared for seekers of truth.
          </p>
          <div className="mt-8 w-24 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />
        </div>
      </section>

      {/* Blog Grid */}
      <AnimatedSection className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="h-full p-0 overflow-hidden group">
                  <div className="h-48 bg-gradient-to-br from-dark-navy to-dark-card flex items-center justify-center">
                    <Eye className="w-12 h-12 text-gold-500/20 group-hover:text-gold-500/40 transition-colors" />
                  </div>
                  <div className="p-6">
                    <Badge variant="gold">{post.category}</Badge>
                    <h2 className="font-heading text-lg text-white mt-3 mb-3 group-hover:text-gold-500 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-neutral-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
