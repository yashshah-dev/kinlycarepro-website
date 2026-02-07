import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Does the compliance system make autonomous clinical decisions?',
    answer:
      'No. Guardian is a compliance suggestion tool, not a clinical decision-making system. It reviews documentation and provides improvement suggestions that qualified staff must explicitly approve. All clinical decisions remain under the control of appropriately credentialed healthcare professionals per NDIS Practice Standards and AHPRA requirements.'
  },
  {
    question: 'Who is responsible for the final documentation?',
    answer:
      'Your staff remain the documented authors and are legally responsible for all clinical notes. Guardian shows suggestions as tracked changes—staff can accept, reject, or modify each one. The system maintains a complete audit trail showing original notes, system suggestions, and staff-approved final content.'
  },
  {
    question: 'Can staff check in from home?',
    answer:
      'No. Kinly CarePro geofences every participant location, so a shift cannot start unless the worker is physically inside the approved radius. System logs GPS coordinates, photos, and device IDs for auditors.'
  },
  {
    question: 'How does Kinly CarePro help with NDIS audits?',
    answer:
      'Guardian maintains a One-Click Audit export with complete transparency. Select a participant or program and Kinly CarePro bundles progress notes, shift logs, roster diffs, and incident activity—including immutable audit trails showing system suggestions versus staff-approved content.'
  },
  {
    question: 'What happens if the internet goes down?',
    answer:
      'The mobile app works fully offline. Staff can check in/out, capture notes, and trigger incident template requests without reception. Data syncs automatically as soon as connectivity returns, with staff approval workflows resuming online.'
  },
  {
    question: 'Do we have to update pricing guides manually?',
    answer:
      'No. Kinly CarePro automatically ingests the latest NDIS Pricing Arrangements (including TTP, weekend, and public holiday rates) so every roster and invoice uses the correct rates without spreadsheets.'
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold tracking-wide uppercase text-sm">FAQ</p>
          <h2 className="text-4xl font-bold text-slate-900 mt-3">Questions operators ask before audits.</h2>
          <p className="text-slate-600 mt-4">
            Pull these answers straight into your board packs and auditor meetings. Kinly CarePro has receipts for every scenario.
          </p>
        </div>
        <div className="divide-y divide-slate-200 rounded-3xl border border-slate-200 overflow-hidden">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="bg-white">
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="text-lg font-semibold text-slate-900">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
