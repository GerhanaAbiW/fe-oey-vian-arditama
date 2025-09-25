export interface ProductsFilterItem {
  label: string;
  value: string;
}

export interface ProductsFiltersProps {
  title: string;
  subtitle?: string;
  items: ProductsFilterItem[];
  active?: string;
  className?: string;
  onChange?: (value: string) => void;
}
