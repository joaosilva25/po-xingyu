"use client";

import { motion } from "framer-motion";
import { BadgePercent, CheckCircle2, Sparkles, TrendingUp } from "lucide-react";
import Image from "next/image";
import {
  AnimatedSection,
  MotionContainer,
  staggerContainerVariants,
  staggerItemVariants,
} from "@/components/ui/Section";
import { XingyuBackground } from "@/components/ui/XingyuBackground";

const benefitItems = [
  {
    title: "Aumento de Vendas",
    description:
      "Produtos deslumbrantes e de alta demanda que atraem mais clientes para sua loja.",
    Icon: TrendingUp,
  },
  {
    title: "Margem de Lucro Elevada",
    description:
      "Descontos no atacado garantem uma excelente margem de lucro em cada peça vendida.",
    Icon: BadgePercent,
  },
  {
    title: "Fidelização de Clientes",
    description:
      "Ofereça aos seus clientes peças exclusivas e de alta qualidade, aumentando a satisfação e fidelidade.",
    Icon: CheckCircle2,
  },
  {
    title: "Diferenciação no Mercado",
    description:
      "Destaque-se da concorrência com uma coleção de semijoias única e sofisticada.",
    Icon: Sparkles,
  },
] as const;

export const ResaleBenefitsSection = () => {
  return (
    <AnimatedSection
      id="revenda"
      className="relative overflow-hidden bg-[#0b0d0e] text-white"
    >
      <XingyuBackground
        variant="section"
        imageSrc="/bg1.png"
        imageOpacity={0.18}
        className="opacity-70"
      />

      <MotionContainer
        variants={staggerContainerVariants}
        className="grid gap-14 lg:grid-cols-2 lg:items-center"
      >
        <motion.div
          variants={staggerItemVariants}
          className="mx-auto max-w-2xl text-center sm:mx-0 sm:text-left"
        >
          <div className="inline-flex items-center justify-center gap-4 sm:justify-start">
            <span
              aria-hidden="true"
              className="h-px w-12 bg-gradient-to-r from-transparent via-white/35 to-transparent hidden md:flex"
            />
            <span className="text-[0.62rem] uppercase tracking-[0.42em] text-zinc-300">
              Da Fábrica
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-regular leading-[1.02] tracking-tight text-white md:text-[2.85rem]">
            Da fábrica direto para sua casa
          </h2>

          <p className="text-xl md:text-xl text-zinc-300 max-w-xl mt-8 leading-tight font-regular select-none mx-auto sm:mx-0">
            Garantir suas peças de revenda na Xingyu é sinônimo de segurança e
            qualidade, mas os benefícios não acabam por aí…
          </p>

          <motion.ul
            variants={staggerContainerVariants}
            className="mt-12 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-black/20 text-left"
            style={{ backdropFilter: "blur(6px)" }}
          >
            {benefitItems.map(({ title, description, Icon }) => (
              <motion.li
                key={title}
                variants={staggerItemVariants}
                className="flex gap-4 p-6 transition-colors duration-300 hover:bg-white/[0.03]"
              >
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.02]">
                  <Icon className="h-5 w-5 text-white/75" strokeWidth={1.3} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-[0.98rem] font-medium tracking-tight text-white md:text-[1.05rem]">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-300 md:text-[0.95rem]">
                    {description}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div variants={staggerItemVariants} className="relative">
          <div className="relative mx-auto w-full">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/banner1.png"
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                draggable={false}
                priority={false}
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>
      </MotionContainer>
    </AnimatedSection>
  );
};
