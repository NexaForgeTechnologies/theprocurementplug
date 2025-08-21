FROM node:20-alpine AS build

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . ./
RUN npm run build

RUN npm install --global serve

EXPOSE 4000
CMD ["serve", "-s", "build", "-l", "4000"]
