import { ProductCardProps } from "./type";

export const PRODUCT_CARDS_MOCK: ProductCardProps[] = [
  {
    title: "Briquette Hex 5cm",
    bullets: [
      {
        text: "Ash ≤5% • Moisture ≤6% • FC ≥75% • CV ≥7000 kcal/kg • Packing: 10 kg",
      },
    ],
    ctaLabel: "View Specs",
    ctaHref: "/products/briquette-hex",
  },
  {
    title: "Briquette Cube 2.5cm",
    bullets: [
      {
        text: "Ash ≤3% • Moisture ≤5% • FC ≥80% • CV ≥7500 kcal/kg • Packing: 5/10 kg",
      },
    ],
    ctaLabel: "View Specs",
    ctaHref: "/products/briquette-cube",
  },
  {
    title: "Rice Husk (Raw)",
    bullets: [
      {
        text: "Moisture 8–12% • Bulk Density ~100–150 kg/m³ • Packaging: bulk/bag",
      },
    ],
    ctaLabel: "View Specs",
    ctaHref: "/products/rice-husk-raw",
  },
  {
    title: "Rice Husk Charcoal",
    bullets: [
      { text: "Ash content • Moisture • Particle size • Packaging options" },
    ],
    ctaLabel: "View Specs",
    ctaHref: "/products/rice-husk-charcoal",
  },
  {
    title: "Custom OEM Branding",
    bullets: [
      {
        text: "Private label cartons • Inner plastic • Palletization • OEM stickers",
      },
    ],
    ctaLabel: "Request Quote",
    ctaHref: "/contact",
  },
  {
    title: "Accessories & Packing",
    bullets: [
      {
        text: "Inner plastic, master carton, strap & pallet, fumigation-ready",
      },
    ],
    ctaLabel: "Request Quote",
    ctaHref: "/contact",
  },
];
