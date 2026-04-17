"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  AnimatedSection,
  MotionContainer,
  staggerContainerVariants,
  staggerItemVariants,
} from "@/components/ui/Section";
import { Button } from "../ui/Button";
import { Gem } from "lucide-react";

export const VipAccessSection = () => {
  return (
    <AnimatedSection
      id="cta"
      className="relative overflow-hidden bg-[#0b0d0e] text-white"
    >
      <MotionContainer
        variants={staggerContainerVariants}
        className="space-y-8"
      >
        <motion.div
          variants={staggerItemVariants}
          className="relative overflow-hidden rounded-[1.6rem] border border-white/5 bg-black px-5 py-22 md:px-24 flex"
        >
          <Image
            src="/bg3.png"
            alt=""
            fill
            sizes="(max-width: 868px) 100vw, 64rem"
            className="object-cover contrast-110 brightness-90"
            priority={false}
            draggable={false}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-black/60 mix-blend-multiply"
          />
          <div className="relative z-10 flex w-full flex-col items-center justify-center gap-8 text-center">
            <div className="mx-auto max-w-[36rem]">
              <p className="text-3xl font-light leading-tight tracking-tight text-white md:text-[2.25rem]">
                <span className="font-medium">Inscreva-se agora mesmo e</span>{" "}
                faça parte do nosso grupo vip
              </p>

              <Button
                size="lg"
                variant="primary"
                className="group bg-white/90 hover:bg-white text-zinc-950 mt-8 mx-auto"
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
          </div>
        </motion.div>
      </MotionContainer>
    </AnimatedSection>
  );
};
