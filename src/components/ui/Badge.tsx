import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "success" | "warning";
  className?: string;
}

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-dark-surface text-neutral-300 border-dark-border",
    gold: "bg-gold-500/10 text-gold-500 border-gold-500/30",
    success: "bg-green-500/10 text-green-400 border-green-500/30",
    warning: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
  };

  return (
    <span className={cn("inline-flex items-center px-2.5 py-0.5 text-xs font-medium border rounded-sm", variants[variant], className)}>
      {children}
    </span>
  );
}
