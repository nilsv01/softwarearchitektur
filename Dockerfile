FROM node:14.9
 
WORKDIR /src

 
RUN npm install
 
COPY . .
 
EXPOSE 3000
 
CMD [ "npm", "start" ]