FROM node:18 AS build
WORKDIR /app

# install dependencies
COPY package*.json ./
RUN npm ci

# copy source and build
COPY . .
RUN npm run build

FROM nginx:stable-alpine

# copy built app to nginx html folder
COPY --from=build /app/dist/UI/browser /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
