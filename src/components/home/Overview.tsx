const stats = [
  { value: "15+", label: "Years Trading" },
  { value: "500+", label: "Product Lines" },
  { value: "1.2k+", label: "Trade Customers" },
  { value: "UK", label: "Wide Delivery" },
];

export default function Overview() {
  return (
    <section className="bg-surface py-space-xl md:py-space-2xl" id="partner-overview">
      <div className="mx-auto mb-space-xl max-w-4xl text-center">
        <h2 className="text-headline-lg-mobile md:text-headline-lg text-on-surface">Your Dependable Wholesale Partner</h2>
        <p className="mt-space-md text-body-md leading-relaxed text-on-surface-variant">
          At MB Trade Supplies Ltd, we understand that in the fast-paced food and
          beverage sector, reliability is everything. We maintain robust supply
          chains to ensure our trade customers always have the stock they need,
          when they need it.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-space-md lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex min-h-[120px] flex-col items-center justify-center rounded-xl bg-surface-card p-space-md text-center shadow-sm transition-shadow hover:shadow-md sm:min-h-[140px] sm:p-space-lg"
          >
            <span className="text-stat-metric tracking-tight text-secondary-container">
              {s.value}
            </span>
            <span className="mt-space-xs text-label-lg text-on-surface">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
