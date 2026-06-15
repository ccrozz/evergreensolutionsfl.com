"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import { HERO_POSTER_SRC, HERO_VIDEO_SRC } from "@/lib/constants";

const heroVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [videoReady, setVideoReady] = useState(false);
  const [enableVideo, setEnableVideo] = useState(false);

  const itemVariants = prefersReducedMotion
    ? {
        hidden: { opacity: 1, y: 0 },
        show: { opacity: 1, y: 0 },
      }
    : {
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      };

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }
    ).connection;
    const saveData = connection?.saveData ?? false;
    const slowNetwork =
      connection?.effectiveType === "slow-2g" ||
      connection?.effectiveType === "2g" ||
      connection?.effectiveType === "3g";

    function updateVideoPreference() {
      const shouldUseVideo =
        !mobileQuery.matches && !motionQuery.matches && !saveData && !slowNetwork;
      setEnableVideo(shouldUseVideo);
      if (!shouldUseVideo) {
        setVideoReady(false);
      }
    }

    updateVideoPreference();
    mobileQuery.addEventListener("change", updateVideoPreference);
    motionQuery.addEventListener("change", updateVideoPreference);
    return () => {
      mobileQuery.removeEventListener("change", updateVideoPreference);
      motionQuery.removeEventListener("change", updateVideoPreference);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !enableVideo) return;

    function handleReady() {
      setVideoReady(true);
    }

    function handleError() {
      setVideoReady(false);
      setEnableVideo(false);
    }

    video.addEventListener("loadeddata", handleReady);
    video.addEventListener("canplay", handleReady);
    video.addEventListener("error", handleError);

    void video.play().catch(() => {
      setEnableVideo(false);
    });

    return () => {
      video.removeEventListener("loadeddata", handleReady);
      video.removeEventListener("canplay", handleReady);
      video.removeEventListener("error", handleError);
    };
  }, [enableVideo]);

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] min-h-screen items-center overflow-hidden bg-brand-darkGreen"
    >
      <Image
        src={HERO_POSTER_SRC}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden
      />

      {enableVideo ? (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={HERO_POSTER_SRC}
          aria-hidden
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
      ) : null}

      <div
        className="absolute inset-0 bg-gradient-to-t from-brand-darkGreen/60 via-brand-darkGreen/20 to-brand-darkGreen/5"
        aria-hidden
      />

      <motion.div
        variants={heroVariants}
        initial={prefersReducedMotion ? false : "hidden"}
        animate="show"
        className="container relative z-10 pb-14 pt-[calc(5.75rem+env(safe-area-inset-top,0px))] sm:pb-16 sm:pt-28"
      >
        <motion.div variants={itemVariants}>
          <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl md:text-7xl">
            EVERGREEN SOLUTIONS FL
          </h1>
        </motion.div>
        <motion.div variants={itemVariants}>
          <p className="mt-3 max-w-3xl font-display text-xl italic leading-snug text-white/90 sm:mt-4 sm:text-3xl md:text-4xl">
            Restoring Florida, One Landscape at a Time.
          </p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:mt-7 sm:text-lg">
            Providing leading ecological restoration services, sustainable land
            practices, and invasive species management to preserve Florida&apos;s
            diverse and unique ecosystems. Native solutions for a flourishing
            future.
          </p>
        </motion.div>
        <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
          <Button href="#services">Explore Our Services</Button>
          <Button href="#case-studies" variant="outline-white">
            Case Studies
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
