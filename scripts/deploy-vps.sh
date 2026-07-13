#!/usr/bin/env bash
# Run on the VPS from the app directory after git pull.
set -euo pipefail

cd "$(dirname "$0")/.."

echo "==> Installing dependencies"
npm ci

echo "==> Building Next.js"
npm run build

echo "==> Restarting PM2"
if pm2 describe flizk >/dev/null 2>&1; then
  pm2 restart ecosystem.config.cjs --env production
else
  pm2 start ecosystem.config.cjs --env production
fi

pm2 save
echo "==> Done. Check: pm2 status && curl -sI http://127.0.0.1:3000/"
