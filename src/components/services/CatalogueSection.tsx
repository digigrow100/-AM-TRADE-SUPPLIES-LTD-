import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { images } from "@/lib/images";

type Category = {
  id: string;
  image: StaticImageData;
  alt: string;
  tag: string;
  tagNote: string;
  title: string;
  body: string;
  chips: string[];
  cta: string;
  ctaNote: string;
  featuredIcon: string;
  featuredTitle: string;
  items: { title: string; body: string; note: string }[];
};

const categories: Category[] = [
  {
    id: "drinks",
    image: images.servicesDrinks,
    alt: "Warehouse aisle with pallet racking stocked with packaged drinks",
    tag: "Soft drinks, water and juice",
    tagNote: "• For shops, cafés and caterers",
    title: "Wholesale Soft Drinks, Bottled Water and Juices",
    body: "Stock the drinks your customers ask for. We supply soft drinks, bottled water and juices to shops, cafés, takeaways and caterers. Tell us the products and quantities you need and we will quote.",
    chips: ["Soft drinks", "Bottled water", "Juices"],
    cta: "Enquire About Drinks",
    ctaNote: "Ask about brands and pack sizes",
    featuredIcon: "verified",
    featuredTitle: "Drinks We Supply",
    items: [
      { title: "Soft Drinks", body: "Fizzy and still soft drinks for retail shelves, takeaway fridges and catering.", note: "Quote on request" },
      { title: "Bottled Water", body: "Bottled water for shops, cafés and catering use.", note: "Quote on request" },
      { title: "Juices", body: "Juices for breakfast service, cafés and retail displays.", note: "Quote on request" },
    ],
  },
  {
    id: "oils",
    image: images.servicesOils,
    alt: "Stacked green cooking oil containers and boxes ready for commercial distribution",
    tag: "Frying and cooking oils",
    tagNote: "• For commercial kitchens",
    title: "Wholesale Cooking Oils: Rapeseed and Vegetable Oil",
    body: "Restaurants, takeaways and commercial kitchens use cooking oil every day. We supply rapeseed oil and vegetable oil in wholesale quantities. Contact us to discuss the oils and amounts that suit your kitchen.",
    chips: ["Rapeseed oil", "Vegetable oil"],
    cta: "Enquire About Oils",
    ctaNote: "Tell us how you use your oil",
    featuredIcon: "science",
    featuredTitle: "Cooking Oils We Supply",
    items: [
      { title: "Rapeseed Oil", body: "A popular cooking oil for frying, roasting and dressings.", note: "Quote on request" },
      { title: "Vegetable Oil", body: "A general-purpose oil widely used for frying and baking.", note: "Quote on request" },
    ],
  },
  {
    id: "flour",
    image: images.servicesFlour,
    alt: "Pallets of paper flour sacks stacked in a clean modern warehouse",
    tag: "Bakery and pizza flour",
    tagNote: "• For bakeries and pizzerias",
    title: "Wholesale Flour: Plain, Pizza and Self-Raising",
    body: "Bakeries, pizzerias and caterers rely on consistent flour. We supply plain flour, pizza flour and self-raising flour to trade customers. Ask us which option suits your recipes.",
    chips: ["Plain flour", "Pizza flour", "Self-raising flour"],
    cta: "Enquire About Flour",
    ctaNote: "Share your recipes and volumes",
    featuredIcon: "grain",
    featuredTitle: "Flour We Supply",
    items: [
      { title: "Plain Flour", body: "An all-purpose flour for baking, sauces and batters.", note: "Quote on request" },
      { title: "Pizza Flour", body: "Flour suited to making pizza dough in pizzerias and takeaways.", note: "Quote on request" },
      { title: "Self-Raising Flour", body: "Flour with a raising agent added, used for cakes, scones and sponges.", note: "Quote on request" },
    ],
  },
];

export default function CatalogueSection() {
  return (
    <>
      <div className="mb-space-lg flex flex-col justify-between gap-space-sm md:flex-row md:items-end">
        <div>
          <span className="text-label-md font-bold uppercase tracking-wider text-secondary">
            Wholesale Product Range
          </span>
          <h2 className="text-headline-lg-mobile text-on-surface md:text-headline-lg">
            Wholesale Products for Retailers, Kitchens and Bakeries
          </h2>
          <p className="text-body-md text-on-surface-variant">
            Three categories, eight product lines. Not sure what you need? Our{" "}
            <Link href="/about" className="font-semibold text-secondary underline-offset-2 hover:underline">
              about page
            </Link>{" "}
            explains who we supply.
          </p>
        </div>
        <Link
          href="#quick-quote"
          className="flex items-center gap-1 text-label-lg text-secondary-container transition-colors hover:text-trade-orange-hover"
        >
          Request a Quote <Icon name="arrow_forward" className="text-[18px]" />
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
                  {c.chips.map((chip) => (
                    <span key={chip} className="flex items-center gap-1 rounded-md bg-surface-subtle px-space-sm py-1 text-label-md text-on-surface">
                      <Icon name="check_circle" className="text-[16px] text-secondary-container" /> {chip}
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
              <div
                className={`grid grid-cols-1 gap-space-md ${
                  c.items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
                }`}
              >
                {c.items.map((it) => (
                  <div key={it.title} className="flex flex-col justify-between rounded-lg bg-surface-card p-space-md shadow-sm">
                    <div>
                      <h5 className="text-headline-sm text-on-surface">{it.title}</h5>
                      <p className="mt-1 text-body-sm text-on-surface-variant">{it.body}</p>
                    </div>
                    <Link
                      href="#quick-quote"
                      className="mt-space-md inline-flex items-center gap-1 pt-space-xs text-label-md text-secondary-container hover:underline"
                    >
                      {it.note} <Icon name="arrow_forward" className="text-[14px]" />
                    </Link>
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
