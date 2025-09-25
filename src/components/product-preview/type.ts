export interface ProductSpecBullet {
  text: string;
}

export interface ProductPreviewItem {
  title: string; // e.g., “Briquette Charcoal (various sizes)”
  bullets: ProductSpecBullet[];
  ctaLabel?: string; // “View Specs”
  ctaHref?: string; // link detail
}

export interface ProductPreviewProps {
  id?: string;
  sectionTitle: string; // “Products”
  items: ProductPreviewItem[];
  className?: string;
}
