"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Gem } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";

export const MentorSection = () => {
  return (
    <Section id="mentor" className="relative overflow-hidden bg-[#0b0d0e] text-white">
      <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative aspect-[1.2/1] w-full overflow-hidden rounded-[2.4rem] border border-white/10 bg-black/25">
            <Image src="/foto.png" alt="Leo China" fill className="object-cover object-top" priority={false} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
          className="order-1 lg:order-2 max-w-2xl justify-self-end flex flex-col items-center text-center lg:items-end lg:text-right"
        >
          <div className="inline-flex items-center justify-center gap-4 lg:justify-end lg:flex-row-reverse">
            <span aria-hidden="true" className="h-px w-12 bg-gradient-to-r from-transparent via-white/35 to-transparent" />
            <span className="text-[0.62rem] uppercase tracking-[0.42em] text-zinc-300">Especialista Convidado</span>
          </div>

          <h2 className="mt-5 text-4xl font-light leading-[1.0] tracking-tight select-none text-white text-center lg:text-right">
            Conheça seu <span className="font-medium">mentor</span>
          </h2>

            <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-xl text-zinc-300 max-w-xl mt-8 leading-tight font-regular select-none text-center lg:text-right mx-auto lg:mx-0"
          >
            Participação exclusiva do maior especialista em semijoias do Brasil.
            Neste evento, teremos a presença confirmada de Leo China, o maior especialista e referência em semijoias no Brasil.
            Você não perde por esperar.
          </motion.p>


          <div className="mt-11 flex w-full justify-center lg:justify-end">
            <Button
              size="lg"
              variant="primary"
              onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Gem className="w-5 h-5 opacity-80" aria-hidden="true" strokeWidth={1.3} />
              Me inscrever agora
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};
