import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import GuardianAI from '../components/GuardianAI';
import AITransparency from '../components/AITransparency';
import SecurityStrip from '../components/SecurityStrip';
import {
  ShieldCheck,
  Bot,
  Target,
  AlertTriangle,
  Sparkles,
  CheckCircle2,
  UserCheck,
  FileText,
  Scale,
  Clock,
  Lock,
  ArrowRight,
  Zap,
  BarChart3,
  HelpCircle,
  ChevronDown,
  Shield,
  FileSearch,
  Check,
  Layers,
  HeartHandshake
} from 'lucide-react';

const scoringDimensions = [
  {
    title: '1. Person-Centered Phrasing',
    weight: '25% Weight',
    desc: 'Evaluates note tone, dignity of risk, and participant agency versus passive custodial wording. Ensures language meets NDIS Quality and Safeguards Commission standards.',
    exampleBad: '"Fed client his dinner. He didn\'t want vegetables so took it away."',
    exampleGood: '"Supported Liam with mealtime choices (steamed greens and grilled chicken). Liam expressed preference for chicken first and declined greens; respected Liam’s meal choices while encouraging hydration."',
    badge: 'Dignity & Voice'
  },
  {
    title: '2. NDIS Plan Goal Linkage',
    weight: '25% Weight',
    desc: 'Matches activities against funded NDIS plan goals (Core, Capacity Building, Capital) and captures measurable progress milestones for plan review reports.',
    exampleBad: '"Took him to the shop and bought snacks."',
    exampleGood: '"Accompanied Marcus to local grocer to practice independent budgeting and EFTPOS payment skills (Goal 2: Build Daily Living & Financial Autonomy). Marcus successfully selected items and completed transaction."',
    badge: 'Goal Tracking'
  },
  {
    title: '3. Active Support & Participant Engagement',
    weight: '20% Weight',
    desc: 'Validates that support workers document active participation rather than doing tasks for the participant, reinforcing capacity-building principles.',
    exampleBad: '"Cleaned the kitchen while participant was watching TV."',
    exampleGood: '"Prompted and guided Sarah through step-by-step dishwashing routine (Goal 1: Independent Domestic Living). Sarah washed plates with verbal guidance and stated satisfaction upon completing the task."',
    badge: 'Active Support'
  },
  {
    title: '4. Incident & Restrictive Practice Early Detection',
    weight: '15% Weight',
    desc: 'Scans for safety markers (medication refusals, unexplained bruising, falls, escalations, environmental restrictions) and triggers draft incident logs automatically.',
    exampleBad: '"Had a scuffle at lunch. Locked back door for 10 mins."',
    exampleGood: '"At 12:40, de-escalated sensory overload in dining area. Implemented calming sensory routine. [FLAG: Unauthorized Environmental Restriction detected — triggered Review & logged with Clinical Coordinator]."',
    badge: 'Safety Sentinel'
  },
  {
    title: '5. Clinical & Medication Accuracy',
    weight: '15% Weight',
    desc: 'Enforces timestamping, medication names, dosage verification, and clinical escalation records whenever health support or PRN meds are administered.',
    exampleBad: '"Gave evening pills as normal."',
    exampleGood: '"Administered prescribed evening medication (Metformin 500mg) at 19:30 with meal as per MAR Chart. No adverse reactions observed; vitals recorded stable."',
    badge: 'Medication QA'
  }
];

const lifecycleSteps = [
  {
    num: '01',
    title: 'Frontline Capture',
    subtitle: 'Mobile GPS App & Offline Sync',
    desc: 'Support worker types or dictates raw notes on their iOS or Android mobile app during or immediately after the shift.',
    detail: 'Works 100% offline with auto-sync upon reconnection.'
  },
  {
    num: '02',
    title: 'Real-Time Guardian QA',
    subtitle: 'Sub-Second Analysis & Scoring',
    desc: 'Guardian AI scans the draft note in under 800ms against participant NDIS goals, active support phrasing, and safety triggers.',
    detail: 'Generates instant 0–100 quality score and flags compliance gaps.'
  },
  {
    num: '03',
    title: 'Interactive 1-Click Upgrade',
    subtitle: 'Clinical Phrasing Assistance',
    desc: 'Staff can accept the suggested clinical rewrite, edit phrases directly, or keep their original wording with one tap.',
    detail: 'Upgrades syntax, embeds goal references, and standardizes vocabulary.'
  },
  {
    num: '04',
    title: 'Human-in-Command Seal',
    subtitle: 'Immutable 7-Year Audit Trail',
    desc: 'Support worker or team leader finalizes the note. Both original raw note and approved version are preserved in the immutable audit log.',
    detail: 'Never alters clinical records autonomously.'
  }
];

const comparisonData = [
  {
    feature: 'Real-Time Progress Note Quality Scoring (0–100)',
    guardian: 'Included (0–100 score + instant gap breakdown)',
    legacy: 'None (Manual supervisor spot-checks)'
  },
  {
    feature: 'NDIS Goal Alignment & Auto-Tagging',
    guardian: 'Automatic match to Core / Capacity Building goals',
    legacy: 'Manual dropdown selection or forgotten'
  },
  {
    feature: 'Interactive 1-Click Clinical Note Rewrite',
    guardian: 'Restructures rough notes into audit-proof records',
    legacy: 'Not available'
  },
  {
    feature: 'Pre-Billing Audit Lockout (Zero-Note Shift Blocker)',
    guardian: 'Prevents claiming shifts with missing or low-QA notes',
    legacy: 'Manual post-billing reconciliations'
  },
  {
    feature: 'Early Incident & Restrictive Practice Detection',
    guardian: 'Automated keyword & protocol severity flagging',
    legacy: 'Delayed paper incident forms'
  },
  {
    feature: 'Human-in-Command Architecture & 7-Yr Audit Diffs',
    guardian: 'Full attribution & diff logs (Original vs Approved)',
    legacy: 'Basic edit history without suggestion tracking'
  },
  {
    feature: 'Australian Data Sovereignty (Sydney AWS)',
    guardian: '100% Sydney AWS — zero model training on health data',
    legacy: 'Varies / often offshore cloud providers'
  }
];

const faqs = [
  {
    q: 'Does Guardian AI make autonomous clinical decisions or replace qualified staff?',
    a: 'Absolutely not. Guardian™ AI operates under a strict "Human-in-Command" architecture. It functions as an administrative compliance assistant that reviews syntax, flags missing information (such as medication dosages or incident escalation steps), and suggests professional wording. Qualified support workers and coordinators retain 100% editorial authority and must approve every note before submission.'
  },
  {
    q: 'Is participant health data used to train public AI models?',
    a: 'No. Kinly CarePro strictly adheres to the Australian Privacy Principles (APPs) and the NDIS Quality and Safeguards Commission guidelines. All Guardian AI data processing occurs within enterprise-isolated, Sydney-hosted AWS infrastructure (ap-southeast-2). Participant records and clinical notes are never stored in public LLM pools or used to train third-party machine learning models.'
  },
  {
    q: 'How does Guardian AI prevent NDIS billing audit clawbacks?',
    a: 'During NDIS Commission audits, claims are frequently clawed back when progress notes lack clear evidence of active support, goal linkage, or exact service delivery times. Guardian AI scores notes in real time, prompting staff to include missing details before the shift can be closed. Additionally, our built-in invoice audit engine prevents shifts with missing notes from being claimed through PRODA/PACE.'
  },
  {
    q: 'Can support workers use Guardian AI on their mobile phones in the field?',
    a: 'Yes! Guardian AI is embedded directly into the Kinly CarePro mobile app for iOS and Android. Support workers receive live quality feedback and 1-click rewrite suggestions as they type notes on shift, even when working in low-connectivity environments (with offline auto-sync).'
  },
  {
    q: 'Is Guardian AI an expensive add-on or included in the $25/participant plan?',
    a: 'Guardian AI is 100% included for all Kinly CarePro providers at no extra charge. We believe audit compliance and participant safety should never be gated behind expensive enterprise tiers or per-seat add-on fees.'
  }
];

const GuardianAIPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <>
      <SEO
        title="Guardian™ AI Note QA & NDIS Compliance Checker | Kinly CarePro"
        description="Transform frontline shift notes into audit-proof, goal-aligned NDIS records with Guardian™ AI. Real-time 0–100 compliance scoring, incident detection, and human-in-command governance."
        keywords="Guardian AI, NDIS progress notes AI, NDIS AI note assistant, NDIS note quality score, NDIS practice standards AI, audit proof NDIS notes, NDIS clinical documentation, human in command AI disability care"
        url="https://www.kinlycarepro.com.au/guardian-ai"
        faqs={faqs}
        breadcrumbs={[{ name: "Guardian™ AI", path: "/guardian-ai" }]}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#061821] via-[#0b222d] to-[#0f2b38] text-white relative overflow-hidden">
        {/* Background Glow */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 15%, rgba(16, 185, 129, 0.25), transparent 60%)'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-xs uppercase tracking-[0.25em] text-emerald-400 font-bold mb-6 backdrop-blur-md"
            >
              <ShieldCheck className="w-4 h-4" /> Flagship Clinical Compliance Engine
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white"
            >
              Turn Frontline Notes Into <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Audit-Proof NDIS Records
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            >
              Guardian™ AI evaluates shift notes in real time, scores compliance (0–100), aligns phrasing with participant NDIS plan goals, and catches audit risks before invoices are generated.
            </motion.p>

            {/* Quick Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto"
            >
              {[
                { label: 'Analysis Latency', val: '< 800ms' },
                { label: 'Human-in-Command', val: '100% Oversight' },
                { label: 'Audit Retention', val: '7-Year Diffs' },
                { label: 'Data Sovereignty', val: 'Sydney AWS (ap-se-2)' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-2xl p-3.5 backdrop-blur-sm text-center"
                >
                  <p className="text-lg md:text-xl font-extrabold text-emerald-400">{item.val}</p>
                  <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold mt-0.5">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            >
              <a
                href="#interactive-demo"
                className="px-8 py-4 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-all text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25"
              >
                <Sparkles className="w-4 h-4" /> Try Live Note Rewrite Simulator
              </a>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold transition-all text-sm border border-white/15 flex items-center justify-center gap-2"
              >
                Book a Live Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Simulator Section */}
      <div id="interactive-demo">
        <GuardianAI />
      </div>

      {/* 4-Step Quality Lifecycle */}
      <section className="py-20 bg-slate-900 text-white border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-emerald-400 font-bold">
              The 4-Step Pipeline
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 tracking-tight text-white">
              How Guardian AI Secures Every Shift Record
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              From raw mobile note entry to verified billing claim, Guardian AI guarantees complete compliance without slowing down frontline carers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lifecycleSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md flex flex-col justify-between hover:border-emerald-500/40 transition-colors"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-3xl font-extrabold text-emerald-400/80 font-mono">
                      {step.num}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xs font-bold">
                      ✓
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-xs font-semibold text-emerald-400 mb-3">{step.subtitle}</p>
                  <p className="text-xs text-slate-300 leading-relaxed">{step.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-slate-400 italic">
                  {step.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Pillar Scoring Framework */}
      <section className="py-24 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-bold">
              Multi-Dimensional QA
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
              The 0–100 Compliance Scoring Engine
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Guardian AI does not just check spelling. It grades progress notes against five core regulatory and clinical dimensions aligned with the NDIS Practice Standards.
            </p>
          </div>

          <div className="space-y-6">
            {scoringDimensions.map((dim, i) => (
              <div
                key={i}
                className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary font-bold text-xs rounded-full">
                      {dim.badge}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">{dim.title}</h3>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200 w-fit">
                    {dim.weight}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed">{dim.desc}</p>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  {/* Bad example */}
                  <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-rose-700 uppercase tracking-wider mb-2">
                      <AlertTriangle className="w-3.5 h-3.5" /> Before Guardian (Non-Compliant)
                    </div>
                    <p className="text-xs text-slate-700 italic leading-relaxed">"{dim.exampleBad}"</p>
                  </div>

                  {/* Good example */}
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
                      <CheckCircle2 className="w-3.5 h-3.5" /> After Guardian (Audit-Proof)
                    </div>
                    <p className="text-xs text-emerald-950 font-medium leading-relaxed">
                      "{dim.exampleGood}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Billing Claim Guard Showcase */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-primary-950 to-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/20 border border-accent/30 text-xs font-bold uppercase tracking-widest text-accent">
                <Lock className="w-3.5 h-3.5" /> Pre-Billing Claim Guard
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Never Invoice a Shift Without <br />
                <span className="text-accent">Audit-Proof Proof of Delivery</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                In most systems, shifts get invoiced automatically even if the support worker submitted a 3-word note or no note at all. During an NDIS Commission audit, these undocumented shifts trigger costly payment clawbacks.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  'Automatic invoice lockout for shifts with missing or low-QA notes (< 60 score)',
                  'Real-time supervisor alerts for pending shift notes over 24 hours old',
                  'Deterministic linkage between timesheet clock times, GPS geo-pins, and verified notes',
                  'Instant bulk PRODA/PACE claim file generation only for 100% verified shifts'
                ].map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-slate-950/80 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
                      Invoice Audit Gatekeeper
                    </span>
                  </div>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono font-bold">
                    Active Protection
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 bg-rose-500/10 border border-rose-500/30 rounded-2xl flex items-center justify-between">
                    <div className="space-y-0.5">
                      <p className="text-xs font-bold text-rose-300">Shift #SH-8842 (Liam D.)</p>
                      <p className="text-[11px] text-slate-300">Score 42/100 • Missing Goal Reference</p>
                    </div>
                    <span className="text-[11px] px-3 py-1 bg-rose-500/20 text-rose-300 font-bold rounded-lg uppercase">
                      Claim Blocked
                    </span>
                  </div>

                  <div className="p-3.5 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex items-center justify-between">
                    <div className="space-y-0.5">
                      <p className="text-xs font-bold text-amber-300">Shift #SH-8843 (Maya S.)</p>
                      <p className="text-[11px] text-slate-300">Note Pending Supervisor Approval</p>
                    </div>
                    <span className="text-[11px] px-3 py-1 bg-amber-500/20 text-amber-300 font-bold rounded-lg uppercase">
                      Review Needed
                    </span>
                  </div>

                  <div className="p-3.5 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-between">
                    <div className="space-y-0.5">
                      <p className="text-xs font-bold text-emerald-300">Shift #SH-8844 (Marcus W.)</p>
                      <p className="text-[11px] text-slate-300">Score 98/100 • Goal 2 Linked • GPS Verified</p>
                    </div>
                    <span className="text-[11px] px-3 py-1 bg-emerald-500/20 text-emerald-300 font-bold rounded-lg uppercase">
                      PRODA Ready
                    </span>
                  </div>
                </div>

                <div className="pt-2 text-center text-xs text-slate-400 italic">
                  Guarantees 100% audit-proof compliance before billing files are exported.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Feature Comparison Table */}
      <section className="py-24 bg-slate-50 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-bold">
              Benchmark Comparison
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Guardian™ AI vs. Traditional NDIS Note Systems
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              See why forward-thinking Australian NDIS providers choose Kinly CarePro’s intelligent compliance assistant.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="py-5 px-6 text-xs uppercase tracking-wider font-bold">Capability</th>
                    <th className="py-5 px-6 text-xs uppercase tracking-wider font-bold text-emerald-400 bg-slate-800/80">
                      Kinly Guardian™ AI
                    </th>
                    <th className="py-5 px-6 text-xs uppercase tracking-wider font-bold text-slate-300">
                      Legacy NDIS Software
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-4 px-6 font-bold text-slate-900">{row.feature}</td>
                      <td className="py-4 px-6 font-semibold text-emerald-700 bg-emerald-50/40">
                        {row.guardian}
                      </td>
                      <td className="py-4 px-6 text-slate-500">{row.legacy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Human-in-Command Governance & Transparency */}
      <AITransparency />

      {/* Enterprise Security Strip */}
      <SecurityStrip />

      {/* FAQ Section */}
      <section className="py-24 bg-white text-slate-900 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-bold">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Everything You Need to Know About Guardian AI
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-slate-50/50"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-5 px-6 text-left flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform ${
                      openFaq === idx ? 'rotate-180 text-primary' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-4"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary-950 via-primary-900 to-primary text-white text-center px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-xs uppercase tracking-widest border border-emerald-500/30">
            Included for All Providers
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Ready to make your NDIS notes audit-proof?
          </h2>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Protect your organization from compliance audits, support your frontline workforce, and eliminate billing headaches with Guardian™ AI.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl bg-accent text-slate-950 font-bold hover:bg-accent-600 transition-all text-sm shadow-xl"
            >
              Book a 15-Minute Demo
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold transition-all text-sm border border-white/20"
            >
              View Transparent Pricing ($25/mo)
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default GuardianAIPage;
