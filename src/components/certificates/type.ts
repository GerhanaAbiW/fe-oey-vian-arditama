export interface CertificateLogo {
  alt: string;
  src: string; // path di /public/...
  width?: number;
  height?: number;
}

export interface CertificatesProps {
  id?: string;
  sectionTitle: string; // “Certifications & Partners”
  logos: CertificateLogo[]; // grid of logos
  className?: string;
}
