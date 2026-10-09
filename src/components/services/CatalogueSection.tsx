import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { images } from "@/lib/images";

type Category = {
  id: string;
  image: string;
  alt: string;
  overlay: React.ReactNode;
  ref: string;
  tag: string;
  tagNote: string;
  title: string;
  body: string;
  specs: { icon: string; label: string }[];
  cta: string;
  ctaNote: string;
  featuredIcon: string;
  featuredTitle: string;
  items: {
    status: string;
    statusClass: string;
    title: string;
    body: string;
    meta: string;
    note: string;
  }[];
};

const green = "text-stock-green";
const orange = "text-secondary";

const categories: Category[] = [
  {
    id: "drinks",
    image: images.servicesDrinks,
    alt: "Warehouse aisle with pallet racks of canned soft drinks, mineral water and juices",
    overlay: (
      <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-stock-green-bg px-space-sm py-1 shadow-sm">
        <span className="h-2 w-2 rounded-full bg-stock-green" />
        <span className="text-label-md font-bold uppercase tracking-wider text-stock-green">High Stock Volume</span>
      </div>
    ),
    ref: "DRK-01",
    tag: "Commodity Beverages",
    tagNote: "• Full Pallet & Mixed Drops",
    title: "Wholesale Drinks & Carbonated Cans",
    body: "Comprehensive range of popular branded carbonated cans, premium natural mineral water, sports hydration, and bulk ambient catering juices. Palletised directly for immediate shelf replenishment or back-of-bar turnover.",
    specs: [
      { icon: "inventory_2", label: "60 – 120 Cases / Pallet" },
      { icon: "trending_down", label: "Tiered Volume Rebates" },
      { icon: "local_shipping", label: "Next-Day Dispatch Ready" },
    ],
    cta: "Enquire Drinks Pallets",
    ctaNote: "MOQ: 1 Full Pallet (Mixed Configs Available)",
    featuredIcon: "verified",
    featuredTitle: "Featured High-Turnover Drink Lines",
    items: [
      { status: "IN STOCK", statusClass: green, title: "Premium Mineral Water", body: "500ml x 24 Shrink-Wrapped Packs. 84 packs per standard pallet layer.", meta: "£0.19 / unit eqv.", note: "Tiered Pallet Pricing" },
      { status: "IN STOCK", statusClass: green, title: "Bulk Classic Cola Cans", body: "330ml x 24 Cans. Available in 120-tray Euro pallets with protective corner strapping.", meta: "Contract Rates", note: "Full Lorry Discounts" },
      { status: "IN STOCK", statusClass: green, title: "Pure Orange Juice Ambient", body: "1L x 12 Tetra Paks. Long shelf life (9+ months), ideal for breakfast buffets & catering.", meta: "Pallet Only", note: "Export Quality" },
    ],
  },
  {
    id: "oils",
    image: images.servicesOils,
    alt: "Stacked green 20L drums of rapeseed oil and boxed vegetable oil for commercial kitchens",
    overlay: (
      <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-surface-card/90 px-space-sm py-1 shadow-sm backdrop-blur-md">
        <Icon name="local_fire_department" className="text-[16px] text-secondary" />
        <span className="text-label-md font-bold uppercase tracking-wider text-on-surface">Catering &amp; Frying Staple</span>
      </div>
    ),
    ref: "OIL-02",
    tag: "Commercial Frying Supplies",
    tagNote: "• Certified Food Grade",
    title: "Wholesale Commercial Cooking Oils",
    body: "Engineered for demanding fast-turnover kitchens, commercial fryers, bakeries, and takeaway venues. Built for extended fry life and maximum thermal stability without flavor transfer or foaming.",
    specs: [
      { icon: "autorenew", label: "High Smoke Point (220°C+)" },
      { icon: "view_in_ar", label: "Heavy Stackable 20L Drums" },
      { icon: "eco", label: "100% Pure British Rapeseed" },
    ],
    cta: "Request Oil Price Matrix",
    ctaNote: "Pallet configuration: 48 drums (960L)",
    featuredIcon: "science",
    featuredTitle: "Commercial Grade Frying Formulations",
    items: [
      { status: "BEST SELLER", statusClass: green, title: "Extended Life Vegetable Oil 20L", body: "Anti-foaming agent included. Anti-darkening formulation for double fry performance.", meta: "Trade Bag-in-Box / Tin", note: "Full Pallet: 48 units" },
      { status: "IN STOCK", statusClass: green, title: "Premium Pure Rapeseed 20L", body: "100% cold-pressed refined blend. Ultra-clean aroma suitable for dressings and shallow sauteing.", meta: "High Oleic Spec", note: "Consistent Batch Trace" },
      { status: "IN STOCK", statusClass: green, title: "Heavy-Duty Frying Oil 15L", body: "Compact footprint drum designed for rapid oil changes and ergonomic lifting compliance.", meta: "Ergonomic Handle", note: "Recyclable HDPE" },
    ],
  },
  {
    id: "flour",
    image: images.servicesFlour,
    alt: "25kg paper sacks of plain, pizza and self-raising flour stacked on pallets",
    overlay: (
      <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-stock-green-bg px-space-sm py-1 shadow-sm">
        <span className="h-2 w-2 rounded-full bg-stock-green" />
        <span className="text-label-md font-bold uppercase tracking-wider text-stock-green">Milled to Order</span>
      </div>
    ),
    ref: "FLR-03",
    tag: "Bakery & Pizzeria Specialist",
    tagNote: "• Controlled Protein Index",
    title: "Wholesale Commercial Flour Sacks",
    body: "Precision-milled 25kg paper sacks formulated for artisan bakeries, commercial pizzerias, pastry workshops, and industrial food manufacturing. Multi-ply packaging safeguards freshness and maintains moisture defense.",
    specs: [
      { icon: "bakery_dining", label: "12.5% - 14% Protein Grades" },
      { icon: "shield", label: "Sealed Moisture Barrier Sacks" },
      { icon: "check_circle", label: "UK Red Tractor Certified Mills" },
    ],
    cta: "Request Flour Quotation",
    ctaNote: "Pallet configuration: 40 sacks (1,000kg)",
    featuredIcon: "grain",
    featuredTitle: "Standard Milled Bakery Formats (25kg)",
    items: [
      { status: "IN STOCK", statusClass: green, title: "Professional Plain Flour 25kg", body: "Universal all-purpose culinary flour. Optimized for pastry, batters, sauces, and biscuits.", meta: "1,000kg Full Pallets", note: "Consistent W-Index" },
      { status: "HIGH DEMAND", statusClass: orange, title: "Pizzeria Tipo 00 High-Protein 25kg", body: "Fine-ground with superior elasticity for long-fermentation dough (24–72 hours) and high-heat ovens.", meta: "13.8% Protein", note: "Woodfired Tested" },
      { status: "IN STOCK", statusClass: green, title: "Bakery Self-Raising Flour 25kg", body: "Homogenized aerating leavening agents pre-blended for uniform rise in cakes, scones, and sponges.", meta: "Precision Leavened", note: "Commercial Sacks" },
    ],
  },
];

export default function CatalogueSection() {
  return (
    <>
      <div className="mb-space-lg flex flex-col justify-between gap-space-sm md:flex-row md:items-end">
        <div>
          <span className="text-label-md font-bold uppercase tracking-wider text-secondary">
            Comprehensive Pallet Assortment
          </span>
          <h2 className="text-headline-lg-mobile md:text-headline-lg text-on-surface">Core Trade Catalogues</h2>
          <p className="text-body-md text-on-surface-variant">
            Tiered bulk rates curated exclusively for hospitality, industrial
            bakeries, and high-turnover retailers.
          </p>
        </div>
        <Link
          href="#quick-quote"
          className="flex items-center gap-1 text-label-lg text-secondary-container transition-colors hover:text-trade-orange-hover"
        >
          Request Custom Contract Quotation <Icon name="arrow_forward" className="text-[18px]" />
        </Link>
      </div>

      <div className="space-y-space-xl md:space-y-space-2xl">
        {categories.map((c, i) => (
          <div
            key={c.id}
            id={c.id}
            className="space-y-space-lg rounded-xl bg-surface-card p-space-md shadow-sm sm:p-space-lg"
          >
            <div className="grid grid-cols-1 items-center gap-space-lg lg:grid-cols-12">
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-surface-subtle lg:col-span-5">
                <Image
                  src={c.image}
                  alt={c.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  priority={i === 0}
                  className="object-cover"
                />
                {c.overlay}
                <div className="absolute bottom-3 right-3 rounded bg-navy-deep/80 px-space-sm py-1 text-label-md text-on-primary backdrop-blur-sm">
                  Cat Ref: {c.ref}
                </div>
              </div>

              <div className="flex flex-col justify-between space-y-space-md lg:col-span-7">
                <div className="space-y-space-xs">
                  <div className="flex flex-wrap items-center gap-space-xs">
                    <span className="rounded bg-surface-container px-space-xs py-0.5 text-label-md text-on-primary-fixed">
                      {c.tag}
                    </span>
                    <span className="text-body-sm text-on-surface-variant">{c.tagNote}</span>
                  </div>
                  <h3 className="text-headline-md text-on-surface">{c.title}</h3>
                  <p className="text-body-md text-on-surface-variant">{c.body}</p>
                </div>
                <div className="flex flex-wrap gap-space-xs pt-space-xs">
                  {c.specs.map((s) => (
                    <span key={s.label} className="flex items-center gap-1 rounded-md bg-surface-subtle px-space-sm py-1 text-label-md text-on-surface">
                      <Icon name={s.icon} className="text-[16px] text-secondary-container" /> {s.label}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col gap-space-sm pt-space-xs sm:flex-row sm:items-center sm:gap-space-md">
                  <Link
                    href="#quick-quote"
                    className="rounded-lg bg-secondary-container px-space-md py-2.5 text-center text-label-lg text-on-secondary transition-colors hover:bg-trade-orange-hover"
                  >
                    {c.cta}
                  </Link>
                  <span className="text-body-sm text-on-surface-variant">{c.ctaNote}</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-surface-subtle p-space-md">
              <h4 className="mb-space-sm flex items-center gap-space-xs text-headline-sm text-on-surface">
                <Icon name={c.featuredIcon} className="text-secondary-container" />
                {c.featuredTitle}
              </h4>
              <div className="grid grid-cols-1 gap-space-md md:grid-cols-3">
                {c.items.map((it) => (
                  <div key={it.title} className="flex flex-col justify-between rounded-lg bg-surface-card p-space-md shadow-sm">
                    <div>
                      <span className={`text-label-md font-bold ${it.statusClass}`}>{it.status}</span>
                      <h5 className="mt-1 text-headline-sm text-on-surface">{it.title}</h5>
                      <p className="mt-1 text-body-sm text-on-surface-variant">{it.body}</p>
                    </div>
                    <div className="mt-space-md flex flex-wrap items-center justify-between gap-x-space-sm gap-y-1 pt-space-xs">
                      <span className="text-label-lg text-on-surface">{it.meta}</span>
                      <span className="text-label-md text-secondary-container">{it.note}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
