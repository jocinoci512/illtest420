import { Eye, Compass, Crown, Infinity, ArrowRight, Quote } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

const pillars = [
  {
    title: "Omniscience",
    description: "True power lies in knowledge. We seek understanding that transcends ordinary perception, illuminating truths hidden from the uninitiated.",
    icon: Eye,
  },
  {
    title: "Strategy",
    description: "Every great civilization was built upon the foundations of careful planning. We think in centuries, not moments.",
    icon: Compass,
  },
  {
    title: "Influence",
    description: "The greatest changes are those made silently. We guide the currents of history with precision and purpose.",
    icon: Crown,
  },
  {
    title: "Perpetuity",
    description: "While others fade, we endure. Our legacy spans generations, each building upon the wisdom of those who came before.",
    icon: Infinity,
  },
];

const testimonials = [
  {
    name: "Initiate A.R.",
    role: "Member since 2018",
    quote: "Joining the Order was the single most transformative decision of my life. The knowledge, the connections, the clarity — nothing in the outside world compares.",
  },
  {
    name: "Brother K.M.",
    role: "Member since 2015",
    quote: "I came seeking answers and found a brotherhood that challenges me to become the best version of myself every single day. The Order delivers what it promises.",
  },
  {
    name: "Sister V.L.",
    role: "Member since 2020",
    quote: "The wisdom I have gained through the Order has transformed not only my career but my entire understanding of what is possible. This is real enlightenment.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-navy via-dark-bg to-dark-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 border border-gold-500/30 rounded-full flex items-center justify-center">
              <Eye className="w-8 h-8 text-gold-500" />
            </div>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wider">
            The Order Awaits
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            For centuries, the most powerful minds have shaped civilization from the shadows. The time has come for you to see beyond the veil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href="/join">
              Begin Your Journey
            </Button>
            <Button variant="outline" size="lg" href="/about">
              Discover More
            </Button>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent" />
      </section>

      {/* Who We Are */}
      <AnimatedSection className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading 
            title="Who We Are" 
            subtitle="A legacy spanning centuries. A purpose that transcends time."
          />
          <p className="text-neutral-300 text-lg leading-relaxed mb-6">
            Founded in the Age of Enlightenment, Elite Illuminati Official represents the continuation of a timeless legacy. We are an assembly of visionaries, leaders, and seekers of truth united by a singular purpose: to illuminate the path of human progress through wisdom, influence, and unwavering commitment to excellence.
          </p>
          <p className="text-gold-500 font-heading text-xl italic">
            &ldquo;We do not follow the world. We shape it.&rdquo;
          </p>
        </div>
      </AnimatedSection>

      {/* Our Mission */}
      <AnimatedSection className="py-24 px-4 bg-dark-surface">
        <div className="max-w-6xl mx-auto">
          <SectionHeading 
            title="Our Mission" 
            subtitle="To cultivate a global network of enlightened minds committed to advancing human civilization."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              "Illuminate the path of human progress",
              "Unite exceptional minds across borders",
              "Preserve and advance sacred knowledge",
              "Guide civilization toward its highest potential",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
                <span className="text-neutral-300">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* The Four Pillars */}
      <AnimatedSection className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading 
            title="The Four Pillars" 
            subtitle="The foundations upon which our Order stands."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar) => (
              <Card key={pillar.title} className="text-center p-8">
                <div className="mb-4 mx-auto w-14 h-14 rounded-full border border-gold-500/30 flex items-center justify-center">
                  <pillar.icon className="w-6 h-6 text-gold-500" />
                </div>
                <h3 className="font-heading text-xl text-white mb-3">{pillar.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{pillar.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection className="py-24 px-4 bg-dark-surface">
        <div className="max-w-6xl mx-auto">
          <SectionHeading 
            title="Words from the Enlightened" 
            subtitle="Hear from those who have walked the path."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="relative p-8">
                <Quote className="w-8 h-8 text-gold-500/20 absolute top-4 right-4" />
                <p className="text-neutral-300 italic leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-dark-border pt-4">
                  <p className="text-white font-medium">{t.name}</p>
                  <p className="text-sm text-gold-500">{t.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Latest Insights (Blog Preview) */}
      <AnimatedSection className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading 
            title="Latest Insights" 
            subtitle="Wisdom from within the Order."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "The Power of Knowledge", category: "Knowledge", excerpt: "In an age where information is abundant yet wisdom remains scarce, the true seeker understands that knowledge is not merely the accumulation of facts." },
              { title: "Leadership in Uncertain Times", category: "Leadership", excerpt: "The twenty-first century presents challenges unprecedented in human history. For those trained in the ways of the Order, uncertainty is an opportunity." },
              { title: "The Sacred Bond of Brotherhood", category: "Brotherhood", excerpt: "In a world that increasingly isolates individuals, the ancient concept of brotherhood has never been more vital." },
            ].map((post) => (
              <Card key={post.title} className="p-0 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-dark-navy to-dark-card flex items-center justify-center">
                  <Eye className="w-12 h-12 text-gold-500/20" />
                </div>
                <div className="p-6">
                  <span className="text-xs text-gold-500 uppercase tracking-wider">{post.category}</span>
                  <h3 className="font-heading text-lg text-white mt-2 mb-3">{post.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{post.excerpt}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" href="/blog">
              View All Insights
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Newsletter */}
      <AnimatedSection className="py-24 px-4 bg-dark-surface">
        <div className="max-w-2xl mx-auto text-center">
          <SectionHeading 
            title="Stay Informed" 
            subtitle="Receive exclusive insights and announcements from the Order."
          />
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-dark-card border border-dark-border rounded-sm px-4 py-3 text-neutral-200 placeholder:text-neutral-500 focus:outline-none focus:border-gold-500/50"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gold-500 text-dark-bg font-medium rounded-sm hover:bg-gold-400 transition-colors shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </AnimatedSection>

      {/* Final CTA */}
      <AnimatedSection className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)]" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-5xl text-white mb-6">
            Your Awakening Begins Here
          </h2>
          <p className="text-neutral-400 text-lg mb-10 leading-relaxed">
            The path to enlightenment is not for everyone. But for those who are ready, the Order stands prepared to guide you into a world few have ever seen.
          </p>
          <Button variant="primary" size="lg" href="/join">
            Apply for Consideration
          </Button>
        </div>
      </AnimatedSection>
    </>
  );
}
