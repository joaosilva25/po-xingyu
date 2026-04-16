import { cn } from "@/lib/utils";

interface GlowProps {
  className?: string;
  variant?: "emerald" | "gold" | "white";
}

export const Glow = ({ className, variant = "emerald" }: GlowProps) => {
  const variants = {
    emerald: "bg-emerald-500/10",
    gold: "bg-[#d4af37]/10",
    white: "bg-white/5",
  };

  return (
    <div
      className={cn(
        "absolute rounded-full blur-[120px] pointer-events-none transition-opacity duration-1000",
        variants[variant],
        className
      )}
    />
  );
};
