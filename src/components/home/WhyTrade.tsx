import Icon from "@/components/Icon";

const features = [
  {
    icon: "inventory_2",
    title: "A Focused Range",
    body: "We concentrate on drinks, cooking oils and flour, so ordering the essentials stays simple.",
  },
  {
    icon: "storefront",
    title: "Built for Trade",
    body: "We supply businesses rather than households, so our service is designed around trade buyers.",
  },
  {
    icon: "location_on",
    title: "Based in Stoke-on-Trent",
    body: "As a local supplier, we can talk through delivery to your area and deal with you directly.",
  },
  {
    icon: "support_agent",
    title: "Straightforward Quotes",
    body: "Tell us what you need and we will prepare a quote based on your products and quantities.",
  },
];

export default function WhyTrade() {
  return (
    <section className="bg-surface py-space-xl md:py-space-2xl" id="why-trade-with-us">
      <div className="mx-auto mb-space-xl max-w-3xl text-center">
        <h2 className="text-headline-lg-mobile text-on-surface md:text-headline-lg">
          Why Businesses Choose AM Trade Supplies
        </h2>
        <p className="mt-space-sm text-body-md text-on-surface-variant">
          A simple, local approach to wholesale food and drink supply.
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
