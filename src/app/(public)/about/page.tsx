import { Metadata } from "next";
import { Sparkles, Target, Shield } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import GoldDivider from "@/components/ui/GoldDivider";

export const metadata: Metadata = {
  title: "About Us | Elite Illuminati Official",
  description: "Discover the history, mission, and philosophy of Elite Illuminati Official. Founded in 1776, we unite exceptional minds in the pursuit of knowledge and human advancement.",
};

const timeline = [
  { year: "1776", title: "The Founding", description: "The Order is established in Ingolstadt, Bavaria, with the goal of promoting rational thought and opposing superstition." },
  { year: "1785", title: "The Dissolution", description: "The Bavarian government officially bans the Order. Members disperse across Europe, carrying the flame of enlightenment with them." },
  { year: "1800s", title: "The Shadow Era", description: "The Order operates in complete secrecy, with members embedded in the intellectual and political movements shaping the modern world." },
  { year: "1900s", title: "Global Expansion", description: "As the world becomes interconnected, the Order expands its reach across continents, adapting to the new age while preserving its core principles." },
  { year: "Present", title: "The Digital Age", description: "The Order embraces modern technology to connect members worldwide while maintaining the sacred traditions that define us." },
];

const missionPillars = [
  { title: "Enlightenment", description: "Freeing humanity from the chains of ignorance through the pursuit of absolute truth.", icon: Sparkles },
  { title: "Unity", description: "Building bridges between nations, cultures, and disciplines to advance our collective potential.", icon: Target },
  { title: "Stewardship", description: "Guiding the course of human progress with wisdom, patience, and foresight.", icon: Shield },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-navy via-dark-bg to-dark-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.04)_0%,transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white tracking-wider mb-6">
            Our Legacy
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            A history spanning centuries. A purpose that transcends time.
          </p>
          <div className="mt-8 w-24 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />
        </div>
      </section>

      {/* Origins */}
      <AnimatedSection className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Our Origins" />
          <div className="prose prose-invert max-w-none">
            <p className="text-neutral-300 text-lg leading-relaxed">
              On May 1, 1776, in the halls of Ingolstadt, Bavaria, a group of extraordinary minds gathered with a radical vision: to create a society dedicated to the advancement of human knowledge, free from the constraints of dogma, superstition, and tyranny.
            </p>
            <p className="text-neutral-300 text-lg leading-relaxed mt-4">
              Founded by Adam Weishaupt, a professor of natural and canon law, the Order of the Illuminati was born not from darkness, but from light — the light of reason, truth, and boundless human potential.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <GoldDivider />

      {/* Mission */}
      <AnimatedSection className="py-24 px-4 bg-dark-surface">
        <div className="max-w-6xl mx-auto">
          <SectionHeading 
            title="Our Mission" 
            subtitle="We exist to unite the most exceptional minds across every discipline and border."
          />
          <p className="text-center text-neutral-300 text-lg max-w-3xl mx-auto mb-12">
            Our mission is threefold: to preserve ancient wisdom that would otherwise be lost to time, to cultivate new knowledge that propels civilization forward, and to ensure that the forces of enlightenment prevail over ignorance in every generation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missionPillars.map((pillar) => (
              <div key={pillar.title} className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full border border-gold-500/30 flex items-center justify-center mb-4">
                  <pillar.icon className="w-7 h-7 text-gold-500" />
                </div>
                <h3 className="font-heading text-xl text-white mb-3">{pillar.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Philosophy */}
      <AnimatedSection className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Our Philosophy" />
          <p className="text-neutral-300 text-lg leading-relaxed mb-6">
            We believe that knowledge is the ultimate form of power — not power over others, but the power to transform oneself and, in doing so, transform the world.
          </p>
          <p className="text-neutral-300 text-lg leading-relaxed">
            Our philosophy holds that every individual contains within them the seed of greatness, waiting only for the proper conditions to flourish. The Order provides those conditions: mentorship, access to ancient and modern wisdom, and a community of peers who challenge and elevate one another.
          </p>
        </div>
      </AnimatedSection>

      {/* Timeline */}
      <AnimatedSection className="py-24 px-4 bg-dark-surface">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="A Journey Through Time" />
          <div className="space-y-0">
            {timeline.map((event) => (
              <div key={event.year} className="relative pl-8 pb-12 last:pb-0 border-l border-dark-border">
                <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-gold-500 border-2 border-dark-bg" />
                <div className="ml-4">
                  <span className="text-gold-500 font-heading text-lg">{event.year}</span>
                  <h3 className="text-white text-xl font-medium mt-1 mb-2">{event.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Why We Exist */}
      <AnimatedSection className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading title="Why We Exist" />
          <p className="text-neutral-300 text-lg leading-relaxed">
            In an age of information overload and spiritual poverty, the need for an organization like ours has never been greater. We exist because humanity deserves guides — not rulers, but illuminators. We exist because the greatest truths are not found on the surface, but in the depths that only the dedicated can reach. We exist because the future belongs to those bold enough to shape it.
          </p>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="py-24 px-4 bg-dark-surface">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            Ready to Learn More?
          </h2>
          <p className="text-neutral-400 text-lg mb-8">
            The path to understanding begins with a single step.
          </p>
          <Button variant="primary" size="lg" href="/beliefs">
            Explore Our Beliefs
          </Button>
        </div>
      </AnimatedSection>
    </>
  );
}
