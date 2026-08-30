import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Server, Key, FileCheck, Eye, ShieldCheck, Database, CheckCircle2, Terminal } from 'lucide-react';

const securityPillars = [
  {
    icon: <Server className="w-6 h-6 text-emerald-400" />,
    title: '1. 100% Australian Data Residency & Sovereignty',
    subtitle: 'Hosted exclusively in Sydney AWS (ap-southeast-2) & GCP (australia-southeast1)',
    bullets: [
      'Strict adherence to the Privacy Act 1988 (Cth) and 13 Australian Privacy Principles (APPs)',
      'NDIS Commission Ready with 7-year immutable audit log retention for care & billing records',
      'Guaranteed data sovereignty — your participant health records never leave Australian territory'
    ]
  },
  {
    icon: <Lock className="w-6 h-6 text-blue-400" />,
    title: '2. End-to-End Encryption (In Transit & At Rest)',
    subtitle: '256-Bit TLS In-Transit & AES-256 Bit At-Rest',
    bullets: [
      'All web portals, mobile APIs, and cloud services enforce 256-bit TLS/HTTPS encryption',
      'Database clusters (MongoDB Atlas) and cloud storage buckets (S3/GCS) use AES-256 encryption',
      '15-Minute TTL Cryptographic Signed URLs: Medical files and incident photos are never public'
    ]
  },
  {
    icon: <Database className="w-6 h-6 text-purple-400" />,
    title: '3. Multi-Tenant Data Isolation (Zero Cross-Talk)',
    subtitle: 'Guaranteed Tenant Data Isolation',
    bullets: [
      'Complete logical and organizational tenant data partitioning in every service layer',
      'Every database query is strictly scoped to the authenticated tenantId — zero cross-organization leakage',
      'Dedicated tenant configuration for branding, custom subdomains, and operational rules'
    ]
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-amber-400" />,
    title: '4. OWASP Top 10 Application Defense Stack',
    subtitle: 'Enterprise-grade Web Application Firewall (WAF) & Input Sanitization',
    bullets: [
      'NoSQL Injection Prevention: express-mongo-sanitize scrubs all incoming JSON payloads',
      'Cross-Site Scripting (XSS) Defense: xss-clean strips malicious script tags from all inputs',
      'Helmet.js Security Headers: Enforces CSP, HSTS, and X-Frame-Options against clickjacking',
      'DDoS & Brute-Force Rate Limiting: IP-based and auth-route rate limiters block automated threats'
    ]
  },
  {
    icon: <Key className="w-6 h-6 text-emerald-400" />,
    title: '5. Identity & Access Management (IAM & RBAC)',
    subtitle: 'Granular Roles with MFA & Single-Use Tokens',
    bullets: [
      'Bcrypt password hashing with enterprise-grade salt rounds for credential protection',
      'Granular Role-Based Access Control: Admin, Supervisor, Support Worker, and Support Coordinator',
      'Multi-Factor Authentication (MFA / 2FA) support with tenant-level enforcement',
      'Hashed, time-limited cryptographic tokens (1-hour TTL) for secure password resets'
    ]
  },
  {
    icon: <FileCheck className="w-6 h-6 text-cyan-400" />,
    title: '6. Immutable Audit Trail & OpenTelemetry Observability',
    subtitle: 'Immutable before/after audit diffs',
    bullets: [
      'Every record create, update, and delete logs User ID, Tenant ID, IP, user-agent, and timestamp',
      'OpenTelemetry distributed tracing and structured Pino JSON logging for instant security auditing',
      'Notifiable Data Breaches (NDB) scheme readiness with automated anomaly detection'
    ]
  }
];

const SecurityArchitectureSection = () => {
  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden" id="security-architecture">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs uppercase tracking-widest font-semibold mb-4">
            <Shield className="w-4 h-4" /> Bank-Grade Security & Privacy Architecture
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Security That Meets the Highest NDIS Standards
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Participant health records and financial data demand zero-compromise security. Built in Australia, hosted in Sydney, and protected by multi-layered defenses.
          </p>
        </div>

        {/* 3-Layer Defense Architecture Diagram */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 md:p-10 mb-16 shadow-2xl backdrop-blur-xl">
          <h3 className="text-xl font-bold text-center mb-8 text-white flex items-center justify-center gap-2">
            <Terminal className="w-5 h-5 text-emerald-400" /> The 3-Layer Security & Compliance Defense Stack
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Layer 1 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative">
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/20 px-2.5 py-1 rounded-md font-bold">
                Layer 1
              </span>
              <h4 className="text-base font-bold text-white mt-3">Data Sovereignty & AU Compliance</h4>
              <ul className="mt-4 space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>100% Australian Hosting (Sydney AWS / GCP)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Privacy Act 1988 (Cth) & 13 APPs Alignment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>7-Year NDIS Immutable Audit Log Mandate</span>
                </li>
              </ul>
            </div>

            {/* Layer 2 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative">
              <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 bg-blue-500/20 px-2.5 py-1 rounded-md font-bold">
                Layer 2
              </span>
              <h4 className="text-base font-bold text-white mt-3">Network & Application Defense</h4>
              <ul className="mt-4 space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>256-Bit TLS In-Transit & AES-256 At-Rest</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Cloudflare Edge & DDoS Rate Limiting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>NoSQL Injection & XSS Sanitization (Helmet.js)</span>
                </li>
              </ul>
            </div>

            {/* Layer 3 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative">
              <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400 bg-purple-500/20 px-2.5 py-1 rounded-md font-bold">
                Layer 3
              </span>
              <h4 className="text-base font-bold text-white mt-3">Identity, Access & Data Isolation</h4>
              <ul className="mt-4 space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Logical tenant data isolation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Granular RBAC & MFA / 2FA Support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>15-Minute TTL Cryptographic Signed URLs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 6 Core Security Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {securityPillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="p-3 bg-white/5 rounded-2xl w-fit mb-4 border border-white/10">
                  {pillar.icon}
                </div>
                <h4 className="text-base font-bold text-white leading-snug">{pillar.title}</h4>
                <p className="text-xs text-emerald-400 font-medium mt-1 mb-4">{pillar.subtitle}</p>
                <ul className="space-y-2 text-xs text-slate-300">
                  {pillar.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security Trust Promise Banner */}
        <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 border border-emerald-500/30 rounded-3xl p-8 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-white">The Kinly CarePro Trust & Security Promise</h3>
          <p className="text-slate-300 text-xs md:text-sm mt-2 max-w-2xl mx-auto">
            We understand the trust you place in us. Every architectural layer is designed to ensure you remain audit-proof, compliant, and secure.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-6">
            {[
              { label: '100% AU Hosted', val: 'Sydney AWS/GCP' },
              { label: 'Encryption', val: 'AES-256 / TLS-256' },
              { label: 'Privacy Act', val: '1988 & 13 APPs' },
              { label: 'Audit Retention', val: '7-Year Immutable' },
              { label: 'Access Control', val: 'MFA & Granular RBAC' },
              { label: 'Signed URLs', val: '15-Min Expiring TTL' },
            ].map((badge, i) => (
              <div key={i} className="p-3 bg-white/5 rounded-xl border border-white/10">
                <p className="text-xs font-bold text-emerald-400">{badge.label}</p>
                <p className="text-[11px] text-slate-300 mt-0.5">{badge.val}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityArchitectureSection;
