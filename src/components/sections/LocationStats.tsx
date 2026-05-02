"use client";

import { motion } from "framer-motion";
import FloridaMap from "@/components/ui/FloridaMap";
import SectionHeading from "@/components/ui/SectionHeading";

const stats = [
  { value: 40, suffix: "+", label: "Projects Completed" },
  { value: 12, suffix: "+", label: "Counties Covered" },
  { value: 500, suffix: "+", label: "Acres Restored" },
];

function CountBubble({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      className="rounded-2xl border border-brand-darkGreen/15 bg-brand-cream p-6 text-center"
    >
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay }}
        className="font-display text-4xl text-brand-darkGreen"
      >
        {value}
        {suffix}
      </motion.p>
      <p className="mt-2 text-sm font-semibold text-brand-muted">{label}</p>
    </motion.div>
  );
}

export default function LocationStats() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <SectionHeading eyebrow="Location" title="Key Florida Coverage Areas" centered />
        <div className="mt-10">
          <div className="mx-auto max-w-lg rounded-2xl bg-brand-sand/60 p-8">
            <FloridaMap />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-brand-muted">
            From coastal restoration to inland ecosystem planning, Evergreen
            Solutions FL delivers statewide ecological support with local precision.
          </p>
          <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <CountBubble key={stat.label} {...stat} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
