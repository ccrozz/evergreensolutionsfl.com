"use client";

import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";
import HeroBackground from "@/components/sections/HeroBackground";

const heroVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const itemVariants = prefersReducedMotion
    ? {
        hidden: { opacity: 1, y: 0 },
        show: { opacity: 1, y: 0 },
      }
    : {
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      };

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] w-full max-w-full items-end overflow-hidden bg-[#0a120e]"
    >
      <HeroBackground />

      <div className="hero-nav-scrim z-[2]" aria-hidden />
      <div className="hero-vignette z-[2]" aria-hidden />

      <motion.div
        variants={heroVariants}
        initial={prefersReducedMotion ? false : "hidden"}
        animate="show"
        className="container relative z-10 w-full pb-[max(1.25rem,env(safe-area-inset-bottom,0px))] pt-[calc(4rem+env(safe-area-inset-top,0px))] sm:pb-12 sm:pt-[calc(5rem+env(safe-area-inset-top,0px))] lg:pb-16"
      >
        <div className="relative w-full max-w-xl lg:max-w-3xl">
          <motion.p
            variants={itemVariants}
            className="text-shadow-hero-subtle mb-2 font-body text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-white/90 sm:mb-3 sm:text-xs sm:tracking-[0.24em]"
          >
            Ecological restoration · Florida
          </motion.p>

          <motion.div variants={itemVariants}>
            <h1 className="text-shadow-hero text-balance font-display text-[2rem] font-bold leading-[1.02] tracking-tight text-white sm:text-5xl sm:leading-[1.06] lg:text-6xl xl:text-7xl">
              Evergreen Solutions FL
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-shadow-hero mt-2.5 max-w-md text-pretty font-display text-lg font-semibold leading-snug text-white sm:mt-5 sm:max-w-2xl sm:text-3xl lg:text-4xl"
          >
            Restoring Florida,{" "}
            <span className="italic text-white/95">one landscape at a time.</span>
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-shadow-hero-subtle mt-2.5 max-w-sm text-sm leading-relaxed text-white/90 sm:mt-4 sm:max-w-2xl sm:text-base lg:text-lg"
          >
            <span className="sm:hidden">
              Native restoration and land management across Florida.
            </span>
            <span className="hidden sm:inline">
              Leading ecological restoration, sustainable land practices, and
              invasive species management across Florida.
            </span>
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-4 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-3"
          >
            <Button href="#services" className="w-full sm:w-auto">
              Our Services
            </Button>
            <Button
              href="#case-studies"
              variant="outline-white"
              className="w-full sm:w-auto"
            >
              Case Studies
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
