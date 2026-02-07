import React from 'react';
import { ShieldAlert, UserCheck, FileText, Scale } from 'lucide-react';

const AITransparency = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-900 text-sm font-semibold mb-4">
            <ShieldAlert className="w-4 h-4" />
            Compliance Technology & Accountability
          </div>
          <h2 className="text-3xl font-bold text-slate-900">How Guardian Works With Your Team</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Kinly CarePro is designed with human oversight at every step. Guardian provides compliance suggestions—your qualified staff make the final decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Human-in-Command Architecture</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Guardian <strong>never</strong> makes autonomous clinical decisions or changes documentation without staff approval. Every suggestion appears as a tracked change that qualified professionals must explicitly accept or reject.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0"></span>
                <span>Staff remain the documented authors of all clinical notes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0"></span>
                <span>Compliance suggestions can be modified, rejected, or accepted individually</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0"></span>
                <span>Qualified professionals retain full override authority</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Complete Audit Trail</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Every interaction is logged with immutable audit trails showing what Guardian suggested versus what your staff approved. Perfect transparency for NDIS Commission audits.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                <span>Original staff notes preserved with timestamps</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                <span>System suggestions logged (accepted/rejected/modified)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                <span>Staff member attribution for final approved content</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-md border border-slate-200">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
              <Scale className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Professional Responsibility & Compliance</h3>
              <div className="space-y-3 text-sm text-slate-700">
                <p>
                  <strong className="text-slate-900">Guardian is an administrative compliance assistant,</strong> not a clinical decision-making system. It does not diagnose, treat, or provide direct clinical care.
                </p>
                <p>
                  All clinical decisions remain the responsibility of appropriately qualified healthcare professionals in accordance with AHPRA registration requirements, NDIS Practice Standards, and relevant state/territory legislation.
                </p>
                <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-amber-900">
                    <strong>Important:</strong> Kinly CarePro supports your compliance workflows—it does not replace professional judgment, clinical oversight, or your duty of care obligations to NDIS participants.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500">
            Questions about our compliance technology? <a href="/contact" className="text-primary font-semibold hover:underline">Contact our compliance team</a> for detailed documentation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AITransparency;
