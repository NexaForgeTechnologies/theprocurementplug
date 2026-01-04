FROM node:20-alpine AS build
WORKDIR /app

# Install deps first (better layer caching)
COPY package.json package-lock.json ./
RUN npm ci

# Copy source
COPY . .

# ✅ Fix: lightningcss binary mismatch on Alpine
RUN if [ -f node_modules/lightningcss-linux-x64-musl/lightningcss.linux-x64-musl.node ]; then \
      cp node_modules/lightningcss-linux-x64-musl/lightningcss.linux-x64-musl.node \
         node_modules/lightningcss/lightningcss.linux-x64-gnu.node ; \
    fi

# Build Next.js
RUN npm run build


FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Optional but recommended for Alpine runtime stability
RUN apk add --no-cache libc6-compat

COPY --from=build /app/public ./public
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/package.json ./package.json

EXPOSE 3000
ENV PORT=3000

CMD ["node", "server.js"]
