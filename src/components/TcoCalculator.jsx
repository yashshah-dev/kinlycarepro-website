import React, { useState } from 'react';
import { Calculator, ArrowRight, Users, ShieldCheck, UserCog, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const TcoCalculator = ({ showTitle = true, billingCycle: controlledCycle, onBillingCycleChange }) => {
  const [participants, setParticipants] = useState(25);
  const [workers, setWorkers] = useState(50);
  const [admins, setAdmins] = useState(4);
  const [internalCycle, setInternalCycle] = useState('monthly');
  const [showAssumptions, setShowAssumptions] = useState(false);
  const [workerRate, setWorkerRate] = useState(10);
  const [adminRate, setAdminRate] = useState(15);
  const [addonRate, setAddonRate] = useState(100);

  const billingCycle = controlledCycle || internalCycle;
  const setBillingCycle = onBillingCycleChange || setInternalCycle;

  // Kinly CarePro — $25/participant/mo (min $99/mo). Annual = 2 months free ($250/participant/yr, min $990/yr).
  const kinlyMonthly = Math.max(99, participants * 25);
  const kinlyYearly = Math.max(990, participants * 250);
  const kinlyEffectiveMonthly = billingCycle === 'annual' ? Math.round(kinlyYearly / 12) : kinlyMonthly;
  const kinlyBilledYearly = billingCycle === 'annual' ? kinlyYearly : kinlyMonthly * 12;

  // Legacy per-user competitor (editable assumptions)
  const legacyWorkerCost = workers * workerRate;
  const legacyAdminCost = admins * adminRate;
  const legacyMonthly = legacyWorkerCost + legacyAdminCost + addonRate;
  const legacyYearly = legacyMonthly * 12;

  // Savings
  const monthlySavings = Math.max(0, legacyMonthly - kinlyEffectiveMonthly);
  const yearlySavings = Math.max(0, legacyYearly - kinlyBilledYearly);
  const savingsPercent = legacyMonthly > 0 ? Math.round((monthlySavings / legacyMonthly) * 100) : 0;

  const rows = [
    {
      label: `${participants} participants`,
      sub: billingCycle === 'annual' ? '× $20.83/mo (annual)' : '× $25/mo',
      kinly: `$${kinlyEffectiveMonthly.toLocaleString()}`,
      legacy: '—',
    },
    {
      label: `${workers} support workers`,
      sub: `× $${workerRate}/mo`,
      kinly: '$0',
      legacy: `$${legacyWorkerCost.toLocaleString()}`,
    },
    {
      label: `${admins} admins / coordinators`,
      sub: `× $${adminRate}/mo`,
      kinly: '$0',
      legacy: `$${legacyAdminCost.toLocaleString()}`,
    },
    {
      label: 'Pro-tier surcharge',
      sub: 'reporting & forms',
      kinly: '$0',
      legacy: `$${addonRate.toLocaleString()}`,
    },
  ];

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden" id="tco-calculator">
      {showTitle && (
        <div className="bg-gradient-to-r from-slate-900 via-primary to-slate-900 p-8 text-white text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-accent text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" /> Cost Savings Calculator
          </div>
          <h3 className="text-2xl md:text-3xl font-bold">See what you'd save vs per-user software</h3>
          <p className="text-slate-200 text-sm mt-2 max-w-2xl mx-auto">
            Adjust your team size to compare Kinly CarePro's participant pricing against legacy per-worker fees.
          </p>
        </div>
      )}

      <div className="p-6 md:p-10 grid lg:grid-cols-2 gap-8 items-start">
        {/* Left: Controls */}
        <div className="space-y-7">
          {/* Billing Cycle Toggle */}
          <div className="inline-flex items-center bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`py-2 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white text-slate-900 shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`py-2 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                billingCycle === 'annual'
                  ? 'bg-white text-slate-900 shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Annual billing
              <span className="bg-accent-100 text-accent-700 text-[10px] px-2 py-0.5 rounded-full font-black">
                2 months free
              </span>
            </button>
          </div>

          {/* Slider 1: Participants */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" /> Active NDIS participants
              </label>
              <span className="text-lg font-extrabold text-primary bg-primary/10 px-3 py-1 rounded-xl">
                {participants}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="300"
              step="1"
              value={participants}
              onChange={(e) => setParticipants(parseInt(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-xs text-slate-400">
              <span>1</span>
              <span>100</span>
              <span>200</span>
              <span>300+</span>
            </div>
            {participants < 4 && (
              <p className="text-[11px] text-amber-600 font-medium">Billed at the $99/mo minimum (includes up to 4 participants).</p>
            )}
          </div>

          {/* Slider 2: Workers */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-accent-600" /> Support workers & casual staff
              </label>
              <span className="text-lg font-extrabold text-slate-900 bg-slate-100 px-3 py-1 rounded-xl">
                {workers}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="300"
              step="5"
              value={workers}
              onChange={(e) => setWorkers(parseInt(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-accent"
            />
            <div className="flex justify-between text-xs text-slate-400">
              <span>0</span>
              <span>100</span>
              <span>200</span>
              <span>300+</span>
            </div>
          </div>

          {/* Slider 3: Admins */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <UserCog className="w-4 h-4 text-primary" /> Admins & coordinators
              </label>
              <span className="text-lg font-extrabold text-slate-900 bg-slate-100 px-3 py-1 rounded-xl">
                {admins}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="50"
              step="1"
              value={admins}
              onChange={(e) => setAdmins(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-600"
            />
            <div className="flex justify-between text-xs text-slate-400">
              <span>0</span>
              <span>25</span>
              <span>50</span>
            </div>
          </div>

          {/* Assumptions Accordion */}
          <div className="rounded-2xl border border-slate-200 overflow-hidden">
            <button
              onClick={() => setShowAssumptions(!showAssumptions)}
              className="w-full px-4 py-3 flex items-center justify-between text-left bg-slate-50 hover:bg-slate-100 transition-colors"
            >
              <span className="text-xs font-bold text-slate-700">Competitor pricing assumptions</span>
              <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${showAssumptions ? 'rotate-180' : ''}`} />
            </button>
            {showAssumptions && (
              <div className="p-4 bg-white space-y-3 border-t border-slate-100">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs text-slate-600">Per worker / month</span>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-slate-400">$</span>
                    <input
                      type="number"
                      min="0"
                      value={workerRate}
                      onChange={(e) => setWorkerRate(parseInt(e.target.value) || 0)}
                      className="w-20 rounded-lg border border-slate-200 px-2 py-1 text-sm text-right focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs text-slate-600">Per admin / month</span>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-slate-400">$</span>
                    <input
                      type="number"
                      min="0"
                      value={adminRate}
                      onChange={(e) => setAdminRate(parseInt(e.target.value) || 0)}
                      className="w-20 rounded-lg border border-slate-200 px-2 py-1 text-sm text-right focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs text-slate-600">Pro-tier surcharge / month</span>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-slate-400">$</span>
                    <input
                      type="number"
                      min="0"
                      value={addonRate}
                      onChange={(e) => setAddonRate(parseInt(e.target.value) || 0)}
                      className="w-20 rounded-lg border border-slate-200 px-2 py-1 text-sm text-right focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </div>
                </div>
                <p className="text-[10px] text-slate-400 leading-relaxed">
                  Defaults are estimates based on publicly available information. Confirm current pricing with the vendor.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right: Savings-First Result Panel */}
        <div className="bg-gradient-to-br from-slate-900 via-primary-800 to-primary text-white p-6 md:p-8 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-5">
            {/* Savings headline */}
            <div>
              <p className="text-xs uppercase tracking-widest text-accent font-semibold">Estimated savings</p>
              <div className="flex items-baseline gap-2 mt-1">
                <p className="text-4xl md:text-5xl font-extrabold text-accent">
                  ${yearlySavings.toLocaleString()}
                </p>
                <span className="text-sm text-slate-300">/ year</span>
              </div>
              <p className="text-xs text-slate-300 mt-1">
                ≈ ${monthlySavings.toLocaleString()} / month
              </p>
              {savingsPercent > 0 && (
                <span className="inline-block mt-2 px-2.5 py-1 bg-accent text-slate-950 text-xs font-black rounded-lg">
                  Save {savingsPercent}%
                </span>
              )}
            </div>

            {/* Receipt-style comparison */}
            <div className="border-t border-white/10 pt-4 space-y-2.5 text-xs">
              <div className="grid grid-cols-[1fr_auto_auto] gap-x-4 pb-2 text-[10px] uppercase tracking-wider text-slate-400">
                <span>Line item</span>
                <span className="text-accent font-bold">Kinly</span>
                <span className="text-slate-300 font-bold">Legacy</span>
              </div>
              {rows.map((row) => (
                <div key={row.label} className="grid grid-cols-[1fr_auto_auto] gap-x-4 items-baseline">
                  <div>
                    <span className="text-slate-200 font-medium">{row.label}</span>
                    <span className="block text-[10px] text-slate-400">{row.sub}</span>
                  </div>
                  <span className="text-accent font-bold">{row.kinly}</span>
                  <span className="text-slate-300 font-bold">{row.legacy}</span>
                </div>
              ))}
              <div className="grid grid-cols-[1fr_auto_auto] gap-x-4 pt-2.5 border-t border-white/10 items-baseline">
                <span className="text-slate-100 font-bold">Total / month</span>
                <span className="text-accent font-extrabold">${kinlyEffectiveMonthly.toLocaleString()}</span>
                <span className="text-slate-100 font-extrabold">${legacyMonthly.toLocaleString()}</span>
              </div>
            </div>

            {billingCycle === 'annual' && (
              <p className="text-[11px] text-slate-300 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                Billed annually: ${kinlyBilledYearly.toLocaleString()} / year (save 2 months).
              </p>
            )}

            <Link
              to="/contact#book-demo"
              className="w-full py-3.5 px-6 bg-accent text-slate-950 rounded-xl hover:bg-accent-600 transition-all font-bold text-sm flex items-center justify-center gap-2 shadow-lg group"
            >
              Book a demo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TcoCalculator;
