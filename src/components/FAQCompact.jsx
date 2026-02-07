import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
    {
        question: 'Does Guardian make autonomous clinical decisions?',
        answer: 'No. Guardian provides compliance suggestions only. Staff approve all changes and remain the documented authors. Full audit trail preserved.'
    },
    {
        question: 'Can staff check in from home?',
        answer: 'No. Kinly CarePro geofences every participant location. Shifts cannot start unless staff are physically inside the approved radius.'
    },
    {
        question: 'What happens if the internet goes down?',
        answer: 'The mobile app works fully offline. Staff can check in/out and capture notes without reception. Data syncs automatically when connectivity returns.'
    },
    {
        question: 'Do we have to update pricing guides manually?',
        answer: 'No. Kinly CarePro automatically ingests the latest NDIS Pricing Arrangements including TTP, weekend, and public holiday rates.'
    }
];

const FAQCompact = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <p className="text-accent font-semibold tracking-wide uppercase text-sm">FAQ</p>
                    <h2 className="text-3xl font-bold text-slate-900 mt-3">Common questions</h2>
                </div>
                <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 overflow-hidden">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={faq.question} className="bg-white">
                                <button
                                    className="w-full px-5 py-4 flex items-center justify-between text-left"
                                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                >
                                    <span className="text-base font-semibold text-slate-900">{faq.question}</span>
                                    <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                                </button>
                                {isOpen && (
                                    <div className="px-5 pb-4 text-slate-600 text-sm leading-relaxed">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
                <div className="mt-6 text-center">
                    <Link to="/features" className="text-primary font-semibold text-sm hover:underline">
                        View more FAQs →
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FAQCompact;
