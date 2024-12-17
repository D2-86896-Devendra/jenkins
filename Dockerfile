FROM node:20-alpine
WORKDIR /src
COPY . .
RUN npm install express
EXPOSE 7878
CMD node Server.js
