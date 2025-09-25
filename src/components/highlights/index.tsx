import clsx from "clsx";
import { HighlightsProps } from "./type";

export default function Highlights({
  id,
  eyebrow,
  title,
  items,
  className,
}: HighlightsProps) {
  return (
    <section
      id={id}
      className={clsx("mx-auto max-w-7xl px-6 py-10", className)}
    >
      <header className="mb-4">
        <h2 className="text-[22px] font-semibold text-slate-900">{title}</h2>
        {eyebrow && <p className="mt-1 text-sm text-slate-600">{eyebrow}</p>}
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, idx) => (
          <article
            key={idx}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <h3 className="text-[15px] font-semibold text-slate-900">
              {it.title}
            </h3>
            <p className="mt-1 text-sm text-slate-600">{it.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
