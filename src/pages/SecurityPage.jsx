import React from 'react';
import LegalLayout from '../components/LegalLayout';
import SEO from '../components/SEO';
import SecurityArchitectureSection from '../components/SecurityArchitectureSection';
import { Shield, Lock, Key, Server, RefreshCw, AlertOctagon, Database, CheckCircle2 } from 'lucide-react';

const SecurityPage = () => {
    return (
        <>
            <SEO
                title="Enterprise Security, Privacy & Data Compliance Architecture | Kinly CarePro"
                description="100% Australian Data Residency in Sydney AWS, AES-256 encryption, 15-min TTL signed URLs, multi-tenant isolation, OWASP Top 10 defense, and 7-year NDIS immutable audit trail."
                keywords="NDIS software security, Australian data sovereignty, NDIS data compliance, AWS Sydney NDIS hosting, Privacy Act 1988 NDIS, NDIS audit trail retention"
                url="https://www.kinlycarepro.com/security"
            />

            <LegalLayout
                title="Enterprise Security & Privacy Architecture"
                lastUpdated="August 29, 2026"
                seoTitle="Security & Data Protection - Kinly CarePro"
                seoDescription="Bank-grade security protecting your NDIS participant data. 100% Australian hosted in Sydney AWS."
                seoUrl="https://www.kinlycarepro.com/security"
            >
                <div className="space-y-12">
                    <section className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">100% Australian Data Residency</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold">Enterprise Security for Australian NDIS Providers</h2>
                        <p className="text-slate-300 text-sm md:text-base mt-2 leading-relaxed">
                            Kinly CarePro is engineered from the ground up to safeguard sensitive health data, clinical notes, and financial transactions. Hosted exclusively in Sydney data centres with multi-layered defenses.
                        </p>
                    </section>

                    {/* Full Interactive 6-Pillars & 3-Layer Architecture Component */}
                    <SecurityArchitectureSection />

                    {/* Vulnerability Disclosure */}
                    <section className="bg-slate-900 text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-rose-500/10 p-3 rounded-xl border border-rose-500/20">
                                <Shield className="text-rose-400" size={32} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-1">Responsible Security Disclosure</h3>
                                <p className="text-slate-400 text-xs md:text-sm max-w-md">
                                    We value the security and research community. If you identify a potential security vulnerability, please notify our engineering team immediately.
                                </p>
                            </div>
                        </div>
                        <a
                            href="mailto:security@kinlycarepro.com"
                            className="px-6 py-3 bg-white text-slate-900 rounded-lg font-bold hover:bg-slate-100 transition-colors flex items-center gap-2 shrink-0 text-sm"
                        >
                            <AlertOctagon size={16} />
                            Report Vulnerability
                        </a>
                    </section>
                </div>
            </LegalLayout>
        </>
    );
};

export default SecurityPage;
