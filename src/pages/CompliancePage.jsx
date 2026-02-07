import React from 'react';
import SEO from '../components/SEO';
import ComplianceSection from '../components/ComplianceSection';
import TrustSignals from '../components/TrustSignals';
import FAQSection from '../components/FAQSection';

const CompliancePage = () => {
  return (
    <>
      <SEO
        title="NDIS Audit Protection & Incident Management"
        description="Pass NDIS audits with one-click exports, automated incident management, restrictive practice tracking, and complete audit trails. Guardian safety checks ensure documentation quality."
        keywords="NDIS audit, NDIS compliance, incident management, restrictive practice, audit trail, NDIS documentation, practice standards, quality assurance"
        url="https://kinlycarepro.com.au/compliance"
      />
      <section className="pt-32 pb-16 bg-slate-900 text-center text-white px-4">
        <p className="text-emerald-300 font-semibold tracking-[0.4em] uppercase text-xs">Compliance</p>
        <h1 className="text-4xl md:text-5xl font-bold mt-4">Built for NDIS audits, incident management, and safeguarding.</h1>
        <p className="mt-6 text-lg text-slate-200 max-w-3xl mx-auto">
          Guardian monitors every shift, restrictive practice, and roster change so you can hand auditors a complete evidence trail in seconds.
        </p>
      </section>
      <ComplianceSection />
      <TrustSignals />
      <FAQSection />
    </>
  );
};

export default CompliancePage;
