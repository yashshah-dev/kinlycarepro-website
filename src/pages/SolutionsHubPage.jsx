import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const solutions = [
  ['NDIS provider software', '/solutions/ndis-provider-software', 'Bring participant, roster, documentation and billing workflows into one connected workspace.'],
  ['Disability service provider software', '/solutions/disability-service-provider-software', 'Support day-to-day service delivery with practical operational controls.'],
  ['Care management software', '/solutions/care-management-software', 'Keep participant records, care plans, notes and team actions in context.'],
  ['NDIS rostering software', '/solutions/ndis-rostering-software', 'Plan shifts and give workers a clear mobile view of their work.'],
  ['Participant management software', '/solutions/participant-management-software', 'Maintain a reliable view of participant information and service delivery.'],
  ['NDIS invoicing and claiming software', '/solutions/ndis-invoicing-claiming-software', 'Turn approved service delivery into clear billing workflows.'],
  ['Disability support worker scheduling software', '/solutions/disability-support-worker-scheduling-software', 'Coordinate workforce schedules without adding per-worker software seats.'],
];

export default function SolutionsHubPage() {
 return <><SEO title="NDIS Provider Software Solutions" description="Explore Kinly CarePro software for Australian NDIS provider operations, including rostering, participant management, care documentation and billing workflows." url="/solutions" breadcrumbs={[{name:'Solutions',path:'/solutions'}]} />
 <section className="pt-32 pb-20 bg-gradient-to-b from-[#f2fbff] via-white to-white"><div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
 <p className="text-primary font-bold uppercase tracking-widest text-xs">Solutions for Australian providers</p><h1 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight">NDIS provider software for connected care operations</h1>
 <p className="mt-6 max-w-3xl text-lg text-slate-600 leading-relaxed">Kinly CarePro helps disability-service providers manage the operational work around support delivery: scheduling, participant records, progress notes and billing. Explore the workflows your team needs most.</p>
 <div className="grid md:grid-cols-2 gap-5 mt-12">{solutions.map(([title,path,desc])=><Link key={path} to={path} className="block rounded-2xl bg-white p-7 border border-slate-200 hover:border-primary hover:shadow-lg transition"><h2 className="font-bold text-xl text-slate-900">{title}</h2><p className="mt-2 text-slate-600 leading-relaxed">{desc}</p><span className="inline-block mt-4 text-primary font-bold text-sm">Explore {title} →</span></Link>)}</div>
 </div></section></>;
}
