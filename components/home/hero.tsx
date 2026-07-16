"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { siteConfig } from "@/lib/site-config";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <PlaceholderImage
          alt="Fachada da Igreja Verbo da Vida Santana"
          label="Foto da fachada / culto da igreja"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/80" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 text-center text-white sm:px-6"
      >
        <motion.span
          variants={item}
          className="mb-5 inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm"
        >
          {siteConfig.shortName}
        </motion.span>
        <motion.h1
          variants={item}
          className="font-heading text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
        >
          {siteConfig.tagline}
        </motion.h1>
        <motion.p variants={item} className="mt-5 max-w-xl text-lg text-white/85 sm:text-xl">
          Estamos felizes por receber você hoje.
        </motion.p>
        <motion.div
          variants={item}
          className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row"
        >
          <Button
            size="lg"
            nativeButton={false}
            className="h-14 w-full rounded-full px-8 text-base font-semibold sm:w-auto"
            render={<a href="#quem-somos" />}
          >
            Conheça nossa igreja
          </Button>
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            className="h-14 w-full rounded-full border-white/40 bg-white/5 px-8 text-base font-semibold text-white hover:bg-white/15 hover:text-white sm:w-auto"
            render={<a href="#horarios" />}
          >
            Próximo culto
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
