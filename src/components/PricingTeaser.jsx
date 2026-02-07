import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const plans = [
    {
        name: 'Growth',
        price: '$10',
        cadence: 'per participant/month',
        description: 'For growing providers who need smart rostering, compliance, and onboarding support.',
        features: [
            'Guardian compliance engine',
            'Mobile app with GPS geofencing',
            'Live operations map + smart rostering',
            'Free data migration (worth $2k)'
        ],
        highlight: 'Most popular',
        primary: true
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        cadence: 'pricing',
        description: 'White-glove service with dedicated infrastructure and strategic operational support.',
        features: [
            'Everything in Growth, plus:',
            'Dedicated AU hosting + SSO',
            'Assigned operations strategist',
            'Custom SLA + premium support'
        ],
        highlight: 'Enterprise grade',
        primary: false
    }
];

const PricingTeaser = () => {
    return (
        <section id="pricing" className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <p className="text-accent font-semibold tracking-wide uppercase text-sm">Pricing</p>
                    <h2 className="text-4xl font-bold text-slate-900 mt-4">Simple, audit-friendly billing.</h2>
                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                        Every plan includes mobile apps, smart rostering, one-click NDIS billing, and Guardian compliance. No hidden module fees.
                    </p>
                </motion.div>

                {/* Competitive advantage */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12"
                >
                    {[
                        'Complete platform included',
                        'Free migration worth $2k',
                        'NDIS price updates guaranteed'
                    ].map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm font-medium text-emerald-900 bg-emerald-50 px-4 py-2 rounded-full">
                            <Check className="w-4 h-4 text-emerald-600" />
                            <span>{item}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Plan Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 + index * 0.1 }}
                            className={`relative rounded-3xl border p-8 ${plan.primary
                                    ? 'border-primary/30 bg-primary/5 shadow-xl'
                                    : 'border-slate-200 bg-white shadow-lg'
                                }`}
                        >
                            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${plan.primary ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600'
                                }`}>
                                {plan.highlight}
                            </span>

                            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-slate-500">{plan.name}</p>
                            <h3 className="mt-2 text-4xl font-bold text-slate-900">
                                {plan.price}
                                <span className="block text-sm font-medium text-slate-500 mt-1">{plan.cadence}</span>
                            </h3>

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

                            <button className={`mt-8 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm ${plan.primary
                                    ? 'bg-primary text-white hover:bg-[#0b3b47]'
                                    : 'bg-slate-900 text-white hover:bg-slate-800'
                                }`}>
                                {plan.name === 'Enterprise' ? 'Book review' : 'Start pilot'}
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* View all plans link */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-10 text-center"
                >
                    <Link
                        to="/pricing"
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                    >
                        View all plans and compare features <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default PricingTeaser;
