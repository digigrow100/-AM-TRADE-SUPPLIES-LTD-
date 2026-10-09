import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { images } from "@/lib/images";

const items = [
  {
    title: "Wholesale Drinks",
    image: images.aboutDrinks,
    alt: "Warehouse racking stocked with wrapped bottled drinks and cooking oil",
    body: "Everyday drinks for shelves, fridges and service counters, supplied in wholesale quantities.",
    points: ["Soft drinks", "Bottled water", "Juices"],
    cta: "Explore drinks",
    href: "/services#drinks",
  },
  {
    title: "Wholesale Cooking Oils",
    image: images.aboutOils,
    alt: "Yellow and blue containers of cooking oil standing on warehouse pallets",
    body: "Cooking oils for frying, roasting and baking in busy commercial kitchens and takeaways.",
    points: ["Rapeseed oil", "Vegetable oil"],
    cta: "Explore cooking oils",
    href: "/services#oils",
  },
  {
    title: "Wholesale Flour",
    image: images.aboutFlour,
    alt: "Pallet of stacked paper flour sacks on a clean warehouse floor",
    body: "Flour for bakeries, pizzerias and caterers who need dependable ingredients for daily production.",
    points: ["Plain flour", "Pizza flour", "Self-raising flour"],
    cta: "Explore flour",
    href: "/services#flour",
  },
];

export default function WhatWeSupply() {
  return (
    <section className="mb-space-xl md:mb-space-2xl">
      <div className="mb-space-xl flex flex-col justify-between gap-space-md md:flex-row md:items-end">
        <div>
          <div className="mb-space-xs inline-flex items-center gap-space-xs rounded-full bg-surface-container px-space-sm py-space-xs text-label-md text-on-surface">
            WHOLESALE RANGE
          </div>
          <h2 className="text-headline-lg-mobile tracking-tight text-on-surface md:text-headline-lg">
            What We Supply
          </h2>
          <p className="text-body-md text-on-surface-variant">
            Three product categories, chosen for businesses that reorder regularly.
          </p>
        </div>
        <Link
          href="/services"
          className="flex items-center gap-space-xs whitespace-nowrap py-2 text-label-lg text-secondary transition-colors hover:text-cta-hover"
        >
          View the full product range <Icon name="arrow_forward" className="text-[18px]" />
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
              </div>
              <div className="space-y-space-sm p-space-lg">
                <h3 className="text-headline-sm text-on-surface">{it.title}</h3>
                <p className="text-body-md text-on-surface-variant">{it.body}</p>
                <ul className="space-y-space-xs pt-space-xs text-body-sm text-on-surface-variant">
                  {it.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-space-xs">
                      <Icon name="done" className="text-[16px] text-stock-green" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="p-space-lg pt-0">
              <Link
                href={it.href}
                className="inline-flex items-center gap-space-xs py-2 text-label-lg font-semibold text-secondary transition-colors hover:text-cta-hover"
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
