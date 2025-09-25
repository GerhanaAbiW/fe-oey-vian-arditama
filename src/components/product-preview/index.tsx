import Link from "next/link";
import clsx from "clsx";
import { ProductPreviewProps } from "./type";

export default function ProductPreview({
  id,
  sectionTitle,
  items,
  className,
}: ProductPreviewProps) {
  return (
    <section
      id={id}
      className={clsx("mx-auto max-w-7xl px-6 py-10", className)}
    >
      <h2 className="mb-4 text-[22px] font-semibold text-slate-900">
        {sectionTitle}
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {items.map((p, i) => (
          <article
            key={i}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h3 className="text-[17px] font-semibold text-slate-900">
              {p.title}
            </h3>

            <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
              {p.bullets.map((b, idx) => (
                <li key={idx}>{b.text}</li>
              ))}
            </ul>

            {p.ctaHref && (
              <div className="mt-4">
                <Link
                  href={p.ctaHref}
                  className="inline-block rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white"
                >
                  {p.ctaLabel ?? "View Specs"}
                </Link>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
