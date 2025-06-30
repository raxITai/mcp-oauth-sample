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
├── schema.prisma              # Database schema
└── migrations/                # Database migrations
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
```

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

## Contributing

This is a test sample project by raxIT AI. Feel free to fork and modify for your own use cases.

## License

MIT License - See LICENSE file for details.

---

**Made with ❤️ by raxIT AI**
