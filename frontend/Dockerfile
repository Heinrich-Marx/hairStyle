FROM node:18
RUN npm install -g nodemon ts-node cross-env
WORKDIR /frondend
COPY package.json .
COPY tsconfig.json .
RUN npm install
COPY . .
EXPOSE 8020
CMD ["npm", "run", "dev"]