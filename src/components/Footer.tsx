import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import {
  footerComplianceLinks,
  footerQuickLinks,
  site,
} from "@/lib/site";

const linkClass = "transition-colors hover:text-on-primary";

export default function Footer() {
  return (
    <footer className="mt-space-2xl w-full bg-navy-deep pb-space-xl pt-space-2xl text-on-primary">
      <div className="mx-auto max-w-7xl px-margin-mobile sm:px-margin">
        <div className="grid grid-cols-1 gap-space-xl pb-space-xl md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-space-md">
            <div className="inline-block rounded-lg bg-surface-card px-space-md py-space-sm">
              <Image
                src={images.logo}
                alt={`${site.name} Logo`}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-body-sm text-surface-container-highest">
              Industrial wholesale solutions &amp; high-volume commodity trade
              distribution for hospitality, food prep, and commercial operations
              across the United Kingdom.
            </p>
            <div className="space-y-space-xs text-body-sm text-surface-container-highest">
              <p>{site.address}</p>
              <p>
                Company Reg: {site.companyReg} | VAT: {site.vat}
              </p>
            </div>
          </div>

          <div>
            <h4 className="mb-space-md text-headline-sm text-on-primary">Quick Links</h4>
            <ul className="space-y-space-sm text-body-sm text-surface-container-highest">
              {footerQuickLinks.map((l) => (
                <li key={l.label}>
                  <Link className={linkClass} href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-space-md text-headline-sm text-on-primary">
              Trade Compliance
            </h4>
            <ul className="space-y-space-sm text-body-sm text-surface-container-highest">
              {footerComplianceLinks.map((l) => (
                <li key={l.label}>
                  <Link className={linkClass} href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-space-md text-headline-sm text-on-primary">
              Trade Enquiries
            </h4>
            <p className="mb-space-sm text-body-sm text-surface-container-highest">
              Need contract pricing, bulk pallet terms, or dedicated logistics routing?
            </p>
            <a
              href={site.phoneHref}
              className="text-headline-sm text-secondary-container hover:underline"
            >
              {site.phone}
            </a>
            <p className="mt-space-xs text-body-sm text-surface-container-highest">
              {site.hours}
            </p>
          </div>
        </div>

        <div className="pt-space-lg text-center text-body-sm text-surface-container-highest">
          © 2026 {site.name}. All rights reserved. Registered in England &amp; Wales.
        </div>
      </div>
    </footer>
  );
}
