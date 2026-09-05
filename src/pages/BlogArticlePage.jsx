import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const articles = {
  'ndis-progress-notes-guide': {
    title: 'NDIS Progress Notes: A Practical Guide for Disability Support Providers',
    description: 'A practical guide to clearer, person-centred progress notes for Australian disability support providers, including a review checklist.',
    intro: 'Progress notes should help the next person understand what support was delivered, how the participant responded and what follow-up is needed. This guide is an operational resource, not legal or compliance advice.',
    sections: [
      ['Start with the participant and the support delivered', 'Record the relevant context, the support delivered and the participant’s response. Use clear, respectful language and distinguish observed facts from staff interpretation.'],
      ['Connect the note to an outcome', 'Where it is relevant to the service, explain how the activity related to the participant’s stated goals or support plan. Avoid broad conclusions that the record cannot support.'],
      ['Make follow-up visible', 'Note any agreed follow-up, change in circumstance, incident pathway or handover needed. This helps teams act consistently when a participant is supported by more than one worker.'],
      ['Use a review checklist', 'Before finalising a note, check names, dates, service details, factual accuracy, outcome context and any follow-up. Staff should review and approve every final record.']
    ],
    related: [['Guardian AI note QA', '/guardian-ai'], ['Participant management software', '/solutions/participant-management-software'], ['Book a product demo', '/contact#book-demo']]
  },
  'ndis-billing-guide': {
    title: 'NDIS Billing for Providers: How to Reduce Claim Errors and Rework',
    description: 'A practical workflow guide for disability-service providers who want to reduce billing rework and improve service-to-invoice review.',
    intro: 'Billing quality begins before an invoice is created. A connected review process helps teams compare service delivery, documentation and billing details before submission. This guide does not replace current NDIA requirements or professional advice.',
    sections: [
      ['Use service delivery as the starting point', 'Begin with the approved service record and confirm the delivered support, date, duration and relevant participant information. Avoid re-keying details across disconnected tools where possible.'],
      ['Build a review step before invoicing', 'Give an authorised team member a clear opportunity to review exceptions, missing documentation and unusual service details before an invoice or claim is prepared.'],
      ['Keep current rules separate from assumptions', 'Pricing arrangements, claiming requirements and provider responsibilities can change. Confirm current official requirements before actioning a billing workflow or publishing guidance for staff.'],
      ['Reconcile and learn from exceptions', 'Track rejected, adjusted or delayed items. Use patterns in those exceptions to improve roster, documentation and billing checks.']
    ],
    related: [['NDIS invoicing and claiming software', '/solutions/ndis-invoicing-claiming-software'], ['NDIS price guide explorer', '/ndis-price-guide'], ['See Kinly pricing', '/pricing']]
  },
  'ndis-rostering-software-guide': {
    title: 'NDIS Rostering Software: What Growing Providers Should Look For',
    description: 'A buyer’s guide to evaluating NDIS rostering software for provider workflows, workforce coordination and operational visibility.',
    intro: 'A roster is more than a calendar. For a growing provider, it should help the team coordinate people, services and changes without losing the context staff need to support participants well.',
    sections: [
      ['Map your real workflow first', 'Document how a shift moves from planning to confirmation, delivery, documentation, payroll and billing. The best evaluation starts with the work your team already performs.'],
      ['Test change management', 'Ask how the system handles availability, relief staff, cancellations, qualification checks, shift notes and last-minute changes. Run a realistic scenario in a demo.'],
      ['Check information at the point of service', 'Frontline staff need only the information appropriate to their role, delivered reliably on the devices and connectivity conditions they use.'],
      ['Plan implementation', 'Clarify data migration, training, support, permissions and the work needed from your own team. A pilot can reveal practical issues before a wider rollout.']
    ],
    related: [['NDIS rostering software', '/solutions/ndis-rostering-software'], ['Support worker scheduling software', '/solutions/disability-support-worker-scheduling-software'], ['Compare software', '/compare']]
  },
  'ndis-audit-preparation-guide': {
    title: 'How to Prepare for an NDIS Provider Audit: Documentation, Rosters and Evidence Checklist',
    description: 'An operational checklist to help disability-service providers organise records, roster evidence and documentation before an audit.',
    intro: 'Audit preparation is easier when records are organised as part of everyday operations. This is a general operational checklist, not legal, regulatory or audit advice. Always check current official requirements and your organisation’s obligations.',
    sections: [
      ['Create a records inventory', 'List the participant, workforce, service-delivery, incident, billing and governance records your organisation holds. Assign a clear owner for each record set.'],
      ['Check retrieval, not just storage', 'Test whether authorised people can find a complete, accurate record quickly. Include a sample of roster history, progress notes, approvals and follow-up actions.'],
      ['Review permissions and audit trails', 'Confirm that access is appropriate for each role and that your team understands how corrections, approvals and changes are recorded.'],
      ['Practise a controlled response', 'Use a small internal exercise to identify missing records and clarify who coordinates requests. Escalate regulatory or legal questions to suitably qualified advisers.']
    ],
    related: [['Compliance and standards', '/compliance'], ['Security and privacy', '/security'], ['Guardian AI note QA', '/guardian-ai']]
  },
  'ndis-software-buyers-checklist': {
    title: 'NDIS Practice Management Software Comparison: A Buyer’s Checklist',
    description: 'A structured checklist for Australian disability-service providers evaluating NDIS practice management software.',
    intro: 'Software selection works best when providers compare real workflows rather than feature lists alone. Use this checklist to organise vendor discussions, demonstrations and internal decision-making.',
    sections: [
      ['Define the jobs the platform must support', 'Prioritise the workflows that create the most administration, risk or delay today: participant records, rostering, mobile documentation, billing, payroll, compliance or reporting.'],
      ['Evaluate the pricing model in context', 'Ask what is included, how usage is measured, which users are charged and how costs may change as participant numbers or workforce numbers change.'],
      ['Verify implementation and support', 'Request a documented view of migration, training, launch support, service levels, integrations and your organisation’s responsibilities.'],
      ['Validate security and data governance', 'Discuss data location, access controls, audit logs, export processes, incident handling and the terms that apply to your organisation.']
    ],
    related: [['Compare NDIS provider software', '/compare'], ['Kinly CarePro vs ShiftCare', '/vs/shiftcare'], ['NDIS provider software', '/solutions/ndis-provider-software']]
  }
};

export default function BlogArticlePage({ slug }) {
  const article = articles[slug];
  const path = `/resources/${slug}`;
  return <><SEO title={article.title} description={article.description} url={path} type="article" breadcrumbs={[{name:'Resources', path:'/resources'}, {name:article.title, path}]} />
    <article className="pt-32 pb-20"><div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"><p className="text-primary font-bold uppercase tracking-widest text-xs">Provider operations guide</p><h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">{article.title}</h1><p className="mt-5 text-sm text-slate-500">By Kinly CarePro · Reviewed 5 September 2026</p><p className="mt-8 text-xl text-slate-600 leading-relaxed">{article.intro}</p>{article.sections.map(([heading, body]) => <section key={heading} className="mt-12"><h2 className="text-2xl md:text-3xl font-bold text-slate-900">{heading}</h2><p className="mt-4 text-slate-600 leading-relaxed text-lg">{body}</p></section>)}
      <aside className="mt-14 rounded-2xl bg-slate-50 border border-slate-200 p-7"><h2 className="text-xl font-bold">Continue your evaluation</h2><ul className="mt-4 space-y-3">{article.related.map(([label,to])=><li key={to}><Link className="font-bold text-primary hover:underline" to={to}>{label} →</Link></li>)}</ul></aside>
    </div></article></>;
}
