import * as React from "react";
export interface ButtonItem {
  text: string;
  link: string;
  external?: boolean;
}

export interface NavbarProps {
  style?: React.CSSProperties;
  height?: string;
  brand?: string;
  logo?: string;
  buttons?: ButtonItem[];
  cta?: ButtonItem;
  className?: string;
}
