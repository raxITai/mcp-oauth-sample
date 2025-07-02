# Contributing to MCP OAuth Sample

Thank you for your interest in contributing to the MCP OAuth Sample project! We welcome contributions from the community and are excited to collaborate with you.

## 🚀 Quick Start

1. **Fork** the repository: [raxITai/mcp-oauth-sample](https://github.com/raxITai/mcp-oauth-sample)
2. **Clone** your fork locally
3. **Set up** the development environment (see [Setup Guide](./docs/setup.md))
4. **Create** a feature branch
5. **Make** your changes
6. **Test** thoroughly
7. **Submit** a pull request

## 🎯 Ways to Contribute

### 🐛 Bug Reports
Found a bug? [Open an issue](https://github.com/raxITai/mcp-oauth-sample/issues/new?template=bug_report.md) with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Environment details

### ✨ Feature Requests
Have an idea? [Submit a feature request](https://github.com/raxITai/mcp-oauth-sample/issues/new?template=feature_request.md) with:
- Problem statement
- Proposed solution
- Use cases and examples
- Implementation considerations

### 📚 Documentation
Help improve our docs:
- Fix typos or unclear explanations
- Add missing information
- Create examples and tutorials
- Improve code comments

### 🔧 Code Contributions
- Fix bugs
- Implement new features
- Improve performance
- Add tests
- Enhance security

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+
- PostgreSQL 12+
- pnpm package manager

### Local Setup
```bash
# Clone your fork
git clone https://github.com/your-username/mcp-oauth-sample.git
cd mcp-oauth-sample

# Install dependencies
pnpm install

# Set up environment
cp .env.example .env
# Edit .env with your configuration

# Set up database
pnpm prisma generate
pnpm prisma db push

# Start development server
pnpm dev
```

## 📋 Development Guidelines

### Code Style
- Follow existing patterns and conventions
- Use TypeScript for type safety
- Run `pnpm lint` before committing
- Use Prettier for code formatting

### Commit Messages
Use [Conventional Commits](https://conventionalcommits.org/) format:
```
type(scope): description

feat(oauth): add refresh token rotation
fix(security): resolve token validation issue
docs(setup): update environment variables guide
```

### Testing
- Write tests for new features
- Ensure existing tests pass: `pnpm test`
- Test OAuth flows thoroughly
- Verify security implications

### Security
- Follow OAuth 2.1 best practices
- Validate all user inputs
- Never commit secrets or keys
- Consider security implications of changes

## 🔄 Pull Request Process

### Before Submitting
- [ ] Code follows project conventions
- [ ] Tests are written and passing
- [ ] Documentation is updated
- [ ] No breaking changes (or properly documented)
- [ ] Security considerations reviewed

### PR Requirements
- Clear title and description
- Reference related issues
- Include test coverage
- Update relevant documentation
- Address review feedback promptly

### Review Process
1. **Automated checks** must pass
2. **Maintainer review** for technical correctness
3. **Security review** for security-related changes
4. **Final approval** and merge

## 🏗️ Project Structure

```
├── app/                 # Next.js app directory
│   ├── api/            # API routes
│   ├── auth.ts         # Authentication config
│   └── mcp/            # MCP server endpoints
├── components/         # React components
├── docs/              # Documentation
├── lib/               # Utility libraries
├── prisma/            # Database schema
└── assets/            # Static assets
```

## 🎨 Component Guidelines

### React Components
- Use TypeScript with proper types
- Follow functional component patterns
- Implement proper error boundaries
- Use consistent naming conventions

### API Endpoints
- Follow REST conventions
- Implement proper error handling
- Use consistent response formats
- Include appropriate status codes

## 🔒 Security Guidelines

### OAuth Implementation
- Follow OAuth 2.1 specification
- Implement PKCE for public clients
- Validate all tokens and grants
- Use secure random generation

### Database Security
- Use parameterized queries
- Implement proper access controls
- Follow data retention policies
- Encrypt sensitive data

## 🧪 Testing Strategy

### Test Types
- **Unit Tests**: Test individual functions/components
- **Integration Tests**: Test API endpoints and flows
- **E2E Tests**: Test complete user journeys
- **Security Tests**: Test OAuth flows and edge cases

### Test Commands
```bash
# Run all tests
pnpm test

# Run specific test suites
pnpm test:unit
pnpm test:integration
pnpm test:e2e

# Test coverage
pnpm test:coverage
```

## 📖 Documentation Standards

### Code Documentation
- Document complex functions
- Explain OAuth flow implementations
- Include usage examples
- Keep comments up to date

### API Documentation
- Document all endpoints
- Include request/response examples
- Explain authentication requirements
- Document error responses

## 🤝 Community Guidelines

### Code of Conduct
- Be respectful and inclusive
- Welcome newcomers
- Provide constructive feedback
- Focus on what's best for the community

### Communication
- Use GitHub Issues for bug reports and features
- Join discussions in GitHub Discussions
- Follow us on social media for updates:
  - [LinkedIn](https://www.linkedin.com/company/raxit-ai)
  - [X (Twitter)](https://x.com/raxit_ai)
  - [Bluesky](https://bsky.app/profile/raxit.ai)

## 📊 Contribution Recognition

### Contributors
All contributors are recognized in:
- GitHub contributor graphs
- Release notes
- Project documentation
- Social media shoutouts

### Maintainer Path
Active contributors may be invited to become maintainers based on:
- Quality of contributions
- Community involvement
- Technical expertise
- Commitment to project values

## 🆘 Getting Help

### Resources
- [Setup Guide](./docs/setup.md)
- [Architecture Documentation](./docs/architecture.md)
- [API Reference](./docs/api.md)
- [Troubleshooting Guide](./docs/troubleshooting.md)

### Support Channels
- **GitHub Issues**: Technical problems and bugs
- **GitHub Discussions**: General questions and ideas
- **Social Media**: Updates and community engagement

## 📝 License

By contributing to this project, you agree that your contributions will be licensed under the Apache License 2.0.

---

**Thank you for contributing to MCP OAuth Sample!** 🙏

Every contribution, no matter how small, helps make this project better for everyone.

**Built with ❤️ by [raxIT AI](https://raxit.ai)**