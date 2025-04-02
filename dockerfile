FROM node:18-alpine

WORKDIR /app

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

USER appuser

EXPOSE 3000

CMD ["node", "dist/app.js"]