FROM node:lts-alpine
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --quiet
COPY . .
EXPOSE 3000
USER 1000
CMD ["npm", "start"]
