**.dockerignore**
node_modules

**Dockerfile**

<code>
  FROM node:alpine

  WORKDIR /app
  COPY package.json .
  RUN npm install
  COPY . .

  CMD ["npm", "start"]
</code>

` docker build -t labeeb/auth-ms . `
