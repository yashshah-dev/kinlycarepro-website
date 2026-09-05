import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Users, DollarSign, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
const dashboardImage = '/home_page_dashboard.webp';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-14">
                    {/* Trust Badges Row */}
                    <div className="flex flex-wrap justify-center gap-2.5 mb-6">
                        <span className="inline-flex items-center gap-1.5 py-1.5 px-3.5 rounded-full bg-accent-50 text-accent-700 font-bold text-xs border border-accent-100">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                            $25 AUD / Participant / Mo
                        </span>
                        <span className="inline-flex items-center gap-1.5 py-1.5 px-3.5 rounded-full bg-emerald-50 text-emerald-800 font-bold text-xs border border-emerald-200">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> 1 Month Free Support & Training
                        </span>
                        <span className="inline-flex items-center gap-1.5 py-1.5 px-3.5 rounded-full bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-200">
                            <Users className="w-3.5 h-3.5 text-primary" /> Unlimited Staff Accounts ($0)
                        </span>
                        <span className="inline-flex items-center gap-1.5 py-1.5 px-3.5 rounded-full bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-200">
                            <ShieldCheck className="w-3.5 h-3.5 text-accent-600" /> Zero Feature Paywalls
                        </span>
                        <span className="inline-flex items-center gap-1.5 py-1.5 px-3.5 rounded-full bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-200">
                            🇦🇺 Sydney AWS Hosted
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
                        NDIS and Disability Care Management Software <br />
                        for <span className="text-primary">Australian Providers</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                        GPS-verified mobile care, deterministic NDIS billing, AI note quality assurance, and payroll — united in one platform, from $25 per participant per month.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary-700 transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 font-bold text-base flex items-center justify-center gap-2 group"
                        >
                            Book a demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/features"
                            className="px-8 py-4 bg-slate-100 text-slate-800 rounded-xl hover:bg-slate-200 transition-all font-semibold text-base flex items-center justify-center gap-2 border border-slate-200"
                        >
                            Explore the platform
                        </Link>
                    </div>
                </div>

                {/* Dashboard Mockup Display */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative mx-auto max-w-7xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden bg-slate-900 ring-1 ring-slate-900/10"
                >
                    <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                            <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                            <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                            <span className="text-xs text-slate-400 font-mono ml-2">portal.yourbrand.com.au / command-center</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded">
                                PAPL 2025–26 Synced
                            </span>
                            <span className="text-[10px] bg-blue-500/20 text-blue-300 font-bold px-2 py-0.5 rounded">
                                Guardian AI Active
                            </span>
                        </div>
                    </div>

                    <img
                        src={dashboardImage}
                        alt="Kinly CarePro Command Center Interface"
                        width="1400"
                        height="800"
                        className="w-full h-auto img-crisp block"
                        loading="eager"
                        fetchPriority="high"
                        decoding="async"
                    />
                </motion.div>
            </div>

            {/* Quick KPI stats strip */}
            <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4 text-left px-4 sm:px-6 lg:px-8 mt-12">
                <div className="p-6 rounded-2xl border border-slate-200 shadow-sm bg-white flex items-start gap-4">
                    <div className="p-3 bg-accent-50 text-accent-700 rounded-xl">
                        <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Billing & Invoicing</p>
                        <p className="text-xl font-extrabold text-slate-900 mt-0.5">Deterministic rate accuracy</p>
                        <p className="text-xs text-slate-500 mt-1">Automatic 6 AM / 8 PM / 12 AM rate splits and group ratios.</p>
                    </div>
                </div>

                <div className="p-6 rounded-2xl border border-slate-200 shadow-sm bg-white flex items-start gap-4">
                    <div className="p-3 bg-primary/10 text-primary rounded-xl">
                        <DollarSign className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Predictable Overhead</p>
                        <p className="text-xl font-extrabold text-slate-900 mt-0.5">$25 / Participant / Month</p>
                        <p className="text-xs text-slate-500 mt-1">No per-worker fees. Add unlimited staff and admins at no extra cost.</p>
                    </div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        </section>
    );
};

export default Hero;
