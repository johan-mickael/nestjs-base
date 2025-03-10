FROM node:23-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Development stage
FROM base AS development
EXPOSE 3000 9229
CMD ["npm", "run", "start:debug"]

# Production stage
FROM base AS production
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start:prod"]