import { ProductsFiltersProps } from "@/components/products-filters/type";
import { ProductCardProps } from "@/components/product-card/type";
import { QuickSpecsProps } from "@/components/quick-specs/type";

export interface ProductsScreenProps {
  filters?: ProductsFiltersProps;
  products?: ProductCardProps[];
  quickSpecs?: QuickSpecsProps;
}
