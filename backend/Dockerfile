# Use an official Node.js runtime as a paren
FROM node:18

WORKDIR /app
COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 8080

CMD ["npm", "start"]
