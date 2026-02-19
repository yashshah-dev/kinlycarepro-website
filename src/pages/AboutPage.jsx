import React from 'react';
import SEO from '../components/SEO';
import { Users, ShieldCheck, BarChart3, Award, Rocket, Target, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const capabilities = [
  { label: 'Implementation target', value: '48 hours' },
  { label: 'Hosting', value: '100% Australian' },
  { label: 'Design focus', value: 'Compliance-first' },
  { label: 'Support model', value: 'Hands-on onboarding' }
];

const values = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Participant-Centered',
    text: 'Every feature is designed to help providers deliver better outcomes for NDIS participants.'
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Compliance Obsessed',
    text: 'Guardian checks are built into every workflow to help you stay audit-ready.'
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Operator Experience',
    text: 'Built by someone who understands the daily challenges of running an NDIS business.'
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Continuous Improvement',
    text: 'Regular updates based on provider feedback and evolving NDIS requirements.'
  }
];

const roadmap = [
  { status: 'complete', event: 'Core platform development with Guardian compliance engine' },
  { status: 'complete', event: 'Mobile app with offline mode and GPS verification' },
  { status: 'complete', event: 'One-click PRODA billing and smart rostering' },
  { status: 'current', event: 'Founding provider program and early access rollout' },
  { status: 'upcoming', event: 'Operations command center and advanced analytics' }
];

const AboutPage = () => (
  <>
    <SEO
      title="About Kinly CarePro - Australian NDIS Software Built for Care Providers"
      description="Kinly CarePro is built to help NDIS providers run compliant, efficient operations. Australian-hosted platform designed for SIL, Community Access, and Allied Health providers."
      keywords="Kinly CarePro about, NDIS software company, Australian care technology, disability support innovation, NDIS platform, care management"
      url="https://kinlycarepro.com/about"
    />
    <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-white text-center px-4">
      <p className="text-accent font-semibold tracking-[0.4em] uppercase text-xs">About Kinly CarePro</p>
      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">Built by an NDIS operator, for NDIS operators.</h1>
      <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
        Kinly CarePro was created to solve the real operational challenges that NDIS providers face every day—compliance complexity, billing delays, and admin overhead.
      </p>
    </section>

    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
          <p className="text-slate-600 text-lg">
            Empower every Australian care provider to run a compliant, profitable, and human-centered service without drowning in spreadsheets. Guardian automates the low-trust admin so teams can focus on participants.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {capabilities.map((cap) => (
              <div key={cap.label} className="p-5 rounded-2xl border border-slate-200 bg-slate-50">
                <p className="text-2xl font-bold text-slate-900">{cap.value}</p>
                <p className="text-xs uppercase tracking-wide text-slate-500 mt-1">{cap.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 space-y-4">
          {values.map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">{item.icon}</div>
              <div>
                <p className="text-lg font-semibold text-slate-900">{item.title}</p>
                <p className="text-sm text-slate-600">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900">Why Providers Choose Us</h2>
        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Built from real operator experience, Kinly CarePro is designed around the workflows that matter most to NDIS teams.</p>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-6">
        {[
          { icon: <ShieldCheck className="w-6 h-6" />, title: 'Audit-Ready from Day One', text: 'Guardian compliance checks are embedded into every shift, note, and invoice — not bolted on as an afterthought.' },
          { icon: <BarChart3 className="w-6 h-6" />, title: 'Faster Billing Cycles', text: 'One-click PRODA batch generation designed to reduce billing delays and improve your cash flow.' },
          { icon: <Award className="w-6 h-6" />, title: '100% Australian Hosted', text: 'All data stays on Australian soil, meeting NDIS data sovereignty requirements and privacy standards.' },
          { icon: <Users className="w-6 h-6" />, title: 'Built for Frontline Teams', text: 'Mobile-first design with offline mode means support workers can do their job even without internet.' }
        ].map((item) => (
          <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">{item.icon}</div>
            <div>
              <p className="text-lg font-semibold text-slate-900">{item.title}</p>
              <p className="text-sm text-slate-600 mt-1">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl hover:bg-[#0b3b47] transition-colors font-semibold"
        >
          Get in Touch
        </Link>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Product Roadmap</h2>
        <div className="space-y-6">
          {roadmap.map((item, index) => (
            <div key={index} className="flex gap-6">
              <div className="w-24 flex items-center">
                {item.status === 'complete' && (
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold">✓ Done</span>
                )}
                {item.status === 'current' && (
                  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold animate-pulse">🚀 Now</span>
                )}
                {item.status === 'upcoming' && (
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">📅 Next</span>
                )}
              </div>
              <p className="flex-1 text-slate-700">{item.event}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default AboutPage;
