import React from 'react';
import LegalLayout from '../components/LegalLayout';
import SEO from '../components/SEO';
import { Shield, Lock, Key, Server, RefreshCw, AlertOctagon } from 'lucide-react';

const SecurityPage = () => {
    return (
        <LegalLayout
            title="Security"
            lastUpdated="February 19, 2026"
            seoTitle="Security - Kinly CarePro"
            seoDescription="Enterprise-grade security protecting your NDIS data. Encryption, Australian hosting, and strict access controls."
            seoUrl="https://kinlycarepro.com/security"
        >
            <div className="space-y-12">
                <section className="text-center max-w-2xl mx-auto">
                    <p className="text-xl text-gray-600">
                        Safeguarding your data is our highest priority. We use enterprise-grade security measures to ensure NDIS participant data remains protected.
                    </p>
                </section>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                            <Server size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Infrastructure & Hosting</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Hosted on <strong className="text-gray-900">Amazon Web Services (AWS)</strong> in the <strong className="text-gray-900">Sydney Region</strong> (ap-southeast-2). This ensures full compliance with Australian data sovereignty laws for government contracts and health data.
                        </p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                        <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                            <Lock size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Unbreakable Encryption</h3>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                                <strong>In Transit:</strong> TLS 1.2+ for all data transmission.
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                                <strong>At Rest:</strong> AES-256 encryption for databases.
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                        <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 mb-4">
                            <Key size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Access Control</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-3">
                            Strict Role-Based Access Control (RBAC) ensures data isolation.
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Providers only see their own organization.</li>
                            <li>• Staff viewing restricted to assigned participants.</li>
                            <li>• MFA available for administrative accounts.</li>
                        </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                        <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600 mb-4">
                            <RefreshCw size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Backup & Recovery</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Automated daily backups stored across multiple availability zones. We perform regular restore tests to ensure data durability and rapid recovery capabilities.
                        </p>
                    </div>
                </div>

                <section className="bg-slate-900 text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-red-500/10 p-3 rounded-xl border border-red-500/20">
                            <Shield className="text-red-400" size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-1">Found a Vulnerability?</h3>
                            <p className="text-slate-400 text-sm max-w-md">
                                We value the security community. If you identify a potential issue, please report it to our security team immediately.
                            </p>
                        </div>
                    </div>
                    <a
                        href="mailto:security@kinlycarepro.com"
                        className="px-6 py-3 bg-white text-slate-900 rounded-lg font-bold hover:bg-slate-100 transition-colors flex items-center gap-2 shrink-0"
                    >
                        <AlertOctagon size={18} />
                        Report Issue
                    </a>
                </section>
            </div>
        </LegalLayout>
    );
};

export default SecurityPage;
