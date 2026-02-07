import React from 'react';
import SEO from '../components/SEO';
import { Briefcase, HeartHandshake, Sparkles, Laptop } from 'lucide-react';

const values = [
  {
    title: 'Participants first',
    description: 'We make decisions by asking: does this help frontline workers deliver safer outcomes?'
  },
  {
    title: 'Compliance as craft',
    description: 'We obsess over details—every audit trail, every roster diff—to protect providers from risk.'
  },
  {
    title: 'High-trust teams',
    description: 'Async workflows, transparent goals, and kindness let remote teams ship faster.'
  }
];

const roles = [
  {
    title: 'Senior Frontend Engineer (React + Vite)',
    location: 'Melbourne or Remote AU',
    type: 'Full-time',
    badge: 'Engineering',
    summary: 'Build Guardian compliance interfaces, shift intelligence, and analytics experiences used by compliance and operations teams.'
  },
  {
    title: 'Compliance Strategist',
    location: 'Sydney or Remote AU',
    type: 'Full-time',
    badge: 'Operations',
    summary: 'Guide providers through Kinly CarePro implementation, conduct mock audits, and feed learnings back to the product team.'
  },
  {
    title: 'Customer Success Manager',
    location: 'Brisbane, Hybrid',
    type: 'Full-time',
    badge: 'Customer',
    summary: 'Own relationships with SIL and Community Access providers, driving adoption and ROI.'
  }
];

const benefits = [
  { icon: <Briefcase className="w-5 h-5" />, title: 'Flexible-first', description: 'Hybrid HQ + fully remote roles with quarterly on-sites.' },
  { icon: <HeartHandshake className="w-5 h-5" />, title: 'Wellbeing support', description: 'Employee assistance program, mental health days, and caregiver support leave.' },
  { icon: <Sparkles className="w-5 h-5" />, title: 'Learning budget', description: '$2k annual stipend for conferences, courses, and certifications.' },
  { icon: <Laptop className="w-5 h-5" />, title: 'Product ownership', description: 'Work directly with ex-NDIS operators and clinicians; ship features that matter within weeks.' }
];

const CareersPage = () => (
  <>    <SEO
    title="Careers - Join the Kinly CarePro Team | NDIS Software Jobs"
    description="Join Kinly CarePro's mission to improve NDIS care delivery. Flexible remote roles in product, engineering, and customer success. Help build Australia's leading care platform."
    keywords="Kinly CarePro careers, NDIS software jobs, care technology careers, remote jobs Australia, product manager jobs, customer success jobs"
    url="https://kinlycarepro.com.au/careers"
  />    <section className="pt-32 pb-16 bg-gradient-to-b from-white to-slate-50 text-center px-4">
      <p className="text-accent font-semibold tracking-[0.4em] uppercase text-xs">Careers</p>
      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">Join the team automating NDIS compliance.</h1>
      <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
        We are hiring builders, clinicians, compliance leads, and advocates who care deeply about safe, scalable care delivery.
      </p>
    </section>

    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
        {values.map((value) => (
          <div key={value.title} className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
            <p className="text-xl font-semibold text-slate-900">{value.title}</p>
            <p className="text-sm text-slate-600 mt-3">{value.description}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 mb-8">
          <h2 className="text-3xl font-bold text-slate-900">Open roles</h2>
          <p className="text-slate-600">Don’t see a role? Email talent@trucare.ai with your pitch—many of our hires started that way.</p>
        </div>
        <div className="space-y-6">
          {roles.map((role) => (
            <div key={role.title} className="rounded-3xl border border-slate-200 bg-white p-6 flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wide bg-primary/10 text-primary rounded-full">{role.badge}</span>
                <p className="text-sm text-slate-500">{role.location}</p>
                <span className="text-sm text-slate-500">• {role.type}</span>
              </div>
              <p className="text-2xl font-semibold text-slate-900">{role.title}</p>
              <p className="text-slate-600">{role.summary}</p>
              <button className="self-start px-5 py-2 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-[#0b3b47]">Apply via email</button>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Benefits</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="rounded-2xl border border-slate-200 p-6 flex gap-4 items-start">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                {benefit.icon}
              </div>
              <div>
                <p className="text-xl font-semibold text-slate-900">{benefit.title}</p>
                <p className="text-sm text-slate-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default CareersPage;
