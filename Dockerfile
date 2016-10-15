FROM node:5

MAINTAINER Leonardo Zanivan <panga@apache.org>

# Create app dir
RUN mkdir -p /opt/app
WORKDIR /opt/app

# Install app dependencies
COPY package.json /opt/app
RUN npm install

# Copy app source
COPY . /opt/app

# Expose server ports
EXPOSE 80

# Start server
CMD [ "npm", "start" ]