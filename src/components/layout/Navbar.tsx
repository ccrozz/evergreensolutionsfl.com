"use client";

import Image from "next/image";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#ntr-lvr", label: "NTR LVR" },
  { href: "#case-studies", label: "Case Studies" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [overHero, setOverHero] = useState(true);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setOverHero(entry.isIntersecting);
      },
      { threshold: 0.15, rootMargin: "-1px 0px 0px 0px" },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  function closeMobile() {
    setMobileOpen(false);
  }

  const lightHeader = overHero && !mobileOpen;

  const mobileMenu =
    mobileOpen && mounted ? (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[9998] flex flex-col bg-brand-cream/95 px-6 backdrop-blur-xl lg:hidden"
        style={{
          paddingTop: "max(4.5rem, env(safe-area-inset-top, 0px))",
          paddingBottom: "env(safe-area-inset-bottom, 0px)",
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <nav className="flex flex-1 flex-col items-start justify-center gap-1 overflow-y-auto py-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex min-h-[52px] w-full items-center font-display text-2xl text-brand-darkGreen transition-colors hover:text-brand-midGreen"
              onClick={closeMobile}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#request-quote"
            onClick={closeMobile}
            className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full bg-brand-darkGreen px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2E7D32]"
          >
            Request a Quote
          </Link>
        </nav>
      </motion.div>
    ) : null;

  return (
    <>
      {mounted && mobileOpen ? createPortal(mobileMenu, document.body) : null}

      <header
        className={`fixed inset-x-0 top-0 z-[9999] transition-[background-color,box-shadow,border-color] duration-300 ease-out ${
          lightHeader
            ? "border-b border-white/0 bg-transparent"
            : "border-b border-black/[0.06] bg-brand-cream/80 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.18)] backdrop-blur-xl supports-[backdrop-filter]:bg-brand-cream/65"
        }`}
        style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
      >
        <div
          className={`container flex items-center justify-between gap-3 transition-[height] duration-300 ${
            lightHeader ? "h-[3.75rem] sm:h-20" : "h-14 sm:h-16"
          }`}
        >
          <Link
            href="#home"
            className="relative h-9 w-[11.5rem] shrink-0 sm:h-11 sm:w-[14rem]"
            onClick={closeMobile}
          >
            <Image
              src="/logo2.png"
              alt="Evergreen Solutions FL logo"
              fill
              sizes="(max-width: 640px) 184px, 224px"
              className={`object-contain object-left transition-[filter,opacity] duration-300 ${
                lightHeader ? "brightness-0 invert" : ""
              }`}
              priority
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex xl:gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200 xl:px-4 ${
                  lightHeader
                    ? "text-white/90 hover:bg-white/10 hover:text-white"
                    : "text-brand-darkGreen hover:bg-brand-darkGreen/5 hover:text-brand-midGreen"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              href="#request-quote"
              variant={lightHeader ? "outline-white" : "primary"}
              className="ml-2 shrink-0 whitespace-nowrap !px-5 !py-2 text-xs sm:text-sm"
            >
              Request a Quote
            </Button>
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className={`relative z-50 flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-full p-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 lg:hidden ${
              lightHeader
                ? "text-white hover:bg-white/10 focus-visible:ring-white/40"
                : "text-brand-darkGreen hover:bg-brand-darkGreen/5 focus-visible:ring-brand-darkGreen/30"
            }`}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" weight="bold" aria-hidden />
            ) : (
              <List className="h-6 w-6" weight="bold" aria-hidden />
            )}
          </button>
        </div>
      </header>
    </>
  );
}
