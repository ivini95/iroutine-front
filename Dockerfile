FROM node:16-alpine

WORKDIR /home/node/app

COPY package.json ./

RUN npm install

COPY . .

COPY .next ./.next

CMD [ "npm", "run", "dev" ]