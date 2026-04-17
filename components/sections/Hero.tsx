"use client";

import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, Gem } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  AnimatedSection,
  MotionContainer,
  staggerContainerVariants,
  staggerItemVariants,
} from "@/components/ui/Section";

export const Hero = () => {
  return (
    <AnimatedSection className="min-h-screen  flex items-start sm:items-center justify-center relative overflow-hidden bg-[#171a1d]">
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-cover bg-bottom md:bg-top bg-no-repeat bg-[image:url('/heroMobile.jpg')] md:bg-[image:url('/heroTablet.jpg')] lg:bg-[image:url('/hero.jpg')]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10 bg-black/75 md:bg-black/55"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10 bg-gradient-to-b from-black/5 via-black/10 to-black/55 sm:hidden"
      />

      <div className="hidden lg:flex absolute right-[10%] xl:right-[12%] 2xl:right-[14%] top-[44%] xl:top-[42%] 2xl:top-[40%] -translate-y-1/2 z-20 items-center justify-center pointer-events-none py-32">
        <div className="heroNeonRing relative w-32 h-32">
          <div className="absolute inset-0 z-10 rounded-full bg-black/30 border border-white/10 backdrop-blur-sm" />
          <div className="absolute -inset-1 z-10 rounded-full border border-white/10 opacity-70" />
          <svg
            viewBox="0 0 100 100"
            aria-hidden="true"
            className="absolute inset-0 z-10 animate-spin-slow"
          >
            <defs>
              <path
                id="hero-badge-path"
                d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
              />
            </defs>
            <text
              fill="rgba(255,255,255,0.65)"
              fontSize="7.5"
              fontWeight="500"
              letterSpacing="3"
            >
              <textPath
                href="#hero-badge-path"
                xlinkHref="#hero-badge-path"
                startOffset="50%"
                textAnchor="middle"
              >
                ESPECIALISTA EM SEMIJOAIS • SEMIJOAIS•
              </textPath>
            </text>
          </svg>
          <div
            className="absolute inset-6 z-20 rounded-full bg-black/40 border border-white/10 flex items-center justify-center"
            style={{
              backdropFilter: "blur(12px)",
            }}
          >
            <Gem
              className="w-8 h-8 text-white/70"
              aria-hidden="true"
              strokeWidth={1.3}
            />
          </div>
        </div>
      </div>

      <MotionContainer
        variants={staggerContainerVariants}
        className="z-20 flex h-full items-start pt-24 pb-10 sm:items-center sm:pt-20 sm:pb-3"
      >
        <div className="text-left flex w-full flex-col justify-center max-w-2xl items-center sm:items-start">
          <motion.h1
            variants={staggerItemVariants}
            className="text-[2.45rem] sm:text-5xl 2xl:text-6xl font-light leading-[1.15] mb-6 md:mb-8 tracking-tight select-none text-white text-center sm:text-left "
          >
            O maior especialista <br className="hidden sm:block" />
            de <span className="font-medium"> semijoias do Brasil </span>
            <br className="hidden sm:block" />
            <span className="font-medium">está de volta!</span>
          </motion.h1>

          <motion.p
            variants={staggerItemVariants}
            className="text-base sm:text-lg 3xl:text-xl text-zinc-200 sm:text-zinc-300 max-w-xl mb-8 md:mb-6 leading-relaxed  font-regular select-none text-center sm:text-left mx-auto sm:mx-0"
          >
            Aumente sua margem de lucro em até{" "}
            <span className="text-white font-medium">75%</span>. Adquira peças
            de luxo diretamente da fábrica com preços até{" "}
            <span className="relative inline-block text-white font-medium">
              5x inferiores
              <div className="hidden md:block absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent" />
            </span>{" "}
            aos fornecedores tradicionais.
          </motion.p>

          <motion.div
            variants={staggerItemVariants}
            className="flex flex-col items-center sm:items-start gap-6 sm:gap-8 w-full"
          >
            <div className="hidden sm:flex flex-wrap items-center justify-center sm:justify-start gap-2 text-sm text-zinc-300 max-w-xl">
              <div
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2"
                style={{
                  backdropFilter: "blur(5px)",
                }}
              >
                <CheckCircle2 className="w-4 h-4 text-white/90" />
                <p className="leading-relaxed">
                  Inscreva-se agora e participe do nosso{" "}
                  <span className="text-white font-medium">
                    grupo exclusivo no WhatsApp
                  </span>
                  .
                </p>
              </div>
              <div
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2"
                style={{
                  backdropFilter: "blur(5px)",
                }}
              >
                <Sparkles className="w-4 h-4 text-white/90" />
                <p className="leading-relaxed">
                  <span className="text-white font-medium">+ de 10 mil</span>{" "}
                  pessoas já se inscreveram.
                </p>
              </div>
            </div>

            <Button size="lg" className="w-full md:w-auto group">
              <Gem
                className="w-5 h-5 opacity-80"
                aria-hidden="true"
                strokeWidth={1.3}
              />
              COMPRAR DA FÁBRICA
            </Button>

            <div className="w-full max-w-xl space-y-2 text-sm text-zinc-200 sm:hidden">
              <div className="hidden md:flex items-start justify-center gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-white/85" />
                <p className="leading-relaxed text-center">
                  Inscreva-se agora e participe do nosso{" "}
                  <span className="text-white font-medium">
                    grupo exclusivo no WhatsApp
                  </span>
                  .
                </p>
              </div>
              <div className="flex items-start justify-center gap-2">
                <Sparkles className="mt-0.5 h-4 w-4 text-white/85" />
                <p className="leading-relaxed">
                  <span className="text-white font-medium">+ de 10 mil</span>{" "}
                  pessoas já se inscreveram.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </MotionContainer>
      <style jsx>{`
        .heroNeonRing {
          isolation: isolate;
        }

        .heroNeonRing::before {
          content: "";
          position: absolute;
          inset: -3px;
          border-radius: 9999px;
          background: conic-gradient(
            from 0deg,
            rgba(255, 255, 255, 0) 0deg,
            rgba(255, 255, 255, 0) 215deg,
            rgba(255, 255, 255, 0.95) 246deg,
            rgba(255, 255, 255, 0) 278deg,
            rgba(255, 255, 255, 0) 360deg
          );
          opacity: 0.7;
          filter: blur(0.6px);
          transform: rotate(0deg);
          animation: heroNeonSpin 6.8s linear infinite;
          pointer-events: none;
          z-index: 1;
          -webkit-mask: radial-gradient(
            farthest-side,
            transparent calc(100% - 2.8px),
            #000 calc(100% - 2px)
          );
          mask: radial-gradient(
            farthest-side,
            transparent calc(100% - 2.8px),
            #000 calc(100% - 2px)
          );
        }

        .heroNeonRing::after {
          content: "";
          position: absolute;
          inset: -14px;
          border-radius: 9999px;
          background: conic-gradient(
            from 0deg,
            rgba(255, 255, 255, 0) 0deg,
            rgba(255, 255, 255, 0) 215deg,
            rgba(255, 255, 255, 0.75) 246deg,
            rgba(255, 255, 255, 0) 278deg,
            rgba(255, 255, 255, 0) 360deg
          );
          opacity: 0.22;
          filter: blur(20px);
          transform: rotate(0deg);
          animation: heroNeonSpin 6.8s linear infinite;
          pointer-events: none;
          z-index: 0;
          -webkit-mask: radial-gradient(
            farthest-side,
            transparent calc(100% - 12px),
            #000 calc(100% - 11px)
          );
          mask: radial-gradient(
            farthest-side,
            transparent calc(100% - 12px),
            #000 calc(100% - 11px)
          );
        }

        @keyframes heroNeonSpin {
          to {
            transform: rotate(360deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .heroNeonRing::before,
          .heroNeonRing::after {
            animation: none;
          }
        }
      `}</style>
    </AnimatedSection>
  );
};
