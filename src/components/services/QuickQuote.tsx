"use client";

import Link from "next/link";
import { useState } from "react";
import Icon from "@/components/Icon";

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
            Not Sure What You Need?
          </span>
          <h3 className="text-headline-lg-mobile text-on-primary md:text-headline-lg">
            Tell Us About Your Business
          </h3>
          <p className="text-body-md text-surface-container-highest">
            Every business buys differently. Describe what you sell or cook and
            we will help you choose from our range of drinks, oils and flour.
          </p>
        </div>
        <ul className="space-y-space-sm text-body-sm text-surface-container-highest">
          {[
            "Which products you need",
            "Roughly how much and how often",
            "Your delivery postcode",
          ].map((t) => (
            <li key={t} className="flex items-start gap-space-xs">
              <Icon name="check_circle" className="mt-0.5 text-[18px] text-secondary-container" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-space-sm sm:flex-row">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-space-xs rounded-lg bg-surface-card px-space-md py-2.5 text-label-lg text-on-surface shadow transition-colors hover:bg-surface-subtle"
          >
            Full Enquiry Form
          </Link>
          <Link
            href="/about"
            className="flex items-center justify-center gap-space-xs rounded-lg bg-surface-card/10 px-space-md py-2.5 text-label-lg text-on-primary transition-colors hover:bg-surface-card/20"
          >
            About Us
          </Link>
        </div>
      </div>

      <div className="space-y-space-md rounded-xl bg-surface-card p-space-md shadow-sm sm:p-space-xl lg:col-span-7">
        <div>
          <h3 className="text-headline-md text-on-surface">Request a Trade Quote</h3>
          <p className="text-body-md text-on-surface-variant">
            Send us your product list and we will prepare a quote based on your
            order.
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
              <label htmlFor="q-company" className={label}>Business Name *</label>
              <input id="q-company" required type="text" placeholder="Your business name" className={field} />
            </div>
            <div className="space-y-space-xs">
              <label htmlFor="q-name" className={label}>Contact Name *</label>
              <input id="q-name" required type="text" placeholder="Your name" className={field} />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-space-md md:grid-cols-2">
            <div className="space-y-space-xs">
              <label htmlFor="q-email" className={label}>Email Address *</label>
              <input id="q-email" required type="email" placeholder="name@business.co.uk" className={field} />
            </div>
            <div className="space-y-space-xs">
              <label htmlFor="q-tel" className={label}>Phone Number</label>
              <input id="q-tel" type="tel" placeholder="07..." className={field} />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-space-md md:grid-cols-2">
            <div className="space-y-space-xs">
              <label htmlFor="q-interest" className={label}>Main Product Interest *</label>
              <select id="q-interest" className={field}>
                <option>Drinks, oils and flour</option>
                <option>Soft drinks, bottled water and juices</option>
                <option>Rapeseed oil and vegetable oil</option>
                <option>Plain, pizza and self-raising flour</option>
              </select>
            </div>
            <div className="space-y-space-xs">
              <label htmlFor="q-freq" className={label}>How Often Do You Order?</label>
              <select id="q-freq" className={field}>
                <option>Weekly</option>
                <option>Fortnightly</option>
                <option>Monthly</option>
                <option>One-off order</option>
              </select>
            </div>
          </div>
          <div className="space-y-space-xs">
            <label htmlFor="q-notes" className={label}>Delivery Postcode and Notes</label>
            <textarea
              id="q-notes"
              rows={3}
              placeholder="Your delivery postcode, the products you need and roughly how much."
              className={field}
            />
          </div>
          <div className="flex flex-col items-stretch justify-between gap-space-md pt-space-xs sm:flex-row sm:items-center">
            <div className="flex items-center gap-space-xs text-body-sm text-on-surface-variant">
              <Icon name="lock" className="text-[18px] text-stock-green" />
              <span>We only use your details to respond to your enquiry.</span>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-secondary-container px-space-xl py-3 text-label-lg text-on-secondary shadow transition-colors hover:bg-trade-orange-hover sm:w-auto"
            >
              Send Trade Enquiry
            </button>
          </div>
          {sent && (
            <p role="status" className="rounded-lg bg-stock-green-bg p-space-sm text-center text-body-sm text-stock-green">
              Thank you for your enquiry. We will be in touch.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
