import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const contactInfo = {
  title: 'Get in Touch',
  description: 'Whether you need a pricing proposal, safeguarding workshop, or urgent support, we’re here to help.',
  email: 'support@kinlycarepro.com',
  phone: '+61 427 884 336',
  hours: 'Monday - Sunday, 8am - 7pm AEST'
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
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
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Form submission failed');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus({ submitting: false, submitted: false, error: err.message });
    }
  };

  return (
    <>
      <SEO
        title="Contact Us - Australian NDIS Software Support | Kinly CarePro"
        description="Book a demo or speak with our Australian support team. We help NDIS providers implement compliant software in 48 hours. Support available 8am-7pm AEST."
        keywords="contact Kinly CarePro, NDIS software demo, Australian NDIS support, NDIS software contact, care management software help, Melbourne NDIS software"
        url="https://kinlycarepro.com/contact"
      />
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-white text-center px-4">
        <p className="text-primary font-semibold tracking-[0.4em] uppercase text-xs">Contact</p>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">Talk to the Kinly CarePro team.</h1>
        <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
          Whether you need a pricing proposal, safeguarding workshop, or urgent support, we respond within one business day.
        </p>
      </section>

      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 p-8 md:p-12 bg-slate-50 flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-sm">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-slate-900">{contactInfo.title}</h2>
              <p className="text-slate-600 mt-4 text-lg">{contactInfo.description}</p>
            </div>
            <div className="flex flex-col gap-6 w-full md:w-auto min-w-[280px]">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Email</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-lg font-semibold text-slate-900 hover:text-primary transition-colors">{contactInfo.email}</a>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Phone</p>
                  <a href={`tel:${contactInfo.phone.replace(/ /g, '')}`} className="text-lg font-semibold text-slate-900 hover:text-primary transition-colors">{contactInfo.phone}</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-slate-400">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Hours</p>
                  <p className="text-sm font-medium text-slate-600">{contactInfo.hours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm space-y-4">
            {status.submitted ? (
              <div className="p-6 bg-green-50 border border-green-200 rounded-2xl text-center">
                <p className="text-green-800 font-semibold text-lg">Message sent successfully!</p>
                <p className="text-green-600 mt-2">Thank you for reaching out. Our team will be in touch within one business day.</p>
                <button
                  onClick={() => setStatus({ ...status, submitted: false })}
                  className="mt-4 text-sm text-green-700 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-slate-900">Send us a message</h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-slate-600">Full name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 w-full rounded-xl border border-slate-200 p-3"
                      placeholder="Alex Taylor"
                      required
                      disabled={status.submitting}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-slate-600">Organization Name</label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="mt-1 w-full rounded-xl border border-slate-200 p-3"
                      placeholder="Care Solutions Pty Ltd"
                      required
                      disabled={status.submitting}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-slate-600">Work email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 w-full rounded-xl border border-slate-200 p-3"
                      placeholder="alex@provider.com"
                      required
                      disabled={status.submitting}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-slate-600">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 w-full rounded-xl border border-slate-200 p-3"
                      placeholder="+61 ..."
                      disabled={status.submitting}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-slate-600">Provider Type</label>
                    <select
                      name="providerType"
                      value={formData.providerType}
                      onChange={handleChange}
                      className="mt-1 w-full rounded-xl border border-slate-200 p-3 bg-white"
                      disabled={status.submitting}
                      required
                    >
                      <option value="">Select type...</option>
                      <option value="NDIS Registered Provider">NDIS Registered Provider</option>
                      <option value="Unregistered Provider">Unregistered Provider</option>
                      <option value="Support Coordinator">Support Coordinator</option>
                      <option value="Plan Manager">Plan Manager</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-slate-600">Est. Participant Count</label>
                    <input
                      type="number"
                      name="participantCount"
                      value={formData.participantCount}
                      onChange={handleChange}
                      className="mt-1 w-full rounded-xl border border-slate-200 p-3"
                      placeholder="e.g. 50"
                      disabled={status.submitting}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-600">How can we help?</label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-xl border border-slate-200 p-3 mb-2 bg-white"
                    disabled={status.submitting}
                  >
                    <option value="Demo">Book a Demo</option>
                    <option value="Pricing">Request Pricing</option>
                    <option value="Support">Technical Support</option>
                    <option value="Partnership">Partnership Inquiry</option>
                    <option value="Other">Other</option>
                  </select>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-xl border border-slate-200 p-3 h-32"
                    placeholder="Tell us about your team, compliance goals, or integration needs."
                    required
                    disabled={status.submitting}
                  />
                </div>
                {status.error && (
                  <p className="text-red-500 text-sm">{status.error}</p>
                )}
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full px-4 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-[#0b3b47] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status.submitting ? 'Sending...' : 'Submit'}
                </button>
              </>
            )}
          </form>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 flex flex-col gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Headquarters</p>
              <p className="text-2xl font-semibold text-slate-900 mt-2">10 Bridgewater Avenue, Kialla, 3631, VIC</p>
              <p className="text-slate-600 mt-2">By appointment only • Hybrid HQ</p>
            </div>
            <div className="flex items-center gap-3 text-slate-600">
              <Clock className="w-4 h-4 text-primary" /> Monday - Friday, 8am - 7pm AEST
            </div>
            <div className="rounded-2xl overflow-hidden h-80 border border-slate-200 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3209.967109822118!2d145.4032042!3d-36.434178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad880d4ae9fcad9%3A0xff4def968e208f3a!2s10%20Bridgewater%20Ave%2C%20Kialla%20VIC%203631!5e0!3m2!1sen!2sau!4v1771468408510!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kinly CarePro Headquarters"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
