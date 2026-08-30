import React from 'react';
import { Clock, AlertCircle, FileWarning, ArrowRight, DollarSign, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const problems = [
    {
        icon: <DollarSign className="w-5 h-5 text-rose-500" />,
        title: "The Per-Worker Seat Tax",
        description: "Legacy PMS tools charge $10–$15 per worker. Adding casual relief staff inflates software bills without increasing participant revenue."
    },
    {
        icon: <Clock className="w-5 h-5 text-amber-500" />,
        title: "Billing Rate-Split Chaos",
        description: "Manually calculating 6AM / 8PM / 12AM rate boundaries, weekend loadings, and group ratios in spreadsheets causes claim rejections."
    },
    {
        icon: <FileWarning className="w-5 h-5 text-purple-500" />,
        title: "Audit Documentation Risk",
        description: "Frontline shift notes lacking explicit NDIS goal references and measurable outcomes create massive audit vulnerabilities."
    },
    {
        icon: <FileText className="w-5 h-5 text-blue-500" />,
        title: "Payroll Reconciliation Lag",
        description: "Days lost manually adjusting punctuality variances, overtime, and ATO travel allowances before pushing to Xero or MYOB."
    }
];

const ProblemStrip = () => {
    return (
        <section className="py-20 bg-slate-50 border-y border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-3 py-1 bg-rose-50 text-rose-700 rounded-full text-xs font-bold uppercase tracking-wider border border-rose-200">
                        The Legacy Software Bottleneck
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">
                        Why Traditional NDIS Software Slows Providers Down
                    </h2>
                    <p className="text-slate-600 text-sm md:text-base mt-2 max-w-2xl mx-auto">
                        Stitching together multiple point solutions leads to higher costs, admin chaos, and compliance risk.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow"
                        >
                            <div>
                                <div className="p-3 bg-slate-50 rounded-xl w-fit mb-4 border border-slate-100">
                                    {problem.icon}
                                </div>
                                <h3 className="font-bold text-slate-900 text-base">{problem.title}</h3>
                                <p className="text-xs md:text-sm text-slate-600 mt-2 leading-relaxed">{problem.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center mt-10"
                >
                    <Link
                        to="/features"
                        className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
                    >
                        See how Kinly CarePro solves these in one platform <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ProblemStrip;
