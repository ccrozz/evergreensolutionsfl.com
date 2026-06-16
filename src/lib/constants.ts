export const PHOTO_URLS = {
  /** Hero fallback poster while video loads */
  hero:
    "https://images.unsplash.com/photo-1651283610197-c1d0c9c39bca?auto=format&fit=crop&w=1920&q=75&sat=-8",
  services: {
    native:
      "https://images.unsplash.com/photo-1634579851234-ab3165a47860?auto=format&fit=crop&w=800&q=75&sat=-16",
    land:
      "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=800&q=75&sat=-10",
    species:
      "https://images.unsplash.com/photo-1745691635270-62e173bccb98?auto=format&fit=crop&w=800&q=75&sat=-12",
    habitat:
      "https://images.unsplash.com/photo-1651283610197-c1d0c9c39bca?auto=format&fit=crop&w=800&q=75&sat=-18",
  },
  /** Coverage strip — sunlit meadow with small native-style wildflowers in grass */
  coverageAccent:
    "https://images.unsplash.com/photo-1745691635270-62e173bccb98?auto=format&fit=crop&w=1200&q=75&sat=-12",
  caseStudies: {
    /** Soil moisture / precision irrigation — young plants in moist field soil */
    waterSoil:
      "https://images.unsplash.com/photo-1457530378978-8bac673b8062?auto=format&fit=crop&w=900&q=75&sat=-12",
    /** Watermelon field at harvest time */
    watermelonPatch:
      "https://plus.unsplash.com/premium_photo-1755878402110-ff34a1c25afb?auto=format&fit=crop&w=900&q=75&sat=-8",
    /** Cattle on pasture — rotational grazing & buffer themes */
    cattlePasture:
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=900&q=75&sat=-10",
  },
  /** Team section hero image (`public/team.webp`) */
  teamAccent: "/team.webp",
  teamHeadshot: "/coleman-headshot.png",
  /** Local headshot (`public/grayheadshot.png`) */
  teamGraysonAvatar: "/grayheadshot.png",
  /**
   * @deprecated Use `restorationShowcases` in `src/lib/data/restorationShowcases.ts`
   */
  restoration: {
    after:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=85",
    before:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=85",
  },
};

/** Rotating hero backgrounds — 1920×1280 stills in `public/heroes/` */
export const HERO_BACKGROUNDS = [
  "/heroes/hero-meadow.jpg",
  "/heroes/hero-food-forest.jpg",
  "/heroes/hero-wetland.jpg",
  "/heroes/hero-pasture.jpg",
  "/heroes/hero-hammock.jpg",
] as const;

/** First hero frame — used as initial poster / OG fallback */
export const HERO_POSTER_SRC = HERO_BACKGROUNDS[0];

export const NTR_LVR_URL = "https://ntrlvr.com";

/** Live designer embedded in the NTR LVR phone mockup (Florida pre-selected) */
export const NTR_LVR_DESIGNER_URL = "https://www.ntrlvr.com/designer?state=FL";
