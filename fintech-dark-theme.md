# UX Audit — Crypto Compliance Tracker

**Scope:** `/`, `/onboarding`, `/mobile`, `/dashboard`  
**Method:** UI/UX Pro Max heuristic review + WCAG spot-check

---

## Top 5 UX issues + quick fixes

### 1. Home page fails as a product entry (Critical)

**Issue:** `/` is a centered title + two buttons. No value proposition, social proof, feature clarity, or pricing — users cannot evaluate the product before committing to onboarding.

**Quick fix:** Ship a full landing page (hero → features → how it works → CTA). **Done:** `/` now uses `LandingPage` with sectioned content.

---

### 2. Dead-end dashboard after onboarding (High)

**Issue:** Completing onboarding lands on a placeholder dashboard with no alerts, empty state, or next steps — breaks the “setup → value” loop.

**Quick fix:** Add empty state with “3 sample alerts” CTA, link back to mobile preview, and checklist: “Connect Slack”, “Review first alert”. Extend `dashboard/page.tsx` with `DashboardEmptyState`.

---

### 3. Invalid nested interactive control (High — a11y)

**Issue:** Onboarding step 6 wraps `<Button>` inside `<Link>` — two focusable elements, confusing screen reader and keyboard behavior.

**Quick fix:** Use a single `LinkButton` component (link styled as button). **Done:** `src/components/ui/LinkButton.tsx` + onboarding footer updated.

---

### 4. Silent failure on team invite (Medium)

**Issue:** “Add teammate” with invalid email does nothing — no error message; users assume the app is broken.

**Quick fix:** Show inline validation: “Enter a valid email address.” Disable Add until valid or show `role="alert"` on failed add.

---

### 5. No global navigation or orientation (Medium)

**Issue:** Users jump between isolated flows (landing → onboarding → mobile) with no header, logo home, or skip link.

**Quick fix:** Add `SiteHeader` with logo, Product / Pricing / Mobile links, and “Start free” CTA. Add skip link: “Skip to main content”.

---

## Bonus (next sprint)

| Issue | Fix |
|-------|-----|
| Mobile bottom nav uses decorative symbols only | Add visible text labels (already present) — ensure 4.5:1 contrast on inactive tabs |
| No pricing page despite Stripe-style ask | Add `/pricing` using shared `PricingCard` components |
| Progress bar lacks step names for SR | Already has sr-only per step; add `aria-current="step"` on current segment |
