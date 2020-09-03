FROM node:10-alpine as frontend
WORKDIR /app
COPY frontend .
ENV VUE_APP_BACKEND_HOST http://localhost:1337/api
RUN npm install
RUN npm run build

FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf
RUN mkdir /app
COPY --from=frontend /app/dist /app
COPY nginx/nginx.conf /etc/nginx/conf.d
