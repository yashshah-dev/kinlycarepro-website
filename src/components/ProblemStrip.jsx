import React from 'react';
import { Clock, AlertCircle, FileWarning, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const problems = [
    {
        icon: <Clock className="w-5 h-5 text-orange-500" />,
        title: "Admin Overload",
        description: "8+ hours/week on rostering. Staff buried in WhatsApp."
    },
    {
        icon: <AlertCircle className="w-5 h-5 text-yellow-500" />,
        title: "Staff Frustration",
        description: "Clunky apps. No offline mode. Manual timesheets."
    },
    {
        icon: <FileWarning className="w-5 h-5 text-red-500" />,
        title: "Revenue Leakage",
        description: "Ghost shifts and late invoicing stall cash flow."
    }
];

const ProblemStrip = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <span className="inline-block px-3 py-1 bg-red-50 text-red-500 rounded-full text-sm font-semibold border border-red-100">
                        Sound familiar?
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4">
                        The NDIS admin trap
                    </h2>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-4 justify-center items-stretch">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow"
                        >
                            <div className="p-2 bg-gray-50 rounded-xl flex-shrink-0">
                                {problem.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">{problem.title}</h3>
                                <p className="text-sm text-gray-600 mt-1">{problem.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center mt-8"
                >
                    <p className="text-gray-600 inline-flex items-center gap-2">
                        There's a better way <ArrowRight className="w-4 h-4 text-primary" />
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ProblemStrip;
