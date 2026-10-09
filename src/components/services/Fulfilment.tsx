import Icon from "@/components/Icon";

const cards = [
  {
    icon: "local_shipping",
    title: "Free Mainland Delivery",
    body: (
      <>
        All orders exceeding <strong>£500 + VAT</strong> qualify for complimentary
        delivery across mainland England, Wales, and lowland Scotland. Low order
        fee applies beneath threshold.
      </>
    ),
    badgeIcon: "verified",
    badge: "24-48h Delivery Window",
  },
  {
    icon: "forklift",
    title: "Tail-Lift & Forklift Protocol",
    body: "Specify curbside offloading requirements during booking. We dispatch tail-lift vehicles with manual pump trucks for premises without commercial loading docks or forklifts.",
    badgeIcon: "check_circle",
    badge: "Flexible Drop Options",
  },
  {
    icon: "receipt_long",
    title: "30-Day B2B Credit Terms",
    body: "Approved businesses enjoy end-of-month trade accounts, consolidated electronic VAT invoicing, and prioritized standing orders with allocated warehouse reserves.",
    badgeIcon: "credit_score",
    badge: "Instant Credit Verification",
  },
];

export default function Fulfilment() {
  return (
    <section className="mt-space-xl rounded-xl bg-surface-card p-space-md py-space-lg shadow-sm sm:p-space-lg md:mt-space-2xl md:p-space-xl">
      <div className="mb-space-lg max-w-3xl">
        <span className="text-label-md font-bold uppercase tracking-wider text-secondary">
          Reliable UK Logistics Infrastructure
        </span>
        <h2 className="mt-1 text-headline-lg-mobile md:text-headline-lg text-on-surface">Ordering &amp; Fulfilment Framework</h2>
        <p className="mt-space-xs text-body-md text-on-surface-variant">
          We run dedicated contract carriers alongside national freight pallet
          networks to ensure predictable drops with transparent delivery terms.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-space-lg md:grid-cols-3">
        {cards.map((c) => (
          <div key={c.title} className="flex flex-col justify-between rounded-xl bg-surface-subtle p-space-lg">
            <div className="space-y-space-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-deep text-on-primary">
                <Icon name={c.icon} className="text-[26px]" />
              </div>
              <h3 className="text-headline-sm text-on-surface">{c.title}</h3>
              <p className="text-body-sm text-on-surface-variant">{c.body}</p>
            </div>
            <div className="mt-space-md flex items-center gap-1 rounded bg-surface-card p-space-xs text-label-md text-on-surface">
              <Icon name={c.badgeIcon} className="text-[18px] text-stock-green" /> {c.badge}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
