# Image to build from
FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Docker layer

COPY . .

EXPOSE 3001

# Start app
CMD [ "npm", "run", "deploy:test" ]