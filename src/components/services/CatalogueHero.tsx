"use client";

import { useState } from "react";
import Icon from "@/components/Icon";

const pills = ["All Supplies", "Wholesale Drinks", "Cooking Oils", "Flour & Bakery", "New In"];

export default function CatalogueHero() {
  const [active, setActive] = useState(pills[0]);

  return (
    <section className="relative mb-space-xl w-full overflow-hidden rounded-xl bg-navy-deep text-on-primary shadow-lg">
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#fd651e 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative z-10 mx-auto max-w-5xl space-y-space-md px-space-md py-space-xl text-center sm:px-margin">
        <div className="inline-flex items-center gap-space-xs rounded-full bg-surface-card/10 px-space-md py-space-xs backdrop-blur-md">
          <span className="h-2 w-2 animate-pulse rounded-full bg-secondary-container" />
          <span className="text-label-md uppercase tracking-wider text-secondary-fixed">
            B2B Trade Supply Specialist
          </span>
        </div>
        <h1 className="text-headline-lg-mobile md:text-headline-lg tracking-tight text-on-primary">
          Wholesale Trade Products &amp; Services
        </h1>
        <p className="mx-auto max-w-2xl text-body-lg text-surface-container-highest">
          Direct pallet supply of wholesale drinks, commercial cooking oils, and
          bakery flours across the UK mainland with guaranteed trade continuity.
        </p>

        <div className="mx-auto max-w-3xl pt-space-md">
          <div className="flex flex-col items-stretch gap-space-xs rounded-xl bg-surface-card p-space-xs shadow-xl md:flex-row">
            <div className="flex flex-1 items-center rounded-lg bg-surface-subtle px-space-md py-2.5">
              <Icon name="search" className="mr-space-xs text-[22px] text-outline" />
              <input
                id="catalogue-search"
                type="text"
                aria-label="Search catalogue"
                placeholder="Search by SKU, product name, or pack size..."
                className="w-full bg-transparent text-body-sm text-on-surface outline-none placeholder:text-outline"
              />
            </div>
            <button
              type="button"
              className="flex items-center justify-center gap-space-xs rounded-lg bg-secondary-container px-space-lg py-3 text-label-lg text-on-secondary shadow-sm transition-colors hover:bg-trade-orange-hover md:py-space-xs"
            >
              <span>Filter Catalogue</span>
              <Icon name="tune" className="text-[18px]" />
            </button>
          </div>

          <div className="mt-space-md flex flex-wrap items-center justify-center gap-space-xs">
            {pills.map((p) => (
              <button
                key={p}
                type="button"
                aria-pressed={active === p}
                onClick={() => setActive(p)}
                className={`rounded-full px-space-md py-1.5 text-label-md transition-all ${
                  active === p
                    ? "bg-secondary-container text-on-secondary shadow-sm"
                    : "bg-surface-card/15 text-on-primary hover:bg-surface-card/25"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              type="button"
              className="flex items-center gap-1 rounded-full bg-stock-green-bg px-space-md py-1.5 text-label-md font-semibold text-stock-green shadow-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-stock-green" /> High Stock Only
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
