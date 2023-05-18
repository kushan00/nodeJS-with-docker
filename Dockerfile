FROM node:16

#create app directory
WORKDIR /docker

#install app dependecies
COPY package*.json ./

#copy env file
COPY .env ./

#copy app source code
COPY . .

EXPOSE 5000

CMD ["node", "server.js"]
