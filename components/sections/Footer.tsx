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
            © 2026 XingYU | Todos os direitos reservados.
          </p>

          <nav className="flex-wrap items-center text-[9px] justify-center gap-x-3 gap-y-2 sm:justify-end hidden md:flex">
            {legalLinks.map((link, index) => (
              <span
                key={link.label}
                className="inline-flex items-center gap-x-3"
              >
                <a
                  href={link.href}
                  className="transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </a>
                {index < legalLinks.length - 1 ? (
                  <span aria-hidden="true" className="text-white/25">
                    •
                  </span>
                ) : null}
              </span>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
};
