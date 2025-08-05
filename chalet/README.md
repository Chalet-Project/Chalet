# Proxmox Manager - chalet

A modern, self-hosted web interface for Proxmox PVE management. This project provides a clean, intuitive dashboard to manage your Proxmox Virtual Environment with auto-upgrade capabilities.

## Features

- **Modern Dashboard** - Clean, responsive interface built with Next.js and TailwindCSS
- **Proxmox Integration** - Direct integration with Proxmox PVE API
- **Self-Updating** - Automatic updates from GitHub repository
- **Multi-Deployment** - Install on Proxmox host, LXC container, or Docker
- **Real-time Monitoring** - Live system statistics and resource usage
- **VM/Container Management** - Create, configure, and manage VMs and LXC containers
- **Storage Management** - Monitor and manage storage pools and volumes
- **Network Configuration** - Manage network bridges and interfaces

## Architecture

- **Frontend**: Next.js with TailwindCSS and DaisyUI for modern UI
- **Backend**: Hono server with tRPC for type-safe APIs
- **Database**: PostgreSQL with Drizzle ORM
- **Runtime**: Bun for optimal performance
- **Monorepo**: Turborepo for efficient development workflow

## Getting Started

### Prerequisites
- Node.js 18+ or Bun
- PostgreSQL database
- Access to Proxmox PVE host

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd chalet
```

2. Install dependencies:
```bash
bun install
```

3. Set up the database:
```bash
# Start PostgreSQL (if using Docker)
bun db:start

# Push schema to database
bun db:push
```

4. Configure environment variables:
```bash
# Copy example environment files
cp apps/server/.env.example apps/server/.env
cp apps/web/.env.example apps/web/.env

# Edit the files with your configuration
```

5. Start the development server:
```bash
bun dev
```

The application will be available at:
- Web interface: http://localhost:3001
- API server: http://localhost:3000

## Deployment Options

### Docker Container
```bash
# Coming soon - Docker deployment guide
```

### LXC Container
```bash
# Coming soon - LXC deployment guide  
```

### Direct Installation on Proxmox Host
```bash
# Coming soon - Direct installation guide
```

## Project Structure

```
chalet/
├── apps/
│   ├── web/         # Frontend application (Next.js)
│   └── server/      # Backend API (Hono, tRPC)
└── packages/        # Shared packages (future)
```

## Available Scripts

- `bun dev`: Start all applications in development mode
- `bun build`: Build all applications for production
- `bun dev:web`: Start only the web application
- `bun dev:server`: Start only the server
- `bun check-types`: Check TypeScript types across all apps
- `bun db:push`: Push schema changes to database
- `bun db:studio`: Open database studio UI

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
