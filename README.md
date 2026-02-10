# Bun Svelte PWA

A TypeScript monorepo template for building Progressive Web Apps (PWA) with Svelte. Compatible with both Bun and npm package managers.

## Features

- 🚀 **Bun & npm Compatible** - Works with both Bun and npm package managers
- 📦 **Monorepo Structure** - Organized with workspaces pattern
- 🎯 **TypeScript** - Full TypeScript support across all modules
- ⚡ **Svelte** - Reactive and efficient UI framework
- 📱 **PWA Support** - Offline-first with service workers and manifest
- 🔧 **Vite** - Lightning-fast build tool and dev server
- 🎨 **Tailwind CSS** - Utility-first CSS framework for styling
- 🧪 **Playwright** - End-to-end testing for web apps
- 🎨 **Modern Stack** - Latest versions of all dependencies

## Project Structure

```
bun-svelte-pwa/
├── modules/              # Workspace modules
│   ├── app/             # Main Svelte PWA application
│   │   ├── public/      # Static assets
│   │   ├── src/         # Source code
│   │   │   ├── assets/  # Images, icons, etc.
│   │   │   ├── lib/     # Reusable components
│   │   │   ├── App.svelte
│   │   │   └── main.ts
│   │   ├── tests/       # Playwright tests
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── vite.config.ts
│   │   ├── tailwind.config.js
│   │   └── playwright.config.ts
│   └── shared/          # Shared utilities library
│       ├── src/
│       ├── package.json
│       └── tsconfig.json
├── package.json         # Root package with workspace config
└── tsconfig.json        # Root TypeScript config
```

## Prerequisites

Choose one of the following package managers:

- **Option 1:** [Bun](https://bun.sh) >= 1.0.0 (Recommended for faster performance)
- **Option 2:** [Node.js](https://nodejs.org) >= 18.0.0 with npm >= 9.0.0

Both package managers are fully supported and work identically.

## Getting Started

### Using npm

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

### Using Bun

1. **Install dependencies:**

```bash
bun install
```

2. **Start development server:**

```bash
bun dev
```

3. **Build for production:**

```bash
bun run build
```

4. **Preview production build:**

```bash
bun run preview
```

5. **Run tests:**

```bash
bun test
```

> **Note:** All commands work identically with both `npm` and `bun`. The development server starts at `http://localhost:5173`

## Workspace Commands

The monorepo uses workspaces to manage multiple packages. Commands work with both npm and Bun:

**With npm:**
- `npm run dev` - Start development server for the app module
- `npm run build` - Build the app module for production
- `npm run preview` - Preview the production build
- `npm test` - Run Playwright tests
- `npm run test:ui` - Run tests in UI mode
- `npm run type-check` - Run TypeScript type checking across all modules
- `npm run clean` - Clean build artifacts from all modules

**With Bun:**
- `bun dev` - Start development server for the app module
- `bun run build` - Build the app module for production
- `bun run preview` - Preview the production build
- `bun test` - Run Playwright tests
- `bun run test:ui` - Run tests in UI mode
- `bun run type-check` - Run TypeScript type checking across all modules
- `bun run clean` - Clean build artifacts from all modules

## Adding New Modules

To add a new module to the monorepo:

1. Create a new directory under `modules/`:

```bash
mkdir modules/your-module
```

2. Initialize a new package:

**With npm:**
```bash
cd modules/your-module
npm init
```

**With Bun:**
```bash
cd modules/your-module
bun init
```

3. The module will automatically be included in the workspace.

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

## Testing with Playwright

Playwright is configured for end-to-end testing:

- **Configuration**: `modules/app/playwright.config.ts`
- **Tests Location**: `modules/app/tests/`

**With npm:**
- `npm test` - Run all tests
- `npm run test:ui` - Run tests in UI mode
- `npm run test:headed` - Run tests in headed mode

**With Bun:**
- `bun test` - Run all tests
- `bun run test:ui` - Run tests in UI mode
- `bun run test:headed` - Run tests in headed mode

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