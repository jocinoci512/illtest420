import { Metadata } from "next";
import { Eye, Target, Globe, Infinity, Scale, Sun } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import GoldDivider from "@/components/ui/GoldDivider";

export const metadata: Metadata = {
  title: "Our Beliefs | Elite Illuminati Official",
  description: "Explore the core principles and philosophy of Elite Illuminati Official. Omniscience, strategic influence, global stewardship, and enlightenment guide everything we do.",
};

const principles = [
  { title: "Omniscience", description: "The relentless pursuit of knowledge in all its forms. We believe that true understanding requires seeing beyond the surface of things, questioning every assumption, and seeking wisdom wherever it may be found.", icon: Eye },
  { title: "Strategic Influence", description: "The power to shape events lies not in force, but in foresight. We cultivate the ability to see patterns, anticipate change, and position ourselves to guide outcomes toward the greater good.", icon: Target },
  { title: "Global Stewardship", description: "We are custodians of human progress. Our responsibility extends beyond borders and generations — we act today with the welfare of tomorrow in mind.", icon: Globe },
  { title: "Perpetual Existence", description: "Ideas are immortal. The Order endures because its purpose transcends any single generation. We build upon the work of those before us and plant seeds for those who will follow.", icon: Infinity },
  { title: "Balance of Power", description: "True stability requires equilibrium. We work to ensure that no single force — whether political, economic, or ideological — dominates unchecked.", icon: Scale },
  { title: "Enlightenment", description: "The ultimate goal of all our efforts: to bring light where there is darkness, clarity where there is confusion, and truth where there is deception.", icon: Sun },
];

const knowledgeAreas = [
  "Sacred Geometry & Symbolism",
  "Philosophy & Ethics",
  "Leadership & Governance",
  "Economics & Wealth Creation",
  "Science & Technology",
  "Human Psychology & Potential",
];

export default function BeliefsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-navy via-dark-bg to-dark-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.04)_0%,transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white tracking-wider mb-6">
            Our Beliefs
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            The principles that have guided the Order for over two centuries.
          </p>
          <div className="mt-8 w-24 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />
        </div>
      </section>

      {/* Core Principles */}
      <AnimatedSection className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading 
            title="Core Principles" 
            subtitle="These six pillars form the foundation of everything we believe and everything we do."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((p) => (
              <Card key={p.title} className="p-8">
                <div className="w-12 h-12 rounded-full border border-gold-500/30 flex items-center justify-center mb-4">
                  <p.icon className="w-5 h-5 text-gold-500" />
                </div>
                <h3 className="font-heading text-xl text-white mb-3">{p.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{p.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Knowledge */}
      <AnimatedSection className="py-24 px-4 bg-dark-surface">
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            title="The Pursuit of Knowledge" 
            subtitle="We believe that knowledge is sacred."
          />
          <p className="text-neutral-300 text-lg leading-relaxed mb-8 text-center">
            Not merely academic learning, but deep understanding — the kind that transforms perception and empowers action. Our members study not just what is known, but seek to discover what remains hidden. From ancient mystery traditions to cutting-edge scientific research, we embrace all paths to truth.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {knowledgeAreas.map((area) => (
              <div key={area} className="flex items-center gap-3 p-4 bg-dark-card border border-dark-border rounded-sm">
                <div className="w-2 h-2 bg-gold-500 rounded-full shrink-0" />
                <span className="text-neutral-300 text-sm">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Brotherhood */}
      <AnimatedSection className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Brotherhood & Unity" />
          <p className="text-neutral-300 text-lg leading-relaxed text-center">
            No individual, however gifted, can achieve true greatness in isolation. The Order provides a brotherhood — a network of exceptional minds united by shared purpose. Within our ranks, there are no divisions of nation, race, or creed. There is only the shared pursuit of excellence and the mutual commitment to one another&apos;s growth.
          </p>
        </div>
      </AnimatedSection>

      <GoldDivider />

      {/* Leadership */}
      <AnimatedSection className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Enlightened Leadership" />
          <p className="text-neutral-300 text-lg leading-relaxed text-center">
            We believe the world needs leaders who think beyond the next election cycle or quarterly report. Our members are trained to think in terms of decades and centuries — to consider the long-term consequences of every decision and to lead with wisdom rather than impulse. True leadership is service: service to truth, to progress, and to humanity.
          </p>
        </div>
      </AnimatedSection>

      {/* Wealth & Growth */}
      <AnimatedSection className="py-24 px-4 bg-dark-surface">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Wealth & Abundance" />
          <p className="text-neutral-300 text-lg leading-relaxed text-center">
            We do not view wealth as an end in itself, but as a tool for creating lasting change. Financial abundance, properly directed, can fund research, education, infrastructure, and initiatives that elevate entire communities. Our members are taught to create value, build sustainable wealth, and deploy resources with strategic purpose.
          </p>
        </div>
      </AnimatedSection>

      {/* Modern Purpose + CTA */}
      <AnimatedSection className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading title="Our Purpose in the Modern Age" />
          <p className="text-neutral-300 text-lg leading-relaxed mb-10">
            The challenges of the twenty-first century demand a new kind of leadership. In an era of unprecedented technological change, geopolitical complexity, and existential risk, the world needs organizations capable of long-term thinking and decisive action. The Order stands ready — as it has for centuries — to guide humanity through uncertainty toward a brighter future.
          </p>
          <Button variant="primary" size="lg" href="/join">
            Begin Your Application
          </Button>
        </div>
      </AnimatedSection>
    </>
  );
}
