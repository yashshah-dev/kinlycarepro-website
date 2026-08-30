import React from 'react';
import SEO from '../components/SEO';
import ResourcesSection from '../components/ResourcesSection';
import FAQSection from '../components/FAQSection';

const resourcesFaqs = [
  {
    question: 'Does the compliance system make autonomous clinical decisions?',
    answer: 'No. Guardian is a compliance suggestion tool, not a clinical decision-making system. It reviews documentation and provides improvement suggestions that qualified staff must explicitly approve.'
  },
  {
    question: 'Who is responsible for the final documentation?',
    answer: 'Your staff remain the documented authors and are legally responsible for all clinical notes. Guardian shows suggestions as tracked changes with complete audit trails.'
  },
  {
    question: 'Can staff check in from home?',
    answer: 'No. Kinly CarePro geofences every participant location, so a shift cannot start unless the worker is physically inside the approved radius.'
  },
  {
    question: 'How does Kinly CarePro help with NDIS audits?',
    answer: 'Guardian maintains a One-Click Audit export that bundles progress notes, shift logs, roster diffs, and incident activity with immutable audit trails.'
  }
];

const ResourcesPage = () => {
  return (
    <>
      <SEO
        title="NDIS Resources, Price Guide Explorer & TCO Calculator | Kinly CarePro"
        description="Free NDIS provider tools: PAPL 2025–26 Price Guide Explorer, Software TCO Savings Calculator, ShiftCare Comparison Guide, and Audit Preparation Checklists."
        keywords="NDIS resources, NDIS price guide 2025-26, NDIS TCO calculator, ShiftCare comparison, NDIS audit checklist, care management resources"
        url="https://www.kinlycarepro.com/resources"
        faqs={resourcesFaqs}
        breadcrumbs={[{ name: "Resources & Free Tools", path: "/resources" }]}
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
