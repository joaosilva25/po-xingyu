"use client";

import { motion } from "framer-motion";
import { Boxes, Gem, Megaphone, Rocket, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { XingyuBackground } from "@/components/ui/XingyuBackground";

const bonusItems = [
  {
    title: "Como aumentar sua margem de lucro comprando na Xingyu.",
    Icon: TrendingUp,
  },
  {
    title: "Como montar kits para vender mais.",
    Icon: Boxes,
  },
  {
    title: "Como usar produtos para chamar atenção.",
    Icon: Megaphone,
  },
  {
    title: "Como usar produtos para fazer lançamentos.",
    Icon: Rocket,
  },
] as const;

export const BonusSection = () => {
  return (
    <Section id="bonus" className="relative overflow-hidden bg-[#0d0f12] text-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="mt-5 text-4xl font-light leading-[1.05] tracking-tight text-white">
            <span className="font-medium">Bônus</span> para você
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-lg md:text-xl text-zinc-300 leading-tight">
            Você também terá acesso aos conteúdos estratégicos que separam quem vende
            por preço de quem vende com margem, posicionamento e previsibilidade.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.08 }}
          className="relative mt-16 overflow-hidden rounded-[2.6rem] border border-white/10 bg-[#12161a]/75 p-6 sm:p-8 lg:p-12"
        >
          <XingyuBackground variant="section" imageSrc="/background2.png" imageOpacity={0.1} className="opacity-70" />


          <div className="relative hidden md:block">
            <div aria-hidden="true" className="absolute left-[12.5%] right-[12.5%] top-10 z-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="grid grid-cols-4 gap-8">
              {bonusItems.map(({ title, Icon }) => (
                <article key={title} className="relative z-10 text-center">
                  <div className="mx-auto mb-6 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border border-white/20 bg-black/10" style={{ backdropFilter: "blur(15px)" }}>
                    <Icon className="h-7 w-7 text-zinc-50" strokeWidth={0.8} />
                  </div>
             
                  <p className="mt-3 text-sm text-white">{title}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="relative space-y-3 md:hidden">
            {bonusItems.map(({ title, Icon }) => (
              <article key={title} className="rounded-2xl border border-white/12 bg-[#0f1418]/80 px-4 py-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10">
                    <Icon className="h-5 w-5 text-white" strokeWidth={0.5} />
                  </div>
                  <p className="mt-2 text-sm text-white">{title}</p>
                </div>
              </article>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <Button
            variant="primary"
            size="lg"
            className="group bg-white/90 hover:bg-white text-zinc-950 border border-white/35 shadow-[0_24px_80px_-40px_rgba(255,255,255,0.55)]"
            onClick={() => document.getElementById("mentor")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Gem className="w-5 h-5 opacity-80" aria-hidden="true" strokeWidth={1.3} />
            GARANTIR VAGA
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
};
