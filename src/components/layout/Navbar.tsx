"use client";

import Image from "next/image";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
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
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 80));

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

  function closeMobile() {
    setMobileOpen(false);
  }

  const mobileMenu =
    mobileOpen && mounted ? (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-brand-sand px-6 backdrop-blur-sm lg:hidden"
        style={{
          paddingTop: "max(6rem, env(safe-area-inset-top, 0px))",
          paddingBottom: "env(safe-area-inset-bottom, 0px)",
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <nav className="flex max-h-[min(70vh,32rem)] flex-col items-center gap-6 overflow-y-auto py-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-2xl font-semibold text-brand-darkGreen"
              onClick={closeMobile}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#request-quote"
            onClick={closeMobile}
            className="rounded-full bg-brand-darkGreen px-8 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#2E7D32]"
          >
            Request a Quote ▶
          </Link>
        </nav>
      </motion.div>
    ) : null;

  return (
    <>
      {mounted && mobileOpen ? createPortal(mobileMenu, document.body) : null}

      <motion.header
        className={`fixed inset-x-0 top-0 z-[9999] transition-all duration-300 ${
          scrolled
            ? "bg-brand-sand/95 shadow-lg backdrop-blur"
            : "bg-brand-sand/90 shadow-md backdrop-blur"
        }`}
        initial={false}
      >
        <div className="container relative z-50 flex min-h-[4.5rem] items-center justify-between gap-3 py-2 sm:h-24 sm:py-0">
          <Link
            href="#home"
            className="relative h-12 min-w-0 flex-1 max-w-[calc(100%-3.25rem)] shrink-0 sm:h-20 sm:w-[32rem] sm:max-w-none sm:flex-none lg:w-[40rem]"
            onClick={closeMobile}
          >
            <Image
              src="/logo2.png"
              alt="Evergreen Solutions FL logo"
              fill
              sizes="(max-width: 640px) 240px, (max-width: 1024px) 32rem, 40rem"
              className="object-contain object-left"
              priority
            />
          </Link>

          <nav className="hidden shrink-0 flex-nowrap items-center gap-5 lg:flex xl:gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-sm font-medium text-brand-darkGreen transition-colors duration-200 hover:text-brand-midGreen"
              >
                {link.label}
              </Link>
            ))}
            <Button href="#request-quote" variant="primary" className="shrink-0 whitespace-nowrap">
              Request a Quote ▶
            </Button>
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="relative z-50 shrink-0 rounded-md p-2 text-brand-darkGreen ring-brand-darkGreen/20 hover:bg-brand-darkGreen/5 focus-visible:outline-none focus-visible:ring-2 lg:hidden"
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
      </motion.header>
    </>
  );
}
