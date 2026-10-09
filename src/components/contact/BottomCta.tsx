import Icon from "@/components/Icon";

export default function BottomCta() {
  return (
    <section className="mb-space-lg flex w-full flex-col items-center justify-between gap-space-md rounded-2xl bg-surface-card p-space-md py-space-lg shadow-sm sm:p-space-lg md:flex-row md:p-space-xl">
      <div className="space-y-space-xs text-center md:text-left">
        <h3 className="text-headline-md text-on-surface">Prefer to talk directly to our procurement team?</h3>
        <p className="max-w-xl text-body-md text-on-surface-variant">
          Our Uttoxeter Road trade desk is open Monday to Friday from 8:00 AM.
          Speak with a live wholesale advisor without automated phone queues.
        </p>
      </div>
      <div className="flex w-full shrink-0 flex-col gap-space-sm sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
        <a
          href="tel:01782123456"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-space-md py-3 text-label-lg text-on-primary transition-colors hover:bg-navy-deep"
        >
          <Icon name="phone" className="text-[18px]" />
          01782 123 456
        </a>
        <a
          href="mailto:sales@mbtradesupplies.com"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-surface-subtle px-space-md py-3 text-label-lg text-on-surface transition-colors hover:bg-surface-container"
        >
          <Icon name="mail" className="text-[18px]" />
          Email Sales Desk
        </a>
      </div>
    </section>
  );
}
