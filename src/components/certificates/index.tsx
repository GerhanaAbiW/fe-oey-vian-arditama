import Image from "next/image";
import clsx from "clsx";
import { CertificatesProps } from "./type";

export default function Certificates({
  id,
  sectionTitle,
  logos,
  className,
}: CertificatesProps) {
  return (
    <section
      id={id}
      className={clsx("mx-auto max-w-7xl px-6 py-10", className)}
    >
      <h2 className="mb-4 text-[22px] font-semibold text-slate-900">
        {sectionTitle}
      </h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
        {logos.map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width ?? 96}
              height={logo.height ?? 48}
              style={{ height: "auto", width: "auto", maxWidth: "100%" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
