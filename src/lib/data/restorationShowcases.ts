export type RestorationShowcaseItem = {
  id: string;
  label: string;
  description: string;
  afterSrc: string;
  beforeSrc: string;
  afterAlt: string;
  beforeAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
  initialPosition?: number;
};

export type RestorationShowcaseCategory = {
  id: string;
  label: string;
  items: RestorationShowcaseItem[];
};

export const restorationShowcaseCategories: RestorationShowcaseCategory[] = [
  {
    id: "residential",
    label: "Residential",
    items: [
      {
        id: "edible-garden",
        label: "Edible Garden",
        description:
          "Raised beds and trellised crops designed for Florida's seasons—so clients grow vegetables, herbs, and cut flowers steps from the kitchen.",
        beforeSrc: "/restoration/edible-garden-before.jpg",
        afterSrc: "/restoration/edible-garden-after.jpg",
        beforeAlt:
          "Unused sandy side yard beside a Florida home before edible garden installation",
        afterAlt:
          "Same side yard with cedar raised beds, vegetables, herbs, and trellised crops ready to harvest",
        beforeLabel: "Before · Unused",
        afterLabel: "After · Growing",
        initialPosition: 44,
      },
      {
        id: "native-garden",
        label: "Native Garden",
        description:
          "Invasive species cleared and replaced with layered native plantings that support pollinators, hold soil, and cut long-term maintenance.",
        beforeSrc: "/restoration/residential-before.jpg",
        afterSrc: "/restoration/residential-after.jpg",
        beforeAlt:
          "Suburban Florida home with a bare empty dirt front yard before native landscape installation",
        afterAlt:
          "Same property after restoration with a lush layered native garden and pollinator plantings",
        beforeLabel: "Before · Invaded",
        afterLabel: "After · Restored",
        initialPosition: 42,
      },
      {
        id: "food-forest",
        label: "Food Forest",
        description:
          "Perennial fruit trees, shrubs, and groundcover planted in layers so families harvest citrus, berries, and herbs year-round—not just curb appeal.",
        beforeSrc: "/restoration/food-forest-before.jpg",
        afterSrc: "/restoration/food-forest-after.jpg",
        beforeAlt:
          "Florida backyard with patchy lawn and no productive plantings before food forest installation",
        afterAlt:
          "Same backyard with a layered food forest of fruit trees, edible shrubs, and mulch paths",
        beforeLabel: "Before · Lawn",
        afterLabel: "After · Harvest",
        initialPosition: 40,
      },
    ],
  },
  {
    id: "commercial",
    label: "Commercial",
    items: [
      {
        id: "farmland",
        label: "Land Restoration",
        description:
          "Bare or degraded acreage restored with pasture, wetland buffers, and ground cover that meets BMP goals and long-term land value.",
        beforeSrc: "/restoration/commercial-before.jpg",
        afterSrc: "/restoration/commercial-after.jpg",
        beforeAlt:
          "Dry bare commercial farmland with tilled brown soil before ecological restoration",
        afterAlt:
          "Same farmland restored with lush green pasture, wetland buffer, and healthy ground cover",
        beforeLabel: "Before · Degraded",
        afterLabel: "After · Restored",
        initialPosition: 38,
      },
      {
        id: "wetland-buffer",
        label: "Wetland Buffer",
        description:
          "Vegetated filter strips and swales along fields and ditches to slow runoff, protect water quality, and meet Florida BMP requirements.",
        beforeSrc: "/restoration/wetland-buffer-before.jpg",
        afterSrc: "/restoration/wetland-buffer-after.jpg",
        beforeAlt:
          "Eroded farm field edge with bare soil and an unbuffered drainage ditch before restoration",
        afterAlt:
          "Same ditch and field edge with a planted wetland buffer and vegetated BMP swale",
        beforeLabel: "Before · Eroded",
        afterLabel: "After · Buffered",
        initialPosition: 40,
      },
      {
        id: "invasive-clearing",
        label: "Invasive Clearing",
        description:
          "Brazilian pepper, cogongrass, and other invasives removed at scale—then replanted with natives so acreage is usable and compliant again.",
        beforeSrc: "/restoration/invasive-clearing-before.jpg",
        afterSrc: "/restoration/invasive-clearing-after.jpg",
        beforeAlt:
          "Dense invasive Brazilian pepper and cogongrass choking a commercial fence line before clearing",
        afterAlt:
          "Same fence line after invasive clearing with open pasture, native grasses, and young replanted trees",
        beforeLabel: "Before · Invaded",
        afterLabel: "After · Cleared",
        initialPosition: 42,
      },
      {
        id: "grazing-pasture",
        label: "Grazing Pasture",
        description:
          "Overgrazed ranch ground rebuilt with diverse forage, paddock planning, and soil cover—so livestock operations stay productive long-term.",
        beforeSrc: "/restoration/grazing-pasture-before.jpg",
        afterSrc: "/restoration/grazing-pasture-after.jpg",
        beforeAlt:
          "Overgrazed Florida cattle pasture with bare dirt patches and sparse weeds before restoration",
        afterAlt:
          "Same ranch pasture restored with thick native grasses and full ground cover for grazing",
        beforeLabel: "Before · Overgrazed",
        afterLabel: "After · Productive",
        initialPosition: 36,
      },
    ],
  },
];

/** @deprecated Use `restorationShowcaseCategories` */
export const restorationShowcases = restorationShowcaseCategories.flatMap(
  (category) => category.items,
);
