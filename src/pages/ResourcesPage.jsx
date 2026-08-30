import React from 'react';
import SEO from '../components/SEO';
import ResourcesSection from '../components/ResourcesSection';
import FAQSection from '../components/FAQSection';

const ResourcesPage = () => {
  return (
    <>
      <SEO
        title="NDIS Resources, Price Guide Explorer & TCO Calculator | Kinly CarePro"
        description="Free NDIS provider tools: PAPL 2025–26 Price Guide Explorer, Software TCO Savings Calculator, ShiftCare Comparison Guide, and Audit Preparation Checklists."
        keywords="NDIS resources, NDIS price guide 2025-26, NDIS TCO calculator, ShiftCare comparison, NDIS audit checklist, care management resources"
        url="https://www.kinlycarepro.com/resources"
      />
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#f2fbff] via-white to-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-accent font-bold tracking-[0.3em] uppercase text-xs">Resources & Free Tools</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mt-4 tracking-tight">
            NDIS Tools, Calculators & Checklists
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Free operational resources to help Australian NDIS providers calculate software margins, search PAPL rates, and stay audit-ready.
          </p>
        </div>
      </section>
      <ResourcesSection />
      <FAQSection />
    </>
  );
};

export default ResourcesPage;
