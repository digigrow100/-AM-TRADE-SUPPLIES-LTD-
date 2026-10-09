import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { images } from "@/lib/images";
import { mapsHref, phoneHref, site } from "@/lib/site";

const include = [
  "Your business name and type of business",
  "The products you need and rough quantities",
  "Your delivery postcode",
  "How often you expect to order",
];

export default function Sidebar() {
  return (
    <div className="space-y-space-lg">
      <div className="rounded-2xl bg-surface-card p-space-md shadow-sm sm:p-space-lg">
        <div className="mb-space-md flex items-center gap-space-xs">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-container text-secondary-container">
            <Icon name="warehouse" className="text-[24px]" />
          </div>
          <div>
            <h2 className="text-headline-sm text-on-surface">Where to Find Us</h2>
            <p className="text-body-sm text-on-surface-variant">Wholesale supply, Stoke-on-Trent</p>
          </div>
        </div>
        <div className="space-y-space-md text-body-md text-on-surface">
          <div className="flex items-start gap-space-sm">
            <Icon name="location_on" className="mt-0.5 text-[22px] text-secondary" />
            <div>
              <p className="text-label-lg text-on-surface">AM Trade Supplies Ltd</p>
              <address className="not-italic text-on-surface-variant">
                {site.street}
                <br />
                {site.locality}, {site.postcode}
              </address>
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1 py-2 text-label-lg text-secondary hover:underline"
              >
                View on Google Maps <Icon name="launch" className="text-[16px]" />
              </a>
            </div>
          </div>
          {phoneHref && site.phone && (
            <div className="flex items-start gap-space-sm">
              <Icon name="phone_in_talk" className="mt-0.5 text-[22px] text-secondary" />
              <div>
                <p className="text-label-lg text-on-surface">Phone</p>
                <a href={phoneHref} className="block text-headline-sm text-secondary hover:underline">
                  {site.phone}
                </a>
              </div>
            </div>
          )}
          {site.email && (
            <div className="flex items-start gap-space-sm">
              <Icon name="mail" className="mt-0.5 text-[22px] text-secondary" />
              <div className="min-w-0">
                <p className="text-label-lg text-on-surface">Email</p>
                <a href={`mailto:${site.email}`} className="block break-all text-label-lg text-secondary hover:underline">
                  {site.email}
                </a>
              </div>
            </div>
          )}
          <div className="flex items-start gap-space-sm">
            <Icon name="send" className="mt-0.5 text-[22px] text-secondary" />
            <div>
              <p className="text-label-lg text-on-surface">Online Enquiries</p>
              <p className="text-body-sm text-on-surface-variant">
                Use the form on this page to send us your trade enquiry.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-space-md rounded-2xl bg-navy-deep p-space-md text-on-primary shadow-md sm:p-space-lg">
        <div className="flex items-center gap-space-xs">
          <Icon name="receipt_long" className="text-[24px] text-secondary-container" />
          <h2 className="text-headline-sm text-on-primary">What to Include</h2>
        </div>
        <p className="text-body-sm text-surface-container-highest">
          A little detail helps us prepare an accurate quote:
        </p>
        <ul className="space-y-space-sm text-body-sm text-surface-container-highest">
          {include.map((t) => (
            <li key={t} className="flex items-start gap-space-xs">
              <Icon name="check_circle" className="mt-0.5 text-[18px] text-secondary-container" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <div className="pt-space-xs">
          <Link
            href="/services"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-surface-card/10 px-space-md py-2.5 text-label-lg text-on-primary transition-colors hover:bg-surface-card/20"
          >
            <Icon name="inventory_2" className="text-[18px]" />
            See the Full Product Range
          </Link>
        </div>
      </div>

      <div className="space-y-space-sm overflow-hidden rounded-2xl bg-surface-card p-space-md shadow-sm">
        <span className="text-label-lg text-on-surface">Supply From Stoke-on-Trent</span>
        <div className="relative h-44 w-full overflow-hidden rounded-xl">
          <Image
            src={images.contactDepot}
            alt="Warehouse aisle with pallet racking and a forklift"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent p-space-sm">
            <p className="text-label-md text-on-primary">
              Wholesale food and drink for trade customers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
