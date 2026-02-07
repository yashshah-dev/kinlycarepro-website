import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, ClipboardCheck, FileSearch, Shield, Activity, Timer, ArrowRight } from 'lucide-react';

const compliancePillars = [
  {
    title: 'Incident Management',
    description: 'Guardian suggests incident report templates when red-flag language is detected—clinical teams review, edit, and approve before submission.',
    icon: <AlertTriangle className="w-6 h-6" />,
    bullets: [
      'System suggests templates with location, staff, and participant goal data',
      'Staff add photo evidence + voice memos and verify all details',
      'Supervisor review workflows with mandatory approval before finalization'
    ]
  },
  {
    title: 'Restrictive Practice Reporting',
    description: 'Track every restrictive practice against authorization windows with live alerts when a plan or consent is about to expire.',
    icon: <Shield className="w-6 h-6" />,
    bullets: [
      'Expiry countdowns embedded in shift dashboard',
      'Escalate to behavior support practitioners with one click',
      'Full history exports for auditors and families'
    ]
  },
  {
    title: 'One-Click Audit Pack',
    description: 'Guardian compiles progress notes, roster diffs, payroll evidence, and incident timelines into audit-ready packages—all content verified by staff.',
    icon: <FileSearch className="w-6 h-6" />,
    bullets: [
      'Participant or program scoped exports in seconds',
      'Includes immutable audit trail showing system suggestions vs. staff-approved content',
      'Shareable secure link with access expiry controls'
    ]
  }
];

const auditTimeline = [
  { step: 'Capture', detail: 'Frontline staff input note offline. System tags GPS + timestamps.', duration: '00:00 - 00:01' },
  { step: 'Review', detail: 'Automated review for red flags or restrictive practice, suggests incident templates.', duration: '00:01 - 00:02' },
  { step: 'Staff Approve', detail: 'Supervisors review compliance suggestions, edit as needed, and approve final content.', duration: '00:02 - 00:06' },
  { step: 'Export', detail: 'Compliance lead exports audit pack with staff-verified documentation.', duration: '00:06 onwards' }
];

const complianceStats = [
  { label: '47', text: 'documents zipped per audit pack' },
  { label: '12hrs', text: 'maximum incident notification SLA' },
  { label: '0', text: 'restrictive practice breaches in 2025 YTD' }
];

const ComplianceSection = () => {
  return (
    <section id="compliance" className="py-28 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 mb-16">
          <div className="inline-flex items-center gap-2 text-emerald-300 text-sm tracking-[0.3em] uppercase">
            <ClipboardCheck className="w-4 h-4" /> Audit Protection
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">Pass audits without the panic.</h2>
          <p className="text-lg text-slate-200 max-w-3xl">
            Kinly CarePro centralizes incident management, restrictive practice tracking, and one-click audit exports—Guardian ensures documentation quality while your team focuses on care delivery.
          </p>
          <div className="flex flex-wrap gap-6">
            {complianceStats.map((stat) => (
              <div key={stat.text} className="px-6 py-4 rounded-2xl border border-white/10 bg-white/5">
                <p className="text-3xl font-bold text-white">{stat.label}</p>
                <p className="text-sm text-slate-300 mt-1">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-20">
          {compliancePillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-semibold">{pillar.title}</h3>
              <p className="text-slate-200 text-sm leading-relaxed">{pillar.description}</p>
              <ul className="space-y-3 text-sm text-slate-200">
                {pillar.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <div className="flex items-center gap-3 text-emerald-300 text-sm uppercase tracking-[0.3em]">
              <Activity className="w-4 h-4" /> Evidence timeline
            </div>
            <h3 className="mt-4 text-3xl font-semibold">Guardian audit workflow.</h3>\n            <p className="text-slate-300 mt-3">Automated checks run quietly\u2014staff approve the final output.</p>
            <div className="mt-8 space-y-6">
              {auditTimeline.map((entry, index) => (
                <div key={entry.step} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    {index !== auditTimeline.length - 1 && <div className="flex-1 w-px bg-white/10 mt-2"></div>}
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 uppercase tracking-wide">{entry.duration}</p>
                    <p className="text-lg font-semibold text-white">{entry.step}</p>
                    <p className="text-slate-200 text-sm leading-relaxed">{entry.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 flex flex-col gap-6"
          >
            <div className="flex items-center gap-3 text-emerald-300 text-sm uppercase tracking-[0.3em]">
              <Timer className="w-4 h-4" /> Escalation SLAs
            </div>
            <h3 className="text-3xl font-semibold">Never miss a safeguarding deadline.</h3>
            <p className="text-slate-200">
              Guardian orchestrates hand-offs between frontline staff, safeguarding leads, and behavior support practitioners with automated reminders, SMS alerts, and calendar invites tied to each incident.
            </p>
            <ul className="space-y-3 text-sm text-slate-200">
              {['SMS + email escalation when restrictive practice exceeds plan', 'Calendar holds for follow-up reviews with assigned clinicians', 'NDIS-ready incident summary PDF with sign-off chain'].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-100">
              Download compliance playbook <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
