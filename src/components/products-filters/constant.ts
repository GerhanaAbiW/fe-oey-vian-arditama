import { ProductsFiltersProps } from "./type";

export const PRODUCTS_FILTERS: ProductsFiltersProps = {
  title: "Products",
  subtitle: "Two core lines: Briquettes and Rice Husk (raw & charcoal).",
  items: [
    { label: "All", value: "all" },
    { label: "Briquettes", value: "briquettes" },
    { label: "Rice Husk", value: "rice-husk" },
    { label: "Rice Husk Charcoal", value: "rice-husk-charcoal" },
  ],
  active: "all",
};
