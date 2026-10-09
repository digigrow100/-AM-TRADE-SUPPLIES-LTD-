"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import { site } from "@/lib/site";

const inputClass =
  "w-full rounded-lg bg-surface-subtle px-space-sm py-2.5 text-body-sm text-on-surface outline-none focus:ring-2 focus:ring-secondary-container";

export default function TradeCta() {
  const [sent, setSent] = useState(false);

  return (
    <section
      className="relative my-space-xl overflow-hidden rounded-2xl bg-navy-deep p-space-lg py-space-xl text-on-primary shadow-xl md:my-space-2xl md:p-space-2xl"
      id="trade-enquiry"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-secondary-container/15 blur-3xl" />
      <div className="relative z-10 grid grid-cols-1 items-center gap-space-xl lg:grid-cols-12">
        <div className="lg:col-span-7">
          <span className="mb-space-md inline-block rounded-full bg-secondary-container px-space-sm py-1 text-label-md text-on-secondary">
            Apply Within 2 Minutes
          </span>
          <h2 className="text-headline-lg-mobile md:text-headline-lg tracking-tight text-on-primary">
            Open a Trade Account Today
          </h2>
          <p className="mt-space-sm max-w-xl text-body-md text-surface-container-highest">
            Gain immediate access to contract pricing, bulk pallet volume
            discounts, flexible credit terms (subject to status), and regular
            automated scheduled deliveries.
          </p>
          <div className="mt-space-lg flex flex-wrap gap-x-space-xl gap-y-space-md">
            <div>
              <a href={site.phoneHref} className="text-headline-sm text-secondary-container hover:underline">
                {site.phone}
              </a>
              <div className="text-body-sm text-surface-container-highest">Direct Commercial Desk</div>
            </div>
            <div className="min-w-0">
              <a
                href="mailto:orders@mbtradesupplies.co.uk"
                className="break-all text-headline-sm text-on-primary hover:underline"
              >
                orders@mbtradesupplies.co.uk
              </a>
              <div className="text-body-sm text-surface-container-highest">Immediate Quotations</div>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-surface-card p-space-lg text-on-surface shadow-lg lg:col-span-5">
          <h3 className="mb-1 text-headline-sm text-on-surface">Request Wholesale Rate Card</h3>
          <p className="mb-space-md text-body-sm text-on-surface-variant">
            Tell us your product focus and monthly volume.
          </p>
          <form
            className="space-y-space-sm"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              e.currentTarget.reset();
            }}
          >
            <div>
              <label htmlFor="tc-company" className="mb-1 block text-label-md text-on-surface">
                Company / Trading Name
              </label>
              <input id="tc-company" required type="text" placeholder="e.g. Apex Hospitality Group" className={inputClass} />
            </div>
            <div className="grid grid-cols-1 gap-space-sm sm:grid-cols-2">
              <div>
                <label htmlFor="tc-type" className="mb-1 block text-label-md text-on-surface">
                  Business Type
                </label>
                <select id="tc-type" className={inputClass}>
                  <option>Restaurant / Takeaway</option>
                  <option>Commercial Bakery</option>
                  <option>Catering / Events</option>
                  <option>Retailer / Off-Licence</option>
                  <option>Wholesale Distributor</option>
                </select>
              </div>
              <div>
                <label htmlFor="tc-phone" className="mb-1 block text-label-md text-on-surface">
                  Phone Number
                </label>
                <input id="tc-phone" required type="tel" placeholder="07..." className={inputClass} />
              </div>
            </div>
            <fieldset>
              <legend className="mb-1 block text-label-md text-on-surface">
                Primary Commodities Required
              </legend>
              <div className="flex flex-wrap gap-x-space-md gap-y-space-sm pt-1 text-body-sm">
                {[
                  { label: "Drinks & Juices", checked: true },
                  { label: "Cooking Oils", checked: true },
                  { label: "Flour & Baking", checked: false },
                ].map((c) => (
                  <label key={c.label} className="flex cursor-pointer items-center gap-1.5 py-1">
                    <input type="checkbox" defaultChecked={c.checked} className="h-4 w-4 accent-secondary-container" />
                    <span>{c.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="pt-space-xs">
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-space-xs rounded-lg bg-secondary-container px-space-md py-3 text-label-lg text-on-secondary shadow-md transition-colors hover:bg-trade-orange-hover"
              >
                <span>Submit Account Application</span>
                <Icon name="send" className="text-[18px]" />
              </button>
            </div>
            {sent && (
              <div
                role="status"
                className="mt-space-xs rounded-lg bg-stock-green-bg p-space-sm text-center text-body-sm text-stock-green"
              >
                Thank you! Your trade representative will contact you within 2
                working hours.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
