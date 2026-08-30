import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Bot, Target, AlertTriangle, UserCheck, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const highlights = [
    {
        title: '0–100 Compliance Quality Scoring',
        description: 'Evaluates person-centered phrasing, active support documentation, and measurable goal outcomes in real time.',
        icon: <Bot className="w-5 h-5" />,
    },
    {
        title: 'Goal Alignment Verification',
        description: 'Flags documentation gaps and ensures progress notes link directly to participant NDIS plan goals.',
        icon: <Target className="w-5 h-5" />,
    },
    {
        title: 'Instant Note Rewrite Assistant',
        description: 'Takes rough frontline notes and restructures them into professional, audit-proof clinical documentation.',
        icon: <Sparkles className="w-5 h-5" />,
    },
    {
        title: 'Incident Severity Detection',
        description: 'Detects red-flag keywords (injuries, refusals, restrictive practices) and generates Commission incident drafts.',
        icon: <AlertTriangle className="w-5 h-5" />,
    }
];

const GuardianOverview = () => {
    return (
        <section id="guardian-overview" className="py-24 bg-gradient-to-br from-primary-950 via-primary-900 to-primary text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08), transparent 45%)' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-xs uppercase tracking-[0.2em] text-accent font-bold"
                        >
                            <ShieldCheck className="w-4 h-4" /> Guardian™ AI Compliance QA
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="mt-6 text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight"
                        >
                            Turn frontline notes into <br />
                            <span className="text-accent">audit-proof documentation.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="mt-6 text-base sm:text-lg text-blue-100 leading-relaxed"
                        >
                            Guardian AI reviews, scores, and upgrades progress notes in real time — keeping every note aligned with participant NDIS goals and Commission standards before billing runs are finalized.
                        </motion.p>

                        {/* Human-in-Command Callout */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="mt-6 p-4 rounded-2xl bg-accent/10 border border-accent/30 flex items-start gap-3"
                        >
                            <UserCheck className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                            <div>
                                <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                                    <strong className="text-accent">Human-in-Command Guarantee:</strong> Guardian AI provides suggestions and scoring only. Qualified staff retain full editorial control and approve all final submissions.
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
                                to="/guardian-ai"
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-slate-950 font-bold hover:bg-accent-600 transition-colors text-sm shadow-lg"
                            >
                                Try the interactive AI rewrite demo <ArrowRight className="w-4 h-4" />
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
                                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors flex flex-col justify-between"
                            >
                                <div>
                                    <div className="p-2.5 bg-accent/20 rounded-xl text-accent w-fit mb-4">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-base font-bold mb-2 text-white">{item.title}</h3>
                                    <p className="text-xs text-blue-100 leading-relaxed">{item.description}</p>
                                </div>
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
                        { value: '0–100 Score', label: 'Real-time note QA' },
                        { value: 'NDIS Goal Match', label: 'Automated linking' },
                        { value: 'Incident Flags', label: 'Early safety detection' },
                        { value: 'Audit-Ready', label: 'Commission documentation' }
                    ].map((stat) => (
                        <div key={stat.label} className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
                            <p className="text-2xl font-extrabold text-accent">{stat.value}</p>
                            <p className="text-xs text-blue-200 mt-1 uppercase tracking-wide font-medium">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default GuardianOverview;
