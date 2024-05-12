# Builder Stage
FROM node:21.7.1-alpine3.18 AS builder
WORKDIR /app

# Install or Update Packages
COPY package*.json ./
RUN npm install
RUN npm ci --omit=dev 

# Copy the rest of the project
COPY . .
RUN npm run build 

# Production Stage
FROM node:21.7.1-alpine3.18 AS production
WORKDIR /app
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"] 