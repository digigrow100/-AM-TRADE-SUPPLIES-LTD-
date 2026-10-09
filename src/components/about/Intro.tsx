import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { images } from "@/lib/images";

export default function Intro() {
  return (
    <section className="mb-space-xl md:mb-space-2xl">
      <div className="grid grid-cols-1 items-center gap-space-xl lg:grid-cols-12">
        <div className="space-y-space-md lg:col-span-7">
          <div className="inline-flex items-center gap-space-xs rounded-full bg-surface-container px-space-sm py-space-xs text-label-md text-on-surface">
            <span className="h-2 w-2 rounded-full bg-secondary-container" />
            WHO WE ARE
          </div>
          <h2 className="text-headline-lg-mobile tracking-tight text-on-surface md:text-headline-lg">
            A Local Wholesaler for Food and Drink Businesses
          </h2>
          <p className="text-body-md text-on-surface-variant">
            We supply the products trade customers reorder most: soft drinks,
            bottled water, juices, cooking oils and flour.
          </p>
          <p className="text-body-md text-on-surface-variant">
            Our approach is simple. We keep the range focused, quote clearly and
            deal with each business directly. See what we stock on our{" "}
            <Link href="/products-services" className="font-semibold text-secondary underline-offset-2 hover:underline">
              products and services page
            </Link>
            .
          </p>
          <div className="space-y-space-xs rounded-xl bg-surface-card p-space-lg shadow-sm">
            <div className="flex items-center gap-space-xs text-secondary-container">
              <Icon name="verified_user" className="text-[22px]" />
              <span className="text-label-lg uppercase tracking-wider text-on-surface">
                What We Aim To Do
              </span>
            </div>
            <p className="text-body-md text-on-surface-variant">
              Make buying wholesale food and drink straightforward, so you spend
              less time sourcing stock and more time running your business.
            </p>
          </div>
        </div>

        <div className="relative pb-space-lg lg:col-span-5 lg:pb-0">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface-container shadow-md">
            <Image
              src={images.aboutHub}
              alt="Tidy warehouse aisle with pallet racking and a pallet truck"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-0 left-space-md max-w-xs rounded-xl bg-surface-card p-space-md shadow-lg lg:-bottom-space-md lg:-left-space-md">
            <div className="flex items-center gap-space-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-stock-green-bg text-stock-green">
                <Icon name="location_on" className="text-[24px]" />
              </div>
              <div>
                <p className="text-headline-sm text-on-surface">Stoke-on-Trent</p>
                <p className="text-body-sm text-on-surface-variant">Supplying trade customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
