FROM node:20-alpine3.20 as node

WORKDIR /app

COPY ./frontend/ /app/

RUN npm install

RUN npm run build

FROM nginx:alpine

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=node /app/dist/frontend/browser /usr/share/nginx/html
