import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Smartphone, Radar, Calculator } from 'lucide-react';
import mobileApp from '../assets/mobile_app_mockup.png';
import dashboard from '../assets/dashboard_mockup.png';

const features = [
    {
        id: 1,
        title: 'Mobile App for Frontline Teams',
        description: 'Offline-capable app with GPS smart-fencing, one-tap emergency alerts, and shift dashboards that work in dead zones.',
        icon: <Smartphone className="w-6 h-6" />,
        stats: 'Works offline + syncs automatically',
        bullets: ['Geofenced check-in/out + photo proof', 'Shift dashboard with care plans + alerts', 'One-tap escalation with live GPS breadcrumb'],
        image: mobileApp,
        reverse: false
    },
    {
        id: 2,
        title: 'Operations Command Center',
        description: 'Airport-style live map showing every active worker, with rostering intelligence built on fatigue and qualification rules.',
        icon: <Radar className="w-6 h-6" />,
        stats: 'Detects double-bookings before publish',
        bullets: ['Smart drag-and-drop rostering', 'NDIS Price Guide sync (TTP, Saturday, PH rates)', 'Live status map: green on-time, red missing'],
        image: dashboard,
        reverse: true
    },
    {
        id: 3,
        title: 'Financial & Billing Automation',
        description: 'One-click PRODA exports, payroll interpretation, and participant budget tracking keep revenue safeguarded.',
        icon: <Calculator className="w-6 h-6" />,
        stats: '3x faster cash collection',
        bullets: ['Bulk PRODA CSV + invoice generation', 'Timesheet engine for Active Night vs Sleepover', 'Budget burn alerts for finance + service leads'],
        image: null,
        reverse: false
    },
    {
        id: 4,
        title: 'Guardian™ Risk Protection',
        description: 'Automated safety checks for progress notes, incidents, and invoices—providing suggestions for qualified staff to approve.',
        icon: <ShieldCheck className="w-6 h-6" />,
        stats: 'Flags 92% of issues before billing',
        bullets: ['Automated suggestions with staff approval required', 'Goal alignment checking with human verification', 'Incident template suggestions and restrictive practice alerts'],
        image: dashboard,
        reverse: true
    }
];

const Features = () => {
    return (
        <section id="features" className="py-24 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <span className="text-accent font-semibold tracking-wider uppercase text-sm">Solution</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Everything You Need. Nothing You Don't.</h2>
                    <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">Four core modules that cover staff, operations, finance, and risk—so you can stop stitching together five different tools.</p>
                </div>

                <div className="space-y-24">
                    {features.map((feature) => (
                        <div key={feature.id} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${feature.reverse ? 'lg:flex-row-reverse' : ''}`}>
                            <motion.div
                                initial={{ opacity: 0, x: feature.reverse ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className="flex-1"
                            >
                                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-xl text-primary mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    {feature.description}
                                </p>
                                <ul className="space-y-3 text-gray-600 mb-6">
                                    {feature.bullets && feature.bullets.map((bullet) => (
                                        <li key={bullet} className="flex items-start gap-3">
                                            <span className="mt-2 w-2 h-2 rounded-full bg-accent"></span>
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                                    <div className="h-10 w-1 bg-accent rounded-full"></div>
                                    <p className="font-semibold text-gray-800">{feature.stats}</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: feature.reverse ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className="flex-1 w-full"
                            >
                                <div className="relative rounded-2xl bg-gray-100 p-2 lg:p-4 shadow-xl ring-1 ring-black/5 transform hover:scale-[1.02] transition-transform duration-500">
                                    {feature.image ? (
                                        <img src={feature.image} alt={feature.title} className="rounded-xl w-full h-auto shadow-sm" />
                                    ) : (
                                        <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm aspect-video flex flex-col justify-center">
                                            <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600"><Calculator size={20} /></div>
                                                    <div>
                                                        <div className="h-2.5 w-32 bg-gray-200 rounded mb-2"></div>
                                                        <div className="h-2 w-24 bg-gray-100 rounded"></div>
                                                    </div>
                                                </div>
                                                <div className="px-3 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-full">Paid</div>
                                            </div>
                                            <div className="space-y-4">
                                                <div className="h-2 w-full bg-gray-100 rounded"></div>
                                                <div className="h-2 w-5/6 bg-gray-100 rounded"></div>
                                                <div className="h-2 w-4/6 bg-gray-100 rounded"></div>
                                            </div>
                                            <div className="mt-8 flex justify-end">
                                                <button className="px-4 py-2 bg-primary text-white text-sm rounded-lg font-medium shadow-md">Generate NDIS Claim</button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Features;
