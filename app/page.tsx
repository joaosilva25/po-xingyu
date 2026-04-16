import React from "react";
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
import { ScrollToTopButton } from "@/components/ui/ScrollToTopButton";

export default function Home() {
  const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const siteUrl = (
    rawSiteUrl
      ? rawSiteUrl.startsWith("http")
        ? rawSiteUrl
        : `https://${rawSiteUrl}`
      : "https://xingyu.com.br"
  ).replace(/\/+$/, "");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Xingyu",
    url: siteUrl,
    logo: `${siteUrl}/logoMenu.png`,
  } as const;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-[#050505] text-zinc-100 selection:bg-emerald-500/30 overflow-x-hidden font-roboto">
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

        <ScrollToTopButton />
      </div>
    </>
  );
}
