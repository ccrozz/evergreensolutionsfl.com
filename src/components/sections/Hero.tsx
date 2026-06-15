"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Button from "@/components/ui/Button";
import { HERO_VIDEO_SRC, PHOTO_URLS } from "@/lib/constants";

const heroVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    function syncPlayback() {
      if (!video) return;
      if (mediaQuery.matches) {
        video.pause();
        return;
      }
      void video.play().catch(() => {
        /* Autoplay may be blocked; poster remains visible */
      });
    }

    syncPlayback();
    mediaQuery.addEventListener("change", syncPlayback);
    return () => mediaQuery.removeEventListener("change", syncPlayback);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-brand-cream"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={PHOTO_URLS.hero}
        aria-hidden
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 bg-gradient-to-t from-brand-darkGreen/50 via-brand-darkGreen/10 to-transparent"
        aria-hidden
      />

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
    </section>
  );
}
