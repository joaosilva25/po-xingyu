"use client";

import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, Gem } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section, Container } from "@/components/ui/Section";

export const Hero = () => {
  return (
    <Section className="h-screen flex items-center justify-center relative overflow-hidden bg-[#171a1d]">
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-cover bg-top bg-no-repeat bg-[image:url('/heroMobile.jpg')] md:bg-[image:url('/heroTablet.jpg')] lg:bg-[image:url('/hero.jpg')]"
      />
      <div aria-hidden="true" className="absolute inset-0 z-10 bg-black/55" />
  

      <Container className="z-20 flex h-full items-center pt-4 sm:pt-28 md:pt-32">
        <div className="text-left flex flex-col justify-center max-w-2xl">

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl 2xl:text-6xl font-light leading-[1.0] mb-10 tracking-tight select-none text-white text-center sm:text-left"
          >
            O maior especialista  <br />
           de <span className="  font-medium"> semijoias do Brasil </span><br></br>
            <span className="text-zinc-300  font-medium">está de volta!</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-xl text-zinc-300 max-w-xl mb-12 leading-tight font-regular select-none text-center sm:text-left mx-auto sm:mx-0"
          >
            Aumente sua margem de lucro em até <span className="text-white font-medium">75%</span>. 
            Adquira peças de luxo diretamente da fábrica com preços até <span className="relative inline-block text-white font-medium">
              5x inferiores
              <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent" />
            </span> aos fornecedores tradicionais.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col items-start gap-12"
          >
            <Button size="lg" className="w-full md:w-auto group">
              <Gem className="w-5 h-5 opacity-80" aria-hidden="true" strokeWidth={1.3} />
              COMPRAR DA FÁBRICA
            </Button>
            
            <div className="flex flex-col items-start gap-3 pl-4 border-l border-white/10 text-sm text-zinc-400 max-w-xl">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-white mt-0.5" />
                <p className="leading-relaxed">
                  Inscreva-se agora e participe do nosso{" "}
                  <span className="text-white font-medium">grupo exclusivo no WhatsApp</span>.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-white mt-0.5" />
                <p className="leading-relaxed">
                  <span className="text-white font-medium">+ de 10 mil</span> pessoas já se inscreveram.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

      </Container>
      
    </Section>
  );
};
