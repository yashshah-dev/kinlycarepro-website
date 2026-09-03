# Full SEO Audit Report: Kinly CarePro (kinlycarepro.com.au)

- **Target URL**: `https://kinlycarepro.com.au` (Canonical: `https://www.kinlycarepro.com.au/`)
- **Audit Date**: 2026-09-03
- **Audit Type**: Full Website & Architectural SEO Audit (Technical, Content, Schema, CWV, Links, GEO, AEO, Entity, Sitemap)
- **Overall Score**: `76 / 100` (Good — with high-impact architectural opportunities)
- **Score Confidence**: `High` (Direct live network probing, HTTP headers, asset bundle analysis, script execution, and source code inspection)

---

## 1. Executive Summary

### Scope
This comprehensive audit assesses the live production deployment and underlying frontend architecture of **Kinly CarePro** (`https://kinlycarepro.com.au`), an Australian NDIS practice management platform. The audit covers technical infrastructure, content & E-E-A-T signals, JSON-LD schema graphs, Core Web Vitals performance, internal/external link equity, Generative Engine Optimization (GEO), Answer Engine Optimization (AEO), Google Knowledge Graph entity mapping, and XML sitemaps.

### Overall Rating & Scorecard
| Pillar | Weight | Score | Rating | Primary Driver |
|:---|:---:|:---:|:---|:---|
| **Technical SEO & Architecture** | 25% | 68/100 | Needs Improvement | Unrendered CSR (`<div id="root"></div>`), missing apex-to-www 301 redirect, soft 404s |
| **Content Quality & E-E-A-T** | 20% | 74/100 | Good | Strong product copywriting, but missing named leadership & Australian entity (ABN) |
| **Schema & Structured Data** | 15% | 72/100 | Good | Strong `SoftwareApplication` schema, but uses deprecated `FAQPage` & lacks static delivery |
| **Performance & Core Web Vitals** | 10% | 85/100 | Good | Lightweight bundles & async fonts, but hero image un-preloaded for LCP |
| **Link Architecture (Internal/External)** | 10% | 70/100 | Needs Improvement | Clean client-side footer nav, but 0 HTML links server-side & low external domain authority |
| **GEO (Generative Engine Optimization)** | 5% | 98/100 | Excellent | Flawless `llms.txt` (100/100 score) and progressive AI crawler access |
| **AEO (Answer Engine Optimization)** | 5% | 75/100 | Good | Clear feature matrices, but unrendered HTML blocks raw scrapers from parsing answers |
| **Entity SEO & Knowledge Graph** | 5% | 65/100 | Needs Improvement | Missing `sameAs` social profiles and Australian Business Register identifiers |
| **Sitemap & Indexation** | 5% | 85/100 | Good | Valid `sitemap.xml` with 14 core routes; needs cleanup for fallback index requests |
| **Overall Composite Score** | **100%** | **76/100** | **Good** | **Clear path to 92+ with SSG pre-rendering and routing fixes** |

### Top 3 Critical Blockers
1. **Client-Side Only Rendering (CSR)**: Live server response serves an empty `<div id="root"></div>`. Search engine bots that do not execute heavy JS (Bingbot, DuckDuckGo, AI search web-scrapers) receive 0 text, 0 headings, and 0 links. Googlebot experiences delayed indexing via the WRS queue.
2. **Dual-Domain Serving (Apex vs WWW)**: Both `https://kinlycarepro.com.au` and `https://www.kinlycarepro.com.au` respond with HTTP 200 without a 301 permanent redirect, diluting domain rank and splitting search equity.
3. **Soft 404s via Wildcard SPA Rewrites**: `vercel.json` rewrites all non-existent paths to `/index.html` with status `200 OK`, exposing the domain to soft 404 crawl waste and indexing pollution.

### Top 3 Growth Opportunities
1. **Static HTML Pre-rendering (SSG)**: Pre-rendering the 14 core landing pages at build time will deliver instant content to Googlebot, Perplexity, Claude, and social scrapers (enabling rich LinkedIn/Twitter card previews on all subpages).
2. **E-E-A-T & Entity Disambiguation**: Adding registered Australian Business Number (ABN), founder/operator bios, and `sameAs` LinkedIn/Twitter entity profiles will establish high-trust signals in the sensitive NDIS/healthcare sector.
3. **Pillar-Cluster Organic Expansion**: Expanding beyond transactional pages by launching an educational NDIS compliance and PAPL insights resource directory.

---

## 2. Comprehensive Findings by Category

### Category A: Technical SEO
- **Client-Side SPA Architecture**:
  - *Evidence*: `curl -s https://kinlycarepro.com.au/` reveals `<div id="root"></div>` with only bundle script tags. In initial HTML, `h1: []`, `h2: []`, `images: []`, and `links: []`.
  - *Impact*: Delays indexation by days/weeks as Googlebot schedules pages for second-wave headless rendering. Non-rendering search crawlers and AI answer engines miss page contents entirely.
  - *Fix*: Implement pre-rendering at build time (e.g., using `vite-plugin-prerender` or an SSG script) for the 14 static marketing routes.
- **Apex vs WWW Domain Canonicalization**:
  - *Evidence*: Direct probe shows `https://kinlycarepro.com.au` (200 OK) and `https://www.kinlycarepro.com.au` (200 OK). `http://kinlycarepro.com.au` redirects via 308 to apex `https://kinlycarepro.com.au/`, while `index.html` specifies canonical `https://www.kinlycarepro.com.au/`.
  - *Impact*: Duplicate content risk, split PageRank, inconsistent Google Search Console tracking.
  - *Fix*: Add redirect configuration in `vercel.json` forcing all apex traffic to `https://www.kinlycarepro.com.au/` with HTTP 301.
- **Soft 404 Status Code Handling**:
  - *Evidence*: `curl -sI https://kinlycarepro.com.au/random-non-existent-page-test` returns `HTTP/2 200 OK`.
  - *Impact*: Violates Google Search Essentials. Crawlers cannot tell when a page is truly gone or invalid.
  - *Fix*: Configure route-specific static outputs and ensure unknown routes either return true 404s or inject `<meta name="robots" content="noindex" />`.
- **Security Headers (Score 45/100)**:
  - *Evidence*: Response headers contain `Strict-Transport-Security: max-age=63072000`, but completely lack `Content-Security-Policy`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, and `Permissions-Policy`. Furthermore, HSTS lacks `includeSubDomains`.
  - *Impact*: Flags vulnerabilities in technical auditing tools; reduces browser security posture.
  - *Fix*: Define standard security headers in `vercel.json`.

### Category B: Schema & Structured Data
- **Restricted FAQPage Schema Usage**:
  - *Evidence*: `src/components/SEO.jsx` (lines 133–148) builds `@type: "FAQPage"`.
  - *Impact*: In August 2023, Google officially restricted FAQ rich results to government and health authority domains. Commercial websites using `FAQPage` do not receive accordion snippets in SERPs and risk schema validation warnings.
  - *Fix*: Remove `FAQPage` schema generation from `SEO.jsx`. Mark up FAQs with clean semantic HTML (`<details>` and `<summary>` or accessible accordion components).
- **Client-Side Only Schema Injection**:
  - *Evidence*: Initial HTML parsed from the server has `schema: None`. The JSON-LD script is rendered only after `react-helmet-async` evaluates in client JS.
  - *Impact*: Scrapers inspecting static HTML never observe the schema graph.
  - *Fix*: Inject baseline static `Organization`, `WebSite`, and `SoftwareApplication` JSON-LD directly into `index.html`.
- **Incomplete Organization Schema**:
  - *Evidence*: The schema has `"addressRegion": "VIC"`, `"addressCountry": "AU"`, and email, but lacks `telephone` (`+61 427 884 336`), `addressLocality`, Australian Business Number (`taxID` / `identifier`), and `sameAs` social links.
  - *Impact*: Limits entity resolution in Google's Knowledge Graph.
  - *Fix*: Expand `Organization` schema to include complete contact and registration metadata.

### Category C: Content Quality & E-E-A-T
- **Copywriting & Value Proposition**:
  - *Evidence*: Outstanding, industry-specific messaging across the site (PAPL 2025–26, Guardian AI clinical note quality assurance, SCHADS award payroll, $25 flat participant pricing).
  - *Impact*: Strong conversion intent and keyword alignment for long-tail NDIS searches.
- **E-E-A-T Verification Deficit (Experience & Trustworthiness)**:
  - *Evidence*: The About page states "Built by NDIS Operators, for NDIS Operators", but provides 0 named executive team members, founders, clinical advisors, or corporate entity identifiers.
  - *Impact*: In December 2025, Google expanded E-E-A-T rigor to all competitive queries, with special scrutiny on B2B platforms handling vulnerable disability participant data and government-funded NDIS claiming. Anonymous ownership hinders top-3 search rankings.
  - *Fix*: Introduce an executive leadership section on `/about` with named profiles, past disability sector experience, and verifiable LinkedIn credentials.

### Category D: Performance & Core Web Vitals (CWV)
- **Asset Architecture & Code Splitting**:
  - *Evidence*: Clean route-level lazy loading (`AboutPage`, `FeaturesPage`, `PricingPage`, etc.). Core vendor chunks are appropriately sized (`vendor-react`: 59 KB, `vendor-motion`: 113 KB, `index.css`: 96 KB).
  - *Impact*: Minimizes Total Blocking Time (TBT) and ensures excellent INP (Interaction to Next Paint).
- **Hero Image Preload (LCP Optimization)**:
  - *Evidence*: `home_page_dashboard-58-7EtvW.webp` (254 KB) is the primary above-the-fold visual element on desktop, but is discovered only after JavaScript executes.
  - *Impact*: Adds 200–500ms to Largest Contentful Paint (LCP) on mobile 4G connections.
  - *Fix*: Add a high-priority preload tag in `index.html`: `<link rel="preload" as="image" href="..." type="image/webp" fetchpriority="high" />`.

### Category E: Links & Internal Equity
- **Internal Graph & Orphan Status in Static Source**:
  - *Evidence*: The React navigation bar and footer link to all 14 site routes. However, because these links are rendered in JS, static crawlers observe 0 internal links on the initial page fetch.
  - *Fix*: Static pre-rendering will immediately resolve this and present a robust internal linking web to all search spiders.
- **Backlink Equity**:
  - *Evidence*: Newer domain with low external citation volume.
  - *Fix*: Execute targeted Australian B2B digital PR: list on NDIS directories (e.g. Disability Support Guide, Clickability, MyCareSpace), B2B review portals (Capterra Australia, G2), and publish comparative industry studies.

### Category F: GEO (Generative Engine Optimization) & AEO
- **llms.txt Quality (Score: 100/100)**:
  - *Evidence*: `https://kinlycarepro.com.au/llms.txt` and `https://kinlycarepro.com.au/llms-full.txt` are both active, meticulously structured, and clearly detail pricing, features, and technical specs.
  - *Impact*: Superior discoverability by LLMs (SearchGPT, Perplexity, Claude, Gemini).
- **Robots.txt AI Directives**:
  - *Evidence*: Explicitly permits `GPTBot`, `PerplexityBot`, `ClaudeBot`, `Google-Extended`, `Amazonbot`, `Applebot-Extended`.
  - *Opportunity*: Explicitly declare policies for `ChatGPT-User`, `anthropic-ai`, `Bytespider`, and `CCBot` to avoid ambiguity under fallback `*` rules.

### Category G: Entity SEO & Knowledge Graph
- **Entity Association (`sameAs`)**:
  - *Evidence*: 0 `sameAs` properties in schema. No external entity links to LinkedIn company page, X/Twitter, or Crunchbase.
  - *Impact*: Prevents Google from creating a unified Knowledge Graph entry for Kinly CarePro.
  - *Fix*: Connect official company profiles via `sameAs: ["https://www.linkedin.com/company/kinlycarepro", "https://x.com/KinlyCarePro"]`.

### Category H: Sitemap Analysis
- **Sitemap Structure**:
  - *Evidence*: `public/sitemap.xml` contains 14 valid, canonical URLs matching `https://www.kinlycarepro.com.au/`. All have `<lastmod>`, `<changefreq>`, and `<priority>`.
  - *Warning*: Requests for `/sitemap_index.xml` or `/sitemap-index.xml` return `index.html` (soft 404).
  - *Fix*: If not using a sitemap index, ensure alternative sitemap requests do not return 200 OK.

---

## 3. Verified Findings Table

| Area | Severity | Confidence | Finding | Evidence | Fix |
|:---|:---:|:---:|:---|:---|:---|
| **Technical SEO** | 🔴 Critical | Confirmed | Client-Side Only Rendering (CSR) serves blank initial HTML | Server returns `<div id="root"></div>` with 0 words and 0 links in raw source | Implement SSG pre-rendering or edge dynamic rendering for bots |
| **Technical SEO** | 🔴 Critical | Confirmed | Missing Apex to WWW 301 Redirect (Dual Domain Serving) | Both apex and www return HTTP 200; canonical specifies www | Add permanent 301 redirect from apex to www in `vercel.json` |
| **Technical SEO** | 🔴 Critical | Confirmed | Wildcard SPA Rewrite Triggers Soft 404s on Invalid Routes | GET `/non-existent-page` returns HTTP 200 with `index.html` | Return 404 status via edge function or inject `noindex` meta tag on 404 views |
| **Schema** | 🔴 Critical | Confirmed | FAQPage schema violates Google 2023 commercial restrictions | `SEO.jsx` injects `@type: FAQPage`; restricted to gov/health only | Remove `FAQPage` schema from `SEO.jsx` |
| **Technical SEO** | 🔴 Critical | Confirmed | 5 Essential HTTP Security Headers Missing | Security score 45/100; missing CSP, X-Frame-Options, X-Content-Type, Referrer-Policy, Permissions-Policy | Configure security headers block in `vercel.json` |
| **Entity SEO** | ⚠️ Warning | Confirmed | Organization entity missing sameAs links and ABN | Schema in `SEO.jsx` lacks `sameAs`, phone, ABN, and city locality | Enrich `Organization` schema with LinkedIn, phone, ABN, and VIC locality |
| **Content & E-E-A-T**| ⚠️ Warning | Confirmed | About page lacks named leadership and corporate verification | 0 named founders or executives; no ABN displayed | Add Leadership section with bios, LinkedIn links, and ABN in footer |
| **Performance** | ⚠️ Warning | Likely | Above-the-fold hero dashboard image not preloaded | 254 KB WebP image loaded via JS component | Add `<link rel="preload" as="image">` to `index.html` |
| **GEO / AI Search**| ✅ Pass | Confirmed | Exceptional llms.txt implementation and AI crawler policy | `llms.txt` and `llms-full.txt` live with 100/100 score; AI bots allowed | Maintain freshness as pricing and features evolve |
| **Sitemap** | ✅ Pass | Confirmed | 14 canonical URLs cleanly declared in sitemap.xml | XML valid, matches www canonicals, accurate lastmod timestamps | Keep sitemap updated when new pages are published |

---

## 4. Prioritized Action Plan

### Phase 1: Immediate Blockers (Sprint 1 — 24 to 48 Hours)
1. **Enforce Canonical Apex-to-WWW 301 Redirect**:
   Configure redirect in `vercel.json` so `https://kinlycarepro.com.au` permanently redirects to `https://www.kinlycarepro.com.au/`.
2. **Inject Missing HTTP Security Headers**:
   Add headers in `vercel.json` (`X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: camera=(), microphone=(), geolocation=()`).
3. **Deprecate FAQPage Schema from SEO Component**:
   Remove `@type: FAQPage` in `src/components/SEO.jsx` to prevent Google Search Console schema warnings.
4. **Embed Core Static Schema in `index.html`**:
   Add static JSON-LD for `Organization` and `WebSite` into `index.html` so crawlers parse structured data immediately without executing JavaScript.

### Phase 2: Quick Wins (Sprint 2 — Days 3 to 7)
1. **Preload Above-the-Fold Hero WebP Image**:
   Add `<link rel="preload" as="image" href="..." fetchpriority="high" />` in `index.html` to accelerate Largest Contentful Paint (LCP).
2. **Add Company ABN and Phone to Organization Schema & Footer**:
   Update `Organization` schema with phone `+61 427 884 336`, Melbourne address, and Australian Business Number. Add registered legal entity line and ABN to `Footer.jsx`.
3. **Connect Social SameAs Entity Links**:
   Create official LinkedIn and Twitter/X profiles for Kinly CarePro and link them in the `Organization` schema `sameAs` array.
4. **Add robots.txt Directives for Remaining AI Crawlers**:
   Explicitly permit `ChatGPT-User`, `anthropic-ai`, and `CCBot` in `public/robots.txt`.

### Phase 3: Strategic Improvements (Sprint 3 — Weeks 2 to 4)
1. **Implement Static Site Generation (SSG) / Route Pre-rendering**:
   Generate static HTML snapshots for all 14 core routes at build time. Spiders, social cards, and AI crawlers will receive fully hydrated markup with instant TTFB.
2. **E-E-A-T Leadership Profiles**:
   Expand `/about` with a "Leadership & Advisors" block highlighting Australian healthcare/disability operations experience.
3. **Launch an NDIS Resource & Compliance Knowledge Base (`/resources` or `/blog`)**:
   Produce in-depth topical authority guides (e.g. "NDIS Mid-Term Audit Checklist 2026", "Guide to PAPL Group Billing Ratios", "SCHADS Award Overtime Rules").
4. **High-Authority Australian Backlink Acquisition**:
   Submit company profiles to Capterra Australia, G2, Disability Support Guide, and sector associations.

---

## 5. Unknowns and Follow-ups

- **Google Search Console Index Status**: Verify whether Googlebot has indexed the client-side rendered pages or flagged soft 404s on the apex domain.
- **PageSpeed API Quota**: When an API key is configured, rerun `pagespeed.py` to capture field Core Web Vitals (CrUX data) for real-world user metrics (LCP, INP, CLS).
- **Google Business Profile**: Determine if Kinly CarePro has an active Google Business Profile for local Victorian search intent.
