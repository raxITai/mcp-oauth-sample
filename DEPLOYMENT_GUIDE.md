# Deployment Guide: MCP OAuth Fixes

## 🚀 Quick Deployment Steps

### 1. Database Migration
Since we added new fields to the schema, update your database:

```bash
# Update the database schema
pnpm prisma db push

# Verify the changes
pnpm prisma studio
```

### 2. Deploy to Vercel
```bash
# Commit your changes
git add .
git commit -m "feat: Add MCP-compliant OAuth discovery and resource binding"

# Push to trigger Vercel deployment
git push origin main
```

### 3. Test Discovery Endpoints
After deployment, verify the new endpoints work:

```bash
# Replace YOUR_DOMAIN with your actual domain
export DOMAIN="https://mcp-oauth-sample.vercel.app"

# Test authorization server metadata
curl $DOMAIN/.well-known/oauth-authorization-server | jq

# Test protected resource metadata  
curl $DOMAIN/.well-known/oauth-protected-resource | jq

# Test registration endpoint
curl -X POST $DOMAIN/register \
  -H "Content-Type: application/json" \
  -d '{"client_name": "Test Client", "redirect_uris": ["http://localhost:3000/callback"]}' | jq
```

### 4. Test MCP Authentication Flow
```bash
# Test unauthenticated request (should return 401 with WWW-Authenticate header)
curl -i $DOMAIN/mcp/mcp

# Expected response should include:
# HTTP/1.1 401 Unauthorized
# WWW-Authenticate: Bearer realm="...", resource_metadata="..."
```

## 🔧 Files Created/Modified

### New Files:
- ✅ `app/.well-known/oauth-authorization-server/route.ts`
- ✅ `app/.well-known/oauth-protected-resource/route.ts`  
- ✅ `app/register/route.ts`
- ✅ `MCP_IMPLEMENTATION_ANALYSIS.md`

### Modified Files:
- ✅ `prisma/schema.prisma` (added resource fields)
- ✅ `app/mcp/[transport]/route.ts` (added WWW-Authenticate header & audience validation)
- ✅ `app/oauth/authorize/page.tsx` (added resource parameter support)
- ✅ `app/api/oauth/token/route.ts` (added resource parameter handling)

## 🧪 Testing with MCP Clients

### Cursor MCP Configuration
Update your MCP client config to use your server:

```json
{
  "mcpServers": {
    "raxIT-OAuth-Sample": {
      "name": "raxIT MCP OAuth Sample",
      "url": "https://mcp-oauth-sample.vercel.app/mcp/mcp",
      "transport": "http-stream"
    }
  }
}
```

### Expected Behavior:
1. **First Request**: Client gets 401 with WWW-Authenticate header
2. **Discovery**: Client fetches `/.well-known/oauth-protected-resource`
3. **Server Metadata**: Client fetches `/.well-known/oauth-authorization-server` 
4. **Registration**: Client registers via `/register`
5. **Authorization**: User consent flow via `/oauth/authorize`
6. **Token Exchange**: Client exchanges code for access token
7. **MCP Access**: Client uses token to access MCP endpoints

## 🔍 Debugging Common Issues

### Issue: Discovery endpoints return 404
**Solution**: Make sure you've deployed all new files to Vercel

### Issue: Database errors with new fields
**Solution**: Run `pnpm prisma db push` to update your database schema

### Issue: Token audience validation fails
**Check**: Ensure your `NODE_ENV` and hostname are set correctly for protocol detection

### Issue: CORS errors
**Check**: All endpoints include proper CORS headers for cross-origin requests

## 📊 Monitoring & Logs

After deployment, monitor your Vercel function logs for:

### Successful Flow:
```
[MCP] Auth header present: true
[MCP] Access token found: true
[MCP] Authentication successful, audience validated
```

### Discovery Requests:
```
GET /.well-known/oauth-authorization-server → 200
GET /.well-known/oauth-protected-resource → 200  
POST /register → 200
```

### Failed Authentication:
```
[MCP] No auth header, returning 401
[MCP] Token audience mismatch. Expected: https://... Got: https://...
```

## 🎯 Success Criteria

Your implementation is working correctly when:
- ✅ All discovery endpoints return 200 with proper JSON
- ✅ MCP clients can complete full OAuth flow
- ✅ Tokens are properly validated for audience
- ✅ No more 404 errors in logs for well-known endpoints
- ✅ MCP tools are accessible after authentication

## 🔄 Rollback Plan

If you encounter issues, you can rollback by:

1. **Revert Git Changes**:
   ```bash
   git revert HEAD
   git push origin main
   ```

2. **Database Rollback** (if needed):
   ```bash
   # Remove new columns (optional - they won't break anything if left)
   # ALTER TABLE "AuthCode" DROP COLUMN IF EXISTS "resource";
   # ALTER TABLE "AccessToken" DROP COLUMN IF EXISTS "resource";
   ```

Your MCP OAuth implementation should now be fully compliant with the specification! 🚀 