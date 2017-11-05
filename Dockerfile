FROM node:8.2

WORKDIR /usr/src/app
COPY package.json .
COPY package.json package-lock.json .

RUN npm install
COPY . .
EXPOSE 9000
CMD [ "npm", "start" ]