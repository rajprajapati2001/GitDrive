# --- Stage 1: Build Stage ---
FROM node:20-alpine AS builder
WORKDIR /app

# Copy configuration files first to leverage Docker layer caching
COPY package*.json tsconfig.json vite.config.ts metadata.json ./

# Install all dependencies (including devDependencies needed for build)
RUN npm ci

# Copy the rest of the application files
COPY . .

# Build both frontend SPA assets and backend server bundles
RUN npm run build

# --- Stage 2: Production Runner ---
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy built artifacts from the builder layer
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# Install only runtime production dependencies to keep things ultra-lean
RUN npm ci --only=production

# Expose the server port (Express defaults typically to 3000 or 5173, adjust if your server.ts uses a different port)
EXPOSE 3000

# Start the optimized Node service bundle
CMD ["npm", "run", "start"]