# FROM node:18-alpine As development
FROM node:18-alpine As development
RUN mkdir -p /usr/src/api-manager/ && chown node:node /usr/src/api-manager/
WORKDIR /usr/src/api-manager/
COPY --chown=node:node package.json package-lock.json* ./
COPY --chown=node:node package*.json ./
RUN npm ci
COPY --chown=node:node . .
EXPOSE 3000
CMD [ "npm", "run", "start:dev" ]

# # Create app directory
# WORKDIR /usr/src/app
# EXPOSE 4001
# EXPOSE 3001
# ENV TZ=America/Sao_Paulo
# # Copy application dependency manifests to the container image.
# # A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
# # Copying this first prevents re-running npm install on every code change.
# COPY package*.json ./
# COPY . .
# # Install app dependencies using the `npm ci` command instead of `npm install`
# RUN npm ci

# CMD [ "npm", "run", "start:dev" ]
