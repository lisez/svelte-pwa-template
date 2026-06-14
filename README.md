# Svelte PWA

A TypeScript monorepo template for building Progressive Web Apps (PWA) with SvelteKit and Node.js.

## Features

- 📦 **Monorepo Structure** - Organized with Nx monorepo tool and workspaces pattern
- 🚀 **Node.js & npm** - Standard Node.js and npm package manager support
- 🎯 **TypeScript** - Full TypeScript support across all modules
- ⚡ **SvelteKit** - Full-stack framework with file-based routing
- 🎨 **Svelte 5** - Latest Svelte with modern runes and snippets
- 📱 **PWA Support** - Offline-first with service workers and manifest
- 🔧 **Vite** - Lightning-fast build tool and dev server
- 🎨 **Tailwind CSS** - Utility-first CSS framework for styling
- 🧪 **Vitest** - Unit testing framework
- 🧪 **Playwright** - End-to-end testing for web apps
- 🎨 **Modern Stack** - Latest versions of all dependencies

## Project Structure

```
svelte-pwa/
├── modules/              # Workspace modules
│   ├── app/             # Main SvelteKit PWA application
│   │   ├── public/      # Static assets
│   │   ├── src/         # Source code
│   │   │   ├── lib/     # Reusable components and assets
│   │   │   ├── routes/  # SvelteKit routes
│   │   │   │   ├── +layout.svelte
│   │   │   │   └── +page.svelte
│   │   │   ├── app.css  # Global styles
│   │   │   └── app.html # HTML template
│   │   ├── tests/       # Playwright E2E tests
│   │   ├── package.json
│   │   ├── project.json # Nx project configuration
│   │   ├── tsconfig.json
│   │   ├── svelte.config.js
│   │   ├── vite.config.ts
│   │   ├── tailwind.config.js
│   │   └── playwright.config.ts
│   └── shared/          # Shared utilities library
│       ├── src/
│       ├── package.json
│       ├── project.json # Nx project configuration
│       └── tsconfig.json
├── nx.json              # Nx workspace configuration
├── package.json         # Root package with workspace config
└── tsconfig.json        # Root TypeScript config
```

## Prerequisites

- [Node.js](https://nodejs.org) >= 18.0.0
- npm >= 9.0.0

## Getting Started

1. **Install dependencies:**

```bash
npm install
```

2. **Start development server:**

```bash
npm run dev
```

3. **Build for production:**

```bash
npm run build
```

4. **Preview production build:**

```bash
npm run preview
```

5. **Run tests:**

```bash
npm test
```

The development server starts at `http://localhost:5173`.

## Workspace Commands

The monorepo uses Nx for efficient task management with caching and dependency handling.

- `npm run dev` - Start development server for the app module
- `npm run build` - Build the app module for production
- `npm run preview` - Preview the production build
- `npm test` - Run Vitest tests
- `npm run test:watch` - Run Vitest in watch mode
- `npm run test:ui` - Run Vitest tests in UI mode
- `npm run test:e2e` - Run Playwright E2E tests
- `npm run type-check` - Run TypeScript type checking across all modules
- `npm run clean` - Clean build artifacts from all modules

### Using Nx Directly

You can also use Nx commands directly for more control:

```bash
# Run a target for a specific project
npx nx build @svelte-pwa/app
npx nx type-check @svelte-pwa/shared

# Run a target for all projects
npx nx run-many -t build
npx nx run-many -t type-check

# View project graph
npx nx graph

# Clear Nx cache
npx nx reset
```

**Benefits of Nx:**

- ⚡ **Smart Caching** - Nx caches task results and only rebuilds what changed
- 🔗 **Task Dependencies** - Automatically runs dependent tasks in the correct order
- 📊 **Task Orchestration** - Efficiently runs tasks across multiple projects in parallel
- 📈 **Project Graph** - Visualize dependencies between projects

## Adding New Modules

To add a new module to the monorepo:

1. Create a new directory under `modules/`:

```bash
mkdir modules/your-module
```

2. Initialize a new package:

```bash
cd modules/your-module
npm init
```

3. Create a `project.json` file in the new module directory to configure Nx targets:

```json
{
  "name": "@svelte-pwa/your-module",
  "$schema": "../../node_modules/nx/schemas/project-schema.json",
  "sourceRoot": "modules/your-module/src",
  "projectType": "library",
  "targets": {
    "build": {
      "executor": "nx:run-commands",
      "options": {
        "command": "tsc",
        "cwd": "modules/your-module"
      }
    }
  }
}
```

4. The module will automatically be included in the Nx workspace.

## Tailwind CSS

The template uses Tailwind CSS for styling:

- **Configuration**: `modules/app/tailwind.config.js`
- **Vite Plugin**: Uses `@tailwindcss/vite` for optimal integration
- **Usage**: Use Tailwind utility classes directly in your Svelte components

Example:

```svelte
<button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
  Click me
</button>
```

## Testing

The project includes two types of tests:

### Unit Tests (Vitest)

Unit tests are located in `modules/app/src/**/*.test.ts` and use:

- **Vitest** - Fast unit test framework
- **@testing-library/svelte** - Testing utilities for Svelte components
- **jsdom** - DOM implementation for Node.js/npm

**Running unit tests:**

```bash
npm test              # Run tests once
npm run test:watch    # Run in watch mode
npm run test:ui       # Run with UI
```

### End-to-End Tests (Playwright)

Playwright is configured for end-to-end testing:

- **Configuration**: `modules/app/playwright.config.ts`
- **Tests Location**: `modules/app/tests/`

```bash
npm run test:e2e        # Run E2E tests
npm run test:e2e:ui     # Run E2E tests in UI mode
npm run test:e2e:headed # Run E2E tests in headed mode
```

Example test:

```typescript
import { test, expect } from '@playwright/test';

test('counter increments', async ({ page }) => {
  await page.goto('/');
  const button = page.getByRole('button', { name: /count is/i });
  await button.click();
  await expect(button).toHaveText('count is 1');
});
```

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
