import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({ title, subtitle, centered = true, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white tracking-wide">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-neutral-400 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
    </div>
  );
}
