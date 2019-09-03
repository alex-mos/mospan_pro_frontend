# Frontend Build
FROM node:10-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production
FROM nginx:stable-alpine as production-stage
# Copy in the static build assets
COPY --from=build-stage /app/dist /var/www/mospan.pro
# Copy in the nginx config files
COPY nginx-frontend.conf /etc/nginx/nginx-frontend.conf
COPY nginx-balance.conf /etc/nginx/nginx.conf
# All files are in, start the web server
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
