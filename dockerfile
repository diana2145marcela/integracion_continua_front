# Stage 1
FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Expose port for service
EXPOSE 5000
ARG REACT_APP_URL
ENV REACT_APP_URL $REACT_APP_URL

# Install and configure `serve`.
RUN npm install -g serve

# Copy source code to image
COPY . .

# Install dependencies
RUN npm install


# Build app and start server from script
CMD ["/usr/src/app/run"]

