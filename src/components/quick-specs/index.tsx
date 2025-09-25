import clsx from "clsx";
import { QuickSpecsProps } from "./type";

export default function QuickSpecs({
  title,
  rows,
  className,
}: QuickSpecsProps) {
  return (
    <section className={clsx("mx-auto max-w-7xl px-6 py-8", className)}>
      <h2 className="mb-4 text-[18px] font-semibold text-slate-900">{title}</h2>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3">Ash %</th>
              <th className="px-4 py-3">Moisture %</th>
              <th className="px-4 py-3">Fixed Carbon %</th>
              <th className="px-4 py-3">Calorific Value</th>
              <th className="px-4 py-3">Packing</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((r, i) => (
              <tr key={i} className="text-slate-800">
                <td className="px-4 py-3 font-medium">{r.product}</td>
                <td className="px-4 py-3">{r.ash ?? "-"}</td>
                <td className="px-4 py-3">{r.moisture ?? "-"}</td>
                <td className="px-4 py-3">{r.fc ?? "-"}</td>
                <td className="px-4 py-3">{r.cv ?? "-"}</td>
                <td className="px-4 py-3">{r.packing ?? "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
