"use client";
import clsx from "clsx";
import { ProductsFiltersProps } from "./type";

export default function ProductsFilters({
  title,
  subtitle,
  items,
  active = "all",
  className,
  onChange,
}: ProductsFiltersProps) {
  return (
    <section className={clsx("mx-auto max-w-7xl px-6 pt-6", className)}>
      <h1 className="text-[28px] font-semibold text-slate-900">{title}</h1>
      {subtitle && <p className="mt-1 text-sm text-slate-600">{subtitle}</p>}

      <div className="mt-4 flex flex-wrap gap-3">
        {items.map((it) => {
          const isActive = it.value === active;
          return (
            <button
              key={it.value}
              type="button"
              onClick={() => onChange?.(it.value)}
              className={clsx(
                "rounded-full border px-4 py-1.5 text-sm font-medium",
                isActive
                  ? "border-emerald-500 bg-emerald-500 text-white"
                  : "border-slate-300 bg-white text-slate-700 hover:border-slate-400"
              )}
            >
              {it.label}
            </button>
          );
        })}
      </div>
    </section>
  );
}
