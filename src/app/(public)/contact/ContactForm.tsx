"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
      honeypot: formData.get("website") as string,
    };

    if (data.honeypot) {
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const result = await res.json();
        throw new Error(result.error || "Something went wrong");
      }

      setSuccess(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="text-center p-8 border border-gold-500/20 bg-gold-500/5 rounded-sm">
        <p className="text-gold-500 text-lg font-medium mb-2">Message Sent</p>
        <p className="text-neutral-400">Thank you for reaching out. We will respond to your inquiry in due course.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <Input name="name" label="Full Name" placeholder="Enter your full name" required />
      <Input name="email" label="Email Address" type="email" placeholder="Enter your email" required />
      <Input name="phone" label="Phone Number" placeholder="Enter your phone number" />
      <Textarea name="message" label="Your Message" placeholder="How can we help you?" rows={5} required />

      {error && (
        <div className="p-3 border border-red-500/30 bg-red-500/5 rounded-sm">
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
