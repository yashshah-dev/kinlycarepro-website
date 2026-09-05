import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PricingTeaser = () => {
  return (
    <section id="pricing-teaser" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-accent font-semibold tracking-wide uppercase text-xs">Transparent Pricing</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">
            One simple price. Everything included.
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-base">
            $25 per active participant per month. Unlimited staff and admins, no feature paywalls.
          </p>
        </motion.div>

        {/* Master Plan Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl border-2 border-primary shadow-2xl p-8 md:p-10 relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-slate-100 pb-8">
            <div className="text-center md:text-left">
              <span className="text-xs uppercase tracking-widest font-extrabold text-accent-700">All-Inclusive Plan</span>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-1">Kinly CarePro Platform</h3>
              <p className="text-slate-500 text-xs mt-1">Billing, AI note QA, rostering, payroll & reports</p>
            </div>

            <div className="text-center md:text-right">
              <div className="flex items-baseline justify-center md:justify-end gap-1">
                <span className="text-5xl font-black text-primary">$25</span>
                <span className="text-xs font-bold text-slate-500">AUD</span>
              </div>
              <p className="text-xs font-semibold text-slate-600 mt-1">per active participant / month</p>
              <p className="text-[11px] text-slate-400">Save 2 months with annual billing</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 my-7 text-xs text-slate-700">
            {[
              '1 Month Free Support & Staff Training',
              'Unlimited support workers & carers ($0)',
              'Unlimited admin & scheduler seats ($0)',
              'Deterministic NDIS billing & PAPL 2025–26',
              'Guardian AI note quality scoring',
              'GPS mobile app with offline sync',
              'Smart rostering & copy-week wizard',
              'Payroll, compliance & 17+ reports',
              '100% Australian data residency (Sydney)',
              'Free assisted data migration assistance'
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent-600 flex-shrink-0" />
                <span>{f}</span>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact#book-demo"
              className="w-full sm:w-auto px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-700 transition-all font-bold text-xs flex items-center justify-center gap-2 shadow-md"
            >
              Book a demo <ArrowRight size={14} />
            </Link>
            <Link
              to="/pricing"
              className="w-full sm:w-auto px-6 py-3 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-all font-semibold text-xs flex items-center justify-center gap-2 border border-slate-200"
            >
              See your price
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingTeaser;
