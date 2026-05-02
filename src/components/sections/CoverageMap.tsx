"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import FloridaMap from "@/components/ui/FloridaMap";
import { PHOTO_URLS } from "@/lib/constants";

const benefits = [
  "Native Restoration",
  "Land Management",
  "Habitat Consulting",
  "Invasive Species Removal",
  "Sustainable Ecosystem Practices",
];

export default function CoverageMap() {
  return (
    <section id="about-us" className="section-padding bg-brand-sand">
      <div className="container grid gap-10 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-2xl bg-white p-7 shadow-soft"
        >
          <SectionHeading eyebrow="Key Florida Coverage Areas" title="Key Florida Coverage Areas" />
          <p className="mt-5 max-w-xl text-brand-muted">
            Florida Coverage on ecological restoration services, sustainable land
            management, diverse and unique solutions.
          </p>
          <p className="mt-5 font-semibold text-brand-darkGreen">Benefits and Results:</p>
          <ul className="mt-3 space-y-2 text-brand-muted">
            {benefits.map((benefit) => (
              <li key={benefit}>✦ {benefit}</li>
            ))}
          </ul>
          <div className="relative mt-6 h-36 overflow-hidden rounded-xl">
            <Image
              src={PHOTO_URLS.coverageAccent}
              alt="Aerial view of Florida's diverse natural landscapes"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover opacity-50"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-white p-6 shadow-soft"
        >
          <FloridaMap />
        </motion.div>
      </div>
    </section>
  );
}
