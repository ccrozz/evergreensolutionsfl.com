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
    <section id="about-us" className="section-padding bg-brand-sand">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="order-2 flex flex-col justify-center rounded-2xl bg-white p-5 shadow-soft sm:p-8 lg:order-1 lg:p-10"
          >
            <SectionHeading
              eyebrow="Where we work"
              title="Florida-wide field coverage"
              description="From Panhandle ranches to South Florida residential gardens—we bring restoration, edible landscapes, and commercial BMP work across the state."
            />

            <p className="mt-6 font-semibold text-brand-darkGreen">What we deliver on every site</p>
            <ul className="mt-4 space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
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

            <div className="mt-8 border-t border-brand-darkGreen/10 pt-6 lg:hidden">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-midGreen">
                Active coverage areas
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {regions.map((region) => (
                  <span
                    key={region}
                    className="rounded-full bg-brand-cream px-3 py-1.5 text-xs font-medium text-brand-darkGreen ring-1 ring-brand-darkGreen/10"
                  >
                    {region}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="order-1 lg:order-2"
          >
            <div className="flex h-full min-h-0 flex-col rounded-2xl bg-white p-4 shadow-soft sm:p-5 lg:min-h-[36rem] lg:p-6">
              <FloridaMap className="min-h-[18rem] flex-1 sm:min-h-[22rem] lg:min-h-[32rem]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
