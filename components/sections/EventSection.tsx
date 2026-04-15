"use client";

import { motion } from "framer-motion";
import { Gem } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";

export const EventSection = () => {
  return (
    <Section id="benefits" className="relative overflow-hidden bg-[#0b0d0e] text-white">
    

      <Container className="flex flex-col items-center gap-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-light leading-tight tracking-tight text-center max-w-3xl"
        >
          Se você é <span className="font-medium">revendedor</span> ou{" "}
          <span className="font-medium">atacadista</span>, é por isso que você deve participar deste evento…
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative w-full max-w-5xl"
        >

          <div className="relative aspect-video w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/40 backdrop-blur-2xl shadow-[0_0_60px_-45px_rgba(255,255,255,0.08)]">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/video3.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_65%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex justify-center"
        >
          <Button
            size="lg"
            className="group bg-white/90 hover:bg-white text-zinc-950 border border-white/30 shadow-[0_20px_60px_-30px_rgba(255,255,255,0.35)]"
            onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Gem className="w-5 h-5 opacity-80" aria-hidden="true" strokeWidth={1.3} />
            GARANTIR VAGA
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
};
