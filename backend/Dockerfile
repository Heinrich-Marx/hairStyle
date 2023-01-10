FROM node:18
RUN npm install -g nodemon ts-node
WORKDIR /backend
COPY package.json .
COPY tsconfig.json .
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm", "run", "dev"]