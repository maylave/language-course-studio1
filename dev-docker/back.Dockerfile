FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

# Переменные окружения приходят из docker-compose, поэтому без --env-file
CMD ["npx", "tsx", "watch", "src/index.ts"]
