"use client";

import { CheckCircle } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import FloridaMap from "@/components/ui/FloridaMap";

const benefits = [
  "Edible Gardens & Food Forests",
  "Native Restoration",
  "Commercial Restoration",
  "Invasive Species Removal",
  "BMP & Wetland Buffers",
];

const regions = [
  "Jacksonville",
  "Orlando",
  "Tampa",
  "Fort Myers",
  "Miami",
  "Brevard County",
  "Broward County",
  "Alachua County",
  "Highlands County",
];

export default function CoverageMap() {
  return (
    <section id="about-us" className="section-padding overflow-x-clip bg-brand-sand">
      <div className="container section-stack">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-white p-4 shadow-soft sm:p-8 lg:p-10"
        >
          <SectionHeading
            eyebrow="Where we work"
            title="Florida-wide field coverage"
            mobileDescription="Restoration, edible landscapes, and BMP work from the Panhandle to South Florida."
            description="From Panhandle ranches to South Florida residential gardens—we bring restoration, edible landscapes, and commercial BMP work across the state."
          />

          <p className="mt-5 font-semibold text-brand-darkGreen sm:mt-6">
            What we deliver on every site
          </p>
          <ul className="mt-3 space-y-2.5 sm:mt-4 sm:space-y-3">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2.5 sm:gap-3">
                <CheckCircle
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-midGreen"
                  weight="duotone"
                  aria-hidden
                />
                <span className="text-sm leading-relaxed text-brand-muted sm:text-base">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t border-brand-darkGreen/10 pt-5 lg:hidden">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-brand-midGreen">
              Active coverage areas
            </p>
            <div className="mt-2.5 flex flex-wrap gap-1.5 sm:mt-3 sm:gap-2">
              {regions.map((region) => (
                <span
                  key={region}
                  className="rounded-full bg-brand-cream px-2.5 py-1 text-[0.6875rem] font-medium text-brand-darkGreen ring-1 ring-brand-darkGreen/10 sm:px-3 sm:py-1.5 sm:text-xs"
                >
                  {region}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="rounded-2xl bg-white p-3 shadow-soft sm:p-5 lg:min-h-[36rem] lg:p-6">
            <FloridaMap className="min-h-[14rem] sm:min-h-[22rem] lg:min-h-[32rem]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
