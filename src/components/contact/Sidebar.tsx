import Image from "next/image";
import Icon from "@/components/Icon";
import { images } from "@/lib/images";

const perks = [
  ["30-Day Credit Facilities:", "Subject to standard UK credit check, simplify bulk billing."],
  ["Tiered Pallet Discounts:", "Fixed scale savings on high-volume drinks, flour, and edible oils."],
  ["Dedicated Account Manager:", "Direct phone line to your assigned trade logistics contact."],
  ["Priority Timed Deliveries:", "Tail-lift and designated booking windows reserved for members."],
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
            <h3 className="text-headline-sm text-on-surface">Depot &amp; Distribution Centre</h3>
            <p className="text-body-sm text-on-surface-variant">Central Midlands Hub</p>
          </div>
        </div>
        <div className="space-y-space-md text-body-md text-on-surface">
          <div className="flex items-start gap-space-sm">
            <Icon name="location_on" className="mt-0.5 text-[22px] text-secondary" />
            <div>
              <p className="text-label-lg text-on-surface">MB Trade Supplies Ltd</p>
              <p className="text-on-surface-variant">Unit 3, Garfield Works</p>
              <p className="text-on-surface-variant">Uttoxeter Road, Longton</p>
              <p className="text-label-lg text-on-surface-variant">Stoke-on-Trent, ST3 1PF</p>
            </div>
          </div>
          <div className="flex items-start gap-space-sm">
            <Icon name="phone_in_talk" className="mt-0.5 text-[22px] text-secondary" />
            <div>
              <p className="text-label-lg text-on-surface">Direct Trade Ordering Desk</p>
              <a href="tel:01782123456" className="block text-headline-sm text-secondary-container hover:underline">
                01782 123 456
              </a>
              <p className="text-body-sm text-on-surface-variant">Pallet inquiries &amp; live stock checks</p>
            </div>
          </div>
          <div className="flex items-start gap-space-sm">
            <Icon name="mail" className="mt-0.5 text-[22px] text-secondary" />
            <div className="min-w-0">
              <p className="text-label-lg text-on-surface">Commercial Enquiries</p>
              <a href="mailto:sales@mbtradesupplies.com" className="block break-all text-label-lg text-secondary hover:underline">
                sales@mbtradesupplies.com
              </a>
              <a href="mailto:accounts@mbtradesupplies.com" className="block break-all text-body-sm text-on-surface-variant hover:underline">
                accounts@mbtradesupplies.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-space-sm">
            <Icon name="schedule" className="mt-0.5 text-[22px] text-secondary" />
            <div>
              <p className="text-label-lg text-on-surface">Operating Hours</p>
              <p className="text-body-sm text-on-surface-variant"><span className="text-label-lg text-on-surface">Monday – Friday:</span> 8:00 AM – 5:30 PM</p>
              <p className="text-body-sm text-on-surface-variant"><span className="text-label-lg text-on-surface">Saturday:</span> 8:00 AM – 1:00 PM</p>
              <p className="text-body-sm text-on-surface-variant"><span className="text-label-lg text-on-surface">Sunday &amp; Bank Holidays:</span> Closed</p>
            </div>
          </div>
        </div>
        <div className="mt-space-md rounded-xl bg-surface-subtle p-space-md">
          <div className="mb-1 flex items-center gap-space-xs text-label-lg text-stock-green">
            <Icon name="local_shipping" className="text-[18px]" /> Order Cut-Off Guarantee
          </div>
          <p className="text-body-sm text-on-surface-variant">
            Place bulk orders before <strong className="text-on-surface">2:00 PM</strong> for
            next-day dispatch to standard mainland UK postal zones.
          </p>
        </div>
      </div>

      <div className="space-y-space-md rounded-2xl bg-navy-deep p-space-md text-on-primary shadow-md sm:p-space-lg">
        <div className="flex items-center gap-space-xs">
          <Icon name="workspace_premium" className="text-[24px] text-secondary-container" />
          <h3 className="text-headline-sm text-on-primary">Wholesale Member Perks</h3>
        </div>
        <p className="text-body-sm text-surface-container-highest">
          Verified accounts unlock our commercial procurement advantages
          immediately upon registration:
        </p>
        <ul className="space-y-space-sm text-body-sm text-surface-container-highest">
          {perks.map(([title, body]) => (
            <li key={title} className="flex items-start gap-space-xs">
              <Icon name="check_circle" className="mt-0.5 text-[18px] text-secondary-container" />
              <span>
                <strong className="text-on-primary">{title}</strong> {body}
              </span>
            </li>
          ))}
        </ul>
        <div className="pt-space-xs">
          <a
            href="tel:01782123456"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-surface-card/10 px-space-md py-2.5 text-label-lg text-on-primary transition-colors hover:bg-surface-card/20"
          >
            <Icon name="support_agent" className="text-[18px]" />
            Speak With an Account Specialist
          </a>
        </div>
      </div>

      <div className="space-y-space-sm overflow-hidden rounded-2xl bg-surface-card p-space-md shadow-sm">
        <div className="flex items-center justify-between gap-space-xs">
          <span className="text-label-lg text-on-surface">Depot Operations Status</span>
          <span className="inline-flex items-center gap-1 text-label-md text-stock-green">
            <span className="h-1.5 w-1.5 rounded-full bg-stock-green" /> Live Logistics
          </span>
        </div>
        <div className="relative h-44 w-full overflow-hidden rounded-xl">
          <Image
            src={images.contactDepot}
            alt="High-bay racking in a wholesale depot with pallets of drinks and cooking oil and a forklift"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent p-space-sm">
            <p className="text-label-md text-on-primary">
              Uttoxeter Road Hub — Over 10,000 sq ft Distribution Space
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
