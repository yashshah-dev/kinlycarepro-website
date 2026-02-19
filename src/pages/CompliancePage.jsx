import React from 'react';
import LegalLayout from '../components/LegalLayout';
import SEO from '../components/SEO';
import { ShieldCheck, AlertTriangle, Hand, ClipboardCheck, UserCheck, FileJson } from 'lucide-react';

const CompliancePage = () => {
    return (
        <LegalLayout
            title="NDIS Compliance & Data Standards"
            lastUpdated="February 19, 2026"
            seoTitle="NDIS Data Standards & Compliance - Kinly CarePro"
            seoDescription="Kinly CarePro is built to meet NDIS Practice Standards. Learn how our software simplifies compliance for Australian providers."
            seoUrl="https://kinlycarepro.com.au/compliance"
        >
            <div className="space-y-12">
                <section className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-center">
                    <div className="bg-white p-4 rounded-full shadow-sm">
                        <ShieldCheck className="text-emerald-600" size={48} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-emerald-900 mb-2">Built for the NDIS Commission</h2>
                        <p className="text-emerald-800 leading-relaxed">
                            Kinly CarePro is purpose-built to help disability service providers meet the rigorous requirements of the <strong>NDIS Practice Standards</strong>. Our platform integrates compliance directly into your daily workflow, reducing the risk of audit failure.
                        </p>
                    </div>
                </section>

                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        {
                            title: "Incident Management",
                            icon: AlertTriangle,
                            color: "text-amber-500",
                            desc: "Structured reporting system aligning with NDIS Commission requirements. Includes mandatory fields for 'Reportable Incidents' and automated management escalation workflows."
                        },
                        {
                            title: "Restrictive Practices",
                            icon: Hand,
                            color: "text-red-500",
                            desc: "Track authorized practices against Participant Care Plans. Log usage for monthly Commissioner reports and get alerts for unauthorized attempts."
                        },
                        {
                            title: "Worker Screening",
                            icon: UserCheck,
                            color: "text-blue-500",
                            desc: "Ensure only qualified staff are rostered. Verifies NDIS Worker Screening Checks and tracks expiry for mandatory certifications like First Aid."
                        },
                        {
                            title: "Progress Notes & Evidence",
                            icon: ClipboardCheck,
                            color: "text-purple-500",
                            desc: "Enforce high-quality record keeping with goal-based notes linked to NDIS outcomes. Entries are timestamped and geolocated for proof of delivery."
                        }
                    ].map((item, i) => (
                        <div key={i} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`p-2 rounded-lg bg-gray-50 ${item.color}`}>
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <FileJson className="text-primary" size={28} />
                        Data Governance
                    </h2>
                    <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            We adhere to strict data governance policies to protect participant privacy and ensure audit readiness at all times.
                        </p>
                        <ul className="grid md:grid-cols-2 gap-3">
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                All data stored securely in Australia
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                Role-based access control (RBAC)
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                Audit trails for all data modifications
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                Regular compliance reviews
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </LegalLayout>
    );
};

export default CompliancePage;
