FROM node:10

ENV MAP_API = 

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

# RUN yarn run build

EXPOSE 3000

CMD ["yarn", "start"]