import { Metadata } from "next";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Eye } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

// Mock blog posts data
const posts: Record<string, any> = {
  "the-power-of-knowledge": {
    title: "The Power of Knowledge: Why the Enlightened Never Stop Learning",
    body: `<p>In an age where information is abundant yet wisdom remains scarce, the true seeker understands that knowledge is not merely the accumulation of facts. It is the transformation of understanding into action, of data into insight, of learning into power.</p><p>The founders of our Order recognized this truth over two centuries ago. Adam Weishaupt wrote that &ldquo;the most perfect government would be that which would lead all men to that state in which they could govern themselves.&rdquo; This self-governance begins with self-knowledge — and self-knowledge requires relentless, disciplined study.</p><p>Today, as our members span every continent and discipline, this principle remains unchanged. Whether studying quantum physics or ancient philosophy, our members share a common trait: the refusal to accept the surface of things as the whole truth.</p><h2>The Three Levels of Knowledge</h2><p>Within the Order, we teach that knowledge operates on three distinct levels:</p><p><strong>Surface Knowledge</strong> — what the world presents to the casual observer. This is the realm of headlines, popular opinion, and conventional wisdom.</p><p><strong>Structural Knowledge</strong> — understanding the systems, patterns, and forces that create surface-level reality. This is where strategy lives.</p><p><strong>Essential Knowledge</strong> — the deepest truths about nature, humanity, and existence itself. This is the domain of the enlightened.</p><p>Most people never progress beyond the first level. Members of the Order are trained to operate at all three simultaneously.</p><h2>Your Path Forward</h2><p>Begin today. Choose a subject that calls to you — one that frightens you with its depth. Read widely. Question everything. Seek teachers who challenge rather than comfort you. This is the way of the enlightened.</p>`,
    category: "Knowledge",
    author: "Elite Illuminati Official",
    date: "2024-12-01",
    seo_description: "Discover why the enlightened never stop learning. Explore the three levels of knowledge taught within Elite Illuminati Official.",
  },
  "leadership-in-uncertain-times": {
    title: "Leadership in Uncertain Times: Lessons from the Order",
    body: `<p>The twenty-first century presents challenges unprecedented in human history. Climate instability, technological disruption, geopolitical fragmentation, and social upheaval test the limits of conventional leadership. Yet for those trained in the ways of the Order, uncertainty is not a threat — it is an opportunity.</p><p>For over two hundred years, our members have navigated periods of radical change. From the upheavals of the French Revolution to the dawn of the nuclear age, from the fall of empires to the rise of the digital world, the Order has adapted, guided, and endured.</p><h2>Principles of Enlightened Leadership</h2><p><strong>Think in Centuries</strong> — Short-term thinking is the enemy of true progress. The enlightened leader considers not just the immediate impact of decisions, but their consequences across generations.</p><p><strong>Embrace Complexity</strong> — The world is not simple, and those who seek simple answers will always be outmaneuvered by those who understand nuance. Embrace paradox. Hold multiple truths simultaneously.</p><p><strong>Lead from Within</strong> — The most powerful leaders are those who have mastered themselves before attempting to guide others. Self-discipline, self-awareness, and self-honesty are prerequisites for all external influence.</p><p><strong>Build Networks, Not Hierarchies</strong> — Rigid structures break under pressure. The Order endures because it is a network — flexible, distributed, and resilient. Build your organizations the same way.</p><h2>The Call to Lead</h2><p>If you feel the pull of leadership — not for ego, but for purpose — the Order may have a place for you. True leaders do not seek power for its own sake. They accept the burden of responsibility because they understand that the alternative — leaving the future to chance — is unacceptable.</p>`,
    category: "Leadership",
    author: "Elite Illuminati Official",
    date: "2024-11-25",
    seo_description: "Explore timeless leadership principles from Elite Illuminati Official. Learn how enlightened leaders navigate complexity.",
  },
  "the-meaning-of-brotherhood": {
    title: "The Sacred Bond: Understanding Brotherhood in the Order",
    body: `<p>In a world that increasingly isolates individuals behind screens and algorithms, the ancient concept of brotherhood has never been more vital. Within Elite Illuminati Official, brotherhood is not merely a word — it is a living covenant between members that transcends ordinary friendship.</p><p>When you enter the Order, you enter a network of individuals who are genuinely invested in your growth, your success, and your awakening. This is not networking in the corporate sense. It is something far deeper: a mutual commitment to one another&rsquo;s evolution.</p><h2>What Brotherhood Means Within the Order</h2><p><strong>Accountability</strong> — Your brothers and sisters hold you to the highest standard. Not to judge, but to ensure you become everything you are capable of becoming.</p><p><strong>Support</strong> — In moments of difficulty, you are never alone. The Order rallies around its members in times of need — not with empty words, but with tangible action.</p><p><strong>Challenge</strong> — Comfort breeds mediocrity. Within the Order, you will be challenged intellectually, spiritually, and practically. This is done with love, but without mercy for complacency.</p><p><strong>Confidentiality</strong> — What is shared within the brotherhood stays within the brotherhood. This creates a space of absolute trust where true vulnerability and growth become possible.</p><h2>Beyond Borders</h2><p>Our brotherhood spans every continent, every culture, and every background. Within these walls, there are no strangers — only brothers and sisters united by purpose. This global family is perhaps the Order&rsquo;s greatest gift to its members.</p>`,
    category: "Brotherhood",
    author: "Elite Illuminati Official",
    date: "2024-11-18",
    seo_description: "Understand what true brotherhood means within Elite Illuminati Official. Discover the deep bonds that unite members across the globe.",
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Elite Illuminati Official`,
    description: post.seo_description,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="font-heading text-3xl text-white mb-4">Post Not Found</h1>
          <p className="text-neutral-400 mb-6">The article you are looking for does not exist.</p>
          <Button variant="outline" href="/blog">Return to Blog</Button>
        </div>
      </section>
    );
  }

  const relatedSlugs = Object.keys(posts).filter((s) => s !== slug).slice(0, 2);

  return (
    <>
      {/* Header */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-navy via-dark-bg to-dark-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.04)_0%,transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-neutral-400 hover:text-gold-500 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Blog</span>
          </Link>
          <Badge variant="gold">{post.category}</Badge>
          <h1 className="font-heading text-3xl md:text-5xl text-white mt-4 mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-sm text-neutral-400">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 px-4">
        <div
          className="max-w-3xl mx-auto prose prose-invert prose-lg prose-headings:font-heading prose-headings:text-white prose-p:text-neutral-300 prose-strong:text-white prose-a:text-gold-500"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
      </article>

      {/* Related Posts */}
      {relatedSlugs.length > 0 && (
        <section className="py-16 px-4 bg-dark-surface">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-2xl text-white mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {relatedSlugs.map((s) => (
                <Link key={s} href={`/blog/${s}`}>
                  <Card className="h-full p-0 overflow-hidden group">
                    <div className="h-32 bg-gradient-to-br from-dark-navy to-dark-card flex items-center justify-center">
                      <Eye className="w-8 h-8 text-gold-500/20" />
                    </div>
                    <div className="p-5">
                      <Badge variant="gold">{posts[s].category}</Badge>
                      <h3 className="font-heading text-lg text-white mt-2 group-hover:text-gold-500 transition-colors">
                        {posts[s].title}
                      </h3>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-neutral-400 mb-4">Seek deeper knowledge?</p>
          <Button variant="outline" href="/join">
            Apply for Membership
          </Button>
        </div>
      </section>
    </>
  );
}
