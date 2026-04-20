"use client";

import React, { useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  AnimatedSection,
  MotionContainer,
  staggerContainerVariants,
  staggerItemVariants,
} from "@/components/ui/Section";
import { XingyuBackground } from "@/components/ui/XingyuBackground";

type Piece = {
  id: string;
  title: string;
  imageSrc: string;
};

export const PiecesCarouselSection = () => {
  const pieces = useMemo<Piece[]>(
    () => [
      { id: "piece-1", title: "1", imageSrc: "/p1.webp" },
      { id: "piece-2", title: "2", imageSrc: "/p3.webp" },
      { id: "piece-3", title: "3", imageSrc: "/p2.webp" },
      { id: "piece-4", title: "4", imageSrc: "/p4.webp" },
      { id: "piece-6", title: "6", imageSrc: "/p6.webp" },
      { id: "piece-5", title: "5", imageSrc: "/p5.webp" },
      { id: "piece-7", title: "7", imageSrc: "/p7.webp" },
      { id: "piece-8", title: "8", imageSrc: "/p8.webp" },
    ],
    [],
  );
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    startIndex: 0,
    align: "start",
    duration: 28,
  });

  const scrollByCards = (direction: "prev" | "next") => {
    if (!emblaApi) return;

    if (direction === "next") {
      emblaApi.scrollNext();
      return;
    }

    emblaApi.scrollPrev();
  };

  return (
    <AnimatedSection
      id="pieces"
      className="relative overflow-hidden bg-[#0b0d0e] text-white"
    >
      <XingyuBackground
        variant="section"
        imageSrc="/bg1.png"
        imageOpacity={0.18}
      />

      <MotionContainer
        variants={staggerContainerVariants}
        className="space-y-12"
      >
        <motion.div
          variants={staggerItemVariants}
          className="mx-auto max-w-4xl text-center sm:mx-0 sm:text-left"
        >
          <div className="inline-flex items-center justify-center gap-4 mb-6 sm:justify-start">
            <span
              aria-hidden="true"
              className="h-px w-12 bg-gradient-to-r from-transparent via-white/35 to-transparent hidden md:flex"
            />
            <span className="text-[0.62rem] uppercase tracking-[0.42em] text-zinc-300">
              Carrossel de Peças
            </span>
          </div>
          <h2 className="text-4xl font-regular leading-[1.08] tracking-tight">
            E não para por aí, nesta live você terá acesso{" "}
            <br className="hidden md:block" />a descontos ao vivo em nosso
            evento
          </h2>
          <p className="text-xl md:text-xl text-zinc-300 max-w-xl mt-8 leading-tight font-regular select-none mx-auto sm:mx-0">
            Conheça algumas de nossas peças.
          </p>
        </motion.div>

        <motion.div variants={staggerItemVariants} className="relative">
          <div className="relative">
            <div className="flex items-center justify-end gap-3 mb-6">
              <button
                type="button"
                aria-label="Anterior"
                onClick={() => scrollByCards("prev")}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white/90 backdrop-blur-xl shadow-[0_16px_40px_-24px_rgba(0,0,0,0.7)] transition-all duration-300 hover:bg-white hover:text-zinc-900 cursor-pointer"
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={1.8} />
              </button>
              <button
                type="button"
                aria-label="Próximo"
                onClick={() => scrollByCards("next")}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white/90 backdrop-blur-xl shadow-[0_16px_40px_-24px_rgba(0,0,0,0.7)] transition-all duration-300 hover:bg-white hover:text-zinc-900 cursor-pointer"
              >
                <ChevronRight className="h-5 w-5" strokeWidth={1.8} />
              </button>
            </div>

            <motion.div
              variants={staggerContainerVariants}
              className="overflow-hidden"
              ref={emblaRef}
            >
              <div className="flex touch-pan-y select-none">
                {pieces.map((piece) => (
                  <motion.article
                    key={piece.id}
                    variants={staggerItemVariants}
                    className="relative min-w-0 flex-[0_0_78%] mr-6 sm:flex-[0_0_300px] md:flex-[0_0_340px]"
                  >
                    <div className="relative overflow-hidden rounded-[2.3rem] border border-white/10 bg-black/30 backdrop-blur-2xl shadow-[0_0_60px_-45px_rgba(255,255,255,0.08)]">
                      <div className="relative aspect-[4/5] w-full">
                        <Image
                          src={piece.imageSrc}
                          alt={piece.title}
                          fill
                          className="object-cover contrast-110 brightness-90"
                          priority={false}
                          draggable={false}
                        />
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 bg-black/50"
                        />
                      </div>

                      <div className="absolute inset-x-0 bottom-0 p-6">
                        <div
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-zinc-100"
                          style={{
                            backdropFilter: "blur(12px)",
                          }}
                        >
                          {piece.title}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>

            <p className="mt-5 text-[10px] text-zinc-400 uppercase tracking-[0.28em]">
              Arraste para o lado
            </p>
          </div>
        </motion.div>
      </MotionContainer>
    </AnimatedSection>
  );
};
