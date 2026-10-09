import Image from "next/image";
import Icon from "@/components/Icon";
import { images } from "@/lib/images";

export default function Intro() {
  return (
    <section className="mb-space-xl md:mb-space-2xl">
      <div className="grid grid-cols-1 items-center gap-space-xl lg:grid-cols-12">
        <div className="space-y-space-md lg:col-span-7">
          <div className="inline-flex items-center gap-space-xs rounded-full bg-surface-container px-space-sm py-space-xs text-label-md text-on-surface">
            <span className="h-2 w-2 rounded-full bg-secondary-container" />
            ESTABLISHED BRITISH COMMODITY WHOLESALE
          </div>
          <h2 className="text-headline-lg-mobile md:text-headline-lg tracking-tight text-on-surface">
            Over 15 Years of Precision Supply Chain Excellence
          </h2>
          <p className="text-body-md text-on-surface-variant">
            Headquartered at Unit 3, Garfield Works, Uttoxeter Road, ST3 1PF, MB
            Trade Supplies Ltd was forged with an unyielding mandate: eliminate
            the inventory volatility and margin friction that penalize British
            food services, hospitality groups, and independent retailers.
          </p>
          <p className="text-body-md text-on-surface-variant">
            What began as a regional FMCG distributor has matured into a
            nationwide staple network. We warehouse high-volume beverage
            allocations, foundational commercial flours, and certified cooking
            oils, operating on zero-backorder principles and rock-solid vendor
            contracts directly with primary manufacturers.
          </p>
          <div className="space-y-space-xs rounded-xl bg-surface-card p-space-lg shadow-sm">
            <div className="flex items-center gap-space-xs text-secondary-container">
              <Icon name="verified_user" className="text-[22px]" />
              <span className="text-label-lg uppercase tracking-wider text-on-surface">
                Our Core Mission
              </span>
            </div>
            <p className="text-body-md text-on-surface-variant">
              Guaranteeing unbroken commercial supply chains, clear-cut volume
              pricing tiers, and direct, proactive B2B account support so
              kitchen operators and purchasing leads focus entirely on growth.
            </p>
          </div>
        </div>

        <div className="relative pb-space-lg lg:col-span-5 lg:pb-0">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface-container shadow-md">
            <Image
              src={images.aboutHub}
              alt="Distribution centre with tidy pallet racking and a polished warehouse floor"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-0 left-space-md max-w-xs rounded-xl bg-surface-card p-space-md shadow-lg lg:-bottom-space-md lg:-left-space-md">
            <div className="flex items-center gap-space-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-stock-green-bg text-stock-green">
                <Icon name="local_shipping" className="text-[24px]" />
              </div>
              <div>
                <p className="text-headline-sm text-on-surface">Fleet Dispatch</p>
                <p className="text-body-sm text-on-surface-variant">Daily scheduled mainland routes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
