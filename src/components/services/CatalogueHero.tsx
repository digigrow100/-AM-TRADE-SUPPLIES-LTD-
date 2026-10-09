import Link from "next/link";

const pills = [
  { label: "Wholesale Drinks", href: "#drinks" },
  { label: "Cooking Oils", href: "#oils" },
  { label: "Flour", href: "#flour" },
];

export default function CatalogueHero() {
  return (
    <section className="relative mb-space-xl w-full overflow-hidden rounded-xl bg-navy-deep text-on-primary shadow-lg">
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#fd651e 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative z-10 mx-auto max-w-5xl space-y-space-md px-space-md py-space-xl text-center sm:px-margin">
        <div className="inline-flex items-center gap-space-xs rounded-full bg-surface-card/10 px-space-md py-space-xs backdrop-blur-md">
          <span className="h-2 w-2 animate-pulse rounded-full bg-secondary-container" />
          <span className="text-label-md uppercase tracking-wider text-secondary-fixed">
            B2B Trade Supply
          </span>
        </div>
        <h1 className="text-headline-lg-mobile tracking-tight text-on-primary md:text-headline-lg">
          Wholesale Drinks, Cooking Oils and Flour for Trade Customers
        </h1>
        <p className="mx-auto max-w-2xl text-body-lg text-surface-container-highest">
          AM Trade Supplies Ltd supplies wholesale drinks, cooking oils and flour
          to trade customers from Stoke-on-Trent. Browse the range below, then
          ask for a quote.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-space-xs pt-space-sm">
          {pills.map((p) => (
            <a
              key={p.href}
              href={p.href}
              className="rounded-full bg-surface-card/15 px-space-md py-1.5 text-label-md text-on-primary transition-all hover:bg-surface-card/25"
            >
              {p.label}
            </a>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-secondary-container px-space-md py-1.5 text-label-md text-on-secondary shadow-sm transition-all hover:bg-trade-orange-hover"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
