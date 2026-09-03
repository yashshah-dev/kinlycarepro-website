import React from 'react';
import SEO from '../components/SEO';
import { Users, ShieldCheck, BarChart3, Award, Rocket, Target, Heart, DollarSign, Lock, Building2, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const capabilities = [
  { label: 'Pricing Model', value: '$25 / Participant' },
  { label: 'Staff Accounts', value: '100% Unlimited ($0)' },
  { label: 'Data Residency', value: '100% Sydney AWS' },
  { label: 'Compliance QA', value: 'Guardian AI (0–100)' }
];

const values = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Participant-Centered Care',
    text: 'Every feature is engineered to remove administrative drag so support workers and coordinators can focus on delivering exceptional participant outcomes.'
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Audit-Proof Governance',
    text: 'NDIS Commission compliance, 7-year immutable audit retention, and 3-tier worker screening checks are embedded into daily workflows.'
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Radical Pricing Transparency',
    text: 'No per-worker seat taxes, no hidden feature paywalls. Every provider gets access to the full platform from Day 1.'
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Deterministic Accuracy',
    text: 'Deterministic rate segmentation and automated group ratios eliminate billing errors and claim rejections without manual calculations.'
  }
];

const completedCapabilities = [
  { title: 'Deterministic NDIS Billing & Claim Engine (PAPL 2025–26)', status: 'Live in Production' },
  { title: 'Guardian AI Compliance & Clinical Note Quality QA', status: 'Live in Production' },
  { title: 'GPS Mobile Caregiver App with Offline Sync', status: 'Live in Production' },
  { title: 'Smart Rostering & The Copy-Week Wizard', status: 'Live in Production' },
  { title: 'Time & Attendance to Payroll Engine', status: 'Live in Production' },
  { title: '3-Tier Staff Compliance & Screening Automation', status: 'Live in Production' },
  { title: 'Support Coordination & NDIS Incident Management Hub', status: 'Live in Production' },
  { title: 'Executive Analytics & 17+ Operational Reports Hub', status: 'Live in Production' },
  { title: 'Enterprise Data Isolation & Custom Brand White-Labeling', status: 'Live in Production' }
];

const AboutPage = () => (
  <>
    <SEO
      title="About Kinly CarePro - Australian NDIS Practice Management Software"
      description="Kinly CarePro was created to solve NDIS operational challenges — billing complexity, compliance risk, and per-worker software taxes. Built in Australia for care providers."
      keywords="Kinly CarePro about, NDIS software company, Australian care technology, disability support innovation, NDIS platform, care management"
      url="https://www.kinlycarepro.com.au/about"
      breadcrumbs={[{ name: "About Us", path: "/about" }]}
    />

    {/* Hero */}
    <section className="pt-32 pb-16 bg-gradient-to-b from-[#f2fbff] via-white to-white text-center px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-accent font-bold tracking-[0.3em] uppercase text-xs">About Kinly CarePro</p>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mt-4 tracking-tight">
          Built by NDIS Operators, for NDIS Operators.
        </h1>
        <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          We built Kinly CarePro to disrupt legacy NDIS software models that lock essential features behind expensive tiers and penalize providers with per-worker taxes.
        </p>
      </div>
    </section>

    {/* Mission Section */}
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Empower Australian disability care providers to run audit-proof, profitable, and human-centered organizations without drowning in spreadsheets. Kinly CarePro automates compliance, billing, and workforce operations so teams can focus entirely on high-quality care.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {capabilities.map((cap) => (
              <div key={cap.label} className="p-5 rounded-2xl border border-slate-200 bg-slate-50">
                <p className="text-xl font-extrabold text-slate-900">{cap.value}</p>
                <p className="text-xs uppercase tracking-wide text-slate-500 mt-1">{cap.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 space-y-5">
          {values.map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">{item.icon}</div>
              <div>
                <p className="text-base font-bold text-slate-900">{item.title}</p>
                <p className="text-xs md:text-sm text-slate-600 mt-0.5 leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Leadership & Operational Governance (E-E-A-T) */}
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">Operational Governance</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Built on Real NDIS Sector Experience & Engineering Integrity
          </h2>
          <p className="text-slate-600 text-base mt-4 leading-relaxed">
            Kinly CarePro is designed by Australian care operations veterans and clinical compliance architects who understand the day-to-day realities of NDIS audits, worker screening, and NDIA price limits.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Care Leadership & Operations</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Founded and guided by practitioners with direct experience administering registered NDIS provider operations, SIL facilities, and high-intensity support coordination across Victoria, NSW, and Queensland.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-primary">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> NDIS Practice Standards Aligned
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">100% Australian Data Sovereignty</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Engineered from the ground up on Sydney AWS (ap-southeast-2). Participant health data never leaves Australian borders, strictly satisfying the Privacy Act 1988 (Cth) and Australian Privacy Principles (APPs).
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-700">
              <Award className="w-4 h-4" /> Sydney AWS Infrastructure (ISO 27001)
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center mb-5">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Corporate Entity & Trust</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Registered Australian software enterprise committed to radical pricing transparency, continuous PAPL 2025–26 rate updates, and responsive local support with zero outsourced tiers.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 space-y-1 text-xs text-slate-500 font-mono">
              <p className="flex items-center gap-1.5"><Building2 className="w-3.5 h-3.5 text-primary" /> ABN: 84 652 193 841</p>
              <p className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-primary" /> Melbourne, VIC, Australia</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Product Capabilities Architecture */}
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">Platform Status</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-1">Production Platform Architecture</h2>
          <p className="text-slate-600 text-sm mt-2">
            All 8 core value pillars are fully engineered, verified, and available to all providers.
          </p>
        </div>

        <div className="space-y-3">
          {completedCapabilities.map((item, index) => (
            <div key={index} className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span className="text-sm font-semibold text-slate-900">{item.title}</span>
              </div>
              <span className="text-xs px-3 py-1 bg-emerald-50 text-emerald-800 font-bold rounded-full border border-emerald-200">
                {item.status}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl hover:bg-[#0b3b47] transition-all font-bold text-sm shadow-md"
          >
            Book a demo
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default AboutPage;
