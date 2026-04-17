"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "dark";
  size?: "sm" | "md" | "lg" | "xl";
}

export const Button = ({
  children,
  className,
  variant = "primary",
  size = "lg",
  ...props
}: ButtonProps) => {
  const variants = {
    primary: "bg-white/95 hover:bg-white backdrop-blur-md text-zinc-900 border border-white/60 shadow-[0_0_0_1px_rgba(255,255,255,0.4),0_0_18px_rgba(255,255,255,0.2),0_0_40px_rgba(255,255,255,0.14)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.55),0_0_24px_rgba(255,255,255,0.3),0_0_56px_rgba(255,255,255,0.2)]",
    secondary: "bg-zinc-900/40 hover:bg-zinc-900/60 backdrop-blur-md text-white border border-white/10 shadow-[0_0_30px_-10px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)]",
    outline: "bg-transparent border border-white/20 text-white hover:bg-white/5 transition-colors duration-500",
    dark: "bg-[#0b0d0e] hover:bg-[#070809] text-white border border-[#0b0d0e] shadow-[0_20px_60px_-34px_rgba(11,13,14,0.8)]",
  };

  const sizes = {
    sm: "px-6 py-3 text-xs",
    md: "px-8 py-4 text-sm",
    lg: "px-10 py-5 text-sm md:text-base",
    xl: "px-12 py-5 md:py-6 text-base",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative inline-flex items-center justify-center gap-3 rounded-2xl font-medium uppercase tracking-[0.2em] transition-all cursor-pointer duration-500 overflow-hidden group",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {/* Subtle inner gradient for elegance */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <span className="relative z-10 flex items-center gap-3">
        {children}
      </span>
    </motion.button>
  );
};
