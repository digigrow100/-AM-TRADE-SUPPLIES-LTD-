import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { productCategories } from "@/lib/products";
import { footerPageLinks, phoneHref, site } from "@/lib/site";

const linkClass = "transition-colors hover:text-on-primary";

export default function Footer() {
  return (
    <footer className="mt-space-2xl w-full bg-navy-deep pb-space-xl pt-space-2xl text-on-primary">
      <div className="mx-auto max-w-7xl px-margin-mobile sm:px-margin">
        <div className="grid grid-cols-1 gap-space-xl pb-space-xl md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-space-md">
            <Link
              href="/"
              aria-label={`${site.name} home`}
              className="inline-block rounded-lg bg-surface-card px-space-md py-space-sm"
            >
              <Image
                src={images.logo}
                alt={`${site.name} logo`}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-body-sm text-surface-container-highest">
              {site.name} is a B2B wholesale food and drink supplier in{" "}
              {site.locality}, supplying drinks, cooking oils and flour to trade
              customers.
            </p>
          </div>

          <div>
            <h2 className="mb-space-md text-headline-sm text-on-primary">Quick Links</h2>
            <ul className="space-y-space-sm text-body-sm text-surface-container-highest">
              {footerPageLinks.map((l) => (
                <li key={l.label}>
                  <Link className={linkClass} href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-space-md text-headline-sm text-on-primary">Our Products</h2>
            <ul className="space-y-space-sm text-body-sm text-surface-container-highest">
              {productCategories.map((c) => (
                <li key={c.id}>
                  <Link className={linkClass} href={c.href}>
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-space-md text-headline-sm text-on-primary">Trade Enquiries</h2>
            <p className="mb-space-sm text-body-sm text-surface-container-highest">
              Looking for a wholesale quote? Send us your product list and
              delivery postcode.
            </p>
            <Link
              href="/contact"
              className="text-label-lg text-secondary-container hover:underline"
            >
              Request a trade quote
            </Link>
            {phoneHref && site.phone && (
              <p className="mt-space-sm text-body-sm text-surface-container-highest">
                <a href={phoneHref} className={linkClass}>
                  {site.phone}
                </a>
              </p>
            )}
            {site.email && (
              <p className="mt-space-xs break-all text-body-sm text-surface-container-highest">
                <a href={`mailto:${site.email}`} className={linkClass}>
                  {site.email}
                </a>
              </p>
            )}
          </div>
        </div>

        <div className="pt-space-lg text-center text-body-sm text-surface-container-highest">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
