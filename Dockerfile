# Builder Stage
FROM node:21.7.1-alpine3.18 AS builder
WORKDIR /app

# Install or Update Packages
COPY package*.json ./
RUN npm install --production
RUN npm run build


EXPOSE 3000
CMD ["npm", "start"]