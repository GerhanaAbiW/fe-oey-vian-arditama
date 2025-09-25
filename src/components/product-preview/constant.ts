import { ProductPreviewProps } from "./type";

export const PRODUCT_PREVIEW_SECTION: ProductPreviewProps = {
  id: "products",
  sectionTitle: "Products",
  items: [
    {
      title: "Briquette Charcoal (various sizes)",
      bullets: [
        { text: "Ash %, Moisture %, Fixed Carbon %, Calorific Value, Packing" },
      ],
      ctaLabel: "View Specs",
      ctaHref: "/products/briquette-charcoal",
    },
    {
      title: "Rice Husk & Rice Husk Charcoal",
      bullets: [{ text: "Grades, Moisture, Bulk Density, Packaging Options" }],
      ctaLabel: "View Specs",
      ctaHref: "/products/rice-husk",
    },
  ],
};
