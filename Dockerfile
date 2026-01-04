FROM node:20 AS build
WORKDIR /app

# Copy lockfile too for deterministic installs
COPY package.json package-lock.json ./

# Clean install with lockfile
RUN npm i

COPY . .
RUN npm run build


FROM node:20 AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=build /app/public ./public
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/package.json ./package.json

EXPOSE 3000
ENV PORT=3000
CMD ["node", "server.js"]
