import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { ProductCardProps } from "./type";

export default function ProductCard({
  imageSrc,
  title,
  bullets,
  ctaHref,
  ctaLabel = "View Specs",
  className,
}: ProductCardProps) {
  return (
    <article
      className={clsx(
        "rounded-2xl border border-slate-200 bg-white p-4 shadow-sm",
        className
      )}
    >
      <div className="rounded-xl bg-slate-200/60">
        <Image
          src={imageSrc ?? "/placeholders/product.png"}
          alt={title}
          width={640}
          height={400}
          className="h-40 w-full rounded-xl object-cover"
        />
      </div>

      <h3 className="mt-3 text-[16px] font-semibold text-slate-900">{title}</h3>
      <ul className="mt-1 text-sm text-slate-600">
        {bullets.map((b, i) => (
          <li key={i} className="truncate">
            {b.text}
          </li>
        ))}
      </ul>

      {ctaHref && (
        <div className="mt-3">
          <Link
            href={ctaHref}
            className="inline-block rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
          >
            {ctaLabel}
          </Link>
        </div>
      )}
    </article>
  );
}
