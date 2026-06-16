"use client";

import Link from "next/link";
import { ArrowSquareOut } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { Fragment } from "react";
import NtrLvrPhoneMockup from "@/components/ui/NtrLvrPhoneMockup";
import { NTR_LVR_DESIGNER_URL, NTR_LVR_URL } from "@/lib/constants";

const STEPS = ["You plan it", "You send it", "We build it"];

export default function NtrLvrSection() {
  return (
    <section id="ntr-lvr" className="section-padding overflow-x-clip bg-brand-cream">
      <div className="container section-stack">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-2 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-brand-midGreen sm:mb-3 sm:text-xs sm:tracking-[0.22em]">
            Our app
          </p>
          <h2 className="text-balance font-display text-[1.625rem] leading-tight text-brand-darkGreen sm:text-3xl lg:text-4xl">
            NTR LVR — design your landscape.{" "}
            <em className="italic text-brand-midGreen">We build it.</em>
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-brand-muted sm:mt-3 sm:text-base">
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

          <div className="mt-5 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
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
              className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-brand-muted underline decoration-brand-darkGreen/30 underline-offset-4 transition hover:text-brand-darkGreen hover:decoration-brand-darkGreen sm:text-left"
            >
              Or request a visit
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="flex justify-center"
        >
          <NtrLvrPhoneMockup />
        </motion.div>

        <p className="text-center text-xs leading-relaxed text-brand-muted">
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
