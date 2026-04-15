"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export const Section = ({ children, className, id, dark = false }: SectionProps) => (
  <section
    id={id}
    className={cn(
      "relative w-full overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16",
      dark ? "bg-[#050505]" : "bg-[#080808]",
      className
    )}
  >
    {children}
  </section>
);

export const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("relative z-10 mx-auto w-full max-w-7xl", className)}>
    {children}
  </div>
);

export const Card = ({ children, className, hoverEffect = true }: { children: React.ReactNode; className?: string; hoverEffect?: boolean }) => (
  <div
    className={cn(
      "relative p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.08] backdrop-blur-xl overflow-hidden transition-all duration-500",
      hoverEffect && "hover:border-[#d4af37]/30 hover:shadow-[0_40px_100px_-30px_rgba(212,175,55,0.1)]",
      className
    )}
  >
    {children}
  </div>
);
