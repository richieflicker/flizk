# Flizk Website

Marketing website for [Flizk](https://flizk.com), a healthcare technology company. The flagship product is **Dentxone** — all-in-one dental clinic management software.

## Tech stack

- React 18 + TypeScript
- Vite 6
- Tailwind CSS 4
- React Router 7
- GitHub Pages (`flizk.com`)

## Local development

```bash
npm install
npm run dev
```

## Environment variables

The contact form uses [Formspree](https://formspree.io). The form ID is set in `.env` / `.env.production`:

```bash
VITE_FORMSPREE_FORM_ID=mzdlkdnv
```

To override locally, copy `.env.example` to `.env.local`.

## Build & deploy

```bash
npm run build
npm run deploy
```

The `predeploy` script copies `index.html` to `404.html` so client-side routes work on GitHub Pages.

## Project structure

```
src/
├── app/
│   ├── App.tsx              # Router and layout
│   ├── components/          # Pages, sections, UI
│   └── lib/                 # CTA paths, SEO constants
├── styles/                  # Tailwind and theme
└── main.tsx
public/                      # robots.txt, sitemap.xml, favicon
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home |
| `/products/dentxone` | Product page |
| `/pricing` | Pricing |
| `/about` | About Flizk |
| `/contact` | Contact / demo form |
| `/privacy` | Privacy policy (draft) |
| `/terms` | Terms of service (draft) |
