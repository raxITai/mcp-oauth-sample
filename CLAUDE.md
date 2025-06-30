# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an MCP (Model Context Protocol) OAuth 2.1 server implementation built with Next.js 15, providing secure authentication for MCP clients. The application serves as an OAuth authorization server that enables MCP clients to authenticate users and access protected MCP resources.

## Core Architecture

### Authentication Flow
- **NextAuth.js**: Handles user authentication via Google OAuth provider
- **OAuth 2.1 Server**: Custom implementation with PKCE support for MCP client authorization
- **Database**: PostgreSQL with Prisma ORM storing OAuth clients, tokens, and user sessions
- **MCP Integration**: Uses `@vercel/mcp-adapter` for MCP protocol handling

### Key Components
- `app/auth.ts`: NextAuth configuration with Google provider and Prisma adapter
- `app/api/oauth/`: OAuth 2.1 server endpoints (register, token, authorize)
- `app/mcp/[transport]/route.ts`: MCP server with authentication middleware
- `prisma/schema.prisma`: Database schema for OAuth entities and NextAuth models

### Database Schema
The Prisma schema includes:
- NextAuth models (User, Account, Session, VerificationToken)
- OAuth 2.1 models (Client, AccessToken, AuthCode) with PKCE support
- Proper foreign key relationships and cascading deletes

## Development Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint

# Database operations
pnpm prisma generate      # Generate Prisma client
pnpm prisma db push       # Push schema changes to database
pnpm prisma migrate dev   # Create and apply migrations
pnpm prisma studio        # Open database admin interface
```

## Environment Setup

Required environment variables:
- `DATABASE_URL`: PostgreSQL connection string
- `AUTH_SECRET`: NextAuth secret key
- `GOOGLE_CLIENT_ID`: Google OAuth client ID
- `GOOGLE_CLIENT_SECRET`: Google OAuth client secret
- `REDIS_URL`: Optional Redis URL for SSE transport support

## Database Management

PostgreSQL must be running locally for development:
```bash
# Start PostgreSQL (macOS with Homebrew)
brew services start postgresql@14

# Stop PostgreSQL
brew services stop postgresql@14
```

## MCP Integration

The MCP server (`app/mcp/[transport]/route.ts`) implements:
- Bearer token authentication using OAuth access tokens
- Token audience validation for security
- CORS headers for cross-origin requests
- Sample tool implementation (`add_numbers`)

## Security Considerations

- PKCE (Proof Key for Code Exchange) is implemented for public clients
- Access tokens are validated against database and checked for expiration
- Token audience validation prevents token misuse across different resources
- Proper CORS configuration for MCP client access

## Testing MCP Integration

MCP clients can connect using:
- SSE transport: `https://your-domain.com/mcp/sse`
- HTTP transport: `https://your-domain.com/mcp/mcp`

Clients must include OAuth access token in Authorization header as Bearer token.

## Prisma Client Location

The Prisma client is generated to `generated/prisma/` directory (not the default location) as specified in the schema generator configuration.