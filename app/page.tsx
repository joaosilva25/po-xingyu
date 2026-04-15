"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Glow } from "@/components/ui/Glow";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { HighlightsBar } from "@/components/sections/HighlightsBar";
import { EventAccessSection } from "@/components/sections/EventAccessSection";
import { OnlineFreeEventSection } from "@/components/sections/OnlineFreeEventSection";
import { EventSection } from "@/components/sections/EventSection";
import { BonusSection } from "@/components/sections/BonusSection";
import { PiecesCarouselSection } from "@/components/sections/PiecesCarouselSection";
import { MentorSection } from "@/components/sections/MentorSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 360);
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 selection:bg-emerald-500/30 overflow-x-hidden font-roboto">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Glow className="top-[-10%] right-[-10%] w-[50%] h-[50%] bg-white/15" />
      </div>

      <Header />
      
      <main>
        <Hero />
        <HighlightsBar />
        <EventAccessSection />
        <EventSection />
        <OnlineFreeEventSection />
        <MentorSection />
        <PiecesCarouselSection />
        <BonusSection />

      </main>

      <Footer />

      <button
        type="button"
        aria-label="Voltar ao topo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-50 inline-flex h-11 w-11 items-center justify-center cursor-pointer rounded-full border border-white/15 bg-black/45 text-white/90 backdrop-blur-xl shadow-[0_16px_40px_-24px_rgba(0,0,0,0.7)] transition-all duration-300 hover:bg-white hover:text-zinc-900 ${
          showScrollTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <ArrowUp className="h-4.5 w-4.5" strokeWidth={2} />
      </button>
    </div>
  );
}
