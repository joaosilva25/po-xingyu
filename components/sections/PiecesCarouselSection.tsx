"use client";

import React, { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container, Section } from "@/components/ui/Section";
import { XingyuBackground } from "@/components/ui/XingyuBackground";

type Piece = {
  id: string;
  title: string;
  imageSrc: string;
};

export const PiecesCarouselSection = () => {
  const pieces = useMemo<Piece[]>(
    () => [
      { id: "piece-1", title: "01", imageSrc: "/background2.png" },
      { id: "piece-2", title: "02", imageSrc: "/background3.png" },
      { id: "piece-3", title: "03", imageSrc: "/background4.png" },
      { id: "piece-4", title: "04", imageSrc: "/background.png" },
      { id: "piece-5", title: "05", imageSrc: "/background2.png" },
      { id: "piece-6", title: "06", imageSrc: "/background3.png" },
    ],
    []
  );

  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollLeftRef = useRef(0);
  const dragTargetScrollLeftRef = useRef(0);
  const dragRafRef = useRef<number | null>(null);
  const inertiaRafRef = useRef<number | null>(null);
  const lastMoveXRef = useRef(0);
  const lastMoveTimeRef = useRef(0);
  const velocityScrollRef = useRef(0);

  const scrollByCards = (direction: "prev" | "next") => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const firstCard = scroller.querySelector<HTMLElement>("[data-piece-card]");
    const cardWidth = firstCard?.offsetWidth ?? 320;
    const gap = 24;
    const amount = (cardWidth + gap) * (direction === "next" ? 1 : -1);

    scroller.scrollBy({ left: amount, behavior: "smooth" });
  };

  const onPointerDown: React.PointerEventHandler<HTMLDivElement> = (event) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    if (event.pointerType !== "mouse") return;
    if (event.button !== 0) return;

    if (inertiaRafRef.current != null) {
      cancelAnimationFrame(inertiaRafRef.current);
      inertiaRafRef.current = null;
    }

    isDraggingRef.current = true;
    setIsDragging(true);
    dragStartXRef.current = event.clientX;
    dragStartScrollLeftRef.current = scroller.scrollLeft;
    dragTargetScrollLeftRef.current = scroller.scrollLeft;
    lastMoveXRef.current = event.clientX;
    lastMoveTimeRef.current = performance.now();
    velocityScrollRef.current = 0;
    scroller.setPointerCapture(event.pointerId);

    if (dragRafRef.current == null) {
      const tick = () => {
        const s = scrollerRef.current;
        if (!s) {
          dragRafRef.current = null;
          return;
        }

        if (!isDraggingRef.current) {
          dragRafRef.current = null;
          return;
        }

        const current = s.scrollLeft;
        const target = dragTargetScrollLeftRef.current;
        s.scrollLeft = current + (target - current) * 0.35;
        dragRafRef.current = requestAnimationFrame(tick);
      };

      dragRafRef.current = requestAnimationFrame(tick);
    }
  };

  const onPointerMove: React.PointerEventHandler<HTMLDivElement> = (event) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    if (!isDraggingRef.current) return;
    if (event.pointerType !== "mouse") return;

    event.preventDefault();
    const delta = event.clientX - dragStartXRef.current;
    dragTargetScrollLeftRef.current = dragStartScrollLeftRef.current - delta;

    const now = performance.now();
    const dt = Math.max(1, now - lastMoveTimeRef.current);
    const dx = event.clientX - lastMoveXRef.current;
    const velocityX = dx / dt;
    const velocityScroll = -velocityX;
    velocityScrollRef.current = velocityScrollRef.current * 0.8 + velocityScroll * 0.2;
    lastMoveXRef.current = event.clientX;
    lastMoveTimeRef.current = now;
  };

  const endDrag: React.PointerEventHandler<HTMLDivElement> = (event) => {
    if (event.pointerType !== "mouse") return;
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);

    const scroller = scrollerRef.current;
    if (!scroller) return;

    const startVelocity = velocityScrollRef.current;
    if (Math.abs(startVelocity) < 0.02) return;
    if (inertiaRafRef.current != null) cancelAnimationFrame(inertiaRafRef.current);

    let velocity = startVelocity;
    let lastTime = performance.now();

    const tick = () => {
      const s = scrollerRef.current;
      if (!s) {
        inertiaRafRef.current = null;
        return;
      }
      if (isDraggingRef.current) {
        inertiaRafRef.current = null;
        return;
      }

      const now = performance.now();
      const dt = Math.min(40, Math.max(8, now - lastTime));
      lastTime = now;

      s.scrollLeft += velocity * dt;
      velocity *= 0.94;

      if (Math.abs(velocity) < 0.02) {
        inertiaRafRef.current = null;
        return;
      }

      inertiaRafRef.current = requestAnimationFrame(tick);
    };

    inertiaRafRef.current = requestAnimationFrame(tick);
  };

  return (
    <Section id="pieces" className="relative overflow-hidden bg-[#0b0d0e] text-white">
      <XingyuBackground variant="section" imageSrc="/bg1.png" imageOpacity={0.14} className="opacity-60" />

      <Container className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
          className="mx-auto max-w-4xl text-center sm:mx-0 sm:text-left"
        >
          <div className="inline-flex items-center justify-center gap-4 mb-6 sm:justify-start">
            <span aria-hidden="true" className="h-px w-12 bg-gradient-to-r from-transparent via-white/35 to-transparent" />
            <span className="text-[0.62rem] uppercase tracking-[0.42em] text-zinc-300">Carrossel de Peças</span>
          </div>
          <h2 className="text-4xl font-light leading-[1.08] tracking-tight">
            E não para por aí, nesta live você terá acesso <br className="hidden md:block" />
            a descontos ao vivo em nosso evento
          </h2>
          <p className="text-xl md:text-xl text-zinc-300 max-w-xl mt-8 leading-tight font-regular select-none mx-auto sm:mx-0">Conheça algumas de nossas peças.</p>
        </motion.div>

        <div className="relative">


          <div className="relative">
            <div className="flex items-center justify-end gap-3 mb-6">
              <button
                type="button"
                aria-label="Anterior"
                onClick={() => scrollByCards("prev")}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white/90 backdrop-blur-xl shadow-[0_16px_40px_-24px_rgba(0,0,0,0.7)] transition-all duration-300 hover:bg-white hover:text-zinc-900"
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={1.8} />
              </button>
              <button
                type="button"
                aria-label="Próximo"
                onClick={() => scrollByCards("next")}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white/90 backdrop-blur-xl shadow-[0_16px_40px_-24px_rgba(0,0,0,0.7)] transition-all duration-300 hover:bg-white hover:text-zinc-900"
              >
                <ChevronRight className="h-5 w-5" strokeWidth={1.8} />
              </button>
            </div>

            <div
              ref={scrollerRef}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={endDrag}
              onPointerCancel={endDrag}
              className={`no-scrollbar flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-px-6 md:scroll-px-12 select-none ${
                isDragging ? "cursor-grabbing" : "cursor-grab"
              }`}
              style={{ touchAction: "pan-y" }}
            >
              {pieces.map((piece, index) => (
                <motion.article
                  key={piece.id}
                  data-piece-card
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: index * 0.04 }}
                  className="relative flex-none w-[260px] sm:w-[300px] md:w-[340px] snap-center overflow-hidden rounded-[2.3rem] border border-white/10 bg-black/30 backdrop-blur-2xl shadow-[0_0_60px_-45px_rgba(255,255,255,0.08)]"
                >
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src={piece.imageSrc}
                      alt={piece.title}
                      fill
                      className="object-cover opacity-55 grayscale contrast-110 brightness-90"
                      priority={false}
                      draggable={false}
                    />
                    <div aria-hidden="true" className="absolute inset-0 bg-violet-700/35 mix-blend-multiply" />
                    <div aria-hidden="true" className="absolute inset-0 bg-black/55" />
               
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-zinc-100 border border-white/10"style={{
  backdropFilter: "blur(12px)"
}}>
                      {piece.title}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <p className="mt-5 text-[10px] text-zinc-400 uppercase tracking-[0.28em]">
              Arraste para o lado
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};
