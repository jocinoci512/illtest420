"use client";

import { Check } from "lucide-react";
import Card from "@/components/ui/Card";

const tiers = [
  {
    name: "Neophyte",
    amount: "$5,000/year",
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
    amount: "$25,000/year",
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
    amount: "$250,000/year",
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

export default function TierCards() {
  function handleBeginInitiation(tierName: string, tierAmount: string) {
    // Dispatch a custom event so the form can pick up the selected tier
    window.dispatchEvent(
      new CustomEvent("tier-selected", { detail: { tier: tierName, amount: tierAmount } })
    );

    // Smooth scroll to the application form
    const formEl = document.getElementById("application");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {tiers.map((tier, i) => (
        <Card key={tier.name} className={`p-8 ${i === 1 ? "border-gold-500/30 gold-glow" : ""}`}>
          <h3 className="font-heading text-2xl text-white mb-1">{tier.name}</h3>
          <p className="text-gold-500 font-heading text-lg mb-2">{tier.amount}</p>
          <p className="text-neutral-400 text-sm mb-6">{tier.description}</p>
          <ul className="space-y-3 mb-8">
            {tier.features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                <span className="text-neutral-300 text-sm">{f}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={() => handleBeginInitiation(tier.name, tier.amount)}
            className="block w-full text-center px-4 py-2.5 bg-gold-500 text-dark-bg text-sm font-medium rounded-sm hover:bg-gold-400 transition-colors tracking-wide cursor-pointer"
          >
            BEGIN INITIATION
          </button>
        </Card>
      ))}
    </div>
  );
}
