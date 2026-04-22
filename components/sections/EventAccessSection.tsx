"use client";

import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { BadgePercent, Factory, Gem } from "lucide-react";
import Image from "next/image";
import {
  AnimatedSection,
  MotionContainer,
  staggerContainerVariants,
  staggerItemVariants,
} from "@/components/ui/Section";
import { XingyuBackground } from "@/components/ui/XingyuBackground";

const accessItems = [
  {
    title: "As principais novidades de 2026",
    label: "Tendências",
    Icon: Gem,
    image: "/imgE1.png",
    glow: "from-white/35 via-cyan-500/25 to-violet-500/35",
  },
  {
    title: "Semijoias com até 53% de desconto no atacado",
    label: "Desconto de Fábrica",
    Icon: BadgePercent,
    image: "/imgE3.png",
    glow: "from-cyan-500/35 via-indigo-500/25 to-fuchsia-500/35",
  },
  {
    title: "Aprenda a comprar diretamente com o fornecedor",
    label: "Compra Direta",
    Icon: Factory,
    image: "/imgE2.png",
    glow: "from-fuchsia-500/35 via-violet-500/25 to-cyan-400/35",
  },
] as const;

const AccessCard = ({ title, image, glow }: (typeof accessItems)[number]) => {
  return (
    <motion.div
      variants={staggerItemVariants}
      className="relative overflow-hidden rounded-[2.6rem] bg-black/30 ring-1 ring-inset ring-white/10 shadow-[0_45px_120px_-95px_rgba(0,0,0,1)] cursor-default select-none"
    >
      <div
        aria-hidden="true"
        className={`absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gradient-to-br ${glow} blur-3xl opacity-25`}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(255,255,255,0.14),transparent_55%)]"
      />
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover contrast-110 brightness-90"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/60 mix-blend-multiply"
      />

      <div className="relative flex min-h-[19.5rem] flex-col justify-between p-7 md:p-8">
        <div className="flex items-start justify-end gap-8"></div>

        <div>
          <p className="max-w-[23rem] text-[1.15rem] md:text-[1.22rem] leading-snug text-white font-light tracking-tight text-center md:text-left">
            {title}
          </p>
          <div
            aria-hidden="true"
            className="mt-7 h-px w-full bg-gradient-to-r from-transparent via-white/18 to-transparent"
          />
        </div>
      </div>
    </motion.div>
  );
};

export const EventAccessSection = () => {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "start",
    duration: 28,
  });

  return (
    <AnimatedSection
      id="access"
      className="relative overflow-hidden bg-[#0b0d0e] text-white"
    >
      <XingyuBackground
        variant="section"
        imageSrc="/bg1.png"
        imageOpacity={0.18}
        className="opacity-60"
      />

      <MotionContainer
        variants={staggerContainerVariants}
        className="space-y-14"
      >
        <motion.div
          variants={staggerItemVariants}
          className="mx-auto max-w-4xl text-center sm:mx-0 sm:text-left"
        >
          <div className="inline-flex items-center justify-center gap-4 sm:justify-start">
            <span
              aria-hidden="true"
              className="h-px w-12 bg-gradient-to-r from-transparent via-white/35 to-transparent hidden md:flex"
            />
            <span className="text-[0.62rem] uppercase tracking-[0.42em] text-zinc-300">
              Acesso Exclusivo
            </span>
          </div>
          <h2 className="mt-5 text-4xl font-light leading-[1.05] tracking-tight text-white">
            O que você terá acesso neste evento
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainerVariants}
          className="md:hidden overflow-hidden"
          ref={emblaRef}
        >
          <div className="flex touch-pan-y">
            {accessItems.map((item) => (
              <div key={item.title} className="min-w-0 flex-[0_0_88%] mr-5">
                <AccessCard {...item} />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainerVariants}
          className="hidden md:grid md:grid-cols-3 md:gap-8"
        >
          {accessItems.map((item) => (
            <AccessCard key={item.title} {...item} />
          ))}
        </motion.div>
      </MotionContainer>
    </AnimatedSection>
  );
};
