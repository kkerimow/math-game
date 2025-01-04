FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Set environment variables
ENV NODE_ENV=production
ENV PORT=5000

# Expose port
EXPOSE 5000

# Start the app
CMD ["npm", "start"] 