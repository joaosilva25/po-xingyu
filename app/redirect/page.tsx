"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (event: string, action: string, options?: Record<string, unknown>) => void;
  }
}

const WHATSAPP_URL = "https://chat.whatsapp.com/HqiL10jphxZGZL2FoJeYKn";

export default function RedirectPage() {
  useEffect(() => {
    // Track PageView para o Meta Pixel
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "PageView");
    }

    const timer = setTimeout(() => {
      window.location.href = WHATSAPP_URL;
    }, 1500); // 1.5 segundos para garantir que o pixel tenha tempo de carregar

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0d0e]">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4" />
        <p className="text-white text-lg">Redirecionando você para o WhatsApp...</p>
      </div>
    </div>
  );
}
