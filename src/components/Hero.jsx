import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import dashboardImage from '../assets/dashboard_mockup.png';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#f2fbff] via-white to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 tracking-wide border border-primary/20">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                            Complete NDIS operations platform
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6 tracking-tight"
                    >
                        Run your NDIS business<br />
                        <span className="text-primary">from one powerful platform.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Mobile apps for staff, smart rostering for operations, one-click NDIS billing for finance—plus Guardian™ safety checks built into every workflow. Everything your team needs in one place.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <button className="px-8 py-4 bg-primary text-white rounded-xl hover:bg-[#0b3b47] transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-1 font-bold text-lg flex items-center justify-center gap-2 group">
                            Start Free Trial <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => document.getElementById('video-section').scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all font-bold text-lg flex items-center justify-center gap-2 hover:border-gray-300"
                        >
                            <Play size={20} className="fill-gray-700" /> Watch Demo
                        </button>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="relative mx-auto max-w-6xl rounded-2xl shadow-2xl border border-gray-200 overflow-hidden bg-white ring-1 ring-gray-900/5 transform hover:scale-[1.01] transition-transform duration-500"
                >
                    <img
                        src={dashboardImage}
                        alt="Kinly CarePro dashboard interface"
                        className="w-full h-auto"
                    />
                </motion.div>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 text-left px-4 sm:px-6 lg:px-8">
                {[{
                    label: 'Faster cash collection',
                    value: '3x speed improvement'
                }, {
                    label: 'Staff love the mobile app',
                    value: '4.8★ avg rating'
                }, {
                    label: 'Rostering time saved',
                    value: '12hrs/week average'
                }].map((stat) => (
                    <div key={stat.value} className="p-6 rounded-2xl border border-gray-100 shadow-sm bg-white">
                        <p className="text-sm uppercase tracking-[0.3em] text-gray-500">{stat.label}</p>
                        <p className="mt-3 text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        </section>
    );
};

export default Hero;
