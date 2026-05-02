"use client";

import { motion } from "framer-motion";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { caseStudies } from "@/lib/data/caseStudies";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section-padding bg-white">
      <div className="container">
        <SectionHeading
          eyebrow="Case studies"
          title="Stories from Florida Extension work"
          description="These highlights follow themes reported by UF/IFAS Extension—water savings, nutrient BMPs, and stewardship on real Florida farms and wetlands. Open a card to read the full IFAS article."
          centered
          titleClassName="text-5xl"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CaseStudyCard {...study} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
