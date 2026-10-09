import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { images } from "@/lib/images";

const categories = [
  {
    title: "Wholesale Drinks",
    image: images.homeDrinks,
    alt: "Refrigerated shelves stacked with canned soft drinks, sparkling water and juices",
    badge: "High Stock",
    href: "/products-services#drinks",
    body: "Comprehensive range of soft drinks, bottled water, and juices. Supplied in bulk pallets with competitive trade pricing.",
  },
  {
    title: "Wholesale Cooking Oils",
    image: images.homeOils,
    alt: "Bulk cooking oil cartons and 20 litre drums of rapeseed oil",
    href: "/products-services#oils",
    body: "Bulk vegetable and rapeseed oils for restaurants, takeaways, caterers, and commercial kitchens. Reliable UK trade supply with competitive wholesale pricing.",
  },
  {
    title: "Wholesale Flour",
    image: images.homeFlour,
    alt: "25kg sacks of plain, pizza and self-raising bakery flour",
    href: "/products-services#flour",
    body: "Professional plain, pizza, and self-raising flour for bakeries, pizzerias, restaurants, and commercial kitchens. Reliable UK trade supply with competitive wholesale pricing.",
  },
];

export default function Categories() {
  return (
    <section
      className="my-space-lg rounded-2xl bg-surface-container-low/60 px-space-md py-space-xl md:px-space-xl md:py-space-2xl"
      id="categories"
    >
      <div className="mb-space-xl flex flex-col justify-between gap-space-sm sm:flex-row sm:items-end">
        <div>
          <h2 className="text-headline-lg-mobile md:text-headline-lg text-on-surface">Core Product Categories</h2>
          <p className="mt-1 text-body-md text-on-surface-variant">
            Premium wholesale supplies for your business.
          </p>
        </div>
        <Link
          href="/products-services"
          className="group inline-flex items-center gap-space-xs self-start text-label-lg text-secondary-container transition-colors hover:text-trade-orange-hover sm:self-auto"
        >
          <span>View All Services</span>
          <Icon
            name="arrow_forward"
            className="text-[18px] transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-space-lg md:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <div
            key={c.title}
            className="group flex flex-col overflow-hidden rounded-xl bg-surface-card shadow-sm transition-all duration-200 hover:shadow-md"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-container">
              <Image
                src={c.image}
                alt={c.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {c.badge && (
                <div className="absolute right-space-sm top-space-sm">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-stock-green-bg px-space-sm py-0.5 text-label-md text-stock-green shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-stock-green" />
                    {c.badge}
                  </span>
                </div>
              )}
            </div>
            <div className="flex flex-grow flex-col justify-between p-space-lg">
              <div>
                <h3 className="text-headline-sm text-on-surface">{c.title}</h3>
                <p className="mt-space-sm text-body-sm leading-relaxed text-on-surface-variant">
                  {c.body}
                </p>
              </div>
              <div className="mt-space-lg pt-space-sm">
                <Link
                  href={c.href}
                  className="inline-flex items-center gap-space-xs text-label-lg text-secondary-container transition-colors hover:text-trade-orange-hover"
                >
                  <span>Browse Catalogue</span>
                  <Icon name="arrow_forward" className="text-[16px]" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
