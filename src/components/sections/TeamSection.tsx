"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import TeamCard from "@/components/ui/TeamCard";
import { teamMembers } from "@/lib/data/team";
import { PHOTO_URLS } from "@/lib/constants";

export default function TeamSection() {
  return (
    <section id="team" className="section-padding overflow-x-clip bg-brand-cream">
      <div className="container">
        <SectionHeading eyebrow="Meet The Team" title="Field Leadership You Can Trust" />
        <div className="mt-6 section-stack sm:mt-10 lg:grid lg:grid-cols-2 lg:items-start lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-[16/10] lg:min-h-[520px] lg:aspect-auto"
          >
            <Image
              src={PHOTO_URLS.teamAccent}
              alt="Evergreen Solutions FL team conducting an ecological field survey"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              quality={80}
              loading="lazy"
            />
          </motion.div>
          <div className="grid gap-3 sm:gap-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <TeamCard {...member} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
