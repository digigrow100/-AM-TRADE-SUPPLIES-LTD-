"use client";

import Link from "next/link";
import { useState } from "react";
import Icon from "@/components/Icon";
import { phoneHref, site } from "@/lib/site";

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
            Trade Enquiries
          </span>
          <h2 className="text-headline-lg-mobile md:text-headline-lg tracking-tight text-on-primary">
            Request a Wholesale Trade Quote
          </h2>
          <p className="mt-space-sm max-w-xl text-body-md text-surface-container-highest">
            Send us details of your business and the products you need, and we
            will use them to prepare your quote.
          </p>
          <p className="mt-space-sm max-w-xl text-body-md text-surface-container-highest">
            Want to see what is available first? Have a look at our{" "}
            <Link href="/products-services" className="font-semibold text-on-primary underline-offset-2 hover:underline">
              drinks, oils and flour
            </Link>{" "}
            or use the{" "}
            <Link href="/contact" className="font-semibold text-on-primary underline-offset-2 hover:underline">
              full enquiry form
            </Link>
            .
          </p>
          {(site.phone || site.email) && (
            <div className="mt-space-lg flex flex-wrap gap-x-space-xl gap-y-space-md">
              {phoneHref && site.phone && (
                <a href={phoneHref} className="text-headline-sm text-secondary-container hover:underline">
                  {site.phone}
                </a>
              )}
              {site.email && (
                <a href={`mailto:${site.email}`} className="break-all text-headline-sm text-on-primary hover:underline">
                  {site.email}
                </a>
              )}
            </div>
          )}
        </div>

        <div className="rounded-xl bg-surface-card p-space-lg text-on-surface shadow-lg lg:col-span-5">
          <h3 className="mb-1 text-headline-sm text-on-surface">Quick Trade Enquiry</h3>
          <p className="mb-space-md text-body-sm text-on-surface-variant">
            Tell us about your business and what you buy.
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
                Business Name
              </label>
              <input id="tc-company" required type="text" placeholder="Your business name" className={inputClass} />
            </div>
            <div className="grid grid-cols-1 gap-space-sm sm:grid-cols-2">
              <div>
                <label htmlFor="tc-type" className="mb-1 block text-label-md text-on-surface">
                  Business Type
                </label>
                <select id="tc-type" className={inputClass}>
                  <option>Retailer</option>
                  <option>Restaurant / Takeaway</option>
                  <option>Café</option>
                  <option>Bakery</option>
                  <option>Caterer</option>
                  <option>Other business</option>
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
                Products You Need
              </legend>
              <div className="flex flex-wrap gap-x-space-md gap-y-space-sm pt-1 text-body-sm">
                {["Drinks", "Cooking oils", "Flour"].map((c) => (
                  <label key={c} className="flex cursor-pointer items-center gap-1.5 py-1">
                    <input type="checkbox" className="h-4 w-4 accent-secondary-container" />
                    <span>{c}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="pt-space-xs">
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-space-xs rounded-lg bg-secondary-container px-space-md py-3 text-label-lg text-on-secondary shadow-md transition-colors hover:bg-trade-orange-hover"
              >
                <span>Send Enquiry</span>
                <Icon name="send" className="text-[18px]" />
              </button>
            </div>
            {sent && (
              <div
                role="status"
                className="mt-space-xs rounded-lg bg-stock-green-bg p-space-sm text-center text-body-sm text-stock-green"
              >
                Thank you for your enquiry. We will be in touch.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
