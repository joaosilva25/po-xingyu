"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import React, { memo, useEffect, useMemo, useRef, useState } from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

const EASE_IN_OUT: [number, number, number, number] = [0.42, 0, 0.58, 1];

export const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
    transition: { duration: 0.72, ease: EASE_IN_OUT },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.72, ease: EASE_IN_OUT },
  },
  exit: {
    opacity: 0,
    y: 30,
    scale: 0.95,
    transition: { duration: 0.68, ease: EASE_IN_OUT },
  },
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.06,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.98,
    transition: { duration: 0.68, ease: EASE_IN_OUT },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.68, ease: EASE_IN_OUT },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.98,
    transition: { duration: 0.62, ease: EASE_IN_OUT },
  },
};

type IntersectionOptions = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
};

const useIntersectionInView = (options: IntersectionOptions) => {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(() => typeof IntersectionObserver === "undefined");

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === "undefined") return;

    let raf: number | null = null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (raf != null) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => setInView(entry.isIntersecting));
      },
      {
        root: options.root ?? null,
        rootMargin: options.rootMargin ?? "0px 0px -15% 0px",
        threshold: options.threshold ?? 0.2,
      }
    );

    observer.observe(element);
    return () => {
      if (raf != null) cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [options.root, options.rootMargin, options.threshold]);

  return { ref, inView };
};

const useThrottledScrollListener = (waitMs: number) => {
  useEffect(() => {
    let lastY = window.scrollY;
    let lastRun = 0;

    const onScroll = () => {
      const now = Date.now();
      if (now - lastRun < waitMs) return;
      lastRun = now;

      const currentY = window.scrollY;
      lastY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [waitMs]);
};

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

export const MotionContainer = memo(
  ({
    children,
    className,
    variants,
  }: {
    children: React.ReactNode;
    className?: string;
    variants?: Variants;
  }) => (
    <motion.div
      variants={variants}
      className={cn("relative z-10 mx-auto w-full max-w-7xl", className)}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  )
);
MotionContainer.displayName = "MotionContainer";

export const AnimatedSection = memo(
  ({
    children,
    className,
    id,
    dark = false,
    rootMargin,
    threshold,
  }: SectionProps & { rootMargin?: string; threshold?: number | number[] }) => {
    const prefersReducedMotion = useReducedMotion();
    const { ref, inView } = useIntersectionInView({ rootMargin, threshold });
    useThrottledScrollListener(120);

    const variants = useMemo(() => {
      if (!prefersReducedMotion) return sectionVariants;
      const instant = (v: unknown) => ({
        ...(v as Record<string, unknown>),
        transition: { duration: 0, ease: EASE_IN_OUT },
      });
      return {
        hidden: instant(sectionVariants.hidden),
        visible: instant(sectionVariants.visible),
        exit: instant(sectionVariants.exit),
      } satisfies Variants;
    }, [prefersReducedMotion]);

    return (
      <AnimatePresence initial={false}>
        <motion.section
          ref={ref}
          id={id}
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "exit"}
          exit="exit"
          className={cn(
            "relative w-full overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16",
            dark ? "bg-[#050505]" : "bg-[#080808]",
            className
          )}
          style={{ willChange: "transform, opacity" }}
        >
          {children}
        </motion.section>
      </AnimatePresence>
    );
  }
);
AnimatedSection.displayName = "AnimatedSection";

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
