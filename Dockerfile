FROM node:10.15.3-stretch-slim

WORKDIR /usr/src/app

COPY ./package.json .

RUN npm install --loglevel=warn

COPY ./src/ .

EXPOSE 80

CMD ["npm", "start"]
