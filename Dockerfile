FROM node:7.6-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install -g nodemon

RUN npm install

EXPOSE 9999

CMD [ "npm", "run", "start" ]