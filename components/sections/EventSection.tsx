"use client";

import { motion } from "framer-motion";
import { Gem } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, MotionContainer, staggerContainerVariants, staggerItemVariants } from "@/components/ui/Section";
import Image from "next/image";
import { useEffect, useRef } from "react";

export const EventSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <AnimatedSection id="benefits" className="relative overflow-hidden bg-[#0b0d0e] text-white">
        {/* Imagem de fundo opaca */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src="/imgE3.png"
                      alt=""
                      fill
                      className="object-cover opacity-[0.035]"
                      priority={false}
                      style={{
                        filter: "grayscale(1) saturate(0.9) contrast(1.05) brightness(0.92)",
                      }}
                    />
                  </div>
      <MotionContainer variants={staggerContainerVariants} className="flex flex-col items-center gap-12">
        <motion.h2
          variants={staggerItemVariants}
          className="text-3xl md:text-4xl font-light leading-tight tracking-tight text-center max-w-3xl"
        >
          Se você é <span className="font-medium">revendedor</span> ou{" "}
          <span className="font-medium">atacadista</span>, é por isso que você deve participar deste evento…
        </motion.h2>

        <motion.div
          ref={containerRef}
          variants={staggerItemVariants}
          className="relative w-full max-w-5xl"
        >

          <div className="relative h-[28rem] md:h-[32rem] w-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/40 backdrop-blur-2xl shadow-[0_0_60px_-45px_rgba(255,255,255,0.08)]">
            <video
              ref={videoRef}
              playsInline
              preload="metadata"
              controls={true}
              className="absolute inset-0 w-full h-full object-cover md:object-contain bg-black"
            >
              <source src="/videoPR.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>

        <motion.div
          variants={staggerItemVariants}
          className="flex justify-center"
        >
          <Button
            size="lg"
            variant="primary"
            className="group hover:bg-white text-zinc-950"
            href="https://chat.whatsapp.com/HqiL10jphxZGZL2FoJeYKn"
          >
            <Gem className="w-5 h-5 opacity-80" aria-hidden="true" strokeWidth={1.3} />
            GARANTIR VAGA
          </Button>
        </motion.div>
      </MotionContainer>
    </AnimatedSection>
  );
};
