"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Beliefs", href: "/beliefs" },
  { label: "Join", href: "/join" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/90 backdrop-blur-md border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Eye className="w-6 h-6 text-gold-500 transition-transform group-hover:scale-110" />
            <span className="font-heading text-lg text-white tracking-wider">
              Elite Illuminati
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-300 hover:text-gold-500 transition-colors duration-200 tracking-wide uppercase"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/join"
              className="ml-4 px-5 py-2 bg-gold-500 text-dark-bg text-sm font-medium rounded-sm hover:bg-gold-400 transition-colors duration-200 tracking-wide"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-neutral-300 hover:text-gold-500 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 bg-dark-surface border-t border-dark-border",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-neutral-300 hover:text-gold-500 hover:bg-dark-card rounded-sm transition-colors tracking-wide"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/join"
            onClick={() => setIsOpen(false)}
            className="block mt-2 px-4 py-3 bg-gold-500 text-dark-bg text-center font-medium rounded-sm"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
