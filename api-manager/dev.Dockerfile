FROM node:18-alpine As dev
RUN apk add --no-cache alpine-conf && \
  setup-timezone -z America/Sao_Paulo
ENV TZ=America/Sao_Paulo
WORKDIR /usr/src/app
COPY package.json package-lock.json* ./
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 3000
EXPOSE 4001
EXPOSE 54321
EXPOSE 5432
# CMD [ "npm", "run", "start:dev" ]

