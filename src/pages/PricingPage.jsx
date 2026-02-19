import React from 'react';
import SEO from '../components/SEO';
import Pricing from '../components/Pricing';
import FAQSection from '../components/FAQSection';

const PricingPage = () => {
  return (
    <>
      <SEO
        title="Pricing - From $49/month | NDIS Software"
        description="Affordable NDIS software. Solo plan from $49/month. All plans include mobile apps, rostering, billing, and Guardian safety checks. 48-hour implementation."
        keywords="NDIS software pricing, care management cost, NDIS platform price, sole trader NDIS software, NDIS software plans, affordable NDIS software"
        url="https://www.kinlycarepro.com/pricing"
      />
      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-slate-50 text-center px-4">
        <p className="text-accent font-semibold tracking-[0.4em] uppercase text-xs">Pricing</p>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">Transparent plans for every provider size.</h1>
        <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
          Start with our <strong>Solo Plan</strong> for independent providers or choose <strong>Starter</strong> for growing teams. No hidden fees.
        </p>
      </section>
      <Pricing />
      <FAQSection />
    </>
  );
};

export default PricingPage;
