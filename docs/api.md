# MCP OAuth Server API Reference

This document provides comprehensive documentation for the MCP OAuth 2.1 server API, including authentication, OAuth endpoints, MCP integration, analytics, and administrative functions.

## Table of Contents

1. [API Overview](#api-overview)
2. [Authentication Requirements](#authentication-requirements)
3. [OAuth 2.1 Endpoints](#oauth-21-endpoints)
4. [MCP Endpoints](#mcp-endpoints)
5. [Analytics Endpoints](#analytics-endpoints)
6. [Discovery Endpoints](#discovery-endpoints)
7. [Admin Endpoints](#admin-endpoints)
8. [Error Handling](#error-handling)
9. [Rate Limiting](#rate-limiting)
10. [Response Formats](#response-formats)
11. [Security Considerations](#security-considerations)
12. [Examples and Testing](#examples-and-testing)

## API Overview

The MCP OAuth server provides a comprehensive OAuth 2.1 authorization server with Model Context Protocol (MCP) integration. The server supports:

- **OAuth 2.1 Authorization Server**: Full OAuth 2.1 implementation with PKCE support
- **MCP Protocol Integration**: Authenticated MCP tool execution over SSE and HTTP
- **Analytics & Monitoring**: Comprehensive request tracking and security monitoring
- **Enterprise Features**: SSO integration, multi-tenant support, and admin controls

### Base URL

```
https://your-domain.com
```

### API Versioning

All endpoints use implicit versioning. The current API version is `v1`.

### Content Types

- **Request**: `application/json`, `application/x-www-form-urlencoded`
- **Response**: `application/json`

## Authentication Requirements

### Public Endpoints (No Authentication)

- Discovery endpoints (`.well-known/*`)
- OAuth client registration
- OAuth authorization and token endpoints
- Health check endpoints

### Authenticated Endpoints (Bearer Token Required)

- MCP endpoints (`/mcp/*`)
- Analytics endpoints (`/api/analytics/*`)
- Admin endpoints (`/api/cleanup`, `/api/test/*`)

### Authentication Methods

#### Bearer Token Authentication

```http
Authorization: Bearer <access_token>
```

#### NextAuth Session Authentication

Used for web UI and analytics dashboard access.

## OAuth 2.1 Endpoints

### Client Registration

Dynamic client registration following RFC 7591.

#### Register OAuth Client

```http
POST /api/oauth/register
Content-Type: application/json
```

**Request Body:**

```json
{
  "client_name": "My MCP Client",
  "redirect_uris": [
    "http://localhost:3000/callback",
    "https://myapp.com/oauth/callback"
  ]
}
```

**Response (201 Created):**

```json
{
  "client_id": "cluid123456789",
  "client_secret": "secret_abc123...",
  "redirect_uris": [
    "http://localhost:3000/callback",
    "https://myapp.com/oauth/callback"
  ]
}
```

**Error Responses:**

```json
{
  "error": "Missing required fields"
}
```

**cURL Example:**

```bash
curl -X POST https://your-domain.com/api/oauth/register \
  -H "Content-Type: application/json" \
  -d '{
    "client_name": "Test Client",
    "redirect_uris": ["http://localhost:3000/callback"]
  }'
```

### Authorization Endpoint

OAuth 2.1 authorization endpoint with PKCE support.

#### Authorize Request

```http
GET /oauth/authorize
```

**Query Parameters:**

| Parameter | Required | Description |
|-----------|----------|-------------|
| `client_id` | Yes | Client identifier |
| `redirect_uri` | Yes | Redirect URI (must match registered) |
| `response_type` | Yes | Must be `code` |
| `state` | Recommended | CSRF protection token |
| `code_challenge` | Optional | PKCE code challenge |
| `code_challenge_method` | Optional | `S256` or `plain` |
| `resource` | Optional | Target resource identifier |

**Example Request:**

```http
GET /oauth/authorize?client_id=cluid123&redirect_uri=http://localhost:3000/callback&response_type=code&state=xyz&code_challenge=abc123&code_challenge_method=S256
```

**Success Response:**

Redirect to `redirect_uri` with authorization code:

```http
HTTP/1.1 302 Found
Location: http://localhost:3000/callback?code=auth_code_123&state=xyz
```

**Error Response:**

Redirect to `redirect_uri` with error:

```http
HTTP/1.1 302 Found
Location: http://localhost:3000/callback?error=access_denied&state=xyz
```

### Token Endpoint

Exchange authorization code or refresh token for access tokens.

#### Token Exchange

```http
POST /api/oauth/token
Content-Type: application/x-www-form-urlencoded
```

**Authorization Code Grant:**

```
grant_type=authorization_code
&code=auth_code_123
&redirect_uri=http://localhost:3000/callback
&client_id=cluid123
&client_secret=secret_abc123
&code_verifier=verifier_xyz
&resource=https://your-domain.com
```

**Refresh Token Grant:**

```
grant_type=refresh_token
&refresh_token=refresh_abc123
&client_id=cluid123
&client_secret=secret_abc123
&resource=https://your-domain.com
```

**Success Response (200 OK):**

```json
{
  "access_token": "token_abc123...",
  "refresh_token": "refresh_xyz789...",
  "token_type": "Bearer",
  "expires_in": 300
}
```

**Error Responses:**

```json
{
  "error": "invalid_grant"
}
```

```json
{
  "error": "invalid_client"
}
```

**cURL Examples:**

```bash
# Authorization Code Grant
curl -X POST https://your-domain.com/api/oauth/token \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=authorization_code&code=auth_code_123&redirect_uri=http://localhost:3000/callback&client_id=cluid123&client_secret=secret_abc123&code_verifier=verifier_xyz"

# Refresh Token Grant
curl -X POST https://your-domain.com/api/oauth/token \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=refresh_token&refresh_token=refresh_abc123&client_id=cluid123&client_secret=secret_abc123"
```

## MCP Endpoints

Model Context Protocol endpoints for authenticated tool execution.

### MCP Server Endpoints

#### SSE Transport

```http
POST /mcp/sse
Authorization: Bearer <access_token>
Content-Type: application/json
```

#### HTTP Transport

```http
POST /mcp/mcp
Authorization: Bearer <access_token>
Content-Type: application/json
```

**Authentication:**

- Requires valid Bearer token in Authorization header
- Token audience validation enforced
- Token expiration checked

**Available Tools:**

1. **add_numbers** - Add two numbers
2. **calculate_circle_area** - Calculate circle area
3. **generate_random_number** - Generate random number in range
4. **format_text** - Format text (uppercase, lowercase, titlecase, reverse)
5. **check_prime_number** - Check if number is prime
6. **trigger_security_events** - Generate security events for testing

**Example Tool Call:**

```json
{
  "method": "tools/call",
  "params": {
    "name": "add_numbers",
    "arguments": {
      "a": 5,
      "b": 3
    }
  }
}
```

**Success Response:**

```json
{
  "content": [
    {
      "type": "text",
      "text": "The sum of 5 and 3 is 8"
    }
  ]
}
```

**Error Response (401 Unauthorized):**

```json
{
  "error": "Unauthorized"
}
```

**cURL Example:**

```bash
curl -X POST https://your-domain.com/mcp/sse \
  -H "Authorization: Bearer token_abc123..." \
  -H "Content-Type: application/json" \
  -d '{
    "method": "tools/call",
    "params": {
      "name": "add_numbers",
      "arguments": {"a": 5, "b": 3}
    }
  }'
```

### Authentication Middleware

All MCP endpoints include:

- **Token Validation**: Database lookup and expiration check
- **Audience Validation**: Ensures token is valid for current server
- **Security Logging**: Failed attempts logged for monitoring
- **Analytics**: Request metrics and tool usage tracking

## Analytics Endpoints

Comprehensive analytics and monitoring system.

### Analytics Data

#### Get Analytics Dashboard Data

```http
GET /api/analytics
Authorization: NextAuth Session Required
```

**Query Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `hours` | integer | 24 | Time range in hours (1-168) |

**Example Request:**

```http
GET /api/analytics?hours=72
```

**Success Response (200 OK):**

```json
{
  "performance": {
    "totalRequests": 1250,
    "averageResponseTime": 145.2,
    "successRate": 98.4,
    "activeUsers": 45
  },
  "topEndpoints": [
    {
      "endpoint": "/mcp/sse",
      "count": 856,
      "averageResponseTime": 120.5
    }
  ],
  "geography": {
    "byCountry": [
      {"country": "United States", "requestCount": 750},
      {"country": "Canada", "requestCount": 200}
    ]
  },
  "oauth": {
    "totalTokens": 123,
    "activeTokens": 89,
    "clients": [
      {
        "clientName": "Test Client",
        "requestCount": 456,
        "lastActivity": "2024-01-15T10:30:00Z"
      }
    ],
    "expiringTokens": 5,
    "grantTypes": [
      {"grantType": "authorization_code", "count": 100},
      {"grantType": "refresh_token", "count": 23}
    ]
  },
  "toolUsage": {
    "tools": [
      {
        "toolName": "add_numbers",
        "usageCount": 234,
        "uniqueUsers": 12,
        "averageResponseTime": 95.2
      }
    ],
    "totalCalls": 567,
    "activeUsers": 23
  },
  "security": {
    "totalEvents": 12,
    "criticalEvents": 2,
    "events": [
      {
        "eventType": "INVALID_TOKEN",
        "severity": "high",
        "timestamp": "2024-01-15T10:30:00Z",
        "details": "Token audience mismatch"
      }
    ]
  },
  "timeRange": "72 hours",
  "lastUpdated": "2024-01-15T12:00:00Z"
}
```

### Analytics Collection

#### Collect Analytics Data

```http
POST /api/analytics/collect
Content-Type: application/json
```

**Request Body:**

```json
{
  "timestamp": "2024-01-15T12:00:00Z",
  "endpoint": "/mcp/sse",
  "method": "POST",
  "statusCode": 200,
  "responseTime": 125,
  "clientId": "client_123",
  "userId": "user_456",
  "ipAddress": "192.168.1.100",
  "userAgent": "Mozilla/5.0...",
  "mcpMethod": "tools/call",
  "toolName": "add_numbers"
}
```

**Response (200 OK):**

```json
{
  "success": true
}
```

### Security Analytics

#### Get Security Analytics

```http
GET /api/analytics/security
```

**Query Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `days` | integer | 30 | Time range in days |

**Success Response:**

```json
{
  "success": true,
  "data": {
    "totalEvents": 45,
    "criticalEvents": 5,
    "eventsByType": [
      {"eventType": "INVALID_TOKEN", "count": 12},
      {"eventType": "RATE_LIMIT_EXCEEDED", "count": 8}
    ],
    "eventsBySeverity": [
      {"severity": "critical", "count": 5},
      {"severity": "high", "count": 15}
    ]
  },
  "timeRange": {
    "startDate": "2024-01-01T00:00:00Z",
    "endDate": "2024-01-15T12:00:00Z",
    "days": 30
  }
}
```

#### Log Security Event

```http
POST /api/analytics/security
Content-Type: application/json
```

**Request Body:**

```json
{
  "timestamp": "2024-01-15T12:00:00Z",
  "eventType": "INVALID_TOKEN",
  "ipAddress": "192.168.1.100",
  "userAgent": "curl/7.68.0",
  "clientId": "client_123",
  "details": "Token audience mismatch detected"
}
```

## Discovery Endpoints

OAuth 2.1 and MCP discovery metadata endpoints.

### OAuth Authorization Server Metadata

```http
GET /.well-known/oauth-authorization-server
```

**Response (200 OK):**

```json
{
  "issuer": "https://your-domain.com",
  "authorization_endpoint": "https://your-domain.com/oauth/authorize",
  "token_endpoint": "https://your-domain.com/api/oauth/token",
  "registration_endpoint": "https://your-domain.com/api/oauth/register",
  "scopes_supported": ["read", "write"],
  "response_types_supported": ["code"],
  "grant_types_supported": ["authorization_code", "refresh_token"],
  "code_challenge_methods_supported": ["S256", "plain"],
  "token_endpoint_auth_methods_supported": ["client_secret_post", "none"],
  "resource_parameter_supported": true
}
```

### OAuth Protected Resource Metadata

```http
GET /.well-known/oauth-protected-resource
```

**Response (200 OK):**

```json
{
  "resource": "https://your-domain.com",
  "authorization_servers": ["https://your-domain.com"],
  "scopes_supported": ["read", "write"],
  "bearer_methods_supported": ["header"],
  "mcp_endpoints": [
    "https://your-domain.com/mcp/mcp",
    "https://your-domain.com/mcp/sse"
  ]
}
```

## Admin Endpoints

Administrative endpoints for system maintenance and testing.

### Database Cleanup

#### Clean Expired Data

```http
POST /api/cleanup
```

**Success Response:**

```json
{
  "message": "Cleanup completed successfully",
  "deletedCount": 125
}
```

#### Get TTL Status

```http
GET /api/cleanup
```

**Success Response:**

```json
{
  "message": "TTL status retrieved successfully",
  "data": {
    "expiredTokens": 15,
    "expiredAnalytics": 250,
    "nextCleanup": "2024-01-16T00:00:00Z"
  }
}
```

### Security Event Testing

#### Generate Test Security Events

```http
POST /api/test/security-events
Content-Type: application/json
```

**Request Body:**

```json
{
  "eventType": "AUTH_FAILURE",
  "count": 5,
  "severity": "high"
}
```

**Available Event Types:**

- `AUTH_FAILURE` - Authentication failures
- `INVALID_TOKEN` - Token validation failures
- `SUSPICIOUS_ACTIVITY` - Suspicious user agents/behavior
- `RATE_LIMIT_EXCEEDED` - API rate limit violations
- `TOKEN_REUSE` - Cross-IP token usage
- `UNUSUAL_LOCATION` - Geographic anomalies
- `PRIVILEGE_ESCALATION` - OAuth scope escalation
- `BRUTE_FORCE_ATTEMPT` - Credential attacks
- `OAUTH_INVALID_CLIENT` - PKCE bypass attempts
- `OAUTH_INVALID_GRANT` - Missing resource parameters

**Success Response:**

```json
{
  "success": true,
  "message": "Generated 5 AUTH_FAILURE event(s)",
  "events": 5
}
```

#### Generate Advanced Threat Scenarios

```http
POST /api/analytics/generate-threats
Content-Type: application/json
```

**Request Body:**

```json
{
  "runDetection": true,
  "mockScenarios": [
    "privilege_escalation",
    "token_reuse",
    "rate_limit_exceeded",
    "oauth_pkce_bypass"
  ]
}
```

**Success Response:**

```json
{
  "success": true,
  "message": "SecurityMonitor detected and logged 8 realistic threats",
  "threatsDetected": 8,
  "scenarios": ["privilege_escalation", "token_reuse"]
}
```

## Error Handling

### Standard Error Response Format

All endpoints return errors in a consistent format:

```json
{
  "error": "error_code",
  "error_description": "Human readable error description",
  "details": "Additional error details (optional)"
}
```

### HTTP Status Codes

| Code | Meaning | Description |
|------|---------|-------------|
| 200 | OK | Successful request |
| 201 | Created | Resource created successfully |
| 400 | Bad Request | Invalid request parameters |
| 401 | Unauthorized | Authentication required |
| 403 | Forbidden | Insufficient permissions |
| 404 | Not Found | Resource not found |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Internal Server Error | Server error |

### OAuth Error Codes

| Error Code | Description |
|------------|-------------|
| `invalid_request` | Missing or invalid request parameters |
| `invalid_client` | Client authentication failed |
| `invalid_grant` | Authorization code/refresh token invalid |
| `unsupported_grant_type` | Grant type not supported |
| `invalid_scope` | Requested scope invalid |
| `server_error` | Internal server error |

### MCP Error Responses

```json
{
  "error": "Unauthorized",
  "message": "Invalid or expired access token"
}
```

## Rate Limiting

### Rate Limiting Policy

The server implements rate limiting on sensitive endpoints:

- **OAuth Endpoints**: 30 requests per minute per IP
- **MCP Endpoints**: 100 requests per minute per token
- **Analytics Endpoints**: 10 requests per minute per session

### Rate Limit Headers

```http
X-RateLimit-Limit: 30
X-RateLimit-Remaining: 25
X-RateLimit-Reset: 1642176000
```

### Rate Limit Exceeded Response

```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json

{
  "error": "rate_limit_exceeded",
  "error_description": "Rate limit exceeded. Try again later.",
  "retry_after": 60
}
```

## Response Formats

### Successful Responses

All successful responses include appropriate HTTP status codes and JSON payloads.

### Pagination

Large result sets use cursor-based pagination:

```json
{
  "data": [...],
  "pagination": {
    "next_cursor": "cursor_abc123",
    "has_more": true,
    "total_count": 1250
  }
}
```

### Timestamps

All timestamps use ISO 8601 format in UTC:

```json
{
  "created_at": "2024-01-15T12:00:00.000Z",
  "expires_at": "2024-01-15T13:00:00.000Z"
}
```

## Security Considerations

### Token Security

- **Access tokens** expire in 5 minutes (configurable)
- **Refresh tokens** expire in 7 days
- **Audience validation** prevents token misuse across servers
- **Token rotation** for public clients per OAuth 2.1

### PKCE Requirements

- **Public clients** MUST use PKCE
- **Confidential clients** SHOULD use PKCE
- **Code challenge methods**: S256 (recommended), plain (legacy)

### Security Monitoring

The server includes comprehensive security monitoring:

- **Authentication failures** - Failed login attempts
- **Token violations** - Invalid/expired token usage
- **Audience violations** - Cross-server token usage
- **Rate limit violations** - API abuse detection
- **Privilege escalation** - Unusual scope requests
- **Geographic anomalies** - Unusual location access
- **User agent detection** - Bot/automation detection

### CORS Configuration

```javascript
{
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization"
}
```

### Data Protection

- **Analytics data** TTL: 14 days
- **Security events** TTL: 14 days
- **Access tokens** stored hashed
- **Client secrets** should be hashed (demo stores plaintext)

## Examples and Testing

### Complete OAuth Flow Example

1. **Register Client:**

```bash
curl -X POST https://your-domain.com/api/oauth/register \
  -H "Content-Type: application/json" \
  -d '{"client_name": "Test App", "redirect_uris": ["http://localhost:3000/callback"]}'
```

2. **Generate PKCE Values:**

```javascript
// Generate code verifier and challenge
const codeVerifier = base64URLEncode(crypto.randomBytes(32));
const codeChallenge = base64URLEncode(crypto.createHash('sha256').update(codeVerifier).digest());
```

3. **Authorization Request:**

```
https://your-domain.com/oauth/authorize?client_id=CLIENT_ID&redirect_uri=http://localhost:3000/callback&response_type=code&state=STATE&code_challenge=CODE_CHALLENGE&code_challenge_method=S256
```

4. **Token Exchange:**

```bash
curl -X POST https://your-domain.com/api/oauth/token \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=authorization_code&code=AUTH_CODE&redirect_uri=http://localhost:3000/callback&client_id=CLIENT_ID&client_secret=CLIENT_SECRET&code_verifier=CODE_VERIFIER"
```

5. **Use MCP Endpoint:**

```bash
curl -X POST https://your-domain.com/mcp/sse \
  -H "Authorization: Bearer ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"method": "tools/call", "params": {"name": "add_numbers", "arguments": {"a": 5, "b": 3}}}'
```

### Testing Security Features

Generate test security events:

```bash
curl -X POST https://your-domain.com/api/test/security-events \
  -H "Content-Type: application/json" \
  -d '{"eventType": "INVALID_TOKEN", "count": 3}'
```

Run advanced threat detection:

```bash
curl -X POST https://your-domain.com/api/analytics/generate-threats \
  -H "Content-Type: application/json" \
  -d '{"runDetection": true, "mockScenarios": ["privilege_escalation", "token_reuse"]}'
```

### Postman Collection

A Postman collection is available with pre-configured requests for all endpoints:

- OAuth client registration and token flows
- MCP tool execution examples
- Analytics and security testing
- Admin operations

Import the collection URL:
```
https://your-domain.com/postman/mcp-oauth-collection.json
```

### Development Tools

- **Prisma Studio**: Database management UI
- **Analytics Dashboard**: Real-time monitoring at `/analytics`
- **Security Dashboard**: Security events and threat detection
- **Health Checks**: Server status and database connectivity

---

## API Reference Summary

This MCP OAuth server provides a production-ready OAuth 2.1 authorization server with comprehensive MCP integration, enterprise-grade analytics, and advanced security monitoring. The API supports both public and confidential clients, implements PKCE for enhanced security, and provides detailed observability for production deployments.

For additional support and advanced configuration options, refer to the other documentation files in the `/docs` directory.