import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { images } from "@/lib/images";

const items = [
  {
    title: "Wholesale Drinks",
    badge: "High Stock Holding",
    image: images.aboutDrinks,
    alt: "Shelves of canned and bottled soft drinks, energy drinks and mineral water",
    body: "Full-pallet quantities of globally recognized carbonated beverages, sparkling waters, botanical tonics, premium juices, and athletic energy drinks. Packed for swift distribution and high retail turnover.",
    points: [
      "Full Pallets (1,200 - 2,400 cans) & Half-Pallet drops",
      "UK Bonded & Duty-Paid verification",
    ],
    cta: "Browse Drinks Catalogue",
    href: "/products-services#drinks",
  },
  {
    title: "Wholesale Cooking Oils",
    badge: "Immediate Dispatch",
    image: images.aboutOils,
    alt: "20 litre drums of cooking oil and rapeseed oil on warehouse pallets",
    body: "High smoke-point extended life vegetable oils, pure UK rapeseed oil, and specialized frying mediums engineered for heavy commercial catering, fish and chip outlets, and large dining franchises.",
    points: [
      "Available in 10L, 20L drums & 1,000L IBC totes",
      "Contract locked prices against commodity swings",
    ],
    cta: "Browse Cooking Oils",
    href: "/products-services#oils",
  },
  {
    title: "Commercial Flour",
    badge: "Fresh Batch Milled",
    image: images.aboutFlour,
    alt: "25kg paper sacks of baker, pizza and self-raising flour",
    body: "Professional-grade 16kg and 25kg multi-walled sacks covering high-gluten pizza flours, artisanal self-raising, and multi-purpose plain bakeries. Formulated for high hydration dough stability.",
    points: [
      "Moisture-sealed 16kg and 25kg industrial bagging",
      "Full pallet configurations (40 sacks / 1 metric ton)",
    ],
    cta: "Browse Flour Specs",
    href: "/products-services#flour",
  },
];

export default function WhatWeSupply() {
  return (
    <section className="mb-space-xl md:mb-space-2xl">
      <div className="mb-space-xl flex flex-col justify-between gap-space-md md:flex-row md:items-end">
        <div>
          <div className="mb-space-xs inline-flex items-center gap-space-xs rounded-full bg-surface-container px-space-sm py-space-xs text-label-md text-on-surface">
            CORE TRADE COMMODITIES
          </div>
          <h2 className="text-headline-lg-mobile md:text-headline-lg tracking-tight text-on-surface">
            What We Supply: High-Velocity Specialisms
          </h2>
          <p className="text-body-md text-on-surface-variant">
            Direct warehouse allocations maintained at steady volumes, shielded
            from retail market disruptions.
          </p>
        </div>
        <Link
          href="/products-services"
          className="flex items-center gap-space-xs whitespace-nowrap text-label-lg text-secondary-container transition-colors hover:text-trade-orange-hover"
        >
          View Full Wholesale Inventory <Icon name="arrow_forward" className="text-[18px]" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-space-lg md:grid-cols-3">
        {items.map((it) => (
          <div
            key={it.title}
            className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-surface-card shadow-sm transition-all hover:shadow-md"
          >
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-surface-container">
                <Image
                  src={it.image}
                  alt={it.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute left-space-sm top-space-sm flex items-center gap-space-xs rounded-full bg-stock-green-bg px-space-sm py-space-xs text-label-md text-stock-green shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-stock-green" />
                  {it.badge}
                </div>
              </div>
              <div className="space-y-space-sm p-space-lg">
                <h3 className="text-headline-sm text-on-surface">{it.title}</h3>
                <p className="text-body-md text-on-surface-variant">{it.body}</p>
                <div className="space-y-space-xs pt-space-xs text-body-sm text-on-surface-variant">
                  {it.points.map((pt) => (
                    <div key={pt} className="flex items-center gap-space-xs">
                      <Icon name="done" className="text-[16px] text-stock-green" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-space-lg pt-0">
              <Link
                href={it.href}
                className="inline-flex items-center gap-space-xs text-label-lg font-semibold text-secondary-container transition-colors hover:text-trade-orange-hover"
              >
                {it.cta} <Icon name="arrow_forward" className="text-[18px]" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
