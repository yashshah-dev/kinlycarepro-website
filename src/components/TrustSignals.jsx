import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Lock, KeyRound, Activity, ShieldCheck } from 'lucide-react';

const trustSignals = [
  {
    icon: <Globe2 className="w-6 h-6" />,
    title: 'Data Sovereignty',
    description: '100% Australian-hosted infrastructure with GDPR + Australian Privacy Principle alignment.',
    detail: 'Sydney + Melbourne availability zones'
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: 'AES-256 Encryption',
    description: 'In-flight and at-rest encryption across notes, rosters, payroll exports, and documents.',
    detail: 'Rotating keys every 12 hours'
  },
  {
    icon: <KeyRound className="w-6 h-6" />,
    title: 'Role-Based Access',
    description: 'Granular permissions ensure casuals only see their participants while finance sees billing history.',
    detail: 'SCIM / SSO ready'
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: 'Immutable Audit Trails',
    description: 'Every create, edit, and delete is versioned, timestamped, and exportable for auditors.',
    detail: '7-year retention policy'
  }
];

const TrustSignals = () => {
  return (
    <section id="trust" className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-emerald-300 text-sm tracking-[0.2em] uppercase">
              <ShieldCheck className="w-4 h-4" /> Compliance First
            </div>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">
              Built to pass every NDIS audit.
            </h2>
            <p className="mt-4 text-lg text-slate-300 max-w-2xl">
              Kinly CarePro underpins tier-one SIL, Community Access, and Specialist Disability Accommodation providers with enterprise controls, so your governance, finance, and rostering teams run on the same trustworthy dataset.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 w-full lg:w-auto">
            {[{ label: '99.98%', text: 'Platform uptime' }, { label: '48hrs', text: 'Implementation turn-up' }, { label: 'ISO 27001', text: 'Audit ready' }, { label: '24/7', text: 'System monitoring' }].map((stat) => (
              <div key={stat.text} className="bg-white/5 rounded-2xl border border-white/10 p-6 text-center">
                <p className="text-3xl font-bold text-white">{stat.label}</p>
                <p className="text-sm text-slate-300 mt-1">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustSignals.map((signal, index) => (
            <motion.div
              key={signal.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 text-emerald-300 flex items-center justify-center mb-6">
                {signal.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{signal.title}</h3>
              <p className="text-sm text-slate-200 leading-relaxed">{signal.description}</p>
              <p className="mt-4 text-xs font-semibold text-emerald-200 tracking-wide uppercase">{signal.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
