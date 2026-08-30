import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ShieldCheck, ArrowRight, DollarSign, Sparkles, Scale, AlertCircle, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import TcoCalculator from '../components/TcoCalculator';

const comparisonData = [
  {
    category: 'Pricing Model & Transparency',
    rows: [
      { feature: 'Core Pricing Model', kinly: 'Participant-Based ($25 AUD / participant / mo)', shiftcare: 'Per-User ($8–$15 / user / mo + admin fees)', kinlyAdvantage: true },
      { feature: 'Support Worker Accounts', kinly: 'UNLIMITED ($0 Extra)', shiftcare: '$8 – $15 per worker per month', kinlyAdvantage: true },
      { feature: 'Admin & Coordinator Accounts', kinly: 'UNLIMITED ($0 Extra)', shiftcare: 'Charged per user seat ($15/mo)', kinlyAdvantage: true },
      { feature: 'Feature Paywalls & Tier Gating', kinly: 'ZERO Paywalls (100% Features Included)', shiftcare: 'Tiered (Basic, Pro, Enterprise)', kinlyAdvantage: true },
      { feature: 'Casual Relief Staff Penalty', kinly: '$0 (Add unlimited casual staff freely)', shiftcare: 'Penalized with per-seat monthly charges', kinlyAdvantage: true },
      { feature: 'Annual Commitment Discount', kinly: '2 Months Free ($250 / participant / yr)', shiftcare: 'Varies by tier', kinlyAdvantage: true },
    ]
  },
  {
    category: 'Billing, NDIS PAPL & Invoicing',
    rows: [
      { feature: 'Deterministic Rate Segmentation', kinly: 'Automatic 6AM / 8PM / 12AM time-splitting', shiftcare: 'Manual rate rules configuration', kinlyAdvantage: true },
      { feature: 'PAPL 2025–26 Price Limits', kinly: 'Built-in real-time catalog matcher', shiftcare: 'Manual rate adjustments required', kinlyAdvantage: true },
      { feature: 'Group Support Ratio Calculator', kinly: 'Automatic numerator/denominator formula', shiftcare: 'Manual calculation or add-on', kinlyAdvantage: true },
      { feature: 'Travel TRAN & Cancellation CANC Claims', kinly: '1-Click compliant line item generation', shiftcare: 'Manual line additions', kinlyAdvantage: true },
      { feature: 'NDIA Bulk Upload CSV Generation', kinly: '1-Click submission-ready CSV batches', shiftcare: 'Available on higher paid tiers', kinlyAdvantage: true },
    ]
  },
  {
    category: 'Guardian AI & Compliance Quality',
    rows: [
      { feature: 'Real-Time Progress Note QA', kinly: '0–100 Multi-Dimensional Scoring', shiftcare: 'Not included (basic text entry)', kinlyAdvantage: true },
      { feature: 'Interactive AI Note Rewrite Assistant', kinly: 'Built-in clinical phrase restructuring', shiftcare: 'Not available', kinlyAdvantage: true },
      { feature: 'Staff Screening & 3-Tier Governance', kinly: 'NDISWC/WWCC/Police automated expiry locks', shiftcare: 'Basic document upload tracking', kinlyAdvantage: true },
      { feature: 'Incident Severity & NDIS Commission PDF', kinly: 'Structured workflow & Commission report PDF', shiftcare: 'Standard form logging', kinlyAdvantage: true },
    ]
  },
  {
    category: 'Rostering & Workforce Automation',
    rows: [
      { feature: 'Copy-Week Rostering Wizard', kinly: 'Batch schedule replication across future weeks', shiftcare: 'Manual recurring shift setup', kinlyAdvantage: true },
      { feature: 'Interactive Timeline Scheduler', kinly: 'High-performance drag-and-drop canvas', shiftcare: 'Standard calendar grid', kinlyAdvantage: true },
      { feature: 'Mobile App GPS Geofencing', kinly: '25m–5000m perimeter & live signal meter', shiftcare: 'Basic GPS location capture', kinlyAdvantage: true },
      { feature: 'Offline-First Synchronization', kinly: 'Full offline notes & activity logging', shiftcare: 'Limited offline functionality', kinlyAdvantage: true },
    ]
  },
  {
    category: 'Payroll Engine & Reporting',
    rows: [
      { feature: '3-Tier Pay Rate Matrix', kinly: 'Day/Eve/Night/Weekend + staff multipliers', shiftcare: 'Basic pay rates or 3rd party add-on', kinlyAdvantage: true },
      { feature: '5-Stage Pay Run with Shift Freezing', kinly: 'Guaranteed lock against double-claiming', shiftcare: 'Manual export workflows', kinlyAdvantage: true },
      { feature: '17+ Specialized NDIS Reports Hub', kinly: 'Shift, Billing, Payroll & Compliance suites', shiftcare: 'Basic CSV export reports', kinlyAdvantage: true },
      { feature: 'Export Formats', kinly: 'Branded PDF, Excel .xlsx with formulas, CSV', shiftcare: 'Standard CSV / PDF', kinlyAdvantage: true },
    ]
  }
];

const comparisonFaqs = [
  {
    question: 'How does Kinly CarePro pricing compare to ShiftCare?',
    answer: 'ShiftCare charges per worker ($8–$15/user/mo plus extra for admin and coordinator seats). Kinly CarePro charges a flat $25 AUD / participant / month with unlimited worker and admin accounts at $0.'
  },
  {
    question: 'Can I migrate data from ShiftCare to Kinly CarePro without downtime?',
    answer: 'Yes. Our Australian onboarding team provides full assisted data migration for participant records, care plans, service agreements, and staff profiles with zero disruption to daily care.'
  },
  {
    question: 'Is Guardian AI Note QA included in Kinly CarePro?',
    answer: 'Yes. Real-time 0–100 compliance scoring, goal linkage, and incident detection are 100% included for all Kinly CarePro providers with zero paywalls.'
  }
];

const ShiftCareComparisonPage = () => {
  return (
    <>
      <SEO
        title="Kinly CarePro vs ShiftCare - NDIS Software TCO Comparison | Kinly CarePro"
        description="Compare Kinly CarePro vs ShiftCare. See why NDIS providers are switching from per-user pricing ($10-$15/worker) to Kinly CarePro's $25/participant all-inclusive model with unlimited staff."
        keywords="Kinly CarePro vs ShiftCare, ShiftCare alternative, ShiftCare pricing comparison, NDIS software comparison, participant based NDIS pricing, NDIS PMS comparison Australia"
        url="https://www.kinlycarepro.com.au/vs/shiftcare"
        faqs={comparisonFaqs}
        breadcrumbs={[
          { name: "Comparisons", path: "/vs/shiftcare" },
          { name: "vs ShiftCare", path: "/vs/shiftcare" }
        ]}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#f2fbff] via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-slate-100 text-slate-700 font-semibold text-xs uppercase tracking-wider mb-6 border border-slate-200">
            <Scale className="w-4 h-4 text-primary" /> Objective Software Benchmark (August 2026)
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
            Kinly CarePro vs. ShiftCare: <br />
            <span className="text-primary">The True Cost of Ownership</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            While legacy platforms charge you for every single support worker and lock critical features behind expensive tiers, Kinly CarePro delivers an all-inclusive platform with <strong>unlimited staff accounts</strong> for one simple, transparent participant price.
          </p>

          {/* Quick Summary Banner */}
          <div className="mt-10 max-w-4xl mx-auto grid md:grid-cols-2 gap-4 text-left">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
              <span className="text-xs uppercase tracking-wider font-bold text-slate-400">Legacy Per-User Model (ShiftCare)</span>
              <p className="text-2xl font-bold text-slate-900 mt-1">$8 – $15 / worker / month</p>
              <ul className="mt-3 space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">⚠️ Extra cost every time you hire casual or relief workers</li>
                <li className="flex items-center gap-2">⚠️ Admin & coordinator seats charged separately</li>
                <li className="flex items-center gap-2">⚠️ Essential features locked behind Pro/Enterprise tiers</li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-primary/5 border border-primary/20 shadow-md">
              <span className="text-xs uppercase tracking-wider font-bold text-primary">All-Inclusive Model (Kinly CarePro)</span>
              <p className="text-2xl font-bold text-primary mt-1">$25 AUD / participant / month</p>
              <ul className="mt-3 space-y-2 text-xs text-slate-800 font-medium">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> 1 Month Free 1-on-1 Support & Staff Training</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> UNLIMITED Support Worker Accounts ($0 Extra)</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> UNLIMITED Admin & Coordinator Accounts ($0 Extra)</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Full Access to All 8 Core Pillars from Day 1</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Head-to-Head TCO Battlecard (25 Participants + 50 Workers) */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Scenario Analysis</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
              Standard Provider Scenario: 25 Participants + 50 Support Workers
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              See the exact total cost of ownership breakdown for an average mid-sized Australian NDIS provider.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 overflow-hidden shadow-xl bg-white grid md:grid-cols-2">
            {/* ShiftCare Column */}
            <div className="p-8 border-b md:border-b-0 md:border-r border-slate-200 bg-slate-50/50">
              <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                <div>
                  <h3 className="text-xl font-bold text-slate-800">ShiftCare</h3>
                  <p className="text-xs text-slate-500">Per-User + Tiered Gating Model</p>
                </div>
                <span className="px-3 py-1 bg-slate-200 text-slate-700 text-xs font-bold rounded-full">Legacy PMS</span>
              </div>

              <div className="py-6 space-y-3 text-xs text-slate-700">
                <div className="flex justify-between">
                  <span>50 Support Worker Seats @ $10/user/mo:</span>
                  <span className="font-mono font-bold">$500 / mo</span>
                </div>
                <div className="flex justify-between">
                  <span>4 Admin / Coordinator Seats @ $15/user/mo:</span>
                  <span className="font-mono font-bold">$60 / mo</span>
                </div>
                <div className="flex justify-between">
                  <span>Pro Tier Surcharge for advanced reporting & forms:</span>
                  <span className="font-mono font-bold">$100 – $200+ / mo</span>
                </div>
                <div className="flex justify-between text-amber-700">
                  <span>Casual relief staff onboarding fees:</span>
                  <span className="font-mono font-bold">Extra $$ / worker</span>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Total Estimated Cost</p>
                <p className="text-3xl font-bold text-slate-900 mt-1">$660 – $800+ <span className="text-sm font-normal text-slate-500">/ month</span></p>
                <p className="text-xs text-slate-500 mt-2">Complex seat taxes and feature paywalls.</p>
              </div>
            </div>

            {/* Kinly CarePro Column */}
            <div className="p-8 bg-gradient-to-b from-primary/5 via-white to-white">
              <div className="flex justify-between items-center pb-4 border-b border-primary/20">
                <div>
                  <h3 className="text-xl font-bold text-primary">Kinly CarePro</h3>
                  <p className="text-xs text-emerald-700 font-semibold">All-Inclusive Transparent Plan</p>
                </div>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">🏆 1 Simple Price</span>
              </div>

              <div className="py-6 space-y-3 text-xs text-slate-800">
                <div className="flex justify-between">
                  <span>25 Active Participants @ $25/mo (Annual commit):</span>
                  <span className="font-mono font-bold text-slate-900">$625 / mo</span>
                </div>
                <div className="flex justify-between">
                  <span>50 Support Worker Accounts:</span>
                  <span className="font-mono font-bold text-emerald-600">$0 (UNLIMITED)</span>
                </div>
                <div className="flex justify-between">
                  <span>4 Admin & Coordinator Accounts:</span>
                  <span className="font-mono font-bold text-emerald-600">$0 (UNLIMITED)</span>
                </div>
                <div className="flex justify-between">
                  <span>Deterministic Billing, Guardian AI, 17+ Reports:</span>
                  <span className="font-mono font-bold text-emerald-600">$0 (ALL INCLUDED)</span>
                </div>
              </div>

              <div className="pt-6 border-t border-primary/20">
                <p className="text-xs text-emerald-700 uppercase tracking-wider font-bold">Total Predictable Cost</p>
                <p className="text-3xl font-extrabold text-primary mt-1">$625 <span className="text-sm font-normal text-slate-600">/ month</span></p>
                <p className="text-xs text-emerald-700 font-medium mt-2">Zero paywalls. Unlimited staff accounts forever.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive TCO Calculator */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <TcoCalculator showTitle={true} />
        </div>
      </section>

      {/* Detailed Side-by-Side Comparison Table */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Detailed Feature Matrix</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">Feature-by-Feature Comparison</h2>
            <p className="text-slate-600 text-sm mt-2">
              Verified comparison against publicly available product specifications as of August 2026.
            </p>
          </div>

          <div className="space-y-12">
            {comparisonData.map((section, sIdx) => (
              <div key={sIdx} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="bg-slate-900 text-white px-6 py-4">
                  <h3 className="text-base font-bold">{section.category}</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs md:text-sm">
                    <thead>
                      <tr className="border-b border-slate-100 bg-slate-50/70 text-slate-500 uppercase text-[11px] tracking-wider">
                        <th className="py-3 px-6 w-1/3">Capability</th>
                        <th className="py-3 px-6 w-1/3 text-primary font-bold">Kinly CarePro</th>
                        <th className="py-3 px-6 w-1/3 text-slate-600">ShiftCare</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {section.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50/50 transition-colors">
                          <td className="py-4 px-6 font-semibold text-slate-900">{row.feature}</td>
                          <td className="py-4 px-6 font-medium text-emerald-800 bg-emerald-50/30">
                            <span className="flex items-center gap-1.5">
                              <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                              {row.kinly}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-slate-600">
                            {row.shiftcare}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-16 bg-gradient-to-r from-primary to-slate-900 rounded-3xl p-8 md:p-12 text-white text-center shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold">Ready to Switch and Save 30–50% on NDIS Software?</h3>
            <p className="text-slate-200 text-sm md:text-base mt-3 max-w-2xl mx-auto">
              Our Australian onboarding team migrates your participant records, care plans, and staff rosters with zero downtime.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-emerald-400 text-slate-950 font-bold rounded-xl hover:bg-emerald-300 transition-all shadow-lg text-sm flex items-center justify-center gap-2"
              >
                Book Migration Strategy Call <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20 text-sm flex items-center justify-center"
              >
                Explore Full Pricing & Features
              </Link>
            </div>
          </div>

          {/* Mandatory Section 2.3 Legal Disclaimer */}
          <div className="mt-16 border-t border-slate-200 pt-8 text-[11px] leading-relaxed text-slate-500">
            <p className="font-bold text-slate-700 mb-1">Disclaimer & Trademark Notice:</p>
            <p>
              All product names, trademarks, logos, and registered trademarks mentioned on this page (including <em>ShiftCare</em>) are the property of their respective owners. Reference to these trademarks is made under nominative fair use for the purpose of comparative advertising in accordance with Section 122(1)(d) of the <em>Trade Marks Act 1995 (Cth)</em>.
            </p>
            <p className="mt-2">
              The information presented on this comparison page is gathered from publicly available sources (including competitor websites, public pricing pages, and marketing materials) as of <strong>August 2026</strong>. Product features, service terms, and pricing are subject to change. Kinly CarePro is an independent software platform and is not affiliated with, endorsed by, or sponsored by ShiftCare or any other third party. We recommend verifying current feature sets and pricing directly on the respective vendor's official website.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShiftCareComparisonPage;
