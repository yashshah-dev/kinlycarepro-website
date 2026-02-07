import React from 'react';
import SEO from '../components/SEO';
import { Handshake, Building2, Globe2, Layers, ArrowRight } from 'lucide-react';

const partnerTypes = [
  {
    title: 'Implementation & Consulting',
    description: 'Audit specialists, safeguarding consultants, and finance advisors who guide providers through Kinly CarePro rollouts.',
    bullet: 'Includes co-branded playbooks, data migration support, and priority roadmap access.'
  },
  {
    title: 'Technology & Integration',
    description: 'EHR, payroll, HRIS, and analytics platforms that connect to Guardian compliance data feeds.',
    bullet: 'Access secure APIs, webhook templates, and joint go-to-market programs.'
  },
  {
    title: 'Allied Health & SDA Networks',
    description: 'Allied health organisations and SDA operators offering bundled Kinly CarePro deployments.',
    bullet: 'Share best practices, track outcomes, and unlock bundled pricing tiers.'
  }
];



const PartnersPage = () => (
  <>
    <SEO
      title="Partners - Kinly CarePro Integration & Consulting Partners"
      description="Partner with Kinly CarePro to deliver NDIS implementations, integrations, and consulting services. Join our network of implementation specialists and technology partners."
      keywords="Kinly CarePro partners, NDIS implementation partners, care software integration, NDIS consulting partners, technology partnerships"
      url="https://kinlycarepro.com.au/partners"
    />
    <section className="pt-32 pb-16 bg-gradient-to-b from-slate-900 to-slate-800 text-center text-white px-4">
      <p className="text-emerald-300 font-semibold tracking-[0.4em] uppercase text-xs">Partners</p>
      <h1 className="text-4xl md:text-5xl font-bold mt-4">Scale Kinly CarePro with trusted allies.</h1>
      <p className="mt-6 text-lg text-slate-200 max-w-3xl mx-auto">
        We collaborate with consultants, technology vendors, and allied health networks to simplify implementations and unlock new revenue streams.
      </p>
    </section>

    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
        {partnerTypes.map((partner) => (
          <div key={partner.title} className="rounded-3xl border border-slate-200 p-6 bg-slate-50">
            <p className="text-2xl font-semibold text-slate-900">{partner.title}</p>
            <p className="text-slate-600 mt-3">{partner.description}</p>
            <p className="text-sm text-slate-500 mt-4">{partner.bullet}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="py-16 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Partner ecosystem</p>
        <h2 className="mt-4 text-2xl font-bold text-slate-900">Building our partner network</h2>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          We're actively seeking implementation consultants, technology integrators, and allied health networks to join our founding partner program. Early partners receive priority onboarding and co-marketing support.
        </p>
        <div className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-sm border border-emerald-200">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Now Accepting Partner Applications
        </div>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <div className="flex items-center gap-3 text-primary text-sm uppercase tracking-[0.3em]">
            <Handshake className="w-4 h-4" /> Program overview
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mt-4">Why partner with Kinly CarePro?</h2>
          <ul className="mt-6 text-slate-600 space-y-3">
            <li className="flex items-start gap-2"><Globe2 className="w-4 h-4 text-primary mt-1" /> Co-selling and joint marketing budgets.</li>
            <li className="flex items-start gap-2"><Building2 className="w-4 h-4 text-primary mt-1" /> Shared compliance curriculum and accreditation badges.</li>
            <li className="flex items-start gap-2"><Layers className="w-4 h-4 text-primary mt-1" /> Sandbox environments + dedicated solutions engineers.</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-900/95 text-white p-8 flex flex-col gap-6">
          <h3 className="text-2xl font-semibold">Apply to the partner program</h3>
          <p className="text-slate-200">Tell us about your service footprint, integration capabilities, and the value you want to deliver to shared customers.</p>
          <form className="space-y-4">
            <input className="w-full rounded-xl border border-slate-700 bg-transparent p-3" placeholder="Company name" />
            <input className="w-full rounded-xl border border-slate-700 bg-transparent p-3" placeholder="Your role" />
            <textarea className="w-full rounded-xl border border-slate-700 bg-transparent p-3 h-28" placeholder="Partner goals" />
            <button type="button" className="w-full px-4 py-3 rounded-xl bg-accent text-slate-900 font-semibold flex items-center justify-center gap-2">
              Submit application
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  </>
);

export default PartnersPage;
