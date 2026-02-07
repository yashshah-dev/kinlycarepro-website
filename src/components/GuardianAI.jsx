import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Bot, Target, AlertTriangle, FileSearch, CheckCircle2 } from 'lucide-react';

const aiHighlights = [
  {
    title: 'Smart Documentation Help',
    description: 'Spots missing goal references or vague language as staff type—suggesting improvements they can accept, edit, or ignore.',
    icon: <Bot className="w-5 h-5" />,
    metric: 'Real-time review'
  },
  {
    title: 'Goal Alignment Tips',
    description: 'Quietly flags entries that might need goal references—staff stay in control of final documentation.',
    icon: <Target className="w-5 h-5" />,
    metric: 'Goal alignment checks'
  },
  {
    title: 'Automatic Incident Alerts',
    description: 'Detects keywords like "bruise" or "refused medication" and drafts incident templates for clinical teams to complete.',
    icon: <AlertTriangle className="w-5 h-5" />,
    metric: 'Instant template drafts'
  },
  {
    title: 'Pre-Billing Checks',
    description: 'Catches overlapping shifts, price errors, and duplicate claims before invoices go to NDIA.',
    icon: <FileSearch className="w-5 h-5" />,
    metric: '0 rejected invoices'
  }
];

const auditSteps = [
  { step: 'Review', detail: 'Automated review of notes + rosters for compliance gaps', duration: '0.3s' },
  { step: 'Suggest', detail: 'System suggests improvements for goals, funding + price guide alignment', duration: '1.2s' },
  { step: 'Staff Approve', detail: 'Qualified staff review and accept/reject suggestions before finalizing', duration: '0.6s' }
];

const noteScenarios = [
  {
    id: 'community-access',
    label: 'Community access shift',
    badNote:
      'Took James to the park. He had a small fall but said he was fine. We left early because it rained.',
    rewrite:
      'Escorted James (Goal 2: build social confidence) to Victoria Park, arriving 09:05. At 10:12 he slipped on wet grass and reported soreness in left knee. Applied first-aid checklist, notified on-call supervisor, and logged incident draft #INC-4472. Session ended 15 min early due to weather and rescheduled in ShiftCare for Friday.',
    flags: ['No goal alignment reference', 'Incident lacked follow-up action', 'Timing variance not documented'],
    improvements: ['Links activity to NDIS goal', 'Records incident workflow + draft ID', 'Documents roster variance and next steps'],
    initialScore: 64,
    finalScore: 97
  },
  {
    id: 'medication-support',
    label: 'Medication refusal at SIL home',
    badNote:
      'Evening shift was quiet. Maya refused tablets, staff reminded her twice. Logged in book.',
    rewrite:
      'Completed evening routine with Maya (Goal 1: maintain daily living skills). At 20:40 she declined Lamotrigine 100mg citing nausea. Guardian script triggered Restrictive Practice flag, so I documented refusal, informed RN Priya, and scheduled GP review in CarePlan. Added follow-up reminder for tomorrow 09:00 visit.',
    flags: ['No medication detail', 'Missing escalation contact', 'Lacks follow-up task'],
    improvements: ['Captures medication name + dosage', 'Logs escalation to clinical lead', 'Creates dated follow-up inside plan'],
    initialScore: 58,
    finalScore: 95
  }
];

const GuardianAI = () => {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [noteText, setNoteText] = useState(noteScenarios[0].badNote);
  const [analysis, setAnalysis] = useState({ status: 'idle', rewritten: '', score: noteScenarios[0].initialScore });

  const currentScenario = noteScenarios[scenarioIndex];

  useEffect(() => {
    setNoteText(currentScenario.badNote);
    setAnalysis({ status: 'idle', rewritten: '', score: currentScenario.initialScore });
  }, [currentScenario]);

  const runGuardianAI = () => {
    setAnalysis({ status: 'analyzing', rewritten: '', score: currentScenario.initialScore });
    setTimeout(() => {
      setAnalysis({ status: 'complete', rewritten: currentScenario.rewrite, score: currentScenario.finalScore });
    }, 900);
  };

  const riskLabel = analysis.score >= 95 ? 'Audit ready' : analysis.score >= 80 ? 'Low risk' : 'Needs attention';

  return (
    <section id="guardian-ai" className="relative py-28 bg-gradient-to-br from-[#061821] via-[#0f2b38] to-[#0F4C5C] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08), transparent 45%)' }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-sm uppercase tracking-[0.2em] text-accent">
              <ShieldCheck className="w-4 h-4" /> Built-in Safety Features
            </div>
            <h2 className="mt-6 text-4xl md:text-5xl font-semibold leading-tight">
              Guardian™ works in the background.
            </h2>
            <p className="mt-6 text-lg text-blue-100 leading-relaxed">
              While your team focuses on rostering, billing, and care delivery, Guardian quietly reviews every shift, note, and invoice—flagging potential issues for staff to review. It's like having an experienced supervisor checking work 24/7, without the micromanagement.
            </p>
            <div className="mt-4 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
              <p className="text-sm text-yellow-100 leading-relaxed">
                <strong className="text-yellow-50">Human-in-Command:</strong> Guardian provides compliance suggestions only. All clinical decisions and documentation remain under the control and responsibility of qualified professionals. Staff must review and approve each recommendation.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {aiHighlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4 text-accent">
                    <div className="p-2 bg-white/10 rounded-xl">{item.icon}</div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-blue-100">{item.metric}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-blue-100 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white text-slate-900 rounded-3xl shadow-2xl border border-white/10 p-8 space-y-8"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Interactive demo</p>
                  <p className="text-3xl font-bold text-slate-900">Guardian compliance review</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-semibold text-slate-400 uppercase">Scenario</p>
                  <select
                    className="mt-1 text-sm font-semibold text-slate-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200"
                    value={currentScenario.id}
                    onChange={(event) => {
                      const nextIndex = noteScenarios.findIndex((scenario) => scenario.id === event.target.value);
                      setScenarioIndex(nextIndex);
                    }}
                  >
                    {noteScenarios.map((scenario) => (
                      <option key={scenario.id} value={scenario.id}>
                        {scenario.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wide text-slate-500 font-semibold">Original note</label>
                  <textarea
                    className="w-full h-40 rounded-2xl border border-slate-200 p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    value={noteText}
                    onChange={(event) => setNoteText(event.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wide text-slate-500 font-semibold">Compliance suggestions</label>
                  <div className="h-40 rounded-2xl border border-slate-200 p-4 text-sm bg-slate-50 overflow-y-auto">
                    {analysis.status === 'complete' ? (
                      <div>
                        <p className="mb-2">{analysis.rewritten}</p>
                        <div className="mt-3 p-2 bg-amber-50 border border-amber-200 rounded-lg">
                          <p className="text-xs text-amber-800"><strong>Staff action required:</strong> Review this suggestion and click Accept/Reject below. You remain the author.</p>
                        </div>
                      </div>
                    ) : analysis.status === 'analyzing' ? (
                      <p className="text-slate-400">Reviewing note and preparing compliance suggestions for your approval...</p>
                    ) : (
                      <p className="text-slate-400">Run compliance check to see suggested improvements (requires staff approval).</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mt-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center font-semibold text-lg">
                    {analysis.score}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500 font-semibold">Compliance score</p>
                    <p className="text-base font-bold text-slate-900">{riskLabel}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    className="px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-[#0b3b47] disabled:opacity-50"
                    onClick={runGuardianAI}
                    disabled={analysis.status === 'analyzing'}
                  >
                    {analysis.status === 'analyzing' ? 'Analyzing...' : 'Run Compliance Check'}
                  </button>
                  {analysis.status === 'complete' && (
                    <div className="flex gap-2">
                      <button className="px-4 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700">
                        Accept
                      </button>
                      <button className="px-4 py-3 rounded-xl bg-slate-300 text-slate-700 font-semibold hover:bg-slate-400">
                        Reject
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-accent to-primary transition-all duration-500"
                    style={{ width: `${analysis.score}%` }}
                  ></div>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2 mt-4">
                <div className="p-4 rounded-2xl border border-red-100 bg-red-50">
                  <p className="text-xs uppercase font-semibold text-red-600 tracking-wide mb-2">Flags detected</p>
                  <ul className="space-y-2 text-sm text-red-700">
                    {currentScenario.flags.map((flag) => (
                      <li key={flag} className="flex items-start gap-2">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500"></span>
                        <span>{flag}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 rounded-2xl border border-emerald-100 bg-emerald-50">
                  <p className="text-xs uppercase font-semibold text-emerald-700 tracking-wide mb-2">Compliance improvements</p>
                  <ul className="space-y-2 text-sm text-emerald-700">
                    {currentScenario.improvements.map((improvement) => (
                      <li key={improvement} className="flex items-start gap-2">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        <span>{improvement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">One-click audit</p>
                  <p className="text-3xl font-bold text-slate-900">NDIS ready export</p>
                </div>
                <div className="px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 text-sm font-semibold">
                  Audit-ready exports
                </div>
              </div>
              <div className="space-y-4">
                {auditSteps.map((step, i) => (
                  <div key={step.step} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-lg font-semibold">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">{step.step}</p>
                      <p className="text-sm text-slate-500">{step.detail}</p>
                    </div>
                    <span className="text-xs font-semibold text-slate-500">{step.duration}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-3 text-emerald-600 font-semibold">
                  <CheckCircle2 className="w-5 h-5" />
                  Guardian AI zipped 47 supporting docs for Participant #1082
                </div>
                <p className="mt-3 text-sm text-slate-500">
                  Includes progress notes, shift logs, roster diffs, incident drafts, and billing evidence packaged for auditors.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GuardianAI;
