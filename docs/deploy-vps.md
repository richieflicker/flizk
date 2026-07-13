# Deploy Flizk on a VPS (Next.js)

This site is a Next.js App Router app. It must run as a **Node process** (not static `dist/` / GitHub Pages).

## Prerequisites

- Ubuntu (or similar) VPS with Node.js **20+**
- Domain `flizk.com` A/AAAA records pointing at the VPS
- nginx + certbot
- PM2 (`npm i -g pm2`)

## First-time setup

```bash
git clone <your-repo-url> /var/www/flizk
cd /var/www/flizk
cp .env.example .env.production.local
# edit NEXT_PUBLIC_FORMSPREE_FORM_ID
chmod +x scripts/deploy-vps.sh
./scripts/deploy-vps.sh
pm2 startup   # follow the printed command once
```

`ecosystem.config.cjs` runs `next start` on port **3000**.

## Redeploy after code changes

```bash
cd /var/www/flizk
git pull
./scripts/deploy-vps.sh
```

## GitHub Actions auto-deploy (SSH)

Push to `main` runs `.github/workflows/deploy.yml`, which SSHs into the VPS and runs `./scripts/deploy-vps.sh`.

Create a **dedicated** key pair on your Mac (do not reuse a GitHub Deploy key — that is for VPS→GitHub only):

```bash
ssh-keygen -t ed25519 -f ~/.ssh/flizk_gha -C "github-actions-flizk" -N ""
ssh-copy-id -i ~/.ssh/flizk_gha.pub USER@VPS_IP
ssh -i ~/.ssh/flizk_gha USER@VPS_IP   # must succeed with no password
```

In the repo: **Settings → Secrets and variables → Actions**, set:

| Secret | Value |
|--------|--------|
| `VPS_HOST` | VPS public IP |
| `VPS_USER` | Same `USER` as above |
| `VPS_SSH_KEY` | Full contents of `~/.ssh/flizk_gha` (private key), including `BEGIN`/`END` lines |

```bash
# Copy private key to clipboard (Mac), then paste into VPS_SSH_KEY
pbcopy < ~/.ssh/flizk_gha
```

If auth still fails: confirm `~/.ssh/authorized_keys` on the VPS contains the matching `.pub` line for that user, and `chmod 700 ~/.ssh && chmod 600 ~/.ssh/authorized_keys`.

If deploy fails with `npm: command not found`, Node is installed but not on PATH for non-interactive SSH (common with nvm). The deploy script loads nvm/fnm automatically; also ensure nvm is sourced from `~/.bashrc` / `~/.profile` for that user.

## nginx reverse proxy

Save as `/etc/nginx/sites-available/flizk.com` and enable it. Only `flizk.com` and `www.flizk.com` should proxy to Next.js. Add a **default_server** that rejects every other Host (stops wildcard / junk subdomain duplicate indexing):

```nginx
# Reject unknown Host (stops *.flizk.com duplicate indexing)
server {
    listen 80 default_server;
    listen 443 ssl default_server;
    server_name _;
    ssl_certificate     /etc/letsencrypt/live/flizk.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/flizk.com/privkey.pem;
    return 444;
}

server {
    listen 80;
    server_name flizk.com www.flizk.com;
    return 301 https://flizk.com$request_uri;
}

server {
    listen 443 ssl http2;
    server_name flizk.com www.flizk.com;

    # ssl_certificate lines added by certbot

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

If another site currently owns `default_server`, either move that role here or ensure no other `server_name` catch-all serves Flizk content for unknown hosts. Remove `flizk.com` from any other nginx site (e.g. old static marketing configs).

```bash
sudo ln -sf /etc/nginx/sites-available/flizk.com /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
sudo certbot --nginx -d flizk.com -d www.flizk.com
```

Verify host lockdown (replace `VPS_IP` with your server IP):

```bash
curl -sI -H 'Host: garbage.flizk.com' https://VPS_IP --insecure | head
# expect connection close / empty — not 200 HTML
curl -sI https://flizk.com/ | head
# expect 200
```

## DNS cutover from GitHub Pages / Apache

1. Point `flizk.com` (and `www`) **A/AAAA** to the VPS IP; remove GitHub Pages DNS.
2. Remove old Apache document root / `.htaccess` SPA rewrite for this site.
3. Verify SSR meta is live (see Health checks below).
4. Resubmit `https://flizk.com/sitemap.xml` in Google Search Console.

## Search Console & Core Web Vitals

1. Verify `https://flizk.com` as a URL-prefix (or domain) property in [Google Search Console](https://search.google.com/search-console) (phone is fine).
2. **URL Inspection** on `https://flizk.com/` — Page Fetch must be **Successful**. If the indexed title/description is still generic SPA boilerplate, use **Request Indexing**.
3. Submit sitemap: `https://flizk.com/sitemap.xml`.
4. Baseline CWV on [pagespeed.web.dev](https://pagespeed.web.dev) for `https://flizk.com/`.

Do **not** add LocalBusiness schema for flizk.com (vendor SaaS site). Organization / SoftwareApplication / FAQ on product pages is correct.

## Health checks

```bash
pm2 status
pm2 logs flizk --lines 50
curl -sI http://127.0.0.1:3000/
curl -sI https://flizk.com/
```

SSR smoke (title, canonical, JSON-LD must appear in the raw HTML, not only after JS):

```bash
curl -s https://flizk.com/ | grep -E '<title>|application/ld\+json|canonical'
curl -s https://flizk.com/products/dentxone | grep -E '<title>|application/ld\+json|canonical'
curl -s https://flizk.com/dental-clinic-software-chennai | grep -E '<title>|og:image|canonical'
```
