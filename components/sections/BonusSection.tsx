"use client";

import { motion } from "framer-motion";
import { Boxes, Gem, Megaphone, Rocket, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, MotionContainer, staggerContainerVariants, staggerItemVariants } from "@/components/ui/Section";
import Image from "next/image";

const bonusItems = [
  {
    title: "Como aumentar sua margem de lucro comprando na Xingyu.",
    description: "Aprenda estratégias para comprar melhor e vender com mais previsibilidade.",
    Icon: TrendingUp,
  },
  {
    title: "Como montar kits para vender mais.",
    description: "Monte combinações que elevam ticket médio e aceleram o giro de estoque.",
    Icon: Boxes,
  },
  {
    title: "Como usar produtos para chamar atenção.",
    description: "Use peças de impacto para atrair olhares e gerar mais interesse imediato.",
    Icon: Megaphone,
  },
  {
    title: "Como usar produtos para fazer lançamentos.",
    description: "Crie lançamentos que aumentam desejo, urgência e taxa de conversão.",
    Icon: Rocket,
  },
] as const;

export const BonusSection = () => {
  const neonDuration = 3.2;
  const iconNeonDuration = 5.6;

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
          <p className="mx-auto mt-7 max-w-3xl text-lg md:text-xl text-zinc-300 leading-tight">
            Você também terá acesso aos conteúdos estratégicos que separam quem vende
            por preço de quem vende com margem, posicionamento e previsibilidade.
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
              transition={{ duration: neonDuration, ease: "linear", repeat: Infinity }}
            />
            <motion.div variants={staggerContainerVariants} className="grid grid-cols-4 gap-8">
              {bonusItems.map(({ title, Icon }, index) => (
                <motion.article key={title} variants={staggerItemVariants} className="relative z-10 text-center">
                  <div
                    className="bonusIconNeon relative mx-auto mb-6 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border border-white/20 bg-black/90 shadow-[0_0_30px_-18px_rgba(255,255,255,0.75)]"
                    style={{
                      backdropFilter: "blur(12px)",
                      ["--neon-delay" as never]: `${(iconNeonDuration / bonusItems.length) * index}s`,
                      ["--neon-duration" as never]: `${iconNeonDuration}s`,
                    }}
                  >
                    <span aria-hidden="true" className="absolute inset-0 rounded-full" style={{ backgroundColor: "rgba(13,15,18,0.72)" }} />
                    <Icon className="relative z-10 h-7 w-7 text-zinc-50" strokeWidth={0.8} />
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-white">{title}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>

          <motion.ul
            variants={staggerContainerVariants}
            className="mx-1 divide-y divide-white/8 overflow-hidden rounded-xl border border-white/8 bg-white/[0.02] text-left md:hidden"
          >
            {bonusItems.map(({ title, description, Icon }, index) => (
              <motion.li
                key={title}
                variants={staggerItemVariants}
                className="flex gap-4 p-6"
              >
                <div
                  className="bonusIconNeon relative mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/8 bg-white/[0.03]"
                  style={{
                    ["--neon-delay" as never]: `${(iconNeonDuration / bonusItems.length) * index}s`,
                    ["--neon-duration" as never]: `${iconNeonDuration}s`,
                  }}
                >
                  <span aria-hidden="true" className="absolute inset-0 rounded-full" style={{ backgroundColor: "rgba(13,15,18,0.5)" }} />
                  <Icon className="relative z-10 h-5 w-5 text-white/75" strokeWidth={1.6} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-[0.98rem] font-medium tracking-tight text-white">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-300">{description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          variants={staggerItemVariants}
          className="mt-12 flex justify-center"
        >
          <Button
            variant="primary"
            size="lg"
            className="group bg-white/90 hover:bg-white text-zinc-950"
            onClick={() => document.getElementById("mentor")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Gem className="w-5 h-5 opacity-80" aria-hidden="true" strokeWidth={1.3} />
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
