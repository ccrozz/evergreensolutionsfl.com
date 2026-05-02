import { PHOTO_URLS } from "@/lib/constants";

export type TeamMember = {
  name: string;
  title: string;
  bio: string;
  photo: string;
  alt: string;
  /** Optional portfolio or project site */
  website?: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Coleman Crozier",
    title: "UF Alumni | Restoration Ecologist | Agronomist",
    bio: "UF Alumni specializing in Restoration Ecology and Resource Economics. Driven by a lifelong connection to Florida's unique landscapes, Coleman specializes in bridging the gap between economic resource management and regenerative land practices. With a background in Food and Resource Economics and advanced studies in Agroecology, Coleman focuses on building resilient ecosystems that thrive in our local climate. Whether he's applying technical problem-solving in the field or working hands-on in the soil, Coleman's goal is to implement sustainable solutions that honor the natural environment. That work pairs with Grayson's software and systems side—ecology and economics meet engineering so plans, monitoring, and BMPs can be carried through in the real world.",
    photo: PHOTO_URLS.teamHeadshot,
    alt: "Coleman Crozier — UF Alumni, Restoration Ecologist at Evergreen Solutions FL",
  },
  {
    name: "Grayson Crozier",
    title: "Software & Embedded Systems | Ag-Sector Technology",
    bio: "Grayson focuses on full-stack and embedded software where agriculture and natural-resources work depends on reliable systems—field data capture, sensor and control logic, irrigation and BMP-related tooling, maps and reporting, and integrations that keep science-based recommendations usable day to day. That engineering depth complements Coleman's restoration ecology and resource economics: one side reads the land, policy, and economics; the other builds the durable software, automation, and data paths so those insights scale beyond a single site visit.",
    photo: PHOTO_URLS.teamGraysonAvatar,
    alt: "Grayson Crozier — Software and embedded systems for agriculture and land-stewardship programs",

  },
];
