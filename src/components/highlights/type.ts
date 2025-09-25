export interface HighlightItem {
  title: string;
  description: string;
}

export interface HighlightsProps {
  id?: string;
  eyebrow?: string; // “Sustainability • Quality Control …”
  title: string; // “Why Choose OVA”
  items: HighlightItem[];
  className?: string;
}
