import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "bg-dark-card border border-dark-border rounded-sm p-6",
        hover && "transition-all duration-300 hover:border-gold-500/30 hover:gold-glow",
        className
      )}
    >
      {children}
    </div>
  );
}
