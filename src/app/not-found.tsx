import Link from "next/link";
import { Eye } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-dark-bg">
      <div className="text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 rounded-full border border-gold-500/20 flex items-center justify-center">
            <Eye className="w-10 h-10 text-gold-500/40" />
          </div>
        </div>
        <h1 className="font-display text-6xl md:text-8xl text-gold-500/20 mb-4">404</h1>
        <h2 className="font-heading text-2xl text-white mb-4">Page Not Found</h2>
        <p className="text-neutral-400 mb-8 max-w-md mx-auto">
          The page you seek does not exist — or perhaps it is simply hidden from those not yet ready to see.
        </p>
        <Button variant="primary" href="/">
          Return Home
        </Button>
      </div>
    </div>
  );
}
