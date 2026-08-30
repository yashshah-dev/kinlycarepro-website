import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe2, Lock, KeyRound, Activity, ClipboardCheck, ArrowRight, Server, FileCheck, Key } from 'lucide-react';
import { Link } from 'react-router-dom';

const trustBadges = [
    { icon: <Server className="w-5 h-5" />, label: '100% AU Hosted', detail: 'Sydney AWS (ap-southeast-2)' },
    { icon: <Lock className="w-5 h-5" />, label: 'AES-256 & TLS-256', detail: 'In-transit & at-rest' },
    { icon: <ShieldCheck className="w-5 h-5" />, label: 'Privacy Act 1988', detail: '13 APPs Compliant' },
    { icon: <ClipboardCheck className="w-5 h-5" />, label: '7-Year Audit Trail', detail: 'Immutable NDIS logs' },
    { icon: <Key className="w-5 h-5" />, label: 'MFA & Granular RBAC', detail: 'Zero unauthorized access' },
    { icon: <FileCheck className="w-5 h-5" />, label: '15-Min Signed URLs', detail: 'Clinical doc privacy' }
];

const SecurityStrip = () => {
    return (
        <section id="security-strip" className="py-20 bg-slate-950 text-white border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                        <ShieldCheck className="w-4 h-4" /> Bank-Grade Enterprise Security
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold">The Kinly CarePro Trust & Security Promise</h2>
                    <p className="mt-3 text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
                        Hosted in Sydney, protected by OWASP Top 10 defenses, and engineered with tenant-scoped data isolation.
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
                            <p className="font-bold text-white text-sm">{badge.label}</p>
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
                        to="/security"
                        className="inline-flex items-center gap-2 text-emerald-400 font-semibold text-sm hover:text-emerald-300 transition-colors"
                    >
                        Explore our 3-Layer Security Architecture <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default SecurityStrip;
