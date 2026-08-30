import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.kinlycarepro.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

const SEO = ({
  title = "Kinly CarePro | All-Inclusive NDIS Practice Management Platform",
  description = "The all-in-one, audit-proof NDIS practice management platform. GPS-verified mobile care, deterministic NDIS billing, Guardian AI note QA, and payroll. $25/participant/mo with unlimited staff.",
  keywords = "NDIS software, NDIS practice management software, NDIS billing software, PAPL 2025-26, NDIS rostering software, ShiftCare alternative, Guardian AI NDIS compliance, NDIS mobile app GPS, NDIS payroll software, disability support software Australia",
  image = DEFAULT_OG_IMAGE,
  url = SITE_URL,
  type = "website",
  faqs = null,
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
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AU",
      "addressRegion": "VIC"
    }
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
    "operatingSystem": "Web Browser, iOS, Android",
    "description": description,
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
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "142",
      "bestRating": "5",
      "worstRating": "1"
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

  // 6. FAQPage Schema (Trigger Google FAQ Accordion Rich Snippets)
  if (faqs && Array.isArray(faqs) && faqs.length > 0) {
    const faqSchema = {
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question || faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer || faq.a
        }
      }))
    };
    graphEntities.push(faqSchema);
  }

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
