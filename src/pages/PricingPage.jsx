import React from 'react';
import SEO from '../components/SEO';
import Pricing from '../components/Pricing';
import FAQSection from '../components/FAQSection';

const PricingPage = () => {
  return (
    <>
      <SEO
        title="Pricing - From $10/participant/month | NDIS Software"
        description="Transparent NDIS software pricing. Starter plan from $10/participant/month. All plans include mobile apps, rostering, billing, and Guardian safety checks. 48-hour implementation."
        keywords="NDIS software pricing, care management cost, NDIS platform price, per participant pricing, NDIS software plans, affordable NDIS software"
        url="https://kinlycarepro.com.au/pricing"
      />
      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-slate-50 text-center px-4">
        <p className="text-accent font-semibold tracking-[0.4em] uppercase text-xs">Pricing</p>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">Transparent plans for every provider size.</h1>
        <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
          Choose Growth to get started fast or Enterprise for dedicated infrastructure, integrations, and compliance strategists.
        </p>
      </section>
      <Pricing />
      <FAQSection />
    </>
  );
};

export default PricingPage;
