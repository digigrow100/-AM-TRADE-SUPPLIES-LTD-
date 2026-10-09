import Link from "next/link";
import Icon from "@/components/Icon";

const cards = [
  {
    icon: "send",
    title: "1. Tell Us What You Need",
    body: "Send your product list, rough quantities and delivery postcode through the quote form below or our contact page.",
    badge: "Include your postcode",
  },
  {
    icon: "receipt_long",
    title: "2. Receive Your Quote",
    body: "We review your request and prepare a quote based on the products and quantities you have asked for.",
    badge: "Prices on request",
  },
  {
    icon: "local_shipping",
    title: "3. Arrange Your Supply",
    body: "Once you are happy with the quote, we agree the details of your order and delivery with you directly.",
    badge: "Delivery confirmed with you",
  },
];

export default function Fulfilment() {
  return (
    <section className="mb-space-xl mt-space-xl rounded-xl bg-surface-card p-space-md py-space-lg shadow-sm sm:p-space-lg md:mb-space-2xl md:mt-space-2xl md:p-space-xl">
      <div className="mb-space-lg max-w-3xl">
        <span className="text-label-md font-bold uppercase tracking-wider text-secondary">
          How It Works
        </span>
        <h2 className="mt-1 text-headline-lg-mobile text-on-surface md:text-headline-lg">
          How Wholesale Ordering Works
        </h2>
        <p className="mt-space-xs text-body-md text-on-surface-variant">
          Ordering from AM Trade Supplies Ltd takes three simple steps. If you
          have questions first, visit our{" "}
          <Link href="/contact" className="font-semibold text-secondary underline-offset-2 hover:underline">
            contact page
          </Link>
          .
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
              <Icon name="check_circle" className="text-[18px] text-stock-green" /> {c.badge}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
