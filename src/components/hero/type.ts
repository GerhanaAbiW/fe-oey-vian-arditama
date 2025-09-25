import * as React from "react";

export interface HeroButton {
  text: string;
  href: string;
  external?: boolean;
}

export interface HeroProps {
  style?: React.CSSProperties;
  className?: string;
  title: string;
  subtitle?: string;
  primaryCta?: HeroButton;
  secondaryCta?: HeroButton;
  mediaSrc?: string;
  mediaAlt?: string;
}
