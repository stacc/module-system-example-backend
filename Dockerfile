FROM node:current-alpine

WORKDIR /app
COPY package.json .
RUN npm ci
COPY src src
CMD ["npm", "start"]
