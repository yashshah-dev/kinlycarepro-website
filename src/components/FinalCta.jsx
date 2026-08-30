import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinalCta = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="rounded-3xl bg-gradient-to-r from-primary-950 via-primary to-primary text-white p-10 md:p-16 text-center overflow-hidden relative">
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(51,202,127,0.5), transparent 40%)' }}></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                            Ready to make your practice audit-proof?
                        </h2>
                        <p className="mt-4 text-blue-100 text-base md:text-lg max-w-2xl mx-auto">
                            See how Kinly CarePro unifies billing, care, payroll, and compliance — and book a live walkthrough with our Australian team.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="px-8 py-4 bg-accent text-slate-950 rounded-xl hover:bg-accent-600 transition-all shadow-lg font-bold text-base flex items-center justify-center gap-2 group"
                            >
                                Book a demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/pricing"
                                className="px-8 py-4 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all font-semibold text-base flex items-center justify-center gap-2 border border-white/20"
                            >
                                View pricing
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCta;
