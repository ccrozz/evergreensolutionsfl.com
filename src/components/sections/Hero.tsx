"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import {
  HERO_POSTER_SRC,
  HERO_VIDEO_LOOP_SRC,
  HERO_VIDEO_SRC,
} from "@/lib/constants";

const heroVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const heroVideoClass =
  "absolute inset-0 z-[1] h-full w-full object-cover object-[center_35%]";

type HeroViewport = "mobile" | "desktop";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [viewport, setViewport] = useState<HeroViewport | null>(null);

  const itemVariants = prefersReducedMotion
    ? {
        hidden: { opacity: 1, y: 0 },
        show: { opacity: 1, y: 0 },
      }
    : {
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      };

  const videoSrc =
    viewport === "desktop" ? HERO_VIDEO_LOOP_SRC : HERO_VIDEO_SRC;

  useLayoutEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    function syncViewport() {
      setViewport(mq.matches ? "mobile" : "desktop");
    }
    syncViewport();
    mq.addEventListener("change", syncViewport);
    return () => mq.removeEventListener("change", syncViewport);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !viewport) return;

    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    void video.play().catch(() => {
      /* Autoplay blocked */
    });
  }, [prefersReducedMotion, viewport, videoSrc]);

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] min-h-screen w-full max-w-full items-end overflow-hidden bg-black"
    >
      {prefersReducedMotion ? (
        <Image
          src={HERO_POSTER_SRC}
          alt=""
          fill
          priority
          sizes="100vw"
          className="z-0 object-cover object-[center_35%]"
          quality={80}
          aria-hidden
        />
      ) : viewport ? (
        <video
          key={videoSrc}
          ref={videoRef}
          src={videoSrc}
          className={heroVideoClass}
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          aria-hidden
        />
      ) : null}

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[min(58%,24rem)] bg-gradient-to-t from-black/70 from-0% via-black/40 via-45% to-transparent to-100%"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-32 bg-gradient-to-b from-black/50 via-black/15 to-transparent sm:h-36"
        aria-hidden
      />

      <motion.div
        variants={heroVariants}
        initial={prefersReducedMotion ? false : "hidden"}
        animate="show"
        className="container relative z-10 w-full pb-[max(1.75rem,env(safe-area-inset-bottom,0px))] pt-[calc(3.5rem+env(safe-area-inset-top,0px))] sm:pb-10 sm:pt-0"
      >
        <div className="relative max-w-xl lg:max-w-3xl">
          <div className="relative">
            <motion.div variants={itemVariants}>
              <h1 className="text-shadow-hero font-display text-[1.625rem] font-bold leading-[1.08] tracking-tight text-white sm:text-4xl sm:leading-[1.1] md:text-6xl lg:text-7xl">
                <span className="block">EVERGREEN</span>{" "}
                <span className="block">SOLUTIONS FL</span>
              </h1>
            </motion.div>
            <motion.div variants={itemVariants}>
              <p className="text-shadow-hero mt-2.5 max-w-md font-display text-base italic leading-snug text-white sm:mt-4 sm:max-w-3xl sm:text-2xl md:text-4xl">
                Restoring Florida, One Landscape at a Time.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="hidden sm:block">
              <p className="text-shadow-hero-subtle mt-4 max-w-2xl text-sm leading-relaxed text-white sm:mt-7 sm:text-lg">
                Leading ecological restoration, sustainable land practices, and invasive
                species management across Florida.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-10 sm:flex sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4"
            >
              <Button
                href="#services"
                className="w-full !px-4 !py-2.5 text-xs sm:w-auto sm:!px-8 sm:!py-3 sm:text-sm"
              >
                Our Services
              </Button>
              <Button
                href="#case-studies"
                variant="outline-white"
                className="w-full !px-4 !py-2.5 text-xs sm:w-auto sm:!px-8 sm:!py-3 sm:text-sm"
              >
                Case Studies
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
