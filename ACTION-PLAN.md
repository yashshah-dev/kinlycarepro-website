# Prioritized SEO Action Plan: Kinly CarePro (kinlycarepro.com.au)

- **Target URL**: `https://kinlycarepro.com.au` (Canonical: `https://www.kinlycarepro.com.au/`)
- **Generated**: 2026-09-03
- **Current Score**: `76 / 100` | **Target Score**: `94+ / 100`

---

## 1. Immediate Blockers (Sprint 1: 24–48 Hours)

### Action 1.1: Configure Apex-to-WWW 301 Permanent Redirect & Security Headers in `vercel.json`
- **Priority**: 🔴 Critical
- **Area**: Technical SEO & Security
- **Problem**: Both apex (`kinlycarepro.com.au`) and www (`www.kinlycarepro.com.au`) serve 200 OK. Security score is 45/100 due to missing CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, and Permissions-Policy.
- **Fix**: Update `vercel.json` with redirects and HTTP security headers:

```json
{
  "redirects": [
    {
      "source": "/:path*",
      "has": [
        {
          "type": "host",
          "value": "kinlycarepro.com.au"
        }
      ],
      "destination": "https://www.kinlycarepro.com.au/:path*",
      "permanent": true
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "camera=(), microphone=(), geolocation=()"
        },
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=63072000; includeSubDomains; preload"
        }
      ]
    }
  ],
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

### Action 1.2: Deprecate `FAQPage` Schema in `src/components/SEO.jsx`
- **Priority**: 🔴 Critical
- **Area**: Schema & Structured Data
- **Problem**: Google deprecated FAQ rich results for commercial websites in August 2023. Injecting `@type: "FAQPage"` risks schema penalty or unparsable structured data warnings in Google Search Console.
- **Fix**: In [src/components/SEO.jsx](file:///Users/yash/Documents/Freelance/projects/KinlyCarePro/src/components/SEO.jsx#L133-L148), eliminate the `FAQPage` block or convert it into non-rich FAQ structured documentation. Keep FAQs marked up visually with accessible HTML.

---

### Action 1.3: Embed Baseline Static JSON-LD in `index.html`
- **Priority**: 🔴 Critical
- **Area**: Technical SEO & Schema
- **Problem**: Because `react-helmet-async` only runs after JavaScript hydration, crawlers reading raw server HTML find 0 schema entities.
- **Fix**: Embed baseline `Organization`, `WebSite`, and `SoftwareApplication` JSON-LD directly inside `<head>` in [index.html](file:///Users/yash/Documents/Freelance/projects/KinlyCarePro/index.html):

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.kinlycarepro.com.au/#organization",
      "name": "Kinly CarePro",
      "url": "https://www.kinlycarepro.com.au/",
      "logo": "https://www.kinlycarepro.com.au/logo192.png",
      "email": "support@kinlycarepro.com",
      "telephone": "+61 427 884 336",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Melbourne",
        "addressRegion": "VIC",
        "addressCountry": "AU"
      },
      "sameAs": [
        "https://www.linkedin.com/company/kinlycarepro",
        "https://x.com/KinlyCarePro"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.kinlycarepro.com.au/#website",
      "url": "https://www.kinlycarepro.com.au/",
      "name": "Kinly CarePro",
      "publisher": { "@id": "https://www.kinlycarepro.com.au/#organization" },
      "inLanguage": "en-AU"
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.kinlycarepro.com.au/#software",
      "name": "Kinly CarePro",
      "applicationCategory": "BusinessApplication",
      "applicationSubCategory": "NDIS Practice Management Software",
      "operatingSystem": "Web, iOS, Android",
      "offers": {
        "@type": "Offer",
        "price": "25.00",
        "priceCurrency": "AUD"
      }
    }
  ]
}
</script>
```

---

## 2. Quick Wins (Sprint 2: Days 3–7)

### Action 2.1: Preload Above-the-Fold Hero Image in `index.html`
- **Priority**: ⚠️ Warning / Performance
- **Area**: Core Web Vitals (LCP)
- **Problem**: The hero dashboard mockup (254 KB) is loaded late during React client hydration, slowing down mobile LCP.
- **Fix**: Add preload tag in [index.html](file:///Users/yash/Documents/Freelance/projects/KinlyCarePro/index.html) inside `<head>`:

```html
<link rel="preload" as="image" href="/assets/home_page_dashboard-58-7EtvW.webp" type="image/webp" fetchpriority="high" />
```

---

### Action 2.2: Expand AI Crawler Directives in `public/robots.txt`
- **Priority**: ⚠️ Warning
- **Area**: GEO & AI Search
- **Problem**: 5 AI agents (`ChatGPT-User`, `anthropic-ai`, `Bytespider`, `CCBot`, `FacebookBot`) fall back to default wildcards.
- **Fix**: Add explicit blocks in [public/robots.txt](file:///Users/yash/Documents/Freelance/projects/KinlyCarePro/public/robots.txt):

```txt
User-agent: ChatGPT-User
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: CCBot
Allow: /
```

---

### Action 2.3: Add Australian Business Registration & Contact Details to Footer & Schema
- **Priority**: ⚠️ Warning
- **Area**: E-E-A-T & Entity SEO
- **Problem**: Missing registered company name, ABN, and local phone number on legal/footer components reduces trust for high-value NDIS providers.
- **Fix**:
  1. Add telephone `+61 427 884 336` and ABN (e.g., `ABN: XX XXX XXX XXX`) in [src/components/Footer.jsx](file:///Users/yash/Documents/Freelance/projects/KinlyCarePro/src/components/Footer.jsx).
  2. Include `"taxID": "XX XXX XXX XXX"` in the `Organization` schema in `SEO.jsx`.

---

## 3. Strategic Improvements (Sprint 3: Weeks 2–4)

### Action 3.1: Implement Build-Time Static Site Generation (SSG) / Pre-rendering
- **Priority**: 🔴 High Impact Strategic
- **Area**: Technical SEO, Crawlability & Social Previews
- **Problem**: Pure client-side React leaves crawlers and social media preview bots with blank HTML.
- **Fix**:
  - Integrate a pre-renderer (e.g. `vite-plugin-prerender` or custom Puppeteer/Playwright static export script in `npm run build`) to output pre-rendered `index.html` files for all 14 routes:
    - `/features/index.html`
    - `/guardian-ai/index.html`
    - `/pricing/index.html`
    - `/vs/shiftcare/index.html`
    - `/ndis-price-guide/index.html`
    - `/why-participant-pricing/index.html`
    - `/compliance/index.html`
    - `/security/index.html`
    - `/resources/index.html`
    - `/about/index.html`
    - `/contact/index.html`
    - `/privacy/index.html`
    - `/terms/index.html`

---

### Action 3.2: E-E-A-T Leadership & Governance Overhaul on `/about`
- **Priority**: ⚠️ Strategic
- **Area**: Content Quality & E-E-A-T
- **Problem**: Anonymous B2B platforms struggle under Google's December 2025 algorithm updates.
- **Fix**:
  - Add a dedicated "Leadership & Advisory" section to [src/pages/AboutPage.jsx](file:///Users/yash/Documents/Freelance/projects/KinlyCarePro/src/pages/AboutPage.jsx) featuring named founders/operators with real headshots, background in disability care or health technology, and verified LinkedIn URLs.

---

### Action 3.3: Content Cluster Hub Expansion (`/ndis-insights` or `/resources`)
- **Priority**: 💡 Long-term Growth
- **Area**: Topical Authority & Inbound Links
- **Fix**:
  - Develop 5 pillar cluster articles targeting high-intent provider search queries:
    1. *"NDIS Mid-Term Audit Checklist: 2026 Edition"* (Links to `/compliance`)
    2. *"How to Calculate Group Support Ratios Under PAPL 2025–26"* (Links to `/ndis-price-guide` and `/features`)
    3. *"Overcoming NDIS Claim Rejections & PACE Transition Errors"* (Links to `/features`)
    4. *"SCHADS Award Rostering Guide for Disability Support Workers"* (Links to `/features`)
    5. *"Comparing NDIS Software Pricing: Per-Worker vs Per-Participant"* (Links to `/why-participant-pricing` and `/pricing`)

---

### Action 3.4: Australian Entity Link Building & Digital PR
- **Priority**: 💡 Authority & Domain Trust
- **Area**: Off-Page SEO & Backlinks
- **Fix**:
  - Submit verified business listings to **Disability Support Guide**, **Clickability**, **MyCareSpace**, **Capterra Australia**, and **G2**.
  - Secure brand citations by distributing the **Kinly CarePro NDIS Software TCO Benchmark Report** to Australian disability industry newsletters and associations.

---

## 4. Execution Matrix & Tracking

| Task ID | Task Description | Sprint | Estimated Effort | Target Metric |
|:---:|:---|:---:|:---:|:---|
| **T-01** | Apex-to-WWW 301 redirect & security headers in `vercel.json` | Sprint 1 | 1 hr | 0 redirect loops, 100/100 security score |
| **T-02** | Remove deprecated `FAQPage` schema from `SEO.jsx` | Sprint 1 | 30 mins | 0 Google Search Console rich result warnings |
| **T-03** | Embed static JSON-LD graph into `index.html` | Sprint 1 | 1 hr | Schema visible on curl/raw fetch |
| **T-04** | Preload hero WebP image in `index.html` | Sprint 2 | 30 mins | Sub-1.8s mobile LCP |
| **T-05** | Update `public/robots.txt` with ChatGPT-User, CCBot | Sprint 2 | 15 mins | Complete AI bot coverage |
| **T-06** | Add ABN & Australian phone to footer and schema | Sprint 2 | 1 hr | Verified local entity trust |
| **T-07** | Pre-render 14 static routes during Vite build | Sprint 3 | 4–6 hrs | 100% crawlable raw HTML across all pages |
| **T-08** | Add Leadership team profiles to About page | Sprint 3 | 2 hrs | E-E-A-T score upgrade |
| **T-09** | Publish 5 high-intent NDIS cluster guides | Sprint 3 | 2 weeks | 1,500+ monthly non-brand organic visits |
