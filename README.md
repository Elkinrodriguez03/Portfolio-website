## Portfolio website

Personal portfolio built with **Next.js (App Router)**, **React 18**, **TypeScript**, and **Tailwind CSS**, showcasing projects and following scalable, maintainable architecture and good engineering practices.

### Tech stack & architecture

- **Framework**: Next.js 15 (App Router, `src/app`)
- **Language**: TypeScript (`strict` mode)
- **Styling**: Tailwind CSS, dark mode with `next-themes`
- **Data layer**: Typed modules under `src/data` (`projects`, `skills`, `socialLinks`)
- **Layout**:
  - `RootLayout` as a **server component** with Next `metadata` API
  - Client-side `Providers` wrapper for theming
  - `PageContainer` component for consistent page width and padding
- **UX/UI utilities**:
  - `SlideUp` intersection observer animation wrapper
  - Smooth scrolling navigation with a semantic `<nav>` + list structure

### Quality, testing & git hooks

- **Linting**: `npm run lint` (Next + ESLint, wired to Husky pre-commit via `lint-staged`)
- **Testing**:
  - Jest + React Testing Library (`jest-environment-jsdom`, `next/jest`)
  - Example test: `HeroSection` rendered heading
- **Git hooks (Husky)**:
  - `pre-commit`: runs `lint-staged` → `next lint` on staged JS/TS/TSX files
  - `pre-push`: runs `npm test`

### Scripts

- **Development**:

  ```bash
  npm run dev
  ```

- **Lint**:

  ```bash
  npm run lint
  ```

- **Tests**:

  ```bash
  npm test
  ```

- **Production build**:

  ```bash
  npm run build
  npm start
  ```

### Node & deployment

- Target Node.js version: **24.x** (configure this in your Vercel project settings).
- Deployed on Vercel using the standard Next.js build pipeline.

