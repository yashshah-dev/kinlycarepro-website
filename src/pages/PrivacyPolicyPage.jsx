import React from 'react';
import LegalLayout from '../components/LegalLayout';
import SEO from '../components/SEO';
import { Shield, Database, Lock, Mail, Server, Eye, FileText, UserCheck } from 'lucide-react';

const PrivacyPolicyPage = () => {
    return (
        <LegalLayout
            title="Privacy Policy"
            lastUpdated="February 19, 2026"
            seoTitle="Privacy Policy - Kinly CarePro"
            seoDescription="Our commitment to protecting your data and complying with Australian privacy laws and NDIS standards."
            seoUrl="https://www.kinlycarepro.com/privacy"
        >
            <div className="space-y-12">
                <section>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        At <span className="font-semibold text-primary">Kinly CarePro</span> ("we," "our," or "us"), our highest priority is protecting the privacy of your organization and the sensitive health data of NDIS participants. This policy outlines our commitment to the <strong className="text-gray-900">Privacy Act 1988 (Cth)</strong> and the <strong className="text-gray-900">NDIS Quality and Safeguards Commission</strong> requirements.
                    </p>
                </section>

                <hr className="border-gray-100" />

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <Database className="text-primary" size={28} />
                        1. Information We Collect
                    </h2>
                    <p className="text-gray-600 mb-6">We collect only what is necessary to provide safe and compliant care management services:</p>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { title: "Provider Information", icon: UserCheck, desc: "Business details, ABN, and authorized staff accounts." },
                            { title: "Staff Data", icon: UserCheck, desc: "Qualifications, screenings (NDIS Check), and roster history." },
                            { title: "Participant Data", icon: FileText, desc: "NDIS plans, goals, shift notes, and incident reports." },
                            { title: "Usage & Logs", icon: Eye, desc: "System activity logs for security and audit trails." }
                        ].map((item, i) => (
                            <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-white rounded-lg shadow-sm text-primary">
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <Server className="text-primary" size={28} />
                        2. Data Sovereignty & Security
                    </h2>
                    <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/10">
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-primary mb-3">100% Australian Hosted</h3>
                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    We do not send data offshore. All customer data is hosted on sovereign AWS servers located in the <strong>Sydney Region</strong>.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Encryption in transit (TLS 1.2+)",
                                        "Encryption at rest (AES-256)",
                                        "Regular penetration testing"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                                            <Shield size={16} className="text-teal-600" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-white/50 w-full md:w-auto min-w-[200px] text-center">
                                <Lock size={48} className="text-teal-500 mx-auto mb-3" />
                                <div className="font-bold text-gray-900">Enterprise Grade</div>
                                <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Security</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Use & Disclosure</h2>
                    <div className="prose prose-p:text-gray-600 max-w-none">
                        <p>Your data is used solely to deliver the Platform services. We do not sell data. Disclosure occurs only when:</p>
                        <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
                            {['Required by law (NDIS Reporting)', 'Authorized integrations (Xero/MYOB)', 'Protecting participant safety'].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 bg-white border border-gray-100 p-3 rounded-lg shadow-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Contact Us</h2>
                    <div className="bg-gray-900 text-gray-300 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center justify-between">
                        <div>
                            <p className="mb-2 font-medium text-white">Data Protection Officer</p>
                            <p className="text-sm opacity-80 mb-6 max-w-md">For access requests, corrections, or privacy concerns, please reach out to our dedicated team.</p>
                            <div className="flex flex-col gap-3">
                                <a href="mailto:support@kinlycarepro.com" className="flex items-center gap-3 text-white hover:text-teal-400 transition-colors">
                                    <Mail size={18} /> support@kinlycarepro.com
                                </a>
                                <div className="flex items-center gap-3 text-sm">
                                    <span className="w-5 flex justify-center text-gray-500">📍</span>
                                    10 Bridgewater Ave, Kialla VIC 3631
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </LegalLayout>
    );
};

export default PrivacyPolicyPage;
