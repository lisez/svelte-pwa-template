# Bun Svelte PWA

A TypeScript monorepo template for building Progressive Web Apps (PWA) with Svelte and Bun runtime.

## Features

- 🚀 **Bun Runtime** - Fast JavaScript runtime with built-in package manager
- 📦 **Monorepo Structure** - Organized with workspaces pattern
- 🎯 **TypeScript** - Full TypeScript support across all modules
- ⚡ **Svelte** - Reactive and efficient UI framework
- 📱 **PWA Support** - Offline-first with service workers and manifest
- 🔧 **Vite** - Lightning-fast build tool and dev server
- 🎨 **Modern Stack** - Latest versions of all dependencies

## Project Structure

```
bun-svelte-pwa/
├── modules/              # Workspace modules
│   └── app/             # Main Svelte PWA application
│       ├── public/      # Static assets
│       ├── src/         # Source code
│       │   ├── assets/  # Images, icons, etc.
│       │   ├── lib/     # Reusable components
│       │   ├── App.svelte
│       │   └── main.ts
│       ├── package.json
│       ├── tsconfig.json
│       └── vite.config.ts
├── package.json         # Root package with workspace config
└── tsconfig.json        # Root TypeScript config
```

## Prerequisites

- [Bun](https://bun.sh) >= 1.0.0

## Getting Started

1. **Install dependencies:**

```bash
bun install
```

2. **Start development server:**

```bash
bun dev
```

This will start the development server at `http://localhost:5173`

3. **Build for production:**

```bash
bun run build
```

4. **Preview production build:**

```bash
bun run preview
```

## Workspace Commands

The monorepo uses Bun workspaces to manage multiple packages:

- `bun dev` - Start development server for the app module
- `bun run build` - Build the app module for production
- `bun run preview` - Preview the production build
- `bun run type-check` - Run TypeScript type checking across all modules
- `bun run clean` - Clean build artifacts from all modules

## Adding New Modules

To add a new module to the monorepo:

1. Create a new directory under `modules/`:

```bash
mkdir modules/your-module
```

2. Initialize a new package:

```bash
cd modules/your-module
bun init
```

3. The module will automatically be included in the workspace.

## PWA Features

The template includes PWA support out of the box:

- **Service Worker** - Automatic caching and offline support
- **Web Manifest** - Install prompt and app-like experience
- **Icons** - Multiple sizes for different devices
- **Offline Mode** - Works without internet connection

To customize the PWA:

1. Edit the manifest in `modules/app/vite.config.ts`
2. Replace icons in `modules/app/public/`
3. Adjust caching strategies in the Workbox configuration

## TypeScript

All modules are configured with TypeScript:

- Strict mode enabled
- Modern ES2022 target
- Full type checking across the workspace
- Svelte component type definitions

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT