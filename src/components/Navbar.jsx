import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../data/portfolioData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl rounded-full z-50 transition-all duration-300">
      <div className={`flex justify-between items-center px-6 py-3.5 w-full rounded-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border border-canvas-border shadow-md' 
          : 'bg-white/90 backdrop-blur-md border border-canvas-border shadow-sm'
      }`}>
        {/* Brand Logo */}
        <a className="flex items-center gap-2.5 group" href="#hero" aria-label="Emmanuel Ohanusi Home">
          <div className="w-9 h-9 rounded-full bg-forest flex items-center justify-center text-amber font-extrabold text-base shadow-sm transition-transform duration-300 group-hover:scale-105">
            EO
          </div>
          <span className="font-bold text-ink-primary tracking-tight text-lg">
            Emmanuel <span className="text-amber font-extrabold">Ohanusi</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-semibold text-ink-secondary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition-colors duration-200 hover:text-forest ${
                link.highlight ? 'text-forest font-bold' : ''
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Trailing Action & Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <a
            className="hidden sm:inline-flex items-center gap-2.5 bg-forest hover:bg-forest-deep text-white pl-5 pr-2 py-2 rounded-full text-sm font-semibold shadow-sm active:scale-95 transition-all group"
            href="#contact"
          >
            <span>Let's Talk</span>
            <span className="w-7 h-7 rounded-full bg-amber flex items-center justify-center text-forest font-bold transition-transform duration-300 group-hover:translate-x-0.5">
              <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
            </span>
          </a>

          {/* Hamburger Menu Button for Mobile/Tablet */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-full bg-canvas-muted flex items-center justify-center text-forest hover:bg-amber transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Accessible Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 bg-white/95 backdrop-blur-xl border border-canvas-border rounded-3xl p-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-base font-semibold text-ink-primary hover:bg-canvas-muted hover:text-forest transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="material-symbols-outlined text-[18px] text-ink-muted">chevron_right</span>
              </a>
            ))}
            <div className="pt-4 border-t border-canvas-border flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2.5 bg-forest text-white py-3 rounded-full text-sm font-semibold shadow-md active:scale-95 transition-all"
              >
                <span>Let's Talk</span>
                <span className="w-6 h-6 rounded-full bg-amber flex items-center justify-center text-forest font-bold">
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
