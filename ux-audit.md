# Landing Page — Sections & Headlines (Vercel Web Design Guidelines)

Product: **Crypto Compliance Tracker**

---

## Recommended section order

1. **Nav** — Logo, Features, How it works, Pricing, CTA  
2. **Hero** — Outcome-first headline + subcopy + dual CTA  
3. **Logo bar** — “Trusted by legal teams at…” (placeholders)  
4. **Features** — 3–6 cards, scannable  
5. **How it works** — 3 steps, numbered  
6. **Product shot** — Dashboard / mobile frame  
7. **Pricing preview** — 3 tiers, link to full pricing  
8. **CTA band** — Single action, low friction  
9. **Footer** — Legal, privacy, contact  

---

## Headline ideas (pick one hero)

| Angle | Headline | Subhead |
|-------|----------|---------|
| **Outcome** | Never miss a crypto rule change again | Automatic regulatory monitoring built for legal and compliance teams. |
| **Risk** | Stay audit-ready as crypto rules evolve | Track SEC, MiCA, FCA, and more — with acknowledgment logs your auditors expect. |
| **Speed** | Regulatory intelligence, delivered daily | From raw guidance to plain-language briefs — scoped to your entity and jurisdictions. |
| **Trust** | Compliance awareness your GC can trust | Structured alerts, severity levels, and team workflows — not another news feed. |

**Recommended hero (implemented):**  
**H1:** Stay ahead of crypto regulation. **Sub:** Automatic tracking, impact briefs, and audit-ready acknowledgments for legal and compliance teams.

---

## Section headline variants

### Features
- “Built for compliance teams, not traders”
- “Everything you need to monitor — nothing you don’t”

### How it works
- “From rule change to reviewed in minutes”
- “Set up once. Stay compliant continuously.”

### Pricing
- “Plans that scale with your jurisdictions”
- “Transparent pricing for growing legal teams”

### Final CTA
- “Start monitoring in under 5 minutes”
- “Join teams who stopped spreadsheet-tracking regulation”

---

## Vercel-aligned design notes

- **Hierarchy:** One `h1` per page; sections use `h2`, cards use `h3`.  
- **Whitespace:** `max-w-6xl` container, `py-24` section rhythm.  
- **Motion:** Subtle hover on cards only; respect `prefers-reduced-motion`.  
- **Performance:** Landing sections are Server Components; no client JS unless needed.  
- **CTA:** Primary = indigo solid; secondary = ghost/outline. One primary per viewport fold.
