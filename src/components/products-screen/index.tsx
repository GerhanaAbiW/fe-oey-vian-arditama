"use client";

import { useState, useMemo } from "react";

import ProductsFilters from "@/components/products-filters";
import { PRODUCTS_FILTERS } from "@/components/products-filters/constant";

import ProductCard from "@/components/product-card";
import { PRODUCT_CARDS_MOCK } from "@/components/product-card/constant";

import QuickSpecs from "@/components/quick-specs";
import { QUICK_SPECS_TABLE } from "@/components/quick-specs/constant";

import ContactStrip from "@/components/contact-strip";
import { CONTACT_STRIP } from "@/components/contact-strip/constant";

import { ProductsScreenProps } from "./type";

export default function ProductsScreen({
  filters = PRODUCTS_FILTERS,
  products = PRODUCT_CARDS_MOCK,
  quickSpecs = QUICK_SPECS_TABLE,
}: ProductsScreenProps) {
  const [active, setActive] = useState(filters.active ?? "all");

  const filtered = useMemo(() => {
    const v = active;
    return products.filter((p) => {
      if (v === "all") return true;
      const t = p.title.toLowerCase();
      if (v === "briquettes") return t.includes("briquette");
      if (v === "rice-husk") return t.includes("rice husk (raw)");
      if (v === "rice-husk-charcoal") return t.includes("rice husk charcoal");
      return true;
    });
  }, [active, products]);

  return (
    <main className="bg-white">
      <ProductsFilters {...filters} active={active} onChange={setActive} />

      <section className="mx-auto max-w-7xl px-6 py-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
      </section>

      <QuickSpecs {...quickSpecs} />
      <ContactStrip {...CONTACT_STRIP} />
    </main>
  );
}
