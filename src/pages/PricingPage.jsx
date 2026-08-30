import React from 'react';
import SEO from '../components/SEO';
import Pricing from '../components/Pricing';
import SecurityStrip from '../components/SecurityStrip';

const pricingFaqs = [
  {
    question: 'How are active participants counted?',
    answer: 'An active participant is anyone who has had at least one shift, progress note, or billable support item logged that month. Paused or inactive participants cost $0.'
  },
  {
    question: 'Are there really zero extra fees for staff and admins?',
    answer: 'Yes. Whether you have 5 support workers or 500 casual carers, all staff and admin accounts are $0. We never charge per worker.'
  },
  {
    question: "What is the minimum monthly commitment?",
    answer: 'Plans start at $99 AUD / month, which includes up to 4 active participants. Beyond 4, billing scales at exactly $25 AUD / participant / month.'
  },
  {
    question: 'Are there setup, implementation, or training fees?',
    answer: 'None. Every provider receives 1 Month of Free 1-on-1 Guided Onboarding Support & Live Staff Training, plus free assisted data migration from legacy platforms.'
  }
];

const PricingPage = () => {
  return (
    <>
      <SEO
        title="NDIS Software Pricing - $25/Participant/Mo | Unlimited Staff | Kinly CarePro"
        description="Transparent NDIS pricing: $25 AUD / active participant / month (minimum $99/mo). Unlimited support worker and admin accounts at $0, and every feature included with zero paywalls."
        keywords="NDIS software pricing, transparent NDIS pricing, participant based NDIS pricing, NDIS PMS pricing Australia, $25 participant NDIS software, unlimited staff NDIS software"
        url="https://www.kinlycarepro.com.au/pricing"
        faqs={pricingFaqs}
        breadcrumbs={[{ name: "Pricing", path: "/pricing" }]}
      />
      <Pricing />
      <SecurityStrip />
    </>
  );
};

export default PricingPage;
