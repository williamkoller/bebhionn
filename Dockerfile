FROM node:20.11.1-alpine3.18

WORKDIR /app

COPY package.json /app/
COPY yarn.lock /app/

RUN yarn cache clean && yarn install --frozen-lockfile && yarn add prisma && yarn prisma generate

COPY . .

EXPOSE 3003

CMD ["yarn", "start:dev"]