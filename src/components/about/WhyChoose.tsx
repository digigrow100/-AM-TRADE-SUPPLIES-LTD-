import Icon from "@/components/Icon";

const steps = [
  {
    icon: "support_agent",
    title: "We Listen First",
    body: "We start by asking what your business sells, what you need and how often you order.",
  },
  {
    icon: "receipt_long",
    title: "We Quote Clearly",
    body: "Your quote is based on the products and quantities you ask for, with no guesswork.",
  },
  {
    icon: "location_on",
    title: "We Supply Locally",
    body: "Working from Stoke-on-Trent, we discuss delivery to your area before you commit.",
  },
  {
    icon: "mail",
    title: "We Stay in Touch",
    body: "You deal with us directly, so questions about your order go to the people who handle it.",
  },
];

export default function WhyChoose() {
  return (
    <section className="mb-space-xl rounded-2xl bg-surface-subtle p-space-md py-space-lg shadow-sm sm:p-space-lg md:mb-space-2xl md:p-space-xl">
      <div className="mx-auto mb-space-xl max-w-2xl space-y-space-xs text-center">
        <h2 className="text-headline-lg-mobile tracking-tight text-on-surface md:text-headline-lg">
          How We Work With Trade Customers
        </h2>
        <p className="text-body-md text-on-surface-variant">
          Our service is built around clear communication and a focused range.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-space-md md:grid-cols-2 lg:grid-cols-4">
        {steps.map((f) => (
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
