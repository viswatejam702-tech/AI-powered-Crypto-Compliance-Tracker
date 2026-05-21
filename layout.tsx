# Fintech Mobile UI — Dark Theme (Crypto Compliance)

Single source of truth: **industry patterns**, **8pt spacing grid**, and **emotional design** for one product surface.

---

## 1. Industry-specific patterns (compliance / regtech)

| Pattern | Purpose | Mobile treatment |
|--------|---------|------------------|
| **Compliance pulse** | At-a-glance health | Hero card: score + “items needing review” — never hide risk behind charts |
| **Regulatory alert row** | Scan updates fast | Left severity rail, title 2 lines max, jurisdiction chip, relative time |
| **Acknowledgment CTA** | Audit trail | Primary button “Mark reviewed” — destructive actions secondary, never floating |
| **Jurisdiction chip** | Filter mental model | ISO-style labels (US, EU, UK) — max 3 visible, +N overflow |
| **Severity ladder** | Legal-grade semantics | `info` → `attention` → `critical` — amber before red |
| **Secure action bar** | Trust for exports/settings | Lock icon + “Encrypted” subcopy on sensitive flows |
| **Bottom tab IA** | Thumb-zone navigation | Home · Alerts · Search · Settings — max 4 tabs |
| **Pull-to-refresh** | Expectation on feeds | Native pattern on alert list (implement in RN/Flutter) |
| **Empty state** | Onboarding completion | Illustration-free: icon + one sentence + single CTA |

**Do not borrow from consumer crypto:** neon gradients, meme tickers, PnL celebration. **Do borrow from institutional fintech:** Revolut Business calm, Monzo clarity, Bloomberg density (simplified).

---

## 2. Spacing grid (8pt base)

All layout math uses **multiples of 8**. Half-steps (4px) only for icon gaps and chip padding.

| Token | px | rem | Use |
|-------|-----|-----|-----|
| `space-0.5` | 4 | 0.25 | Icon–label gap, chip vertical pad |
| `space-1` | 8 | 0.5 | Inline stacks, list item gap |
| `space-2` | 16 | 1 | Card padding, screen horizontal inset |
| `space-3` | 24 | 1.5 | Section gap, below hero |
| `space-4` | 32 | 2 | Major section break |
| `space-5` | 40 | 2.5 | Top safe-area breathing room |
| `space-6` | 48 | 3 | Bottom nav height, min touch target |

**Screen rules**
- Horizontal padding: **16px** (`space-2`) — 20px on tablets
- Card internal padding: **16px**; between cards: **8px**
- List row min height: **56px** (7×8)
- Bottom nav + home indicator: **48px + env(safe-area-inset-bottom)**

**Typography rhythm (aligned to grid)**
- Display: 28px / 32px line (4×7, 4×8)
- Title: 17px / 24px line
- Body: 15px / 22px line
- Caption: 13px / 18px line
- Regulatory ID (mono): 12px / 16px line

---

## 3. Emotional design principles

| Principle | User feeling | Design lever |
|-----------|--------------|--------------|
| **Sovereign calm** | “We’re in control” | Dark navy base, low chroma, no motion on load |
| **Earned urgency** | “This matters” | Amber `attention` for deadlines; red only `critical` |
| **Institutional trust** | “This is serious software” | Tabular nums, mono IDs, no rounded bubbly mascots |
| **Clarity over density** | “I can scan in 3 seconds” | One hero metric, max 5 list items above fold |
| **Reassurance on action** | “My tap was recorded” | Toast + checkmark on acknowledge; haptic on primary (native) |

**Color emotion (dark fintech)**
- Background: `#0A0E17` — depth, not OLED black (reduces halation)
- Surface cards: `#141B26` + 1px `#1E2A3A` border — layered, not floating gray blobs
- Brand accent: `#6C8EFF` — competence (cool indigo)
- Success: `#3DD68C` — compliance OK
- Attention: `#F5A623` — review by date
- Critical: `#FF5C5C` — enforcement / breach only

---

## 4. Token contract (implementation)

See `src/styles/mobile-tokens.css`. Scope with `[data-theme="mobile-fintech-dark"]` on the mobile shell so web onboarding tokens stay independent.

---

## 5. Component map

```
MobileShell
├── ComplianceStatusHero
├── RegulatoryAlertCard (list)
├── QuickActions (horizontal scroll)
└── MobileBottomNav
```

Preview: `/mobile`
