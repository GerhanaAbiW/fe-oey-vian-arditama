import Link from "next/link";
import clsx from "clsx";
import { ContactStripProps } from "./type";

export default function ContactStrip({
  id,
  message,
  primary,
  secondary,
  className,
}: ContactStripProps) {
  return (
    <section id={id} className={clsx("mx-auto max-w-7xl px-6 py-6", className)}>
      <div className="rounded-2xl bg-amber-100 px-6 py-6 md:flex md:items-center md:justify-between">
        <p className="text-[15px] font-medium text-slate-800">{message}</p>

        <div className="mt-4 flex gap-3 md:mt-0">
          <Link
            href={primary.href}
            className="rounded-md bg-amber-500 px-4 py-2 text-sm font-semibold text-white"
          >
            {primary.label}
          </Link>

          {secondary.external ? (
            <a
              href={secondary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white"
            >
              {secondary.label}
            </a>
          ) : (
            <Link
              href={secondary.href}
              className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white"
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
