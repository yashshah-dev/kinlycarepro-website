import React from 'react';
import SEO from '../components/SEO';
import ResourcesSection from '../components/ResourcesSection';
import FAQSection from '../components/FAQSection';

const ResourcesPage = () => {
  return (
    <>
      <SEO
        title="Resources - NDIS Implementation Guides & Audit Checklists"
        description="Download implementation guides, NDIS pricing checklists, ROI models, and audit preparation resources. Free guides for NDIS care providers."
        keywords="NDIS implementation guide, NDIS audit checklist, NDIS pricing guide, care management resources, NDIS ROI calculator, NDIS best practices"
        url="https://www.kinlycarepro.com/resources"
      />
      <section className="pt-32 pb-16 bg-slate-100 text-center px-4">
        <p className="text-accent font-semibold tracking-[0.4em] uppercase text-xs">Resources</p>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">Audit-ready decks, checklists, and ROI models.</h1>
        <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
          Share these assets with boards, auditors, and finance teams to accelerate approval.
        </p>
      </section>
      <ResourcesSection />
      <FAQSection />
    </>
  );
};

export default ResourcesPage;
