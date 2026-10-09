import Link from "next/link";
import Icon from "@/components/Icon";
import { site } from "@/lib/site";

const contacts = [
  { icon: "phone_in_talk", iconClass: "bg-secondary-container/10 text-secondary-container", label: "Direct Trade Line", value: site.phone, valueClass: "text-headline-sm" },
  { icon: "schedule", iconClass: "bg-primary/10 text-primary", label: "Operating Hours", value: "Mon – Fri: 8:00 AM – 5:30 PM", valueClass: "text-label-lg" },
  { icon: "pin_drop", iconClass: "bg-primary/10 text-primary", label: "Trade Depot Location", value: "Unit 3, Garfield Works, Uttoxeter Rd, ST3 1PF", valueClass: "text-body-sm" },
];

export default function AccountCta() {
  return (
    <section className="mb-space-xl">
      <div className="relative overflow-hidden rounded-2xl bg-navy-deep p-space-lg py-space-xl text-on-primary shadow-xl lg:p-space-2xl">
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-secondary opacity-20 blur-3xl" />
        <div className="relative z-10 grid grid-cols-1 items-center gap-space-xl lg:grid-cols-12">
          <div className="space-y-space-md lg:col-span-7">
            <div className="inline-flex items-center gap-space-xs rounded-full bg-primary-container px-space-sm py-space-xs text-label-md text-secondary-fixed">
              <span className="h-2 w-2 rounded-full bg-secondary-container" />
              OPEN FOR IMMEDIATE NEW ENQUIRIES
            </div>
            <h2 className="text-headline-lg-mobile md:text-headline-lg tracking-tight text-on-primary">
              Apply for a Trade Credit Account Today
            </h2>
            <p className="max-w-xl text-body-lg text-surface-container-highest">
              Streamline your weekly procurement with tailored volume pricing,
              credit facility terms, and assigned account support from the UK&apos;s
              reliable trade supplier.
            </p>
            <div className="flex flex-col gap-space-md pt-space-xs sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-space-xs rounded-lg bg-secondary-container px-space-lg py-3 text-label-lg text-on-secondary shadow-md transition-colors hover:bg-trade-orange-hover"
              >
                Request Trade Account <Icon name="arrow_forward" className="text-[18px]" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-space-xs rounded-lg bg-surface-card/10 px-space-lg py-3 text-label-lg text-on-primary transition-colors hover:bg-surface-card/20"
              >
                Contact Logistics Desk
              </Link>
            </div>
          </div>

          <div className="space-y-space-md rounded-xl bg-surface-card p-space-lg text-on-surface shadow-lg lg:col-span-5">
            <h3 className="text-headline-sm text-on-surface">Urgent or Pallet Inquiries?</h3>
            <p className="text-body-sm text-on-surface-variant">
              Speak directly to our Uttoxeter Road trade distribution desk for
              real-time stock holds and delivery route scheduling.
            </p>
            <div className="space-y-space-sm">
              {contacts.map((c) => (
                <div key={c.label} className="flex items-center gap-space-sm rounded-lg bg-surface-subtle p-space-sm">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${c.iconClass}`}>
                    <Icon name={c.icon} className="text-[20px]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-label-md text-on-surface-variant">{c.label}</p>
                    <p className={`text-on-surface ${c.valueClass}`}>{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
