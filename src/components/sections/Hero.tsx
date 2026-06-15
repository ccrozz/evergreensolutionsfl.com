"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import {
  HERO_POSTER_SRC,
  HERO_VIDEO_REVERSE_SRC,
  HERO_VIDEO_SRC,
} from "@/lib/constants";

const heroVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const heroVideoClass =
  "absolute inset-0 z-[1] h-full w-full object-cover object-[center_35%] sm:object-center";

function tryPlayVideo(video: HTMLVideoElement) {
  video.muted = true;
  return video.play();
}

export default function Hero() {
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const forwardRef = useRef<HTMLVideoElement>(null);
  const reverseRef = useRef<HTMLVideoElement>(null);
  const switchingRef = useRef(false);
  const initStartedRef = useRef(false);
  const prefersReducedMotion = useReducedMotion();
  const [showVideo, setShowVideo] = useState(false);
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

    initStartedRef.current = false;
    const mq = window.matchMedia("(max-width: 639px)");
    let cancelled = false;

    function revealVideo() {
      if (!cancelled) setShowVideo(true);
    }

    function setupMobile() {
      const video = mobileVideoRef.current;
      if (!video) return () => {};

      function startPlayback() {
        const video = mobileVideoRef.current;
        if (!video || initStartedRef.current) return;
        initStartedRef.current = true;
        void tryPlayVideo(video).catch(() => {
          initStartedRef.current = false;
        });
      }

      function onPlaying() {
        revealVideo();
      }

      function onCanPlay() {
        revealVideo();
        startPlayback();
      }

      video.addEventListener("playing", onPlaying);
      video.addEventListener("canplay", onCanPlay);

      if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
        onCanPlay();
      }

      return () => {
        video.removeEventListener("playing", onPlaying);
        video.removeEventListener("canplay", onCanPlay);
      };
    }

    function setupDesktop() {
      const forward = forwardRef.current;
      const reverse = reverseRef.current;
      if (!forward || !reverse) return () => {};

      function handoffToReverse() {
        const fwd = forwardRef.current;
        const rev = reverseRef.current;
        if (switchingRef.current || !fwd || !rev) return;
        switchingRef.current = true;

        setPlayingForward(false);
        fwd.pause();
        rev.currentTime = 0;
        void tryPlayVideo(rev).finally(() => {
          switchingRef.current = false;
        });
      }

      function handoffToForward() {
        const fwd = forwardRef.current;
        const rev = reverseRef.current;
        if (switchingRef.current || !fwd || !rev) return;
        switchingRef.current = true;

        setPlayingForward(true);
        rev.pause();
        fwd.currentTime = 0;
        void tryPlayVideo(fwd).finally(() => {
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
        const fwd = forwardRef.current;
        if (!fwd) return;
        const duration = fwd.duration;
        if (!Number.isFinite(duration) || duration <= 0) return;
        if (fwd.currentTime >= duration - 0.05) {
          handoffToReverse();
        }
      }

      function onReverseTimeUpdate() {
        const rev = reverseRef.current;
        if (!rev) return;
        const duration = rev.duration;
        if (!Number.isFinite(duration) || duration <= 0) return;
        if (rev.currentTime >= duration - 0.05) {
          handoffToForward();
        }
      }

      function startPlayback() {
        const forward = forwardRef.current;
        const reverse = reverseRef.current;
        if (!forward || !reverse || initStartedRef.current) return;
        initStartedRef.current = true;
        switchingRef.current = false;
        setPlayingForward(true);
        forward.currentTime = 0;
        reverse.pause();
        void tryPlayVideo(forward).catch(() => {
          initStartedRef.current = false;
        });
      }

      function onCanPlay() {
        revealVideo();
        startPlayback();
      }

      function onPlaying() {
        revealVideo();
      }

      forward.addEventListener("canplay", onCanPlay);
      forward.addEventListener("playing", onPlaying);
      forward.addEventListener("ended", onForwardEnded);
      forward.addEventListener("timeupdate", onForwardTimeUpdate);
      reverse.addEventListener("ended", onReverseEnded);
      reverse.addEventListener("timeupdate", onReverseTimeUpdate);

      if (forward.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
        onCanPlay();
      }

      return () => {
        forward.removeEventListener("canplay", onCanPlay);
        forward.removeEventListener("playing", onPlaying);
        forward.removeEventListener("ended", onForwardEnded);
        forward.removeEventListener("timeupdate", onForwardTimeUpdate);
        reverse.removeEventListener("ended", onReverseEnded);
        reverse.removeEventListener("timeupdate", onReverseTimeUpdate);
      };
    }

    function attachPlayback() {
      if (cancelled) return;
      initStartedRef.current = false;
      return mq.matches ? setupMobile() : setupDesktop();
    }

    let cleanup = attachPlayback();

    function waitForDesktopVideos(attempt = 0) {
      if (cancelled || mq.matches) return;

      const forward = forwardRef.current;
      const reverse = reverseRef.current;
      if (forward && reverse) {
        cleanup?.();
        cleanup = setupDesktop();
        return;
      }

      if (attempt < 20) {
        requestAnimationFrame(() => waitForDesktopVideos(attempt + 1));
      }
    }

    if (!mq.matches && !forwardRef.current) {
      waitForDesktopVideos();
    }

    function onBreakpointChange(event: MediaQueryListEvent) {
      cleanup?.();
      setShowVideo(false);
      setPlayingForward(true);
      initStartedRef.current = false;
      cleanup = attachPlayback();
      if (!event.matches && !forwardRef.current) {
        waitForDesktopVideos();
      }
    }

    mq.addEventListener("change", onBreakpointChange);

    return () => {
      cancelled = true;
      cleanup?.();
      mq.removeEventListener("change", onBreakpointChange);
    };
  }, [prefersReducedMotion]);

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] min-h-screen w-full max-w-full items-end overflow-hidden bg-brand-darkGreen sm:items-center"
    >
      <Image
        src={HERO_POSTER_SRC}
        alt=""
        fill
        priority
        sizes="100vw"
        className={`z-0 object-cover object-[center_35%] transition-opacity duration-700 sm:object-center ${
          showVideo ? "opacity-0" : "opacity-100"
        }`}
        quality={80}
        aria-hidden
      />

      {!prefersReducedMotion ? (
        <>
          <video
            ref={mobileVideoRef}
            src={HERO_VIDEO_SRC}
            className={`${heroVideoClass} transition-opacity duration-700 sm:hidden ${
              showVideo ? "opacity-100" : "opacity-0"
            }`}
            autoPlay
            muted
            playsInline
            loop
            preload="metadata"
            aria-hidden
          />
          <video
            ref={forwardRef}
            src={HERO_VIDEO_SRC}
            className={`${heroVideoClass} transition-opacity duration-700 max-sm:hidden ${
              showVideo ? "opacity-100" : "opacity-0"
            } ${playingForward ? "z-[1]" : "z-0"}`}
            autoPlay
            muted
            playsInline
            preload="metadata"
            aria-hidden
          />
          <video
            ref={reverseRef}
            src={HERO_VIDEO_REVERSE_SRC}
            className={`${heroVideoClass} transition-opacity duration-700 max-sm:hidden ${
              showVideo ? "opacity-100" : "opacity-0"
            } ${playingForward ? "z-0" : "z-[1]"}`}
            muted
            playsInline
            preload="metadata"
            aria-hidden
          />
        </>
      ) : null}

      <div
        className="pointer-events-none absolute inset-0 z-[2] hidden bg-gradient-to-t from-brand-darkGreen/60 via-brand-darkGreen/20 to-brand-darkGreen/5 sm:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[min(58%,22rem)] bg-gradient-to-t from-black/70 from-0% via-black/40 via-45% to-transparent to-100% sm:hidden"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-24 bg-gradient-to-b from-black/35 to-transparent sm:hidden"
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
