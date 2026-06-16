"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { HERO_BACKGROUNDS } from "@/lib/constants";

const CYCLE_MS = 8000;

export default function HeroBackground() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const backgrounds = prefersReducedMotion ? HERO_BACKGROUNDS.slice(0, 1) : HERO_BACKGROUNDS;

  useEffect(() => {
    if (prefersReducedMotion || HERO_BACKGROUNDS.length < 2) return;

    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % HERO_BACKGROUNDS.length);
    }, CYCLE_MS);

    return () => window.clearInterval(id);
  }, [prefersReducedMotion]);

  return (
    <div className="absolute inset-0 z-0 bg-[#0a120e]" aria-hidden>
      {backgrounds.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={index === 0}
          sizes="100vw"
          quality={90}
          className="hero-bg-slide object-cover object-[center_50%]"
          style={{ opacity: index === activeIndex ? 1 : 0 }}
        />
      ))}
    </div>
  );
}
