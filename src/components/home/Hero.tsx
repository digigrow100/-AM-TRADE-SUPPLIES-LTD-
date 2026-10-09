import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { images } from "@/lib/images";

export default function Hero() {
  return (
    <section className="relative flex min-h-[520px] w-full items-center justify-center overflow-hidden lg:min-h-[640px]">
      <Image
        src={images.homeHero}
        alt="High-ceiling UK distribution warehouse with pallet racking and a forklift"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy-deep/75 to-navy-deep/90" />
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-margin-mobile pb-16 pt-16 text-center sm:px-margin lg:pt-24">
        <div className="mb-space-md inline-flex items-center gap-space-xs rounded-full bg-surface-card/10 px-space-md py-1 text-label-md uppercase tracking-wider text-surface-container-high backdrop-blur-md">
          <span className="h-2 w-2 animate-pulse rounded-full bg-secondary-container" />
          UK B2B Trade &amp; Pallet Logistics
        </div>
        <h1 className="max-w-3xl text-display-hero-mobile md:text-display-hero tracking-tight text-on-primary">
          Trusted Wholesale Supply of Drinks
        </h1>
        <p className="mx-auto mt-space-md max-w-2xl text-body-lg text-surface-container-high">
          Supplying quality beverages to trade customers across the UK with
          reliability and efficiency.
        </p>
        <div className="mt-space-xl flex w-full flex-col items-stretch justify-center gap-space-md sm:w-auto sm:flex-row sm:items-center">
          <a
            href="#categories"
            className="flex items-center justify-center gap-space-xs rounded-lg bg-secondary-container px-space-xl py-3 text-label-lg text-on-secondary shadow-md transition-all hover:-translate-y-0.5 hover:bg-trade-orange-hover"
          >
            Browse Our Services
          </a>
          <Link
            href="#trade-enquiry"
            className="rounded-lg bg-transparent px-space-xl py-3 text-center text-label-lg text-on-primary shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4)] transition-colors hover:bg-surface-card/10"
          >
            Contact Us
          </Link>
        </div>
        <a
          href="#partner-overview"
          aria-label="Scroll to content"
          className="mt-space-xl hidden animate-bounce flex-col items-center text-surface-container-highest transition-colors hover:text-on-primary sm:flex"
        >
          <Icon name="keyboard_arrow_down" className="text-[32px]" />
        </a>
      </div>
    </section>
  );
}
