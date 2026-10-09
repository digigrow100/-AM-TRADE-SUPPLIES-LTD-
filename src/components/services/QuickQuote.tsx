"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import { site } from "@/lib/site";

const field =
  "w-full rounded-lg bg-surface-subtle px-space-md py-2.5 text-body-sm text-on-surface outline-none focus:ring-2 focus:ring-secondary-container";
const label = "text-body-sm font-semibold text-on-surface";

export default function QuickQuote() {
  const [sent, setSent] = useState(false);

  return (
    <section
      className="mb-space-xl mt-space-xl grid grid-cols-1 items-start gap-space-lg md:mt-space-2xl lg:grid-cols-12 lg:gap-space-xl"
      id="quick-quote"
    >
      <div className="relative space-y-space-lg overflow-hidden rounded-xl bg-navy-deep p-space-lg text-on-primary sm:p-space-xl lg:col-span-5">
        <div className="pointer-events-none absolute -bottom-10 -right-10 h-44 w-44 rounded-full bg-secondary-container opacity-10 blur-2xl" />
        <div className="space-y-space-xs">
          <span className="text-label-md font-semibold uppercase tracking-wider text-secondary-fixed">
            Immediate Price Manifest
          </span>
          <h3 className="text-headline-lg-mobile md:text-headline-lg text-on-primary">Download Q2 Trade Catalogue</h3>
          <p className="text-body-md text-surface-container-highest">
            Access our comprehensive 48-page commodity price sheet including
            volume rebates, barcode specifications, pallet dimensions, and
            seasonal booking windows.
          </p>
        </div>
        <div className="space-y-space-sm rounded-lg bg-surface-card/10 p-space-md backdrop-blur-md">
          <div className="flex items-center gap-space-sm">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-secondary-container text-on-secondary">
              <Icon name="picture_as_pdf" className="text-[24px]" />
            </div>
            <div className="min-w-0">
              <p className="break-words text-label-lg text-on-primary">MB_Trade_Catalogue_2026_Q2.pdf</p>
              <p className="text-body-sm text-surface-container-highest">PDF Document • 4.8 MB • Updated Weekly</p>
            </div>
          </div>
          <button
            type="button"
            className="mt-space-sm flex w-full items-center justify-center gap-space-xs rounded-lg bg-surface-card px-space-md py-2.5 text-label-lg text-on-surface shadow transition-colors hover:bg-surface-subtle"
          >
            <Icon name="download" className="text-[18px]" />
            <span>Download Trade Price List (PDF)</span>
          </button>
        </div>
        <div className="space-y-space-sm pt-space-md">
          <p className="text-label-md uppercase tracking-wider text-surface-container-highest">
            Direct Procurement Hotline
          </p>
          <a href={site.phoneHref} className="block text-headline-md text-secondary-container hover:underline">
            {site.phone}
          </a>
          <p className="text-body-sm text-surface-container-highest">
            Dedicated trade account managers on duty 8:00 AM – 5:30 PM (Mon-Fri)
          </p>
        </div>
      </div>

      <div className="space-y-space-md rounded-xl bg-surface-card p-space-md shadow-sm sm:p-space-xl lg:col-span-7">
        <div>
          <h3 className="text-headline-md text-on-surface">Request a Rapid Trade Quote</h3>
          <p className="text-body-md text-on-surface-variant">
            Submit your pallet breakdown or weekly requirements below. We issue
            formal quotes within 2 business hours.
          </p>
        </div>
        <form
          className="space-y-space-md"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            e.currentTarget.reset();
          }}
        >
          <div className="grid grid-cols-1 gap-space-md md:grid-cols-2">
            <div className="space-y-space-xs">
              <label htmlFor="q-company" className={label}>Company / Business Name *</label>
              <input id="q-company" required type="text" placeholder="e.g. Apex Catering Supplies Ltd" className={field} />
            </div>
            <div className="space-y-space-xs">
              <label htmlFor="q-reg" className={label}>Company Reg / VAT Number</label>
              <input id="q-reg" type="text" placeholder="e.g. GB 412 8931 04" className={field} />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-space-md md:grid-cols-2">
            <div className="space-y-space-xs">
              <label htmlFor="q-name" className={label}>Contact Full Name *</label>
              <input id="q-name" required type="text" placeholder="e.g. David Morrison" className={field} />
            </div>
            <div className="space-y-space-xs">
              <label htmlFor="q-email" className={label}>Work Email Address *</label>
              <input id="q-email" required type="email" placeholder="david@business.co.uk" className={field} />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-space-md md:grid-cols-2">
            <div className="space-y-space-xs">
              <label htmlFor="q-interest" className={label}>Primary Product Interest *</label>
              <select id="q-interest" className={field}>
                <option>Mixed Consignment (Drinks + Oils + Flour)</option>
                <option>Wholesale Drinks &amp; Carbonated Cans</option>
                <option>Wholesale Cooking Oils (20L Drums)</option>
                <option>Commercial Bakery Flour (25kg Sacks)</option>
                <option>Full Truckload / Contract Supply</option>
              </select>
            </div>
            <div className="space-y-space-xs">
              <label htmlFor="q-freq" className={label}>Estimated Pallet Frequency</label>
              <select id="q-freq" className={field}>
                <option>Weekly (1 - 5 Pallets)</option>
                <option>Fortnightly (2 - 8 Pallets)</option>
                <option>Monthly (Full Artic Load / 26 Pallets)</option>
                <option>One-Off Spot Order</option>
              </select>
            </div>
          </div>
          <div className="space-y-space-xs">
            <label htmlFor="q-notes" className={label}>Delivery Postcode &amp; Forklift Availability</label>
            <textarea
              id="q-notes"
              rows={3}
              placeholder="e.g. ST3 1PF. Forklift available on site for rapid offload, delivery access via Uttoxeter Road entrance."
              className={field}
            />
          </div>
          <div className="flex flex-col items-stretch justify-between gap-space-md pt-space-xs sm:flex-row sm:items-center">
            <div className="flex items-center gap-space-xs text-body-sm text-on-surface-variant">
              <Icon name="lock" className="text-[18px] text-stock-green" />
              <span>GDPR compliant. Data never shared with third parties.</span>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-secondary-container px-space-xl py-3 text-label-lg text-on-secondary shadow transition-colors hover:bg-trade-orange-hover sm:w-auto"
            >
              Submit Trade Enquiry
            </button>
          </div>
          {sent && (
            <p role="status" className="rounded-lg bg-stock-green-bg p-space-sm text-center text-body-sm text-stock-green">
              Trade quote request submitted successfully. A specialist will contact you shortly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
