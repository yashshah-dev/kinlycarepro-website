import React from 'react';
import SEO from '../components/SEO';
import Pricing from '../components/Pricing';
import SecurityStrip from '../components/SecurityStrip';

const PricingPage = () => {
  return (
    <>
      <SEO
        title="NDIS Software Pricing - $25/Participant/Mo | Unlimited Staff | Kinly CarePro"
        description="Transparent NDIS pricing: $25 AUD / active participant / month (minimum $99/mo). Unlimited support worker and admin accounts at $0, and every feature included with zero paywalls."
        keywords="NDIS software pricing, transparent NDIS pricing, participant based NDIS pricing, NDIS PMS pricing Australia, $25 participant NDIS software, unlimited staff NDIS software"
        url="https://www.kinlycarepro.com/pricing"
      />
      <Pricing />
      <SecurityStrip />
    </>
  );
};

export default PricingPage;
