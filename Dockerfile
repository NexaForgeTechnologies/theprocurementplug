FROM node:20-slim AS build
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm config set optional true \
 && npm config set ignore-scripts false \
 && npm ci --include=optional --no-audit --no-fund

COPY . .
RUN npm run build

COPY --from=build /app/public ./public
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/package.json ./package.json

EXPOSE 3000
ENV PORT=3000
CMD ["node", "server.js"]
