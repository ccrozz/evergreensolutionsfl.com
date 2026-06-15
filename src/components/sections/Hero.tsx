"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import { HERO_POSTER_SRC, HERO_VIDEO_REVERSE_SRC, HERO_VIDEO_SRC } from "@/lib/constants";

const heroVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const heroVideoClass =
  "absolute inset-0 h-full w-full object-cover object-[center_35%] sm:object-center";

export default function Hero() {
  const forwardRef = useRef<HTMLVideoElement>(null);
  const reverseRef = useRef<HTMLVideoElement>(null);
  const switchingRef = useRef(false);
  const prefersReducedMotion = useReducedMotion();
  const [videoReady, setVideoReady] = useState(false);
  const [playingForward, setPlayingForward] = useState(true);

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
    if (prefersReducedMotion) return;

    const forward = forwardRef.current;
    const reverse = reverseRef.current;
    if (!forward || !reverse) return;

    function markReady() {
      setVideoReady(true);
    }

    function handoffToReverse() {
      const forward = forwardRef.current;
      const reverse = reverseRef.current;
      if (switchingRef.current || !forward || !reverse) return;
      switchingRef.current = true;

      setPlayingForward(false);
      forward.pause();
      reverse.currentTime = 0;
      void reverse.play().finally(() => {
        switchingRef.current = false;
      });
    }

    function handoffToForward() {
      const forward = forwardRef.current;
      const reverse = reverseRef.current;
      if (switchingRef.current || !forward || !reverse) return;
      switchingRef.current = true;

      setPlayingForward(true);
      reverse.pause();
      forward.currentTime = 0;
      void forward.play().finally(() => {
        switchingRef.current = false;
      });
    }

    function onForwardEnded() {
      handoffToReverse();
    }

    function onReverseEnded() {
      handoffToForward();
    }

    function onForwardTimeUpdate() {
      const forward = forwardRef.current;
      if (!forward) return;
      const duration = forward.duration;
      if (!Number.isFinite(duration) || duration <= 0) return;
      if (forward.currentTime >= duration - 0.05) {
        handoffToReverse();
      }
    }

    function onReverseTimeUpdate() {
      const reverse = reverseRef.current;
      if (!reverse) return;
      const duration = reverse.duration;
      if (!Number.isFinite(duration) || duration <= 0) return;
      if (reverse.currentTime >= duration - 0.05) {
        handoffToForward();
      }
    }

    function tryPlay() {
      const forward = forwardRef.current;
      const reverse = reverseRef.current;
      if (!forward || !reverse) return;
      switchingRef.current = false;
      setPlayingForward(true);
      forward.currentTime = 0;
      reverse.pause();
      void forward.play().catch(() => {
        /* Autoplay blocked — poster image stays visible underneath */
      });
    }

    forward.addEventListener("loadeddata", markReady);
    forward.addEventListener("canplay", markReady);
    forward.addEventListener("loadedmetadata", tryPlay);
    forward.addEventListener("ended", onForwardEnded);
    forward.addEventListener("timeupdate", onForwardTimeUpdate);
    reverse.addEventListener("ended", onReverseEnded);
    reverse.addEventListener("timeupdate", onReverseTimeUpdate);

    tryPlay();

    return () => {
      forward.removeEventListener("loadeddata", markReady);
      forward.removeEventListener("canplay", markReady);
      forward.removeEventListener("loadedmetadata", tryPlay);
      forward.removeEventListener("ended", onForwardEnded);
      forward.removeEventListener("timeupdate", onForwardTimeUpdate);
      reverse.removeEventListener("ended", onReverseEnded);
      reverse.removeEventListener("timeupdate", onReverseTimeUpdate);
    };
  }, [prefersReducedMotion]);

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] min-h-screen items-end overflow-hidden bg-brand-darkGreen sm:items-center"
    >
      <Image
        src={HERO_POSTER_SRC}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_35%] sm:object-center"
        aria-hidden
      />

      {!prefersReducedMotion ? (
        <>
          <video
            ref={forwardRef}
            className={`${heroVideoClass} transition-opacity duration-700 ${
              videoReady ? "opacity-100" : "opacity-0"
            } ${playingForward ? "z-[1]" : "z-0"}`}
            muted
            playsInline
            preload="auto"
            poster={HERO_POSTER_SRC}
            aria-hidden
          >
            <source src={HERO_VIDEO_SRC} type="video/mp4" />
          </video>
          <video
            ref={reverseRef}
            className={`${heroVideoClass} transition-opacity duration-700 ${
              videoReady ? "opacity-100" : "opacity-0"
            } ${playingForward ? "z-0" : "z-[1]"}`}
            muted
            playsInline
            preload="auto"
            poster={HERO_POSTER_SRC}
            aria-hidden
          >
            <source src={HERO_VIDEO_REVERSE_SRC} type="video/mp4" />
          </video>
        </>
      ) : null}

      <div
        className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-brand-darkGreen/60 via-brand-darkGreen/20 to-brand-darkGreen/5 sm:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/35 to-transparent sm:hidden"
        aria-hidden
      />

      <motion.div
        variants={heroVariants}
        initial={prefersReducedMotion ? false : "hidden"}
        animate="show"
        className="container relative z-10 w-full pb-[max(1.75rem,env(safe-area-inset-bottom,0px))] pt-[calc(3.5rem+env(safe-area-inset-top,0px))] sm:pb-16 sm:pt-[calc(4.25rem+env(safe-area-inset-top,0px))]"
      >
        <div className="relative max-w-xl sm:max-w-none">
          <div className="relative">
            <div
              className="pointer-events-none absolute -inset-x-4 top-0 bottom-[calc(-1*max(1.75rem,env(safe-area-inset-bottom,0px)))] -z-10 bg-gradient-to-b from-transparent via-black/30 to-black/65 sm:hidden"
              aria-hidden
            />
            <motion.div variants={itemVariants}>
              <h1 className="text-shadow-hero font-display text-[1.625rem] font-bold leading-[1.08] tracking-tight text-white sm:max-w-4xl sm:text-4xl sm:leading-[1.1] md:text-7xl">
                <span className="block sm:inline">EVERGREEN</span>{" "}
                <span className="block sm:inline">SOLUTIONS FL</span>
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
