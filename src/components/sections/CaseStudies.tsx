"use client";

import { motion } from "framer-motion";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { caseStudies } from "@/lib/data/caseStudies";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section-padding overflow-x-clip bg-white">
      <div className="container">
        <SectionHeading
          eyebrow="Case studies"
          title="Stories from Florida Extension work"
          mobileDescription="UF/IFAS Extension themes—water savings, nutrient BMPs, and stewardship on real Florida land."
          description="These highlights follow themes reported by UF/IFAS Extension—water savings, nutrient BMPs, and stewardship on real Florida farms and wetlands. Open a card to read the full IFAS article."
          centered
          titleClassName="sm:text-4xl lg:text-5xl"
        />
        <div className="mobile-carousel mt-6 sm:mt-10 sm:grid-cols-1 lg:grid lg:grid-cols-3 lg:gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="mobile-carousel-item lg:w-auto"
            >
              <CaseStudyCard {...study} compact />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
