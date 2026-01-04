FROM node:20-alpine AS build
WORKDIR /app

COPY package.json ./

# ✅ Force clean install (your requirement)
RUN rm -rf node_modules package-lock.json && npm i

COPY . .

# ✅ Fix lightningcss musl binary in correct location
RUN set -eux; \
  BIN="$(find node_modules -name 'lightningcss.linux-x64-musl.node' | head -n 1 || true)"; \
  if [ -n "$BIN" ]; then \
    cp "$BIN" node_modules/lightningcss/lightningcss.linux-x64-musl.node; \
  else \
    echo "❌ lightningcss musl binary not found in node_modules"; \
    exit 1; \
  fi

RUN npm run build


FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN apk add --no-cache libc6-compat

COPY --from=build /app/public ./public
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/package.json ./package.json

EXPOSE 3000
ENV PORT=3000

CMD ["node", "server.js"]
