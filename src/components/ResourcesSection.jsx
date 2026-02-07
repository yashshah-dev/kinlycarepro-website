import React from 'react';
import { FileText, ShieldCheck, Users, Download, ArrowRight } from 'lucide-react';

const resources = [
  {
    title: 'Complete Implementation Guide',
    description: 'From mobile app rollout to rostering migration to audit preparation—everything you need for a smooth 48-hour launch.',
    type: 'Guide',
    length: '38 pages',
    icon: <ShieldCheck className="w-6 h-6" />,
    cta: 'Download PDF'
  },
  {
    title: 'NDIS Pricing Update Checklist',
    description: 'Ensure every roster, rate, and PRODA export reflects the latest Pricing Arrangements without spreadsheet gymnastics.',
    type: 'Checklist',
    length: '12 steps',
    icon: <FileText className="w-6 h-6" />,
    cta: 'Get the checklist'
  },
  {
    title: 'Implementation Timeline & ROI Model',
    description: 'See the 48-hour deployment plan plus operational savings across rostering, billing, and admin time.',
    type: 'Toolkit',
    length: 'Interactive model',
    icon: <Users className="w-6 h-6" />,
    cta: 'View timeline'
  }
];

const ResourcesSection = () => {
  return (
    <section id="resources" className="py-24 bg-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-accent font-semibold tracking-wide uppercase text-sm">Resources</p>
          <h2 className="text-4xl font-bold text-slate-900 mt-3">Proof points for your board and auditors.</h2>
          <p className="text-slate-600 mt-4">
            Arm your leadership team with ready-to-send decks, pricing checklists, and ROI models so the Kinly CarePro decision gets stakeholder sign-off fast.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {resources.map((resource) => (
            <div key={resource.title} className="rounded-3xl bg-white border border-slate-200 shadow-sm p-8 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                {resource.icon}
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 font-semibold">{resource.type}</p>
                <h3 className="text-2xl font-semibold text-slate-900 mt-2">{resource.title}</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed flex-1">{resource.description}</p>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">{resource.length}</div>
              <button className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 w-full">
                {resource.cta}
                <Download className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 text-slate-700 font-semibold hover:bg-white">
            Browse all resources <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
