import Link from "next/link";
import Icon from "@/components/Icon";

const customers = [
  {
    icon: "storefront",
    title: "Retailers and Shops",
    body: "Convenience stores, delis and independent shops need drinks that sell and everyday products customers ask for. We supply soft drinks, bottled water and juices in wholesale quantities.",
    link: { label: "See the drinks range", href: "/services#drinks" },
  },
  {
    icon: "inventory_2",
    title: "Restaurants, Takeaways and Cafés",
    body: "Busy kitchens go through cooking oil, flour and drinks every week. We can supply rapeseed oil, vegetable oil, flour and drinks from one place.",
    link: { label: "See the cooking oils range", href: "/services#oils" },
  },
  {
    icon: "support_agent",
    title: "Bakeries and Caterers",
    body: "Bakers and caterers rely on the right flour and oil for consistent results. We supply plain, pizza and self-raising flour, alongside oils and drinks.",
    link: { label: "See the flour range", href: "/services#flour" },
  },
];

export default function WhoWeAre() {
  return (
    <section className="mb-space-xl md:mb-space-2xl">
      <div className="mx-auto mb-space-xl max-w-3xl space-y-space-xs text-center">
        <h2 className="text-headline-lg-mobile tracking-tight text-on-surface md:text-headline-lg">
          Who We Supply
        </h2>
        <p className="text-body-md text-on-surface-variant">
          We work with businesses of different sizes. If you buy food and drink
          in trade quantities, our{" "}
          <Link href="/contact" className="font-semibold text-secondary underline-offset-2 hover:underline">
            trade enquiry form
          </Link>{" "}
          is the quickest way to start.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-space-lg md:grid-cols-3">
        {customers.map((p) => (
          <div
            key={p.title}
            className="flex flex-col justify-between space-y-space-md rounded-xl bg-surface-card p-space-lg shadow-sm"
          >
            <div className="space-y-space-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-container text-navy-deep">
                <Icon name={p.icon} className="text-[28px]" />
              </div>
              <h3 className="text-headline-sm text-on-surface">{p.title}</h3>
              <p className="text-body-md text-on-surface-variant">{p.body}</p>
            </div>
            <Link
              href={p.link.href}
              className="inline-flex items-center gap-space-xs py-2 text-label-lg text-secondary hover:underline"
            >
              <span>{p.link.label}</span>
              <Icon name="arrow_forward" className="text-[16px]" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
