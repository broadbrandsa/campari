# Project Structure

```
campari-africa-proposal/
├── src/
│   ├── app/                  # Next.js App Router pages and layout
│   ├── components/
│   │   ├── sections/         # Page section components
│   │   │                     #   Hero, Overview, PlatformRules,
│   │   │                     #   MarketDetail, KenyaMetaFix,
│   │   │                     #   InfluencerStrategy, Roadmap,
│   │   │                     #   MarketReadiness
│   │   └── ui/               # shadcn primitives
│   │                         #   button, card, badge, tabs,
│   │                         #   accordion, etc.
│   ├── content/              # Content data files (future use)
│   └── lib/                  # Utility functions
├── docs/                     # Project documentation
├── public/
│   └── images/               # Static assets (Campari logo SVG)
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
└── postcss.config.mjs
```

## Architecture Notes

- Each section is a **self-contained React component** that imports from shadcn UI primitives.
- Content is **embedded directly in components** — there is no external CMS or content API.
- The `src/content/` directory is reserved for future extraction of content into standalone data files.
