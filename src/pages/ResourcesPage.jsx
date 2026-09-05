import React from 'react';
import { Link } from 'react-router-dom';
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
        url="https://www.kinlycarepro.com.au/resources"
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
      <section className="py-14 bg-white"><div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"><h2 className="text-3xl font-bold text-slate-900">Provider operations guides</h2><p className="mt-3 max-w-3xl text-slate-600">Practical starting points for teams evaluating their documentation, billing, rostering and software workflows. Check current official requirements before acting on regulatory matters.</p><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">{[
        ['NDIS Progress Notes: A Practical Guide','/resources/ndis-progress-notes-guide'],
        ['NDIS Billing: Reduce Claim Errors and Rework','/resources/ndis-billing-guide'],
        ['What to Look For in NDIS Rostering Software','/resources/ndis-rostering-software-guide'],
        ['NDIS Provider Audit Preparation Checklist','/resources/ndis-audit-preparation-guide'],
        ['NDIS Software Buyer’s Checklist','/resources/ndis-software-buyers-checklist']
      ].map(([title,to]) => <Link key={to} to={to} className="rounded-2xl border border-slate-200 p-6 hover:border-primary hover:shadow-md transition"><h3 className="font-bold text-lg text-slate-900">{title}</h3><span className="inline-block mt-4 font-bold text-primary">Read guide →</span></Link>)}</div></div></section>
      <ResourcesSection />
      <FAQSection />
    </>
  );
};

export default ResourcesPage;
