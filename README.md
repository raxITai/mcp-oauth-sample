# MCP OAuth Sample - raxIT AI

A test sample MCP (Model Context Protocol) OAuth server implementation on Vercel. This Next.js application provides OAuth 2.1 authentication for MCP clients, allowing secure access to MCP tools and resources.

## Features

- **OAuth 2.1 Server**: Complete OAuth implementation with PKCE support
- **Google Authentication**: User authentication via Google OAuth
- **MCP Server**: Supports both SSE and HTTP streaming transports
- **Database Storage**: PostgreSQL with Prisma ORM for OAuth data
- **Production Ready**: Deployable to Vercel with proper error handling

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **pnpm** (recommended package manager)
- **PostgreSQL** (v12 or higher)
- **Homebrew** (for macOS users)

## Local Development Setup

### 1. Clone and Install Dependencies

```bash
git clone <your-repo-url>
cd mcp-oauth-sample
pnpm install
```

### 2. Database Setup (PostgreSQL)

#### For macOS users:

```bash
# Install PostgreSQL via Homebrew (if not already installed)
brew install postgresql@14

# Start PostgreSQL service
brew services start postgresql@14

# Create database and user
createdb mcp_oauth
psql postgres -c "CREATE USER mcp_user WITH PASSWORD 'mcp_password';"
psql postgres -c "GRANT ALL PRIVILEGES ON DATABASE mcp_oauth TO mcp_user;"
```

#### For other systems:
- Install PostgreSQL from [postgresql.org](https://www.postgresql.org/download/)
- Create a database named `mcp_oauth`
- Create a user `mcp_user` with password `mcp_password`

### 3. Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://mcp_user:mcp_password@localhost:5432/mcp_oauth"

# NextAuth Secret (generate a random string)
AUTH_SECRET="your-secret-key-here"

# Google OAuth (get from Google Cloud Console)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Redis (optional, for SSE transport support)
REDIS_URL="rediss://user:pass@host:6379"

# Admin access (for analytics dashboard)
ADMIN_EMAIL="admin@gmail.com"
```

#### Setting up Google OAuth:

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add `http://localhost:3000/api/auth/callback/google` to authorized redirect URIs
6. Copy Client ID and Client Secret to your `.env` file

### 4. Database Schema Setup

```bash
# Generate Prisma client
pnpm prisma generate

# Create database tables
pnpm prisma db push
```

#### Database Schema Overview

The application uses PostgreSQL with the following main components:

**Core OAuth 2.1 Tables:**
- `User` - User accounts with Google OAuth authentication
- `Account` - OAuth provider account linkages  
- `Session` - User session management
- `Client` - Registered OAuth clients with PKCE support
- `AccessToken`, `AuthCode`, `RefreshToken` - OAuth 2.1 tokens

**Analytics & Security Tables:**
- `AnalyticsRequest` - Request tracking with **14-day TTL**
- `AnalyticsSecurity` - Security events with **14-day TTL**
- `MCPServer` - MCP server registry

**Data Retention (TTL - Time To Live):**
- Analytics data automatically expires after **14 days**
- Database-level TTL using PostgreSQL `INTERVAL` defaults
- Automatic cleanup via API endpoint `/api/cleanup`
- Manual cleanup: `POST /api/cleanup`
- Status monitoring: `GET /api/cleanup`

### 5. Start Development Server

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

## Common Issues and Solutions

### Database Connection Errors...

**Error**: `Can't reach database server at 'server:5432'`

**Solution**: Make sure your `.env` file has the correct `DATABASE_URL`:
```env
DATABASE_URL="postgresql://mcp_user:mcp_password@localhost:5432/mcp_oauth"
```

### Tailwind CSS Build Errors

**Error**: `Cannot find module '@tailwindcss/postcss'`

**Solution**: Install the missing dependency:
```bash
pnpm add @tailwindcss/postcss
```

### NextAuth UntrustedHost Error

**Error**: `UntrustedHost: Host must be trusted`

**Solution**: The `trustHost: true` option is already configured in `app/auth.ts` for development.

### TypeScript Errors with Next.js 15

**Error**: `searchParams` type errors

**Solution**: Already fixed - `searchParams` is properly typed as `Promise<{...}>` for Next.js 15 compatibility.

## Production Build

To test the production build locally:

```bash
pnpm build
pnpm start
```

## MCP Client Integration

### Claude Desktop and Web

Use the SSE transport endpoint:
```
https://your-domain.com/mcp/sse
```

### Cursor

Add to your `mcp.json`:
```json
{
  "mcpServers": {
    "MyServer": {
      "name": "raxIT MCP OAuth Sample",
      "url": "https://your-domain.com/mcp/mcp",
      "transport": "http-stream"
    }
  }
}
```

### VSCode

Add to your `settings.json`:
```json
{
  "mcp": {
    "servers": {
      "raxIT Sample": {
        "url": "https://your-domain.com/mcp/mcp"
      }
    }
  }
}
```

## API Endpoints

- **OAuth Registration**: `POST /api/oauth/register`
- **OAuth Token**: `POST /api/oauth/token`
- **Authorization**: `GET /oauth/authorize`
- **MCP HTTP**: `GET|POST /mcp/mcp`
- **MCP SSE**: `GET /mcp/sse`
- **Data Cleanup**: `POST /api/cleanup` - Manually trigger TTL cleanup
- **Cleanup Status**: `GET /api/cleanup` - Check TTL status and expired records
- **Security Analytics**: Analytics dashboard with real-time threat detection

## Project Structure

```
app/
├── api/
│   ├── auth/[...nextauth]/     # NextAuth endpoints
│   └── oauth/                  # OAuth 2.1 implementation
├── mcp/[transport]/            # MCP server endpoints
├── oauth/authorize/            # OAuth consent screen
├── auth.ts                     # NextAuth configuration
└── prisma.ts                   # Prisma client

prisma/
├── schema.prisma              # Database schema with TTL support
└── migrations/                # Database migrations

generated/
└── prisma/                    # Generated Prisma client (custom location)
```

## Development Scripts

```bash
# Development server
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Database operations
pnpm prisma generate          # Generate Prisma client
pnpm prisma db push          # Push schema to database
pnpm prisma migrate dev      # Create and apply migrations
pnpm prisma studio          # Open Prisma Studio

# Database management
brew services start postgresql@14    # Start PostgreSQL
brew services stop postgresql@14     # Stop PostgreSQL

# Data cleanup (TTL management)
curl -X POST http://localhost:3000/api/cleanup    # Manual cleanup
curl http://localhost:3000/api/cleanup            # Check cleanup status
```

## Security Monitoring & Threat Detection

This MCP OAuth server implements comprehensive security monitoring based on OAuth 2.1 and MCP specification requirements. The system automatically detects and records security threats in real-time.

### **OAuth & MCP Security Threats Detected**

#### **Critical Threats (Risk Score 90-95)**

**1. Token Audience Validation Failures**
- **Detection**: Access tokens used across multiple MCP server boundaries
- **Based on**: RFC 8707 Resource Indicators, RFC 9728 Protected Resource Metadata
- **Risk**: Token reuse attacks, confused deputy vulnerabilities
- **Recorded**: MCP server IDs, endpoints, token usage patterns

**2. PKCE Bypass Attempts**
- **Detection**: OAuth authorization code flows without PKCE protection
- **Based on**: OAuth 2.1 Section 7.5.2 mandatory PKCE requirements
- **Risk**: Authorization code interception attacks
- **Recorded**: Grant types, PKCE usage patterns, client behaviors

**3. OAuth Privilege Escalation**
- **Detection**: Users requesting elevated scopes beyond historical patterns
- **Based on**: OAuth scope analysis and permission escalation patterns
- **Risk**: Unauthorized access to sensitive resources
- **Recorded**: Current vs historical scopes, elevated scope patterns, user behavior

**4. Token Passthrough Violations**
- **Detection**: Rapid cross-service access suggesting token forwarding
- **Based on**: MCP security best practices against confused deputy attacks
- **Risk**: Tokens used for unintended services
- **Recorded**: Cross-server access patterns, timing analysis, resource boundaries

#### **High Risk Threats (Risk Score 70-85)**

**5. Missing Resource Parameters**
- **Detection**: OAuth requests without proper resource identification
- **Based on**: RFC 8707 Resource Indicators requirements
- **Risk**: Tokens not bound to intended resources
- **Recorded**: Missing redirect URIs, grant type violations

**6. Scope Explosion Attacks**
- **Detection**: Unusual number of new OAuth scopes requested simultaneously
- **Based on**: Permission escalation analysis
- **Risk**: Bulk privilege escalation attempts
- **Recorded**: New scope counts, scope patterns, user history

#### **Medium Risk Threats (Risk Score 50-70)**

**7. Rate Limiting Violations**
- **Detection**: >30 requests per minute from single IP
- **Risk**: DoS attacks, API abuse
- **Recorded**: Request rates, IP patterns, endpoint targeting

**8. Brute Force Attempts**
- **Detection**: Multiple authentication failures from same IP
- **Risk**: Credential guessing attacks
- **Recorded**: Failure counts, IP addresses, timing patterns

**9. Suspicious User Agents**
- **Detection**: Non-human user agents (bots, scrapers) without MCP identification
- **Risk**: Automated attacks, scraping attempts
- **Recorded**: User agent strings, access patterns

**10. Token Reuse Detection**
- **Detection**: Same token used from different IP addresses within short timeframe
- **Risk**: Credential theft, session hijacking
- **Recorded**: IP changes, timing analysis, token patterns

### **Data Recording & Analytics**

#### **Analytics Tables Structure**

**AnalyticsRequest Table:**
```sql
- timestamp, endpoint, method, statusCode, responseTime
- userId, clientId, mcpServerId (foreign keys)
- OAuth-specific: oauthGrantType, tokenScopes, usePKCE, redirectUri
- MCP-specific: mcpMethod, toolName
- Security context: ipAddress, userAgent, organization, ssoProvider
- Geographic: country, city (async populated)
- TTL: expiresAt (14-day auto-cleanup)
```

**AnalyticsSecurity Table:**
```sql
- timestamp, eventType (enum), severity, riskScore (0-100)
- userId, clientId, mcpServerId (foreign keys)
- Context: ipAddress, userAgent, endpoint, organization
- Incident management: resolved, resolvedAt, resolvedBy
- Details: JSON field with structured threat data
- TTL: expiresAt (14-day auto-cleanup)
```

#### **Security Event Types**
- `AUTH_FAILURE` - Authentication failures
- `INVALID_TOKEN` - Token validation failures
- `SUSPICIOUS_ACTIVITY` - Anomalous behavior patterns
- `RATE_LIMIT_EXCEEDED` - API rate limit violations
- `UNAUTHORIZED_ACCESS` - Access control violations
- `TOKEN_REUSE` - Token reuse across IPs
- `UNUSUAL_LOCATION` - Geographic anomalies
- `PRIVILEGE_ESCALATION` - Scope/permission escalation
- `MALFORMED_REQUEST` - Malformed OAuth/MCP requests
- `BRUTE_FORCE_ATTEMPT` - Credential brute force
- `OAUTH_INVALID_CLIENT` - Invalid OAuth clients
- `OAUTH_INVALID_GRANT` - Invalid OAuth grants
- `OAUTH_INVALID_SCOPE` - Invalid OAuth scopes

#### **Real-Time Threat Analysis**

**Risk Scoring Algorithm:**
- **Critical (90-100)**: Immediate security response required
- **High (70-89)**: Investigation and monitoring needed  
- **Medium (50-69)**: Automated monitoring and logging
- **Low (20-49)**: Basic logging only
- **Informational (0-19)**: Filtered out of security analytics

**Filtering & Display:**
- Security dashboard shows only meaningful threats (risk score ≥ 50)
- Privilege escalations filtered to high-risk only (≥ 70)
- Organization-level aggregation for enterprise visibility
- 14-day retention with automatic cleanup

### **Compliance & Standards**

The security monitoring system ensures compliance with:
- **OAuth 2.1** IETF Draft (draft-ietf-oauth-v2-1-12)
- **RFC 8707** Resource Indicators for OAuth 2.0
- **RFC 9728** OAuth 2.0 Protected Resource Metadata  
- **RFC 8414** OAuth 2.0 Authorization Server Metadata
- **MCP Security Best Practices** (2025-06-18 specification)

### **Enterprise Integration**

**SIEM Integration Ready:**
- Structured JSON logging for security events
- Risk scoring for automated response systems
- Geographic and organizational context
- Real-time alerting for critical events

**Monitoring Endpoints:**
- `/api/cleanup` - Security data management
- Analytics dashboard - Real-time threat visualization
- Prisma Studio - Direct database investigation

## Deployment to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

### Environment Variables for Production

Make sure to set these in your Vercel dashboard:
- `DATABASE_URL` (your production PostgreSQL URL)
- `AUTH_SECRET` (a secure random string)
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `REDIS_URL` (optional, for SSE support)
- `ADMIN_EMAIL` (required for analytics dashboard access)

## Contributing

This is a test sample project by raxIT AI. Feel free to fork and modify for your own use cases.

## License

MIT License - See LICENSE file for details.

---

**Made with ❤️ by raxIT AI**
