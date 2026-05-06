import Link from "next/link";
import { Eye, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Beliefs", href: "/beliefs" },
  { label: "Join the Order", href: "/join" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-surface border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Eye className="w-6 h-6 text-gold-500" />
              <span className="font-heading text-lg text-white tracking-wider">
                Elite Illuminati
              </span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              A fraternal organization dedicated to enlightenment, knowledge, and the advancement of human potential. Founded in 1776.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-4 tracking-wide">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-gold-500 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-medium mb-4 tracking-wide">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                <span className="text-sm text-neutral-400">info@eliteilluminatiofficial.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                <span className="text-sm text-neutral-400">+1 (202) 555-0147</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                <span className="text-sm text-neutral-400">600 14th Street NW, Suite 500, Washington, DC 20005</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-medium mb-4 tracking-wide">Stay Informed</h4>
            <p className="text-sm text-neutral-400 mb-4">
              Receive exclusive insights from the Order.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-dark-card border border-dark-border rounded-sm px-3 py-2 text-sm text-neutral-200 placeholder:text-neutral-500 focus:outline-none focus:border-gold-500/50"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gold-500 text-dark-bg text-sm font-medium rounded-sm hover:bg-gold-400 transition-colors shrink-0"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-dark-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} Elite Illuminati Official. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-sm text-neutral-500 hover:text-gold-500 transition-colors">
              Privacy
            </Link>
            <Link href="/terms-conditions" className="text-sm text-neutral-500 hover:text-gold-500 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
