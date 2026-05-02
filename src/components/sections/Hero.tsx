"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { PHOTO_URLS } from "@/lib/constants";

const heroVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(38, 34, 22, 0.62), rgba(28, 36, 24, 0.45)), url(${PHOTO_URLS.hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <motion.div
        variants={heroVariants}
        initial="hidden"
        animate="show"
        className="container relative z-10 pt-24"
      >
        <motion.div variants={itemVariants}>
          <h1 className="max-w-4xl font-display text-5xl font-bold text-white md:text-7xl">
            EVERGREEN SOLUTIONS FL
          </h1>
        </motion.div>
        <motion.div variants={itemVariants}>
          <p className="mt-4 max-w-3xl font-display text-3xl italic text-white/90 md:text-4xl">
            Restoring Florida, One Landscape at a Time.
          </p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/80">
            Providing leading ecological restoration services, sustainable land
            practices, and invasive species management to preserve Florida&apos;s
            diverse and unique ecosystems. Native solutions for a flourishing
            future.
          </p>
        </motion.div>
        <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-4">
          <Button href="#services">Explore Our Services</Button>
          <Button href="#case-studies" variant="outline-white">
            Case Studies
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.4, repeat: Number.POSITIVE_INFINITY }}
      >
        <ChevronDown />
      </motion.div>
    </section>
  );
}
