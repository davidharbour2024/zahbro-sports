export type NavigationItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navigation: NavigationItem[] = [
  { label: "Boxing", href: "#boxing", children: [{ label: "Boxing Gloves", href: "#boxing-gloves" }, { label: "Hand Wraps", href: "#hand-wraps" }, { label: "Punch Bags", href: "#punch-bags" }] },
  { label: "MMA", href: "#mma", children: [{ label: "MMA Gloves", href: "#mma-gloves" }, { label: "Grappling", href: "#grappling" }, { label: "Fight Shorts", href: "#fight-shorts" }] },
  { label: "Muay Thai", href: "#muay-thai", children: [{ label: "Thai Gloves", href: "#thai-gloves" }, { label: "Thai Pads", href: "#thai-pads" }, { label: "Shin Guards", href: "#shin-guards" }] },
  { label: "Gloves", href: "#gloves" },
  { label: "Protection", href: "#protection", children: [{ label: "Head Guards", href: "#head-guards" }, { label: "Mouth Guards", href: "#mouth-guards" }, { label: "Body Protection", href: "#body-protection" }] },
  { label: "Training Equipment", href: "#training" },
  { label: "Apparel", href: "#apparel" },
  { label: "Deals", href: "#deals" },
  { label: "New Arrivals", href: "#new-arrivals" },
];
