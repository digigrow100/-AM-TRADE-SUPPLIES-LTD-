import Link from "next/link";
import Icon from "@/components/Icon";

export default function Banner() {
  return (
    <section className="relative mb-space-xl w-full overflow-hidden rounded-2xl bg-navy-deep px-space-md py-space-xl text-on-primary shadow-md sm:px-space-lg md:mb-space-2xl lg:px-space-2xl">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-deep via-primary-container to-secondary opacity-20" />
      <div className="relative z-10 max-w-4xl space-y-space-sm">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-space-xs text-label-md uppercase tracking-wider text-surface-container-highest"
        >
          <Link href="/" className="transition-colors hover:text-on-primary">
            Home
          </Link>
          <Icon name="chevron_right" className="text-[14px]" />
          <span className="text-secondary-fixed">About Us</span>
        </nav>
        <h1 className="text-headline-lg-mobile md:text-headline-lg tracking-tight text-on-primary">
          About MB Trade Supplies Ltd
        </h1>
        <p className="max-w-2xl text-body-lg leading-relaxed text-surface-container-highest">
          Your dependable UK wholesale partner powering restaurants, bakeries,
          caterers, and commercial food &amp; beverage operations with
          high-volume consistency.
        </p>
        <div className="flex flex-col gap-space-sm pt-space-xs text-body-sm text-surface-container-high sm:flex-row sm:flex-wrap sm:items-center sm:gap-space-md">
          <div className="flex items-center gap-space-xs">
            <Icon name="location_on" className="text-[18px] text-secondary-container" />
            <span>Garfield Works, Uttoxeter Road, ST3 1PF</span>
          </div>
          <div className="flex items-center gap-space-xs">
            <Icon name="verified" className="text-[18px] text-stock-green" />
            <span>FSA Registered • B2B Account Logistics</span>
          </div>
        </div>
      </div>
    </section>
  );
}
