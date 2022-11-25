FROM node:16.18.1

WORKDIR /frontend

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]
