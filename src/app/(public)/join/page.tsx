import { Metadata } from "next";
import { Check, ChevronDown } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import GoldDivider from "@/components/ui/GoldDivider";
import MembershipForm from "./MembershipForm";

export const metadata: Metadata = {
  title: "Join the Order | Elite Illuminati Official",
  description: "Apply for membership in Elite Illuminati Official. Learn about our application process, membership paths, and what the Order offers to those deemed ready.",
};

const tiers = [
  {
    name: "Neophyte",
    description: "The beginning of your journey.",
    features: [
      "Introductory knowledge materials",
      "Quarterly communications from the Order",
      "Access to foundational symbolism guide",
      "Invitation to local chapter gatherings",
      "Assignment of a personal mentor",
    ],
  },
  {
    name: "Illuminatus",
    description: "For those who have demonstrated commitment and growth.",
    features: [
      "All Neophyte privileges",
      "Advanced knowledge and teaching materials",
      "Invitation to annual Global Summit",
      "Direct mentorship from senior members",
      "Access to the Order network worldwide",
      "Priority consideration for leadership roles",
    ],
  },
  {
    name: "Master",
    description: "The highest level of initiation.",
    features: [
      "All Illuminatus privileges",
      "Private consultations with Order leadership",
      "Access to restricted archives and teachings",
      "Participation in strategic planning councils",
      "Eligibility for Elder Council nomination",
      "Legacy preservation and succession planning",
    ],
  },
];

const steps = [
  { number: 1, title: "Submit Your Application", description: "Complete the application form below with honest and thoughtful responses. The Council values authenticity above all." },
  { number: 2, title: "Application Review", description: "Your application will be reviewed by the Council of Elders. This process typically requires four to six weeks." },
  { number: 3, title: "Background Evaluation", description: "Approved candidates proceed to a thorough evaluation of character, accomplishments, and potential contribution to the Order." },
  { number: 4, title: "Council Interview", description: "Select candidates will be invited to a private interview with current members to assess alignment with our values and vision." },
  { number: 5, title: "Initiation", description: "Accepted candidates receive their formal invitation and begin their journey within the Order through a private initiation." },
];

const faqs = [
  { q: "How do I join Elite Illuminati Official?", a: "Membership begins with submitting an application through our website. All applications are reviewed by the Council of Elders. Acceptance is based on character, ambition, and alignment with our principles." },
  { q: "Is there a fee to apply?", a: "There is no fee to submit an application. The application process is free and open to all sincere seekers." },
  { q: "How long does the application review take?", a: "The initial review typically requires four to six weeks. Candidates who advance to further stages will be contacted directly." },
  { q: "Is membership guaranteed after applying?", a: "No. Membership is selective and not guaranteed. The Order accepts only those deemed ready and aligned with our values. All decisions are final." },
  { q: "What are the benefits of membership?", a: "Members gain access to exclusive knowledge, personal mentorship, a global network of accomplished individuals, private events, and resources for personal and professional growth." },
  { q: "Can I remain anonymous as a member?", a: "We respect the privacy of all members. Your membership status is confidential and will never be disclosed without your explicit consent." },
];

export default function JoinPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-navy via-dark-bg to-dark-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.04)_0%,transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white tracking-wider mb-6">
            Join the Order
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Membership is by invitation and application only. Only those deemed ready will be considered.
          </p>
          <div className="mt-8 w-24 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />
        </div>
      </section>

      {/* Overview */}
      <AnimatedSection className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading title="Membership Overview" />
          <p className="text-neutral-300 text-lg leading-relaxed mb-6">
            Joining Elite Illuminati Official is not a transaction — it is a transformation. Membership in the Order is extended to individuals who demonstrate exceptional character, ambition, intellectual curiosity, and alignment with our core principles. We do not accept all who apply. Every application undergoes rigorous review by our Council of Elders.
          </p>
          <div className="p-4 border border-gold-500/20 bg-gold-500/5 rounded-sm">
            <p className="text-gold-500 text-sm">
              Submission of an application does not guarantee acceptance. All candidates are evaluated based on merit, character, and readiness.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Membership Tiers */}
      <AnimatedSection className="py-24 px-4 bg-dark-surface">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Paths of Initiation" subtitle="Each path represents a deeper level of commitment and access within the Order." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier, i) => (
              <Card key={tier.name} className={`p-8 ${i === 1 ? 'border-gold-500/30 gold-glow' : ''}`}>
                <h3 className="font-heading text-2xl text-white mb-2">{tier.name}</h3>
                <p className="text-neutral-400 text-sm mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                      <span className="text-neutral-300 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#application"
                  className="block text-center px-4 py-2.5 border border-gold-500/30 text-gold-500 text-sm rounded-sm hover:bg-gold-500/10 transition-colors"
                >
                  Apply for Consideration
                </a>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Process Steps */}
      <AnimatedSection className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="The Application Process" subtitle="A careful, deliberate path to membership." />
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-4 items-start">
                <div className="shrink-0 w-10 h-10 rounded-full border border-gold-500/30 flex items-center justify-center">
                  <span className="text-gold-500 font-heading text-sm">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">{step.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits */}
      <AnimatedSection className="py-24 px-4 bg-dark-surface">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="What Membership Offers" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Access to exclusive knowledge and teachings",
              "Personal mentorship from senior members",
              "Global network of accomplished individuals",
              "Invitations to private gatherings and summits",
              "Resources for personal and professional growth",
              "Guidance on wealth creation and preservation",
              "Brotherhood and lifelong connections",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-3">
                <Check className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
                <span className="text-neutral-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ */}
      <AnimatedSection className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-dark-card border border-dark-border rounded-sm">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none">
                  <span className="text-white font-medium pr-4">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-gold-500 shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-4">
                  <p className="text-neutral-400 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <GoldDivider />

      {/* Application Form */}
      <AnimatedSection id="application" className="py-24 px-4 bg-dark-surface">
        <div className="max-w-2xl mx-auto">
          <SectionHeading title="Submit Your Application" subtitle="Complete the form below to begin the consideration process. All fields are required." />
          <MembershipForm />
        </div>
      </AnimatedSection>
    </>
  );
}
