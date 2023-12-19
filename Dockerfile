FROM node:16

WORKDIR /icc-order/icc-order-front
COPY package*.json yarn.lock ./
RUN yarn install
COPY . ./

RUN yarn add concurrently

EXPOSE 3000 3065