export type Project = {
  slug: string;
  title: string;
  type: string;
  image: string;
  detail: string;
  images: string[];
  /** Full 360° equirectangular image, ideally 2:1. Null until available. */
  panorama: string | null;
};

export const projects: Project[] = [
  {
    slug: "everyday-living",
    panorama: null,
    title: "The art of everyday living",
    type: "Living spaces",
    image: "/image/RBM03176.JPG",
    detail:
      "Warm terracotta, sculptural furniture and thoughtful lighting come together in a living space made for connection.",
    images: ["/image/RBM03176.JPG", "/image/RBM03182.JPG"],
  },
  {
    slug: "softer-sanctuary",
    panorama: null,
    title: "A softer kind of sanctuary",
    type: "Private retreats",
    image: "/image/_DSC9756-Edit.jpg",
    detail:
      "Soft blush tones, a bespoke arched headboard and delicate botanical textures create a restful personal retreat.",
    images: ["/image/_DSC9756-Edit.jpg", "/image/_DSC9744-Edit.jpg"],
  },
  {
    slug: "considered-details",
    panorama: null,
    title: "Considered in every detail",
    type: "Contemporary homes",
    image: "/image/_DSC9698-Edit.jpg",
    detail:
      "Clean lines, layered lighting and a restrained material palette give this contemporary home a quietly elegant character.",
    images: ["/image/_DSC9698-Edit.jpg", "/image/TV_unit.jpg"],
  },
];
export const services = [
  [
    "01",
    "Residential interiors",
    "Personal spaces, beautifully considered.",
    "From the first layout to the final fabric, we shape living rooms, bedrooms and kitchens around the way you live.",
  ],
  [
    "02",
    "Architecture & planning",
    "A strong foundation for your vision.",
    "Thoughtful spatial planning brings natural light, circulation and a sense of proportion into every part of your home.",
  ],
  [
    "03",
    "Renovation & restoration",
    "Familiar spaces. A fresh perspective.",
    "We reimagine existing spaces with considered materials, practical improvements and a deep respect for their character.",
  ],
  [
    "04",
    "Turnkey execution",
    "One vision, from beginning to end.",
    "Design, material selection, site coordination and finishing are brought together in one carefully managed process.",
  ],
];
