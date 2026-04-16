"use client";

import { motion } from "framer-motion";
import { Gem } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";

export const Header = () => {
  const navLinks = [
    { label: "Ao vivo", href: "#ao-vivo" },
    { label: "Mentor", href: "#mentor" },
    { label: "Peças", href: "#pieces" },
    { label: "Bônus", href: "#bonus" },
  ];

  return (
    <header className="pointer-events-none fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6 sm:pt-5 lg:px-8 lg:pt-6">
      <Container>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="pointer-events-auto flex w-full items-center justify-between rounded-3xl border border-white/10 bg-black/50 px-4 py-3 backdrop-blur-2xl sm:px-6 sm:py-4"
          style={{ backdropFilter: "blur(15px)" }}
        >
          <div className="flex min-w-0 items-center gap-4 lg:gap-10 px-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex cursor-pointer flex-col items-center group"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <Image
                src="/logoMenu.png"
                alt="Logo"
                width={200}
                height={40}
                className="h-12 w-auto select-none"
                draggable={false}
                priority
              />
            </motion.div>

            <nav className="hidden items-center gap-6 xl:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault();
                    document
                      .querySelector(link.href)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-[10px] font-regular uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center">
            <Button
              size="sm"
              variant="primary"
              className="px-4 py-2.5 text-[10px] sm:px-6 sm:py-3 sm:text-xs"
              onClick={() =>
                document
                  .getElementById("cta")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Gem
                className="h-4 w-4 opacity-80"
                aria-hidden="true"
                strokeWidth={1.3}
              />
              Obter Acesso
            </Button>
          </div>
        </motion.div>
      </Container>
    </header>
  );
};
