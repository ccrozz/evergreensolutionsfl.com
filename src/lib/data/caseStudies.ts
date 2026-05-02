import { PHOTO_URLS } from "@/lib/constants";

export type CaseStudy = {
  tag: string;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  href?: string;
};

/** Themes mirror UF/IFAS Extension public reporting; imagery stays the site’s green Florida palette. */
export const caseStudies: CaseStudy[] = [
  {
    tag: "Water & BMPs",
    title: "40% Less Water, Same Crop in Southwest Florida",
    excerpt:
      "With UF/IFAS Extension Hendry County, a seed research farm east of Fort Myers adopted soil moisture sensors and fine-tuned irrigation—cutting annual water use about 40% while trimming fertilizer, pumping costs, and risk to the shared aquifer.",
    image: PHOTO_URLS.caseStudies.waterSoil,
    alt: "Young crop seedlings in dark, moist soil—evoking soil moisture probes and careful irrigation timing",
    href: "https://blogs.ifas.ufl.edu/news/2025/01/15/uf-ifas-extension-helps-southwest-florida-by-reducing-water-use-on-farm-by-40/",
  },
  {
    tag: "Suwannee Valley",
    title: "Watermelon Growers Save Billions of Gallons",
    excerpt:
      "Over decades, UF/IFAS Extension helped Suwannee Valley growers move to plastic mulch, transplants, and drip irrigation. Growers surveyed in 2016 reported roughly 50–80% less irrigation water per acre—on the order of two billion gallons saved each year across the region’s watermelon acres.",
    image: PHOTO_URLS.caseStudies.watermelonPatch,
    alt: "Wide rows of green melon vines in a sunlit commercial patch stretching toward the treeline",
    href: "https://blogs.ifas.ufl.edu/news/2016/08/18/ufifas-extension-in-suwannee-valley-region-helps-watermelon-growers-save-water-fuel-fertilizer/",
  },
  {
    tag: "Grazing & Wetlands",
    title: "Buffers, Fencing, and Cleaner Water to the Peace River",
    excerpt:
      "On a 75-acre Hardee County farm, UF/IFAS Extension helped control invasive weeds, adopt soil testing and rotational grazing, and use cost-share programs for fencing and solar wells—keeping cattle out of seasonal wetlands so runoff is cleaner on its way to the Gulf.",
    image: PHOTO_URLS.caseStudies.cattlePasture,
    alt: "Cattle grazing a green pasture at golden hour, suggesting rotational grazing and pasture buffers",
    href: "https://blogs.ifas.ufl.edu/news/2024/10/17/cutting-edge-science-from-uf-ifas-extension-helps-farmer-preserve-water-other-parts-of-his-ecosystem/",
  },
];
