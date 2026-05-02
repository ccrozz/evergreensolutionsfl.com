import Hero from "@/components/sections/Hero";
import ServicesStrip from "@/components/sections/ServicesStrip";
import CoverageMap from "@/components/sections/CoverageMap";
import LocationStats from "@/components/sections/LocationStats";
import TeamSection from "@/components/sections/TeamSection";
import CaseStudies from "@/components/sections/CaseStudies";
import CtaBand from "@/components/sections/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesStrip />
      <CoverageMap />
      <LocationStats />
      <TeamSection />
      <CaseStudies />
      <CtaBand />
    </>
  );
}
