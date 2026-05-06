"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, href, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-sm tracking-wide";
    
    const variants = {
      primary: "bg-gold-500 text-dark-bg hover:bg-gold-400 gold-glow hover:gold-glow-strong",
      secondary: "bg-dark-card text-gold-500 border border-gold-500/30 hover:border-gold-500 hover:bg-dark-surface",
      outline: "border border-gold-500/50 text-gold-500 hover:bg-gold-500/10 hover:border-gold-500",
      ghost: "text-neutral-300 hover:text-gold-500 hover:bg-dark-card",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
    };

    if (href) {
      return (
        <a
          href={href}
          className={cn(baseStyles, variants[variant], sizes[size], className)}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
