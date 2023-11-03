FROM node:18-alpine
RUN apk update && apk upgrade
WORKDIR /app
COPY . .
EXPOSE 1337
ENTRYPOINT ./server.sh
