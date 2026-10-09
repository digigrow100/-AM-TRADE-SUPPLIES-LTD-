"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import { images } from "@/lib/images";
import { navLinks, site } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href.includes("#")) return false;
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-surface-card shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="bg-navy-deep py-space-xs text-body-sm text-on-primary">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-space-md gap-y-space-xs px-margin-mobile sm:px-margin">
          <span className="truncate">
            <span className="hidden lg:inline">{site.address} • </span>
            <a href={site.phoneHref} className="hover:underline">
              Tel: {site.phone}
            </a>
          </span>
          <span className="hidden sm:inline">
            {site.hours}
            <span className="hidden lg:inline">
              {" "}
              • Free UK Mainland Delivery on Orders Over £500
            </span>
          </span>
        </div>
      </div>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-space-md px-margin-mobile sm:px-margin md:h-20">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-space-sm"
          aria-label={`${site.name} home`}
        >
          <Image
            src={images.logo}
            alt={`${site.name} Logo`}
            priority
            className="h-10 w-auto object-contain md:h-12"
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-space-sm xl:flex">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "whitespace-nowrap rounded-lg bg-surface-container px-space-sm py-space-xs text-headline-sm text-on-surface transition-colors"
                    : "whitespace-nowrap px-space-sm py-space-xs text-label-lg text-on-surface-variant transition-colors hover:text-on-surface"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-space-sm">
          <div className="hidden items-center rounded-lg bg-surface-subtle px-space-sm py-space-xs 2xl:flex">
            <Icon name="search" className="mr-space-xs text-[20px] text-outline" />
            <input
              type="text"
              aria-label="Search products"
              placeholder="Search products..."
              className="w-44 bg-transparent text-body-sm text-on-surface outline-none placeholder:text-outline"
            />
          </div>
          <Link
            href="/contact"
            className="hidden whitespace-nowrap rounded-lg bg-secondary-container px-space-md py-space-xs text-label-lg text-on-secondary shadow-[0_1px_4px_rgba(0,0,0,0.08)] transition-colors hover:bg-trade-orange-hover sm:inline-block"
          >
            Request Trade Account
          </Link>
          <Link
            href="/contact"
            className="hidden text-label-lg text-on-surface-variant transition-colors hover:text-on-surface 2xl:inline-block"
          >
            Wholesale Portal / Login
          </Link>
          <div className="hidden h-8 w-8 items-center justify-center rounded-full bg-primary md:flex">
            <Icon name="person" className="text-[18px] text-on-primary" />
          </div>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-on-surface hover:bg-surface-container xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} className="text-[26px]" />
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="max-h-[calc(100dvh-7rem)] overflow-y-auto border-t border-border-crisp bg-surface-card xl:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-space-xs px-margin-mobile py-space-md sm:px-margin">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-lg px-space-md py-3 text-label-lg ${
                    active
                      ? "bg-surface-container text-on-surface"
                      : "text-on-surface-variant hover:bg-surface-subtle hover:text-on-surface"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-space-sm rounded-lg bg-secondary-container px-space-md py-3 text-center text-label-lg text-on-secondary hover:bg-trade-orange-hover"
            >
              Request Trade Account
            </Link>
            <a
              href={site.phoneHref}
              className="flex items-center justify-center gap-space-xs rounded-lg bg-surface-subtle px-space-md py-3 text-label-lg text-on-surface"
            >
              <Icon name="call" className="text-[18px] text-secondary-container" />
              {site.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
