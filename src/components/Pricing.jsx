import React from 'react';
import { Check, ArrowUpRight, Minus } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$8',
    cadence: 'per participant/month',
    platformFee: '$299/month platform fee',
    minimum: 'Minimum 30 participants',
    description: 'Perfect for small teams ready to modernize rostering, billing, and mobile workflows.',
    features: [
      'Guardian compliance engine included',
      'Mobile app with GPS geofencing',
      'Basic rostering + shift management',
      'PRODA exports + incident drafting',
      'Standard email support'
    ],
    highlight: 'Best for small teams'
  },
  {
    name: 'Growth',
    price: '$10',
    cadence: 'per participant/month',
    platformFee: '$399/month platform fee',
    minimum: 'Minimum 75 participants',
    description: 'Ideal for growing providers who need advanced features and onboarding support.',
    features: [
      'Everything in Starter, plus:',
      'Live operations map + smart rostering',
      'Fatigue alerts + qualification tracking',
      'Free data migration (worth $2k)',
      '3 months compliance strategist support'
    ],
    highlight: 'Most popular'
  },
  {
    name: 'Scale',
    price: '$9',
    cadence: 'per participant/month',
    platformFee: '$899/month platform fee',
    minimum: 'Minimum 200 participants',
    description: 'Built for mid-market providers with integration and support requirements.',
    features: [
      'Everything in Growth, plus:',
      'Custom APIs + webhook integrations',
      'Advanced dashboards + analytics',
      'Dedicated success manager',
      'NDIS price guide auto-updates',
      '24/7 priority support'
    ],
    highlight: 'Best value'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: 'pricing',
    platformFee: 'From $1,899/month',
    minimum: 'Custom minimum',
    description: 'White-glove service with dedicated infrastructure and strategic operational support.',
    features: [
      'Everything in Scale, plus:',
      'Dedicated single-tenant hosting in AU',
      'Advanced RBAC + SSO/SCIM',
      'Assigned operations strategist',
      'White-glove onboarding + training',
      'Custom SLA + premium support'
    ],
    highlight: 'Enterprise grade'
  }
];

const comparisonRows = [
  { feature: 'Guardian compliance engine', starter: true, growth: true, scale: true, enterprise: true },
  { feature: 'Mobile app with GPS geofencing', starter: true, growth: true, scale: true, enterprise: true },
  { feature: 'PRODA exports + incident drafting', starter: true, growth: true, scale: true, enterprise: true },
  { feature: 'Live operations map', starter: false, growth: true, scale: true, enterprise: true },
  { feature: 'Smart rostering with fatigue alerts', starter: false, growth: true, scale: true, enterprise: true },
  { feature: 'Free data migration', starter: false, growth: true, scale: true, enterprise: true },
  { feature: 'Operational support', starter: false, growth: '3 months', scale: 'Ongoing', enterprise: 'Dedicated' },
  { feature: 'Custom APIs + integrations', starter: false, growth: false, scale: true, enterprise: true },
  { feature: 'Advanced dashboards', starter: false, growth: false, scale: true, enterprise: true },
  { feature: 'NDIS price guide auto-updates', starter: false, growth: false, scale: true, enterprise: true },
  { feature: '24/7 priority support', starter: false, growth: false, scale: true, enterprise: true },
  { feature: 'Dedicated hosting', starter: false, growth: false, scale: false, enterprise: true },
  { feature: 'SSO/SCIM', starter: false, growth: false, scale: false, enterprise: true }
];

const addOns = [
  {
    title: 'Dedicated server cluster',
    description: 'Isolated VPC, private networking, and data residency controls for multi-brand groups.',
    price: '$1.2k / month'
  },
  {
    title: 'SOC 2 + IRAP support pack',
    description: 'Security reviews, penetration testing coordination, and documentation templates.',
    price: '$6.5k fixed'
  },
  {
    title: 'Integration accelerator',
    description: 'Managed data warehouse feeds, payroll exports, and webhook setup handled by Kinly CarePro engineers.',
    price: 'From $4k'
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-accent font-semibold tracking-wide uppercase text-sm">Pricing</p>
        <h2 className="text-4xl font-bold text-slate-900 mt-4">Simple, audit-friendly billing.</h2>
        <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
          Every plan includes mobile apps, smart rostering, one-click NDIS billing, and Guardian safety checks. Upgrade for dedicated infrastructure or custom integrations.
        </p>

        {/* Competitive advantage banner */}
        <div className="mt-8 inline-flex items-center gap-6 px-6 py-3 rounded-full bg-emerald-50 border border-emerald-200">
          <div className="flex items-center gap-2 text-sm font-medium text-emerald-900">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>Complete platform included (competitors charge per module)</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-emerald-900">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>Free migration worth $2k</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-emerald-900">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>NDIS price updates guaranteed</span>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className="relative rounded-3xl border border-slate-100 shadow-xl p-8 text-left hover:-translate-y-2 transition-transform bg-white">
              <div className="mb-4">
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">{plan.highlight}</span>
                <p className="mt-4 text-sm uppercase tracking-[0.3em] text-slate-500">{plan.name}</p>
                <h3 className="mt-2 text-3xl font-semibold text-slate-900">{plan.price}
                  <span className="block text-sm font-medium text-slate-500 mt-1">{plan.cadence}</span>
                </h3>
                <p className="mt-2 text-xs text-slate-500 font-medium">{plan.platformFee}</p>
                <p className="text-xs text-slate-400">{plan.minimum}</p>
              </div>
              <p className="mt-4 text-sm text-slate-600">{plan.description}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800">
                {plan.name === 'Enterprise' ? 'Book review' : 'Start pilot'}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-left">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">Compare plans</h3>
          <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white">
            <table className="min-w-full text-sm text-slate-600">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wide text-slate-500">
                  <th className="py-4 px-6 font-semibold">Capability</th>
                  <th className="py-4 px-4 text-center font-semibold">Starter</th>
                  <th className="py-4 px-4 text-center font-semibold">Growth</th>
                  <th className="py-4 px-4 text-center font-semibold">Scale</th>
                  <th className="py-4 px-4 text-center font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="border-t border-slate-100">
                    <td className="py-4 px-6 font-medium text-slate-900">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.starter === 'boolean' ? (
                        row.starter ? (
                          <Check className="w-5 h-5 mx-auto text-emerald-600" />
                        ) : (
                          <Minus className="w-5 h-5 mx-auto text-slate-300" />
                        )
                      ) : (
                        <span className="text-xs text-slate-700 font-medium">{row.starter}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.growth === 'boolean' ? (
                        row.growth ? (
                          <Check className="w-5 h-5 mx-auto text-emerald-600" />
                        ) : (
                          <Minus className="w-5 h-5 mx-auto text-slate-300" />
                        )
                      ) : (
                        <span className="text-xs text-slate-700 font-medium">{row.growth}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.scale === 'boolean' ? (
                        row.scale ? (
                          <Check className="w-5 h-5 mx-auto text-emerald-600" />
                        ) : (
                          <Minus className="w-5 h-5 mx-auto text-slate-300" />
                        )
                      ) : (
                        <span className="text-xs text-slate-700 font-medium">{row.scale}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.enterprise === 'boolean' ? (
                        row.enterprise ? (
                          <Check className="w-5 h-5 mx-auto text-emerald-600" />
                        ) : (
                          <Minus className="w-5 h-5 mx-auto text-slate-300" />
                        )
                      ) : (
                        <span className="text-xs text-slate-700 font-medium">{row.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 text-left">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">Enterprise add-ons</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {addOns.map((addOn) => (
              <div key={addOn.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500 font-semibold">Add-on</p>
                <h4 className="text-xl font-semibold text-slate-900 mt-2">{addOn.title}</h4>
                <p className="text-sm text-slate-600 mt-3">{addOn.description}</p>
                <p className="mt-6 text-base font-semibold text-slate-900">{addOn.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
