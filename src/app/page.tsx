// src/app/page.tsx
import Hero from "@/components/hero";
import { DEFAULT_HERO } from "@/components/hero/constant";

import Highlights from "@/components/highlights";
import { HIGHLIGHTS_SECTION } from "@/components/highlights/constant";

import ProductPreview from "@/components/product-preview";
import { PRODUCT_PREVIEW_SECTION } from "@/components/product-preview/constant";

import Certificates from "@/components/certificates";
import { CERTIFICATES_SECTION } from "@/components/certificates/constant";

import ContactStrip from "@/components/contact-strip";
import { CONTACT_STRIP } from "@/components/contact-strip/constant";

export default function Home() {
  return (
    <main>
      <Hero {...DEFAULT_HERO} />
      <Highlights {...HIGHLIGHTS_SECTION} />
      <ProductPreview {...PRODUCT_PREVIEW_SECTION} />
      <Certificates {...CERTIFICATES_SECTION} />
      <ContactStrip {...CONTACT_STRIP} />
    </main>
  );
}
