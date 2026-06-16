"use client";

import { useEffect, useRef, useState } from "react";
import { NTR_LVR_DESIGNER_URL } from "@/lib/constants";

/** Mobile viewport the NTR LVR designer is laid out for */
const IFRAME_WIDTH = 390;
const IFRAME_HEIGHT = 844;

export default function NtrLvrPhoneMockup() {
  const containerRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const [loadIframe, setLoadIframe] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadIframe(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const screen = screenRef.current;
    if (!screen) return;

    const updateScale = () => {
      const { width, height } = screen.getBoundingClientRect();
      if (width === 0 || height === 0) return;

      setScale(Math.min(width / IFRAME_WIDTH, height / IFRAME_HEIGHT));
    };

    updateScale();

    const observer = new ResizeObserver(updateScale);
    observer.observe(screen);
    return () => observer.disconnect();
  }, [loadIframe]);

  const scaledWidth = IFRAME_WIDTH * scale;
  const scaledHeight = IFRAME_HEIGHT * scale;

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-full max-w-[220px] sm:max-w-[260px] lg:max-w-[280px]"
    >
      <div className="rounded-[2.5rem] border-[3px] border-zinc-700 bg-zinc-900 p-2 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.65)]">
        <div
          ref={screenRef}
          className="relative aspect-[390/844] overflow-hidden rounded-[2rem] bg-[#0a120e]"
        >
          {!loadIframe ? (
            <div
              className="absolute inset-0 animate-pulse bg-gradient-to-b from-[#142018] to-[#0a120e]"
              aria-hidden
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="relative overflow-hidden"
                style={{ width: scaledWidth, height: scaledHeight }}
              >
                <iframe
                  src={NTR_LVR_DESIGNER_URL}
                  title="NTR LVR landscape designer — plan your Florida plot"
                  width={IFRAME_WIDTH}
                  height={IFRAME_HEIGHT}
                  className="absolute left-0 top-0 origin-top-left border-0 bg-[#0a120e]"
                  style={{ transform: `scale(${scale})` }}
                  allow="fullscreen"
                  loading="lazy"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
