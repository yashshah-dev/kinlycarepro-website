import React, { useState } from 'react';
import { Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PriceEstimator = () => {
  const [participants, setParticipants] = useState(25);

  const monthly = Math.max(99, participants * 25);
  const yearly = Math.max(990, participants * 250);

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-8 md:p-10">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">See your monthly price</h2>
        <p className="text-slate-500 text-sm mt-2">
          One flat rate per active participant. Nothing else — no per-worker fees, no add-ons.
        </p>
      </div>

      {/* Participant slider */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <label className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Users className="w-4 h-4 text-primary" /> Active participants
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
        <div className="flex justify-between text-xs text-slate-400 mt-1.5">
          <span>1</span>
          <span>100</span>
          <span>200</span>
          <span>300+</span>
        </div>
      </div>

      {/* Result */}
      <div className="text-center py-6 bg-slate-50 rounded-2xl">
        <p className="text-5xl md:text-6xl font-extrabold text-primary">${monthly.toLocaleString()}</p>
        <p className="text-slate-500 text-sm mt-2 font-medium">per month</p>
        <p className="text-sm text-slate-600 mt-5">
          Billed annually: <strong className="text-slate-900">${yearly.toLocaleString()} / year</strong>
          <span className="text-accent-700 font-semibold"> — save 2 months</span>
        </p>
        {participants < 4 && (
          <p className="text-xs text-amber-600 font-medium mt-2">Minimum $99/mo applies (includes up to 4 participants).</p>
        )}
      </div>

      <div className="mt-8">
        <Link
          to="/contact"
          className="w-full py-4 bg-primary text-white rounded-xl hover:bg-primary-700 transition-all shadow-lg font-bold text-sm flex items-center justify-center gap-2 group"
        >
          Book a demo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default PriceEstimator;
