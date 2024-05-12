# Builder Stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json ./
RUN npm install 
COPY . .
RUN npm run build   # Build your Next.js app

# Production Stage
FROM node:18-alpine AS production
WORKDIR /app
COPY . .

EXPOSE 3000
CMD ["npm", "run", "start"]  # Start the Next.js production server