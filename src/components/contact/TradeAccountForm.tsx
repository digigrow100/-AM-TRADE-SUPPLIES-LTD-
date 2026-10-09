"use client";

import { useState } from "react";
import Icon from "@/components/Icon";

const input =
  "w-full rounded-lg bg-surface-subtle px-space-md py-2.5 text-body-sm text-on-surface shadow-sm outline-none transition-all placeholder:text-outline focus:bg-surface-card focus:ring-2 focus:ring-secondary-container";
const inputCard =
  "w-full rounded-lg bg-surface-card px-space-md py-2.5 text-body-sm text-on-surface shadow-sm outline-none transition-all placeholder:text-outline focus:ring-2 focus:ring-secondary-container";
const label = "mb-1 block text-label-lg text-on-surface";
const option =
  "flex cursor-pointer items-center gap-2 rounded-lg bg-surface-subtle p-2.5 text-body-sm text-on-surface transition-colors hover:bg-surface-container";

const sectors = [
  ["restaurant", "Restaurant / Takeaway"],
  ["bakery", "Bakery / Pizzeria"],
  ["wholesaler", "Wholesaler / Retail"],
  ["catering", "Contract Catering"],
  ["events", "Events / Stadiums"],
  ["other", "Other Commercial"],
];

const access = [
  "Tail-lift vehicle strictly required",
  "Forklift & loading bay available on-site",
  "Articulated lorry (40ft) access permitted",
  "Restricted delivery time window (e.g. 6AM-10AM)",
];

const categories = [
  { label: "Wholesale Drinks", checked: true },
  { label: "Cooking Oils", checked: true },
  { label: "Bakery Flour", checked: false },
  { label: "Packaging & Disposables", checked: false },
];

function SectionTitle({ icon, children }: { icon: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-space-xs text-on-surface">
      <Icon name={icon} className="text-[20px] text-secondary" />
      <h3 className="text-headline-sm">{children}</h3>
    </div>
  );
}

export default function TradeAccountForm() {
  const [done, setDone] = useState(false);

  return (
    <>
      <div className="rounded-2xl bg-surface-card p-space-md shadow-sm sm:p-space-lg md:p-space-xl">
        <div className="mb-space-lg">
          <div className="flex flex-wrap items-center justify-between gap-space-xs">
            <h2 className="text-headline-md text-on-surface">Wholesale Trade Application</h2>
            <span className="rounded-full bg-surface-container px-2.5 py-1 text-label-md text-on-primary-fixed-variant">
              Step 1 of 1
            </span>
          </div>
          <p className="mt-1 text-body-sm text-on-surface-variant">
            Complete the form below to initiate your trade terms. For urgent
            immediate pallet dispatches, call our trade desk at 01782 123 456.
          </p>
        </div>

        <form
          className="space-y-space-lg"
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
        >
          <div className="space-y-space-md">
            <SectionTitle icon="storefront">1. Commercial Business Details</SectionTitle>
            <div className="grid grid-cols-1 gap-space-md md:grid-cols-2">
              <div>
                <label htmlFor="ta-company" className={label}>Company Registered Name *</label>
                <input id="ta-company" required type="text" placeholder="e.g. Stoke Hospitality Group Ltd" className={input} />
              </div>
              <div>
                <label htmlFor="ta-trading" className={label}>Trading Name (if different)</label>
                <input id="ta-trading" type="text" placeholder="e.g. Garfield Road Deli & Bar" className={input} />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-space-md md:grid-cols-2">
              <div>
                <label htmlFor="ta-reg" className={label}>Company Registration Number</label>
                <input id="ta-reg" type="text" placeholder="e.g. 14298102" className={input} />
              </div>
              <div>
                <label htmlFor="ta-vat" className={label}>VAT Number (if registered)</label>
                <input id="ta-vat" type="text" placeholder="GB 412 8931 04" className={input} />
              </div>
            </div>
            <fieldset>
              <legend className={label}>Primary Trade Sector *</legend>
              <div className="grid grid-cols-1 gap-space-xs min-[400px]:grid-cols-2 sm:grid-cols-3">
                {sectors.map(([value, text], i) => (
                  <label key={value} className={option}>
                    <input
                      type="radio"
                      name="trade_type"
                      value={value}
                      defaultChecked={i === 0}
                      className="accent-secondary-container"
                    />
                    <span>{text}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          <div className="space-y-space-md rounded-xl bg-surface-subtle/50 p-space-md">
            <SectionTitle icon="badge">2. Key Procurement Contact</SectionTitle>
            <div className="grid grid-cols-1 gap-space-md md:grid-cols-2">
              <div>
                <label htmlFor="ta-name" className={label}>Full Name *</label>
                <input id="ta-name" required type="text" placeholder="John Miller" className={inputCard} />
              </div>
              <div>
                <label htmlFor="ta-job" className={label}>Position / Job Title *</label>
                <input id="ta-job" required type="text" placeholder="Head of Purchasing / General Manager" className={inputCard} />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-space-md md:grid-cols-2">
              <div>
                <label htmlFor="ta-email" className={label}>Direct Business Email *</label>
                <input id="ta-email" required type="email" placeholder="purchasing@company.co.uk" className={inputCard} />
              </div>
              <div>
                <label htmlFor="ta-tel" className={label}>Direct Telephone / Mobile *</label>
                <input id="ta-tel" required type="tel" placeholder="07123 456 789 or 01782..." className={inputCard} />
              </div>
            </div>
          </div>

          <div className="space-y-space-md">
            <SectionTitle icon="local_shipping">3. Delivery Logistics &amp; Site Access</SectionTitle>
            <div className="grid grid-cols-1 gap-space-md md:grid-cols-3">
              <div className="md:col-span-2">
                <label htmlFor="ta-street" className={label}>Delivery Street Address *</label>
                <input id="ta-street" required type="text" placeholder="Building 4, Commercial Way, Industrial Estate" className={input} />
              </div>
              <div>
                <label htmlFor="ta-post" className={label}>Postcode *</label>
                <input id="ta-post" required type="text" placeholder="e.g. ST3 1PF" className={input} />
              </div>
            </div>
            <fieldset>
              <legend className={`${label} mb-1.5`}>Site Access &amp; Offloading Setup</legend>
              <div className="grid grid-cols-1 gap-space-sm sm:grid-cols-2">
                {access.map((a) => (
                  <label key={a} className={option}>
                    <input type="checkbox" className="accent-secondary-container" />
                    <span>{a}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          <div className="space-y-space-md rounded-xl bg-surface-subtle/50 p-space-md">
            <SectionTitle icon="inventory_2">4. Product Lines &amp; Estimated Volume</SectionTitle>
            <fieldset>
              <legend className={`${label} mb-1.5`}>Product Categories of Primary Interest</legend>
              <div className="grid grid-cols-1 gap-space-xs text-body-sm min-[400px]:grid-cols-2 sm:grid-cols-4">
                {categories.map((c) => (
                  <label key={c.label} className="flex cursor-pointer items-center gap-2 rounded-lg bg-surface-card p-2.5 hover:bg-surface-container">
                    <input type="checkbox" defaultChecked={c.checked} className="accent-secondary-container" />
                    <span>{c.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="grid grid-cols-1 gap-space-md md:grid-cols-2">
              <div>
                <label htmlFor="ta-spend" className={label}>Expected Monthly Spend</label>
                <select id="ta-spend" defaultValue="mid" className={inputCard}>
                  <option value="low">Under £1,000 / month</option>
                  <option value="mid">£1,000 – £5,000 / month</option>
                  <option value="high">£5,000 – £15,000 / month (Volume Tier)</option>
                  <option value="ent">£15,000+ / month (Enterprise Contract)</option>
                </select>
              </div>
              <div>
                <label htmlFor="ta-credit" className={label}>Preferred Credit Facility</label>
                <select id="ta-credit" className={inputCard}>
                  <option>Pro-forma / Card on Dispatch (Standard)</option>
                  <option>30-Day Trade Credit Account (Subject to verification)</option>
                  <option>Direct Debit Monthly Settlement</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="ta-notes" className={label}>Special Order Notes or Stock Inquiries</label>
              <textarea
                id="ta-notes"
                rows={3}
                placeholder="Tell us if you require specific brand SKUs, recurring pallet drops, or express initial delivery..."
                className={inputCard}
              />
            </div>
          </div>

          <div className="space-y-space-sm pt-space-xs">
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-space-sm rounded-xl bg-secondary-container px-space-lg py-3 text-headline-sm text-on-secondary shadow-md transition-all hover:bg-trade-orange-hover"
            >
              <span>Submit Trade Application</span>
              <Icon name="arrow_forward" className="text-[20px]" />
            </button>
            <p className="text-center text-body-sm text-on-surface-variant">
              By submitting, you agree to MB Trade Supplies Ltd standard
              commercial trade terms. No upfront deposit required.
            </p>
          </div>
        </form>
      </div>

      {done && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
          className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-navy-deep/65 p-space-md backdrop-blur-sm"
        >
          <div className="w-full max-w-lg space-y-space-md rounded-2xl bg-surface-card p-space-lg text-center shadow-2xl sm:p-space-xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-stock-green-bg text-stock-green">
              <Icon name="check_circle" className="text-[36px]" />
            </div>
            <h3 id="success-title" className="text-headline-lg-mobile text-on-surface md:text-headline-lg">
              Application Received!
            </h3>
            <p className="text-body-md text-on-surface-variant">
              Thank you for applying for a trade account with MB Trade Supplies
              Ltd. Your application reference is{" "}
              <strong className="text-on-surface">#MBT-2026-T924</strong>.
            </p>
            <div className="space-y-1 rounded-xl bg-surface-subtle p-space-md text-left text-body-sm">
              <p className="text-label-lg text-on-surface">What happens next:</p>
              <p className="text-on-surface-variant">• Commercial credit &amp; business verification check underway.</p>
              <p className="text-on-surface-variant">• Your assigned account manager will email your wholesale login within 24 hours.</p>
              <p className="text-on-surface-variant">• Wholesale price lists and bulk pallet matrices will be attached.</p>
            </div>
            <button
              type="button"
              autoFocus
              onClick={() => setDone(false)}
              className="w-full rounded-xl bg-secondary-container py-2.5 text-headline-sm text-on-secondary transition-all hover:bg-trade-orange-hover"
            >
              Done &amp; Return to Page
            </button>
          </div>
        </div>
      )}
    </>
  );
}
