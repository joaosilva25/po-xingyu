"use client";

import { motion } from "framer-motion";
import { BadgePercent, Factory, Gem } from "lucide-react";
import Image from "next/image";
import { Container, Section } from "@/components/ui/Section";
import { XingyuBackground } from "@/components/ui/XingyuBackground";

const accessItems = [
  {
    title: "As principais novidades de 2026",
    label: "Tendências",
    Icon: Gem,
    image: "/background2.png",
    glow: "from-fuchsia-500/50 via-violet-500/35 to-cyan-400/40",
  },
  {
    title: "Semijoias com até [X]% de desconto no atacado",
    label: "Desconto de Fábrica",
    Icon: BadgePercent,
    image: "/background3.png",
    glow: "from-cyan-500/45 via-indigo-500/35 to-fuchsia-500/40",
  },
  {
    title: "Aprenda a comprar diretamente com o fornecedor",
    label: "Compra Direta",
    Icon: Factory,
    image: "/background4.png",
    glow: "from-emerald-500/40 via-cyan-500/30 to-violet-500/40",
  },
];

export const EventAccessSection = () => {
  return (
    <Section
      id="access"
      className="relative overflow-hidden bg-[#0b0d0e] text-white"
    >
      <XingyuBackground
        variant="section"
        imageSrc="/background2.png"
        imageOpacity={0.16}
        className="opacity-60"
      />

      <Container className="space-y-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center sm:mx-0 sm:text-left"
        >
          <div className="inline-flex items-center justify-center gap-4 sm:justify-start">
            <span
              aria-hidden="true"
              className="h-px w-12 bg-gradient-to-r from-transparent via-white/35 to-transparent"
            />
            <span className="text-[0.62rem] uppercase tracking-[0.42em] text-zinc-300">
              Acesso Exclusivo
            </span>
          </div>
          <h2 className="mt-5 text-4xl font-light leading-[1.05] tracking-tight text-white">
            O que você terá acesso neste{" "}
            <span className="font-medium">evento</span>?
          </h2>
        </motion.div>

        <div className="grid gap-7 md:grid-cols-3 md:gap-8">
          {accessItems.map(({ title, image, glow }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
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
                className="object-cover opacity-[0.60]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-black/20"
              />

              <div className="relative flex min-h-[19.5rem] flex-col justify-between p-7 md:p-8">
                <div className="flex items-start justify-end gap-8"></div>

                <div>
                  <p className="max-w-[20rem] text-[1.15rem] md:text-[1.22rem] leading-snug text-white font-light tracking-tight text-center md:text-left">
                    {title}
                  </p>
                  <div
                    aria-hidden="true"
                    className="mt-7 h-px w-full bg-gradient-to-r from-transparent via-white/18 to-transparent"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
