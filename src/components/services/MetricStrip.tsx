const metrics = [
  { value: "3", title: "Categories", body: "Drinks, cooking oils and flour" },
  { value: "8", title: "Product Lines", body: "Listed in full below" },
  { value: "B2B", title: "Trade Supply", body: "For businesses buying in volume" },
  { value: "Quote", title: "Prices on Request", body: "Based on your order" },
];

export default function MetricStrip() {
  return (
    <section className="mb-space-xl grid grid-cols-2 gap-space-md md:mb-space-2xl md:grid-cols-4">
      {metrics.map((m) => (
        <div key={m.title} className="rounded-xl bg-surface-card p-space-md text-center shadow-sm sm:p-space-lg">
          <p className="text-stat-metric text-secondary">{m.value}</p>
          <p className="text-label-lg uppercase tracking-wide text-on-surface">{m.title}</p>
          <p className="mt-space-xs text-body-sm text-on-surface-variant">{m.body}</p>
        </div>
      ))}
    </section>
  );
}
