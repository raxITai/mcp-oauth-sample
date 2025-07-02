# Deployment Guide

This comprehensive guide covers deploying the MCP OAuth Server to production environments with proper security, performance, and monitoring configurations.

## Table of Contents

1. [Deployment Overview](#deployment-overview)
2. [Vercel Deployment (Recommended)](#vercel-deployment-recommended)
3. [Docker Deployment](#docker-deployment)
4. [Alternative Cloud Platforms](#alternative-cloud-platforms)
5. [Production Environment Variables](#production-environment-variables)
6. [Database Setup for Production](#database-setup-for-production)
7. [Security Configuration](#security-configuration)
8. [Performance Optimization](#performance-optimization)
9. [Monitoring and Logging](#monitoring-and-logging)
10. [CI/CD Pipeline Setup](#cicd-pipeline-setup)
11. [Scaling Considerations](#scaling-considerations)
12. [Post-Deployment Verification](#post-deployment-verification)
13. [Production Troubleshooting](#production-troubleshooting)

## Deployment Overview

The MCP OAuth Server is a Next.js 15 application designed for high-performance OAuth 2.1 authentication with MCP protocol support. The recommended deployment architecture includes:

- **Application**: Next.js 15 with SSR/SSG capabilities
- **Database**: PostgreSQL 14+ with connection pooling
- **Authentication**: NextAuth.js with Google OAuth provider
- **Analytics**: Built-in dashboard with security monitoring
- **MCP Protocol**: Server-sent events (SSE) and HTTP transport support

### Architecture Components

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Load Balancer │    │   Next.js App   │    │   PostgreSQL    │
│   (Cloudflare)  │────│   (Vercel)      │────│   (Supabase)    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                              │
                       ┌─────────────────┐
                       │   Redis Cache   │
                       │   (Optional)    │
                       └─────────────────┘
```

## Vercel Deployment (Recommended)

Vercel provides the optimal hosting environment for Next.js applications with automatic scaling, edge functions, and global CDN.

### Prerequisites

- Vercel account (vercel.com)
- GitHub/GitLab/Bitbucket repository
- Production PostgreSQL database
- Google OAuth credentials for production domain

### Step-by-Step Vercel Deployment

#### 1. Prepare Your Repository

```bash
# Ensure your code is committed and pushed
git add .
git commit -m "Prepare for production deployment"
git push origin main
```

#### 2. Connect to Vercel

1. Visit [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your Git repository
4. Select the correct branch (usually `main`)

#### 3. Configure Build Settings

Vercel auto-detects Next.js projects, but verify these settings:

```json
{
  "buildCommand": "prisma generate --no-engine && next build",
  "outputDirectory": ".next",
  "installCommand": "pnpm install",
  "devCommand": "pnpm dev"
}
```

#### 4. Environment Variables Setup

In your Vercel project dashboard, navigate to **Settings** > **Environment Variables** and add:

```bash
# Database
DATABASE_URL=postgresql://user:password@host:port/database?sslmode=require

# NextAuth
AUTH_SECRET=your-production-auth-secret-32-chars
NEXTAUTH_URL=https://your-domain.vercel.app

# Google OAuth
GOOGLE_CLIENT_ID=your-production-google-client-id
GOOGLE_CLIENT_SECRET=your-production-google-client-secret

# Optional: Redis
REDIS_URL=redis://user:password@host:port

# Environment
NODE_ENV=production
```

#### 5. Domain Configuration

1. In Vercel dashboard, go to **Settings** > **Domains**
2. Add your custom domain (e.g., `auth.yourdomain.com`)
3. Configure DNS records as instructed by Vercel
4. SSL certificates are automatically provisioned

#### 6. Deploy

Click **Deploy** or push to your connected branch. Vercel will:
- Install dependencies
- Generate Prisma client
- Build Next.js application
- Deploy to global edge network

### Vercel-Specific Optimizations

#### Edge Runtime Configuration

For MCP endpoints, configure edge runtime in `app/mcp/[transport]/route.ts`:

```typescript
export const runtime = 'edge';
export const preferredRegion = ['iad1', 'sfo1']; // Choose regions close to your users
```

#### Function Timeout Configuration

Create `vercel.json` in your project root:

```json
{
  "functions": {
    "app/api/**/*.js": {
      "maxDuration": 30
    },
    "app/mcp/**/*.js": {
      "maxDuration": 60
    }
  },
  "regions": ["iad1", "sfo1"],
  "crons": [
    {
      "path": "/api/cleanup",
      "schedule": "0 0 * * *"
    }
  ]
}
```

## Docker Deployment

For self-hosted environments or when you need more control over the deployment.

### Dockerfile

Create `Dockerfile` in your project root:

```dockerfile
# Use official Node.js runtime
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json pnpm-lock.yaml* ./
RUN corepack enable pnpm && pnpm i --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Generate Prisma client
RUN npx prisma generate --no-engine

# Build Next.js application
ENV NEXT_TELEMETRY_DISABLED 1
RUN corepack enable pnpm && pnpm build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/generated ./generated

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

### Docker Compose

Create `docker-compose.yml` for local testing:

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://postgres:password@db:5432/mcp_oauth
      - AUTH_SECRET=your-auth-secret-32-characters-long
      - NEXTAUTH_URL=http://localhost:3000
      - GOOGLE_CLIENT_ID=your-google-client-id
      - GOOGLE_CLIENT_SECRET=your-google-client-secret
      - NODE_ENV=production
    depends_on:
      - db
    restart: unless-stopped

  db:
    image: postgres:14-alpine
    environment:
      - POSTGRES_DB=mcp_oauth
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql
    ports:
      - "5432:5432"
    restart: unless-stopped

volumes:
  postgres_data:
```

### Production Docker Deployment

#### Build and Push to Registry

```bash
# Build for production
docker build -t mcp-oauth-server:latest .

# Tag for registry
docker tag mcp-oauth-server:latest your-registry/mcp-oauth-server:v1.0.0

# Push to registry
docker push your-registry/mcp-oauth-server:v1.0.0
```

#### Kubernetes Deployment

Create `k8s/deployment.yaml`:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mcp-oauth-server
  labels:
    app: mcp-oauth-server
spec:
  replicas: 3
  selector:
    matchLabels:
      app: mcp-oauth-server
  template:
    metadata:
      labels:
        app: mcp-oauth-server
    spec:
      containers:
      - name: mcp-oauth-server
        image: your-registry/mcp-oauth-server:v1.0.0
        ports:
        - containerPort: 3000
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: app-secrets
              key: database-url
        - name: AUTH_SECRET
          valueFrom:
            secretKeyRef:
              name: app-secrets
              key: auth-secret
        - name: NEXTAUTH_URL
          value: "https://your-domain.com"
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /api/health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /api/ready
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5
---
apiVersion: v1
kind: Service
metadata:
  name: mcp-oauth-service
spec:
  selector:
    app: mcp-oauth-server
  ports:
    - protocol: TCP
      port: 80
      targetPort: 3000
  type: LoadBalancer
```

## Alternative Cloud Platforms

### AWS Deployment

#### AWS App Runner (Easiest)

1. **Prepare source code**:
   ```bash
   # Create apprunner.yaml
   version: 1.0
   runtime: nodejs16
   build:
     commands:
       build:
         - npm install
         - npx prisma generate --no-engine
         - npm run build
   run:
     runtime-version: 16
     command: npm start
     network:
       port: 3000
       env: PORT
   ```

2. **Deploy via AWS Console**:
   - Go to AWS App Runner
   - Create service from source code
   - Connect GitHub repository
   - Configure environment variables

#### AWS ECS with Fargate

```bash
# Build and push to ECR
aws ecr create-repository --repository-name mcp-oauth-server
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account-id>.dkr.ecr.us-east-1.amazonaws.com
docker build -t mcp-oauth-server .
docker tag mcp-oauth-server:latest <account-id>.dkr.ecr.us-east-1.amazonaws.com/mcp-oauth-server:latest
docker push <account-id>.dkr.ecr.us-east-1.amazonaws.com/mcp-oauth-server:latest
```

### Railway Deployment

1. **Connect repository**: Link your GitHub repository to Railway
2. **Environment variables**: Set in Railway dashboard
3. **Database**: Use Railway PostgreSQL addon
4. **Deploy**: Automatic on git push

Railway configuration (railway.json):
```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "npm start",
    "healthcheckPath": "/api/health"
  }
}
```

### DigitalOcean App Platform

1. **Create app**: Connect GitHub repository
2. **Configure build**: 
   ```yaml
   name: mcp-oauth-server
   services:
   - name: web
     source_dir: /
     github:
       repo: your-username/mcp-oauth-sample
       branch: main
     run_command: npm start
     build_command: npm run build
     environment_slug: node-js
     instance_count: 1
     instance_size_slug: basic-xxs
     envs:
     - key: NODE_ENV
       value: production
   ```

## Production Environment Variables

### Complete Environment Checklist

#### Required Variables

```bash
# Database Connection
DATABASE_URL="postgresql://user:password@host:port/database?sslmode=require"

# NextAuth Configuration
AUTH_SECRET="32-character-random-string"
NEXTAUTH_URL="https://your-production-domain.com"

# Google OAuth (Production)
GOOGLE_CLIENT_ID="your-production-client-id"
GOOGLE_CLIENT_SECRET="your-production-client-secret"

# Environment
NODE_ENV="production"
```

#### Optional Variables

```bash
# Redis (for session store/caching)
REDIS_URL="redis://user:password@host:port"

# Monitoring
SENTRY_DSN="https://your-sentry-dsn"
LOGTAIL_TOKEN="your-logtail-token"

# Analytics
GOOGLE_ANALYTICS_ID="GA-XXXXXXXXX"

# Rate Limiting
UPSTASH_REDIS_REST_URL="https://your-upstash-url"
UPSTASH_REDIS_REST_TOKEN="your-upstash-token"

# Email (for notifications)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"

# Feature Flags
ENABLE_ANALYTICS="true"
ENABLE_SECURITY_MONITORING="true"
MAX_OAUTH_CLIENTS_PER_USER="10"
```

#### Security Environment Variables

```bash
# CORS Configuration
ALLOWED_ORIGINS="https://your-frontend.com,https://your-admin.com"

# Rate Limiting
RATE_LIMIT_MAX="100"
RATE_LIMIT_WINDOW="900000" # 15 minutes

# Token Configuration
ACCESS_TOKEN_EXPIRY="3600" # 1 hour
REFRESH_TOKEN_EXPIRY="2592000" # 30 days

# Security Headers
FORCE_HTTPS="true"
HSTS_MAX_AGE="31536000"
```

### Environment Variable Management

#### Using Vercel CLI

```bash
# Set environment variables
vercel env add DATABASE_URL production
vercel env add AUTH_SECRET production

# Pull environment variables
vercel env pull .env.production

# List environment variables
vercel env ls
```

#### Using GitHub Secrets (for CI/CD)

```bash
# Set repository secrets via GitHub CLI
gh secret set DATABASE_URL --body "postgresql://..."
gh secret set AUTH_SECRET --body "your-secret"
```

## Database Setup for Production

### Managed Database Providers

#### Supabase (Recommended for Vercel)

```bash
# Connection string format
DATABASE_URL="postgresql://postgres.project-ref:password@aws-0-region.pooler.supabase.com:5432/postgres?sslmode=require"
```

Benefits:
- Automatic backups
- Connection pooling
- Real-time subscriptions
- Built-in auth (if needed)
- Generous free tier

#### Neon Database

```bash
# Connection string format  
DATABASE_URL="postgresql://user:password@ep-cool-darkness-123456.us-east-1.aws.neon.tech/neondb?sslmode=require"
```

Benefits:
- Serverless PostgreSQL
- Automatic scaling
- Branching (database branches)
- Cold start optimization

#### AWS RDS

```bash
# Connection string format
DATABASE_URL="postgresql://username:password@your-instance.region.rds.amazonaws.com:5432/mcp_oauth?sslmode=require"
```

Setup:
```bash
# Create parameter group with optimized settings
aws rds create-db-parameter-group \
    --db-parameter-group-name mcp-oauth-pg14 \
    --db-parameter-group-family postgres14 \
    --description "Optimized settings for MCP OAuth"

# Create RDS instance
aws rds create-db-instance \
    --db-instance-identifier mcp-oauth-prod \
    --db-instance-class db.t3.micro \
    --engine postgres \
    --engine-version 14.9 \
    --master-username mcpuser \
    --master-user-password your-secure-password \
    --allocated-storage 20 \
    --storage-type gp2 \
    --vpc-security-group-ids sg-xxxxxxxx \
    --db-parameter-group-name mcp-oauth-pg14 \
    --backup-retention-period 7 \
    --storage-encrypted
```

### Database Migration Strategy

#### Production Migration Process

```bash
# 1. Generate migration
npx prisma migrate dev --name production-init --create-only

# 2. Review generated SQL
cat prisma/migrations/*/migration.sql

# 3. Deploy to production
npx prisma migrate deploy

# 4. Verify deployment
npx prisma migrate status
```

#### Zero-Downtime Migration

For critical updates:

```bash
# 1. Create backward-compatible migration
npx prisma migrate dev --name add-new-column

# 2. Deploy new code (still works with old schema)
# 3. Run migration
npx prisma migrate deploy

# 4. Deploy code that uses new column
```

### Database Performance Optimization

#### Connection Pooling

Add to your `DATABASE_URL`:
```bash
DATABASE_URL="postgresql://user:pass@host:port/db?sslmode=require&pgbouncer=true&connection_limit=10"
```

#### Prisma Configuration

Update `prisma/schema.prisma`:
```prisma
generator client {
  provider = "prisma-client-js"
  output   = "../generated/prisma"
  engineType = "library"
  previewFeatures = ["relationJoins", "omitApi"]
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
  directUrl = env("DIRECT_URL") // For migrations
}
```

#### Database Monitoring

```sql
-- Monitor connection count
SELECT count(*) as connections FROM pg_stat_activity;

-- Check slow queries
SELECT query, mean_exec_time, calls 
FROM pg_stat_statements 
WHERE mean_exec_time > 1000 
ORDER BY mean_exec_time DESC;

-- Monitor table sizes
SELECT 
  schemaname,
  tablename,
  pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) as size
FROM pg_tables 
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;
```

## Security Configuration

### HTTPS and SSL/TLS

#### Let's Encrypt with Caddy

`Caddyfile`:
```
your-domain.com {
    reverse_proxy localhost:3000
    
    # Security headers
    header {
        Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
        X-Content-Type-Options nosniff
        X-Frame-Options DENY
        X-XSS-Protection "1; mode=block"
        Referrer-Policy "strict-origin-when-cross-origin"
    }
}
```

#### Nginx Configuration

```nginx
server {
    listen 443 ssl http2;
    server_name your-domain.com;
    
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/private.key;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE+AESGCM:ECDHE+CHACHA20:DHE+AESGCM:DHE+CHACHA20:!aNULL:!SHA1:!WEAK;
    ssl_prefer_server_ciphers off;
    
    # Security headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    add_header X-Content-Type-Options nosniff always;
    add_header X-Frame-Options DENY always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Environment Security

#### Secret Management

**Using AWS Secrets Manager**:
```javascript
// lib/secrets.js
import { SecretsManagerClient, GetSecretValueCommand } from "@aws-sdk/client-secrets-manager";

const client = new SecretsManagerClient({ region: "us-east-1" });

export async function getSecret(secretName) {
  try {
    const response = await client.send(
      new GetSecretValueCommand({ SecretId: secretName })
    );
    return JSON.parse(response.SecretString);
  } catch (error) {
    console.error("Error retrieving secret:", error);
    throw error;
  }
}
```

**Using HashiCorp Vault**:
```javascript
// lib/vault.js
import fetch from 'node-fetch';

export async function getVaultSecret(path) {
  const response = await fetch(`${process.env.VAULT_ADDR}/v1/secret/data/${path}`, {
    headers: {
      'X-Vault-Token': process.env.VAULT_TOKEN
    }
  });
  
  const data = await response.json();
  return data.data.data;
}
```

#### Security Headers Middleware

Create `middleware.ts`:
```typescript
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Create response
  const response = NextResponse.next();
  
  // Security headers
  response.headers.set('X-DNS-Prefetch-Control', 'off');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
  // HTTPS redirect
  if (process.env.NODE_ENV === 'production' && 
      request.headers.get('x-forwarded-proto') !== 'https') {
    return NextResponse.redirect(`https://${request.headers.get('host')}${request.nextUrl.pathname}`);
  }
  
  return response;
}

export const config = {
  matcher: [
    '/((?!api/health|_next/static|_next/image|favicon.ico).*)',
  ],
};
```

### Rate Limiting

#### Redis-based Rate Limiting

```typescript
// lib/rate-limit.ts
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function rateLimit(identifier: string, limit = 100, window = 60000) {
  const key = `rate_limit:${identifier}`;
  const current = await redis.incr(key);
  
  if (current === 1) {
    await redis.expire(key, Math.ceil(window / 1000));
  }
  
  return {
    success: current <= limit,
    remaining: Math.max(0, limit - current),
    reset: Date.now() + window,
  };
}
```

## Performance Optimization

### Next.js Optimization

#### Output Configuration

Update `next.config.ts`:
```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
    formats: ['image/webp', 'image/avif'],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  httpAgentOptions: {
    keepAlive: true,
  },
};

export default nextConfig;
```

#### Bundle Analysis

```bash
# Install analyzer
npm install --save-dev @next/bundle-analyzer

# Configure in next.config.ts
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);

# Run analysis
ANALYZE=true npm run build
```

### Database Performance

#### Query Optimization

```typescript
// Optimized queries with Prisma
export async function getAnalytics(userId: string) {
  return prisma.analyticsRequest.findMany({
    where: { userId },
    select: {
      id: true,
      timestamp: true,
      endpoint: true,
      statusCode: true,
      responseTime: true,
      // Only select needed fields
    },
    orderBy: { timestamp: 'desc' },
    take: 100, // Limit results
  });
}
```

#### Database Indexing

Add to your Prisma schema:
```prisma
model AnalyticsRequest {
  // ... existing fields
  
  @@index([timestamp, userId])
  @@index([endpoint, statusCode])
  @@index([clientId, timestamp])
}
```

### Caching Strategy

#### Redis Caching

```typescript
// lib/cache.ts
import { Redis } from 'ioredis';

const redis = new Redis(process.env.REDIS_URL);

export async function getOrSetCache<T>(
  key: string,
  fetcher: () => Promise<T>,
  ttl = 3600
): Promise<T> {
  const cached = await redis.get(key);
  
  if (cached) {
    return JSON.parse(cached);
  }
  
  const data = await fetcher();
  await redis.setex(key, ttl, JSON.stringify(data));
  
  return data;
}
```

#### Edge Caching

```typescript
// For API routes
export async function GET(request: Request) {
  const response = await fetch('external-api');
  const data = await response.json();
  
  return new Response(JSON.stringify(data), {
    headers: {
      'Cache-Control': 's-maxage=60, stale-while-revalidate',
      'Content-Type': 'application/json',
    },
  });
}
```

## Monitoring and Logging

### Application Monitoring

#### Sentry Integration

```bash
npm install @sentry/nextjs
```

`sentry.client.config.ts`:
```typescript
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
  environment: process.env.NODE_ENV,
  integrations: [
    new Sentry.BrowserTracing({
      tracingOrigins: [process.env.NEXTAUTH_URL],
    }),
  ],
});
```

#### Custom Analytics

```typescript
// lib/analytics.ts
export async function trackEvent(event: {
  name: string;
  properties?: Record<string, any>;
  userId?: string;
}) {
  if (process.env.NODE_ENV !== 'production') return;
  
  // Custom analytics implementation
  await fetch('/api/analytics/track', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(event),
  });
}
```

### Health Checks

Create `app/api/health/route.ts`:
```typescript
import { prisma } from '@/app/prisma';

export async function GET() {
  try {
    // Database health check
    await prisma.$queryRaw`SELECT 1`;
    
    // Additional health checks
    const checks = {
      database: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      memory: process.memoryUsage(),
    };
    
    return new Response(JSON.stringify(checks), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ 
      status: 'unhealthy', 
      error: error.message 
    }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
```

### Logging Configuration

#### Structured Logging

```typescript
// lib/logger.ts
import winston from 'winston';

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'mcp-oauth-server' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

export default logger;
```

## CI/CD Pipeline Setup

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    
    services:
      postgres:
        image: postgres:14
        env:
          POSTGRES_PASSWORD: postgres
          POSTGRES_DB: test_db
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 5432:5432
    
    steps:
    - uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Generate Prisma client
      run: npx prisma generate
      env:
        DATABASE_URL: postgresql://postgres:postgres@localhost:5432/test_db
    
    - name: Run database migrations
      run: npx prisma migrate deploy
      env:
        DATABASE_URL: postgresql://postgres:postgres@localhost:5432/test_db
    
    - name: Run tests
      run: npm test
      env:
        DATABASE_URL: postgresql://postgres:postgres@localhost:5432/test_db
    
    - name: Run linting
      run: npm run lint
    
    - name: Build application
      run: npm run build
      env:
        DATABASE_URL: postgresql://postgres:postgres@localhost:5432/test_db

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - uses: actions/checkout@v4
    
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v25
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
        vercel-args: '--prod'
```

### Environment-Specific Deployments

#### Staging Environment

Create `.github/workflows/staging.yml`:

```yaml
name: Deploy to Staging

on:
  push:
    branches: [develop]

jobs:
  deploy-staging:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v4
    
    - name: Deploy to Vercel Staging
      uses: amondnet/vercel-action@v25
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
        scope: ${{ secrets.TEAM_ID }}
        alias-domains: |
          staging-mcp-oauth.vercel.app
```

### Database Migrations in CI/CD

```yaml
- name: Run migrations
  run: |
    npx prisma migrate deploy
    npx prisma generate
  env:
    DATABASE_URL: ${{ secrets.DATABASE_URL }}
```

## Scaling Considerations

### Horizontal Scaling

#### Load Balancing Configuration

```nginx
# Nginx load balancer
upstream mcp_oauth_backend {
    least_conn;
    server app1.example.com:3000 weight=3;
    server app2.example.com:3000 weight=3;
    server app3.example.com:3000 weight=2;
}

server {
    listen 80;
    server_name your-domain.com;
    
    location / {
        proxy_pass http://mcp_oauth_backend;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        
        # Session affinity for OAuth flows
        ip_hash;
    }
}
```

#### Session Storage

For multi-instance deployments, use Redis for session storage:

```typescript
// lib/session-store.ts
import { Redis } from 'ioredis';

const redis = new Redis(process.env.REDIS_URL);

export class RedisSessionStore {
  async get(sessionId: string) {
    const session = await redis.get(`session:${sessionId}`);
    return session ? JSON.parse(session) : null;
  }
  
  async set(sessionId: string, session: any, ttl = 3600) {
    await redis.setex(`session:${sessionId}`, ttl, JSON.stringify(session));
  }
  
  async destroy(sessionId: string) {
    await redis.del(`session:${sessionId}`);
  }
}
```

### Database Scaling

#### Read Replicas

```typescript
// lib/db.ts
import { PrismaClient } from '../generated/prisma';

const primaryDb = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

const readDb = new PrismaClient({
  datasources: {
    db: {
      url: process.env.READ_REPLICA_URL || process.env.DATABASE_URL,
    },
  },
});

export { primaryDb as writeDb, readDb };
```

#### Connection Pooling

```bash
# Database URL with pooling
DATABASE_URL="postgresql://user:pass@host:port/db?sslmode=require&pgbouncer=true&connection_limit=10&pool_timeout=30"
```

### CDN Configuration

#### Cloudflare Setup

```javascript
// cloudflare-workers/edge-auth.js
export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        
        // Cache static assets
        if (url.pathname.startsWith('/_next/static/')) {
            return fetch(request, {
                cf: {
                    cacheTtl: 31536000, // 1 year
                    cacheEverything: true,
                }
            });
        }
        
        // Cache API responses
        if (url.pathname.startsWith('/api/') && request.method === 'GET') {
            return fetch(request, {
                cf: {
                    cacheTtl: 300, // 5 minutes
                }
            });
        }
        
        return fetch(request);
    }
};
```

## Post-Deployment Verification

### Automated Testing

Create `tests/production.test.js`:
```javascript
const { test, expect } = require('@playwright/test');

test.describe('Production Deployment', () => {
  test('health check endpoint responds', async ({ request }) => {
    const response = await request.get('/api/health');
    expect(response.status()).toBe(200);
    
    const data = await response.json();
    expect(data.database).toBe('healthy');
  });
  
  test('OAuth flow works', async ({ page }) => {
    await page.goto('/');
    await page.click('text=Sign In');
    
    // Should redirect to Google OAuth
    await expect(page).toHaveURL(/accounts\.google\.com/);
  });
  
  test('MCP endpoints are accessible', async ({ request }) => {
    const sseResponse = await request.get('/mcp/sse');
    expect([200, 401]).toContain(sseResponse.status());
    
    const httpResponse = await request.get('/mcp/mcp');
    expect([200, 401]).toContain(httpResponse.status());
  });
});
```

### Manual Verification Checklist

#### Security Verification

- [ ] HTTPS certificate is valid and properly configured
- [ ] Security headers are present (check with securityheaders.com)
- [ ] Google OAuth redirect URIs match production domain
- [ ] Database connections use SSL/TLS
- [ ] Environment variables are properly secured
- [ ] Rate limiting is functional
- [ ] CORS policies are correctly configured

#### Functionality Verification

- [ ] User registration and login flow works
- [ ] OAuth client creation and management works
- [ ] MCP endpoints respond correctly
- [ ] Analytics dashboard loads and shows data
- [ ] Database migrations completed successfully
- [ ] Prisma client generated correctly
- [ ] All API endpoints return expected responses

#### Performance Verification

- [ ] Page load times are acceptable (< 3 seconds)
- [ ] Database queries are optimized
- [ ] Static assets are cached properly
- [ ] CDN is serving content correctly
- [ ] Memory usage is within acceptable limits
- [ ] CPU usage is optimized

#### Monitoring Verification

- [ ] Health check endpoint responds
- [ ] Error tracking is working (Sentry)
- [ ] Logs are being collected
- [ ] Metrics are being recorded
- [ ] Alerts are configured and working
- [ ] Backup processes are functioning

### Post-Deployment Scripts

Create `scripts/verify-deployment.sh`:
```bash
#!/bin/bash

DOMAIN=${1:-"https://your-domain.com"}

echo "🔍 Verifying deployment at $DOMAIN"

# Health check
echo "📊 Checking health endpoint..."
curl -f "$DOMAIN/api/health" || exit 1

# SSL check
echo "🔒 Checking SSL certificate..."
curl -I "$DOMAIN" | grep -i "strict-transport-security" || echo "⚠️  HSTS header missing"

# Performance check
echo "⚡ Checking page load time..."
curl -o /dev/null -s -w "Time: %{time_total}s\n" "$DOMAIN"

# OAuth endpoints
echo "🔐 Checking OAuth endpoints..."
curl -I "$DOMAIN/.well-known/oauth-authorization-server"

# MCP endpoints
echo "🤖 Checking MCP endpoints..."
curl -I "$DOMAIN/mcp/sse"
curl -I "$DOMAIN/mcp/mcp"

echo "✅ Deployment verification complete"
```

## Production Troubleshooting

### Common Production Issues

#### Database Connection Issues

**Symptoms**: 
- "Connection refused" errors
- "Too many connections" errors
- Slow query performance

**Solutions**:
```bash
# Check connection pooling
psql $DATABASE_URL -c "SELECT count(*) FROM pg_stat_activity;"

# Verify SSL connection
psql "$DATABASE_URL?sslmode=require" -c "SELECT version();"

# Monitor connection usage
psql $DATABASE_URL -c "
SELECT state, count(*) 
FROM pg_stat_activity 
GROUP BY state;
"
```

#### Memory Issues

**Symptoms**:
- Out of memory errors
- Process killed by OOM killer
- Slow performance

**Solutions**:
```bash
# Monitor memory usage
docker stats --no-stream

# Check Node.js heap usage
node --inspect app.js
# Then use Chrome DevTools

# Optimize Prisma client
DATABASE_URL="$DATABASE_URL?connection_limit=10&pool_timeout=30"
```

#### Performance Issues

**Symptoms**:
- Slow API responses
- High CPU usage
- Database timeout errors

**Solutions**:
```typescript
// Add query timeouts
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
  queryTimeout: 30000, // 30 seconds
});

// Optimize queries
const users = await prisma.user.findMany({
  select: { id: true, email: true }, // Only select needed fields
  take: 100, // Limit results
});
```

### Error Monitoring and Debugging

#### Log Analysis

```bash
# Tail application logs
tail -f /var/log/app/application.log

# Search for errors
grep -i error /var/log/app/application.log | tail -n 50

# Monitor response times
grep "responseTime" /var/log/app/application.log | awk '{print $NF}' | sort -n
```

#### Database Query Analysis

```sql
-- Find slow queries
SELECT query, mean_exec_time, calls, total_exec_time
FROM pg_stat_statements 
WHERE mean_exec_time > 1000 
ORDER BY mean_exec_time DESC 
LIMIT 10;

-- Check table bloat
SELECT 
  schemaname, tablename,
  pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) as size,
  pg_size_pretty(pg_relation_size(schemaname||'.'||tablename)) as table_size,
  pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename) - pg_relation_size(schemaname||'.'||tablename)) as index_size
FROM pg_tables 
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC 
LIMIT 20;
```

### Emergency Procedures

#### Rollback Process

```bash
# Quick rollback with Vercel
vercel --prod --rollback

# Rollback database migration
npx prisma migrate resolve --rolled-back 20231201000000_migration_name
```

#### Scaling Under Load

```bash
# Increase container resources (Docker)
docker update --memory 1g --cpus 2 container_name

# Scale horizontally (Kubernetes)
kubectl scale deployment mcp-oauth-server --replicas=5

# Enable read replicas
export READ_REPLICA_URL="postgresql://readonly-user:pass@replica-host:5432/db"
```

### Monitoring and Alerting

#### Uptime Monitoring

Set up external monitoring with services like:
- Pingdom
- UptimeRobot  
- StatusCake
- DataDog Synthetics

#### Custom Alerts

```javascript
// lib/alerts.js
export async function sendAlert(alert) {
  if (alert.severity === 'critical') {
    // Send to PagerDuty, Slack, etc.
    await fetch(process.env.WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: `🚨 CRITICAL: ${alert.message}`,
        channel: '#alerts'
      })
    });
  }
}
```

---

## Summary

This deployment guide provides comprehensive coverage of deploying the MCP OAuth Server to production environments. Key takeaways:

1. **Vercel is recommended** for most deployments due to its Next.js optimization and automatic scaling
2. **Security is paramount** - ensure HTTPS, proper environment variable management, and security headers
3. **Monitor everything** - implement health checks, error tracking, and performance monitoring
4. **Plan for scale** - use connection pooling, caching, and horizontal scaling strategies
5. **Test thoroughly** - verify all functionality post-deployment with automated and manual tests

For specific deployment questions or issues not covered in this guide, refer to the platform-specific documentation or open an issue in the project repository.