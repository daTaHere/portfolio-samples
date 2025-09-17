ARG BASEOS_DIGEST
FROM node:22.19-alpine${BASEOS_DIGEST:-} AS builder
WORKDIR /app
# cache dependencies
COPY package.json package-lock.json ./
# install from yarnlock file 
RUN npm install 

COPY . .

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

EXPOSE  5173