import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "Kinly CarePro | Complete NDIS Management Platform for Australian Providers",
  description = "NDIS management software with mobile apps, smart rostering, one-click PRODA billing, and automated safety checks. Built for Australian care providers. 48-hour implementation.",
  keywords = "NDIS software, NDIS management platform, NDIS rostering, NDIS billing, PRODA export, care management software, disability support software, Australian NDIS, care provider software, mobile care app",
  image = "/og-image.jpg",
  url = "https://kinlycarepro.com.au",
  type = "website"
}) => {
  const fullTitle = title.includes('Kinly CarePro') ? title : `${title} | Kinly CarePro`;
  const canonicalUrl = url;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
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

      {/* Additional SEO */}
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Kinly CarePro" />
      <meta name="geo.region" content="AU" />
      <meta name="geo.placename" content="Australia" />

      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Kinly CarePro",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web, iOS, Android",
          "offers": {
            "@type": "Offer",
            "price": "10",
            "priceCurrency": "AUD",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": "10",
              "priceCurrency": "AUD",
              "unitText": "per participant per month"
            }
          },
          "description": description,
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "127"
          },
          "provider": {
            "@type": "Organization",
            "name": "Kinly CarePro",
            "url": "https://kinlycarepro.com.au",
            "logo": "https://kinlycarepro.com.au/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Support",
              "areaServed": "AU",
              "availableLanguage": "English"
            }
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
