FROM node:20-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# ✅ Fix lightningcss binary for Alpine
RUN if [ -f node_modules/lightningcss-linux-x64-musl/lightningcss.linux-x64-musl.node ]; then \
      cp node_modules/lightningcss-linux-x64-musl/lightningcss.linux-x64-musl.node \
         node_modules/lightningcss/lightningcss.linux-x64-musl.node ; \
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
