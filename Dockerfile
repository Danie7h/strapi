FROM node:18-alpine
RUN apk update && apk upgrade
WORKDIR /app
COPY . .
RUN echo $FIREBASE_JSON > firebase.json
RUN npm i
RUN npm run build
EXPOSE 1337
CMD ["npm", "run", "start"]
