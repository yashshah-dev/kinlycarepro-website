import React from 'react';
import SEO from '../components/SEO';
import { Users, ShieldCheck, BarChart3, Award } from 'lucide-react';

const stats = [
  { label: 'Participants protected', value: '18,400+' },
  { label: 'Compliance checks performed monthly', value: '2.3M' },
  { label: 'Implementation time', value: '48 hours' },
  { label: 'Audit pass rate', value: '100%' }
];

const leadership = [
  {
    name: 'Amelia Rhodes',
    title: 'Chief Executive Officer',
    bio: 'Former COO of a national SIL provider, Amelia founded Kinly CarePro after leading multiple NDIS audits and discovering compliance blind spots.',
    expertise: 'Governance & Compliance'
  },
  {
    name: 'Noah Campbell',
    title: 'Chief Product Officer',
    bio: 'Previously at Atlassian Enterprise, Noah oversees Guardian compliance technology, rostering intelligence, and mobile experience.',
    expertise: 'Compliance Tech & Product'
  },
  {
    name: 'Priya Iqbal',
    title: 'Chief Clinical Advisor',
    bio: 'Registered Nurse and former clinical lead for a top SDA provider, Priya embeds safeguarding best practice into every Kinly CarePro workflow.',
    expertise: 'Safeguarding & Clinical'
  }
];

const milestones = [
  { year: '2021', event: 'Kinly CarePro founded in Melbourne after NDIS practice audit reform.' },
  { year: '2022', event: 'Guardian compliance engine launches with live note checking + risk flag detection.' },
  { year: '2023', event: 'Mobile app rolls out across 280 providers with offline mode.' },
  { year: '2024', event: 'Operations command center + One-Click Audit adopted by enterprise SIL groups.' }
];

const AboutPage = () => (
  <>
    <SEO
      title="About Kinly CarePro - Australian NDIS Software Built by Care Experts"
      description="Kinly CarePro is built by former NDIS providers who understand operational challenges. 18,400+ participants protected, 100% audit pass rate. Trusted by Australian care teams."
      keywords="Kinly CarePro about, NDIS software company, Australian care technology, disability support innovation, NDIS platform team, care management leadership"
      url="https://kinlycarepro.com.au/about"
    />
    <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-white text-center px-4">
      <p className="text-accent font-semibold tracking-[0.4em] uppercase text-xs">About Kinly CarePro</p>
      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">NDIS operators built Kinly CarePro for NDIS operators.</h1>
      <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
        We are ex-operations managers, clinicians, and engineers obsessed with compliance automation, financial accuracy, and frontline experience.
      </p>
    </section>

    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Mission</h2>
          <p className="text-slate-600 text-lg">
            Empower every Australian care provider to run a compliant, profitable, and human-centered service without drowning in spreadsheets. Guardian automates the low-trust admin so teams can focus on participants.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="p-5 rounded-2xl border border-slate-200 bg-slate-50">
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                <p className="text-xs uppercase tracking-wide text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 space-y-4">
          {[{
            icon: <ShieldCheck className="w-6 h-6" />, title: 'GDPR + APP compliant hosting', text: 'Sydney + Melbourne data centers with SOC 2 aligned controls.'
          }, {
            icon: <Users className="w-6 h-6" />, title: 'Leadership with frontline experience', text: 'Our exec team has run SIL, Community Access, and Allied Health organisations.'
          }, {
            icon: <BarChart3 className="w-6 h-6" />, title: 'Data-backed outcomes', text: 'Guardian prevents 92% of compliance issues before billing.'
          }, {
            icon: <Award className="w-6 h-6" />, title: 'NDIS practice standard experts', text: 'We partner with external auditors to keep Kinly CarePro aligned with the latest requirements.'
          }].map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">{item.icon}</div>
              <div>
                <p className="text-lg font-semibold text-slate-900">{item.title}</p>
                <p className="text-sm text-slate-600">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900">Leadership team</h2>
        <p className="text-slate-600 mt-4">People who have lived through NDIS audits, implemented safeguarding reforms, and led enterprise software teams.</p>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
        {leadership.map((leader) => (
          <div key={leader.name} className="rounded-3xl border border-slate-200 bg-white p-6 flex flex-col gap-3 text-left">
            <p className="text-xl font-semibold text-slate-900">{leader.name}</p>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{leader.title}</p>
            <p className="text-sm text-slate-600 flex-1">{leader.bio}</p>
            <p className="text-xs font-semibold text-primary uppercase tracking-wide">{leader.expertise}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Milestones</h2>
        <div className="space-y-6">
          {milestones.map((milestone) => (
            <div key={milestone.year} className="flex gap-6">
              <div className="w-24 text-primary font-semibold">{milestone.year}</div>
              <p className="flex-1 text-slate-700">{milestone.event}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default AboutPage;
