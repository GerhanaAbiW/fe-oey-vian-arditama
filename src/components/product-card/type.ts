export interface ProductCardBullet {
  text: string;
}

export interface ProductCardProps {
  id?: string;
  imageSrc?: string;
  title: string;
  bullets: ProductCardBullet[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}
