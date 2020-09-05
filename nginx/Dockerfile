#FROM node:10-alpine as frontend
FROM node:12.2.0-alpine as frontend
WORKDIR /app
COPY frontend .
ENV VUE_APP_BACKEND_HOST http://localhost:1337/api
#RUN apt-get update && apt-get install -y curl
#RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
#RUN apt-get update && apt-get install -y nodejs
RUN npm install
#RUN npm install --production 
RUN npm run build
#RUN npm run build --production

FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf
RUN mkdir /app
COPY --from=frontend /app/dist /app
COPY nginx/nginx.conf /etc/nginx/conf.d
