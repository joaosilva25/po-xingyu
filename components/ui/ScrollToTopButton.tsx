"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

type ScrollToTopButtonProps = {
  threshold?: number;
  className?: string;
};

export const ScrollToTopButton = ({
  threshold = 360,
  className,
}: ScrollToTopButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return (
    <button
      type="button"
      aria-label="Voltar ao topo"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-6 right-6 z-50 inline-flex h-11 w-11 items-center justify-center cursor-pointer rounded-full border border-white/15 bg-black/45 text-white/90 backdrop-blur-xl shadow-[0_16px_40px_-24px_rgba(0,0,0,0.7)] transition-all duration-300 hover:bg-white hover:text-zinc-900",
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0",
        className
      )}
    >
      <ArrowUp className="h-4.5 w-4.5" strokeWidth={2} />
    </button>
  );
};

