import React from 'react';
import LegalLayout from '../components/LegalLayout';
import SEO from '../components/SEO';
import { ShieldCheck, AlertTriangle, Hand, ClipboardCheck, UserCheck, FileJson, Clock, FileText } from 'lucide-react';

const CompliancePage = () => {
    return (
        <>
            <SEO
                title="NDIS Compliance & Practice Standards Governance | Kinly CarePro"
                description="Built for the NDIS Quality and Safeguards Commission. 7-year immutable audit retention, 3-tier worker screening, incident reporting, restrictive practices, and deterministic PAPL billing."
                keywords="NDIS compliance, NDIS practice standards, NDIS worker screening check, NDIS incident management, restrictive practices logging, 7 year NDIS audit log"
                url="https://www.kinlycarepro.com/compliance"
            />

            <LegalLayout
                title="NDIS Practice Standards & Data Governance"
                lastUpdated="August 29, 2026"
                seoTitle="NDIS Compliance Standards - Kinly CarePro"
                seoDescription="Kinly CarePro is purpose-built to meet NDIS Practice Standards. Learn how our software simplifies compliance for Australian providers."
                seoUrl="https://www.kinlycarepro.com/compliance"
            >
                <div className="space-y-12">
                    <section className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 flex flex-col md:flex-row gap-6 items-center">
                        <div className="bg-white p-4 rounded-2xl shadow-sm text-emerald-600 flex-shrink-0">
                            <ShieldCheck size={48} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-emerald-950 mb-2">Built for the NDIS Quality & Safeguards Commission</h2>
                            <p className="text-emerald-900 leading-relaxed text-sm md:text-base">
                                Kinly CarePro is engineered to ensure disability service providers effortlessly maintain compliance with the <strong>NDIS Practice Standards</strong>. Every shift, progress note, and credential check is verified with immutable audit logging to ensure your organization is audit-ready at all times.
                            </p>
                        </div>
                    </section>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Incident Management & Commission Reporting",
                                icon: AlertTriangle,
                                color: "text-amber-600 bg-amber-50",
                                desc: "Structured reporting workflow categorizing incident severity (Minor, Moderate, Serious, Reportable). Generates formal, branded PDF reports formatted for executive review and immediate submission to the NDIS Commission."
                            },
                            {
                                title: "Restrictive Practices & Behavior Support",
                                icon: Hand,
                                color: "text-rose-600 bg-rose-50",
                                desc: "Track authorized restrictive practices against Participant Behavior Support Plans. Log ABC (Antecedent, Behavior, Consequence) observations with intensity scoring (1–5) and automated expiry countdowns."
                            },
                            {
                                title: "3-Tier Staff Screening & Credential Locks",
                                icon: UserCheck,
                                color: "text-blue-600 bg-blue-50",
                                desc: "Tier 1 blocking mandatory checks (NDISWC, WWCC, Police Check, First Aid, CPR). Automatically locks non-compliant staff from high-intensity shifts and triggers proactive 30/60/90-day expiry notifications."
                            },
                            {
                                title: "Goal-Aligned Notes & Proof of Delivery",
                                icon: ClipboardCheck,
                                color: "text-purple-600 bg-purple-50",
                                desc: "Enforce audit-proof record keeping with Guardian AI note quality scoring (0–100). Every progress note is geofenced, timestamped, and mapped to funded NDIS goals."
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className={`p-2.5 rounded-xl ${item.color}`}>
                                            <item.icon size={22} />
                                        </div>
                                        <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                                    </div>
                                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <section className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
                        <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Clock className="text-primary" size={24} />
                            7-Year Immutable Audit Trail Mandate
                        </h2>
                        <p className="text-slate-700 text-sm leading-relaxed mb-6">
                            In accordance with NDIS Commission rules and Australian health record retention standards, Kinly CarePro preserves an immutable, versioned audit trail for 7 years:
                        </p>
                        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                            <div className="p-4 bg-white rounded-xl border border-slate-200">
                                <strong className="text-slate-900 block mb-1">Shift Changes:</strong>
                                Logs exact scheduling edits, worker re-assignments, and cancellations with user attribution.
                            </div>
                            <div className="p-4 bg-white rounded-xl border border-slate-200">
                                <strong className="text-slate-900 block mb-1">Clinical Note Diffs:</strong>
                                Preserves original raw notes and staff-approved edits alongside Guardian AI suggestions.
                            </div>
                            <div className="p-4 bg-white rounded-xl border border-slate-200">
                                <strong className="text-slate-900 block mb-1">Billing Runs:</strong>
                                Draft vs. committed invoice line items with batch export history (`BATCH-YYYYMMDD-XX.csv`).
                            </div>
                            <div className="p-4 bg-white rounded-xl border border-slate-200">
                                <strong className="text-slate-900 block mb-1">Data Sovereignty:</strong>
                                100% stored in Sydney AWS (ap-southeast-2) with encrypted offsite daily backups.
                            </div>
                        </div>
                    </section>
                </div>
            </LegalLayout>
        </>
    );
};

export default CompliancePage;
