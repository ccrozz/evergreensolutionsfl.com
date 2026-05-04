import { FlaskConical, Home, Sprout, Trees } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PHOTO_URLS } from "@/lib/constants";

export type Service = {
  icon: LucideIcon;
  title: string;
  body: string;
  image: string;
  alt: string;
};

export const services: Service[] = [
  {
    icon: Sprout,
    title: "Native Restoration",
    body: "Providing leading ecological restoration services, sustainable land practices, and invasive species management.",
    image: PHOTO_URLS.services.native,
    alt: "Cypress trees and knees in a Florida blackwater wetland restoration setting",
  },
  {
    icon: Trees,
    title: "Land Management",
    body: "Providing ecological restoration services, sustainable and diverse practices, and comprehensive land management.",
    image: PHOTO_URLS.services.land,
    alt: "Organized agricultural field rows representing practical Florida land management",
  },
  {
    icon: FlaskConical,
    title: "Species Assessment",
    body: "Bioavailability and best-species management areas to preserve Florida's diverse and unique ecosystems.",
    image: PHOTO_URLS.services.species,
    alt: "Native wildflowers in a Florida meadow for species identification and assessment",
  },
  {
    icon: Home,
    title: "Habitat Consulting",
    body: "Habitat consulting, habitat analysis, and ecosystem maximization for Florida's coastal and inland environments.",
    image: PHOTO_URLS.services.habitat,
    alt: "Florida wetland with native vegetation used for habitat planning and consulting",
  },
];
