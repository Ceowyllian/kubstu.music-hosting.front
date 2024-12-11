FROM node:20-alpine

ENV NODE_OPTIONS --openssl-legacy-provider

WORKDIR /usr/src/app

COPY package*.json .
RUN npm install

COPY . .
