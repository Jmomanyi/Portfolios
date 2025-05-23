FROM node:lts-slim

WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps 
RUN npm build
COPY . .
EXPOSE 3000
CMD npm start