import { ContactStripProps } from "./type";

export const CONTACT_STRIP: ContactStripProps = {
  id: "contact",
  message: "Ready to talk? Request a quote or message us on WhatsApp.",
  primary: { label: "Request Quote", href: "/contact" },
  secondary: {
    label: "WhatsApp Chat",
    href: "https://wa.me/6281234567890",
    external: true,
  },
};
