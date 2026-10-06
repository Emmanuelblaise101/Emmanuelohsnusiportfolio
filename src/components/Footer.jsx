import React, { useState } from 'react';
import { CONTACT_INFO } from '../data/portfolioData';

export default function Footer({ onOpenLegal }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
  };

  return (
    <footer className="bg-forest-deep text-white pt-20 pb-12 border-t border-forest-light/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Invitation Area */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-16 border-b border-white/10">
          <div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Let's <span className="text-amber">Connect</span> there
            </h3>
            <p className="text-white/60 text-sm mt-1">
              Ready to create something memorable together?
            </p>
          </div>
          <a
            className="inline-flex items-center gap-3 bg-amber text-forest font-bold pl-6 pr-2 py-2.5 rounded-full text-sm hover:bg-amber-warm transition-all shadow-md group"
            href="#contact"
          >
            <span>Let's Talk</span>
            <span className="w-8 h-8 rounded-full bg-forest flex items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-0.5">
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </span>
          </a>
        </div>

        {/* 4 Columns Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Col 1: Brand & Bio */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full bg-forest flex items-center justify-center text-amber font-bold text-base border border-amber/40 shadow-sm">
                EO
              </div>
              <span className="font-bold text-white text-lg">
                Emmanuel <span className="text-amber">Ohanusi</span>
              </span>
            </div>
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-6">
              Product designer and web app developer creating meaningful digital experiences through thoughtful research, UI engineering, and design systems.
            </p>
            <div className="flex items-center gap-2.5">
              <a
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-amber hover:text-forest transition-colors shadow-sm"
                href={CONTACT_INFO.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <span className="material-symbols-outlined text-[16px]">code</span>
              </a>
              <a
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-amber hover:text-forest transition-colors shadow-sm"
                href={CONTACT_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <span className="material-symbols-outlined text-[16px]">link</span>
              </a>
              <a
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-amber hover:text-forest transition-colors shadow-sm"
                href={CONTACT_INFO.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
              >
                <span className="material-symbols-outlined text-[16px]">share</span>
              </a>
              <a
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-amber hover:text-forest transition-colors shadow-sm"
                href={CONTACT_INFO.social.dribbble}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dribbble"
              >
                <span className="material-symbols-outlined text-[16px]">palette</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/70">
              <li>
                <a className="hover:text-amber transition-colors" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-amber transition-colors" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="hover:text-amber transition-colors" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="hover:text-amber transition-colors" href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a className="hover:text-amber transition-colors" href="#blogs">
                  Blogs
                </a>
              </li>
              <li>
                <a className="hover:text-amber transition-colors" href="#faq">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/70">
              <li>{CONTACT_INFO.phone}</li>
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-amber transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>{CONTACT_INFO.address}</li>
              <li className="pt-2 text-amber font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber animate-pulse"></span>
                <span>{CONTACT_INFO.location}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber mb-4">
              Get the latest information
            </h4>
            <p className="text-white/70 text-xs leading-relaxed mb-4">
              Subscribe to receive insights, design systems breakdowns, and case study updates.
            </p>

            {subscribed ? (
              <div className="p-3 bg-amber/10 border border-amber/30 rounded-xl text-xs text-amber font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span>Subscribed! Welcome aboard.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex items-center bg-forest rounded-full p-1 border border-white/10 focus-within:border-amber/60 transition-colors">
                  <input
                    className="bg-transparent text-white px-4 py-2 text-xs focus:outline-none w-full placeholder-white/40"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    type="email"
                  />
                  <button
                    className="w-8 h-8 rounded-full bg-amber text-forest flex items-center justify-center font-bold hover:bg-amber-warm transition-colors flex-shrink-0 cursor-pointer"
                    type="submit"
                    aria-label="Subscribe to newsletter"
                  >
                    <span className="material-symbols-outlined text-[16px]">send</span>
                  </button>
                </div>
                {error && <p className="text-[11px] text-red-400 pl-3">{error}</p>}
              </form>
            )}
          </div>
        </div>

        {/* Bottom Copyright Bar with System Status */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <div className="flex items-center gap-4 flex-wrap">
            <div>
              Copyright © 2026 <span className="text-white font-semibold">Emmanuel Ohanusi</span>. All Rights Reserved.
            </div>
            {/* System Status Pill */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-forest border border-white/10 text-[11px] font-mono text-white/70">
              <span className="w-1.5 h-1.5 rounded-full bg-amber animate-ping"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber -ml-3"></span>
              <span>All Systems Operational</span>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <button
              onClick={() => onOpenLegal && onOpenLegal('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              User Terms &amp; Conditions
            </button>
            <span>|</span>
            <button
              onClick={() => onOpenLegal && onOpenLegal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>|</span>
            <a className="text-amber hover:underline font-semibold" href="#hero">
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
