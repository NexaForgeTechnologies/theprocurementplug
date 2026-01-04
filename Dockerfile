FROM node:20-slim AS build
WORKDIR /app

COPY package.json package-lock.json ./

# ✅ Force optional deps ON
ENV NPM_CONFIG_OMIT=""
ENV NPM_CONFIG_OPTIONAL=true

RUN npm ci --include=optional --no-audit --no-fund

COPY . .


RUN npm run build


FROM node:20-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=build /app/public ./public
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/package.json ./package.json

EXPOSE 3000
ENV PORT=3000

CMD ["node", "server.js"]
