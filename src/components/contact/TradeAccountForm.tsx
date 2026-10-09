"use client";

import Link from "next/link";
import { useState } from "react";
import Icon from "@/components/Icon";
import { allProductLines } from "@/lib/products";

const input =
  "w-full rounded-lg bg-surface-subtle px-space-md py-2.5 text-body-sm text-on-surface shadow-sm outline-none transition-all placeholder:text-outline focus:bg-surface-card focus:ring-2 focus:ring-secondary-container";
const inputCard =
  "w-full rounded-lg bg-surface-card px-space-md py-2.5 text-body-sm text-on-surface shadow-sm outline-none transition-all placeholder:text-outline focus:ring-2 focus:ring-secondary-container";
const label = "mb-1 block text-label-lg text-on-surface";
const option =
  "flex cursor-pointer items-center gap-2 rounded-lg bg-surface-subtle p-2.5 text-body-sm text-on-surface transition-colors hover:bg-surface-container";

const sectors = [
  ["retailer", "Retailer / Shop"],
  ["restaurant", "Restaurant / Takeaway"],
  ["cafe", "Café"],
  ["bakery", "Bakery / Pizzeria"],
  ["caterer", "Caterer"],
  ["other", "Other Business"],
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
          <h2 className="text-headline-md text-on-surface">Send Us a Trade Enquiry</h2>
          <p className="mt-1 text-body-sm text-on-surface-variant">
            Complete the form with your business details and the products you
            need. Want to browse first? See our{" "}
            <Link href="/products-services" className="font-semibold text-secondary underline-offset-2 hover:underline">
              wholesale products
            </Link>
            .
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
            <SectionTitle icon="storefront">1. Your Business</SectionTitle>
            <div className="grid grid-cols-1 gap-space-md md:grid-cols-2">
              <div>
                <label htmlFor="ta-company" className={label}>Business Name *</label>
                <input id="ta-company" required type="text" placeholder="Your registered or trading name" className={input} />
              </div>
              <div>
                <label htmlFor="ta-reg" className={label}>Company or VAT Number (optional)</label>
                <input id="ta-reg" type="text" placeholder="If you have one to hand" className={input} />
              </div>
            </div>
            <fieldset>
              <legend className={label}>Type of Business *</legend>
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
            <SectionTitle icon="badge">2. Your Contact Details</SectionTitle>
            <div className="grid grid-cols-1 gap-space-md md:grid-cols-2">
              <div>
                <label htmlFor="ta-name" className={label}>Full Name *</label>
                <input id="ta-name" required type="text" placeholder="Your name" className={inputCard} />
              </div>
              <div>
                <label htmlFor="ta-job" className={label}>Job Title</label>
                <input id="ta-job" type="text" placeholder="e.g. Owner, Manager, Buyer" className={inputCard} />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-space-md md:grid-cols-2">
              <div>
                <label htmlFor="ta-email" className={label}>Email Address *</label>
                <input id="ta-email" required type="email" placeholder="name@business.co.uk" className={inputCard} />
              </div>
              <div>
                <label htmlFor="ta-tel" className={label}>Phone Number *</label>
                <input id="ta-tel" required type="tel" placeholder="07..." className={inputCard} />
              </div>
            </div>
          </div>

          <div className="space-y-space-md">
            <SectionTitle icon="local_shipping">3. Delivery Location</SectionTitle>
            <div className="grid grid-cols-1 gap-space-md md:grid-cols-3">
              <div className="md:col-span-2">
                <label htmlFor="ta-street" className={label}>Delivery Address *</label>
                <input id="ta-street" required type="text" placeholder="Street address and town" className={input} />
              </div>
              <div>
                <label htmlFor="ta-post" className={label}>Postcode *</label>
                <input id="ta-post" required type="text" placeholder="e.g. ST1 1AA" className={input} />
              </div>
            </div>
            <div>
              <label htmlFor="ta-access" className={label}>Delivery or Access Notes</label>
              <textarea
                id="ta-access"
                rows={2}
                placeholder="Anything we should know about delivering to your premises."
                className={input}
              />
            </div>
          </div>

          <div className="space-y-space-md rounded-xl bg-surface-subtle/50 p-space-md">
            <SectionTitle icon="inventory_2">4. Products You Need</SectionTitle>
            <fieldset>
              <legend className={`${label} mb-1.5`}>Products of Interest</legend>
              <div className="grid grid-cols-1 gap-space-xs text-body-sm min-[400px]:grid-cols-2 sm:grid-cols-3">
                {allProductLines.map((line) => (
                  <label key={line} className="flex cursor-pointer items-center gap-2 rounded-lg bg-surface-card p-2.5 hover:bg-surface-container">
                    <input type="checkbox" name="products" value={line} className="accent-secondary-container" />
                    <span>{line}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <div>
              <label htmlFor="ta-freq" className={label}>How Often Do You Order?</label>
              <select id="ta-freq" className={inputCard}>
                <option>Weekly</option>
                <option>Fortnightly</option>
                <option>Monthly</option>
                <option>One-off order</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <div>
              <label htmlFor="ta-notes" className={label}>Quantities and Other Notes</label>
              <textarea
                id="ta-notes"
                rows={3}
                placeholder="Tell us roughly how much you need, or ask about anything else."
                className={inputCard}
              />
            </div>
          </div>

          <div className="space-y-space-sm pt-space-xs">
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-space-sm rounded-xl bg-secondary-container px-space-lg py-3 text-headline-sm text-on-secondary shadow-md transition-all hover:bg-trade-orange-hover"
            >
              <span>Send Trade Enquiry</span>
              <Icon name="arrow_forward" className="text-[20px]" />
            </button>
            <p className="text-center text-body-sm text-on-surface-variant">
              We only use your details to respond to your enquiry.
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
              Thank You for Your Enquiry
            </h3>
            <p className="text-body-md text-on-surface-variant">
              Thank you for contacting AM Trade Supplies Ltd. We will review your
              details and be in touch.
            </p>
            <button
              type="button"
              autoFocus
              onClick={() => setDone(false)}
              className="w-full rounded-xl bg-secondary-container py-2.5 text-headline-sm text-on-secondary transition-all hover:bg-trade-orange-hover"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
