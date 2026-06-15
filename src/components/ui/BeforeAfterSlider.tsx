"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type BeforeAfterSliderProps = {
  afterSrc: string;
  afterAlt: string;
  beforeSrc?: string;
  beforeAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
  initialPosition?: number;
  className?: string;
  large?: boolean;
  compact?: boolean;
  priority?: boolean;
};

export default function BeforeAfterSlider({
  afterSrc,
  afterAlt,
  beforeSrc,
  beforeAlt,
  beforeLabel = "Before",
  afterLabel = "After",
  initialPosition = 50,
  className = "",
  large = false,
  compact = false,
  priority = false,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);

  const resolvedBeforeSrc = beforeSrc ?? afterSrc;
  const resolvedBeforeAlt = beforeAlt ?? afterAlt;
  const usesFilteredDuplicate = !beforeSrc || beforeSrc === afterSrc;

  useEffect(() => {
    setPosition(initialPosition);
  }, [afterSrc, beforeSrc, initialPosition]);

  const imageClassName = "object-cover object-center";

  const updatePosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setPosition((x / rect.width) * 100);
  }, []);

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(true);
    updatePosition(event.clientX);
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!isDragging) return;
    updatePosition(event.clientX);
  }

  function handlePointerUp() {
    setIsDragging(false);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setPosition((current) => Math.max(0, current - 5));
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setPosition((current) => Math.min(100, current + 5));
    }
  }

  const innerWidthPercent = position > 0 ? (100 / position) * 100 : 100;

  return (
    <div
      ref={containerRef}
      className={`relative w-full cursor-ew-resize touch-none select-none overflow-hidden bg-brand-sand shadow-soft ring-1 ring-brand-darkGreen/10 ${
        large
          ? "aspect-[4/3] min-h-[300px] rounded-3xl sm:min-h-[380px] lg:min-h-[480px]"
          : compact
            ? "aspect-[16/10] max-h-[280px] rounded-2xl sm:max-h-[310px] lg:max-h-[340px]"
            : "aspect-[16/10] rounded-2xl"
      } ${className}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onKeyDown={handleKeyDown}
      role="slider"
      tabIndex={0}
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Drag to compare before and after restoration"
    >
      <Image
        src={afterSrc}
        alt={afterAlt}
        fill
        sizes="(max-width: 1024px) 100vw, 1200px"
        className={imageClassName}
        priority={priority}
        draggable={false}
      />

      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${position}%` }}
        aria-hidden
      >
        <div className="relative h-full" style={{ width: `${innerWidthPercent}%` }}>
          <Image
            src={resolvedBeforeSrc}
            alt={resolvedBeforeAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 1200px"
            className={`${imageClassName} ${
              usesFilteredDuplicate
                ? "brightness-[0.38] contrast-125 saturate-[0.45]"
                : ""
            }`}
            draggable={false}
          />
          {usesFilteredDuplicate ? (
            <div className="absolute inset-0 bg-emerald-950/35 mix-blend-multiply" />
          ) : null}
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-0.5 -translate-x-1/2 bg-white/90 shadow-[0_0_12px_rgba(0,0,0,0.45)]"
        style={{ left: `${position}%` }}
        aria-hidden
      />

      <div
        className={`pointer-events-none absolute top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-brand-leafGreen text-white shadow-lg ${
          large ? "h-14 w-14" : "h-10 w-10"
        }`}
        style={{ left: `${position}%` }}
        aria-hidden
      >
        <svg
          width={large ? 24 : 18}
          height={large ? 24 : 18}
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden
        >
          <path
            d="M7 10H3M3 10L5 8M3 10L5 12M13 10H17M17 10L15 8M17 10L15 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <span
        className={`pointer-events-none absolute bottom-3 left-3 rounded-md bg-black/55 font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm ${
          large ? "px-3 py-1.5 text-xs" : "px-2.5 py-1 text-[11px]"
        }`}
      >
        {beforeLabel}
      </span>
      <span
        className={`pointer-events-none absolute bottom-3 right-3 rounded-md bg-black/55 font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm ${
          large ? "px-3 py-1.5 text-xs" : "px-2.5 py-1 text-[11px]"
        }`}
      >
        {afterLabel}
      </span>
    </div>
  );
}
