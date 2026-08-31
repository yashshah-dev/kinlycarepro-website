import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calculator, 
  Bot, 
  Smartphone, 
  Calendar, 
  DollarSign, 
  ShieldCheck, 
  AlertTriangle, 
  BarChart3, 
  Building2, 
  Check, 
  Sparkles,
  ArrowRight,
  Maximize2,
  X,
  Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import mobileAppMockup from '../assets/mobile_app_kinly.webp';
import reportsMockup from '../assets/reports_kinlycare.webp';
import rosterView from '../assets/roster_kinlycare.webp';
import billingSuccess from '../assets/billing_kinly.webp';
import guardianAiMockup from '../assets/Guardian_ai..webp';
import payrollMockup from '../assets/payroll_kinly.webp';
import complianceMockup from '../assets/compliance_kinly.webp';

const pillars = [
  {
    id: 'billing',
    pillarNum: 'Pillar 01',
    numberBadge: '01',
    category: 'Billing & Revenue',
    shortLabel: 'Billing Engine',
    title: 'Deterministic NDIS Billing Engine (PAPL 2025–26)',
    headline: 'Fewer claim rejections with deterministic NDIS billing.',
    description: 'From completed shift to NDIA Bulk CSV and participant invoice in three clicks. Automatically split evening (8 PM), night (12 AM), and weekend rates, calculate group ratios, and claim travel without spreadsheets.',
    icon: <Calculator className="w-4 h-4 text-indigo-500" />,
    theme: {
      accent: 'indigo',
      badge: 'bg-indigo-50 text-indigo-700 border-indigo-200/80',
      activeTab: 'bg-indigo-600 text-white shadow-indigo-200 ring-2 ring-indigo-600/30',
      glow: 'from-indigo-500/10 via-indigo-500/5 to-transparent',
      dot: 'bg-indigo-500',
      border: 'hover:border-indigo-300',
      pinBg: 'bg-indigo-600'
    },
    stats: '1-Click NDIA Bulk CSV (BATCH-YYYYMMDD-XX.csv)',
    statsDetail: 'Guaranteed 0% rate mismatch on NDIA PRODA upload',
    bullets: [
      'Automatic 6 AM / 8 PM / 12 AM rate splits applied instantly',
      'Real-time matching against active PAPL 2025–26 price limits and support categories',
      'Automated per-participant group pricing formula with no-show denominator adjustments',
      'Generates compliant TRAN (travel km & time) and CANC lines with NDIA reason codes'
    ],
    image: billingSuccess,
    hotspots: [
      {
        id: 'billing-split',
        x: '24%',
        y: '52%',
        title: 'Automatic 8 PM & 12 AM Rate Splits',
        badge: 'Deterministic Math',
        description: 'Automatically detects evening & night boundary thresholds. Splits a single shift into compliant Day and Evening lines with zero manual math.'
      },
      {
        id: 'billing-papl',
        x: '75%',
        y: '52%',
        title: 'PAPL 2025–26 Price Cap Matching',
        badge: 'Rate Compliance',
        description: 'Validates line items against active NDIS price guide caps ($76.06 standard / $87.70 evening), preventing payment rejections on PRODA.'
      },
      {
        id: 'billing-export',
        x: '25%',
        y: '93%',
        title: '1-Click NDIA Bulk CSV Export',
        badge: 'PRODA Ready',
        description: 'Generates ready-to-upload BATCH CSV files with exact support category line items and participant plan manager IDs.'
      }
    ]
  },
  {
    id: 'guardian-ai',
    pillarNum: 'Pillar 02',
    numberBadge: '02',
    category: 'AI Quality Assurance',
    shortLabel: 'Guardian AI QA',
    title: 'Guardian AI Compliance & Clinical Quality QA',
    headline: 'Turn Frontline Notes into Audit-Proof Documentation.',
    description: 'Guardian AI reviews, scores, and upgrades progress notes in real time — keeping every note aligned with participant NDIS goals and Commission standards before submission.',
    icon: <Bot className="w-4 h-4 text-emerald-500" />,
    theme: {
      accent: 'emerald',
      badge: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
      activeTab: 'bg-emerald-600 text-white shadow-emerald-200 ring-2 ring-emerald-600/30',
      glow: 'from-emerald-500/10 via-emerald-500/5 to-transparent',
      dot: 'bg-emerald-500',
      border: 'hover:border-emerald-300',
      pinBg: 'bg-emerald-600'
    },
    stats: '0–100 Multi-Dimensional Quality Scoring',
    statsDetail: 'Flags compliance gaps & suggests clinical phrasing live',
    bullets: [
      'Evaluates person-centered phrasing, active support, and measurable goal outcomes',
      'Interactive AI rewrite assistant restructures rough frontline notes into clinical records',
      'Automatic safety indicators detect falls, medication refusals, and restrictive practices',
      'Human-in-Command architecture — qualified staff approve all final documentation'
    ],
    image: guardianAiMockup,
    hotspots: [
      {
        id: 'guardian-score',
        x: '18%',
        y: '42%',
        title: '0–100 Multi-Dimensional QA Score',
        badge: 'Clinical Quality',
        description: 'Evaluates active support, person-centered language, and goal achievement in real time before notes enter participant records.'
      },
      {
        id: 'guardian-safety',
        x: '54%',
        y: '42%',
        title: 'NDIS Commission Safety Scanner',
        badge: 'Risk Detection',
        description: 'Automatically detects medication incidents, behavioral escalations, or restrictive practices and flags them for immediate review.'
      },
      {
        id: 'guardian-rewrite',
        x: '34%',
        y: '72%',
        title: 'AI Clinical Rewrite Assistant',
        badge: 'Frontline Upgrade',
        description: 'Turns raw support worker bullet points into structured, Commission-compliant progress notes with one click.'
      }
    ]
  },
  {
    id: 'mobile-app',
    pillarNum: 'Pillar 03',
    numberBadge: '03',
    category: 'Frontline Mobile Care',
    shortLabel: 'Mobile GPS App',
    title: 'GPS-Verified Mobile Caregiver App (iOS & Android)',
    headline: 'A Fast, Reliable Mobile App Your Support Workers Will Love.',
    description: 'Give your frontline team the tools they need to log care effortlessly — with geofenced GPS check-in, offline note entry, and instant shift visibility even in low-reception zones.',
    icon: <Smartphone className="w-4 h-4 text-sky-500" />,
    theme: {
      accent: 'sky',
      badge: 'bg-sky-50 text-sky-700 border-sky-200/80',
      activeTab: 'bg-sky-600 text-white shadow-sky-200 ring-2 ring-sky-600/30',
      glow: 'from-sky-500/10 via-sky-500/5 to-transparent',
      dot: 'bg-sky-500',
      border: 'hover:border-sky-300',
      pinBg: 'bg-sky-600'
    },
    stats: '25m–5000m Geofencing & Live Accuracy Meter',
    statsDetail: '100% Offline-first sync with incident supervisor alerting',
    bullets: [
      'One-tap GPS check-in and check-out with Green/Amber/Red signal strength meter',
      'Offline-first sync: log notes and activities with no reception; auto-syncs on reconnect',
      '14+ structured activity types: Personal Care, Medication, Meal Prep, Transport, Social Support',
      'Instant supervisor incident alert button with live location metadata'
    ],
    image: mobileAppMockup,
    hotspots: [
      {
        id: 'mobile-gps',
        x: '48%',
        y: '34%',
        title: 'Live GPS Geofenced Check-In',
        badge: 'EVV Compliance',
        description: 'Verifies worker arrival inside configured geofence radius (25m–5000m) with live signal accuracy metering.'
      },
      {
        id: 'mobile-incident',
        x: '18%',
        y: '42%',
        title: 'One-Tap Supervisor Incident Alert',
        badge: 'Worker Safety',
        description: 'Instant distress/incident trigger sending live GPS coordinates, battery level, and shift metadata directly to managers.'
      },
      {
        id: 'mobile-offline',
        x: '85%',
        y: '35%',
        title: 'Zero-Reception Offline Sync',
        badge: 'Offline-First',
        description: 'Support workers can log notes, tasks, and medication in basement units or regional areas with auto-sync on reconnect.'
      }
    ]
  },
  {
    id: 'smart-rostering',
    pillarNum: 'Pillar 04',
    numberBadge: '04',
    category: 'Scheduling & Dispatch',
    shortLabel: 'Smart Rostering',
    title: 'Smart Rostering & The Copy-Week Wizard',
    headline: 'Build Complex NDIS Rosters in Seconds, Not Hours.',
    description: 'Eliminate repetitive scheduling tasks. Replicate full weekly schedules with the Copy-Week Wizard, drag-and-drop on the Timeline Canvas, and match shifts to available staff instantly.',
    icon: <Calendar className="w-4 h-4 text-violet-500" />,
    theme: {
      accent: 'violet',
      badge: 'bg-violet-50 text-violet-700 border-violet-200/80',
      activeTab: 'bg-violet-600 text-white shadow-violet-200 ring-2 ring-violet-600/30',
      glow: 'from-violet-500/10 via-violet-500/5 to-transparent',
      dot: 'bg-violet-500',
      border: 'hover:border-violet-300',
      pinBg: 'bg-violet-600'
    },
    stats: 'Batch Replicates 50+ Shifts in 1 Click',
    statsDetail: 'Zero double-bookings with live credential & conflict validation',
    bullets: [
      'Automated batch replication engine copies entire weekly schedules into future weeks',
      'High-performance visual scheduler offering Day, Week, Month, and drag-and-drop Timeline views',
      'Real-time conflict validation prevents double-booking and unqualified assignments',
      'Automated push notification pipeline immediately alerts staff of new or modified shifts'
    ],
    image: rosterView,
    hotspots: [
      {
        id: 'roster-conflicts',
        x: '33%',
        y: '16%',
        title: 'Real-Time Conflict & Overlap Shield',
        badge: 'Zero Errors',
        description: 'Prevents double-booking, fatigue violations, and unqualified worker assignments before shifts are published.'
      },
      {
        id: 'roster-wizard',
        x: '93%',
        y: '36%',
        title: 'Copy-Week Replication Wizard',
        badge: 'Batch Automation',
        description: 'Duplicates complex 50+ shift weekly schedules across future fortnights in a single click with intelligent date mapping.'
      },
      {
        id: 'roster-coverage',
        x: '25%',
        y: '65%',
        title: 'Participant Coverage Tracker',
        badge: 'Live Allocation',
        description: 'Shows live weekly hours delivered vs. funded plan agreements, ensuring zero under-servicing.'
      }
    ]
  },
  {
    id: 'payroll-engine',
    pillarNum: 'Pillar 05',
    numberBadge: '05',
    category: 'Payroll & Allowances',
    shortLabel: 'Payroll Engine',
    title: 'Time & Attendance to Payroll Engine',
    headline: 'Seamless Payroll Interpretation with 3-Tier Rate Matrix.',
    description: 'Convert GPS clock-in timestamps into verified payroll entries. Apply custom multipliers, track punctuality variances, and export to Xero, MYOB, or Excel in one click.',
    icon: <DollarSign className="w-4 h-4 text-amber-500" />,
    theme: {
      accent: 'amber',
      badge: 'bg-amber-50 text-amber-700 border-amber-200/80',
      activeTab: 'bg-amber-600 text-white shadow-amber-200 ring-2 ring-amber-600/30',
      glow: 'from-amber-500/10 via-amber-500/5 to-transparent',
      dot: 'bg-amber-500',
      border: 'hover:border-amber-300',
      pinBg: 'bg-amber-600'
    },
    stats: '1-Click Xero, MYOB, KeyPay & Excel .XLSX Sync',
    statsDetail: '5-stage shift freeze workflow prevents double claiming',
    bullets: [
      '3-tier rate matrix: Global baselines, staff multipliers (1.25x–2.5x), and participant overrides',
      'Automated punctuality badges: Late In (-mins), Early Out (-mins), Unapproved Overtime (+mins)',
      'ATO vehicle travel allowance calculation from mobile shift trip logs ($0.88–$0.96/km)',
      '5-stage pay run workflow with shift freeze protection preventing double-claiming'
    ],
    image: payrollMockup,
    hotspots: [
      {
        id: 'payroll-matrix',
        x: '11%',
        y: '22%',
        title: '3-Tier Rate Multiplier Engine',
        badge: 'Award Interpretation',
        description: 'Applies base award rates, staff tier multipliers (1.25x–2.5x), and custom participant rates without manual payroll spreadsheets.'
      },
      {
        id: 'payroll-punctuality',
        x: '64%',
        y: '36%',
        title: 'Automated Punctuality Badges',
        badge: 'Variance Audit',
        description: 'Flags late check-ins (-12m), early departures (-15m), and unapproved overtime (+45m) with automatic payroll adjustment.'
      },
      {
        id: 'payroll-travel',
        x: '52%',
        y: '72%',
        title: 'ATO Vehicle Allowance Interpretation',
        badge: 'Tax Compliant',
        description: 'Converts frontline GPS vehicle logs into verified ATO kilometer allowances ($0.88–$0.96/km) automatically.'
      }
    ]
  },
  {
    id: 'staff-screening',
    pillarNum: 'Pillar 06',
    numberBadge: '06',
    category: 'Workforce Compliance',
    shortLabel: 'Staff Screening',
    title: 'Staff Compliance & 3-Tier Worker Screening',
    headline: 'Zero-Compromise Staff Compliance & Credential Tracking.',
    description: 'Protect your participants and your registration. Automatically track NDIS Worker Screening (NDISWC), WWCC, First Aid, and training modules with automated expiry alerts and roster locks.',
    icon: <ShieldCheck className="w-4 h-4 text-rose-500" />,
    theme: {
      accent: 'rose',
      badge: 'bg-rose-50 text-rose-700 border-rose-200/80',
      activeTab: 'bg-rose-600 text-white shadow-rose-200 ring-2 ring-rose-600/30',
      glow: 'from-rose-500/10 via-rose-500/5 to-transparent',
      dot: 'bg-rose-500',
      border: 'hover:border-rose-300',
      pinBg: 'bg-rose-600'
    },
    stats: 'Tier 1 Mandatory Blocking Roster Restraints',
    statsDetail: 'Automated 30/60/90-day expiry notifications',
    bullets: [
      'Tier 1 (Mandatory Blocking): NDISWC, WWCC, Police Check, First Aid, CPR, Proof of Identity',
      'Tier 2 (Credentials): Cert III/IV Disability, Nursing registrations, Drivers Licence',
      'Tier 3 (Training): NDIS Worker Orientation Module, Infection Control, Hand Hygiene',
      'Proactive automated expiry warning alerts (30/60/90 days) with shift assignment blocks'
    ],
    image: complianceMockup,
    hotspots: [
      {
        id: 'compliance-blocking',
        x: '15%',
        y: '48%',
        title: 'Tier 1 Mandatory Roster Blocking',
        badge: 'Audit Shield',
        description: 'Hard-blocks staff assignment to shifts if NDISWC, WWCC, Police Check, or First Aid is expired or missing.'
      },
      {
        id: 'compliance-tiers',
        x: '66%',
        y: '48%',
        title: '3-Tier Credential Hierarchy',
        badge: 'Smart Screening',
        description: 'Categorizes worker compliance into Mandatory Blocking, Professional Credentials, and Training Orientation modules.'
      },
      {
        id: 'compliance-alerts',
        x: '32%',
        y: '68%',
        title: 'Proactive 30/60/90-Day Warning Pipeline',
        badge: 'Automated Alerts',
        description: 'Sends automated SMS and email reminders to workers before credentials lapse, avoiding sudden staffing gaps.'
      }
    ]
  },
  {
    id: 'reports-hub',
    pillarNum: 'Pillar 07',
    numberBadge: '07',
    category: 'Analytics & Reporting',
    shortLabel: '17+ Reports Hub',
    title: 'Executive Analytics & 17+ Operational Reports Hub',
    headline: 'Total Operational Clarity with 17+ Instant NDIS Reports.',
    description: 'From audit-ready attendance records to business revenue analytics and roster variance — export branded PDFs, Excel workbooks with formulas, and CSVs with one click.',
    icon: <BarChart3 className="w-4 h-4 text-teal-500" />,
    theme: {
      accent: 'teal',
      badge: 'bg-teal-50 text-teal-700 border-teal-200/80',
      activeTab: 'bg-teal-600 text-white shadow-teal-200 ring-2 ring-teal-600/30',
      glow: 'from-teal-500/10 via-teal-500/5 to-transparent',
      dot: 'bg-teal-500',
      border: 'hover:border-teal-300',
      pinBg: 'bg-teal-600'
    },
    stats: '17 NDIS Reports Across 4 Executive Suites',
    statsDetail: 'Instant export to PDF, formula-rich Excel & CSV',
    bullets: [
      'Shift Operations: Shift Details, Shift Progress, Staff Attendance, Roster Variance',
      'Billing & Financials: Billing Summary, Line Items, Bulk Claims History, Plan Utilization',
      'Workforce & Payroll: Staff Performance, Payroll Summary, Payroll Line Items',
      'Compliance & Quality: Document Expiry Alerts, Location Accuracy, Activity Distribution'
    ],
    image: reportsMockup,
    hotspots: [
      {
        id: 'report-operations',
        x: '20%',
        y: '32%',
        title: 'Shift Operations Audit Suite',
        badge: 'Audit Ready',
        description: 'Instant line-by-line shift progress, staff attendance logs, and GPS-verified clock-in timestamps.'
      },
      {
        id: 'report-export',
        x: '88%',
        y: '48%',
        title: '1-Click PDF & Formula-Rich Excel',
        badge: 'Instant Export',
        description: 'Generates branded compliance decks and live spreadsheets with embedded formulas for executive review.'
      },
      {
        id: 'report-billing',
        x: '52%',
        y: '50%',
        title: 'Billing & Claims Reconciliation',
        badge: 'Financial Clarity',
        description: 'Tracks revenue overview, plan utilization burn rates, and bulk PRODA upload histories in real time.'
      }
    ]
  },
  {
    id: 'data-isolation',
    pillarNum: 'Pillar 08',
    numberBadge: '08',
    category: 'Security & Enterprise',
    shortLabel: 'Data Isolation',
    title: 'Enterprise Data Isolation & Custom Branding',
    headline: 'Bank-Grade Security and Custom-Branded Care Portals.',
    description: 'Deploy your own branded care portal with custom domains, dedicated role-based access control, and complete data isolation in Sydney AWS.',
    icon: <Building2 className="w-4 h-4 text-cyan-500" />,
    theme: {
      accent: 'cyan',
      badge: 'bg-cyan-50 text-cyan-700 border-cyan-200/80',
      activeTab: 'bg-cyan-600 text-white shadow-cyan-200 ring-2 ring-cyan-600/30',
      glow: 'from-cyan-500/10 via-cyan-500/5 to-transparent',
      dot: 'bg-cyan-500',
      border: 'hover:border-cyan-300',
      pinBg: 'bg-cyan-600'
    },
    stats: 'Guaranteed Tenant Data Isolation',
    statsDetail: 'Sydney AWS residency with custom white-label branding',
    bullets: [
      'Multi-tenant data isolation guaranteeing zero cross-organization leakage',
      'Custom branding: Your logo, favicon, custom primary/secondary hex theming, and login page',
      'Custom subdomain / domain verification (portal.yourbrand.com.au)',
      'Granular RBAC: Scoped permissions across staff, participants, notes, billing, and settings'
    ],
    image: null,
    uiPreview: 'white-label'
  }
];

const Features = () => {
  const [activePillar, setActivePillar] = useState('billing');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [showHotspots, setShowHotspots] = useState(true);
  const buttonRefs = useRef({});

  // Auto-scroll the active tab horizontally inside the sticky bar when activePillar changes
  useEffect(() => {
    const activeBtn = buttonRefs.current[activePillar];
    if (activeBtn) {
      activeBtn.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      });
    }
  }, [activePillar]);

  // Robust Scroll Spy using IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -55% 0px',
      threshold: 0
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActivePillar(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    pillars.forEach((pillar) => {
      const el = document.getElementById(pillar.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToPillar = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -155; // 80px fixed navbar + 65px sticky bar offset
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActivePillar(id);
    }
  };

  return (
    <section id="features" className="pb-16 sm:pb-24 bg-slate-50 relative">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      {/* FIXED / STICKY FLOATING QUICK-JUMP PILLAR NAVIGATION BAR */}
      {/* Positioned at top-20 (80px) right below the fixed Navbar */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-y border-slate-200/90 shadow-md shadow-slate-200/40 py-2.5 sm:py-3 mb-16 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Active Pillar Live Status Indicator */}
            <div className="hidden lg:flex items-center gap-2 flex-shrink-0 border-r border-slate-200 pr-4">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                Viewing:
              </span>
              <span className="text-xs font-bold text-slate-900 font-mono">
                {pillars.find(p => p.id === activePillar)?.pillarNum}
              </span>
            </div>

            {/* Scrollable Horizontal Pill List */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1 w-full">
              {pillars.map((pillar) => {
                const isActive = activePillar === pillar.id;
                return (
                  <button
                    key={pillar.id}
                    ref={(el) => (buttonRefs.current[pillar.id] = el)}
                    onClick={() => scrollToPillar(pillar.id)}
                    className={`flex-shrink-0 flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                      isActive 
                        ? `${pillar.theme.activeTab} shadow-md scale-[1.03]` 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/90 bg-slate-50 border border-slate-200/60'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-white animate-pulse' : pillar.theme.dot}`}></span>
                    <span className="font-mono opacity-75">{pillar.numberBadge}</span>
                    <span className="whitespace-nowrap">{pillar.shortLabel || pillar.category}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Feature Pillars List */}
        <div className="space-y-28 md:space-y-36">
          {pillars.map((pillar) => (
            <motion.div
              id={pillar.id}
              key={pillar.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className={`relative bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden transition-all duration-300 ${pillar.theme.border} group`}
            >
              {/* Ambient Glow Background Accent */}
              <div className={`absolute top-0 right-0 w-[500px] h-[300px] bg-gradient-to-bl ${pillar.theme.glow} rounded-full blur-3xl pointer-events-none opacity-60`}></div>

              {/* Watermark Pillar Number in Background */}
              <div className="absolute top-4 right-8 font-extrabold text-7xl sm:text-9xl text-slate-100/80 select-none pointer-events-none font-mono tracking-tighter">
                {pillar.numberBadge}
              </div>

              {/* TOP: Full Width Visual Window with Hotspots */}
              <div className="bg-slate-900 border-b border-slate-800 p-3 sm:p-5 md:p-6 relative z-10">
                {/* Browser Top Navigation Bar */}
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-800 mb-4 px-1">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline-block">
                      app.kinlycarepro.com.au / {pillar.id}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3">
                    {pillar.hotspots && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowHotspots(!showHotspots);
                        }}
                        className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg border transition-colors ${
                          showHotspots 
                            ? 'bg-primary/20 text-primary-light border-primary/40 font-bold' 
                            : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
                        }`}
                      >
                        <Sparkles className="w-3 h-3" />
                        <span className="hidden sm:inline">
                          {showHotspots ? 'Hotspots Active' : 'Show Hotspots'}
                        </span>
                      </button>
                    )}

                    <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider bg-slate-800/90 px-3 py-1 rounded-lg border border-slate-700">
                      {pillar.pillarNum}
                    </span>

                    {pillar.image && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setLightboxImage({ src: pillar.image, title: pillar.title });
                        }}
                        className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded-lg border border-slate-700 transition-colors"
                        title="Click to view full resolution"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Inspect</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Main Full-Resolution Image Screen with Hotspots */}
                <div 
                  className="relative rounded-2xl overflow-hidden bg-slate-950/80 border border-slate-800 shadow-inner flex items-center justify-center min-h-[300px] sm:min-h-[420px] md:min-h-[520px]"
                  onClick={() => setActiveHotspot(null)}
                >
                  {pillar.image ? (
                    <div className="relative w-full">
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="w-full h-auto object-contain max-h-[660px] rounded-xl img-crisp block"
                        loading="lazy"
                      />

                      {/* Interactive Pulsing Hotspots on Screenshot */}
                      {showHotspots && pillar.hotspots?.map((spot) => {
                        const isSelected = activeHotspot?.id === spot.id;
                        const xNum = parseFloat(spot.x);
                        const yNum = parseFloat(spot.y);
                        const isTop = yNum < 38;
                        const popoverVClass = isTop ? 'top-full mt-3' : 'bottom-full mb-3';
                        const arrowVClass = isTop
                          ? 'bottom-full border-b-slate-900 border-b-[6px] border-x-[6px] border-x-transparent border-t-0'
                          : 'top-full border-t-slate-900 border-t-[6px] border-x-[6px] border-x-transparent border-b-0';

                        let popoverHClass = 'left-1/2 -translate-x-1/2';
                        let arrowHClass = 'left-1/2 -translate-x-1/2';

                        if (xNum < 32) {
                          popoverHClass = 'left-[-12px] sm:left-[-16px]';
                          arrowHClass = 'left-4';
                        } else if (xNum > 68) {
                          popoverHClass = 'right-[-12px] sm:right-[-16px]';
                          arrowHClass = 'right-4';
                        }

                        return (
                          <div
                            key={spot.id}
                            style={{ top: spot.y, left: spot.x }}
                            className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveHotspot(isSelected ? null : spot);
                            }}
                          >
                            {/* Outer Radar Pulse Ring & Pin */}
                            <div className="relative flex items-center justify-center group/pin cursor-pointer">
                              <span className={`absolute w-7 h-7 sm:w-9 sm:h-9 rounded-full ${pillar.theme.pinBg} ${isSelected ? 'opacity-70 scale-125' : 'opacity-40'} animate-ping`}></span>
                              <span className={`relative flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full ${pillar.theme.pinBg} text-white shadow-lg shadow-black/60 border-2 border-white ring-2 ${isSelected ? 'ring-white scale-125 shadow-white/20' : 'ring-black/20'} text-[10px] font-bold transition-all duration-200 group-hover/pin:scale-125`}>
                                <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                              </span>

                              {/* Desktop Smart Clamped Popover Tooltip (md and above) */}
                              <AnimatePresence>
                                {isSelected && (
                                  <motion.div
                                    initial={{ opacity: 0, y: isTop ? -8 : 8, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: isTop ? -8 : 8, scale: 0.95 }}
                                    transition={{ duration: 0.15 }}
                                    onClick={(e) => e.stopPropagation()}
                                    className={`hidden md:block absolute ${popoverVClass} ${popoverHClass} w-72 lg:w-80 bg-slate-900/95 backdrop-blur-md text-white p-3.5 sm:p-4 rounded-2xl border border-slate-700 shadow-2xl shadow-black/80 z-30 pointer-events-auto`}
                                  >
                                    <div className="flex items-center justify-between gap-2 mb-1.5">
                                      <span className="text-[10px] font-extrabold uppercase tracking-wider bg-white/10 text-emerald-400 px-2 py-0.5 rounded">
                                        {spot.badge}
                                      </span>
                                      <button 
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setActiveHotspot(null);
                                        }}
                                        className="text-slate-400 hover:text-white p-0.5 transition-colors"
                                        aria-label="Close tooltip"
                                      >
                                        <X className="w-3.5 h-3.5" />
                                      </button>
                                    </div>
                                    <h5 className="text-xs sm:text-sm font-bold text-white leading-snug">
                                      {spot.title}
                                    </h5>
                                    <p className="text-xs text-slate-300 mt-1.5 leading-relaxed font-normal">
                                      {spot.description}
                                    </p>
                                    <div className={`absolute ${arrowVClass} ${arrowHClass} w-0 h-0`}></div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>
                        );
                      })}

                      {/* Mobile Dedicated Hotspot Drawer Card Overlay (sm and below) */}
                      <AnimatePresence>
                        {showHotspots && activeHotspot && pillar.hotspots?.some(h => h.id === activeHotspot.id) && (
                          <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.96 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="md:hidden absolute inset-x-2.5 sm:inset-x-4 bottom-2.5 sm:bottom-3 z-40 bg-slate-900/98 backdrop-blur-xl text-white p-3.5 sm:p-4 rounded-2xl border border-slate-700/90 shadow-2xl shadow-black/90 pointer-events-auto ring-1 ring-white/10"
                          >
                            <div className="flex items-center justify-between gap-2 mb-1.5">
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] font-extrabold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                                  {activeHotspot.badge}
                                </span>
                                <span className="text-[10px] font-mono text-slate-400">
                                  Interactive Hotspot
                                </span>
                              </div>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveHotspot(null);
                                }}
                                className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                                aria-label="Close feature details"
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            <h5 className="text-xs sm:text-sm font-bold text-white leading-snug">
                              {activeHotspot.title}
                            </h5>
                            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                              {activeHotspot.description}
                            </p>

                            {/* Mobile Hotspot Quick-Switch Pills */}
                            {pillar.hotspots && pillar.hotspots.length > 1 && (
                              <div className="mt-2.5 pt-2 border-t border-slate-800 flex items-center justify-between">
                                <span className="text-[10px] text-slate-400 font-medium">Switch feature:</span>
                                <div className="flex items-center gap-1.5">
                                  {pillar.hotspots.map((hs, idx) => {
                                    const isHsActive = activeHotspot.id === hs.id;
                                    return (
                                      <button
                                        key={hs.id}
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setActiveHotspot(hs);
                                        }}
                                        className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${
                                          isHsActive 
                                            ? `${pillar.theme.pinBg} text-white shadow-sm ring-1 ring-white/30` 
                                            : 'bg-slate-800 text-slate-400 hover:text-white'
                                        }`}
                                      >
                                        {idx + 1}
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <div className="w-full max-w-4xl p-6 sm:p-8 text-white space-y-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                            <Building2 className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="text-base sm:text-lg font-bold">Enterprise Tenant Isolation & Custom Branding</h4>
                            <p className="text-xs text-slate-400">AWS Sydney data sovereignty with custom white-label</p>
                          </div>
                        </div>
                        <span className="inline-flex items-center self-start sm:self-auto gap-1.5 text-xs bg-cyan-500/20 text-cyan-300 px-3 py-1.5 rounded-full font-bold border border-cyan-500/30">
                          <Lock className="w-3.5 h-3.5" />
                          SOC2 & ISO Ready
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                        <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                          <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider mb-1">Custom Domain:</span>
                          <span className="font-mono text-cyan-400 font-bold text-sm">portal.yourbrand.com.au</span>
                        </div>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                          <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider mb-1">Brand Styling:</span>
                          <span className="font-mono text-emerald-400 font-bold text-sm">Custom Hex & Logo</span>
                        </div>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                          <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider mb-1">Data Residency:</span>
                          <span className="text-white font-bold text-sm">Sydney AWS (ap-southeast-2)</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* BOTTOM: Structured 2-Column Information & Feature Breakdown */}
              <div className="p-6 sm:p-8 md:p-10 lg:p-12 relative z-10 bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Left Column: Headline, Description & Highlight Box */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="flex items-center gap-2.5">
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-extrabold uppercase tracking-wider ${pillar.theme.badge}`}>
                        {pillar.icon}
                        <span>{pillar.pillarNum}</span>
                      </div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        {pillar.category}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                      {pillar.headline}
                    </h3>

                    <p className="text-sm font-bold text-primary tracking-wide">
                      {pillar.title}
                    </p>

                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                      {pillar.description}
                    </p>

                    {/* Key Metric Highlight Card */}
                    <div className="pt-3">
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start gap-3.5 shadow-sm">
                        <div className={`w-3 h-3 rounded-full ${pillar.theme.dot} mt-1 flex-shrink-0 animate-pulse`}></div>
                        <div>
                          <p className="text-xs sm:text-sm font-extrabold text-slate-900">
                            {pillar.stats}
                          </p>
                          <p className="text-xs text-slate-500 mt-0.5">
                            {pillar.statsDetail}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Key Feature Bullet Points */}
                  <div className="lg:col-span-6 lg:border-l lg:border-slate-100 lg:pl-10 space-y-3.5">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">
                        Core Technical Capabilities
                      </h4>
                      <span className="text-xs font-mono text-slate-400">4 Points</span>
                    </div>
                    
                    <div className="space-y-3">
                      {pillar.bullets.map((bullet, bIdx) => (
                        <div 
                          key={bIdx} 
                          className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50/80 border border-slate-100 transition-all hover:bg-slate-100/80 hover:border-slate-200"
                        >
                          <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs sm:text-sm font-medium text-slate-700 leading-snug">
                            {bullet}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex flex-wrap items-center justify-between gap-3">
                      {pillar.id === 'guardian-ai' ? (
                        <Link
                          to="/guardian-ai"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs sm:text-sm font-bold hover:bg-emerald-100 transition-colors group"
                        >
                          <Sparkles className="w-4 h-4 text-emerald-600" />
                          <span>Explore Dedicated Guardian™ AI Page</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      ) : (
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary hover:text-primary-dark transition-colors group"
                        >
                          <span>Request a dedicated {pillar.category} demo</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <div className="relative max-w-6xl w-full max-h-[92vh] flex flex-col items-center">
              {/* Lightbox Header Bar */}
              <div className="w-full flex items-center justify-between text-white pb-3 border-b border-white/10 mb-3">
                <span className="text-sm font-bold truncate pr-4">{lightboxImage.title}</span>
                <button
                  onClick={() => setLightboxImage(null)}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* High-Res Image Display */}
              <div className="overflow-auto max-h-[82vh] rounded-xl border border-white/10 bg-slate-950 p-2 shadow-2xl">
                <img
                  src={lightboxImage.src}
                  alt={lightboxImage.title}
                  className="w-full h-auto object-contain rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
              <p className="text-xs text-slate-400 mt-2">Click anywhere or press Esc to close</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Features;
