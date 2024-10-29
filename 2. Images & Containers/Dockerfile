FROM node:14

WORKDIR /app

COPY app/ /app/
RUN npm install

EXPOSE 80

CMD ["node", "server.js"]