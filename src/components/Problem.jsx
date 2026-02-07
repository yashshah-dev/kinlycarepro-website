import React from 'react';
import { AlertCircle, Clock, FileWarning } from 'lucide-react';
import { motion } from 'framer-motion';

const problems = [
    {
        icon: <Clock className="w-8 h-8 text-orange-500" />,
        title: "Admin Overload",
        description: "Rostering takes 8+ hours per week. PRODA uploads drag on. Staff wait for answers buried in WhatsApp threads.",
        color: "bg-orange-50",
        border: "border-orange-100"
    },
    {
        icon: <AlertCircle className="w-8 h-8 text-yellow-500" />,
        title: "Staff Frustration",
        description: "Clunky apps. No offline mode. Manual timesheets. Your best caregivers spend more time on paperwork than participants.",
        color: "bg-yellow-50",
        border: "border-yellow-100"
    },
    {
        icon: <FileWarning className="w-8 h-8 text-red-500" />,
        title: "Revenue Leakage",
        description: "Ghost shifts, missed price updates, and late invoicing stall cashflow. One audit finding can wipe out a quarter's profit.",
        color: "bg-red-50",
        border: "border-red-100"
    }
];

const Problem = () => {
    return (
        <section className="py-24 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-3 py-1 bg-red-50 text-red-500 rounded-full text-sm font-semibold mb-3 border border-red-100"
                    >
                        The Challenge
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    >
                        The Admin Trap
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 max-w-2xl mx-auto text-lg"
                    >
                        Operating an NDIS business is hard enough without manual processes slowing you down.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`bg-white p-8 rounded-2xl shadow-sm border ${problem.border} hover:shadow-xl transition-all duration-300`}
                        >
                            <div className={`mb-6 p-4 ${problem.color} rounded-x inline-flex rounded-xl`}>
                                {problem.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {problem.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Problem;
