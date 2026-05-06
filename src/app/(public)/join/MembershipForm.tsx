"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";

export default function MembershipForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      full_name: formData.get("full_name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      country: formData.get("country") as string,
      occupation: formData.get("occupation") as string,
      message: formData.get("message") as string,
      honeypot: formData.get("website") as string,
    };

    // Honeypot check
    if (data.honeypot) {
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const result = await res.json();
        throw new Error(result.error || "Something went wrong");
      }

      setSuccess(true);
      window.location.href = "/thank-you";
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="text-center p-8 border border-gold-500/20 bg-gold-500/5 rounded-sm">
        <p className="text-gold-500 text-lg">Your application has been submitted successfully.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot */}
      <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <Input name="full_name" label="Full Name" placeholder="Enter your full name" required />
      <Input name="email" label="Email Address" type="email" placeholder="Enter your email" required />
      <Input name="phone" label="Phone Number" placeholder="Enter your phone number" required />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input name="country" label="Country" placeholder="Your country" required />
        <Input name="occupation" label="Occupation" placeholder="Your occupation" required />
      </div>
      <Textarea
        name="message"
        label="Why do you wish to join the Order?"
        placeholder="Share your motivations, aspirations, and what you hope to contribute..."
        rows={5}
        required
      />

      {error && (
        <div className="p-3 border border-red-500/30 bg-red-500/5 rounded-sm">
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </Button>

      <p className="text-xs text-neutral-500 text-center">
        By submitting this form, you agree to our Privacy Policy and Terms &amp; Conditions.
      </p>
    </form>
  );
}
