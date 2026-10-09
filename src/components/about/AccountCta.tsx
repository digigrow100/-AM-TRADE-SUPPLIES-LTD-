import Link from "next/link";
import Icon from "@/components/Icon";
import { phoneHref, site } from "@/lib/site";

export default function AccountCta() {
  const contacts = [
    { icon: "pin_drop", label: "Based In", value: "Stoke-on-Trent, UK" },
    { icon: "inventory_2", label: "Our Range", value: "Drinks, cooking oils and flour" },
    { icon: "send", label: "Enquiries", value: "Send a trade enquiry online" },
  ];

  return (
    <section className="mb-space-xl">
      <div className="relative overflow-hidden rounded-2xl bg-navy-deep p-space-lg py-space-xl text-on-primary shadow-xl lg:p-space-2xl">
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-secondary opacity-20 blur-3xl" />
        <div className="relative z-10 grid grid-cols-1 items-center gap-space-xl lg:grid-cols-12">
          <div className="space-y-space-md lg:col-span-7">
            <div className="inline-flex items-center gap-space-xs rounded-full bg-primary-container px-space-sm py-space-xs text-label-md text-secondary-fixed">
              <span className="h-2 w-2 rounded-full bg-secondary-container" />
              TRADE ENQUIRIES WELCOME
            </div>
            <h2 className="text-headline-lg-mobile tracking-tight text-on-primary md:text-headline-lg">
              Talk to Us About Wholesale Supply
            </h2>
            <p className="max-w-xl text-body-lg text-surface-container-highest">
              Tell us what your business needs and we will come back with a
              quote. You can also read about our{" "}
              <Link href="/services" className="font-semibold text-on-primary underline-offset-2 hover:underline">
                wholesale product range
              </Link>{" "}
              before you get in touch.
            </p>
            <div className="flex flex-col gap-space-md pt-space-xs sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-space-xs rounded-lg bg-cta px-space-lg py-3 text-label-lg text-on-secondary shadow-md transition-colors hover:bg-cta-hover"
              >
                Request a Trade Quote <Icon name="arrow_forward" className="text-[18px]" />
              </Link>
              <Link
                href="/services"
                className="flex items-center justify-center gap-space-xs rounded-lg bg-surface-card/10 px-space-lg py-3 text-label-lg text-on-primary transition-colors hover:bg-surface-card/20"
              >
                View Products
              </Link>
            </div>
          </div>

          <div className="space-y-space-md rounded-xl bg-surface-card p-space-lg text-on-surface shadow-lg lg:col-span-5">
            <h3 className="text-headline-sm text-on-surface">Get in Touch</h3>
            <p className="text-body-sm text-on-surface-variant">
              Include your postcode and product list with your enquiry so we can
              give you an accurate quote.
            </p>
            <div className="space-y-space-sm">
              {contacts.map((c) => (
                <div key={c.label} className="flex items-center gap-space-sm rounded-lg bg-surface-subtle p-space-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary-container/10 text-secondary-container">
                    <Icon name={c.icon} className="text-[20px]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-label-md text-on-surface-variant">{c.label}</p>
                    <p className="text-label-lg text-on-surface">{c.value}</p>
                  </div>
                </div>
              ))}
              {phoneHref && site.phone && (
                <a href={phoneHref} className="flex items-center gap-space-sm rounded-lg bg-surface-subtle p-space-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary-container/10 text-secondary-container">
                    <Icon name="phone_in_talk" className="text-[20px]" />
                  </div>
                  <div>
                    <p className="text-label-md text-on-surface-variant">Phone</p>
                    <p className="text-label-lg text-on-surface">{site.phone}</p>
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
