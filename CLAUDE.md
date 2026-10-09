# CLAUDE.md

Next.js (App Router, TypeScript) site. Read the relevant guide in `node_modules/next/dist/docs/` before writing Next.js code.

## Where to make changes

| Change                    | File                         |
| ------------------------- | ---------------------------- |
| Home page                 | `src/app/page.tsx`           |
| Other pages               | `src/app/<route>/page.tsx`   |
| Header                    | `src/components/Header.tsx`  |
| Footer                    | `src/components/Footer.tsx`  |
| Layout / metadata         | `src/app/layout.tsx`         |
| Global CSS                | `src/app/globals.css`        |
| Site config               | `next.config.ts`             |
| Optimized images          | `src/assets/images/`         |
| Static / public files     | `public/`                    |

## Images

- ALL content images go in `src/assets/images/` — never `public/`.
- Import them and render with Next.js `<Image />` for automatic optimization.
- `.webp` preferred.
- Always provide `alt`, `width` and `height`.

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
