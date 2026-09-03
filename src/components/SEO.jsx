import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.kinlycarepro.com.au';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

const SEO = ({
  title = "Kinly CarePro | All-Inclusive NDIS Practice Management Platform",
  description = "The all-in-one, audit-proof NDIS practice management platform. GPS-verified mobile care, deterministic NDIS billing, Guardian AI note QA, and payroll. $25/participant/mo with unlimited staff.",
  keywords = "NDIS software, NDIS practice management software, NDIS billing software, PAPL 2025-26, NDIS rostering software, ShiftCare alternative, Guardian AI NDIS compliance, NDIS mobile app GPS, NDIS payroll software, disability support software Australia",
  image = DEFAULT_OG_IMAGE,
  url = SITE_URL,
  type = "website",
  faqs: _faqs = null,
  breadcrumbs = null,
  schema = null
}) => {
  const fullTitle = title.includes('Kinly CarePro') ? title : `${title} | Kinly CarePro`;
  const canonicalUrl = url.startsWith('http') ? url : `${SITE_URL}${url}`;
  const fullImageUrl = image.startsWith('http') ? image : `${SITE_URL}${image.startsWith('/') ? '' : '/'}${image}`;

  // 1. Organization Schema
  const organizationSchema = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    "name": "Kinly CarePro",
    "url": SITE_URL,
    "logo": {
      "@type": "ImageObject",
      "url": `${SITE_URL}/logo192.png`,
      "width": "192",
      "height": "192"
    },
    "description": "Australian NDIS practice management platform featuring deterministic billing, GPS caregiver mobile app, Guardian AI note QA, and roster engine.",
    "email": "support@kinlycarepro.com",
    "telephone": "+61 427 884 336",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+61 427 884 336",
      "contactType": "customer support",
      "email": "support@kinlycarepro.com",
      "areaServed": "AU",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.linkedin.com/company/kinlycarepro",
      "https://x.com/KinlyCarePro"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Melbourne",
      "addressRegion": "VIC",
      "addressCountry": "AU"
    },
    "taxID": "84 652 193 841"
  };

  // 2. WebSite Schema
  const websiteSchema = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    "url": SITE_URL,
    "name": "Kinly CarePro",
    "publisher": {
      "@id": `${SITE_URL}/#organization`
    },
    "inLanguage": "en-AU"
  };

  // 3. WebPage Schema
  const webPageSchema = {
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    "url": canonicalUrl,
    "name": fullTitle,
    "description": description,
    "isPartOf": {
      "@id": `${SITE_URL}/#website`
    },
    "inLanguage": "en-AU"
  };

  // 4. Software Application Schema (For main product pages)
  const softwareSchema = {
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/#software`,
    "name": "Kinly CarePro",
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": "NDIS Practice Management Platform",
    "operatingSystem": "Web Browser (Chrome, Safari, Edge), iOS, Android",
    "description": description,
    "featureList": [
      "Deterministic NDIS Billing Engine (PAPL 2025–26)",
      "Guardian AI Clinical Note Quality Assurance",
      "GPS-Verified Mobile Caregiver App with Offline Sync",
      "Smart Rostering & Copy-Week Wizard",
      "Time & Attendance to Payroll Engine (SCHADS compliant)",
      "3-Tier Staff Screening & Compliance Governance",
      "17+ Operational & Financial Reports Hub",
      "Enterprise Multi-Tenant Data Isolation (Sydney AWS)"
    ],
    "offers": {
      "@type": "Offer",
      "price": "25.00",
      "priceCurrency": "AUD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "25.00",
        "priceCurrency": "AUD",
        "unitText": "active participant / month"
      }
    },
    "provider": {
      "@id": `${SITE_URL}/#organization`
    }
  };

  // Assemble the graph entities
  const graphEntities = [organizationSchema, websiteSchema, webPageSchema, softwareSchema];

  // 5. BreadcrumbList Schema
  if (breadcrumbs && Array.isArray(breadcrumbs) && breadcrumbs.length > 0) {
    const breadcrumbSchema = {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": SITE_URL
        },
        ...breadcrumbs.map((crumb, idx) => ({
          "@type": "ListItem",
          "position": idx + 2,
          "name": crumb.name,
          "item": crumb.path.startsWith('http') ? crumb.path : `${SITE_URL}${crumb.path.startsWith('/') ? '' : '/'}${crumb.path}`
        }))
      ]
    };
    graphEntities.push(breadcrumbSchema);
  }

  // Note: Google restricted FAQPage rich results in August 2023 to government/health authority domains only.
  // Commercial SaaS sites must not emit FAQPage schema to prevent GSC validation flags.
  // Visible FAQs are rendered as accessible semantic HTML instead.

  // Custom schema overrides / extensions
  const finalSchema = schema || {
    "@context": "https://schema.org",
    "@graph": graphEntities
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Kinly CarePro" />
      <meta property="og:locale" content="en_AU" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@KinlyCarePro" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Australian Geo-Targeting & Canonical */}
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="language" content="English" />
      <meta name="author" content="Kinly CarePro" />
      <meta name="geo.region" content="AU" />
      <meta name="geo.placename" content="Australia" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
