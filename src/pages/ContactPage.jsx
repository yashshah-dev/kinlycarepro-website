import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Mail, Phone, Clock, CheckCircle2, ShieldCheck } from 'lucide-react';

const contactInfo = {
  title: 'Get in Touch with our Australian Team',
  description: 'Whether you want to calculate software cost savings, schedule a live demo, or plan a zero-downtime data migration, we respond within 1 business day.',
  email: 'support@kinlycarepro.com',
  phone: '+61 427 884 336',
  hours: 'Monday – Sunday, 8am – 7pm AEST'
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    currentSoftware: '',
    providerType: '',
    participantCount: '',
    inquiryType: 'Demo',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch('https://formspree.io/f/xlgwlzra', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus({ submitting: false, submitted: true, error: null });
        
        // Push conversion event to Google Tag Manager / GA4
        if (typeof window !== 'undefined' && window.dataLayer) {
          window.dataLayer.push({
            event: 'generate_lead',
            form_type: 'demo_inquiry',
            inquiry_type: formData.inquiryType,
            provider_type: formData.providerType
          });
        }

        setFormData({ name: '', email: '', phone: '', organization: '', currentSoftware: '', providerType: '', participantCount: '', inquiryType: 'Demo', message: '' });
      } else {
        const data = await response.json();
        throw new Error(data.error || data.errors?.[0]?.message || 'Form submission failed');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus({ submitting: false, submitted: false, error: err.message });
    }
  };

  return (
    <>
      <SEO
        title="Contact Us & Book Demo - Australian NDIS Software Support | Kinly CarePro"
        description="Book a live walkthrough or speak with our Australian support team. Transparent $25/participant/mo pricing with unlimited staff accounts."
        keywords="contact Kinly CarePro, NDIS software demo, Australian NDIS support, NDIS software migration, Melbourne NDIS software, ShiftCare switch demo"
        url="https://www.kinlycarepro.com.au/contact"
        breadcrumbs={[{ name: "Contact & Demo", path: "/contact" }]}
      />

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#f2fbff] via-white to-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Direct Australian Support</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Talk to the Kinly CarePro Team
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to audit-proof your NDIS practice and eliminate per-worker software taxes? We're here to assist.
          </p>
        </div>
      </section>

      {/* Quick Contact Banner */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 p-8 bg-slate-50 flex flex-col md:flex-row items-center gap-8 shadow-sm">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-slate-900">{contactInfo.title}</h2>
              <p className="text-slate-600 mt-2 text-sm leading-relaxed">{contactInfo.description}</p>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-auto min-w-[260px]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-sm font-bold text-slate-900 hover:text-primary transition-colors">{contactInfo.email}</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Direct Phone</p>
                  <a href={`tel:${contactInfo.phone.replace(/ /g, '')}`} className="text-sm font-bold text-slate-900 hover:text-primary transition-colors">{contactInfo.phone}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form & Map */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm space-y-4">
            {status.submitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-emerald-900 font-bold text-xl">Thank You for Reaching Out!</h3>
                <p className="text-emerald-800 text-sm">Our Australian care solutions team has received your message and will be in touch within 1 business day.</p>
                <button
                  type="button"
                  onClick={() => setStatus({ ...status, submitted: false })}
                  className="mt-4 text-xs text-emerald-700 font-bold underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-slate-900">Request Platform Demo & Proposal</h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 w-full rounded-xl border border-slate-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-900"
                      placeholder="Alex Taylor"
                      required
                      disabled={status.submitting}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600">Organization Name</label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="mt-1 w-full rounded-xl border border-slate-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-900"
                      placeholder="Care Solutions Pty Ltd"
                      required
                      disabled={status.submitting}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600">Work Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 w-full rounded-xl border border-slate-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-900"
                      placeholder="alex@provider.com.au"
                      required
                      disabled={status.submitting}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 w-full rounded-xl border border-slate-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-900"
                      placeholder="+61 400 000 000"
                      disabled={status.submitting}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600">Provider Type</label>
                    <select
                      name="providerType"
                      value={formData.providerType}
                      onChange={handleChange}
                      className="mt-1 w-full rounded-xl border border-slate-200 p-3 text-sm bg-white text-slate-800"
                      disabled={status.submitting}
                      required
                    >
                      <option value="">Select type...</option>
                      <option value="NDIS Registered Provider">NDIS Registered Provider</option>
                      <option value="Unregistered Provider">Unregistered Provider</option>
                      <option value="Support Coordination Provider">Support Coordination Provider</option>
                      <option value="Plan Management">Plan Management</option>
                      <option value="SIL / SDA Operator">SIL / SDA Operator</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600">Est. Active Participants</label>
                    <input
                      type="number"
                      name="participantCount"
                      value={formData.participantCount}
                      onChange={handleChange}
                      className="mt-1 w-full rounded-xl border border-slate-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-900"
                      placeholder="e.g. 35 ($875/mo total)"
                      disabled={status.submitting}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600">Current Software</label>
                    <select
                      name="currentSoftware"
                      value={formData.currentSoftware}
                      onChange={handleChange}
                      className="mt-1 w-full rounded-xl border border-slate-200 p-3 text-sm bg-white text-slate-800"
                      disabled={status.submitting}
                    >
                      <option value="">Select current system...</option>
                      <option value="ShiftCare">ShiftCare (Switching)</option>
                      <option value="CareMaster">CareMaster</option>
                      <option value="SupportAbility">SupportAbility</option>
                      <option value="Lumary">Lumary</option>
                      <option value="Spreadsheets / Manual">Spreadsheets / Manual</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600">Inquiry Type</label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="mt-1 w-full rounded-xl border border-slate-200 p-3 text-sm bg-white text-slate-800"
                      disabled={status.submitting}
                    >
                      <option value="Demo">Book Live 1-on-1 Demo</option>
                      <option value="Pricing">Request Pricing Proposal</option>
                      <option value="Migration">Data Migration Assistance</option>
                      <option value="Support">Technical Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600">Message / Care Context</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-xl border border-slate-200 p-3 h-28 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-900"
                    placeholder="Tell us about your active participant count, worker team size, or migration timeline."
                    disabled={status.submitting}
                  />
                </div>

                {status.error && (
                  <p className="text-rose-600 text-xs font-semibold">{status.error}</p>
                )}

                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full py-4 rounded-xl bg-primary text-white font-bold hover:bg-[#0b3b47] transition-all shadow-md text-sm disabled:opacity-50"
                >
                  {status.submitting ? 'Submitting...' : 'Submit Inquiry'}
                </button>
              </>
            )}
          </form>

          {/* Australian Support & Onboarding Hub */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 flex flex-col justify-between shadow-sm space-y-6">
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Australian Support Team</p>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">What to Expect on Your Demo</h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                  Every 15-minute walkthrough is conducted live with an Australian NDIS practice specialist tailored to your specific service lines.
                </p>
              </div>

              <div className="space-y-3.5">
                {[
                  {
                    title: '1 Month Free 1-on-1 Support & Staff Training',
                    desc: 'Every plan includes a dedicated Australian onboarding specialist to train your team and guide your go-live.'
                  },
                  {
                    title: 'Live Practice Workflow Preview',
                    desc: 'See how deterministic PAPL 2025–26 billing, GPS mobile care, and Guardian™ AI note scoring operate on real shift workflows.'
                  },
                  {
                    title: 'Custom TCO & ROI Breakdown',
                    desc: 'Compare your exact current per-user software costs against our flat $25/participant/mo all-inclusive rate.'
                  },
                  {
                    title: 'Zero-Downtime Data Migration Plan',
                    desc: 'Learn how we seamlessly migrate your participants, staff credentials, and shift history from ShiftCare, CareMaster, or spreadsheets.'
                  },
                  {
                    title: '100% Australian Data Sovereignty',
                    desc: 'All participant health data, shift notes, and 7-year audit logs are securely hosted in Sydney AWS (ap-southeast-2).'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                      <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <div className="flex items-center gap-2 text-slate-600 text-xs">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Support Hours: <strong>Mon–Sun, 8am–7pm AEST</strong> (Response &lt; 1 business day)</span>
              </div>
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200/80 flex items-center gap-2 text-xs text-emerald-900 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>NDIS Quality & Safeguards Commission audit-ready architecture.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
