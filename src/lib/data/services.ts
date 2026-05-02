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
    alt: "Restoration ecologists planting native seedlings in a Florida field",
  },
  {
    icon: Trees,
    title: "Land Management",
    body: "Providing ecological restoration services, sustainable and diverse practices, and comprehensive land management.",
    image: PHOTO_URLS.services.land,
    alt: "A managed Florida grassland landscape under golden light",
  },
  {
    icon: FlaskConical,
    title: "Species Assessment",
    body: "Bioavailability and best-species management areas to preserve Florida's diverse and unique ecosystems.",
    image: PHOTO_URLS.services.species,
    alt: "Dense native fern canopy representing biodiversity in Florida ecosystems",
  },
  {
    icon: Home,
    title: "Habitat Consulting",
    body: "Habitat consulting, habitat analysis, and ecosystem maximization for Florida's coastal and inland environments.",
    image: PHOTO_URLS.services.habitat,
    alt: "Mangrove root system in Florida coastal habitat",
  },
];
