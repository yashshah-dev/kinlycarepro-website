import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Bot, Target, AlertTriangle, Sparkles, CheckCircle2, UserCheck, RefreshCw } from 'lucide-react';

const aiHighlights = [
  {
    title: 'Multi-Dimensional Note Scoring (0–100)',
    description: 'Evaluates person-centered language, active support documentation, participant engagement, and measurable goal outcomes in real time.',
    icon: <Bot className="w-5 h-5" />,
    metric: 'Real-time QA'
  },
  {
    title: 'NDIS Plan Goal Alignment',
    description: 'Automatically matches recorded activities against the participant’s funded NDIS goals (Core, Capacity Building, Capital).',
    icon: <Target className="w-5 h-5" />,
    metric: 'Goal tracking'
  },
  {
    title: 'Automated Incident Flagging',
    description: 'Detects safety indicators such as medication refusals, falls, or restrictive practices and drafts NDIS Commission incident templates.',
    icon: <AlertTriangle className="w-5 h-5" />,
    metric: 'Instant safety alerts'
  },
  {
    title: 'Interactive Rewrite Assistant',
    description: 'Restructures rough frontline worker notes into professional, audit-compliant clinical records ready for supervisor approval.',
    icon: <Sparkles className="w-5 h-5" />,
    metric: '1-Click clinical polish'
  }
];

const auditSteps = [
  { step: '1. Ingest Note', detail: 'Frontline support worker enters note via mobile app (online or offline)', duration: '0.1s' },
  { step: '2. Guardian QA', detail: 'Evaluates note for goal references, active support phrasing, and safety triggers', duration: '0.8s' },
  { step: '3. Upgrade & Score', detail: 'Calculates 0–100 compliance rating and drafts clinical rewrite', duration: '0.4s' },
  { step: '4. Staff Approve', detail: 'Support worker or coordinator reviews, edits, and finalizes with immutable audit trail', duration: 'Human-in-Command' }
];

const noteScenarios = [
  {
    id: 'community-access',
    label: 'Scenario 1: Community Access Shift',
    badNote:
      'Took James to the park. He had a small fall but said he was fine. We left early because it rained.',
    rewrite:
      'Escorted James (Goal 2: Build Social Independence & Community Access) to Victoria Park at 09:05. At 10:12 James experienced a minor slip on damp grass; conducted initial first-aid physical check (no visible swelling or bruising). Notified on-call supervisor and initiated incident log #INC-4472. Due to heavy rainfall, concluded session 15 minutes early as agreed with James and rescheduled replacement community access shift on the Kinly CarePro roster for Friday.',
    flags: ['Missing explicit NDIS goal reference', 'Fall incident lacked structured supervisor notification', 'Early departure variance not documented with participant agreement'],
    improvements: ['Explicitly links session to NDIS Goal 2', 'Logs supervisor notification and incident tracking #INC-4472', 'Documents weather variance and roster reschedule'],
    initialScore: 48,
    finalScore: 98
  },
  {
    id: 'medication-support',
    label: 'Scenario 2: SIL Home Medication Refusal',
    badNote:
      'Evening shift was quiet. Maya refused tablets, staff reminded her twice. Logged in book.',
    rewrite:
      'Supported Maya with evening routine (Goal 1: Daily Living Skills & Medication Management). At 20:40 Maya declined prescribed evening medication (Lamotrigine 100mg) stating mild nausea. Re-offered with water after 15 minutes as per protocol. When refusal persisted, documented refusal on Medication Chart, notified Registered Nurse Priya at 20:58, and scheduled clinical review task in CarePlan for tomorrow morning.',
    flags: ['Medication name, dosage, and time missing', 'Protocol re-offering steps unrecorded', 'Clinical escalation contact not timestamped'],
    improvements: ['Captures exact medication name & 100mg dosage', 'Logs protocol re-offering and RN Priya escalation at 20:58', 'Automates follow-up clinical review task'],
    initialScore: 52,
    finalScore: 96
  }
];

const GuardianAI = () => {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [noteText, setNoteText] = useState(noteScenarios[0].badNote);
  const [analysis, setAnalysis] = useState({ status: 'idle', rewritten: '', score: noteScenarios[0].initialScore });

  const currentScenario = noteScenarios[scenarioIndex];

  const handleScenarioChange = (idx) => {
    setScenarioIndex(idx);
    setNoteText(noteScenarios[idx].badNote);
    setAnalysis({ status: 'idle', rewritten: '', score: noteScenarios[idx].initialScore });
  };

  const runGuardianAI = () => {
    setAnalysis({ status: 'analyzing', rewritten: '', score: currentScenario.initialScore });
    setTimeout(() => {
      setAnalysis({ status: 'complete', rewritten: currentScenario.rewrite, score: currentScenario.finalScore });
    }, 800);
  };

  return (
    <section id="guardian-ai" className="relative py-24 bg-gradient-to-br from-[#061821] via-[#0f2b38] to-[#0F4C5C] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08), transparent 45%)' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs uppercase tracking-[0.2em] text-emerald-400 font-bold mb-4">
            <ShieldCheck className="w-4 h-4" /> Guardian™ AI Note Quality Assistant
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Live AI Progress Note Compliance QA
          </h2>
          <p className="mt-4 text-base md:text-lg text-blue-100">
            See how Guardian AI evaluates frontline shift notes in real time, identifies audit gaps, and assists staff in generating audit-proof clinical documentation.
          </p>
        </div>

        {/* Interactive Simulator Card */}
        <div className="bg-slate-900/90 rounded-3xl border border-white/15 shadow-2xl p-6 md:p-10 backdrop-blur-xl mb-16">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">Interactive QA Simulator</span>
              <h3 className="text-xl font-bold text-white mt-1">Select a Clinical Shift Note Scenario</h3>
            </div>

            <div className="flex gap-2">
              {noteScenarios.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => handleScenarioChange(idx)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    scenarioIndex === idx
                      ? 'bg-emerald-500 text-slate-950 shadow-md'
                      : 'bg-white/10 text-slate-300 hover:bg-white/15'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 my-8 items-start">
            {/* Input Note Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                  Raw Frontline Support Worker Note
                </label>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-bold border border-rose-500/30">
                  Initial Score: {currentScenario.initialScore} / 100
                </span>
              </div>

              <textarea
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                className="w-full h-36 bg-white/5 border border-white/15 rounded-2xl p-4 text-xs md:text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 leading-relaxed font-sans"
              />

              <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-300 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" /> Compliance Gaps Detected:
                </span>
                <ul className="space-y-1 text-xs text-rose-200">
                  {currentScenario.flags.map((flag, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-rose-400">•</span>
                      <span>{flag}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={runGuardianAI}
                disabled={analysis.status === 'analyzing'}
                className="w-full py-3.5 px-6 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-all text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                {analysis.status === 'analyzing' ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" /> Guardian AI Evaluating Note...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" /> Run Guardian AI Rewrite & Upgrade
                  </>
                )}
              </button>
            </div>

            {/* Output Upgraded Note Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-xs uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Guardian Upgraded Clinical Record
                </label>
                {analysis.status === 'complete' && (
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-extrabold border border-emerald-500/40">
                    Upgraded Score: {analysis.score} / 100
                  </span>
                )}
              </div>

              <div className="w-full min-h-[144px] bg-emerald-950/30 border border-emerald-500/30 rounded-2xl p-4 text-xs md:text-sm text-emerald-100 leading-relaxed font-sans">
                {analysis.status === 'complete' ? (
                  <p>{analysis.rewritten}</p>
                ) : analysis.status === 'analyzing' ? (
                  <div className="flex items-center justify-center h-28 text-emerald-300 text-xs gap-2">
                    <RefreshCw className="w-4 h-4 animate-spin" /> Restructuring note against NDIS Practice Standards...
                  </div>
                ) : (
                  <p className="text-slate-400 italic text-xs">
                    Click "Run Guardian AI Rewrite" to see the upgraded, audit-proof clinical phrasing.
                  </p>
                )}
              </div>

              {analysis.status === 'complete' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-2"
                >
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Clinical Quality Enhancements:
                  </span>
                  <ul className="space-y-1 text-xs text-emerald-200">
                    {currentScenario.improvements.map((imp, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-emerald-400">✓</span>
                        <span>{imp}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center gap-2.5 text-xs text-slate-300">
                <UserCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>
                  <strong>Human-in-Command:</strong> Staff review, edit, or approve all generated suggestions before final save.
                </span>
              </div>
            </div>
          </div>

          {/* Workflow Steps */}
          <div className="pt-8 border-t border-white/10 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {auditSteps.map((step, i) => (
              <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <p className="text-xs font-bold text-emerald-400">{step.step}</p>
                <p className="text-xs text-slate-300 mt-1 leading-snug">{step.detail}</p>
                <p className="text-[10px] text-slate-400 mt-2 font-mono">{step.duration}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Feature Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiHighlights.map((feat, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                  {feat.icon}
                </div>
                <h4 className="font-bold text-white text-base leading-snug">{feat.title}</h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">{feat.description}</p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 text-[11px] font-mono text-emerald-400 font-bold">
                {feat.metric}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuardianAI;
