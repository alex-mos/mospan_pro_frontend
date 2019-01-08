# build stage
FROM node:10-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine as production-stage
#WORKDIR /app
# Copy in the static build assets
COPY dist/ /usr/local/var/www/mospan.pro
# Copy in the nginx config file
COPY nginx.conf /etc/nginx/nginx.conf
# All files are in, start the web server
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
