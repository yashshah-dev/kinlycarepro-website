import React from 'react';
import { Check, ArrowUpRight, Minus } from 'lucide-react';

const plans = [
  {
    name: '14-Day Free Trial',
    price: '$0',
    cadence: 'for 14 days',
    platformFee: 'Up to 3 participants',
    minimum: 'No credit card required',
    description: 'Full access to test the platform with your own data.',
    features: [
      'Unlimited staff accounts',
      'Guardian compliance engine',
      'Mobile app with GPS',
      'Basic rostering & notes',
      'PRODA exports'
    ],
    highlight: 'Risk free'
  },
  {
    name: 'Starter',
    price: '$199',
    cadence: 'per month',
    platformFee: 'Up to 20 participants',
    minimum: 'Includes unlimited staff',
    description: 'For growing teams. Full access to the entire platform.',
    features: [
      'Everything in Trial, plus:',
      'Live operations map',
      'Smart fatigue alerts',
      'Qualification tracking',
      'Custom shift rates',
      'Bulk billing exports'
    ],
    highlight: 'Best for small teams'
  },
  {
    name: 'Growth',
    price: '$499',
    cadence: 'per month',
    platformFee: 'Up to 50 participants',
    minimum: 'Includes unlimited staff',
    description: 'For established providers. Same full access, higher capacity.',
    features: [
      'Everything in Starter, plus:',
      'Higher participant limit (50)',
      'Priority email support',
      'Same full feature set',
      'No hidden upgrades'
    ],
    highlight: 'Most popular'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: 'pricing',
    platformFee: '50+ participants',
    minimum: 'Volume discounts available',
    description: 'Dedicated infrastructure and strategic support for large organizations.',
    features: [
      'Everything in Growth, plus:',
      'Dedicated AU instance',
      'SSO & SCIM provisioning',
      'Custom SLA & uptime guarantee',
      'API access & webhooks',
      'Dedicated success manager'
    ],
    highlight: 'Enterprise grade'
  }
];

const comparisonRows = [
  { feature: 'Staff accounts', trial: 'Unlimited', starter: 'Unlimited', growth: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'Guardian compliance engine', trial: true, starter: true, growth: true, enterprise: true },
  { feature: 'Mobile app with GPS', trial: true, starter: true, growth: true, enterprise: true },
  { feature: 'PRODA exports', trial: true, starter: true, growth: true, enterprise: true },
  { feature: 'Live operations map', trial: false, starter: true, growth: true, enterprise: true },
  { feature: 'Smart fatigue alerts', trial: false, starter: true, growth: true, enterprise: true },
  { feature: 'Qualification tracking', trial: false, starter: true, growth: true, enterprise: true },
  { feature: 'Custom shift rates', trial: false, starter: true, growth: true, enterprise: true },
  { feature: 'API access', trial: false, starter: false, growth: false, enterprise: true },
  { feature: 'Dedicated success manager', trial: false, starter: false, growth: false, enterprise: true },
  { feature: 'SSO/SCIM', trial: false, starter: false, growth: false, enterprise: true }
];

const addOns = [
  {
    title: 'Data Migration Service',
    description: 'We import your legacy data (participants, staff, history) from Excel or other systems.',
    price: '$499 one-time'
  },
  {
    title: 'Audit Preparation Pack',
    description: 'One-click export of all compliance evidence linked to NDIS practice standards.',
    price: '$99 / month'
  },
  {
    title: 'White Label Portal',
    description: 'Remove Kinly branding from family and participant portals.',
    price: '$199 / month'
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
            <span>Unlimited staff accounts</span>
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
                  <th className="py-4 px-4 text-center font-semibold">Trial</th>
                  <th className="py-4 px-4 text-center font-semibold">Starter</th>
                  <th className="py-4 px-4 text-center font-semibold">Growth</th>
                  <th className="py-4 px-4 text-center font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="border-t border-slate-100">
                    <td className="py-4 px-6 font-medium text-slate-900">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.trial === 'boolean' ? (
                        row.trial ? (
                          <Check className="w-5 h-5 mx-auto text-emerald-600" />
                        ) : (
                          <Minus className="w-5 h-5 mx-auto text-slate-300" />
                        )
                      ) : (
                        <span className="text-xs text-slate-700 font-medium">{row.trial}</span>
                      )}
                    </td>
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
