#!/usr/bin/env bash
# Run on the VPS from the app directory after git pull.
set -euo pipefail

cd "$(dirname "$0")/.."

# Non-interactive SSH (GitHub Actions) skips interactive shell rc files.
# Load Node from common install locations so npm/pm2 are on PATH.
export PATH="/usr/local/bin:/usr/bin:$HOME/.local/bin:$PATH"
if [ -s "$HOME/.nvm/nvm.sh" ]; then
  # shellcheck disable=SC1091
  . "$HOME/.nvm/nvm.sh"
fi
if command -v fnm >/dev/null 2>&1; then
  eval "$(fnm env)"
fi
if ! command -v npm >/dev/null 2>&1; then
  for d in "$HOME"/.nvm/versions/node/*/bin; do
    [ -x "$d/npm" ] && PATH="$d:$PATH" && break
  done
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "ERROR: npm not found on PATH for this non-interactive session." >&2
  echo "Install Node 20+ or ensure nvm/fnm is loaded. PATH=$PATH" >&2
  exit 127
fi

echo "==> Installing dependencies (node $(node -v), npm $(npm -v))"
npm ci

echo "==> Building Next.js"
npm run build

echo "==> Restarting PM2"
if ! command -v pm2 >/dev/null 2>&1; then
  echo "ERROR: pm2 not found. Run: npm i -g pm2" >&2
  exit 127
fi
if pm2 describe flizk >/dev/null 2>&1; then
  pm2 restart ecosystem.config.cjs --env production
else
  pm2 start ecosystem.config.cjs --env production
fi

pm2 save
echo "==> Done. Check: pm2 status && curl -sI http://127.0.0.1:3000/"
