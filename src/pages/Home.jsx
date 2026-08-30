import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ProblemStrip from '../components/ProblemStrip';
import FeatureGrid from '../components/FeatureGrid';
import GuardianOverview from '../components/GuardianOverview';
import PricingTeaser from '../components/PricingTeaser';
import SocialProof from '../components/SocialProof';
import SecurityStrip from '../components/SecurityStrip';
import FAQCompact from '../components/FAQCompact';
import FinalCta from '../components/FinalCta';

const homeFaqs = [
  {
    question: 'Does Guardian make autonomous clinical decisions?',
    answer: 'No. Guardian provides compliance suggestions only. Staff approve all changes and remain the documented authors. A full audit trail is preserved.'
  },
  {
    question: 'Can staff check in from home?',
    answer: 'No. Kinly CarePro geofences every participant location. Shifts cannot start unless staff are physically inside the approved radius.'
  },
  {
    question: 'What happens if the internet goes down?',
    answer: 'The mobile app works fully offline. Staff can check in/out and capture notes without reception. Data syncs automatically when connectivity returns.'
  },
  {
    question: 'Do we have to update pricing guides manually?',
    answer: 'No. Kinly CarePro automatically ingests the latest NDIS Pricing Arrangements including TTP, weekend, and public holiday rates.'
  },
  {
    question: 'How does the $25/participant/month pricing work?',
    answer: 'Kinly CarePro charges a flat $25 AUD per active participant per month with unlimited support worker and administrator accounts at $0 extra cost.'
  }
];

const Home = () => {
  return (
    <>
      <SEO
        title="Kinly CarePro | All-in-One NDIS Practice Management Platform"
        description="The all-in-one, audit-proof NDIS practice management platform. GPS-verified mobile care, deterministic NDIS billing, Guardian AI note QA, and payroll. $25/participant/mo with unlimited staff."
        keywords="NDIS software, NDIS practice management platform, NDIS billing software, PAPL 2025-26, NDIS rostering software, ShiftCare alternative, Guardian AI NDIS compliance, NDIS mobile app GPS, NDIS payroll software"
        url="https://www.kinlycarepro.com"
        faqs={homeFaqs}
      />

      {/* 1. Hero - Value proposition + trust signals + Command Center Preview */}
      <Hero />

      {/* 2. Problem - Pain points strip */}
      <ProblemStrip />

      {/* 3. Feature Grid - Compact 9-core-capabilities overview */}
      <FeatureGrid />

      {/* 4. Guardian AI - Flagship differentiator spotlight */}
      <GuardianOverview />

      {/* 5. Pricing Teaser - Transparent $25/participant/mo */}
      <PricingTeaser />

      {/* 6. Social Proof - Provider personas & Founding program */}
      <SocialProof />

      {/* 7. Bank-Grade Security & Trust Promise */}
      <SecurityStrip />

      {/* 8. Compact FAQ */}
      <FAQCompact />

      {/* 9. Final CTA */}
      <FinalCta />
    </>
  );
};

export default Home;
