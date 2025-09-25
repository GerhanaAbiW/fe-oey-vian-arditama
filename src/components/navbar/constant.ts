import { NavbarProps } from "./type";

export const DEFAULT_NAVBAR: NavbarProps = {
  brand: "Oey Vian Arditama",
  height: "64px",
  buttons: [
    { text: "DASHBOARD", link: "/dashboard" },
    { text: "PRODUCT", link: "/products" },
  ],
  cta: { text: "Get Quote", link: "/contact" },
};
