# Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy rest of the code
COPY . ./

# Build Next.js
RUN npm run build




EXPOSE 4000

# Start Next.js (important: bind to 0.0.0.0)
CMD ["npm", "run", "start", "--", "-p", "4000", "-H", "0.0.0.0"]
