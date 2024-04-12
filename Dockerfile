FROM node:20.11.1-alpine3.18

WORKDIR /app

COPY package.json /app/
COPY package-lock.json /app/

RUN npm cache clean --force && npm install && npm install --save-dev prisma && npx prisma generate

COPY . .

EXPOSE 3003

CMD ["npm", "run", "start:dev"]