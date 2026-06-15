"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import TeamCard from "@/components/ui/TeamCard";
import { teamMembers } from "@/lib/data/team";
import { PHOTO_URLS } from "@/lib/constants";

export default function TeamSection() {
  return (
    <section id="team" className="section-padding bg-brand-cream">
      <div className="container">
        <SectionHeading eyebrow="Meet The Team" title="Field Leadership You Can Trust" />
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative min-h-[240px] overflow-hidden rounded-2xl sm:min-h-[380px] lg:min-h-[520px]"
          >
            <Image
              src={PHOTO_URLS.teamAccent}
              alt="Evergreen Solutions FL team conducting an ecological field survey"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
          <div className="grid gap-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
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
