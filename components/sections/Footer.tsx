"use client";

import { Container } from "@/components/ui/Section";

export const Footer = () => {
  const legalLinks = [
    { label: "Política de Privacidade", href: "#" },
    { label: "Termos de Uso", href: "#" },
    { label: "Política de Cookies", href: "#" },
  ] as const;

  return (
    <footer className="relative z-10 border-t border-white/5 bg-black/70 px-5 backdrop-blur-3xl sm:px-8 lg:px-12 xl:px-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-black"
      />
      <Container className="py-5 sm:py-6">
        <div className="flex flex-col items-center gap-3 text-[9px] uppercase tracking-[0.32em] text-zinc-400 sm:flex-row sm:justify-between sm:gap-6">
          <p className="text-center sm:text-left">
            © 2026 XingYU
          </p>

          <nav className="flex-wrap items-center text-[9px] justify-center gap-x-3 gap-y-2 sm:justify-end hidden md:flex">
             Todos os direitos reservados
          </nav>
        </div>
      </Container>
    </footer>
  );
};
