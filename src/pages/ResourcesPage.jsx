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
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Provider operations guides</h2>
          <p className="mt-3 max-w-3xl text-slate-600">Practical starting points for teams evaluating documentation, billing, rostering and software workflows. Check current official requirements before acting on regulatory matters.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              ['NDIS Progress Notes: A Practical Guide','Help teams write clearer records, make handovers useful and maintain a consistent review workflow.','/resources/ndis-progress-notes-guide','/blog-assets/ndis-progress-notes-guide/hero.png','Disability support worker and participant reviewing a support plan at a kitchen table'],
              ['NDIS Billing: Reduce Claim Errors and Rework','Build a service-to-invoice review routine that makes billing exceptions visible earlier.','/resources/ndis-billing-guide','/blog-assets/ndis-billing-guide/hero.png','NDIS provider finance professional reviewing billing workflow on a laptop'],
              ['What to Look For in NDIS Rostering Software','Test rostering software against the real changes, handovers and workforce needs your team manages.','/resources/ndis-rostering-software-guide','/blog-assets/ndis-rostering-software-guide/hero.png','Disability support coordinator and worker reviewing a roster on a tablet'],
              ['NDIS Provider Audit Preparation Checklist','Organise evidence, record ownership and test retrieval before an audit request arrives.','/resources/ndis-audit-preparation-guide','/blog-assets/ndis-audit-preparation-guide/hero.png','Disability service provider manager preparing documentation for an audit'],
              ['NDIS Software Buyer’s Checklist','Compare platforms using real provider workflows, commercial terms and implementation questions.','/resources/ndis-software-buyers-checklist','/blog-assets/ndis-software-buyers-checklist/hero.png','Disability service provider team reviewing software options in a meeting']
            ].map(([title,description,to,image,alt]) => <Link key={to} to={to} className="overflow-hidden rounded-2xl border border-slate-200 bg-white hover:border-primary hover:shadow-md transition"><img src={image} alt={alt} className="w-full aspect-[16/9] object-cover" loading="lazy" width="1536" height="1024"/><div className="p-6"><p className="text-xs font-bold uppercase tracking-widest text-primary">Provider guide</p><h3 className="mt-2 font-bold text-xl text-slate-900">{title}</h3><p className="mt-2 text-slate-600">{description}</p><span className="inline-block mt-4 font-bold text-primary">Read guide →</span></div></Link>)}
          </div>
        </div>
      </section>
      <ResourcesSection />
      <FAQSection />
    </>
  );
};

export default ResourcesPage;
