const metrics = [
  { value: "500+", title: "Stocked SKUs", body: "Pallet-ready commodity lines" },
  { value: "24h", title: "Dispatch SLA", body: "UK Mainland nationwide freight" },
  { value: "£500", title: "Free Delivery", body: "Full pallet consignment baseline" },
  { value: "1.2k+", title: "Trade Accounts", body: "Supplying kitchens & wholesale" },
];

export default function MetricStrip() {
  return (
    <section className="mb-space-xl grid grid-cols-2 gap-space-md md:mb-space-2xl md:grid-cols-4">
      {metrics.map((m) => (
        <div key={m.title} className="rounded-xl bg-surface-card p-space-md text-center shadow-sm sm:p-space-lg">
          <p className="text-stat-metric text-secondary-container">{m.value}</p>
          <p className="text-label-lg uppercase tracking-wide text-on-surface">{m.title}</p>
          <p className="mt-space-xs text-body-sm text-on-surface-variant">{m.body}</p>
        </div>
      ))}
    </section>
  );
}
