import Icon from "@/components/Icon";

const pillars = [
  {
    icon: "warehouse",
    title: "Strategic Hub Facility",
    body: "Unit 3, Garfield Works provides over 35,000 sq ft of high-bay pallet racking, dry-ambient climate regulation, and rapid cross-dock loading bays.",
    footer: "Continuous Stock Audits",
  },
  {
    icon: "rv_hookup",
    title: "Dedicated Logistics Fleet",
    body: "From articulated curtain-siders for regional bulk drops to tail-lift rigid trucks configured for urban hospitality deliveries with strict curfew access.",
    footer: "Multi-Drop Route Optimization",
  },
  {
    icon: "support_agent",
    title: "Trade Specialists",
    body: "Named procurement handlers who comprehend volume forecasting, forward contract hedging, and urgent stock replenishment cycles without call-center delays.",
    footer: "Direct Desk Phone & Portal Chat",
  },
];

const stats = [
  { value: "15+", title: "Years Trading", body: "Consistent trade operations since 2011" },
  { value: "500+", title: "Product Lines", body: "Bulk food, drinks & culinary staples" },
  { value: "1.2k+", title: "Trade Customers", body: "Restaurants, caterers & wholesalers" },
  { value: "99.4%", title: "On-Time Delivery", body: "Guaranteed dispatch timelines" },
];

export default function WhoWeAre() {
  return (
    <section className="mb-space-xl md:mb-space-2xl">
      <div className="mx-auto mb-space-xl max-w-3xl space-y-space-xs text-center">
        <h2 className="text-headline-lg-mobile md:text-headline-lg tracking-tight text-on-surface">
          Who We Are: Scale, Infrastructure &amp; People
        </h2>
        <p className="text-body-md text-on-surface-variant">
          Behind every container, pallet load, and rapid delivery run is a
          specialized team of UK trade logistics professionals operating within
          our dedicated Uttoxeter Road distribution hub.
        </p>
      </div>

      <div className="mb-space-xl grid grid-cols-1 gap-space-lg md:grid-cols-3">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="flex flex-col justify-between space-y-space-md rounded-xl bg-surface-card p-space-lg shadow-sm"
          >
            <div className="space-y-space-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-container text-navy-deep">
                <Icon name={p.icon} className="text-[28px]" />
              </div>
              <h3 className="text-headline-sm text-on-surface">{p.title}</h3>
              <p className="text-body-md text-on-surface-variant">{p.body}</p>
            </div>
            <div className="flex items-center gap-space-xs text-label-md text-secondary-container">
              <span>{p.footer}</span>
              <Icon name="check_circle" className="text-[16px]" />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-space-md md:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.title}
            className="rounded-xl bg-surface-card p-space-md text-center shadow-sm transition-shadow hover:shadow-md sm:p-space-lg"
          >
            <div className="mb-space-xs text-stat-metric leading-none text-secondary-container">
              {s.value}
            </div>
            <div className="mb-space-xs text-headline-sm text-on-surface">{s.title}</div>
            <p className="text-body-sm text-on-surface-variant">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
