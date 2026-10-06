import React, { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../data/portfolioData';

export default function Contact({ prefilledTier }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    projectType: 'Mobile App Design',
    budget: '$5,000 – $10,000',
    timeline: 'Immediately (Within 2 weeks)',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | submitted | error
  const [formFeedback, setFormFeedback] = useState('');

  // Pre-fill fields when coming from pricing tiers
  useEffect(() => {
    if (prefilledTier) {
      if (prefilledTier === 'basic') {
        setFormData((prev) => ({
          ...prev,
          budget: '$1,000 – $5,000',
          message: prev.message || 'Hi Emmanuel, I would like to inquire about the Basic Package ($80).',
        }));
      } else if (prefilledTier === 'professional') {
        setFormData((prev) => ({
          ...prev,
          budget: '$5,000 – $10,000',
          message: prev.message || 'Hi Emmanuel, I am interested in the Professional Package ($960).',
        }));
      } else if (prefilledTier === 'premium') {
        setFormData((prev) => ({
          ...prev,
          budget: '$10,000 – $25,000',
          message: prev.message || 'Hi Emmanuel, I would like to discuss the Premium Package ($2,280).',
        }));
      }
    }
  }, [prefilledTier]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setStatus('error');
      setFormFeedback('Please provide your full name.');
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setStatus('error');
      setFormFeedback('Please enter a valid email address.');
      return;
    }

    if (!formData.message.trim()) {
      setStatus('error');
      setFormFeedback('Please describe your project or requirements.');
      return;
    }

    setStatus('submitting');

    setTimeout(() => {
      setStatus('submitted');
      setFormFeedback('Inquiry compiled successfully!');
    }, 800);
  };

  const handleSendViaMailClient = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} — ${formData.fullName}`);
    const body = encodeURIComponent(
      `Name: ${formData.fullName}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\n\nProject Details:\n${formData.message}`
    );
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-24 bg-canvas-base" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Contact Info Left Column */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-forest text-xs uppercase tracking-widest mb-2 font-bold">
              <span className="w-6 h-[2px] bg-amber"></span> Contact Us
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-ink-primary mb-4">
              Let's Talk for <span className="text-amber">Your Next Projects</span>
            </h2>
            <p className="text-ink-secondary text-sm sm:text-base leading-relaxed mb-8">
              Have a project in mind? Tell me what you're building, and let's explore how thoughtful design can bring your ideas to life.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-soft flex items-center justify-center text-forest shadow-sm">
                  <span className="material-symbols-outlined text-[22px]">mail</span>
                </div>
                <div>
                  <div className="text-xs text-ink-muted font-bold uppercase tracking-wider">Email Address</div>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-base font-bold text-ink-primary hover:text-forest transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-soft flex items-center justify-center text-forest shadow-sm">
                  <span className="material-symbols-outlined text-[22px]">location_on</span>
                </div>
                <div>
                  <div className="text-xs text-ink-muted font-bold uppercase tracking-wider">Location</div>
                  <div className="text-base font-bold text-ink-primary">{CONTACT_INFO.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-soft flex items-center justify-center text-forest shadow-sm">
                  <span className="material-symbols-outlined text-[22px]">schedule</span>
                </div>
                <div>
                  <div className="text-xs text-ink-muted font-bold uppercase tracking-wider">Availability</div>
                  <div className="text-base font-bold text-ink-primary">{CONTACT_INFO.availability}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <div className="p-4 rounded-xl bg-canvas-muted border border-canvas-border text-xs text-ink-secondary leading-relaxed">
              <span className="font-bold text-forest">Steps Involved:</span> Share your project idea → Discuss goals and timeline → Receive tailored design proposal.
            </div>
          </div>
        </div>

        {/* Contact Form Right Column */}
        <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-2xl border border-canvas-border shadow-sm">
          {status === 'submitted' ? (
            <div className="py-8 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-amber-soft text-forest mx-auto flex items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-[36px] text-forest">check_circle</span>
              </div>
              <h3 className="text-2xl font-bold text-ink-primary">Inquiry Ready to Dispatch</h3>
              <p className="text-sm text-ink-secondary max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. To ensure direct, verified delivery to Emmanuel's inbox without third-party email leakage, dispatch via your mail client:
              </p>

              <div className="p-4 bg-canvas-muted rounded-xl text-left text-xs space-y-2 border border-canvas-border font-mono">
                <div><strong className="text-forest">To:</strong> {CONTACT_INFO.email}</div>
                <div><strong className="text-forest">Project:</strong> {formData.projectType} ({formData.budget})</div>
                <div><strong className="text-forest">Timeline:</strong> {formData.timeline}</div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <button
                  onClick={handleSendViaMailClient}
                  className="inline-flex items-center gap-2.5 bg-forest hover:bg-forest-deep text-white px-6 py-3 rounded-full text-sm font-bold shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">send</span>
                  <span>Open in Mail Client</span>
                </button>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-6 py-3 rounded-full border border-canvas-border text-ink-secondary hover:text-forest text-sm font-semibold transition-all cursor-pointer"
                >
                  Edit Information
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {status === 'error' && (
                <div className="p-3 bg-red-50 text-red-700 text-xs font-semibold rounded-xl border border-red-200">
                  {formFeedback}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold text-ink-primary mb-2">
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-canvas-muted border border-canvas-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-forest text-ink-primary"
                    placeholder="e.g. John Doe"
                    required
                    type="text"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-ink-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-canvas-muted border border-canvas-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-forest text-ink-primary"
                    placeholder="example@gmail.com"
                    required
                    type="email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="projectType" className="block text-xs font-bold text-ink-primary mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-canvas-muted border border-canvas-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-forest text-ink-primary"
                  >
                    <option>Mobile App Design</option>
                    <option>Website Design</option>
                    <option>Dashboard &amp; SaaS</option>
                    <option>Design System</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-xs font-bold text-ink-primary mb-2">
                    Estimated Budget *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-canvas-muted border border-canvas-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-forest text-ink-primary"
                  >
                    <option>$1,000 – $5,000</option>
                    <option>$5,000 – $10,000</option>
                    <option>$10,000 – $25,000</option>
                    <option>$25,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="timeline" className="block text-xs font-bold text-ink-primary mb-2">
                  Project Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full bg-canvas-muted border border-canvas-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-forest text-ink-primary"
                >
                  <option>Immediately (Within 2 weeks)</option>
                  <option>1 – 2 Months</option>
                  <option>3+ Months</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-ink-primary mb-2">
                  Message or Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-canvas-muted border border-canvas-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-forest text-ink-primary"
                  placeholder="Describe your project, objectives, and any special requirements..."
                  required
                  rows={4}
                ></textarea>
              </div>

              <button
                disabled={status === 'submitting'}
                className="inline-flex items-center gap-3 bg-forest hover:bg-forest-deep text-white font-bold pl-6 pr-2 py-3 rounded-full text-sm shadow-md active:scale-95 transition-all group disabled:opacity-70 cursor-pointer"
                type="submit"
              >
                <span>{status === 'submitting' ? 'Preparing Inquiry...' : 'Send Message'}</span>
                <span className="w-8 h-8 rounded-full bg-amber flex items-center justify-center text-forest transition-transform duration-300 group-hover:translate-x-0.5">
                  <span className="material-symbols-outlined text-[18px]">
                    {status === 'submitting' ? 'hourglass_top' : 'arrow_forward'}
                  </span>
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
