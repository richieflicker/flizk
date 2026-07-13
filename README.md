# Flizk Website

Marketing website for [Flizk](https://flizk.com). Flagship product: **DentXOne** — dental clinic management software for Chennai & Tamil Nadu.

## Tech stack

- Next.js 15 (App Router) + React 18 + TypeScript
- Tailwind CSS 4
- VPS deploy: Node (`next start`) behind nginx + PM2

## Local development

```bash
npm install
npm run dev
```

## Environment variables

Contact form uses [Formspree](https://formspree.io). Set in `.env` / `.env.local` / `.env.production`:

```bash
NEXT_PUBLIC_FORMSPREE_FORM_ID=your_form_id
```

## Build & run (production)

```bash
npm run build
npm start
```

Listens on port 3000 by default (`next start -p 3000`).

## VPS deploy

See [docs/deploy-vps.md](docs/deploy-vps.md). Quick path on the server:

```bash
./scripts/deploy-vps.sh
```


## Project structure

```
src/
├── app/                 # Next.js App Router (routes + metadata)
├── components/          # UI, sections, page views
├── lib/                 # SEO, CTA helpers, metadata builder
└── styles/              # Tailwind + theme
public/                  # robots.txt, sitemap.xml, favicon
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home |
| `/products/dentxone` | DentXOne product |
| `/pricing` | Plans (contact for quote) |
| `/dental-clinic-software-chennai` | Chennai SEO landing |
| `/whatsapp-appointment-reminders` | WhatsApp reminders landing |
| `/about` | About Flizk |
| `/contact` | Contact / demo form |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
