import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import ServicesStrip from "@/components/sections/ServicesStrip";

const RestorationShowcase = dynamic(
  () => import("@/components/sections/RestorationShowcase"),
);
const NtrLvrSection = dynamic(() => import("@/components/sections/NtrLvrSection"));
const CoverageMap = dynamic(() => import("@/components/sections/CoverageMap"));
const TeamSection = dynamic(() => import("@/components/sections/TeamSection"));
const CaseStudies = dynamic(() => import("@/components/sections/CaseStudies"));
const CtaBand = dynamic(() => import("@/components/sections/CtaBand"));

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesStrip />
      <RestorationShowcase />
      <NtrLvrSection />
      <CoverageMap />
      <TeamSection />
      <CaseStudies />
      <CtaBand />
    </>
  );
}
