"use client";

import { cn } from "@/lib/utils";

interface XingyuBackgroundProps {
  className?: string;
  variant?: "hero" | "section";
  imageSrc?: string;
  imageOpacity?: number;
}

const variants = {
  hero: {
    backgroundImage: [
      "radial-gradient(92% 78% at 50% 54%, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.78) 38%, rgba(0,0,0,0.34) 66%, rgba(0,0,0,0) 84%)",
      "radial-gradient(150% 120% at 0% 0%, rgba(147,105,198,0.62) 0%, rgba(147,105,198,0.28) 34%, rgba(147,105,198,0) 74%)",
      "radial-gradient(160% 130% at 100% 0%, rgba(147,105,198,0.46) 0%, rgba(147,105,198,0.22) 38%, rgba(147,105,198,0) 76%)",
      "radial-gradient(150% 120% at 0% 100%, rgba(82,191,248,0.50) 0%, rgba(82,191,248,0.20) 40%, rgba(82,191,248,0) 78%)",
      "radial-gradient(160% 130% at 100% 100%, rgba(147,105,198,0.62) 0%, rgba(147,105,198,0.26) 42%, rgba(147,105,198,0) 80%)",
      "radial-gradient(110% 70% at 50% 0%, rgba(147,105,198,0.18) 0%, rgba(147,105,198,0.07) 46%, rgba(147,105,198,0) 78%)",
      "radial-gradient(110% 70% at 50% 100%, rgba(147,105,198,0.16) 0%, rgba(147,105,198,0.06) 52%, rgba(147,105,198,0) 84%)",
      "radial-gradient(90% 90% at 45% 52%, rgba(82,191,248,0.08) 0%, rgba(82,191,248,0.03) 34%, rgba(82,191,248,0) 64%)",
      "radial-gradient(130% 120% at 50% 52%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.40) 56%, rgba(0,0,0,0.86) 100%)",
      "linear-gradient(180deg, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.12) 30%, rgba(0,0,0,0.58) 100%)",
    ].join(", "),
    bottomFade: "h-54",
  },
  section: {
    backgroundImage: [
      "radial-gradient(92% 78% at 50% 54%, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.74) 40%, rgba(0,0,0,0.32) 68%, rgba(0,0,0,0) 86%)",
      "radial-gradient(150% 120% at 0% 0%, rgba(147,105,198,0.46) 0%, rgba(147,105,198,0.20) 36%, rgba(147,105,198,0) 76%)",
      "radial-gradient(160% 130% at 100% 0%, rgba(147,105,198,0.34) 0%, rgba(147,105,198,0.16) 40%, rgba(147,105,198,0) 78%)",
      "radial-gradient(150% 120% at 0% 100%, rgba(82,191,248,0.34) 0%, rgba(82,191,248,0.14) 42%, rgba(82,191,248,0) 80%)",
      "radial-gradient(160% 130% at 100% 100%, rgba(147,105,198,0.44) 0%, rgba(147,105,198,0.18) 44%, rgba(147,105,198,0) 82%)",
      "radial-gradient(110% 70% at 50% 0%, rgba(147,105,198,0.12) 0%, rgba(147,105,198,0.05) 48%, rgba(147,105,198,0) 80%)",
      "radial-gradient(110% 70% at 50% 100%, rgba(147,105,198,0.10) 0%, rgba(147,105,198,0.04) 54%, rgba(147,105,198,0) 86%)",
      "radial-gradient(90% 90% at 45% 52%, rgba(82,191,248,0.06) 0%, rgba(82,191,248,0.02) 36%, rgba(82,191,248,0) 66%)",
      "radial-gradient(130% 120% at 50% 52%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.30) 60%, rgba(0,0,0,0.72) 100%)",
      "linear-gradient(180deg, rgba(8,10,12,0.26) 0%, rgba(8,10,12,0.10) 34%, rgba(8,10,12,0.32) 100%)",
    ].join(", "),
    bottomFade: "h-44",
  },
} as const;

export const XingyuBackground = ({
  className,
  variant = "hero",
  imageSrc,
  imageOpacity = 0.3,
}: XingyuBackgroundProps) => {
  const styles = variants[variant];

  return (
    <div
      aria-hidden="true"
      className={cn("absolute inset-0 z-0 overflow-hidden pointer-events-none", className)}
    >
      {imageSrc ? (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${imageSrc}')`,
            opacity: imageOpacity,
            filter: "grayscale(1) saturate(0.9) contrast(1.05) brightness(0.92)",
          }}
        />
      ) : null}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: imageSrc ? "rgba(11,13,14,0.45)" : "#0b0d0e",
          backgroundImage: styles.backgroundImage,
          backgroundRepeat: "no-repeat",
          opacity: imageSrc ? 0.78 : 1,
          WebkitMaskImage:
            variant === "section"
              ? "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)"
              : undefined,
          maskImage:
            variant === "section"
              ? "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)"
              : undefined,
        }}
      />
      {variant === "hero" ? (
        <div
          className={cn(
            "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-[#0a0c0d]/80 to-transparent",
            styles.bottomFade
          )}
        />
      ) : null}
    </div>
  );
};
