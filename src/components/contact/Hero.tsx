import Icon from "@/components/Icon";

const stats = [
  { value: "15+", label: "Years Established" },
  { value: "500+", label: "Pallet Stock SKUs" },
  { value: "1.2k+", label: "Active Trade Accounts" },
  { value: "24h", label: "Average Approval" },
];

export default function Hero() {
  return (
    <section className="relative mb-space-xl w-full overflow-hidden rounded-2xl bg-primary-container p-space-md py-space-lg text-on-primary shadow-md sm:p-space-lg md:p-space-xl">
      <div className="pointer-events-none absolute -right-16 -top-16 h-80 w-80 rounded-full bg-secondary-container/10 blur-3xl" />
      <div className="relative z-10 max-w-3xl space-y-space-sm">
        <div className="inline-flex items-center gap-2 rounded-full bg-surface-card/10 px-3 py-1 text-label-md uppercase tracking-wider text-secondary-fixed">
          <Icon name="verified_user" className="text-[14px]" /> Wholesale Verification Portal
        </div>
        <h1 className="text-headline-lg-mobile tracking-tight text-on-primary md:text-display-hero">
          Open a Trade Account &amp; Contact Us
        </h1>
        <p className="max-w-2xl text-body-lg leading-relaxed text-surface-container-highest">
          Get approved for wholesale trade pricing, credit terms, and dedicated
          account management within 24 hours. Serving food preparation,
          hospitality, and catering chains nationwide.
        </p>
      </div>
      <div className="relative z-10 mt-space-lg grid grid-cols-2 gap-space-sm rounded-xl bg-navy-deep/60 p-space-md sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-headline-md text-secondary-container">{s.value}</p>
            <p className="text-label-md text-surface-container-highest">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
