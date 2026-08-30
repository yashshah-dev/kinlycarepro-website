import React from 'react';
import { motion } from 'framer-motion';
import {
  Calculator,
  Bot,
  Smartphone,
  Calendar,
  DollarSign,
  ShieldCheck,
  AlertTriangle,
  BarChart3,
  Building2,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const pillars = [
  {
    icon: <Calculator className="w-5 h-5" />,
    title: 'Deterministic NDIS Billing',
    desc: 'Automatic 6 AM / 8 PM / 12 AM rate splits, group ratios, and travel claims — straight to NDIA CSV and invoices.',
  },
  {
    icon: <Bot className="w-5 h-5" />,
    title: 'Guardian AI Note QA',
    desc: 'Progress notes scored and upgraded in real time, so every record is audit-ready before billing.',
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: 'GPS-Verified Mobile Care',
    desc: 'Geofenced check-in, offline note entry, and instant shift visibility for your frontline team.',
  },
  {
    icon: <Calendar className="w-5 h-5" />,
    title: 'Smart Rostering',
    desc: 'Copy-Week Wizard replicates full schedules in seconds and prevents double-booking automatically.',
  },
  {
    icon: <DollarSign className="w-5 h-5" />,
    title: 'Payroll Engine',
    desc: 'Award-based rate interpretation with punctuality tracking and 1-click Xero, MYOB, or Excel export.',
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: 'Staff Compliance & Screening',
    desc: '3-tier credential tracking with expiry alerts that block non-compliant staff from shifts.',
  },
  {
    icon: <AlertTriangle className="w-5 h-5" />,
    title: 'Support Coordination & Incidents',
    desc: 'Funding burn-rate tracking and structured, Commission-ready incident reporting workflows.',
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: '17+ Reports Hub',
    desc: 'Audit-ready records, revenue analytics, and roster variance — exported as PDF, Excel, or CSV.',
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    title: 'Enterprise Data Isolation',
    desc: 'Custom-branded portals with tenant isolation, role-based access, and Sydney-hosted data.',
  },
];

const FeatureGrid = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-bold tracking-widest uppercase text-xs">Everything Included</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Nine core capabilities, one platform
          </h2>
          <p className="text-slate-600 text-base md:text-lg mt-4 leading-relaxed">
            Every feature below is built in and unlocked for your whole team from day one — no third-party plugins, no paywalls, unlimited staff accounts.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900">{pillar.title}</h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/features"
            className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
          >
            Explore every feature in depth <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
