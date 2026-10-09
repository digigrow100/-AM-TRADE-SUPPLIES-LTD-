import Icon from "@/components/Icon";

const facts = [
  { label: "Location", value: "Stoke-on-Trent, UK" },
  { label: "Customers", value: "Businesses" },
  { label: "Range", value: "Drinks, oils and flour" },
  { label: "Enquiries", value: "Online form" },
];

export default function Hero() {
  return (
    <section className="relative mb-space-xl w-full overflow-hidden rounded-2xl bg-primary-container px-space-md py-space-xl text-on-primary shadow-md sm:p-space-lg md:p-space-xl">
      <div className="pointer-events-none absolute -right-16 -top-16 h-80 w-80 rounded-full bg-secondary-container/10 blur-3xl" />
      <div className="relative z-10 max-w-3xl space-y-space-sm">
        <div className="inline-flex items-center gap-2 rounded-full bg-surface-card/10 px-3 py-1 text-label-md uppercase tracking-wider text-secondary-fixed">
          <Icon name="verified_user" className="text-[14px]" /> Trade Enquiries
        </div>
        <h1 className="text-headline-lg-mobile tracking-tight text-on-primary md:text-display-hero">
          Contact AM Trade Supplies Ltd: Wholesale Food and Drink Enquiries
        </h1>
        <p className="max-w-2xl text-body-lg leading-relaxed text-surface-container-highest">
          Get in touch with AM Trade Supplies Ltd, a wholesale food and drink
          supplier in Stoke-on-Trent. Send us your trade enquiry and tell us
          what your business needs.
        </p>
      </div>
      <dl className="relative z-10 mt-space-lg grid grid-cols-2 gap-space-sm rounded-xl bg-navy-deep/60 p-space-md sm:grid-cols-4">
        {facts.map((f) => (
          <div key={f.label}>
            <dt className="text-label-md uppercase tracking-wider text-surface-container-highest">
              {f.label}
            </dt>
            <dd className="mt-1 text-headline-sm text-secondary-container">{f.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
