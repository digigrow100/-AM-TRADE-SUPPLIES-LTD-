# CLAUDE.md

Next.js (App Router, TypeScript, Tailwind CSS v4) site. Read the relevant guide in `node_modules/next/dist/docs/` before writing Next.js code.

## Where to make changes

| Change                     | File                                                               |
| -------------------------- | ------------------------------------------------------------------ |
| Home page                  | `src/app/page.tsx` (sections in `src/components/home/`)            |
| About page                 | `src/app/about/page.tsx` (`src/components/about/`)                 |
| Products & Services page   | `src/app/products-services/page.tsx` (`src/components/services/`) |
| Contact / trade account    | `src/app/contact/page.tsx` (`src/components/contact/`)             |
| Other pages                | `src/app/<route>/page.tsx`                                         |
| Header (global)            | `src/components/Header.tsx`                                        |
| Footer (global)            | `src/components/Footer.tsx`                                        |
| Layout / metadata / fonts  | `src/app/layout.tsx`                                               |
| Global CSS / design tokens | `src/app/globals.css`                                              |
| Nav links, phone, address  | `src/lib/site.ts`                                                  |
| Site config                | `next.config.ts`                                                   |
| Optimized images           | `src/assets/images/` (registered in `src/lib/images.ts`)       |
| Icon font subset           | `src/assets/fonts/material-symbols.woff2`                          |
| Static / public files      | `public/`                                                          |

Header and Footer are rendered once in `src/app/layout.tsx` — never add them to individual pages.

## Images

- ALL content images go in `src/assets/images/` — never `public/`.
- Import them and render with Next.js `<Image />` for automatic optimization.
- `.webp` preferred.
- Always provide `alt`, `width` and `height` (or `fill` + `sizes` inside a sized, relative container).
- All content photos live in `src/assets/images/` and are registered in `src/lib/images.ts`. Only the logo is still a remote placeholder.

## Icons

Icons use a self-hosted Material Symbols subset. A new icon name only renders after it is added to `src/assets/fonts/material-symbols.woff2` (regenerate it from Google Fonts with the `icon_names` parameter).

## Working rules

- Only edit the specific file/component identified for a request.
- Never crawl or "clean up" unrelated files.
- Never add dependencies unless asked.
- If a request is ambiguous about which page/component it targets, ask.

## Commands

```
npm install
npm run dev
npm run build
npm run preview
```
