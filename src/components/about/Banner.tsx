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
        <h1 className="text-headline-lg-mobile tracking-tight text-on-primary md:text-headline-lg">
          About AM Trade Supplies Ltd: B2B Wholesale Supplier in Stoke-on-Trent
        </h1>
        <p className="max-w-2xl text-body-lg leading-relaxed text-surface-container-highest">
          AM Trade Supplies Ltd is a B2B wholesale supplier in Stoke-on-Trent,
          providing food and drink products to retailers, restaurants,
          takeaways, cafés, bakeries and caterers.
        </p>
        <div className="flex flex-col gap-space-sm pt-space-xs text-body-sm text-surface-container-high sm:flex-row sm:flex-wrap sm:items-center sm:gap-space-md">
          <div className="flex items-center gap-space-xs">
            <Icon name="location_on" className="text-[18px] text-secondary-container" />
            <span>Stoke-on-Trent, UK</span>
          </div>
          <div className="flex items-center gap-space-xs">
            <Icon name="storefront" className="text-[18px] text-secondary-container" />
            <span>Wholesale food and drink for trade customers</span>
          </div>
        </div>
      </div>
    </section>
  );
}
