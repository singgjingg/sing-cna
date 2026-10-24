# 1. Base image: lightweight Node.js
FROM node:20-alpine

# 2. Working directory inside the container
WORKDIR /app

# 3. Copy package files first (better layer caching)
COPY package*.json ./

# 4. Install only production dependencies
RUN npm install --omit=dev

# 5. Copy the application source code
COPY . .

# 6. Port the app listens on
ENV PORT=3000
EXPOSE 3000

# 7. Start the service
CMD ["node", "index.js"]
