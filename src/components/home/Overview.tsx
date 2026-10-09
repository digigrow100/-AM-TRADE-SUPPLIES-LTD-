import Link from "next/link";

const stats = [
  { value: "3", label: "Product Categories", note: "Drinks, cooking oils and flour" },
  { value: "8", label: "Wholesale Product Lines", note: "From soft drinks to self-raising flour" },
  { value: "B2B", label: "Trade Customers", note: "Retailers, caterers, bakeries and more" },
];

export default function Overview() {
  return (
    <section className="bg-surface py-space-xl md:py-space-2xl" id="partner-overview">
      <div className="mx-auto mb-space-xl max-w-3xl text-center">
        <h2 className="text-headline-lg-mobile text-on-surface md:text-headline-lg">
          Everyday Food and Drink Staples, Supplied to Trade
        </h2>
        <p className="mt-space-md text-body-md leading-relaxed text-on-surface-variant">
          Whether you run a shop, a kitchen or a bakery, dependable stock of the
          basics keeps your business moving. We keep our range focused on the
          drinks, cooking oils and flour that trade customers reorder most.
        </p>
        <p className="mt-space-sm text-body-md leading-relaxed text-on-surface-variant">
          Browse our{" "}
          <Link href="/services" className="font-semibold text-secondary underline-offset-2 hover:underline">
            wholesale product range
          </Link>{" "}
          or read{" "}
          <Link href="/about" className="font-semibold text-secondary underline-offset-2 hover:underline">
            more about AM Trade Supplies Ltd
          </Link>
          .
        </p>
      </div>
      <div className="grid grid-cols-1 gap-space-md sm:grid-cols-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex min-h-[140px] flex-col items-center justify-center rounded-xl bg-surface-card p-space-lg text-center shadow-sm transition-shadow hover:shadow-md"
          >
            <span className="text-stat-metric tracking-tight text-secondary">
              {s.value}
            </span>
            <span className="mt-space-xs text-label-lg text-on-surface">{s.label}</span>
            <span className="mt-1 text-body-sm text-on-surface-variant">{s.note}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
