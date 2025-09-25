import React from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { HeroProps } from "./type";

export const Hero: React.FC<HeroProps> = ({
  style,
  className,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  mediaSrc,
  mediaAlt = "hero media",
}) => {
  return (
    <section
      className={clsx(
        "relative w-full border-y border-slate-800/10 bg-[#0B1220]",
        className
      )}
      style={style}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-14 md:grid-cols-2 md:gap-10 md:px-6 md:py-20">
        {/* Left: copy */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-3 max-w-xl text-sm text-slate-300 md:text-base">
              {subtitle}
            </p>
          ) : null}

          <div className="mt-6 flex flex-wrap gap-3">
            {primaryCta ? (
              <Link
                href={primaryCta.href}
                target={primaryCta.external ? "_blank" : undefined}
                rel={primaryCta.external ? "noopener noreferrer" : undefined}
                className="rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500/40"
              >
                {primaryCta.text}
              </Link>
            ) : null}

            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                target={secondaryCta.external ? "_blank" : undefined}
                rel={secondaryCta.external ? "noopener noreferrer" : undefined}
                className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600/40"
              >
                {secondaryCta.text}
              </Link>
            ) : null}
          </div>
        </div>

        {/* Right: media card */}
        <div className="rounded-2xl border border-white/5 bg-white/5 p-4 md:p-6">
          {mediaSrc ? (
            <Image
              src={mediaSrc}
              alt={mediaAlt}
              width={600}
              height={400}
              className="h-56 w-full rounded-xl object-cover md:h-80"
              priority
            />
          ) : (
            <div
              className="h-56 w-full rounded-xl bg-slate-700/40 md:h-80"
              aria-hidden
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
