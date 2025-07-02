# MCP OAuth Sample Documentation

Welcome to the comprehensive documentation for the MCP OAuth Sample project - an OAuth 2.1 authorization server with Model Context Protocol (MCP) integration.

## Quick Navigation

### Getting Started
- **[Setup Guide](./setup.md)** - Complete installation and configuration instructions
- **[Architecture Overview](./architecture.md)** - System design and component relationships

### Implementation Details
- **[Security Features](./security.md)** - OAuth 2.1 security implementation and monitoring
- **[Analytics Dashboard](./analytics.md)** - Real-time monitoring and metrics
- **[API Reference](./api.md)** - Complete API documentation with examples

### Operations
- **[Deployment Guide](./deployment.md)** - Production deployment strategies
- **[Development Guide](./development.md)** - Local development and testing
- **[Troubleshooting](./troubleshooting.md)** - Common issues and solutions

## About This Project

This project extends the [run-llama/mcp-nextjs](https://github.com/run-llama/mcp-nextjs) reference implementation with:

- **OAuth 2.1 with Refresh Tokens** - Full authorization server with PKCE support
- **DIY Analytics Dashboard** - Real-time monitoring and security analytics
- **Enhanced Security** - Comprehensive threat detection and monitoring
- **Production Ready** - Complete deployment and operations documentation

## Key Features

- ✅ OAuth 2.1 Authorization Server with PKCE
- ✅ MCP Server with Authentication
- ✅ Real-time Analytics Dashboard
- ✅ Security Monitoring & Threat Detection
- ✅ Google SSO Integration
- ✅ PostgreSQL with Prisma ORM
- ✅ Next.js 15 App Router
- ✅ Production Deployment Ready

## Quick Start

```bash
# Clone and install
git clone <your-repo-url>
cd mcp-oauth-sample
pnpm install

# Setup environment
cp .env.example .env
# Edit .env with your configuration

# Setup database
pnpm prisma generate
pnpm prisma db push

# Start development
pnpm dev
```

## Support

- **GitHub Issues**: Report bugs and request features
- **Documentation**: Complete guides in this docs directory
- **Community**: Join our discussions

---

Built with ❤️ using Next.js, OAuth 2.1, and MCP Protocol