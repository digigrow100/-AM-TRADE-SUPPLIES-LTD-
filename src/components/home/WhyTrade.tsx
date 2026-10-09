import Icon from "@/components/Icon";

const features = [
  {
    icon: "inventory_2",
    title: "Reliable Stock",
    body: "Deep inventory levels ensure we can fulfill your orders consistently without frustrating backorders.",
  },
  {
    icon: "payments",
    title: "Competitive Pricing",
    body: "Transparent, tiered pricing structures designed to support your business margins.",
  },
  {
    icon: "local_shipping",
    title: "Fast Delivery",
    body: "Optimized logistics network providing rapid turnaround times across the UK mainland.",
  },
  {
    icon: "verified",
    title: "Quality Assurance",
    body: "Strict adherence to cold-chain logistics and food safety standards for all perishable goods.",
  },
];

export default function WhyTrade() {
  return (
    <section className="bg-surface py-space-xl md:py-space-2xl" id="why-trade-with-us">
      <div className="mx-auto mb-space-xl max-w-3xl text-center">
        <h2 className="text-headline-lg-mobile md:text-headline-lg text-on-surface">Why Trade With Us</h2>
        <p className="mt-space-sm text-body-md text-on-surface-variant">
          We build long-term partnerships through consistent delivery of quality
          products and exceptional service.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="flex flex-col rounded-xl bg-surface-card p-space-lg shadow-sm transition-all hover:shadow-md"
          >
            <div className="mb-space-md flex h-12 w-12 items-center justify-center rounded-lg bg-navy-deep text-on-primary">
              <Icon name={f.icon} className="text-[24px]" />
            </div>
            <h3 className="text-headline-sm text-on-surface">{f.title}</h3>
            <p className="mt-space-xs text-body-sm leading-relaxed text-on-surface-variant">
              {f.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
