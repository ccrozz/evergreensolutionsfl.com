import type { IconProps } from "@phosphor-icons/react";
import { Barn, Broom, Carrot, Leaf } from "@phosphor-icons/react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

export type Service = {
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  title: string;
  body: string;
  image: string;
  alt: string;
};

export const services: Service[] = [
  {
    icon: Carrot,
    title: "Edible Gardens & Food Forests",
    body: "Raised beds, perennial fruit layers, and Florida-season crops—so clients grow food steps from the kitchen, not just curb appeal.",
    image: "/restoration/edible-garden-after.jpg",
    alt: "Productive raised-bed edible garden beside a Florida home",
  },
  {
    icon: Leaf,
    title: "Native Restoration",
    body: "Invasive species cleared and replaced with layered native plantings that support pollinators, hold soil, and cut long-term maintenance.",
    image: "/restoration/residential-after.jpg",
    alt: "Florida home front yard restored with native grasses and pollinator plantings",
  },
  {
    icon: Barn,
    title: "Commercial Restoration",
    body: "Farmland, wetland buffers, grazing pasture, and BMP work at scale—restoring degraded acreage for compliance, productivity, and land value.",
    image: "/restoration/wetland-buffer-after.jpg",
    alt: "Commercial farm edge with vegetated wetland buffer and BMP swale",
  },
  {
    icon: Broom,
    title: "Invasive Species Clearing",
    body: "Brazilian pepper, cogongrass, and other invasives removed at scale—then replanted with natives so land is usable and compliant again.",
    image: "/restoration/invasive-clearing-after.jpg",
    alt: "Cleared commercial fence line after invasive species removal and native replanting",
  },
];
