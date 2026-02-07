import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Bot, Target, AlertTriangle, FileSearch, UserCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const highlights = [
    {
        title: 'Smart Documentation',
        description: 'Spots missing goal references and suggests improvements—staff approve all changes.',
        icon: <Bot className="w-5 h-5" />,
    },
    {
        title: 'Goal Alignment',
        description: 'Flags entries that may need goal references—you stay in control.',
        icon: <Target className="w-5 h-5" />,
    },
    {
        title: 'Incident Alerts',
        description: 'Detects red-flag language and drafts incident templates for your review.',
        icon: <AlertTriangle className="w-5 h-5" />,
    },
    {
        title: 'Pre-Billing Checks',
        description: 'Catches overlapping shifts and duplicate claims before invoicing.',
        icon: <FileSearch className="w-5 h-5" />,
    }
];

const GuardianOverview = () => {
    return (
        <section id="guardian" className="py-24 bg-gradient-to-br from-[#061821] via-[#0f2b38] to-[#0F4C5C] text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08), transparent 45%)' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-sm uppercase tracking-[0.2em] text-accent"
                        >
                            <ShieldCheck className="w-4 h-4" /> Guardian™ Compliance
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="mt-6 text-4xl md:text-5xl font-semibold leading-tight"
                        >
                            Your 24/7 compliance assistant.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="mt-6 text-lg text-blue-100 leading-relaxed"
                        >
                            Guardian quietly reviews every shift, note, and invoice—flagging potential issues for your team to review. Like having an experienced supervisor checking work 24/7.
                        </motion.p>

                        {/* Human-in-Command Callout */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-3"
                        >
                            <UserCheck className="w-5 h-5 text-emerald-300 mt-0.5 flex-shrink-0" />
                            <div>
                                <p className="text-sm text-emerald-100 leading-relaxed">
                                    <strong className="text-emerald-50">Human-in-Command:</strong> Guardian provides suggestions only. Staff approve all changes. Full audit trail preserved.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="mt-8"
                        >
                            <Link
                                to="/features"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-colors"
                            >
                                See Guardian in Action <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right: Feature Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid sm:grid-cols-2 gap-4"
                    >
                        {highlights.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 + index * 0.05 }}
                                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
                            >
                                <div className="p-2 bg-white/10 rounded-xl text-accent w-fit mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-blue-100 leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Capability Strip */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {[
                        { value: 'Every Note', label: 'Reviewed for compliance' },
                        { value: 'Goal Matching', label: 'Built into workflows' },
                        { value: 'Pre-Billing', label: 'Issue detection' },
                        { value: 'Audit-Ready', label: 'Documentation' }
                    ].map((stat) => (
                        <div key={stat.label} className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
                            <p className="text-2xl font-bold text-white">{stat.value}</p>
                            <p className="text-xs text-blue-200 mt-1 uppercase tracking-wide">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default GuardianOverview;
