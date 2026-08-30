import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Clock, MapPin, Calendar, Lock, FileSpreadsheet, CheckCircle2, ChevronRight, AlertTriangle } from 'lucide-react';

const rateMatrixData = [
  { band: 'Day Standard (06:00 – 20:00)', baseline: '$38.50 / hr', staffOverride: '$42.00 / hr (Cert IV)', participantOverride: '$48.00 / hr (High-Intensity)' },
  { band: 'Evening Shift (20:00 – 00:00)', baseline: '$44.20 / hr (1.15x)', staffOverride: '$48.30 / hr', participantOverride: '$55.20 / hr' },
  { band: 'Active Night (00:00 – 06:00)', baseline: '$46.80 / hr (1.20x)', staffOverride: '$50.40 / hr', participantOverride: '$58.50 / hr' },
  { band: 'Saturday Rate', baseline: '$57.75 / hr (1.50x)', staffOverride: '$63.00 / hr', participantOverride: '$72.00 / hr' },
  { band: 'Sunday Rate', baseline: '$77.00 / hr (2.00x)', staffOverride: '$84.00 / hr', participantOverride: '$96.00 / hr' },
  { band: 'Public Holiday (Gazetted)', baseline: '$96.25 / hr (2.50x)', staffOverride: '$105.00 / hr', participantOverride: '$120.00 / hr' },
];

const payRunStages = [
  { id: 'draft', label: '1. Draft Run', desc: 'Syncs GPS punches & timesheets' },
  { id: 'review', label: '2. Review & Variances', desc: 'Punctuality & OT audit' },
  { id: 'locked', label: '3. Shift Lock', desc: 'Freezes shifts against edits' },
  { id: 'exported', label: '4. Export Ready', desc: 'Xero, MYOB, KeyPay & Excel' },
  { id: 'paid', label: '5. Settled', desc: 'Immutable audit archive' }
];

const PayrollEngineSection = () => {
  const [activeTab, setActiveTab] = useState('rate-matrix');

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white overflow-hidden" id="payroll-engine">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs uppercase tracking-widest font-semibold mb-4">
            <DollarSign className="w-4 h-4" /> Award-Based Workforce Automation
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Time & Attendance to Payroll Engine
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Eliminate weekly payroll reconciliation chaos. From GPS clock-in to 3-tier rate matrix interpretation and 1-click accounting exports.
          </p>
        </div>

        {/* Interactive Feature Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            { id: 'rate-matrix', label: '3-Tier Pay Rate Matrix', icon: <DollarSign className="w-4 h-4" /> },
            { id: 'variances', label: 'Punctuality & Travel Allowances', icon: <Clock className="w-4 h-4" /> },
            { id: 'lifecycle', label: '5-Stage Pay Run & Shift Locking', icon: <Lock className="w-4 h-4" /> },
            { id: 'exports', label: '1-Click Accounting Exports', icon: <FileSpreadsheet className="w-4 h-4" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all ${
                activeTab === tab.id
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: 3-Tier Pay Rate Matrix */}
        {activeTab === 'rate-matrix' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 border-b border-white/10 pb-4">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-emerald-400" /> Multi-Dimensional Rate Matrix Configuration
                </h3>
                <p className="text-slate-400 text-xs mt-1">
                  Hierarchical rate resolution: Global Baseline $\rightarrow$ Staff-Specific Multiplier $\rightarrow$ Participant High-Intensity Override.
                </p>
              </div>
              <span className="text-xs bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30">
                Effective-From Dating Enabled
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs md:text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-slate-400 uppercase tracking-wider text-[11px]">
                    <th className="pb-3 px-3">Time & Day Band</th>
                    <th className="pb-3 px-3">1. Global Baseline</th>
                    <th className="pb-3 px-3">2. Staff Override</th>
                    <th className="pb-3 px-3">3. Participant Override</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {rateMatrixData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="py-3.5 px-3 font-semibold text-white">{row.band}</td>
                      <td className="py-3.5 px-3 text-slate-300">{row.baseline}</td>
                      <td className="py-3.5 px-3 text-emerald-400 font-mono">{row.staffOverride}</td>
                      <td className="py-3.5 px-3 text-amber-300 font-mono">{row.participantOverride}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10 text-xs text-slate-300">
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <strong className="text-white block mb-1">State Public Holiday Calendars:</strong>
                Pre-configured gazetted calendars for NSW, VIC, QLD, WA, SA, TAS, ACT, and NT.
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <strong className="text-white block mb-1">Historical Audit Drawer:</strong>
                Track when rates were updated and who approved the wage modification.
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <strong className="text-white block mb-1">Custom Wage Multipliers:</strong>
                Support for 1.25x, 1.5x, 2.0x, 2.5x loading rules per staff category.
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 2: Punctuality & Travel Allowances */}
        {activeTab === 'variances' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-8"
          >
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-emerald-400" /> Automated Punctuality Variance Badges
              </h3>
              <p className="text-slate-300 text-sm">
                Kinly CarePro compares actual GPS clock-in/out timestamps against rostered shifts, flagging variances before pay runs are committed:
              </p>
              <div className="space-y-3 pt-2">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-300">Scheduled: 08:00 – 12:00 | Actual GPS: 08:14 – 12:02</span>
                  <span className="px-2.5 py-1 bg-amber-500/20 text-amber-300 rounded-md text-xs font-bold font-mono">
                    Late In (-14m)
                  </span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-300">Scheduled: 13:00 – 17:00 | Actual GPS: 12:58 – 16:42</span>
                  <span className="px-2.5 py-1 bg-rose-500/20 text-rose-300 rounded-md text-xs font-bold font-mono">
                    Early Out (-18m)
                  </span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-300">Scheduled: 17:00 – 21:00 | Actual GPS: 16:55 – 21:45</span>
                  <span className="px-2.5 py-1 bg-blue-500/20 text-blue-300 rounded-md text-xs font-bold font-mono">
                    Unapproved OT (+45m)
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-400 pt-2">
                * Configurable 15-minute standard rounding (7/8 rule) or exact decimal minutes.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-emerald-400" /> ATO Staff Travel Reimbursement
              </h3>
              <p className="text-slate-300 text-sm">
                Calculate staff vehicle allowances directly from verified mobile shift trip logs:
              </p>
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Logged Distance (Transport Shift):</span>
                  <span className="text-white font-bold">42.6 km</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">ATO Standard Rate (2025–26):</span>
                  <span className="text-emerald-400 font-bold">$0.88 / km</span>
                </div>
                <div className="pt-2 border-t border-white/10 flex justify-between text-sm">
                  <span className="text-white font-bold">Payroll Travel Allowance:</span>
                  <span className="text-emerald-300 font-extrabold font-mono">$37.49</span>
                </div>
              </div>
              <p className="text-xs text-slate-400">
                Separates participant transport billing (non-labour travel claim lines) from staff vehicle payroll reimbursement.
              </p>
            </div>
          </motion.div>
        )}

        {/* Tab 3: 5-Stage Pay Run & Shift Locking */}
        {activeTab === 'lifecycle' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md"
          >
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h3 className="text-xl font-bold text-white flex items-center justify-center gap-2">
                <Lock className="w-5 h-5 text-emerald-400" /> 5-Stage Pay Run Lifecycle & Shift Lock Protection
              </h3>
              <p className="text-slate-300 text-xs mt-2">
                Guaranteed shift freeze prevents processed shifts from being modified or double-claimed in subsequent pay runs.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-3">
              {payRunStages.map((stage, i) => (
                <div key={stage.id} className="p-4 bg-white/5 rounded-2xl border border-white/10 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                      Stage {i + 1}
                    </span>
                    <h4 className="font-bold text-white text-sm">{stage.label}</h4>
                    <p className="text-slate-400 text-xs mt-1 leading-tight">{stage.desc}</p>
                  </div>
                  {stage.id === 'locked' && (
                    <span className="mt-3 inline-flex items-center gap-1 text-[10px] text-amber-300 font-bold bg-amber-500/20 px-2 py-0.5 rounded">
                      <Lock className="w-3 h-3" /> Shift Freeze Active
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <p className="text-xs text-emerald-100">
                <strong>Immutable Audit Trail:</strong> Every state change records the user, timestamp, before/after totals, and exported batch IDs.
              </p>
            </div>
          </motion.div>
        )}

        {/* Tab 4: 1-Click Accounting Exports */}
        {activeTab === 'exports' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-3 gap-6"
          >
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold">Xero Payroll</span>
                <h4 className="text-lg font-bold text-white mt-3">Maps to Xero Pay Items</h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Automatic mapping of ordinary hours, Saturday/Sunday loading, public holiday rates, and travel allowances directly to Xero Pay Items.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 text-xs text-emerald-400 font-bold">
                ✓ 1-Click Direct API / CSV Sync
              </div>
            </div>

            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold">MYOB & KeyPay</span>
                <h4 className="text-lg font-bold text-white mt-3">Employment Hero & MYOB</h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Pre-formatted timesheet imports for MYOB AccountRight and KeyPay / Employment Hero with employee card IDs and category codes.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 text-xs text-emerald-400 font-bold">
                ✓ Zero Re-formatting Required
              </div>
            </div>

            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold">Multi-Tab Excel</span>
                <h4 className="text-lg font-bold text-white mt-3">Combined .XLSX Workbooks</h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Export multi-tab workbooks containing staff summary totals, individual shift breakdowns, variance reports, and built-in SUM formulas.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 text-xs text-emerald-400 font-bold">
                ✓ Executive Ready Spreadsheets
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PayrollEngineSection;
