"use client";

import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Boxes, Gem, Megaphone, Rocket, TrendingUp } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  AnimatedSection,
  MotionContainer,
  staggerContainerVariants,
  staggerItemVariants,
} from "@/components/ui/Section";
import Image from "next/image";

const bonusItems = [
  {
    title: "Como aumentar sua margem de lucro comprando na Xingyu.",
    description:
      "Aprenda estratégias para comprar melhor e vender com mais previsibilidade.",
    Icon: TrendingUp,
  },
  {
    title: "Como montar kits para vender mais.",
    description:
      "Monte combinações que elevam ticket médio e aceleram o giro de estoque.",
    Icon: Boxes,
  },
  {
    title: "Como usar produtos para chamar atenção.",
    description:
      "Use peças de impacto para atrair olhares e gerar mais interesse imediato.",
    Icon: Megaphone,
  },
  {
    title: "Como usar produtos para fazer lançamentos.",
    description:
      "Crie lançamentos que aumentam desejo, urgência e taxa de conversão.",
    Icon: Rocket,
  },
] as const;

export const BonusSection = () => {
  const neonDuration = 3.2;
  const iconNeonDuration = 5.6;
  const [mobileEmblaRef, mobileEmblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const snapCount = bonusItems.length;

  const handleMobileCarouselSelect = useCallback(() => {
    if (!mobileEmblaApi) return;

    setSelectedIndex(mobileEmblaApi.selectedScrollSnap());
  }, [mobileEmblaApi]);

  useEffect(() => {
    if (!mobileEmblaApi) return;

    mobileEmblaApi.on("select", handleMobileCarouselSelect);
    mobileEmblaApi.on("reInit", handleMobileCarouselSelect);

    return () => {
      mobileEmblaApi.off("select", handleMobileCarouselSelect);
      mobileEmblaApi.off("reInit", handleMobileCarouselSelect);
    };
  }, [mobileEmblaApi, handleMobileCarouselSelect]);

  return (
    <AnimatedSection id="bonus" className="relative overflow-hidden bg-[#0d0f12] text-white">
                  <div className="absolute inset-0 z-0">
                    <Image
                      src="/imgE3.png"
                      alt=""
                      fill
                      className="object-cover opacity-[0.03]"
                      priority={false}
                      style={{
                        filter: "grayscale(1) saturate(0.9) contrast(1.05) brightness(0.92)",
                      }}
                    />
                  </div>
      <MotionContainer variants={staggerContainerVariants}>
        <motion.div
          variants={staggerItemVariants}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="mt-5 text-4xl font-regular leading-[1.05] tracking-tight text-white">
            Bônus para você
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-lg md:text-xl text-zinc-300 leading-relaxed">
            Você também terá acesso aos conteúdos estratégicos que separam quem
            vende por preço de quem vende com margem, posicionamento e
            previsibilidade.
          </p>
        </motion.div>

        <motion.div
          variants={staggerItemVariants}
          className="relative mt-16 overflow-hidden sm:rounded-[2rem] sm:p-8 lg:p-12"
        >
          <div className="relative hidden md:block">
            <div
              aria-hidden="true"
              className="bonusProgressLine absolute left-[12.5%] right-[12.5%] top-10 z-0 h-px"
            />
            <div
              aria-hidden="true"
              className="bonusProgressLineBlur absolute left-[12.5%] right-[12.5%] top-10 z-0 h-px blur-[1.5px]"
            />
            <motion.div
              aria-hidden="true"
              className="absolute top-10 z-0 h-[2px] w-20 -translate-y-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-white/0 via-white to-white/0 shadow-[0_0_18px_rgba(255,255,255,0.95)]"
              animate={{ left: ["12.5%", "87.5%"] }}
              transition={{
                duration: neonDuration,
                ease: "linear",
                repeat: Infinity,
              }}
            />
            <motion.div
              variants={staggerContainerVariants}
              className="grid grid-cols-4 gap-8"
            >
              {bonusItems.map(({ title, Icon }, index) => (
                <motion.article
                  key={title}
                  variants={staggerItemVariants}
                  className="relative z-10 text-center"
                >
                  <div
                    className="bonusIconNeon relative mx-auto mb-6 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border border-white/20 bg-black/90 shadow-[0_0_30px_-18px_rgba(255,255,255,0.75)]"
                    style={{
                      backdropFilter: "blur(12px)",
                      ["--neon-delay" as never]: `${(iconNeonDuration / bonusItems.length) * index}s`,
                      ["--neon-duration" as never]: `${iconNeonDuration}s`,
                    }}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: "rgba(13,15,18,0.72)" }}
                    />
                    <Icon
                      className="relative z-10 h-7 w-7 text-zinc-50"
                      strokeWidth={0.8}
                    />
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-white">
                    {title}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </div>

          <motion.div variants={staggerContainerVariants} className="md:hidden">
            <motion.div
              variants={staggerContainerVariants}
              className="overflow-hidden"
              ref={mobileEmblaRef}
            >
              <div className="flex touch-pan-y">
                {bonusItems.map(({ title, description, Icon }, index) => (
                  <motion.article
                    key={title}
                    variants={staggerItemVariants}
                    className="mr-4 min-w-0 flex-[0_0_86%]"
                  >
                    <div className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-white/[0.02] px-6 py-7 shadow-[0_45px_120px_-95px_rgba(0,0,0,1)]">
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_52%)]"
                      />
                      <div className="relative flex min-h-[18rem] flex-col">
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-[0.62rem] uppercase tracking-[0.36em] text-zinc-200">
                            Bônus {String(index + 1).padStart(2, "0")}
                          </span>
                          <div
                            className="bonusIconNeon relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]"
                            style={{
                              ["--neon-delay" as never]: `${(iconNeonDuration / bonusItems.length) * index}s`,
                              ["--neon-duration" as never]: `${iconNeonDuration}s`,
                              backdropFilter: "blur(10px)",
                            }}
                          >
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 rounded-full"
                              style={{ backgroundColor: "rgba(13,15,18,0.5)" }}
                            />
                            <Icon
                              className="relative z-10 h-[1.05rem] w-[1.05rem] text-zinc-200"
                              strokeWidth={1.4}
                            />
                          </div>
                        </div>

                        <div className="mt-8 flex-1">
                          <h3 className="max-w-[15rem] text-[1.4rem] font-light leading-[1.08] tracking-tight text-white">
                            {title}
                          </h3>
                          <p className="mt-4 max-w-[16rem] text-[0.95rem] leading-relaxed text-zinc-300">
                            {description}
                          </p>
                        </div>

                        <div className="mt-8 flex items-center gap-3">
                          <span className="h-px flex-1 bg-white/10" />
                          <span className="text-[0.62rem] uppercase tracking-[0.32em] text-zinc-500">
                            Extra
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerItemVariants}
          className="mt-8 flex justify-center"
        >
          <Button
            variant="primary"
            size="lg"
            className="group bg-white/90 hover:bg-white text-zinc-950"
            onClick={() =>
              document
                .getElementById("mentor")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <Gem
              className="w-5 h-5 opacity-80"
              aria-hidden="true"
              strokeWidth={1.3}
            />
            GARANTIR VAGA
          </Button>
        </motion.div>
      </MotionContainer>
      <style jsx>{`
        .bonusProgressLine {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.08) 18%,
            rgba(255, 255, 255, 0.22) 50%,
            rgba(255, 255, 255, 0.55) 82%,
            rgba(255, 255, 255, 0) 100%
          );
        }

        .bonusProgressLineBlur {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.16) 18%,
            rgba(255, 255, 255, 0.38) 50%,
            rgba(255, 255, 255, 0.78) 82%,
            rgba(255, 255, 255, 0) 100%
          );
        }

        .bonusIconNeon {
          isolation: isolate;
        }

        .bonusIconNeon::before {
          content: "";
          position: absolute;
          inset: -2px;
          border-radius: 9999px;
          background: conic-gradient(
            from 0deg,
            rgba(255, 255, 255, 0) 0deg,
            rgba(255, 255, 255, 0) 210deg,
            rgba(255, 255, 255, 0.95) 242deg,
            rgba(255, 255, 255, 0) 272deg,
            rgba(255, 255, 255, 0) 360deg
          );
          opacity: 0.85;
          filter: blur(0.6px);
          transform: rotate(0deg);
          animation: bonusNeonSpin var(--neon-duration, 5.6s) linear infinite;
          animation-delay: var(--neon-delay, 0s);
          pointer-events: none;
          z-index: -1;
          -webkit-mask: radial-gradient(
            farthest-side,
            transparent calc(100% - 2.6px),
            #000 calc(100% - 2px)
          );
          mask: radial-gradient(
            farthest-side,
            transparent calc(100% - 2.6px),
            #000 calc(100% - 2px)
          );
        }

        .bonusIconNeon::after {
          content: "";
          position: absolute;
          inset: -12px;
          border-radius: 9999px;
          background: conic-gradient(
            from 0deg,
            rgba(255, 255, 255, 0) 0deg,
            rgba(255, 255, 255, 0) 210deg,
            rgba(255, 255, 255, 0.75) 242deg,
            rgba(255, 255, 255, 0) 272deg,
            rgba(255, 255, 255, 0) 360deg
          );
          opacity: 0.22;
          filter: blur(18px);
          transform: rotate(0deg);
          animation: bonusNeonSpin var(--neon-duration, 5.6s) linear infinite;
          animation-delay: var(--neon-delay, 0s);
          pointer-events: none;
          z-index: -2;
          -webkit-mask: radial-gradient(
            farthest-side,
            transparent calc(100% - 10px),
            #000 calc(100% - 9px)
          );
          mask: radial-gradient(
            farthest-side,
            transparent calc(100% - 10px),
            #000 calc(100% - 9px)
          );
        }

        @keyframes bonusNeonSpin {
          to {
            transform: rotate(360deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .bonusIconNeon::before,
          .bonusIconNeon::after {
            animation: none;
          }
        }
      `}</style>
    </AnimatedSection>
  );
};
