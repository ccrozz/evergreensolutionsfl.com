"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/lib/data/services";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function ServicesStrip() {
  return (
    <section id="services" className="section-padding overflow-x-clip bg-brand-cream">
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          title="Land that feeds families and restores Florida"
          mobileDescription="Edible gardens, native habitat, commercial restoration, and invasive clearing."
          description="Edible gardens, native habitat, commercial-acreage restoration, and invasive clearing—field-first work with measurable outcomes."
          centered
        />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mobile-carousel mt-6 sm:mt-10 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={item} className="mobile-carousel-item">
              <ServiceCard {...service} compact />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
