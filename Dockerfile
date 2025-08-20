FROM node:18.8.0-alpine as build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build
RUN npm install --global serve
EXPOSE 4000
CMD ["serve", "-s", "build" , "-l" , "4000"] 