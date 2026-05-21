# Crypto Compliance Tracker

SaaS onboarding flow built with **design-mastery**: one component (`OnboardingFlow`), three disciplines (designer, a11y, frontend) on shared tokens.

## Quick start

```bash
npm install
npm run dev
```

## Docs

- UX audit (top 5 issues): `docs/ux-audit.md`
- Landing headlines: `docs/landing-headlines.md`

## Design system

Tokens: `src/styles/tokens.css`  
Cross-discipline spec: `design-mastery/onboarding-flow.md`

## Component architecture (React + Tailwind)

| Layer | Path |
|-------|------|
| Content | `src/lib/landing-content.ts` |
| Primitives | `src/components/ui/` (`Button`, `LinkButton`, `Container`, `Section`) |
| Layout | `src/components/layout/` |
| Landing | `src/components/landing/` (Server Components) |

### Mobile fintech dark theme

Spec: `mobile-app-ui-design/fintech-dark-theme.md`  
Tokens: `src/styles/mobile-tokens.css` (scoped `data-theme="mobile-fintech-dark"`)  
Components: `src/components/mobile/`

## Stack

Next.js 15 · React 19 · Tailwind 3 · TypeScript
