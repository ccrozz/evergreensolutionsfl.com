"use client";

import Link from "next/link";
import { ArrowSquareOut, MapTrifold, Plant, ShareNetwork } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { Fragment } from "react";
import NtrLvrPhoneMockup from "@/components/ui/NtrLvrPhoneMockup";
import { NTR_LVR_DESIGNER_URL, NTR_LVR_URL } from "@/lib/constants";

const STEPS = ["You plan it", "You send it", "We build it"];

const FEATURES = [
  {
    icon: MapTrifold,
    title: "Plot your land",
    body: "Outline beds, buffers, and hardscape on a real map canvas.",
  },
  {
    icon: Plant,
    title: "Place native plants",
    body: "Drag Florida-friendly species into a layout you can actually build.",
  },
  {
    icon: ShareNetwork,
    title: "Send when ready",
    body: "Share the plan with us in one tap to schedule a site visit.",
  },
];

function NtrLvrCtas({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <a
        href={NTR_LVR_DESIGNER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-brand-darkGreen px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#2E7D32] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-leafGreen focus-visible:ring-offset-2 sm:w-auto sm:px-8"
      >
        Open NTR LVR
        <ArrowSquareOut size={18} weight="bold" aria-hidden />
      </a>
      <Link
        href="#request-quote"
        className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-brand-muted underline decoration-brand-darkGreen/30 underline-offset-4 transition hover:text-brand-darkGreen hover:decoration-brand-darkGreen lg:text-left"
      >
        Or request a visit
      </Link>
    </div>
  );
}

export default function NtrLvrSection() {
  return (
    <section id="ntr-lvr" className="section-padding overflow-x-clip bg-brand-cream">
      <div className="container">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(300px,420px)] lg:items-center lg:gap-12 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1"
          >
            <span className="mb-4 inline-flex rounded-full border border-brand-darkGreen/20 bg-brand-leafGreen/15 px-4 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-brand-darkGreen sm:text-xs">
              Turn this into a real plan
            </span>

            <p className="mb-2 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-brand-midGreen sm:mb-3 sm:text-xs sm:tracking-[0.22em]">
              Our app
            </p>
            <h2 className="text-balance font-display text-[1.625rem] leading-tight text-brand-darkGreen sm:text-3xl lg:text-4xl">
              NTR LVR — design your landscape.{" "}
              <em className="italic text-brand-midGreen">We build it.</em>
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-brand-muted sm:mt-3 sm:text-base lg:text-lg">
              Plan your plot, lay out beds and buffers, then send us the plan when
              you&apos;re ready for a site visit.
            </p>

            <ul className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold uppercase tracking-[0.1em] text-brand-muted sm:mt-6 sm:gap-2 sm:text-[0.6875rem] sm:tracking-[0.12em]">
              {STEPS.map((step, index) => (
                <Fragment key={step}>
                  {index > 0 ? (
                    <li aria-hidden className="list-none text-brand-midGreen/70">
                      ·
                    </li>
                  ) : null}
                  <li
                    className={`list-none ${
                      index === STEPS.length - 1 ? "text-brand-darkGreen" : ""
                    }`}
                  >
                    {step}
                  </li>
                </Fragment>
              ))}
            </ul>

            <ul className="mt-6 hidden gap-4 lg:grid lg:grid-cols-1 xl:grid-cols-3 xl:gap-3">
              {FEATURES.map(({ icon: Icon, title, body }) => (
                <li
                  key={title}
                  className="list-none rounded-2xl border border-brand-darkGreen/10 bg-white/70 p-4 shadow-sm"
                >
                  <Icon
                    className="h-6 w-6 text-brand-midGreen"
                    weight="duotone"
                    aria-hidden
                  />
                  <p className="mt-2 font-display text-base text-brand-darkGreen">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-brand-muted">{body}</p>
                </li>
              ))}
            </ul>

            <NtrLvrCtas className="mt-5 hidden sm:mt-8 lg:flex lg:flex-row lg:flex-wrap lg:items-center" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="order-2 flex flex-col items-center lg:items-end lg:justify-center"
          >
            <div className="relative w-full max-w-[200px] sm:max-w-[240px] lg:max-w-none">
              <div
                className="pointer-events-none absolute -inset-6 hidden rounded-[3rem] bg-gradient-to-br from-brand-leafGreen/20 via-brand-midGreen/10 to-transparent blur-2xl lg:block"
                aria-hidden
              />
              <NtrLvrPhoneMockup className="relative lg:max-w-[330px] xl:max-w-[370px]" />
            </div>
            <NtrLvrCtas className="mt-5 w-full max-w-[200px] sm:max-w-[240px] lg:hidden" />
          </motion.div>
        </div>

        <p className="mt-8 text-center text-xs leading-relaxed text-brand-muted lg:mt-10">
          Built by Evergreen Solutions FL ·{" "}
          <a
            href={NTR_LVR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-darkGreen underline decoration-brand-darkGreen/30 underline-offset-2 transition hover:text-brand-midGreen"
          >
            ntrlvr.com
          </a>
        </p>
      </div>
    </section>
  );
}
