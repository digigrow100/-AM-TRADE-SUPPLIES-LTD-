import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { images } from "@/lib/images";

const categories = [
  {
    title: "Wholesale Drinks",
    image: images.homeDrinks,
    alt: "Refrigerated display of bottled drinks and juices",
    href: "/services#drinks",
    cta: "See the drinks range",
    body: "Soft drinks, bottled water and juices for shops, cafés, takeaways and caterers.",
  },
  {
    title: "Wholesale Cooking Oils",
    image: images.homeOils,
    alt: "Green cooking oil containers and cartons on a commercial kitchen bench",
    href: "/services#oils",
    cta: "See the cooking oils range",
    body: "Rapeseed oil and vegetable oil for restaurants, takeaways, cafés and commercial kitchens.",
  },
  {
    title: "Wholesale Flour",
    image: images.homeFlour,
    alt: "Stack of paper flour sacks on a wooden pallet in a warehouse",
    href: "/services#flour",
    cta: "See the flour range",
    body: "Plain flour, pizza flour and self-raising flour for bakeries, pizzerias and catering kitchens.",
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
          <h2 className="text-headline-lg-mobile text-on-surface md:text-headline-lg">
            Our Wholesale Product Range
          </h2>
          <p className="mt-1 text-body-md text-on-surface-variant">
            Drinks, cooking oils and flour for trade customers.
          </p>
        </div>
        <Link
          href="/services"
          className="group inline-flex items-center gap-space-xs self-start text-label-lg text-secondary-container transition-colors hover:text-trade-orange-hover sm:self-auto"
        >
          <span>View All Products</span>
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
                  <span>{c.cta}</span>
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
