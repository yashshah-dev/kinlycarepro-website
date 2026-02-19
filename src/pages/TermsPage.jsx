import React from 'react';
import LegalLayout from '../components/LegalLayout';
import SEO from '../components/SEO';
import { Scale, AlertCircle, CheckCircle2, DollarSign, ShieldAlert, Clock } from 'lucide-react';

const TermsPage = () => {
    return (
        <LegalLayout
            title="Terms of Service"
            lastUpdated="February 19, 2026"
            seoTitle="Terms of Service - Kinly CarePro"
            seoDescription="Terms and conditions for using the Kinly CarePro NDIS management platform."
            seoUrl="https://kinlycarepro.com/terms"
        >
            <div className="space-y-12">
                <section>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Welcome to <span className="font-semibold text-primary">Kinly CarePro</span>. By accessing our platform, you agree to these terms. These are designed to ensure a safe, compliant, and reliable environment for all NDIS providers.
                    </p>
                </section>

                <hr className="border-gray-100" />

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Key Definitions</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { term: "Platform", def: "The Kinly CarePro web & mobile applications." },
                            { term: "Provider", def: "The NDIS organization subscribing to the service." },
                            { term: "User", def: "Staff members accessing the account." }
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <span className="block font-bold text-primary mb-1">{item.term}</span>
                                <span className="text-sm text-gray-600">{item.def}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <CheckCircle2 className="text-primary" size={24} />
                        2. Acceptable Use
                    </h2>
                    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                        <div className="p-4 bg-gray-50 border-b border-gray-200 font-medium text-gray-900">
                            You agree NOT to:
                        </div>
                        <ul className="divide-y divide-gray-100">
                            {[
                                "Store illegal, harmful, or unauthorized content.",
                                "Attempt to bypass security measures or reverse engineer the platform.",
                                "Falsify NDIS claims or misrepresent service delivery data.",
                                "Share account credentials with unauthorized individuals."
                            ].map((item, i) => (
                                <li key={i} className="p-4 flex items-start gap-3 text-gray-600">
                                    <AlertCircle size={18} className="text-red-500 mt-0.5 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <div className="grid md:grid-cols-2 gap-8">
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <DollarSign className="text-primary" size={20} />
                            3. Fees & Payment
                        </h2>
                        <p className="text-gray-600">
                            Services are billed in advance based on your subscription plan. Failure to pay may result in temporary suspension. You may cancel at any time via the billing portal.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <ShieldAlert className="text-primary" size={20} />
                            4. Liability
                        </h2>
                        <p className="text-gray-600">
                            To the extent permitted by law, Kinly CarePro is not liable for indirect damages. Our total liability is limited to the fees paid in the preceding 12 months.
                        </p>
                    </section>
                </div>

                <section className="bg-blue-50 rounded-xl p-6 border border-blue-100 flex gap-4">
                    <Clock className="text-blue-600 flex-shrink-0" size={24} />
                    <div>
                        <h3 className="font-bold text-blue-900 mb-1">Service Level Objective</h3>
                        <p className="text-blue-800 text-sm">
                            We aim for 99.9% uptime. Scheduled maintenance will be communicated 48 hours in advance whenever possible.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Governing Law</h2>
                    <p className="text-gray-600">
                        These Terms are governed by the laws of <strong className="text-gray-900">Victoria, Australia</strong>. Any disputes shall be resolved in the courts of Victoria.
                    </p>
                </section>
            </div>
        </LegalLayout>
    );
};

export default TermsPage;
