import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "Kinly CarePro | All-Inclusive NDIS Practice Management Platform",
  description = "The all-in-one, audit-proof NDIS practice management platform. GPS-verified mobile care, deterministic NDIS billing, AI note QA, and payroll. $25/participant/mo with unlimited staff.",
  keywords = "NDIS software, NDIS practice management software, NDIS billing software, PAPL 2025-26, NDIS rostering software, ShiftCare alternative, Guardian AI NDIS compliance, NDIS mobile app GPS, NDIS payroll software, disability support software Australia",
  image = "/og-image.jpg",
  url = "https://www.kinlycarepro.com",
  type = "website",
  schema = null
}) => {
  const fullTitle = title.includes('Kinly CarePro') ? title : `${title} | Kinly CarePro`;
  const canonicalUrl = url;

  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Kinly CarePro",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "25",
      "priceCurrency": "AUD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "25",
        "priceCurrency": "AUD",
        "unitText": "per active participant per month"
      }
    },
    "description": description,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "142"
    },
    "provider": {
      "@type": "Organization",
      "name": "Kinly CarePro",
      "url": "https://www.kinlycarepro.com",
      "logo": "https://www.kinlycarepro.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AU",
        "addressRegion": "VIC"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Support",
        "email": "support@kinlycarepro.com",
        "areaServed": "AU",
        "availableLanguage": "English"
      }
    }
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
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Kinly CarePro" />
      <meta property="og:locale" content="en_AU" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Australian Geo-Targeting */}
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Kinly CarePro" />
      <meta name="geo.region" content="AU" />
      <meta name="geo.placename" content="Australia" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
