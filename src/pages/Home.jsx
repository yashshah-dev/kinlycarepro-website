import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';

import ProblemStrip from '../components/ProblemStrip';
import GuardianOverview from '../components/GuardianOverview';
import Features from '../components/Features';

import SocialProof from '../components/SocialProof';
import PricingTeaser from '../components/PricingTeaser';

const Home = () => {
  return (
    <>
      <SEO
        title="NDIS Software for Australian Providers | Kinly CarePro"
        description="The complete NDIS management platform. Mobile apps, smart rostering, one-click PRODA billing, and Guardian compliance checks. 48-hour implementation."
        keywords="NDIS software, NDIS management platform, care provider software, NDIS rostering, NDIS billing, PRODA export, disability support software, Australian NDIS, SIL software, community care software"
        url="https://kinlycarepro.com"
      />

      {/* 1. Hero - Value proposition + trust signals */}
      <Hero />



      {/* 3. Problem - Pain points strip */}
      <ProblemStrip />

      {/* 4. Guardian Overview - Compliance engine highlight */}
      <GuardianOverview />

      {/* 5. Features - Core capabilities (4 modules) */}
      <Features />

      {/* 6. Social Proof - Testimonials */}
      <SocialProof />

      {/* 7. Pricing Teaser - 2 plans only */}
      <PricingTeaser />
    </>
  );
};

export default Home;
