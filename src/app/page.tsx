// src/app/page.tsx
import Hero from "@/components/hero";
import { DEFAULT_HERO } from "@/components/hero/constant";

export default function Home() {
  return (
    <main>
      <Hero {...DEFAULT_HERO} />
    </main>
  );
}
