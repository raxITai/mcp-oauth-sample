# MCP OAuth Sample Documentation

<div class="status-indicator online">
  <span>🟢</span>
  <span>Live Demo Available</span>
</div>

Welcome to the comprehensive documentation for the MCP OAuth Sample project - a production-ready OAuth 2.1 authorization server with Model Context Protocol (MCP) integration.

!!! info "What is MCP OAuth Sample?"
    
    This project extends the [run-llama/mcp-nextjs](https://github.com/run-llama/mcp-nextjs) reference implementation with OAuth 2.1 compliance, refresh tokens, DIY analytics, and enhanced security monitoring.

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

<div class="feature-grid">
  <div class="feature-card">
    <h3>🔐 OAuth 2.1 Compliance</h3>
    <p>Full OAuth 2.1 authorization server with PKCE support, refresh token rotation, and resource indicators.</p>
  </div>
  
  <div class="feature-card">
    <h3>🔌 MCP Integration</h3>
    <p>Authenticated Model Context Protocol server with tool execution and transport support.</p>
  </div>
  
  <div class="feature-card">
    <h3>📊 DIY Analytics</h3>
    <p>Real-time analytics dashboard with performance metrics, user tracking, and OAuth insights.</p>
  </div>
  
  <div class="feature-card">
    <h3>🛡️ Security Monitoring</h3>
    <p>Comprehensive threat detection, security event logging, and risk assessment.</p>
  </div>
  
  <div class="feature-card">
    <h3>🚀 Production Ready</h3>
    <p>Built with Next.js 15, PostgreSQL, Prisma ORM, and optimized for Vercel deployment.</p>
  </div>
  
  <div class="feature-card">
    <h3>🔗 Google SSO</h3>
    <p>Integrated Google authentication with NextAuth.js and multi-admin support.</p>
  </div>
</div>

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