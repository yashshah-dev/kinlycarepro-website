# Kinly CarePro — Marketing Site Redesign Plan

Homepage, pricing, and site-wide visual + copy redesign for an industry-standard, modern NDIS SaaS presence.

## Locked decisions

| Decision | Choice |
| :--- | :--- |
| Redesign scope | Full visual redesign, entire site |
| Brand palette | Deep teal `#0F4C5C` + vibrant green `#33CA7F` (healthcare) |
| Homepage structure | Condensed (no 9-pillar deep-dive, no payroll tabs) |
| Primary CTA | **"Book a demo"** everywhere |
| Typography | Inter (body) + a new display font for headlines |

---

## 1. Design system foundation

### 1.1 Color tokens — rewrite `src/index.css` `@theme`
Single source of truth. Replace the indigo/lime tokens and delete the stale `tailwind.config.js` (Tailwind v4 ignores it; it currently declares a conflicting teal palette).

```css
@theme {
  --color-primary: #0F4C5C;       /* deep teal */
  --color-primary-50:  #EAF4F6;
  --color-primary-100: #D3E8EC;
  --color-primary-200: #A6D0D9;
  --color-primary-600: #0C3E4A;
  --color-primary-700: #0A3440;   /* button hover */
  --color-primary-800: #082A34;
  --color-primary-900: #0F2B38;   /* dark section mid */
  --color-primary-950: #061821;   /* dark section deep */

  --color-accent: #33CA7F;        /* vibrant green */
  --color-accent-50:  #EAFBF1;
  --color-accent-100: #D2F5E2;
  --color-accent-600: #2AB36D;    /* accent hover */
  --color-accent-700: #1E9E5F;    /* green text on light bg */

  --color-secondary: #F0F4F8;

  --font-sans: 'Inter', ui-sans-serif, system-ui, sans-serif;
  --font-display: 'Space Grotesk', 'Inter', sans-serif;
}
```

**Replace every hardcoded teal/emerald/indigo value in JSX with tokens:**
- `bg-[#0F4C5C]`, `#061821`, `#0f2b38`, `#0b2b38`, `#0b3b47` → `primary-*` scale.
- `hover:bg-[#0b3b47]` on `bg-primary` buttons → `hover:bg-primary-700`.
- `emerald-*` used as brand/success accent → `accent` / `accent-700`.
- `#3B3766`, `#8BC34A` remnants → delete.

### 1.2 Typography
- Load **Inter** (body/UI) + **Space Grotesk** (display) via `@fontsource` packages (reliable on Vercel) or a Google Fonts `<link>` in `index.html`.
  - Alternative display font if a warmer feel is preferred: **Plus Jakarta Sans** (swap the single `--font-display` token).
- Apply `font-display` to `h1`–`h3`, section eyebrows, and large stat numerals.
- **Note:** Inter is declared in `index.css` today but never actually loaded (no `@fontsource`/link). This must be fixed as part of the font work.

### 1.3 Global meta
- `index.html`: update `theme-color` `#3B3766` → `#0F4C5C`; refresh `<title>`/`<meta description>` to match new positioning.

---

## 2. Copy & wording standards (apply everywhere)

1. **No implementation leaks.** Remove all code identifiers and library names: `TenantRepository.js`, `Redux`, `AvailabilitySlot`, `EarningsRate IDs`, `Pure deterministic time boundary splitting`, `non-SCHADS payroll interpretation`.
2. **No absolute/guarantee claims.** Soften `Zero-Rejection`, `100% Deterministic Accuracy`, `100% Deterministic Rate Accuracy` (ACL §29 risk). Use "designed to", "fewer", "deterministic".
3. **Benefit-first.** One idea per sentence; lead with outcome, not mechanism.
4. **Pillar count = 9** everywhere (fix the `8` in `TcoCalculator`).
5. **Single primary CTA = "Book a demo".**
6. **Date-stamp** all competitor pricing and add the §2.3 disclaimer to comparison surfaces.

### Key replacements

| Current | Replace with |
| :--- | :--- |
| Hero subhead: "Uniting real-time GPS mobile care, deterministic NDIS billing, non-SCHADS payroll interpretation, Guardian AI note quality assurance, and executive reporting in one high-performance platform." | "GPS-verified care, deterministic NDIS billing, AI note QA, and payroll — all in one platform." |
| "Zero-Rejection NDIS Bulk Billing. 100% Deterministic Accuracy." | "Fewer claim rejections with deterministic NDIS billing." |
| "100% Deterministic Rate Accuracy" | "Deterministic rate accuracy" |
| "non-SCHADS payroll interpretation" / "(Non-SCHADS)" | "award-based payroll engine" (explain in a bullet, not the headline) |
| "TenantRepository.js Scoped Isolation Guarantee" | "Guaranteed tenant data isolation" |
| "Offline-First Redux sync" | "Works offline, syncs automatically" |
| "AvailabilitySlot conflict validation" | "Automatic double-booking prevention" |
| "Pure deterministic time boundary splitting at 6:00 AM, 8:00 PM, and 12:00 AM in local IANA timezone" | "Automatic 6 AM / 8 PM / 12 AM rate splits" |
| "Mapped to EarningsRate IDs" | "Maps to Xero pay items" |
| "The Code-Backed Solution" (eyebrow) | "Everything included" |
| "All 8 Core Platform Pillars" (TCO calc) | "All 9 Core Platform Pillars" |
| CTAs: "Book Live Platform Walkthrough" / "Book Walkthrough" / "Book Live Walkthrough" / "Start 30-Day Pilot" | "Book a demo" |

---

## 3. Homepage restructure (`src/pages/Home.jsx`)

Condensed, conversion-focused order:

1. `Hero` — rewritten headline + one-line subhead; trust badges; "Book a demo" + "Explore features"; product screenshot with browser chrome (re-token).
2. `ProblemStrip` — 4 pain points, tightened copy.
3. **NEW `FeatureGrid`** — compact 9-feature grid (icon + one-line benefit, no mockups); links to `/features`. **Replaces the full `Features` deep-dive.**
4. `GuardianOverview` — keep as the flagship differentiator spotlight, condense copy.
5. `PricingTeaser` — single card anchored on **$25/mo** (see §4).
6. `SocialProof` — "Founding Provider Program"; refine copy, remove "Limited Spots Available" scarcity.
7. `SecurityStrip` — re-token, keep 6 trust badges.
8. **NEW `FaqCompact`** — 3–4 pricing/trust FAQs (SEO + objection handling). *Optional but recommended.*
9. **NEW `FinalCta`** — closing "Book a demo" banner.

**Removed from homepage:** `Features` (9-pillar deep-dive) and `PayrollEngineSection` (interactive tabs). Both remain on `/features`.

---

## 4. Pricing page restructure (`src/components/Pricing.jsx`)

1. **Header** — rewrite.
2. **Single plan card** — anchor the big number on **$25/mo**:
   - Monthly toggle: `$25 / participant / month`.
   - Annual toggle: `$20.83 / participant / month (billed annually — save 2 months)`. Drop the confusing `$250 / year` as the hero figure.
   - Keep the 12-item inclusion list.
3. **TCO calculator** (`TcoCalculator.jsx`) — fix `All 8 Core Platform Pillars` → `9`; mark competitor pricing as estimates ("verify current pricing on vendor site"); keep "Book a demo" CTA.
4. **ShiftCare battlecard** — add date-stamp **"Verified as of August 2026"** and a link to `/vs/shiftcare` (which carries the §2.3 disclaimer).
5. **FAQ** — tighten.
6. **Final CTA** — "Book a demo".

**Removed:** the standalone 9-pillar "What's Included" grid (duplicates the card's inclusion list and `/features`).

---

## 5. Site-wide consistency pass

- `Navbar` — CTA → "Book a demo"; fix the logo `scale-250` class (not a valid Tailwind class — likely renders incorrectly); re-token.
- `Footer` — align CTA/labels; keep trademark disclaimer.
- `Features.jsx` / `FeaturesPage.jsx` — copy cleanup + token swap (still lives on `/features`).
- `GuardianAI.jsx`, `PayrollEngineSection.jsx`, `ExperienceShowcase.jsx` — token + copy pass (only on `/features`).
- `SecurityPage`, `CompliancePage`, `ShiftCareComparisonPage`, `WhyParticipantPricingPage`, `NdisPriceGuidePage`, `ResourcesPage`, `AboutPage`, `ContactPage`, `LegalLayout`, `PrivacyPolicyPage`, `TermsPage` — token swap + copy sweep.
- `SEO.jsx` defaults + per-page titles/descriptions — align with new wording.

---

## 6. Ordered task list

1. **Design tokens**: rewrite `index.css` `@theme`; delete `tailwind.config.js`; add fonts; update `index.html` meta.
2. **Shared chrome**: `Navbar`, `Footer`.
3. **Homepage components**: `Hero`, `ProblemStrip`, new `FeatureGrid`, `GuardianOverview`, `PricingTeaser`, `SocialProof`, `SecurityStrip`, new `FaqCompact`, new `FinalCta`.
4. **Homepage wiring**: update `Home.jsx` imports/order.
5. **Pricing**: `Pricing.jsx`, `TcoCalculator.jsx`, `PricingPage.jsx` SEO copy.
6. **Remaining pages**: token + copy pass per §5.
7. **Consistency sweep**: grep for banned strings (below) and fix residuals.
8. **Validation**: lint + build + manual QA.

---

## 7. Validation

```bash
npm run lint
npm run build
npm run dev   # manual review: homepage, /pricing, mobile menu, /features
```

Grep sweep for leftovers:
```
TenantRepository | Redux | AvailabilitySlot | EarningsRate | non-SCHADS | Zero-Rejection | "100% Deterministic" | "8 Core" | Walkthrough | 30-Day Pilot | #3B3766 | #8BC34A | scale-250
```

Manual QA checklist:
- Homepage length meaningfully shorter than today (single scroll-through of features).
- No indigo buttons hovering to teal; single teal/green identity.
- Pricing anchor reads `$25/mo`; annual toggle shows `$20.83/mo`.
- Competitor pricing carries a date-stamp and disclaimer link.
- All primary CTAs read "Book a demo".
- Display font renders on headlines; Inter actually loads.

---

## 8. Risks & out of scope

- **Competitor claims**: ShiftCare figures (`$10/worker`, `$15/admin`, Pro surcharge) must be verified and date-stamped or removed (ACL risk). Confirm current figures before launch.
- **Assets**: `hero_dashboard.png`, `dashboard_mockup.png`, etc. may still show old UI colors — see `ASSET_REPLACEMENT_GUIDE.md`. Regenerating screenshots is a separate task.
- **8 vs 9 pillars**: the marketing brief (`ndis_pms_product_marketing_brief.md`) lists 8 pillars; the site has 9. This plan standardizes the **site** on 9; the brief is out of scope but should be reconciled separately.
- **Social proof**: no real customer logos/testimonials exist — do not fabricate them; keep the "Founding Provider Program" until real quotes are available.
- Unused assets (`react.svg`, `TrueCare_logo.png`) — confirm unused before deleting.
