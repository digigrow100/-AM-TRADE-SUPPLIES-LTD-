import Link from "next/link";
import Icon from "@/components/Icon";
import { site } from "@/lib/site";

export default function BottomCta() {
  return (
    <section className="mb-space-lg flex w-full flex-col items-center justify-between gap-space-md rounded-2xl bg-surface-card p-space-md py-space-lg shadow-sm sm:p-space-lg md:flex-row md:p-space-xl">
      <div className="space-y-space-xs text-center md:text-left">
        <h2 className="text-headline-md text-on-surface">Not Ready to Enquire Yet?</h2>
        <p className="max-w-xl text-body-md text-on-surface-variant">
          Take a look at our wholesale product range, or read more about who we
          are and who we supply.
        </p>
      </div>
      <div className="flex w-full shrink-0 flex-col gap-space-sm sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
        <Link
          href="/products-services"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-space-md py-3 text-label-lg text-on-primary transition-colors hover:bg-navy-deep"
        >
          <Icon name="inventory_2" className="text-[18px]" />
          View Products
        </Link>
        <Link
          href="/about"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-surface-subtle px-space-md py-3 text-label-lg text-on-surface transition-colors hover:bg-surface-container"
        >
          About Us
        </Link>
        {site.email && (
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-surface-subtle px-space-md py-3 text-label-lg text-on-surface transition-colors hover:bg-surface-container"
          >
            <Icon name="mail" className="text-[18px]" />
            Email Us
          </a>
        )}
      </div>
    </section>
  );
}
