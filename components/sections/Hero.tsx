"use client";

import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, Gem } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section, Container } from "@/components/ui/Section";

export const Hero = () => {
  return (
    <Section className="h-screen flex items-center justify-center relative overflow-hidden bg-[#171a1d]">
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-cover bg-top bg-no-repeat bg-[image:url('/heroMobile.jpg')] md:bg-[image:url('/heroTablet.jpg')] lg:bg-[image:url('/hero.jpg')]"
      />
      <div aria-hidden="true" className="absolute inset-0 z-10 bg-black/55" />

      <div className="hidden lg:flex absolute right-[10%] xl:right-[12%] 2xl:right-[14%] top-[44%] xl:top-[42%] 2xl:top-[40%] -translate-y-1/2 z-20 items-center justify-center pointer-events-none">
        <div className="relative w-24 h-24 xl:w-28 xl:h-28">
          <div className="absolute inset-0 rounded-full bg-black/30 border border-white/10 backdrop-blur-sm" />
          <div className="absolute -inset-1 rounded-full border border-white/10 opacity-70" />
          <svg
            viewBox="0 0 100 100"
            aria-hidden="true"
            className="absolute inset-0 animate-spin-slow"
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
                A ORDEM EM COMUNIDADE • A ORDEM EM COMUNIDADE •
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-4 rounded-full bg-black/65 border border-white/10 flex items-center justify-center">
            <Gem
              className="w-6 h-6 text-white/90"
              aria-hidden="true"
              strokeWidth={1.3}
            />
          </div>
        </div>
      </div>

      <Container className="z-20 flex h-full items-center pt-4 sm:pt-28 md:pt-32 pb-3">
        <div className="text-left flex flex-col justify-center max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl 2xl:text-6xl font-light leading-[1.0] mb-10 tracking-tight select-none text-white text-center sm:text-left"
          >
            O maior especialista <br />
            de <span className="font-medium"> semijoias do Brasil </span>
            <br></br>
            <span className="font-medium">está de volta!</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg 3xl:text-xl text-zinc-300 max-w-xl mb-6 leading-tight font-regular select-none text-center sm:text-left mx-auto sm:mx-0"
          >
            Aumente sua margem de lucro em até{" "}
            <span className="text-white font-medium">75%</span>. Adquira peças
            de luxo diretamente da fábrica com preços até{" "}
            <span className="relative inline-block text-white font-medium">
              5x inferiores
              <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent" />
            </span>{" "}
            aos fornecedores tradicionais.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col items-start gap-8"
          >
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-sm text-zinc-300 max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-4 py-2 backdrop-blur">
                <CheckCircle2 className="w-4 h-4 text-white/90" />
                <p className="leading-relaxed">
                  Inscreva-se agora e participe do nosso{" "}
                  <span className="text-white font-medium">
                    grupo exclusivo no WhatsApp
                  </span>
                  .
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-4 py-2 backdrop-blur">
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
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
