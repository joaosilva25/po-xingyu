"use client";

import { motion } from "framer-motion";
import { BadgePercent, CheckCircle2, Sparkles, TrendingUp } from "lucide-react";
import Image from "next/image";
import { Container, Section } from "@/components/ui/Section";
import { XingyuBackground } from "@/components/ui/XingyuBackground";

const benefitItems = [
  {
    title: "Aumento de Vendas",
    description:
      "Produtos deslumbrantes e de alta demanda que atraem mais clientes para sua loja.",
    Icon: TrendingUp,
    glow: "from-white/35 via-cyan-500/25 to-violet-500/35",
  },
  {
    title: "Margem de Lucro Elevada",
    description:
      "Descontos no atacado garantem uma excelente margem de lucro em cada peça vendida.",
    Icon: BadgePercent,
    glow: "from-cyan-500/35 via-indigo-500/25 to-fuchsia-500/35",
  },
  {
    title: "Fidelização de Clientes",
    description:
      "Ofereça aos seus clientes peças exclusivas e de alta qualidade, aumentando a satisfação e fidelidade.",
    Icon: CheckCircle2,
    glow: "from-fuchsia-500/35 via-violet-500/25 to-cyan-400/35",
  },
  {
    title: "Diferenciação no Mercado",
    description:
      "Destaque-se da concorrência com uma coleção de semijoias única e sofisticada.",
    Icon: Sparkles,
    glow: "from-violet-500/35 via-indigo-500/25 to-white/35",
  },
] as const;

export const ResaleBenefitsSection = () => {
  return (
    <Section id="revenda" className="relative overflow-hidden bg-[#0b0d0e] text-white">
      <XingyuBackground variant="section" imageSrc="/bg3.png" imageOpacity={0.14} className="opacity-70" />

      <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center sm:mx-0 sm:text-left"
        >
          <div className="inline-flex items-center justify-center gap-4 sm:justify-start">
            <span aria-hidden="true" className="h-px w-12 bg-gradient-to-r from-transparent via-white/35 to-transparent" />
            <span className="text-[0.62rem] uppercase tracking-[0.42em] text-zinc-300">Da Fábrica</span>
          </div>

          <h2 className="mt-5 text-4xl font-light leading-[1.02] tracking-tight text-white md:text-[2.85rem]">
            Da fábrica direto para sua <span className="font-medium">casa</span>
          </h2>

          <p className="text-xl md:text-xl text-zinc-300 max-w-xl mt-8 leading-tight font-regular select-none mx-auto sm:mx-0">
            Garantir suas peças de revenda na Xingyu é sinônimo de segurança e qualidade, mas os benefícios não acabam
            por aí…
          </p>

          <div className="mt-10 grid gap-4">
            {benefitItems.map(({ title, description, Icon }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.65, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-black/45 px-5 py-5 text-left shadow-[0_30px_90px_-70px_rgba(0,0,0,1)] backdrop-blur-2xl" style={{
                  backdropFilter:"blur(5px)"
                }}
              >
                <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_25%_10%,rgba(255,255,255,0.12),transparent_60%)] opacity-70" />
                <div aria-hidden="true" className="absolute -left-24 top-0 h-full w-48 bg-gradient-to-r from-white/12 via-white/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div aria-hidden="true" className="absolute inset-y-4 left-0 w-px bg-gradient-to-b from-transparent via-white/55 to-transparent opacity-70" />

                <div className="relative flex items-start gap-4 px-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                    <Icon className="h-4.5 w-4.5 text-white/70" strokeWidth={1.6} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[0.95rem] font-medium tracking-tight text-white md:text-[1.05rem]">
                      {title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-snug text-zinc-300 md:text-[0.95rem]">
                      {description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
          className="relative"
        >
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
      </Container>
    </Section>
  );
};
