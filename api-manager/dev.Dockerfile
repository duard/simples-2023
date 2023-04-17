FROM node:18.12.1-alpine3.16
RUN apk add --no-cache alpine-conf && \
  setup-timezone -z America/Sao_Paulo
WORKDIR /home/node
EXPOSE 4001
EXPOSE 54321
EXPOSE 5432

ENV TZ=America/Sao_Paulo

CMD [ "npm", "run", "start:dev" ]
