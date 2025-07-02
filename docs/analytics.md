# Analytics Dashboard Documentation

## Overview

The MCP OAuth Analytics Dashboard provides comprehensive monitoring and insights for your OAuth 2.1 server and MCP (Model Context Protocol) infrastructure. This real-time analytics system tracks user activity, security events, OAuth flows, MCP tool usage, and performance metrics to help you understand and optimize your system.

## Dashboard Features and Sections

### Main Dashboard Structure

The analytics dashboard is organized into three expandable sections:

1. **OAuth Metrics** - Authentication and client management insights
2. **Security Overview** - Real-time threat detection and monitoring
3. **Performance & Tools** - MCP tool usage and response metrics

### Dashboard Access Control

- **Admin Authentication Required**: Only users with Gmail addresses listed in `ADMIN_EMAIL` environment variable can access the dashboard
- **Session-based Security**: Uses NextAuth.js for secure authentication
- **Real-time Updates**: Dashboard refreshes automatically and supports manual refresh

## Metrics and KPIs

### OAuth Metrics

#### User Metrics
- **Total Users**: Count of users who have authorized OAuth clients
- **Active Users**: Users with valid, non-expired access tokens
- **User Activity Rate**: Percentage of users currently active (active/total)

#### Client Metrics
- **Total Clients**: All registered OAuth clients
- **Active Clients**: Clients with active tokens
- **Client Activity**: Detailed per-client statistics

#### Token Metrics
- **Active Tokens**: Currently valid access tokens
- **Recent Authorizations**: New OAuth flows in selected time period
- **Token Refresh Rate**: Rate of token refresh operations per hour
- **PKCE Adoption**: Percentage of flows using PKCE security enhancement

#### Grant Type Distribution
- Tracks usage patterns of different OAuth grant types
- Monitors compliance with OAuth 2.1 security requirements

### Performance Analytics

#### Response Time Metrics
- **Average Response Time**: Mean response time across all requests
- **95th Percentile (P95)**: Response time for 95% of requests
- **Error Rate**: Percentage of requests returning 4xx/5xx status codes

#### Request Analytics
- **Total Requests**: Volume of API requests
- **Top Endpoints**: Most frequently accessed endpoints
- **Geographic Distribution**: Request origins by country/city

## Security Analytics

### Threat Detection System

The security monitoring system uses the `SecurityMonitor` class to detect various threats in real-time:

#### Security Event Types

1. **AUTH_FAILURE** - Authentication failures
2. **INVALID_TOKEN** - Token validation failures
3. **SUSPICIOUS_ACTIVITY** - Unusual behavior patterns
4. **RATE_LIMIT_EXCEEDED** - Request rate violations
5. **UNAUTHORIZED_ACCESS** - Access to restricted resources
6. **TOKEN_REUSE** - Token usage from multiple IPs
7. **UNUSUAL_LOCATION** - Access from new geographic locations
8. **PRIVILEGE_ESCALATION** - Attempts to gain elevated permissions
9. **MALFORMED_REQUEST** - Invalid request structures
10. **BRUTE_FORCE_ATTEMPT** - Multiple failed authentication attempts
11. **OAUTH_INVALID_CLIENT** - Invalid OAuth client credentials
12. **OAUTH_INVALID_GRANT** - Invalid OAuth grant usage
13. **OAUTH_INVALID_SCOPE** - Invalid scope requests

#### Risk Scoring

Each security event includes a risk score (0-100):
- **0-30**: Low risk (informational)
- **31-69**: Medium risk (requires monitoring)
- **70-89**: High risk (requires attention)
- **90-100**: Critical risk (immediate action required)

#### Advanced Threat Detection

1. **Rate Limiting Detection**
   - Monitors request frequency per IP address
   - Default threshold: 30 requests per minute
   - Dynamic risk scoring based on excess requests

2. **Token Reuse Detection**
   - Tracks token usage across different IP addresses
   - Detects potential token theft or sharing

3. **Privilege Escalation Detection**
   - Monitors OAuth scope changes over time
   - Detects attempts to access elevated permissions
   - Analyzes historical scope patterns

4. **OAuth-Specific Threats**
   - Token audience validation violations
   - PKCE bypass attempts
   - Missing resource parameters
   - Cross-service token usage

## OAuth Metrics

### Client Activity Monitoring

The dashboard tracks detailed client activity including:

- **Unique Users**: Number of distinct users per client
- **Active Tokens**: Current valid tokens per client
- **Recent Requests**: Request volume in selected time period
- **Last Activity**: Timestamp of most recent client usage
- **User Names**: List of users associated with each client

### Token Expiration Tracking

Monitors tokens approaching expiration:
- **Client Name**: Which client owns the expiring tokens
- **Token Count**: Number of tokens expiring
- **Hours Until Expiry**: Time remaining before expiration

### Grant Type Analysis

Tracks OAuth grant type usage patterns:
- **Authorization Code**: Standard OAuth flow usage
- **Refresh Token**: Token refresh operations
- **Client Credentials**: Service-to-service authentication

## Performance Analytics

### MCP Tool Usage

#### Tool Metrics
- **Tool Name**: MCP tool identifier
- **MCP Method**: Specific method called (e.g., "tools/call", "tools/list")
- **Usage Count**: Total number of calls
- **Unique Users**: Distinct users accessing the tool
- **Average Response Time**: Mean response time in milliseconds
- **Error Rate**: Percentage of failed calls

#### Geographic Usage
- **Country/City**: Geographic distribution of tool usage
- **Call Count**: Number of calls from each location
- **Percentage**: Relative usage distribution

#### Time Series Analysis
- **Hourly Response Times**: Response time trends over time
- **Call Volume**: Request patterns throughout the day
- **Performance Percentiles**: P50, P95 response time tracking

## Data Collection and Storage

### Database Schema

The analytics system uses PostgreSQL with the following key tables:

#### AnalyticsRequest
Primary table for request tracking with automatic TTL (14 days):

```sql
- id: Unique identifier
- timestamp: Request timestamp (indexed)
- endpoint: API endpoint accessed
- method: HTTP method
- statusCode: Response status
- responseTime: Response time in ms
- clientId/userId: Request context (indexed)
- mcpServerId: MCP server context
- ipAddress: Client IP (geographic enrichment)
- userAgent: Client user agent
- scopes: OAuth scopes (array)
- oauthGrantType: OAuth flow type
- usePKCE: PKCE usage flag
- expiresAt: TTL expiration (indexed)
```

#### AnalyticsSecurity
Security events with risk scoring:

```sql
- id: Unique identifier
- timestamp: Event timestamp (indexed)
- eventType: Security event type (enum)
- severity: Event severity level
- riskScore: Risk score (0-100)
- userId/clientId: Context (indexed)
- ipAddress: Source IP
- details: JSON event details
- resolved: Resolution status
- expiresAt: TTL expiration
```

#### MCPServer
MCP server registry:

```sql
- id: Unique identifier
- name: Human-readable name
- identifier: MCP protocol identifier
- description: Optional description
- version: Server version
```

### Data Retention Policy

- **Request Data**: 14-day TTL via database triggers
- **Security Events**: 14-day TTL for non-critical events
- **Critical Events**: Extended retention for compliance
- **Automatic Cleanup**: Database handles expiration via TTL fields

## Real-time Processing

### Batched Collection System

The `OptimizedAnalyticsCollector` provides high-performance data collection:

#### Batching Strategy
- **Batch Size**: 100 records per database write
- **Flush Interval**: 15 seconds for regular batches
- **Immediate Flush**: For MCP tool calls (debugging)
- **Connection Pooling**: Efficient database connection management

#### Performance Optimizations
- **Non-blocking Writes**: Analytics collection doesn't slow down requests
- **Asynchronous Processing**: Geographic enrichment happens in background
- **Connection Management**: Database transactions for batch operations
- **Error Resilience**: Failed batches are retried with limits

### Geographic Enrichment

IP addresses are enriched with geographic data:
- **External API**: Uses ip-api.com for geolocation
- **Caching**: Results cached to reduce API calls
- **Fallback**: Mock data for localhost development
- **Timeout Handling**: Quick timeouts prevent request delays

## Customization and Configuration

### Environment Variables

Required configuration:
```bash
DATABASE_URL=postgresql://...     # PostgreSQL connection
ADMIN_EMAIL=admin@example.com    # Dashboard access control
AUTH_SECRET=your-secret-key      # NextAuth secret
GOOGLE_CLIENT_ID=...             # OAuth provider
GOOGLE_CLIENT_SECRET=...         # OAuth provider
```

### Time Range Selection

Dashboard supports multiple time ranges:
- Last 1 hour
- Last 6 hours
- Last 24 hours (default)
- Last 3 days
- Last 7 days

### Metric Thresholds

Configurable alerting thresholds:
- **Error Rate**: >5% critical, >1% warning
- **Response Time**: >1000ms critical, >500ms warning
- **PKCE Adoption**: <50% generates warning
- **Rate Limiting**: 30 requests/minute threshold

## API Endpoints for Analytics

### Primary Analytics Endpoint

```http
GET /api/analytics?hours=24
```

**Parameters:**
- `hours`: Time range (1-168 hours)

**Response:**
```json
{
  "performance": {
    "totalRequests": 1234,
    "avgResponseTime": 245,
    "p95ResponseTime": 890,
    "errorRate": 1.2
  },
  "oauth": {
    "totalUsers": 45,
    "activeUsers": 32,
    "totalClients": 8,
    "activeTokens": 67,
    "pkceAdoption": 89.5,
    "clients": [...],
    "expiringTokens": [...]
  },
  "security": {
    "totalEvents": 3,
    "criticalEvents": 0,
    "highRiskEvents": 1,
    "eventsByOrganization": [...],
    "privilegeEscalations": [...]
  },
  "toolUsage": {
    "tools": [...],
    "geographic": [...],
    "timeSeries": [...],
    "totalCalls": 456,
    "activeUsers": 23
  }
}
```

### Security Analytics Endpoint

```http
GET /api/analytics/security?days=30
```

**Parameters:**
- `days`: Number of days for security analysis

### Data Collection Endpoints

```http
POST /api/analytics/collect
Content-Type: application/json

{
  "timestamp": "2024-01-01T10:00:00Z",
  "endpoint": "/mcp/sse",
  "method": "GET",
  "statusCode": 200,
  "responseTime": 234,
  "clientId": "client-123",
  "userId": "user-456",
  "ipAddress": "192.168.1.1",
  "userAgent": "MCP-Client/1.0",
  "mcpMethod": "tools/call",
  "toolName": "add_numbers"
}
```

```http
POST /api/analytics/security
Content-Type: application/json

{
  "timestamp": "2024-01-01T10:00:00Z",
  "eventType": "RATE_LIMIT_EXCEEDED",
  "severity": "medium",
  "ipAddress": "192.168.1.100",
  "userAgent": "suspicious-client",
  "details": {
    "requestCount": 45,
    "timeWindow": 60000
  },
  "riskScore": 75
}
```

### Threat Generation Endpoint (Development)

```http
POST /api/analytics/generate-threats
Content-Type: application/json

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

## Exporting Data

### Data Export Options

1. **CSV Export**: Dashboard tables can be exported via browser
2. **API Access**: All data accessible via REST endpoints
3. **Database Direct**: PostgreSQL direct access for reporting tools
4. **Time Series**: Granular data for external monitoring systems

### Integration Capabilities

- **SIEM Integration**: Security events can be forwarded to SIEM systems
- **Monitoring Tools**: Metrics compatible with Prometheus/Grafana
- **Alerting Systems**: Webhook support for critical events
- **Business Intelligence**: SQL-accessible data for BI tools

## Troubleshooting Analytics

### Common Issues

#### Dashboard Not Loading
```bash
# Check admin email configuration
echo $ADMIN_EMAIL

# Verify database connection
npm run prisma:studio

# Check authentication
# Visit /api/auth/signin
```

#### Missing Data
```bash
# Verify data collection
curl -X POST http://localhost:3000/api/analytics/collect \
  -H "Content-Type: application/json" \
  -d '{"timestamp":"2024-01-01T10:00:00Z","endpoint":"/test","method":"GET","statusCode":200,"responseTime":100,"ipAddress":"127.0.0.1","userAgent":"test"}'

# Check database
npm run prisma:studio
# Look for AnalyticsRequest records
```

#### Performance Issues
```bash
# Check database indexes
psql $DATABASE_URL -c "\d+ AnalyticsRequest"

# Monitor batch processing
# Look for analytics logs in application output

# Check TTL cleanup
psql $DATABASE_URL -c "SELECT COUNT(*) FROM \"AnalyticsRequest\" WHERE \"expiresAt\" < NOW();"
```

### Database Maintenance

#### Manual Cleanup
```sql
-- Remove expired records
DELETE FROM "AnalyticsRequest" WHERE "expiresAt" < NOW();
DELETE FROM "AnalyticsSecurity" WHERE "expiresAt" < NOW();

-- Check table sizes
SELECT 
  schemaname,
  tablename,
  pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) as size
FROM pg_tables 
WHERE schemaname = 'public'
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;
```

#### Performance Tuning
```sql
-- Analyze query performance
EXPLAIN ANALYZE SELECT * FROM "AnalyticsRequest" 
WHERE timestamp >= NOW() - INTERVAL '24 hours';

-- Rebuild indexes if needed
REINDEX TABLE "AnalyticsRequest";
```

### Security Monitoring Issues

#### False Positives
- Adjust risk scoring thresholds in `SecurityMonitor` class
- Update suspicious user agent patterns
- Configure location whitelist for known VPN usage

#### Missing Events
- Verify SecurityMonitor integration in MCP endpoints
- Check event type mappings in security collection
- Ensure proper context passing to detection system

## Best Practices

### Performance
- Monitor database size and implement additional cleanup if needed
- Use connection pooling for high-traffic deployments
- Consider read replicas for analytics queries in production

### Security
- Regularly review security event patterns
- Set up alerting for critical events
- Monitor privilege escalation attempts closely
- Keep PKCE adoption rates high (>90%)

### Monitoring
- Set up external monitoring for the analytics system itself
- Monitor dashboard performance and availability
- Track data collection success rates
- Alert on analytics system failures

This analytics system provides comprehensive visibility into your MCP OAuth infrastructure, enabling proactive monitoring, security threat detection, and performance optimization.