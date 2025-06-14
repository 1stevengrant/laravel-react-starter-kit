# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Tech Stack

This is a Laravel 12 + React 19 starter kit using:
- **Backend**: Laravel 12 with PHP 8.2+, SQLite, Laravel Horizon, Laravel Pulse, Sentry
- **Frontend**: React 19 with TypeScript, Inertia.js, ShadCN/UI components, Tailwind CSS 4
- **Integration**: Inertia.js for seamless Laravel-React communication without API layer
- **Type Safety**: Spatie Laravel TypeScript Transformer automatically converts PHP DTOs to TypeScript

## Development Commands

### Start Development Environment
```bash
composer dev                 # Starts queue worker, logs, and Vite dev server
composer dev:ssr            # Same as above with SSR support
npm run dev                 # Vite dev server only
```

### Code Quality
```bash
npm run lint                # ESLint with auto-fix
npm run format              # Prettier formatting  
npm run types               # TypeScript type checking
```

### Testing
```bash
composer test               # Run Pest PHP tests
npm run test:e2e            # Run Cypress end-to-end tests
npm run cypress:open        # Open Cypress test runner
npm run cypress:run         # Run Cypress tests headlessly
```

### Production
```bash
npm run build               # Build for production
npm run build:ssr           # Build with server-side rendering
```

## Architecture Overview

### Full-Stack Integration Pattern
- Uses Inertia.js to eliminate traditional API layer between Laravel and React
- Laravel controllers return Inertia responses directly to React components
- Shared types: PHP Data Transfer Objects auto-converted to TypeScript via transformer
- Laravel routes available in JavaScript via Ziggy

### Laravel Patterns
- Uses DTOs (Data Transfer Objects) for type-safe data handling
- Controllers return Inertia responses with data prepared by DTOs

### Directory Structure
```
/app
├── Data/                   # DTOs (auto-converted to TypeScript)
├── Http/Controllers/       # Inertia controllers
└── Models/                 # Eloquent models

/resources/js
├── components/ui/          # ShadCN/UI component library (40+ components)
├── layouts/               # Page layouts (app, auth, settings)
├── pages/                 # Inertia.js pages
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities
└── types/                 # TypeScript definitions
```

### UI Component System
- Complete ShadCN/UI component library with custom "cosmic-night" theme
- Built on Radix UI primitives for accessibility
- Dark/light mode support with system preference detection
- Form handling with React Hook Form + Zod validation

### Data Flow
1. Laravel controllers prepare data using DTOs
2. Inertia.js passes data as props to React components
3. No API calls needed - data flows seamlessly server-to-client
4. TypeScript types automatically generated from PHP DTOs

## Key Files

- `app/Data/` - DTOs that become TypeScript types
- `resources/js/types/generated.d.ts` - Auto-generated TypeScript definitions
- `resources/js/components/ui/` - Reusable UI components
- `resources/js/layouts/` - Page layout components
- `resources/js/pages/` - Inertia.js page components

## Testing Approach

- Backend: Pest PHP for feature and unit tests
- Frontend: Cypress for end-to-end testing with Laracasts integration
- Code Quality: ESLint + TypeScript for static analysis
- Database: In-memory SQLite for fast testing

### Cypress Testing
- Integrated with Laravel using Laracasts Cypress package
- Tests located in `tests/cypress/integration/`
- Includes Laravel-specific commands like `cy.login()`, `cy.create()`, `cy.refreshDatabase()`
- Configured to use `http://localhost:8000` as base URL
- Separate `.env.cypress` environment for test isolation
- **Note**: Start Laravel dev server (`php artisan serve`) before running tests

## Development Notes

- Run TypeScript transformer after changing PHP DTOs: `php artisan typescript:transform`
- Inertia components receive data as props, not through API calls
- Use existing ShadCN components before creating new ones
- Follow the established layout pattern in `/layouts` directory
- Utilize Laravel Horizon for queue monitoring at `/horizon`
- Monitor app performance with Laravel Pulse at `/pulse`
