import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import VideoSection from '../components/VideoSection';
import Problem from '../components/Problem';
import GuardianAI from '../components/GuardianAI';
import AITransparency from '../components/AITransparency';
import Features from '../components/Features';
import ExperienceShowcase from '../components/ExperienceShowcase';
import SocialProof from '../components/SocialProof';
import ComplianceSection from '../components/ComplianceSection';
import TrustSignals from '../components/TrustSignals';
import ResourcesSection from '../components/ResourcesSection';
import FAQSection from '../components/FAQSection';
import Pricing from '../components/Pricing';

const Home = () => {
  return (
    <>
      <SEO
        title="Kinly CarePro | Complete NDIS Management Platform for Australian Providers"
        description="NDIS management software with mobile apps, smart rostering, one-click PRODA billing, and Guardian safety checks. 48-hour implementation. 4.8★ rated by care providers."
        keywords="NDIS software, NDIS management platform, care provider software, NDIS rostering, NDIS billing, PRODA export, disability support software, Australian NDIS, SIL software, community care software"
        url="https://kinlycarepro.com.au"
      />
      <Hero />
      <VideoSection />
      <Problem />
      <GuardianAI />
      <AITransparency />
      <Features />
      <ExperienceShowcase />
      <SocialProof />
      <ComplianceSection />
      <TrustSignals />
      <ResourcesSection />
      <FAQSection />
      <Pricing />
    </>
  );
};

export default Home;
