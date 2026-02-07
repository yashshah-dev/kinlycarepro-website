import React from 'react';
import SEO from '../components/SEO';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const contactCards = [
  {
    title: 'Sales & Pilots',
    description: 'Book a Guardian compliance walkthrough or discuss enterprise deployments.',
    email: 'sales@kinlycarepro.com',
    phone: '+61 3 9131 6102'
  },
  {
    title: 'Support',
    description: 'Existing customers can reach the 24/7 support squad via email or hotline.',
    email: 'support@kinlycarepro.com',
    phone: '+61 1800 287 227'
  },
  {
    title: 'Media & Partnerships',
    description: 'Press kit, analyst briefings, or strategic partnership questions.',
    email: 'press@kinlycarepro.com',
    phone: '+61 2 7253 0045'
  }
];

const ContactPage = () => (
  <>
    <SEO
      title="Contact Us - Get Started with Kinly CarePro NDIS Software"
      description="Book a demo or speak with our team about implementing Kinly CarePro at your NDIS organization. 48-hour deployment. Australia-wide support available 24/7."
      keywords="contact Kinly CarePro, NDIS software demo, book demo, NDIS software support, Australian care software contact, get started NDIS platform"
      url="https://kinlycarepro.com.au/contact"
    />
    <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-white text-center px-4">
      <p className="text-primary font-semibold tracking-[0.4em] uppercase text-xs">Contact</p>
      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">Talk to the Kinly CarePro team.</h1>
      <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
        Whether you need a pricing proposal, safeguarding workshop, or urgent support, we respond within one business day.
      </p>
    </section>

    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
        {contactCards.map((card) => (
          <div key={card.title} className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
            <p className="text-xl font-semibold text-slate-900">{card.title}</p>
            <p className="text-sm text-slate-600 mt-2">{card.description}</p>
            <div className="mt-4 text-sm text-slate-700 space-y-1">
              <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" />{card.email}</p>
              <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" />{card.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
        <form className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">Send us a message</h2>
          <div>
            <label className="text-sm font-semibold text-slate-600">Full name</label>
            <input type="text" className="mt-1 w-full rounded-xl border border-slate-200 p-3" placeholder="Alex Taylor" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold text-slate-600">Work email</label>
              <input type="email" className="mt-1 w-full rounded-xl border border-slate-200 p-3" placeholder="alex@provider.com" />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-600">Phone</label>
              <input type="tel" className="mt-1 w-full rounded-xl border border-slate-200 p-3" placeholder="+61 ..." />
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-600">How can we help?</label>
            <textarea className="mt-1 w-full rounded-xl border border-slate-200 p-3 h-32" placeholder="Tell us about your team, compliance goals, or integration needs." />
          </div>
          <button type="button" className="w-full px-4 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-[#0b3b47]">Submit</button>
        </form>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 flex flex-col gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Headquarters</p>
            <p className="text-2xl font-semibold text-slate-900 mt-2">365 Collins St, Melbourne VIC 3000</p>
            <p className="text-slate-600 mt-2">By appointment only • Hybrid HQ</p>
          </div>
          <div className="flex items-center gap-3 text-slate-600">
            <Clock className="w-4 h-4 text-primary" /> Monday - Friday, 8am - 7pm AEST
          </div>
          <div className="rounded-2xl bg-slate-900/90 text-white h-64 flex items-center justify-center text-center px-6">
            <div>
              <MapPin className="w-8 h-8 mx-auto text-accent mb-3" />
              <p className="font-semibold">Melbourne HQ map preview</p>
              <p className="text-sm text-slate-200">Embed Google Maps once live.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default ContactPage;
