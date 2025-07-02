# MCP OAuth Server Troubleshooting Guide

This comprehensive guide covers common issues, debugging procedures, and solutions for the MCP OAuth server implementation.

## Table of Contents
1. [Common Setup Issues](#common-setup-issues)
2. [Database Connection Problems](#database-connection-problems)
3. [OAuth Flow Errors](#oauth-flow-errors)
4. [MCP Client Integration Issues](#mcp-client-integration-issues)
5. [Authentication Failures](#authentication-failures)
6. [API Endpoint Errors](#api-endpoint-errors)
7. [Analytics Dashboard Problems](#analytics-dashboard-problems)
8. [Performance Issues](#performance-issues)
9. [Security-Related Errors](#security-related-errors)
10. [Production Deployment Issues](#production-deployment-issues)
11. [Environment Variable Problems](#environment-variable-problems)
12. [Debugging Tools and Techniques](#debugging-tools-and-techniques)

---

## Common Setup Issues

### Issue: Prisma Client Generation Fails

**Problem Description:**
Prisma client fails to generate during `pnpm install` or `pnpm build`.

**Symptoms:**
```bash
Error: Cannot find module 'generated/prisma'
PrismaClientInitializationError: Prisma has detected that this project uses a custom output path
```

**Root Cause Analysis:**
- Custom Prisma client output path is not properly configured
- Missing Prisma generate step in build process
- Node modules corruption

**Step-by-step Solution:**
1. Check Prisma schema configuration:
   ```prisma
   generator client {
     provider = "prisma-client-js"
     output   = "../generated/prisma"
     engineType = "library"
   }
   ```

2. Manually generate Prisma client:
   ```bash
   pnpm prisma generate
   ```

3. Clear and reinstall dependencies:
   ```bash
   rm -rf node_modules pnpm-lock.yaml
   rm -rf generated/
   pnpm install
   ```

4. Verify build script includes Prisma generation:
   ```json
   {
     "scripts": {
       "build": "prisma generate --no-engine && next build"
     }
   }
   ```

**Prevention Tips:**
- Always run `pnpm prisma generate` after schema changes
- Include postinstall script for automatic generation
- Use `--no-engine` flag in production builds

**Related Issues:**
- [Database Connection Problems](#database-connection-problems)
- [Production Deployment Issues](#production-deployment-issues)

---

### Issue: Next.js Development Server Won't Start

**Problem Description:**
Development server fails to start with various port or configuration errors.

**Symptoms:**
```bash
Error: listen EADDRINUSE: address already in use :::3000
Error: Invalid configuration object
```

**Root Cause Analysis:**
- Port 3000 already in use
- Invalid Next.js configuration
- Missing environment variables

**Step-by-step Solution:**
1. Check for processes using port 3000:
   ```bash
   lsof -ti:3000
   kill -9 $(lsof -ti:3000)
   ```

2. Use alternative port:
   ```bash
   pnpm dev -- -p 3001
   ```

3. Verify Next.js configuration (`next.config.ts`):
   ```typescript
   const nextConfig = {
     experimental: {
       serverComponentsExternalPackages: ['@prisma/client']
     }
   };
   ```

4. Check TypeScript configuration:
   ```bash
   pnpm tsc --noEmit
   ```

**Prevention Tips:**
- Use port management tools like `fkill-cli`
- Regularly validate configuration files
- Keep dependencies updated

---

## Database Connection Problems

### Issue: PostgreSQL Connection Refused

**Problem Description:**
Application cannot connect to PostgreSQL database.

**Symptoms:**
```bash
PrismaClientInitializationError: Can't reach database server
Error: connect ECONNREFUSED 127.0.0.1:5432
```

**Root Cause Analysis:**
- PostgreSQL service not running
- Incorrect database URL
- Firewall blocking connection
- Wrong database credentials

**Step-by-step Solution:**
1. Check PostgreSQL service status:
   ```bash
   # macOS with Homebrew
   brew services list | grep postgresql
   brew services start postgresql@14
   
   # Linux systemd
   sudo systemctl status postgresql
   sudo systemctl start postgresql
   
   # Docker
   docker ps | grep postgres
   docker start postgres-container
   ```

2. Verify database URL format:
   ```bash
   # Correct format
   DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
   ```

3. Test direct connection:
   ```bash
   psql -h localhost -p 5432 -U username -d database_name
   ```

4. Check database existence:
   ```bash
   psql -U postgres -c "\l" | grep your_database
   ```

5. Create database if missing:
   ```bash
   createdb -U postgres your_database_name
   ```

**Prevention Tips:**
- Use Docker Compose for consistent database setup
- Implement database health checks
- Monitor database service status

**Related Issues:**
- [Environment Variable Problems](#environment-variable-problems)
- [Production Deployment Issues](#production-deployment-issues)

---

### Issue: Database Schema Out of Sync

**Problem Description:**
Database schema doesn't match Prisma schema, causing query failures.

**Symptoms:**
```bash
PrismaClientValidationError: Invalid `prisma.client.findUnique()` invocation
Table 'Client' doesn't exist in the current database
```

**Root Cause Analysis:**
- Schema changes not applied to database
- Missing migrations
- Database reset without applying schema

**Step-by-step Solution:**
1. Check current database schema:
   ```bash
   pnpm prisma db pull
   ```

2. Generate and apply migration:
   ```bash
   pnpm prisma migrate dev --name init
   ```

3. Force push schema (development only):
   ```bash
   pnpm prisma db push
   ```

4. Reset database and reapply schema:
   ```bash
   pnpm prisma migrate reset
   ```

5. Verify schema sync:
   ```bash
   pnpm prisma studio
   ```

**Prevention Tips:**
- Always create migrations for schema changes
- Use `prisma migrate dev` in development
- Use `prisma migrate deploy` in production

---

## OAuth Flow Errors

### Issue: Invalid Client Error

**Problem Description:**
OAuth authorization fails with "invalid_client" error.

**Symptoms:**
```json
{
  "error": "invalid_client",
  "error_description": "Client authentication failed"
}
```

**Root Cause Analysis:**
- Client not registered in database
- Incorrect client_id or client_secret
- Client registration incomplete

**Step-by-step Solution:**
1. Verify client exists in database:
   ```bash
   pnpm prisma studio
   # Check Client table for your client_id
   ```

2. Register new OAuth client:
   ```bash
   curl -X POST http://localhost:3000/api/oauth/register \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Test Client",
       "redirectUris": ["http://localhost:8080/callback"]
     }'
   ```

3. Check client credentials:
   ```sql
   SELECT clientId, clientSecret, name FROM Client WHERE clientId = 'your-client-id';
   ```

4. Verify redirect URI matches registration:
   ```sql
   SELECT redirectUris FROM Client WHERE clientId = 'your-client-id';
   ```

**Prevention Tips:**
- Store client credentials securely
- Validate redirect URIs during registration
- Implement client credential rotation

**Related Issues:**
- [Authentication Failures](#authentication-failures)
- [Security-Related Errors](#security-related-errors)

---

### Issue: PKCE Validation Failure

**Problem Description:**
Authorization code exchange fails with PKCE validation error.

**Symptoms:**
```json
{
  "error": "invalid_grant",
  "error_description": "PKCE validation failed"
}
```

**Root Cause Analysis:**
- Code verifier doesn't match code challenge
- Incorrect PKCE method (S256 vs plain)
- Missing code_verifier in token request

**Step-by-step Solution:**
1. Verify PKCE implementation in client:
   ```javascript
   // Generate code verifier
   const codeVerifier = crypto.randomBytes(32).toString('base64url');
   
   // Generate code challenge (S256)
   const codeChallenge = crypto
     .createHash('sha256')
     .update(codeVerifier)
     .digest('base64url');
   ```

2. Check authorization request includes PKCE:
   ```http
   GET /oauth/authorize?
     response_type=code&
     client_id=your-client-id&
     redirect_uri=http://localhost:8080/callback&
     code_challenge=CODE_CHALLENGE&
     code_challenge_method=S256
   ```

3. Include code_verifier in token request:
   ```http
   POST /api/oauth/token
   Content-Type: application/x-www-form-urlencoded
   
   grant_type=authorization_code&
   code=AUTH_CODE&
   client_id=CLIENT_ID&
   redirect_uri=REDIRECT_URI&
   code_verifier=CODE_VERIFIER
   ```

4. Debug PKCE validation in server logs:
   ```bash
   # Check server console output during token exchange
   tail -f logs/oauth.log
   ```

**Prevention Tips:**
- Use established OAuth libraries for PKCE
- Test PKCE flow with different clients
- Implement comprehensive PKCE logging

---

## MCP Client Integration Issues

### Issue: MCP Client Authentication Fails

**Problem Description:**
MCP client cannot authenticate with the server using OAuth tokens.

**Symptoms:**
```json
{
  "error": "Unauthorized",
  "status": 401
}
```

**Root Cause Analysis:**
- Invalid or expired access token
- Missing Authorization header
- Token audience mismatch
- Incorrect token format

**Step-by-step Solution:**
1. Verify token is included in request:
   ```bash
   curl -X POST http://localhost:3000/mcp/sse \
     -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
     -H "Content-Type: application/json"
   ```

2. Check token validity in database:
   ```sql
   SELECT token, expiresAt, resource FROM AccessToken 
   WHERE token = 'your-access-token';
   ```

3. Verify token audience/resource:
   ```javascript
   // Token should be issued for correct resource
   const expectedResource = "http://localhost:3000";
   ```

4. Check MCP server logs:
   ```bash
   # Look for authentication debug logs
   [MCP] Auth header present: true
   [MCP] Token extracted: present
   [MCP] Access token found: true
   [MCP] Authentication successful, audience validated
   ```

5. Test with fresh token:
   ```bash
   # Get new token through OAuth flow
   # Or use test endpoint if available
   ```

**Prevention Tips:**
- Implement token refresh logic in MCP client
- Use proper token storage and retrieval
- Monitor token expiration times

**Related Issues:**
- [Authentication Failures](#authentication-failures)
- [OAuth Flow Errors](#oauth-flow-errors)

---

### Issue: MCP Transport Configuration

**Problem Description:**
MCP client cannot establish connection using SSE or HTTP transport.

**Symptoms:**
```bash
Connection failed: ERR_CONNECTION_REFUSED
WebSocket connection failed
SSE connection timeout
```

**Root Cause Analysis:**
- Incorrect transport URL
- CORS configuration issues
- Network connectivity problems
- Server not supporting requested transport

**Step-by-step Solution:**
1. Verify MCP server endpoints:
   ```bash
   # SSE transport
   curl http://localhost:3000/mcp/sse
   
   # HTTP transport  
   curl http://localhost:3000/mcp/mcp
   ```

2. Check CORS headers:
   ```bash
   curl -H "Origin: http://localhost:8080" \
        -H "Access-Control-Request-Method: POST" \
        -H "Access-Control-Request-Headers: Content-Type,Authorization" \
        -X OPTIONS \
        http://localhost:3000/mcp/sse
   ```

3. Test transport with authentication:
   ```bash
   curl -X POST http://localhost:3000/mcp/sse \
     -H "Authorization: Bearer TOKEN" \
     -H "Content-Type: application/json" \
     -d '{"method": "tools/list", "params": {}}'
   ```

4. Configure client transport properly:
   ```javascript
   // SSE transport
   const transport = new StdioServerTransport({
     command: 'curl',
     args: ['-N', '-H', 'Authorization: Bearer TOKEN', 'http://localhost:3000/mcp/sse']
   });
   
   // HTTP transport
   const client = new Client({
     name: 'test-client',
     version: '1.0.0'
   }, {
     capabilities: {}
   });
   ```

**Prevention Tips:**
- Test both SSE and HTTP transports
- Implement proper error handling in client
- Use connection pooling for HTTP transport

---

## Authentication Failures

### Issue: NextAuth Google OAuth Not Working

**Problem Description:**
Users cannot sign in with Google OAuth provider.

**Symptoms:**
```bash
OAuthCallbackError: OAuth account was not linked
Error: Configuration is invalid
```

**Root Cause Analysis:**
- Invalid Google OAuth credentials
- Incorrect redirect URI configuration
- Missing OAuth consent screen setup
- Domain verification issues

**Step-by-step Solution:**
1. Verify Google OAuth configuration:
   ```bash
   # Check environment variables
   echo $GOOGLE_CLIENT_ID
   echo $GOOGLE_CLIENT_SECRET
   ```

2. Check Google Cloud Console settings:
   - OAuth 2.0 Client IDs properly configured
   - Authorized redirect URIs include: `http://localhost:3000/api/auth/callback/google`
   - OAuth consent screen configured

3. Verify NextAuth configuration:
   ```typescript
   // app/auth.ts
   export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
     adapter: PrismaAdapter(prisma),
     providers: [
       Google({
         clientId: process.env.GOOGLE_CLIENT_ID!,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
       }),
     ],
     trustHost: true, // Important for localhost
   });
   ```

4. Test OAuth flow manually:
   ```bash
   # Visit in browser
   http://localhost:3000/api/auth/signin
   ```

5. Check NextAuth debug logs:
   ```bash
   # Set debug mode
   export NEXTAUTH_DEBUG=true
   pnpm dev
   ```

**Prevention Tips:**
- Keep OAuth credentials secure and up to date
- Test OAuth flow in different environments
- Monitor Google Cloud Console for API usage

**Related Issues:**
- [Environment Variable Problems](#environment-variable-problems)
- [Security-Related Errors](#security-related-errors)

---

### Issue: Session Management Problems

**Problem Description:**
User sessions not persisting or invalid session errors.

**Symptoms:**
```bash
SessionRequiredError: Please add a `session` callback
Invalid session token
User session expired unexpectedly
```

**Root Cause Analysis:**
- Database session storage issues
- Session token corruption
- Clock synchronization problems
- Session cleanup job removing active sessions

**Step-by-step Solution:**
1. Check session in database:
   ```sql
   SELECT sessionToken, expires, userId FROM Session 
   WHERE sessionToken = 'session-token';
   ```

2. Verify session callback:
   ```typescript
   // app/auth.ts
   export const { ... } = NextAuth({
     // ... other config
     callbacks: {
       session: async ({ session, token }) => {
         return session;
       },
     },
   });
   ```

3. Check system clock:
   ```bash
   date
   # Ensure server time is correct
   ```

4. Monitor session cleanup:
   ```bash
   # Check if cleanup job is too aggressive
   tail -f logs/cleanup.log
   ```

**Prevention Tips:**
- Implement proper session monitoring
- Use appropriate session expiration times
- Handle session refresh gracefully

---

## API Endpoint Errors

### Issue: CORS Errors in Browser

**Problem Description:**
Browser requests to API endpoints fail with CORS errors.

**Symptoms:**
```bash
Access to fetch at 'http://localhost:3000/api/oauth/token' from origin 'http://localhost:8080' has been blocked by CORS policy
```

**Root Cause Analysis:**
- Missing CORS headers
- Incorrect CORS configuration
- Preflight request failures
- Origin not allowed

**Step-by-step Solution:**
1. Check CORS headers in API response:
   ```bash
   curl -I -H "Origin: http://localhost:8080" \
        http://localhost:3000/api/oauth/token
   ```

2. Verify OPTIONS method handler:
   ```typescript
   // In API route
   export async function OPTIONS() {
     return new NextResponse("OK", {
       status: 200,
       headers: {
         'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Methods': 'POST, OPTIONS',
         'Access-Control-Allow-Headers': 'Content-Type, Authorization',
       },
     });
   }
   ```

3. Add CORS to all responses:
   ```typescript
   function getCorsHeaders() {
     return {
       'Access-Control-Allow-Origin': '*',
       'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
       'Access-Control-Allow-Headers': 'Content-Type, Authorization',
     };
   }
   ```

4. Test preflight request:
   ```bash
   curl -X OPTIONS \
        -H "Origin: http://localhost:8080" \
        -H "Access-Control-Request-Method: POST" \
        -H "Access-Control-Request-Headers: Content-Type,Authorization" \
        http://localhost:3000/api/oauth/token
   ```

**Prevention Tips:**
- Use middleware for consistent CORS handling
- Test API endpoints from different origins
- Document CORS requirements for clients

**Related Issues:**
- [MCP Client Integration Issues](#mcp-client-integration-issues)
- [Production Deployment Issues](#production-deployment-issues)

---

### Issue: API Rate Limiting Errors

**Problem Description:**
API requests fail due to rate limiting restrictions.

**Symptoms:**
```json
{
  "error": "rate_limit_exceeded",
  "retry_after": 60
}
```

**Root Cause Analysis:**
- Too many requests from single IP
- Client not implementing backoff
- Rate limiting configuration too strict
- Distributed rate limiting sync issues

**Step-by-step Solution:**
1. Check rate limiting configuration:
   ```typescript
   // Typical rate limiting setup
   const rateLimiter = new RateLimiter({
     windowMs: 15 * 60 * 1000, // 15 minutes
     max: 100, // limit each IP to 100 requests per windowMs
   });
   ```

2. Implement exponential backoff in client:
   ```javascript
   async function apiRequest(url, options, retries = 3) {
     try {
       const response = await fetch(url, options);
       if (response.status === 429) {
         const retryAfter = response.headers.get('Retry-After');
         const delay = retryAfter ? parseInt(retryAfter) * 1000 : Math.pow(2, 4 - retries) * 1000;
         await new Promise(resolve => setTimeout(resolve, delay));
         return apiRequest(url, options, retries - 1);
       }
       return response;
     } catch (error) {
       if (retries > 0) {
         await new Promise(resolve => setTimeout(resolve, 1000));
         return apiRequest(url, options, retries - 1);
       }
       throw error;
     }
   }
   ```

3. Monitor rate limiting metrics:
   ```bash
   # Check rate limiting logs
   grep "rate_limit" logs/api.log
   ```

4. Whitelist trusted IPs if needed:
   ```typescript
   const trustedIPs = ['192.168.1.0/24', '10.0.0.0/8'];
   ```

**Prevention Tips:**
- Implement client-side request queuing
- Use appropriate rate limiting windows
- Monitor API usage patterns

---

## Analytics Dashboard Problems

### Issue: Dashboard Data Not Loading

**Problem Description:**
Analytics dashboard shows no data or loading errors.

**Symptoms:**
```javascript
Failed to fetch analytics data
ChartJS error: Dataset is empty
Dashboard components showing loading state indefinitely
```

**Root Cause Analysis:**
- Analytics collection not working
- Database query failures
- Frontend data fetching issues
- Date range filtering problems

**Step-by-step Solution:**
1. Check analytics data in database:
   ```sql
   SELECT COUNT(*) FROM AnalyticsRequest WHERE timestamp > NOW() - INTERVAL '1 day';
   SELECT COUNT(*) FROM AnalyticsSecurity WHERE timestamp > NOW() - INTERVAL '1 day';
   ```

2. Verify analytics collection endpoint:
   ```bash
   curl -X POST http://localhost:3000/api/analytics/collect \
     -H "Content-Type: application/json" \
     -d '{
       "timestamp": "2024-01-01T00:00:00Z",
       "endpoint": "/test",
       "method": "GET",
       "statusCode": 200,
       "responseTime": 100,
       "ipAddress": "127.0.0.1",
       "userAgent": "test"
     }'
   ```

3. Test analytics API endpoints:
   ```bash
   # Test main analytics endpoint
   curl http://localhost:3000/api/analytics
   
   # Test security analytics
   curl http://localhost:3000/api/analytics/security
   ```

4. Check browser console for errors:
   ```javascript
   // Look for network errors, CORS issues, or JavaScript errors
   // in browser developer tools
   ```

5. Verify data transformation:
   ```typescript
   // Check if chart data is properly formatted
   console.log('Chart data:', chartData);
   ```

**Prevention Tips:**
- Implement analytics data validation
- Add error boundaries to dashboard components
- Monitor analytics collection health

**Related Issues:**
- [Database Connection Problems](#database-connection-problems)
- [API Endpoint Errors](#api-endpoint-errors)

---

### Issue: Chart Rendering Problems

**Problem Description:**
Charts in analytics dashboard not rendering correctly or showing errors.

**Symptoms:**
```javascript
Canvas error: Cannot read property 'getContext' of null
Recharts warning: Failed to parse the data
Chart displays "No data available"
```

**Root Cause Analysis:**
- Invalid chart data format
- Missing chart dependencies
- CSS conflicts affecting chart rendering
- Responsive layout issues

**Step-by-step Solution:**
1. Verify chart data structure:
   ```typescript
   // Example valid data for Recharts
   const chartData = [
     { name: 'Jan', value: 100 },
     { name: 'Feb', value: 200 },
   ];
   ```

2. Check chart component props:
   ```typescript
   <ResponsiveContainer width="100%" height={300}>
     <LineChart data={chartData}>
       <XAxis dataKey="name" />
       <YAxis />
       <Line type="monotone" dataKey="value" stroke="#8884d8" />
     </LineChart>
   </ResponsiveContainer>
   ```

3. Verify chart container dimensions:
   ```css
   .chart-container {
     width: 100%;
     height: 300px;
     min-height: 300px;
   }
   ```

4. Test with static data:
   ```typescript
   // Replace dynamic data with static data to isolate issue
   const testData = [
     { timestamp: '2024-01-01', requests: 100 },
     { timestamp: '2024-01-02', requests: 150 },
   ];
   ```

**Prevention Tips:**
- Validate chart data before rendering
- Use chart component error boundaries
- Test charts with various data scenarios

---

## Performance Issues

### Issue: Slow Database Queries

**Problem Description:**
Database operations taking too long, affecting API response times.

**Symptoms:**
```bash
API response time > 5 seconds
Database connection pool exhausted
Timeout errors in application logs
```

**Root Cause Analysis:**
- Missing database indexes
- Inefficient query patterns
- Large dataset without pagination
- Database connection pool issues

**Step-by-step Solution:**
1. Identify slow queries:
   ```sql
   -- PostgreSQL slow query analysis
   SELECT query, mean_time, calls, total_time
   FROM pg_stat_statements
   ORDER BY mean_time DESC
   LIMIT 10;
   ```

2. Add missing indexes:
   ```sql
   -- Common indexes for analytics
   CREATE INDEX idx_analytics_timestamp ON AnalyticsRequest(timestamp);
   CREATE INDEX idx_analytics_client ON AnalyticsRequest(clientId, timestamp);
   CREATE INDEX idx_security_events ON AnalyticsSecurity(timestamp, eventType);
   ```

3. Optimize Prisma queries:
   ```typescript
   // Use proper pagination
   const requests = await prisma.analyticsRequest.findMany({
     take: 100,
     skip: page * 100,
     orderBy: { timestamp: 'desc' },
     where: {
       timestamp: {
         gte: startDate,
         lte: endDate
       }
     }
   });
   ```

4. Configure connection pooling:
   ```bash
   # Database URL with connection pool settings
   DATABASE_URL="postgresql://user:pass@localhost:5432/db?connection_limit=10&pool_timeout=20"
   ```

5. Use database query optimization:
   ```typescript
   // Use select to limit fields
   const analytics = await prisma.analyticsRequest.findMany({
     select: {
       id: true,
       timestamp: true,
       endpoint: true,
       statusCode: true
     }
   });
   ```

**Prevention Tips:**
- Monitor query performance regularly
- Use database query analyzers
- Implement proper caching strategies

**Related Issues:**
- [Database Connection Problems](#database-connection-problems)
- [Analytics Dashboard Problems](#analytics-dashboard-problems)

---

### Issue: Memory Leaks and High CPU Usage

**Problem Description:**
Application consuming excessive memory or CPU resources.

**Symptoms:**
```bash
Node.js heap out of memory
High CPU usage (>80%)
Application becomes unresponsive
```

**Root Cause Analysis:**
- Memory leaks in event handlers
- Inefficient algorithms
- Large data processing without streaming
- Unhandled promise rejections

**Step-by-step Solution:**
1. Monitor memory usage:
   ```bash
   # Use Node.js built-in profiler
   node --inspect-brk server.js
   
   # Or use external tools
   npm install -g clinic
   clinic flame -- node server.js
   ```

2. Check for memory leaks:
   ```javascript
   // Add memory monitoring
   setInterval(() => {
     const used = process.memoryUsage();
     console.log(`Memory usage: ${Math.round(used.rss / 1024 / 1024 * 100) / 100} MB`);
   }, 30000);
   ```

3. Optimize data processing:
   ```typescript
   // Use streaming for large datasets
   const stream = prisma.analyticsRequest.findManyStream({
     where: { timestamp: { gte: startDate } }
   });
   
   for await (const record of stream) {
     processRecord(record);
   }
   ```

4. Fix promise rejection handlers:
   ```javascript
   process.on('unhandledRejection', (reason, promise) => {
     console.error('Unhandled Rejection at:', promise, 'reason:', reason);
   });
   ```

**Prevention Tips:**
- Use memory profiling in development
- Implement proper cleanup in components
- Monitor resource usage in production

---

## Security-Related Errors

### Issue: Token Security Violations

**Problem Description:**
Security events being triggered due to token misuse or attacks.

**Symptoms:**
```json
{
  "eventType": "TOKEN_REUSE",
  "severity": "high",
  "details": "Access token used multiple times"
}
```

**Root Cause Analysis:**
- Token replay attacks
- Client not properly managing tokens
- Token storage vulnerabilities
- Insufficient token validation

**Step-by-step Solution:**
1. Review security events:
   ```sql
   SELECT eventType, severity, details, timestamp, ipAddress
   FROM AnalyticsSecurity
   WHERE eventType IN ('TOKEN_REUSE', 'INVALID_TOKEN', 'SUSPICIOUS_ACTIVITY')
   ORDER BY timestamp DESC;
   ```

2. Implement token binding:
   ```typescript
   // Bind token to client characteristics
   const tokenBinding = {
     userAgent: request.headers.get('user-agent'),
     ipAddress: getClientIP(request),
   };
   ```

3. Add token introspection:
   ```typescript
   // Validate token properties
   async function validateToken(token: string, request: NextRequest) {
     const accessToken = await prisma.accessToken.findUnique({
       where: { token },
       include: { client: true, user: true }
     });
     
     // Validate audience
     if (accessToken.resource !== expectedResource) {
       throw new Error('Token audience mismatch');
     }
     
     return accessToken;
   }
   ```

4. Monitor unusual patterns:
   ```typescript
   // Track token usage patterns
   const recentUsage = await prisma.analyticsRequest.count({
     where: {
       clientId: accessToken.clientId,
       timestamp: { gte: new Date(Date.now() - 60000) } // Last minute
     }
   });
   
   if (recentUsage > RATE_LIMIT) {
     await logSecurityEvent(request, 'RATE_LIMIT_EXCEEDED', 'Unusual token usage pattern');
   }
   ```

**Prevention Tips:**
- Implement comprehensive token validation
- Use short-lived access tokens
- Monitor security events continuously

**Related Issues:**
- [Authentication Failures](#authentication-failures)
- [OAuth Flow Errors](#oauth-flow-errors)

---

### Issue: CSRF and XSS Vulnerabilities

**Problem Description:**
Security vulnerabilities in web application components.

**Symptoms:**
```bash
Security scanner reports CSRF vulnerability
XSS attack detected in logs
Content Security Policy violations
```

**Root Cause Analysis:**
- Missing CSRF protection
- Inadequate input sanitization  
- Unsafe HTML rendering
- Weak Content Security Policy

**Step-by-step Solution:**
1. Implement CSRF protection:
   ```typescript
   // Use NextAuth's built-in CSRF protection
   import { auth } from './auth';
   
   export async function POST(request: NextRequest) {
     const session = await auth();
     if (!session) {
       return new Response('Unauthorized', { status: 401 });
     }
     // ... handle authenticated request
   }
   ```

2. Sanitize user inputs:
   ```typescript
   import { z } from 'zod';
   
   const inputSchema = z.object({
     name: z.string().max(100).regex(/^[a-zA-Z0-9\s]+$/),
     description: z.string().max(500),
   });
   
   const validatedInput = inputSchema.parse(userInput);
   ```

3. Configure Content Security Policy:
   ```typescript
   // next.config.ts
   const securityHeaders = [
     {
       key: 'Content-Security-Policy',
       value: "default-src 'self'; script-src 'self' 'unsafe-eval'; style-src 'self' 'unsafe-inline'"
     }
   ];
   ```

4. Use secure headers:
   ```typescript
   const secureHeaders = {
     'X-Frame-Options': 'DENY',
     'X-Content-Type-Options': 'nosniff',
     'Referrer-Policy': 'strict-origin-when-cross-origin',
     'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
   };
   ```

**Prevention Tips:**
- Use security linting tools
- Regular security audits
- Keep dependencies updated

---

## Production Deployment Issues

### Issue: Environment-Specific Configuration Errors

**Problem Description:**
Application works in development but fails in production environment.

**Symptoms:**
```bash
Database connection failed in production
OAuth callbacks failing with wrong URL
HTTPS redirect loops
```

**Root Cause Analysis:**
- Environment variable differences
- HTTPS/HTTP configuration issues
- Database connection string differences
- Firewall or networking restrictions

**Step-by-step Solution:**
1. Compare environment variables:
   ```bash
   # Development
   cat .env.local
   
   # Production  
   echo $DATABASE_URL
   echo $NEXTAUTH_URL
   echo $AUTH_SECRET
   ```

2. Verify production database access:
   ```bash
   # Test database connection from production server
   psql $DATABASE_URL -c "SELECT 1;"
   ```

3. Check OAuth redirect URIs:
   ```bash
   # Ensure production URLs are registered in OAuth provider
   # Google: https://console.cloud.google.com/
   # Callback URL should be: https://yourdomain.com/api/auth/callback/google
   ```

4. Test HTTPS configuration:
   ```bash
   curl -I https://yourdomain.com/api/auth/signin
   ```

5. Verify database migrations:
   ```bash
   pnpm prisma migrate deploy
   ```

**Prevention Tips:**
- Use environment-specific configurations
- Test production builds locally
- Implement health check endpoints

**Related Issues:**
- [Environment Variable Problems](#environment-variable-problems)
- [Database Connection Problems](#database-connection-problems)

---

### Issue: Docker Deployment Problems  

**Problem Description:**
Application fails to start or function correctly in Docker containers.

**Symptoms:**
```bash
Container exits with code 1
Port binding failures
Database connection timeouts
```

**Root Cause Analysis:**
- Incorrect Dockerfile configuration
- Network connectivity issues between containers
- Missing build dependencies
- File permission problems

**Step-by-step Solution:**
1. Verify Dockerfile:
   ```dockerfile
   FROM node:18-alpine
   
   WORKDIR /app
   
   # Copy package files first for better caching
   COPY package*.json ./
   COPY pnpm-lock.yaml ./
   
   # Install dependencies
   RUN npm install -g pnpm
   RUN pnpm install --frozen-lockfile
   
   # Copy source code
   COPY . .
   
   # Generate Prisma client
   RUN pnpm prisma generate
   
   # Build application
   RUN pnpm build
   
   EXPOSE 3000
   CMD ["pnpm", "start"]
   ```

2. Check Docker Compose configuration:
   ```yaml
   version: '3.8'
   services:
     app:
       build: .
       ports:
         - "3000:3000"
       environment:
         - DATABASE_URL=postgresql://user:pass@db:5432/oauth
       depends_on:
         - db
       
     db:
       image: postgres:14
       environment:
         POSTGRES_DB: oauth
         POSTGRES_USER: user
         POSTGRES_PASSWORD: pass
       volumes:
         - postgres_data:/var/lib/postgresql/data
   
   volumes:
     postgres_data:
   ```

3. Test container networking:
   ```bash
   # From within app container
   ping db
   telnet db 5432
   ```

4. Check container logs:
   ```bash
   docker logs container-name
   docker exec -it container-name sh
   ```

**Prevention Tips:**
- Use multi-stage Docker builds
- Test Docker builds locally
- Implement proper health checks

---

## Environment Variable Problems

### Issue: Missing or Invalid Environment Variables

**Problem Description:**
Application fails to start due to missing or incorrectly configured environment variables.

**Symptoms:**
```bash
Error: GOOGLE_CLIENT_ID is required
Database connection string is invalid
AUTH_SECRET must be at least 32 characters
```

**Root Cause Analysis:**
- Environment variables not loaded
- Incorrect variable names
- Invalid variable values
- Environment file not found

**Step-by-step Solution:**
1. Create environment file template:
   ```bash
   # .env.example
   DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
   AUTH_SECRET="your-auth-secret-at-least-32-characters-long"
   GOOGLE_CLIENT_ID="your-google-client-id.apps.googleusercontent.com"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   NEXTAUTH_URL="http://localhost:3000"
   REDIS_URL="redis://localhost:6379" # Optional
   ```

2. Validate environment variables:
   ```typescript
   // lib/env.ts
   import { z } from 'zod';
   
   const envSchema = z.object({
     DATABASE_URL: z.string().url(),
     AUTH_SECRET: z.string().min(32),
     GOOGLE_CLIENT_ID: z.string().min(1),
     GOOGLE_CLIENT_SECRET: z.string().min(1),
     NEXTAUTH_URL: z.string().url().optional(),
     REDIS_URL: z.string().url().optional(),
   });
   
   export const env = envSchema.parse(process.env);
   ```

3. Check environment loading:
   ```bash
   # Verify variables are loaded
   node -e "console.log(process.env.DATABASE_URL)"
   ```

4. Test database connection string:
   ```bash
   # Parse and validate DATABASE_URL
   node -e "
   const url = new URL(process.env.DATABASE_URL);
   console.log('Host:', url.hostname);
   console.log('Database:', url.pathname.slice(1));
   console.log('User:', url.username);
   "
   ```

**Prevention Tips:**
- Use environment variable validation
- Document all required variables
- Use development-specific defaults where safe

**Related Issues:**
- [Common Setup Issues](#common-setup-issues)
- [Production Deployment Issues](#production-deployment-issues)

---

### Issue: Environment Variable Security

**Problem Description:**
Sensitive environment variables exposed or not properly secured.

**Symptoms:**
```bash
Secrets visible in logs
Environment variables in version control
Unauthorized access to configuration
```

**Root Cause Analysis:**
- Environment files committed to version control
- Secrets logged in plain text
- Insufficient access controls
- Shared development environments

**Step-by-step Solution:**
1. Audit version control:
   ```bash
   # Check if .env files are in git
   git ls-files | grep -E '\.(env|secret)'
   
   # Remove from version control if found
   git rm --cached .env
   echo ".env*" >> .gitignore
   ```

2. Scan for secrets in logs:
   ```bash
   # Search for potential secrets in logs
   grep -r "client_secret\|password\|key" logs/
   ```

3. Use secret management:
   ```bash
   # Use external secret management
   # AWS Secrets Manager, HashiCorp Vault, etc.
   export DATABASE_URL=$(aws secretsmanager get-secret-value --secret-id prod/database --query SecretString --output text)
   ```

4. Implement secret rotation:
   ```typescript
   // Implement regular secret rotation
   async function rotateSecrets() {
     // Generate new secrets
     // Update external services
     // Update application configuration
   }
   ```

**Prevention Tips:**
- Use secret scanning tools
- Implement least privilege access
- Regular secret rotation
- Audit access logs

---

## Debugging Tools and Techniques

### Development Debugging Tools

**Next.js Debug Mode:**
```bash
# Enable Next.js debugging
NODE_OPTIONS='--inspect' pnpm dev

# With specific debug port
NODE_OPTIONS='--inspect=9229' pnpm dev
```

**Database Debugging:**
```bash
# Prisma Studio for database inspection
pnpm prisma studio

# Database query logging
export DEBUG="prisma:query"
pnpm dev
```

**Network Debugging:**
```bash
# Monitor HTTP requests
curl -v http://localhost:3000/api/oauth/token

# WebSocket/SSE debugging
websocat ws://localhost:3000/mcp/sse
```

### Production Monitoring

**Health Check Endpoints:**
```typescript
// app/api/health/route.ts
export async function GET() {
  try {
    // Test database connectivity
    await prisma.$queryRaw`SELECT 1`;
    
    return NextResponse.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      services: {
        database: 'up',
        oauth: 'up'
      }
    });
  } catch (error) {
    return NextResponse.json({
      status: 'unhealthy',
      error: error.message
    }, { status: 503 });
  }
}
```

**Logging Configuration:**
```typescript
// lib/logger.ts
export const logger = {
  info: (message: string, meta?: any) => {
    console.log(JSON.stringify({
      timestamp: new Date().toISOString(),
      level: 'info',
      message,
      ...meta
    }));
  },
  error: (message: string, error?: Error, meta?: any) => {
    console.error(JSON.stringify({
      timestamp: new Date().toISOString(),
      level: 'error',
      message,
      error: error?.stack,
      ...meta
    }));
  }
};
```

**Performance Monitoring:**
```typescript
// middleware.ts
export function middleware(request: NextRequest) {
  const start = Date.now();
  
  const response = NextResponse.next();
  
  const duration = Date.now() - start;
  console.log(`${request.method} ${request.url} - ${duration}ms`);
  
  return response;
}
```

### Debugging Checklist

**When Encountering Issues:**
1. Check application logs first
2. Verify environment variables
3. Test database connectivity
4. Validate API endpoints manually
5. Review recent code changes
6. Check external service status
7. Monitor resource usage
8. Test in isolated environment

**Log Analysis Commands:**
```bash
# Search for errors
grep -i "error\|exception\|fail" logs/app.log

# Monitor logs in real-time
tail -f logs/app.log | grep -i "oauth\|mcp"

# Analyze request patterns
awk '{print $1}' access.log | sort | uniq -c | sort -nr

# Check response times
awk '{if($NF > 1000) print $0}' access.log
```

**Testing Commands:**
```bash
# Test OAuth flow
curl -X POST http://localhost:3000/api/oauth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Client","redirectUris":["http://localhost:8080/callback"]}'

# Test MCP authentication
curl -X POST http://localhost:3000/mcp/sse \
  -H "Authorization: Bearer your-token" \
  -H "Content-Type: application/json" \
  -d '{"method":"tools/list","params":{}}'

# Test database queries
psql $DATABASE_URL -c "SELECT COUNT(*) FROM \"User\";"
```

---

## Quick Reference

### Common Error Codes
- `invalid_client`: OAuth client not found or invalid credentials
- `invalid_grant`: Authorization code or refresh token invalid
- `unsupported_grant_type`: Grant type not supported
- `rate_limit_exceeded`: Too many requests
- `server_error`: Internal server error

### Important Log Locations
- Application logs: `console.log` output
- Database logs: PostgreSQL logs
- OAuth flows: API route console output
- MCP requests: MCP handler debug logs
- Security events: Analytics security table

### Emergency Procedures
1. **Database Issues**: Check PostgreSQL service, connection string, schema sync
2. **Authentication Failures**: Verify OAuth configuration, check token validity
3. **Performance Problems**: Monitor CPU/memory, check database queries
4. **Security Events**: Review security logs, check for attacks
5. **Deployment Issues**: Verify environment variables, test connectivity

### Support Resources
- PostgreSQL Documentation: https://www.postgresql.org/docs/
- NextAuth.js Guide: https://next-auth.js.org/
- Prisma Documentation: https://www.prisma.io/docs/
- OAuth 2.1 Specification: https://tools.ietf.org/html/draft-ietf-oauth-v2-1
- MCP Specification: https://modelcontextprotocol.io/

This troubleshooting guide should be regularly updated as new issues are discovered and resolved in the MCP OAuth server implementation.