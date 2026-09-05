import React from 'react';
import { FileText, ShieldCheck, Users, Calculator, Scale, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const activeResources = [
  {
    title: 'NDIS Progress Notes: A Practical Guide',
    description: 'A people-first guide to clear, respectful disability-support progress notes, with examples and a manager checklist.',
    link: '/resources/ndis-progress-notes-guide',
    cta: 'Read the guide',
    type: 'Provider Guide',
    icon: <FileText className="w-6 h-6 text-primary" />
  },
  {
    title: 'NDIS Price Guide Explorer (PAPL 2025–26)',
    description: 'Searchable directory of active NDIS support item codes, hourly price caps, time bands, and travel claim rules.',
    link: '/ndis-price-guide',
    cta: 'Launch Explorer',
    type: 'Interactive Tool',
    icon: <BookOpen className="w-6 h-6 text-emerald-600" />
  },
  {
    title: 'NDIS Software TCO & ROI Calculator',
    description: 'Calculate your exact software cost savings moving from per-worker pricing to Kinly CarePro’s $25/participant model.',
    link: '/pricing',
    cta: 'Calculate Savings',
    type: 'Interactive Tool',
    icon: <Calculator className="w-6 h-6 text-primary" />
  },
  {
    title: 'Head-to-Head Benchmark: Kinly vs ShiftCare',
    description: 'Detailed feature matrix, legal comparison, and total cost of ownership analysis for Australian NDIS providers.',
    link: '/vs/shiftcare',
    cta: 'Read Comparison',
    type: 'Benchmark Guide',
    icon: <Scale className="w-6 h-6 text-purple-600" />
  },
  {
    title: 'The Case for Participant-Based Pricing',
    description: 'Why per-user pricing penalizes care operators when scaling casual relief staff, and how to protect your margins.',
    link: '/why-participant-pricing',
    cta: 'Read Whitepaper',
    type: 'Strategic Guide',
    icon: <Users className="w-6 h-6 text-blue-600" />
  },
  {
    title: 'NDIS Commission Audit Preparation Guide',
    description: 'Essential checklist covering 7-year immutable audit logs, 3-tier worker screening, and incident reporting.',
    link: '/compliance',
    cta: 'View Standards',
    type: 'Compliance Guide',
    icon: <ShieldCheck className="w-6 h-6 text-amber-600" />
  },
  {
    title: 'Enterprise Security & Data Sovereignty',
    description: 'Overview of AWS Sydney hosting, AES-256 encryption, 15-min signed URLs, and tenant data isolation.',
    link: '/security',
    cta: 'View Architecture',
    type: 'Technical Paper',
    icon: <FileText className="w-6 h-6 text-slate-700" />
  }
];

const ResourcesSection = () => {
  return (
    <section id="resources-section" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-bold tracking-widest uppercase text-xs">Operator Toolkit</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-2">
            NDIS Provider Resources & Tools
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-3">
            Free tools, pricing calculators, PAPL directories, and compliance blueprints for Australian disability care teams.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {activeResources.map((resource, i) => (
            <div key={i} className="rounded-3xl bg-white border border-slate-200 shadow-sm p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                    {resource.icon}
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold uppercase tracking-wider">
                    {resource.type}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-snug">{resource.title}</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed mt-2">{resource.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  to={resource.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-[#0b3b47] transition-colors"
                >
                  {resource.cta} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
