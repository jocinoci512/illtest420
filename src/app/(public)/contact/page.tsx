import { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Elite Illuminati Official",
  description: "Reach out to Elite Illuminati Official. We welcome sincere inquiries from those seeking truth, knowledge, and enlightenment.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-navy via-dark-bg to-dark-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.04)_0%,transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white tracking-wider mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            We welcome sincere inquiries from those seeking truth and enlightenment.
          </p>
          <div className="mt-8 w-24 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />
        </div>
      </section>

      {/* Form + Info */}
      <AnimatedSection className="py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="font-heading text-2xl text-white mb-2">Send a Message</h2>
            <p className="text-neutral-400 mb-8">
              Use the form below to reach our communications office. All messages are reviewed and responded to in the order they are received.
            </p>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="font-heading text-2xl text-white mb-6">Other Ways to Reach Us</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-gold-500/30 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-gold-500" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Email</h3>
                  <p className="text-neutral-400 text-sm">info@eliteilluminatiofficial.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-gold-500/30 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-gold-500" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Phone</h3>
                  <p className="text-neutral-400 text-sm">+1 (202) 555-0147</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-gold-500/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-gold-500" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Address</h3>
                  <p className="text-neutral-400 text-sm">600 14th Street NW, Suite 500<br />Washington, DC 20005</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-gold-500/30 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-gold-500" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Office Hours</h3>
                  <p className="text-neutral-400 text-sm">Monday through Friday<br />9:00 AM to 5:00 PM EST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
