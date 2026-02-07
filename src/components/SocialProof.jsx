import React from 'react';
import { ArrowRight, Sparkles, Shield, Zap, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const capabilities = [
    {
        icon: <Shield className="w-5 h-5" />,
        title: 'Compliance-First Design',
        description: 'Guardian checks every shift, note, and invoice against NDIS practice standards before billing.',
    },
    {
        icon: <Zap className="w-5 h-5" />,
        title: 'Streamlined Operations',
        description: 'Smart rostering with fatigue rules, qualification matching, and real-time gap alerts.',
    },
    {
        icon: <Clock className="w-5 h-5" />,
        title: 'Faster Cash Flow',
        description: 'One-click PRODA batch builder designed to accelerate your billing cycle.',
    }
];

const providerTypes = [
    "SIL Providers",
    "Community Access",
    "Allied Health Groups",
    "SDA Operators",
    "Specialist Support"
];

const SocialProof = () => {
    return (
        <section id="why-kinlycarepro" className="py-20 bg-primary text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 p-12 opacity-10">
                <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        Built for Forward-Thinking Providers
                    </motion.h2>

                    {/* Provider Types */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-wrap justify-center gap-4 mt-6"
                    >
                        {providerTypes.map((type) => (
                            <span key={type} className="px-4 py-2 rounded-full bg-white/10 text-sm font-medium border border-white/20">
                                {type}
                            </span>
                        ))}
                    </motion.div>
                </div>

                {/* Capabilities Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {capabilities.map((cap, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-colors"
                        >
                            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-accent mb-4">
                                {cap.icon}
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{cap.title}</h3>
                            <p className="text-sm text-blue-100 leading-relaxed">{cap.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Founding Provider CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-14 text-center"
                >
                    <div className="inline-block p-6 rounded-2xl bg-[#0b3b47] w-full max-w-3xl mx-auto border border-white/10">
                        <div className="flex items-center justify-center gap-2 text-accent mb-3">
                            <Sparkles className="w-5 h-5" />
                            <span className="text-sm font-semibold uppercase tracking-wide">Limited Spots Available</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Join Our Founding Provider Program</h3>
                        <p className="text-blue-100 text-sm mb-4 max-w-xl mx-auto">
                            Be among the first providers to experience Kinly CarePro. Founding partners receive priority onboarding, direct access to our product team, and special pricing.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white rounded-xl hover:bg-[#2ab36d] transition-all shadow-lg font-bold"
                        >
                            Apply for Early Access <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SocialProof;
