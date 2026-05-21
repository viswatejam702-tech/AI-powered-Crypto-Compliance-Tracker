# Design Mastery: OnboardingFlow

**One component. Three disciplines. Single source of truth.**

| Role | Owner | Delivers |
|------|--------|----------|
| Senior Designer | Visual & UX | Flow, hierarchy, tokens, copy |
| Accessibility Auditor | WCAG 2.2 AA | Semantics, keyboard, SR, contrast |
| Frontend Developer | Implementation | `OnboardingFlow.tsx`, hooks, tokens |

---

## 1. Senior Designer — decisions

### User journey (6 steps)
1. Organization → 2. Entity type → 3. Jurisdictions → 4. Team → 5. Alerts → 6. Confirm

**Principles**
- **Progressive disclosure**: one primary task per screen; no sidebar clutter on mobile.
- **Stripe-adjacent trust**: navy ink (`#0a2540`), indigo brand (`#635bff`), generous whitespace, card elevation for selection states.
- **Copy tone**: confident, legal-adjacent, not alarmist (“monitor” not “warn”).

### Token contract (Designer ↔ Frontend)
All values live in `src/styles/tokens.css` and map to Tailwind in `tailwind.config.ts`. **No magic hex in components.**

| Token | Value | Use |
|-------|-------|-----|
| `--color-ink` | `#0a2540` | Headings, primary text |
| `--color-brand` | `#635bff` | CTA, progress, selected border |
| `--size-touch-min` | `2.75rem` (44px) | Buttons, inputs, chips |
| `--layout-onboarding-max` | `32rem` | Content column |
| `text-display-sm` | 1.75rem / 600 | Step titles |

### Visual hierarchy per step
1. Progress bar (orientation)
2. `h1` step title (focus target)
3. Supporting line (muted)
4. Inputs / cards (interactive)
5. Footer actions (Continue primary right on desktop)

---

## 2. Accessibility Auditor — requirements & verification

### Must-pass checklist

| ID | Requirement | Implementation |
|----|-------------|----------------|
| A1 | Page has `lang="en"` | `layout.tsx` |
| A2 | Step change announced | `aria-live="assertive"` + `useFocusOnStepChange` |
| A3 | Progress readable by SR | `sr-only` text per segment; visible “Step X of Y” |
| A4 | Form fields labeled | `Field` with `<label htmlFor>` |
| A5 | Errors associated | `aria-invalid`, `aria-describedby`, `role="alert"` |
| A6 | Radio groups | `<fieldset>` + `<legend class="sr-only">` |
| A7 | Focus visible | `:focus-visible` + `--shadow-focus` |
| A8 | Touch targets ≥ 44px | `--size-touch-min` on controls |
| A9 | Color not sole indicator | Selected cards: border + background + radio dot |
| A10 | Reduced motion | `.motion-safe-transition` disabled under `prefers-reduced-motion` |
| A11 | Skip path for optional step | “Skip for now” on team invite |
| A12 | Contrast AA | Ink on surface ≥ 4.5:1; brand on white for large UI |

### Keyboard flow
- Tab through interactive elements in DOM order.
- Enter on team email field adds invite (does not submit form).
- Continue submits form via `type="submit"`.

### Screen reader flow
1. Land on step → live region reads title + description.
2. Focus moves to `h1` (tabIndex -1) for context.
3. Validation errors announced via `role="alert"`.

---

## 3. Frontend Developer — architecture

### File map
```
src/
  styles/tokens.css          # Token source
  components/
    onboarding/
      OnboardingFlow.tsx     # Orchestrator (THIS IS THE COMPONENT)
      OnboardingProgress.tsx
    ui/
      Button.tsx
      Field.tsx              # Field, SelectableCard, CheckboxChip
  hooks/
    useFocusOnStepChange.ts
    useReducedMotion.ts
  lib/onboarding-types.ts
```

### State
- Local `useState` for MVP; swap for `useReducer` + API persistence without changing UI contract.
- `validateStep()` colocated — same rules Designer documented as “blockers.”

### Extension points
- `POST /api/onboarding` on final step
- Persist `stepIndex` to resume
- Slack OAuth on alerts step

---

## 4. Cross-discipline sign-off (same component)

| Question | Designer | A11y | Frontend |
|----------|----------|------|----------|
| Are selectable cards the right pattern? | Yes — scannable, B2B familiar | OK if native radio + label | `SelectableCard` hides radio, keeps label |
| Is 6 steps too many? | No — each maps to product config | OK with progress + focus management | Steps array-driven |
| Primary CTA placement? | Bottom-right desktop | Footer after content in tab order | `footer` inside `form` |
| Brand color on white? | Yes for CTAs | 3:1 for large UI | `Button` primary |

**Signed component:** `src/components/onboarding/OnboardingFlow.tsx`

---

## Run locally

```bash
cd crypto-compliance-tracker
npm install
npm run dev
```

Open [http://localhost:3000/onboarding](http://localhost:3000/onboarding)

### Manual a11y smoke test
1. Tab through one full flow without mouse.
2. Enable VoiceOver/NVDA — confirm step announcements.
3. Toggle `prefers-reduced-motion: reduce` in OS — no transitions.
4. Zoom 200% — layout remains usable.
