import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const testimonials = [
    {
        text: "Our caregivers actually love the mobile app—offline mode saves them in rural areas. Rostering that took 10 hours now takes 90 minutes.",
        author: "Sarah J.",
        role: "Director",
        company: "Leading SIL Provider, VIC"
    },
    {
        text: "We went from 18-day billing cycles to 3 days. The PRODA batch builder eliminated our Friday crunch. Cash flow transformed overnight.",
        author: "Michael R.",
        role: "Operations Manager",
        company: "Enterprise Disability Services, NSW"
    },
    {
        text: "The live ops map means I spot staffing gaps before clients notice. Guardian flags issues quietly in the background—it just works.",
        author: "Elena M.",
        role: "CEO",
        company: "Community Access Group, QLD"
    }
];

const providerLogos = [
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
                {/* Header with stats */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        Trusted by Forward-Thinking Providers
                    </motion.h2>

                    {/* Provider Types Logos */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-wrap justify-center gap-4 mt-6"
                    >
                        {providerLogos.map((logo) => (
                            <span key={logo} className="px-4 py-2 rounded-full bg-white/10 text-sm font-medium border border-white/20">
                                {logo}
                            </span>
                        ))}
                    </motion.div>
                </div>

                {/* Testimonials */}
                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-colors"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-base italic mb-5 text-gray-100 leading-relaxed">"{t.text}"</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white">
                                    {t.author[0]}
                                </div>
                                <div>
                                    <p className="font-semibold text-white text-sm">{t.author}, {t.role}</p>
                                    <p className="text-teal-200 text-xs">{t.company}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-14 text-center"
                >
                    <div className="inline-block p-6 rounded-2xl bg-[#0b3b47] w-full max-w-3xl mx-auto border border-white/10">
                        <h3 className="text-xl font-bold mb-4">Join 18,400+ Participants Being Protected</h3>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white rounded-xl hover:bg-[#2ab36d] transition-all shadow-lg font-bold"
                        >
                            Book a Demo <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SocialProof;
