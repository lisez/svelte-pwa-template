# Copilot Instructions

## Build, Test, and Lint Commands

This is an npm workspace monorepo supporting Node.js. Use the following commands:

- **Start Dev Server**: `npm run dev`
  - Runs `npm run dev -w @svelte-pwa/app`
- **Build Production**: `npm run build`
  - Runs `npm run build -w @svelte-pwa/app`
- **Type Check**: `npm run type-check`
  - Runs `tsc` across all workspace modules
- **Run Unit Tests**: `npm test`
  - Runs Vitest for the app module
  - Example: `npm run test -w @svelte-pwa/app`
- **Run E2E Tests**: `npm run test:e2e`
  - Runs Playwright tests
  - Example: `npm run test:e2e -w @svelte-pwa/app`

## High-Level Architecture

- **Monorepo Structure**: Managed by npm workspaces, with code in `modules/`.
  - `modules/app`: The main Svelte PWA application.
  - `modules/shared`: Shared TypeScript utilities library.
- **Frontend Stack**: Svelte (Components), Vite (Build tool), Tailwind CSS (Styling).
- **PWA**: Configured in `modules/app/vite.config.ts` using `vite-plugin-pwa`.
- **Testing Strategy**:
  - **Unit**: Vitest with `@testing-library/svelte`.
  - **E2E**: Playwright configured in `modules/app/playwright.config.ts`.
- **Runtime Support**: Fully compatible with Node.js/npm.

## Key Conventions

- **Module Management**: Use standard npm workspace commands to manage dependencies and tasks.
- **Path Aliases**: Shared code is imported via `@svelte-pwa/shared`.
- **Styling**: Use Tailwind utility classes directly in Svelte markup. Configuration is in `modules/app/tailwind.config.js`.
- **Project Configuration**: Each module has its own `package.json`.
