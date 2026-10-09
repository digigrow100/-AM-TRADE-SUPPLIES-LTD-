import Icon from "@/components/Icon";

const features = [
  {
    icon: "inventory_2",
    title: "Guaranteed Inventory",
    body: "Deep stock holding in Garfield Works prevents the constant out-of-stock shortages typical of retail cash-and-carries.",
  },
  {
    icon: "payments",
    title: "Volume Tiered Pricing",
    body: "Aggressive pallet breaks and 30-day approved commercial credit terms that protect cash flow and restaurant margins.",
  },
  {
    icon: "schedule",
    title: "Standing Re-Orders",
    body: "Automated weekly replenishment profiles scheduled to your prep days, eliminating the hassle of frantic last-minute ordering.",
  },
  {
    icon: "badge",
    title: "Single Point of Contact",
    body: "Direct line access to your assigned account executive with instant answers on delivery ETA, invoices, and product certifications.",
  },
];

export default function WhyChoose() {
  return (
    <section className="mb-space-xl rounded-2xl bg-surface-subtle p-space-md py-space-lg shadow-sm sm:p-space-lg md:mb-space-2xl md:p-space-xl">
      <div className="mx-auto mb-space-xl max-w-2xl space-y-space-xs text-center">
        <h2 className="text-headline-lg-mobile md:text-headline-lg tracking-tight text-on-surface">
          Why Trade Buyers Choose MB
        </h2>
        <p className="text-body-md text-on-surface-variant">
          We do not operate consumer storefronts or speculative brokers. Our
          infrastructure is tuned specifically for corporate purchasing
          efficiency.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-space-md md:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="space-y-space-sm rounded-xl bg-surface-card p-space-lg shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-on-primary">
              <Icon name={f.icon} className="text-[24px]" />
            </div>
            <h3 className="text-headline-sm text-on-surface">{f.title}</h3>
            <p className="text-body-sm text-on-surface-variant">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
