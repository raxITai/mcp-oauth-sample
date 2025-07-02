# MCP OAuth Sample - Enhanced Implementation

A production-ready MCP (Model Context Protocol) OAuth 2.1 server implementation built with Next.js 15, providing secure authentication and analytics for MCP clients.

## Overview

This project was built using [run-llama/mcp-nextjs](https://github.com/run-llama/mcp-nextjs) as a reference implementation and significantly enhanced to be fully compliant with the [MCP Authorization Specification](./SPEC_MCP_AUTHZ.md).

### Key Enhancements

✅ **OAuth 2.1 Compliance** - Full implementation of MCP authorization specification  
✅ **OAuth Refresh Tokens** - Automatic token refresh for seamless user experience  
✅ **DIY Analytics Dashboard** - Real-time analytics with security monitoring  
✅ **Enhanced Security** - Comprehensive threat detection and monitoring  

## Quick Start

```bash
# Install dependencies
pnpm install

# Setup environment variables (see docs/setup.md)
cp .env.example .env

# Setup database
pnpm prisma generate
pnpm prisma db push

# Start development server
pnpm dev
```

## Screenshots

*// TODO: Add screenshots of analytics dashboard, OAuth flow, etc.*

## Features

- **Complete OAuth 2.1 Server** with PKCE and refresh token support
- **MCP Authorization Flow** compliant with latest MCP specification
- **Analytics Dashboard** with real-time security monitoring
- **Google Authentication** integration via NextAuth.js
- **Dynamic Client Registration** for seamless MCP client onboarding
- **Security Monitoring** with threat detection and alerting
- **PostgreSQL Database** with automated cleanup and TTL management

## Documentation

| Topic | Description |
|-------|-------------|
| [🚀 Setup Guide](./docs/setup.md) | Complete installation and configuration |
| [🏗️ Architecture](./docs/architecture.md) | Technical architecture and design |
| [🔒 Security](./docs/security.md) | Security features and threat monitoring |
| [📊 Analytics](./docs/analytics.md) | Dashboard features and metrics |
| [🚀 Deployment](./docs/deployment.md) | Production deployment guide |
| [🛠️ API Reference](./docs/api.md) | Complete API documentation |
| [❓ Troubleshooting](./docs/troubleshooting.md) | Common issues and solutions |
| [👨‍💻 Development](./docs/development.md) | Development guide and contributing |

## MCP Specification Compliance

This implementation is fully compliant with the MCP Authorization Specification. For detailed analysis of the implementation and differences from the reference project, see [MCP_IMPLEMENTATION_ANALYSIS.md](./MCP_IMPLEMENTATION_ANALYSIS.md).

### What Makes This Different

- **Discovery Endpoints** - Proper RFC 8414 and RFC 9728 implementation
- **Resource Parameter Support** - RFC 8707 Resource Indicators implementation  
- **Token Audience Validation** - Strict security boundary enforcement
- **Refresh Token Flow** - OAuth 2.1 compliant token refresh
- **WWW-Authenticate Headers** - Proper 401 response handling
- **Dynamic Client Registration** - RFC 7591 support for MCP clients

## Quick Links

- **Live Demo**: [mcp-oauth-sample.vercel.app](https://mcp-oauth-sample.vercel.app)
- **Analytics Dashboard**: `/analytics` (requires admin access)
- **MCP Endpoints**: 
  - SSE: `/mcp/sse`
  - HTTP: `/mcp/mcp`
- **OAuth Discovery**: `/.well-known/oauth-authorization-server`

## MCP Client Integration

### For Claude Desktop/Web
```json
{
  "mcpServers": {
    "raxIT-oauth": {
      "url": "https://your-domain.com/mcp/sse",
      "transport": "sse"
    }
  }
}
```

### For Cursor
```json
{
  "mcpServers": {
    "raxIT-oauth": {
      "url": "https://your-domain.com/mcp/mcp", 
      "transport": "http-stream"
    }
  }
}
```

## Contributing

This project is actively maintained by raxIT AI. We welcome contributions and feedback.

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - See [LICENSE](./LICENSE) file for details.

## Support

- **Issues**: [GitHub Issues](https://github.com/your-org/mcp-oauth-sample/issues)
- **Documentation**: [docs/](./docs/)
- **Implementation Analysis**: [MCP_IMPLEMENTATION_ANALYSIS.md](./MCP_IMPLEMENTATION_ANALYSIS.md)

---

**Built with ❤️ by [raxIT AI](https://raxit.ai)**

*Based on [run-llama/mcp-nextjs](https://github.com/run-llama/mcp-nextjs) with significant enhancements for production use.*