import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import VideoSection from '../components/VideoSection';
import ProblemStrip from '../components/ProblemStrip';
import GuardianOverview from '../components/GuardianOverview';
import Features from '../components/Features';
import ExperienceShowcase from '../components/ExperienceShowcase';
import SocialProof from '../components/SocialProof';
import SecurityStrip from '../components/SecurityStrip';
import FAQCompact from '../components/FAQCompact';
import PricingTeaser from '../components/PricingTeaser';

const Home = () => {
  return (
    <>
      <SEO
        title="Kinly CarePro | Complete NDIS Management Platform for Australian Providers"
        description="NDIS management software with mobile apps, smart rostering, one-click PRODA billing, and Guardian compliance checks. 48-hour implementation. Australian-hosted platform."
        keywords="NDIS software, NDIS management platform, care provider software, NDIS rostering, NDIS billing, PRODA export, disability support software, Australian NDIS, SIL software, community care software"
        url="https://kinlycarepro.com.au"
      />

      {/* 1. Hero - Value proposition + trust signals */}
      <Hero />

      {/* 2. Video - Quick product demo */}
      <VideoSection />

      {/* 3. Problem - Pain points strip */}
      <ProblemStrip />

      {/* 4. Guardian Overview - Compliance engine highlight */}
      <GuardianOverview />

      {/* 5. Features - Core capabilities (4 modules) */}
      <Features />

      {/* 6. Experience Showcase - Staff vs Business tabs */}
      <ExperienceShowcase />

      {/* 7. Social Proof - Testimonials */}
      <SocialProof />

      {/* 8. Security Strip - Trust badges (was Compliance + TrustSignals) */}
      <SecurityStrip />

      {/* 9. FAQ - Common questions (4 items) */}
      <FAQCompact />

      {/* 10. Pricing Teaser - 2 plans only */}
      <PricingTeaser />
    </>
  );
};

export default Home;
