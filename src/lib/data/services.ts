import type { IconProps } from "@phosphor-icons/react";
import { Flask, House, Leaf, Tree } from "@phosphor-icons/react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import { PHOTO_URLS } from "@/lib/constants";

export type Service = {
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  title: string;
  body: string;
  image: string;
  alt: string;
};

export const services: Service[] = [
  {
    icon: Leaf,
    title: "Native Restoration",
    body: "Providing leading ecological restoration services, sustainable land practices, and invasive species management.",
    image: PHOTO_URLS.services.native,
    alt: "Cypress trees and knees in a Florida blackwater wetland restoration setting",
  },
  {
    icon: Tree,
    title: "Land Management",
    body: "Providing ecological restoration services, sustainable and diverse practices, and comprehensive land management.",
    image: PHOTO_URLS.services.land,
    alt: "Organized agricultural field rows representing practical Florida land management",
  },
  {
    icon: Flask,
    title: "Species Assessment",
    body: "Bioavailability and best-species management areas to preserve Florida's diverse and unique ecosystems.",
    image: PHOTO_URLS.services.species,
    alt: "Native wildflowers in a Florida meadow for species identification and assessment",
  },
  {
    icon: House,
    title: "Habitat Consulting",
    body: "Habitat consulting, habitat analysis, and ecosystem maximization for Florida's coastal and inland environments.",
    image: PHOTO_URLS.services.habitat,
    alt: "Florida wetland with native vegetation used for habitat planning and consulting",
  },
];
