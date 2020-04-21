FROM node:13.13.0-alpine
ARG PORT=8081
ENV PORT ${PORT}

# install
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .

# build
RUN npm run build

# run
EXPOSE ${PORT}
CMD ["node", "server.js"]
