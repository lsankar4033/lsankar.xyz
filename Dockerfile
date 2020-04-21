FROM node:13.13.0-alpine

# install
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .

# build
RUN npm run build

# run
EXPOSE 8081
CMD ["node", "server.js"]
