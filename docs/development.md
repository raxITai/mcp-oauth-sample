# Development Guide

This comprehensive guide covers development practices, workflows, and standards for the MCP OAuth Sample project. Follow these guidelines to maintain code quality, consistency, and efficient development processes.

## Table of Contents

1. [Development Setup](#development-setup)
2. [Project Structure](#project-structure)
3. [Development Workflow](#development-workflow)
4. [Code Standards and Guidelines](#code-standards-and-guidelines)
5. [Database Development](#database-development)
6. [Testing Strategies](#testing-strategies)
7. [Contributing Guidelines](#contributing-guidelines)
8. [Git Workflow](#git-workflow)
9. [Code Review Process](#code-review-process)
10. [Development Tools](#development-tools)
11. [Debugging and Profiling](#debugging-and-profiling)
12. [Building and Deployment Pipeline](#building-and-deployment-pipeline)

## Development Setup

### Quick Start

```bash
# Clone the repository
git clone <repository-url>
cd mcp-oauth-sample

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Generate Prisma client
pnpm prisma generate

# Set up database
pnpm prisma db push

# Start development server
pnpm dev
```

### Environment Configuration

Create a comprehensive `.env.local` file with the following variables:

```bash
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/mcp_oauth_dev"

# NextAuth Configuration
AUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# Google OAuth Provider
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Optional: Redis for SSE transport
REDIS_URL="redis://localhost:6379"

# Development flags
NODE_ENV="development"
NEXT_TELEMETRY_DISABLED=1
```

### Development Dependencies

The project uses the following key development dependencies:

- **Next.js 15** - React framework with App Router
- **TypeScript 5** - Type safety and enhanced developer experience
- **Tailwind CSS 4** - Utility-first CSS framework
- **Prisma 6** - Database ORM and migration tool
- **ESLint 9** - Code linting and quality checks
- **Radix UI** - Headless component library

## Project Structure

```
mcp-oauth-sample/
├── app/                          # Next.js App Router directory
│   ├── api/                      # API route handlers
│   │   ├── analytics/            # Analytics and monitoring endpoints
│   │   ├── auth/                 # NextAuth.js authentication
│   │   ├── oauth/                # OAuth 2.1 server endpoints
│   │   └── mcp/                  # MCP protocol handlers
│   ├── analytics/                # Analytics dashboard pages
│   ├── oauth/                    # OAuth authorization pages
│   ├── auth.ts                   # NextAuth configuration
│   ├── layout.tsx                # Root layout component
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── components/                   # Reusable UI components
│   ├── analytics/                # Analytics-specific components
│   ├── ui/                       # Base UI components (shadcn/ui)
│   └── theme-provider.tsx        # Theme management
├── lib/                          # Utility libraries
│   ├── analytics-db.ts           # Analytics database operations
│   ├── security-monitor.ts       # Security monitoring utilities
│   └── utils.ts                  # General utilities
├── prisma/                       # Database schema and migrations
│   └── schema.prisma             # Prisma schema definition
├── generated/                    # Generated Prisma client
├── docs/                         # Documentation
├── public/                       # Static assets
├── middleware.ts                 # Next.js middleware
└── configuration files           # Various config files
```

### Key Architectural Patterns

#### 1. **App Router Structure**
- Pages are defined using `page.tsx` files
- Layouts use `layout.tsx` for nested routing
- API routes in `app/api/` directory
- Server and client components clearly separated

#### 2. **Component Architecture**
```typescript
// Server Component (default)
export default function ServerComponent() {
  // Server-side rendering, database access
}

// Client Component
"use client"
export default function ClientComponent() {
  // Client-side interactivity, hooks
}
```

#### 3. **Database Pattern**
- Custom Prisma client location: `generated/prisma/`
- Centralized database utilities in `lib/`
- Proper foreign key relationships and cascading deletes

## Development Workflow

### 1. Feature Development Process

```bash
# 1. Start from main branch
git checkout main
git pull origin main

# 2. Create feature branch
git checkout -b feature/description-of-feature

# 3. Develop with frequent commits
git add .
git commit -m "feat: implement specific functionality"

# 4. Test thoroughly
pnpm lint
pnpm build
pnpm test  # when tests are available

# 5. Push and create PR
git push origin feature/description-of-feature
```

### 2. Hot Reload Development

The development server supports hot reload for:
- **React components** - Instant updates
- **API routes** - Automatic restart
- **Tailwind CSS** - Live style updates
- **TypeScript** - Real-time type checking

### 3. Database Development Workflow

```bash
# Modify schema.prisma
# Then generate and apply changes
pnpm prisma generate
pnpm prisma db push        # For development
pnpm prisma migrate dev    # For production migrations
```

## Code Standards and Guidelines

### TypeScript Standards

#### 1. **Strict Configuration**
```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noEmit": true,
    "skipLibCheck": true
  }
}
```

#### 2. **Type Definitions**
```typescript
// Define interfaces for all data structures
interface User {
  id: string
  name: string | null
  email: string | null
}

// Use proper return types
async function fetchUser(id: string): Promise<User | null> {
  // Implementation
}

// Use const assertions for literal types
const OAUTH_GRANT_TYPES = ["authorization_code", "refresh_token"] as const
type GrantType = typeof OAUTH_GRANT_TYPES[number]
```

#### 3. **Component Props**
```typescript
interface ComponentProps {
  title: string
  optional?: boolean
  children: React.ReactNode
}

export default function Component({ title, optional = false, children }: ComponentProps) {
  return <div>{children}</div>
}
```

### React/Next.js Standards

#### 1. **Server vs Client Components**
```typescript
// Server Component - Default, no "use client"
export default function ServerPage() {
  // Can access database, environment variables
  return <div>Server rendered content</div>
}

// Client Component - Interactive
"use client"
export default function ClientComponent() {
  const [state, setState] = useState()
  // Can use hooks, event handlers
  return <div>Interactive content</div>
}
```

#### 2. **API Route Patterns**
```typescript
// app/api/example/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // Implementation
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
```

#### 3. **Component Organization**
```typescript
// Component file structure
import React from 'react'
// External dependencies first
import { Button } from '@/components/ui/button'
// Internal imports
import { cn } from '@/lib/utils'

// Types/interfaces
interface Props {
  // ...
}

// Main component
export default function Component({ prop }: Props) {
  // Hooks at the top
  const [state, setState] = useState()
  
  // Event handlers
  const handleClick = () => {
    // Implementation
  }
  
  // Render
  return (
    <div className={cn("base-classes")}>
      {/* Content */}
    </div>
  )
}
```

### CSS/Styling Standards

#### 1. **Tailwind CSS Best Practices**
```typescript
// Use cn() utility for conditional classes
const buttonClasses = cn(
  "base-button-classes",
  variant === "primary" && "primary-variant-classes",
  disabled && "disabled-classes"
)

// Group related classes
<div className={cn(
  // Layout
  "flex items-center justify-between",
  // Spacing
  "p-4 m-2",
  // Styling
  "bg-background border rounded-lg",
  // State
  "hover:bg-muted transition-colors"
)}>
```

#### 2. **Component Styling Patterns**
```typescript
// Create reusable style objects for complex components
const styles = {
  container: "flex-1 space-y-4 p-6",
  header: "text-xl font-semibold text-foreground",
  content: "text-muted-foreground leading-relaxed"
}
```

### Database Standards

#### 1. **Prisma Schema Conventions**
```prisma
model User {
  id            String    @id @default(cuid())
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  
  // Relations
  accounts      Account[]
  sessions      Session[]
  
  @@index([email])
}
```

#### 2. **Database Operations**
```typescript
// Use proper error handling
async function createUser(data: CreateUserData) {
  try {
    const user = await prisma.user.create({
      data,
      include: {
        accounts: true
      }
    })
    return { success: true, user }
  } catch (error) {
    console.error('Database error:', error)
    return { success: false, error: 'Failed to create user' }
  }
}
```

## Database Development

### 1. Schema Management

#### Migration Strategy
```bash
# Development: Use db push for rapid iteration
pnpm prisma db push

# Production: Always use migrations
pnpm prisma migrate dev --name descriptive-name
pnpm prisma migrate deploy  # In production
```

#### Schema Best Practices
```prisma
generator client {
  provider = "prisma-client-js"
  output   = "../generated/prisma"
  engineType = "library"
}

model ExampleModel {
  // Always include these standard fields
  id        String   @id @default(cuid())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  // Business fields
  name      String
  email     String   @unique
  
  // Relations with proper cascading
  posts     Post[]   @relation("UserPosts")
  
  // Indexes for performance
  @@index([email])
  @@index([createdAt])
}
```

### 2. Analytics Schema Patterns

The project uses advanced analytics patterns:

```prisma
model AnalyticsRequest {
  // TTL pattern for automatic cleanup
  expiresAt DateTime @default(dbgenerated("NOW() + INTERVAL '14 days'"))
  
  // Performance indexes
  @@index([timestamp])
  @@index([endpoint])
  @@index([expiresAt])
}
```

### 3. Database Utilities

```typescript
// lib/db.ts - Database connection utilities
import { PrismaClient } from '@/generated/prisma'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
```

## Testing Strategies

### 1. Testing Stack (Planned)

```bash
# Install testing dependencies
pnpm add -D @testing-library/react @testing-library/jest-dom jest-environment-jsdom jest
```

### 2. Test Structure

```
tests/
├── __mocks__/           # Mock implementations
├── components/          # Component tests
├── api/                # API route tests
├── lib/                # Utility function tests
└── e2e/                # End-to-end tests
```

### 3. Testing Patterns

#### Component Testing
```typescript
// components/__tests__/Button.test.tsx
import { render, screen } from '@testing-library/react'
import { Button } from '../Button'

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })
})
```

#### API Testing
```typescript
// api/__tests__/oauth.test.ts
import { createMocks } from 'node-mocks-http'
import handler from '../oauth/token/route'

describe('/api/oauth/token', () => {
  it('returns access token for valid request', async () => {
    // Test implementation
  })
})
```

### 4. Testing Commands

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage

# Run E2E tests
pnpm test:e2e
```

## Contributing Guidelines

### 1. Code Contribution Process

1. **Fork and Clone**
   ```bash
   git clone <your-fork-url>
   cd mcp-oauth-sample
   ```

2. **Setup Development Environment**
   ```bash
   pnpm install
   cp .env.example .env.local
   # Configure environment variables
   ```

3. **Create Feature Branch**
   ```bash
   git checkout -b feat/your-feature-name
   ```

4. **Follow Development Standards**
   - Write TypeScript with proper types
   - Follow component architecture patterns
   - Add proper error handling
   - Update documentation if needed

5. **Test Your Changes**
   ```bash
   pnpm lint
   pnpm build
   # Run tests when available
   ```

### 2. Pull Request Guidelines

#### PR Title Format
```
type(scope): description

Examples:
feat(oauth): add PKCE support for public clients
fix(analytics): resolve memory leak in data collection
docs(api): update OAuth endpoint documentation
```

#### PR Description Template
```markdown
## Summary
Brief description of changes

## Changes Made
- List of specific changes
- Include breaking changes if any

## Testing
- How was this tested?
- What scenarios were covered?

## Documentation
- Were docs updated?
- Are there new environment variables?

## Screenshots (if applicable)
```

### 3. Commit Guidelines

```bash
# Use conventional commits
git commit -m "feat(component): add new analytics dashboard"
git commit -m "fix(auth): resolve token expiration issue"
git commit -m "docs: update development setup guide"
```

## Git Workflow

### 1. Branch Strategy

```
main                 # Production-ready code
├── feature/         # New features
├── fix/            # Bug fixes
├── docs/           # Documentation updates
└── chore/          # Maintenance tasks
```

### 2. Branch Naming Conventions

```bash
# Features
feature/oauth-pkce-support
feature/analytics-dashboard
feature/mcp-tool-integration

# Bug fixes
fix/token-refresh-error
fix/middleware-memory-leak

# Documentation
docs/api-reference
docs/deployment-guide

# Chores
chore/dependency-updates
chore/code-cleanup
```

### 3. Git Hooks (Recommended)

```bash
# Install husky for git hooks
pnpm add -D husky lint-staged

# Pre-commit hook
#!/bin/sh
pnpm lint-staged

# Pre-push hook
#!/bin/sh
pnpm build
```

## Code Review Process

### 1. Review Checklist

#### Code Quality
- [ ] TypeScript types are properly defined
- [ ] No console.log statements in production code
- [ ] Error handling is comprehensive
- [ ] Performance implications considered

#### Architecture
- [ ] Components follow established patterns
- [ ] Database queries are optimized
- [ ] API responses are consistent
- [ ] Security best practices followed

#### Testing
- [ ] New features have tests
- [ ] Edge cases are covered
- [ ] Error scenarios are tested
- [ ] Performance impact assessed

#### Documentation
- [ ] Code is self-documenting
- [ ] Complex logic has comments
- [ ] API changes are documented
- [ ] README updated if needed

### 2. Review Process

1. **Automated Checks**
   - Linting passes
   - Build succeeds
   - Tests pass (when available)

2. **Manual Review**
   - Code logic review
   - Architecture assessment
   - Security consideration
   - User experience impact

3. **Approval Process**
   - At least one approving review
   - All conversations resolved
   - CI/CD checks pass

## Development Tools

### 1. Required Tools

```bash
# Core development environment
node --version    # v18+
pnpm --version    # Latest
psql --version    # v12+
```

### 2. Recommended VS Code Extensions

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-eslint",
    "prisma.prisma",
    "ms-vscode.vscode-json"
  ]
}
```

### 3. Development Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "prisma generate --no-engine && next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "type-check": "tsc --noEmit",
    "prisma:generate": "prisma generate",
    "prisma:push": "prisma db push",
    "prisma:migrate": "prisma migrate dev",
    "prisma:studio": "prisma studio"
  }
}
```

### 4. Useful Development Commands

```bash
# Database management
pnpm prisma studio              # Database GUI
pnpm prisma migrate reset       # Reset database
pnpm prisma db seed            # Seed database (if configured)

# Code quality
pnpm lint                      # Check for linting errors
pnpm lint:fix                  # Fix auto-fixable linting errors
pnpm type-check               # TypeScript type checking

# Build and deployment
pnpm build                     # Production build
pnpm start                     # Start production server
```

## Debugging and Profiling

### 1. Next.js Debugging

#### Development Debugging
```typescript
// Enable debug mode
export default function Component() {
  if (process.env.NODE_ENV === 'development') {
    console.log('Debug info:', data)
  }
}
```

#### API Route Debugging
```typescript
export async function GET(request: NextRequest) {
  console.log('Request URL:', request.url)
  console.log('Headers:', Object.fromEntries(request.headers))
  
  try {
    // API logic
  } catch (error) {
    console.error('API Error:', error)
    // Proper error response
  }
}
```

### 2. Database Query Debugging

```typescript
// Enable Prisma query logging
const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
})

// Query debugging
const result = await prisma.user.findMany({
  where: { active: true },
  include: { posts: true }
})
console.log('Query result:', result)
```

### 3. Performance Profiling

#### React Developer Tools
- Install React Developer Tools browser extension
- Use Profiler tab to identify performance bottlenecks
- Analyze component render times

#### Next.js Built-in Analytics
```typescript
// Enable experimental features
// next.config.ts
const nextConfig = {
  experimental: {
    instrumentationHook: true,
  }
}
```

#### Custom Performance Monitoring
```typescript
// Performance monitoring middleware
export async function middleware(request: NextRequest) {
  const start = Date.now()
  const response = NextResponse.next()
  const duration = Date.now() - start
  
  console.log(`${request.method} ${request.url}: ${duration}ms`)
  return response
}
```

### 4. Common Debugging Scenarios

#### Authentication Issues
```typescript
// Debug NextAuth sessions
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/auth"

export default async function handler() {
  const session = await getServerSession(authOptions)
  console.log('Current session:', session)
}
```

#### Database Connection Issues
```bash
# Check database connection
pnpm prisma db push --preview-feature
pnpm prisma studio

# View connection details
echo $DATABASE_URL
```

#### Build Issues
```bash
# Clear Next.js cache
rm -rf .next

# Clear node_modules
rm -rf node_modules pnpm-lock.yaml
pnpm install

# Check TypeScript errors
pnpm type-check
```

## Building and Deployment Pipeline

### 1. Build Process

```bash
# Production build steps
1. pnpm install --frozen-lockfile
2. pnpm prisma generate --no-engine
3. pnpm build
4. pnpm start
```

### 2. Build Optimization

#### Next.js Configuration
```typescript
// next.config.ts
const nextConfig = {
  // Enable compression
  compress: true,
  
  // Optimize images
  images: {
    domains: ['example.com'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Bundle analysis
  experimental: {
    bundlePagesExternals: true,
  }
}
```

#### Prisma Optimization
```prisma
generator client {
  provider = "prisma-client-js"
  output   = "../generated/prisma"
  engineType = "library"  // Smaller bundle size
}
```

### 3. Environment-Specific Builds

#### Development
```bash
NODE_ENV=development pnpm dev
```

#### Staging
```bash
NODE_ENV=production
DATABASE_URL=$STAGING_DATABASE_URL
pnpm build && pnpm start
```

#### Production
```bash
NODE_ENV=production
DATABASE_URL=$PRODUCTION_DATABASE_URL
pnpm build && pnpm start
```

### 4. CI/CD Pipeline

#### GitHub Actions Example
```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  lint-and-type-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'pnpm'
      
      - run: pnpm install --frozen-lockfile
      - run: pnpm lint
      - run: pnpm type-check
  
  build:
    runs-on: ubuntu-latest
    needs: lint-and-type-check
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'pnpm'
      
      - run: pnpm install --frozen-lockfile
      - run: pnpm build
```

### 5. Deployment Checklist

#### Pre-deployment
- [ ] All tests pass
- [ ] Build succeeds without warnings
- [ ] Environment variables configured
- [ ] Database migrations ready
- [ ] Performance benchmarks met

#### Deployment Steps
1. **Database Migration**
   ```bash
   pnpm prisma migrate deploy
   ```

2. **Build Application**
   ```bash
   pnpm build
   ```

3. **Health Check**
   ```bash
   curl https://your-domain.com/api/health
   ```

4. **Monitor Deployment**
   - Check application logs
   - Verify database connections
   - Test critical user flows

#### Post-deployment
- [ ] Application accessible
- [ ] Authentication working
- [ ] Database operations functional
- [ ] Analytics collecting data
- [ ] Error monitoring active

### 6. Monitoring and Observability

#### Application Monitoring
```typescript
// Add performance monitoring
export async function GET() {
  const start = performance.now()
  
  try {
    // API logic
    const result = await someOperation()
    return NextResponse.json(result)
  } finally {
    const duration = performance.now() - start
    console.log(`Operation took ${duration}ms`)
  }
}
```

#### Error Tracking
```typescript
// Global error handling
export async function GET() {
  try {
    // API logic
  } catch (error) {
    console.error('Unhandled error:', error)
    // Send to error tracking service
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
```

## Development Best Practices Summary

### 1. Code Quality
- Use TypeScript strictly
- Follow established patterns
- Write self-documenting code
- Handle errors gracefully

### 2. Performance
- Optimize database queries
- Use proper caching strategies
- Monitor bundle sizes
- Profile critical paths

### 3. Security
- Validate all inputs
- Use proper authentication
- Follow OWASP guidelines
- Monitor for vulnerabilities

### 4. Maintainability
- Keep components focused
- Extract reusable utilities
- Document complex logic
- Maintain test coverage

### 5. Collaboration
- Use consistent naming
- Follow git conventions
- Review code thoroughly
- Communicate changes clearly

---

This development guide is a living document that should be updated as the project evolves. For questions or suggestions, please open an issue or submit a pull request.