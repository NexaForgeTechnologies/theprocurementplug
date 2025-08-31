# Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy rest of the code
COPY . ./

# Build Next.js
RUN npm run build

# Production stage
FROM node:20-alpine AS runner

WORKDIR /app

# Copy only needed files from build stage
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/node_modules ./node_modules

# Next.js listens on port 4000
EXPOSE 4000

# Start Next.js (important: bind to 0.0.0.0)
CMD ["npm", "run", "start", "--", "-p", "4000", "-H", "0.0.0.0"]
