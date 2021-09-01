
FROM node:10

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3500

CMD ["npm","start"]