"use client";

import Link from "next/link";
import { ArrowSquareOut } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import NtrLvrPhoneMockup from "@/components/ui/NtrLvrPhoneMockup";
import { NTR_LVR_URL } from "@/lib/constants";

const STEPS = ["You plan it", "You send it", "We build it"];

export default function NtrLvrSection() {
  return (
    <section id="ntr-lvr" className="section-padding bg-brand-cream">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex justify-center"
        >
          <span className="rounded-full border border-brand-darkGreen/20 bg-brand-leafGreen/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-darkGreen">
            Turn this into a real plan
          </span>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-midGreen">
              Our app
            </p>
            <p className="font-display text-3xl font-semibold text-brand-darkGreen sm:text-4xl">
              NTR LVR
            </p>
            <h2 className="mt-4 font-display text-3xl text-brand-darkGreen sm:text-4xl">
              Design your dream landscape.{" "}
              <em className="italic text-brand-midGreen">We come build it.</em>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-brand-muted">
              We built NTR LVR so you don&apos;t have to imagine it — you can plan it. Drag
           plants onto your own plot, lay out beds and buffers, and see how it comes
              together, all backed by our 20,000+ plant species database. When you&apos;ve got something you
              love, send it to us with one tap. Your plan becomes the starting point for a real site
              visit and a real crew.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-brand-muted">
              {STEPS.map((step, index) => (
                <span key={step} className="flex items-center gap-2">
                  {index > 0 ? (
                    <span className="text-brand-midGreen" aria-hidden>
                      →
                    </span>
                  ) : null}
                  <span className={index === STEPS.length - 1 ? "text-brand-darkGreen" : ""}>
                    {step}
                  </span>
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={NTR_LVR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-brand-darkGreen px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#2E7D32] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-leafGreen focus-visible:ring-offset-2"
              >
                Open NTR LVR
                <ArrowSquareOut size={18} weight="bold" aria-hidden />
              </a>
              <Link
                href="#request-quote"
                className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-muted underline decoration-brand-darkGreen/30 underline-offset-4 transition hover:text-brand-darkGreen hover:decoration-brand-darkGreen"
              >
                Or just request a visit
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="flex justify-center lg:justify-end"
          >
            <NtrLvrPhoneMockup />
          </motion.div>
        </div>

        <p className="mt-14 text-center text-xs text-brand-muted">
          NTR LVR is built and maintained by Evergreen Solutions FL ·{" "}
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
