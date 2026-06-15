import Hero from "@/components/sections/Hero";
import ServicesStrip from "@/components/sections/ServicesStrip";
import RestorationShowcase from "@/components/sections/RestorationShowcase";
import NtrLvrSection from "@/components/sections/NtrLvrSection";
import CoverageMap from "@/components/sections/CoverageMap";
import TeamSection from "@/components/sections/TeamSection";
import CaseStudies from "@/components/sections/CaseStudies";
import CtaBand from "@/components/sections/CtaBand";

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
