import React, { useState } from 'react';
import { FileText, ShieldCheck, Users, Bell, ArrowRight } from 'lucide-react';

const upcomingResources = [
  {
    title: 'Implementation Guide',
    description: 'Step-by-step guide covering mobile app rollout, rostering migration, and audit preparation for a smooth launch.',
    type: 'Coming Soon',
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: 'NDIS Pricing Checklist',
    description: 'Ensure every roster, rate, and PRODA export reflects the latest Pricing Arrangements.',
    type: 'Coming Soon',
    icon: <FileText className="w-6 h-6" />
  },
  {
    title: 'ROI Calculator',
    description: 'Model your operational savings across rostering, billing, and admin time.',
    type: 'Coming Soon',
    icon: <Users className="w-6 h-6" />
  }
];

const ResourcesSection = () => {
  const [notified, setNotified] = useState(false);
  const [email, setEmail] = useState('');

  const handleNotify = (e) => {
    e.preventDefault();
    if (email) {
      setNotified(true);
      setEmail('');
    }
  };

  return (
    <section id="resources" className="py-24 bg-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-accent font-semibold tracking-wide uppercase text-sm">Resources</p>
          <h2 className="text-4xl font-bold text-slate-900 mt-3">Resources for your team.</h2>
          <p className="text-slate-600 mt-4">
            We're building a library of implementation guides, pricing checklists, and ROI models to help you make informed decisions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {upcomingResources.map((resource) => (
            <div key={resource.title} className="rounded-3xl bg-white border border-slate-200 shadow-sm p-8 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                {resource.icon}
              </div>
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold uppercase tracking-wide">
                  {resource.type}
                </span>
                <h3 className="text-2xl font-semibold text-slate-900 mt-3">{resource.title}</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed flex-1">{resource.description}</p>
            </div>
          ))}
        </div>

        {/* Notify Me CTA */}
        <div className="mt-12 text-center">
          <div className="inline-block p-6 rounded-2xl bg-white border border-slate-200 shadow-sm max-w-xl">
            <div className="flex items-center justify-center gap-2 text-primary mb-3">
              <Bell className="w-5 h-5" />
              <span className="font-semibold">Get Notified</span>
            </div>
            <p className="text-slate-600 text-sm mb-4">
              Be the first to know when our implementation guides and tools are ready.
            </p>
            {notified ? (
              <p className="text-emerald-600 font-semibold py-2">✓ You're on the list! We'll notify you soon.</p>
            ) : (
              <form onSubmit={handleNotify} className="flex gap-3 flex-col sm:flex-row">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-[#0b3b47] flex items-center justify-center gap-2"
                >
                  Notify Me <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
