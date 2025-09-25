"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import clsx from "clsx";
import { NavbarProps } from "./type";

const Navbar: React.FC<NavbarProps> = ({
  style,
  height = "64px",
  brand = "Brand",
  logo,
  buttons,
  cta,
  className,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <header
      className={clsx(
        "sticky top-0 z-40 w-full border-b border-slate-200/60 bg-white/95 backdrop-blur",
        className
      )}
      style={{ height, ...style }}
    >
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          {logo ? (
            <Image
              src={logo}
              alt="logo"
              width={28}
              height={28}
              className="h-7 w-auto"
              priority
            />
          ) : null}
          <Link
            href="/"
            className="font-semibold tracking-tight text-slate-900"
          >
            {brand}
          </Link>
        </div>

        {/* Desktop menu */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8 text-xs font-semibold tracking-wider text-slate-700">
            {buttons?.map((b) => (
              <li key={b.text}>
                <Link
                  href={b.link}
                  target={b.external ? "_blank" : undefined}
                  rel={b.external ? "noopener noreferrer" : undefined}
                  className="transition-colors hover:text-slate-900"
                >
                  {b.text}
                </Link>
              </li>
            ))}
          </ul>

          {cta ? (
            <Link
              href={cta.link}
              target={cta.external ? "_blank" : undefined}
              rel={cta.external ? "noopener noreferrer" : undefined}
              className="rounded-full bg-orange-500 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500/40"
            >
              {cta.text}
            </Link>
          ) : null}
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-300 text-slate-700 md:hidden"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
            {open ? (
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                d="M3 6h18M3 12h18M3 18h18"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={clsx(
          "md:hidden overflow-hidden border-t border-slate-200/60 bg-white transition-[max-height]",
          open ? "max-h-64" : "max-h-0"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 py-3 md:px-6">
          <ul className="space-y-2 text-sm font-medium text-slate-700">
            {buttons?.map((b) => (
              <li key={b.text}>
                <Link
                  href={b.link}
                  target={b.external ? "_blank" : undefined}
                  rel={b.external ? "noopener noreferrer" : undefined}
                  className="block rounded-md px-2 py-2 hover:bg-slate-50"
                >
                  {b.text}
                </Link>
              </li>
            ))}
          </ul>
          {cta ? (
            <div className="mt-3">
              <Link
                href={cta.link}
                target={cta.external ? "_blank" : undefined}
                rel={cta.external ? "noopener noreferrer" : undefined}
                className="inline-flex w-full items-center justify-center rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
              >
                {cta.text}
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
