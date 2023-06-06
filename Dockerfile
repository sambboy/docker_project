# FROM node:alpine

# WORKDIR '/app'

# COPY package.json .

# RUN npm install

# COPY . .

# CMD ["npm","start"]

FROM node:alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@5.0.1 -g --silent
COPY . ./
CMD ["npm", "start"]