import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        {label && (
          <label className="block text-sm font-medium text-neutral-300">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            "w-full bg-dark-surface border border-dark-border rounded-sm px-4 py-3 text-neutral-200 placeholder:text-neutral-500 transition-colors duration-200",
            "focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20",
            error && "border-red-500/50",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
