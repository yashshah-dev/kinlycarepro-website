import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, DollarSign, Users, AlertTriangle, ShieldCheck, TrendingUp, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import TcoCalculator from '../components/TcoCalculator';

const pricingAnalysisFaqs = [
  {
    question: 'Why does per-user pricing harm NDIS provider margins?',
    answer: 'NDIS providers rely on casual and relief support workers for shift coverage. Per-user software models force providers to pay $10-$15/month for workers who may only work a few hours, distorting unit economics.'
  },
  {
    question: 'How does participant-based pricing align with NDIS revenue?',
    answer: 'Because provider revenue scales with active NDIS participants and plan utilization, participant-based pricing ($25/participant/mo) keeps software overhead strictly proportional to income.'
  }
];

const WhyParticipantPricingPage = () => {
  return (
    <>
      <SEO
        title="Why Per-User Pricing is Broken for NDIS Providers | Kinly CarePro"
        description="Learn why per-user software pricing penalizes NDIS care providers and how participant-based pricing ($25/participant/mo with unlimited staff) protects your margins and aligns software costs with revenue."
        keywords="NDIS software pricing, per user pricing vs participant pricing, NDIS PMS pricing model, disability provider margins, NDIS software cost"
        url="https://www.kinlycarepro.com/why-participant-pricing"
        faqs={pricingAnalysisFaqs}
        breadcrumbs={[{ name: "Why Participant Pricing?", path: "/why-participant-pricing" }]}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#f2fbff] via-white to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-amber-50 text-amber-800 font-semibold text-xs uppercase tracking-wider mb-6 border border-amber-200">
            <AlertTriangle className="w-4 h-4 text-amber-600" /> Industry Analysis & Business Model Review
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Why Per-User Pricing is Broken for NDIS Providers
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            In disability and community care, your revenue is tied to <strong>active participants and NDIS plan utilization</strong> — not how many casual workers you employ. Here is why charging per staff member penalizes care operators.
          </p>
        </div>
      </section>

      {/* The Core Flaw Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs uppercase tracking-widest text-rose-600 font-bold">The Problem</span>
              <h2 className="text-3xl font-bold text-slate-900 mt-2">The "Casual Worker Tax" Penalizes Provider Growth</h2>
              <p className="mt-4 text-slate-600 text-sm md:text-base leading-relaxed">
                To maintain high service reliability and cover weekend, evening, and emergency shifts, NDIS providers must maintain a roster of casual and relief support workers.
              </p>
              <p className="mt-3 text-slate-600 text-sm md:text-base leading-relaxed">
                With legacy per-user software (charging $10 – $15/user/month), you are forced to pay the software vendor a full monthly license fee for a worker who might only log 4 hours of support in a month. This leads providers to share logins (compromising security and audit compliance) or artificially delay hiring relief staff.
              </p>
            </div>

            <div className="bg-rose-50 border border-rose-200 rounded-3xl p-8 space-y-4">
              <h3 className="text-lg font-bold text-rose-900 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-rose-600" /> The Consequences of Per-User Pricing
              </h3>
              <ul className="space-y-3 text-xs md:text-sm text-rose-800">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-rose-600">•</span>
                  <span><strong>Rising Software Costs as Hours Stay Flat:</strong> Your software bill spikes every time you onboard casual backup carers without increasing participant revenue.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-rose-600">•</span>
                  <span><strong>Shared Logins & Audit Vulnerability:</strong> Staff sharing accounts destroys the NDIS Commission 7-year audit trail for shift notes and GPS check-ins.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-rose-600">•</span>
                  <span><strong>Hidden Coordinator Taxes:</strong> Schedulers, team leads, and admin staff are billed at premium per-seat rates ($15+/user/mo).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Participant-Based Solution */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-emerald-600 font-bold">The Modern Paradigm</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Why Participant-Based Pricing Aligns with Your Business
            </h2>
            <p className="mt-3 text-slate-600 text-sm md:text-base">
              Kinly CarePro charges <strong>$25 AUD / Active Participant / Month</strong>. Unlimited support workers, unlimited admin accounts, and zero feature paywalls.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Predictable Software Margins</h3>
                <p className="text-xs md:text-sm text-slate-600 mt-2 leading-relaxed">
                  Your software expense directly mirrors your active participant base. You always know your exact software margin per participant.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs font-bold text-emerald-700">
                ✓ Full Margin Predictability
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Unlimited Staff Accounts ($0 Extra)</h3>
                <p className="text-xs md:text-sm text-slate-600 mt-2 leading-relaxed">
                  Add 10, 50, or 500 support workers, relief staff, schedulers, and compliance officers without ever paying an extra cent.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs font-bold text-primary">
                ✓ Zero Staff Account Fees
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Individual Audit Trails</h3>
                <p className="text-xs md:text-sm text-slate-600 mt-2 leading-relaxed">
                  Because every staff member gets their own free account, every GPS check-in, shift note, and incident log is uniquely attributed and audit-proof.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs font-bold text-purple-700">
                ✓ Audit-Proof Attribution
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Calculator */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <TcoCalculator showTitle={true} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Stop Paying the Per-Worker Penalty</h2>
          <p className="text-slate-300 text-sm md:text-base mt-3 max-w-xl mx-auto">
            Switch to Kinly CarePro's all-inclusive platform and unlock all 8 core pillars with unlimited staff accounts today.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-emerald-400 text-slate-950 font-bold rounded-xl hover:bg-emerald-300 transition-all text-sm"
            >
              Book 15-Minute Migration Call
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20 text-sm"
            >
              View Pricing Details
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyParticipantPricingPage;
