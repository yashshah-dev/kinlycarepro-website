import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Bell, MapPin, MonitorPlay, Activity, ShieldCheck } from 'lucide-react';
import mobileApp from '../assets/mobile_app_mockup.png';
import dashboard from '../assets/dashboard_mockup.png';

const tabs = {
  staff: {
    label: 'For Your Staff',
    description: 'Frontline teams get an offline-capable mobile workspace that proves every shift with GPS, photo evidence, and escalation workflows.',
    bullets: [
      'Shift dashboard with care plans, tasks, and medication prompts',
      'GPS smart-fencing with automatic clock-in/out & photo proof',
      'One-tap emergency beacon notifying supervisors with live location'
    ],
    metrics: [
      { value: 'GPS Verified', label: 'Shift tracking' },
      { value: 'Instant', label: 'Incident drafting' }
    ],
    image: mobileApp,
    icon: <Smartphone className="w-5 h-5" />
  },
  business: {
    label: 'For Your Business',
    description: 'Live operations map, smart rostering, and one-click billing give ops and finance teams visibility and speed without the admin chaos.',
    bullets: [
      'Airport-style live map highlighting late / missing staff in real time',
      'Smart rostering with fatigue, qualification, and pricing guardrails',
      'Automated billing review blocking ghost shifts before PRODA export'
    ],
    metrics: [
      { value: 'Smart', label: 'Rostering automation' },
      { value: 'One-Click', label: 'PRODA billing' },
      { value: 'Real-Time', label: 'Ops visibility' },
      { value: 'Streamlined', label: 'Cash collection' }
    ],
    image: dashboard,
    icon: <ShieldCheck className="w-5 h-5" />
  }
};

const ExperienceShowcase = () => {
  const [activeTab, setActiveTab] = useState('staff');
  const tab = tabs[activeTab];

  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold tracking-wide uppercase text-sm">Experience</p>
          <h2 className="text-4xl font-bold text-slate-900 mt-3">Screens your teams will actually love.</h2>
          <p className="text-slate-600 max-w-3xl mx-auto mt-4">
            Kinly CarePro gives frontline staff simple mobile tools they'll actually use, while HQ gets real-time visibility into operations, finance, and staffing—with Guardian working quietly in the background to catch issues before they become problems.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
          <div className="flex flex-wrap">
            {Object.entries(tabs).map(([key, value]) => (
              <button
                key={key}
                className={`flex-1 min-w-[200px] px-6 py-4 text-left border-b border-slate-100 text-sm font-semibold flex items-center gap-2 ${activeTab === key ? 'text-primary bg-primary/5' : 'text-slate-500'
                  }`}
                onClick={() => setActiveTab(key)}
              >
                <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-primary">{value.icon}</span>
                {value.label}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-0">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="p-10 flex flex-col gap-6"
            >
              <p className="text-slate-600 text-lg">{tab.description}</p>
              <ul className="space-y-3 text-slate-700">
                {tab.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-accent"></span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                {tab.metrics.map((metric) => (
                  <div key={metric.label} className="px-5 py-4 rounded-2xl bg-slate-100 border border-slate-200">
                    <p className="text-2xl font-bold text-slate-900">{metric.value}</p>
                    <p className="text-xs uppercase tracking-wide text-slate-500">{metric.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              key={`${activeTab}-media`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="p-10 bg-gradient-to-br from-slate-900 via-slate-800 to-black flex items-center justify-center"
            >
              <div className="relative w-full max-w-lg">
                <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-primary/30 blur-3xl"></div>
                <img src={tab.image} alt={tab.label} className="relative z-10 rounded-2xl shadow-2xl border border-white/10" />
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-3 rounded-2xl shadow-lg flex items-center gap-3 text-sm text-slate-900">
                  {activeTab === 'staff' ? (
                    <>
                      <MapPin className="w-4 h-4 text-primary" />
                      GPS check-in verified
                    </>
                  ) : (
                    <>
                      <Activity className="w-4 h-4 text-primary" />
                      Live operations map synced
                    </>
                  )}
                </div>
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-semibold text-slate-900 shadow-md flex items-center gap-2">
                  {activeTab === 'staff' ? <Bell className="w-4 h-4 text-primary" /> : <MonitorPlay className="w-4 h-4 text-primary" />}
                  {activeTab === 'staff' ? 'Incident alert pushed' : 'Guardian AI auditing'}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceShowcase;
