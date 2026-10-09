# AM Trade Supplies Ltd

Next.js (App Router, TypeScript) website.

## Folder structure

```
/
├── public/                 Static files served as-is (favicon.svg)
├── src/
│   ├── assets/images/      Optimized content images (imported, rendered with <Image />)
│   ├── components/         Header.tsx, Footer.tsx
│   └── app/                layout.tsx, page.tsx, globals.css
├── next.config.ts          Next.js + site config
├── package.json
├── tsconfig.json
├── .gitignore
├── README.md
└── CLAUDE.md               Editing rules for Claude
```

## Commands

| Command           | Purpose                              |
| ----------------- | ------------------------------------ |
| `npm install`     | Install dependencies                 |
| `npm run dev`     | Start the dev server                 |
| `npm run build`   | Production build                     |
| `npm run preview` | Build, then serve the production app |
| `npm start`       | Serve an existing production build   |
