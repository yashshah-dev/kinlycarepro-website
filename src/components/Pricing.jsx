import React from 'react';
import { Check, ArrowRight, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import PriceEstimator from './PriceEstimator';

const pricingFaqs = [
  {
    q: 'How are "active participants" counted?',
    a: 'An active participant is anyone who has had at least one shift, progress note, or billable support item logged that month. Paused or inactive participants cost $0.'
  },
  {
    q: 'Are there really zero extra fees for staff and admins?',
    a: 'Yes. Whether you have 5 support workers or 500 casual carers, all staff and admin accounts are $0. We never charge per worker.'
  },
  {
    q: "What's the minimum monthly commitment?",
    a: 'Plans start at $99 AUD / month, which includes up to 4 active participants. Beyond 4, billing scales at exactly $25 AUD / participant / month.'
  },
  {
    q: 'Are there setup, implementation, or training fees?',
    a: 'None. Every provider receives 1 Month of Free 1-on-1 Guided Onboarding Support & Live Staff Training, plus free assisted data migration from legacy platforms.'
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-accent font-semibold tracking-wide uppercase text-xs">Transparent Pricing</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-3 tracking-tight">
            One simple price. <span className="text-primary">Everything included.</span>
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            $25 per active participant per month. Unlimited staff, unlimited features, no paywalls.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {[
              '1 Month Free Support & Training',
              'Unlimited staff accounts ($0)',
              'Every feature included',
              'PAPL 2025–26 compliant'
            ].map((badge) => (
              <span key={badge} className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent-50 text-accent-700 font-semibold text-xs border border-accent-100">
                <Check className="w-3.5 h-3.5 text-accent-600" />
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Master Plan Card */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="relative rounded-3xl border-2 border-primary bg-gradient-to-b from-primary/5 via-white to-white shadow-2xl p-8 md:p-10 overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold uppercase tracking-widest py-2 px-8 rounded-bl-2xl shadow-md">
              All-Inclusive Plan
            </div>

            <div className="text-center">
              <span className="text-xs uppercase tracking-widest font-extrabold text-accent-700">Kinly CarePro Platform</span>
              <h2 className="text-2xl font-extrabold text-slate-900 mt-1">Full NDIS Practice Management</h2>

              <div className="flex items-baseline justify-center gap-1 mt-6">
                <span className="text-6xl font-black text-primary">$25</span>
                <span className="text-sm font-bold text-slate-500">AUD</span>
              </div>
              <p className="text-sm font-semibold text-slate-600 mt-1">per active participant / month</p>
              <p className="text-xs text-slate-400 mt-2">
                Minimum $99/mo (includes up to 4 participants). Save 2 months with annual billing — $250 / participant / year.
              </p>
            </div>

            {/* Core Inclusions */}
            <div className="grid sm:grid-cols-2 gap-3 my-8 text-xs sm:text-sm text-slate-800">
              {[
                '1 Month Free 1-on-1 Support & Staff Training',
                'Unlimited support workers & carers ($0)',
                'Unlimited admin & scheduler seats ($0)',
                'Deterministic NDIS billing & PAPL 2025–26',
                'Guardian AI note quality scoring',
                'GPS mobile app with offline sync',
                'Smart rostering & copy-week wizard',
                'Payroll, compliance & 17+ reports',
                '100% Australian data residency (Sydney)',
                'Free assisted data migration from legacy apps'
              ].map((inc, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-accent-100 text-accent-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>{inc}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact#book-demo"
                className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary-700 transition-all shadow-lg font-bold text-sm flex items-center justify-center gap-2 group"
              >
                Book a demo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/vs/shiftcare"
                className="w-full sm:w-auto px-8 py-4 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-all font-semibold text-sm flex items-center justify-center gap-2 border border-slate-200"
              >
                <Scale className="w-4 h-4" /> Compare vs ShiftCare
              </Link>
            </div>
          </div>
        </div>

        {/* Simple Price Estimator */}
        <div className="max-w-3xl mx-auto mb-24">
          <PriceEstimator />
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">Frequently Asked Questions</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-1">Pricing FAQ</h2>
          </div>

          <div className="space-y-4">
            {pricingFaqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="text-base font-bold text-slate-900">{faq.q}</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
