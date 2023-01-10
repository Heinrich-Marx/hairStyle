FROM node:18
RUN npm install -g nodemon ts-node cross-env
WORKDIR /frondend/my-app
COPY package.json .
COPY tsconfig.json .
COPY . .
EXPOSE 8020
CMD ["npm", "run", "dev"]