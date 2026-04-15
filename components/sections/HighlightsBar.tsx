"use client";

import { Container } from "@/components/ui/Section";
import { Ticket } from "lucide-react";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";

export const HighlightsBar = () => {
  return (
    <div className="relative z-10 border-y border-white/10 bg-black/90 backdrop-blur-2xl">
      <Container className="py-6 sm:py-7">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-zinc-300 sm:text-xs sm:tracking-[0.35em]">
            <Ticket size={20}   className="text-white/80" strokeWidth={1.3} />
            <span className="font-medium">Gratuito e com vagas limitadas</span>
          </div>

          <div className="h-px w-10 bg-gradient-to-r from-transparent via-white/30 to-transparent hidden md:block" />

          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-zinc-300 sm:text-xs sm:tracking-[0.35em]">
            <FaYoutube size={20} className="text-white/80" />
            <span className="font-medium">Live no YouTube dia 30/04</span>
          </div>

          <div className="h-px w-10 bg-gradient-to-r from-transparent via-white/30 to-transparent hidden md:block" />

          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-zinc-300 sm:text-xs sm:tracking-[0.35em]">
            <FaWhatsapp size={20} className="text-white/80" />
            <span className="font-medium">Grupo VIP no WhatsApp</span>
          </div>
        </div>
      </Container>
    </div>
  );
};
