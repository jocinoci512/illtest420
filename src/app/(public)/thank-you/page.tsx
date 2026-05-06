import { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Thank You | Elite Illuminati Official",
  description: "Your submission has been received. The Order values every sincere inquiry.",
};

export default function ThankYouPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-lg mx-auto text-center">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 rounded-full border border-gold-500/30 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-gold-500" />
          </div>
        </div>
        <h1 className="font-heading text-3xl md:text-4xl text-white mb-4">
          Thank You
        </h1>
        <p className="text-neutral-400 text-lg leading-relaxed mb-8">
          Your submission has been received. Our team will review your message and respond in due course. The Order values every sincere inquiry.
        </p>
        <Button variant="primary" href="/">
          Return to Homepage
        </Button>
      </div>
    </section>
  );
}
