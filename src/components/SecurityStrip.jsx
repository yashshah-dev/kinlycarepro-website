import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe2, Lock, KeyRound, Activity, ClipboardCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const trustBadges = [
    { icon: <Globe2 className="w-5 h-5" />, label: '100% AU Hosted', detail: 'Sydney + Melbourne' },
    { icon: <Lock className="w-5 h-5" />, label: 'AES-256 Encryption', detail: 'In-flight & at-rest' },
    { icon: <ShieldCheck className="w-5 h-5" />, label: 'ISO 27001 Ready', detail: 'SOC 2 aligned' },
    { icon: <Activity className="w-5 h-5" />, label: '99.98% Uptime', detail: '24/7 monitoring' },
    { icon: <KeyRound className="w-5 h-5" />, label: 'RBAC + SSO', detail: 'Enterprise controls' },
    { icon: <ClipboardCheck className="w-5 h-5" />, label: '7-Year Audit Trail', detail: 'Immutable logs' }
];

const SecurityStrip = () => {
    return (
        <section id="security" className="py-20 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 text-emerald-300 text-sm tracking-[0.2em] uppercase mb-4">
                        <ShieldCheck className="w-4 h-4" /> Security & Compliance
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">Built to pass every NDIS audit.</h2>
                    <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
                        Australian-hosted infrastructure with enterprise-grade security controls. Your participant data never leaves the country.
                    </p>
                </motion.div>

                {/* Trust Badges Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {trustBadges.map((badge, index) => (
                        <motion.div
                            key={badge.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:bg-white/10 transition-colors"
                        >
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center mx-auto mb-3">
                                {badge.icon}
                            </div>
                            <p className="font-semibold text-white text-sm">{badge.label}</p>
                            <p className="text-xs text-slate-400 mt-1">{badge.detail}</p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-12 text-center"
                >
                    <Link
                        to="/compliance"
                        className="inline-flex items-center gap-2 text-emerald-300 font-semibold hover:text-emerald-200 transition-colors"
                    >
                        View full compliance documentation <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default SecurityStrip;
