"use client";

import { motion } from "framer-motion";
import { Gem } from "lucide-react";
import { FaYoutube } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import {
  AnimatedSection,
  MotionContainer,
  staggerContainerVariants,
  staggerItemVariants,
} from "@/components/ui/Section";
import { XingyuBackground } from "@/components/ui/XingyuBackground";

export const OnlineFreeEventSection = () => {
  return (
    <AnimatedSection
      id="ao-vivo"
      className="relative overflow-hidden bg-[#0b0d0e] text-white"
    >
      <XingyuBackground
        variant="section"
        imageSrc="/bg1.png"
        imageOpacity={0.18}
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
              Evento Ao Vivo
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-regular leading-[1.0] tracking-tight select-none text-white">
            Um evento exclusivo, online e gratuito
          </h2>

          <p className="text-xl md:text-xl text-zinc-300 max-w-xl mt-8 leading-tight font-regular select-none mx-auto sm:mx-0">
            Faremos nossa live através de um evento gratuito no Youtube, fácil
            assim, você vai perder?
          </p>

          <div className="mt-11">
            <Button
              size="lg"
              variant="primary"
              className="group bg-white/90 hover:bg-white text-zinc-950"
              onClick={() =>
                document
                  .getElementById("cta")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Gem
                className="w-5 h-5 opacity-80"
                aria-hidden="true"
                strokeWidth={1.3}
              />
              GARANTIR VAGA
            </Button>
          </div>
        </motion.div>

        <motion.div
          variants={staggerItemVariants}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[32rem] aspect-[1.22/1] rounded-[2.4rem] border border-white/5 bg-black/40 overflow-hidden shadow-[0_40px_120px_-55px_rgba(255,255,255,0.28)] backdrop-blur-2xl">
            <div className="absolute inset-0 grid place-items-center">
              <div className="relative">
                <div className="relative h-44 w-44 md:h-52 md:w-52 rounded-[2.8rem] border border-white/20 bg-gradient-to-br from-white/18 via-white/6 to-black/35 shadow-[inset_0_1px_18px_rgba(255,255,255,0.22),0_24px_70px_-26px_rgba(0,0,0,0.8)] backdrop-blur-xl flex items-center justify-center -rotate-6">
                  <div className="absolute inset-[12px] rounded-[2.1rem] border border-white/5 bg-black/25" />
                  <FaYoutube className="relative h-20 w-20 md:h-24 md:w-24 text-red-500 drop-shadow-[0_10px_24px_rgba(239,68,68,0.55)]" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </MotionContainer>
    </AnimatedSection>
  );
};
