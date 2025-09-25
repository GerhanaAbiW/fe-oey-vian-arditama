export interface QuickSpecRow {
  product: string;
  ash?: string;
  moisture?: string;
  fc?: string;
  cv?: string;
  packing?: string;
}

export interface QuickSpecsProps {
  title: string;
  rows: QuickSpecRow[];
  className?: string;
}
