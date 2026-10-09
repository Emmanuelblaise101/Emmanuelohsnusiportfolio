import React from 'react';
import { CONTACT_INFO } from '../data/portfolioData';
import { GitHubIcon, LinkedInIcon, InstagramIcon } from './SocialIcons';

export default function Hero({ onOpenCV }) {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-canvas-base overflow-hidden" id="hero">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Hero Left Column */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          {/* Outlined Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber bg-amber-soft text-forest text-xs font-bold tracking-wider shadow-sm">
            <span role="img" aria-label="Waving hand">👋</span> HELLO THERE!
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink-primary tracking-tight leading-[1.15]">
            You know what your business needs.{' '}
            <span className="text-amber">Let's build it.</span>
          </h1>

          {/* Short Bio */}
          <p className="text-base sm:text-lg text-ink-secondary max-w-xl leading-relaxed">
            I help businesses and founders move from concepts and unfinished plans to usable websites and web applications that solve real problems, with a focus on usability, functionality, and getting the details right.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              className="inline-flex items-center gap-3 bg-forest hover:bg-forest-deep text-white pl-6 pr-2 py-2.5 rounded-full text-sm font-semibold shadow-md active:scale-95 transition-all group"
              href="#contact"
            >
              <span>Discuss your project</span>
              <span className="w-8 h-8 rounded-full bg-amber flex items-center justify-center text-forest font-bold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
              </span>
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-forest/20 text-forest hover:border-forest hover:bg-forest hover:text-white font-semibold text-sm active:scale-95 transition-all cursor-pointer"
            >
              <span>View my work</span>
            </a>
          </div>

          {/* Social Proof Icons */}
          <div className="pt-4 flex items-center gap-4 flex-wrap">
            <span className="text-xs font-bold uppercase tracking-wider text-ink-muted">
              FIND ME ON:
            </span>
            <div className="flex items-center gap-2">
              <a
                className="w-9 h-9 rounded-full bg-canvas-muted flex items-center justify-center text-forest hover:bg-amber hover:text-forest transition-all shadow-sm group"
                href={CONTACT_INFO.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                title="GitHub"
              >
                <GitHubIcon className="w-4 h-4 transition-transform group-hover:scale-110" />
              </a>
              <a
                className="w-9 h-9 rounded-full bg-canvas-muted flex items-center justify-center text-forest hover:bg-amber hover:text-forest transition-all shadow-sm group"
                href={CONTACT_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                title="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4 transition-transform group-hover:scale-110" />
              </a>
              <a
                className="w-9 h-9 rounded-full bg-canvas-muted flex items-center justify-center text-forest hover:bg-amber hover:text-forest transition-all shadow-sm group"
                href={CONTACT_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4 transition-transform group-hover:scale-110" />
              </a>
            </div>
          </div>
        </div>

        {/* Hero Right Column: Graphic Silhouette & Portrait */}
        <div className="lg:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0">
          <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[400px] md:h-[400px]">
            {/* Mint Circular Backdrop */}
            <div className="absolute inset-0 rounded-full bg-amber transform translate-x-2 -translate-y-2 opacity-95"></div>
            <div className="absolute -inset-4 rounded-full border border-amber/40 pointer-events-none"></div>

            {/* Portrait Frame */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl bg-forest-dark flex items-center justify-center">
              <img
                alt="Emmanuel Ohanusi Portrait"
                className="w-full h-full object-cover object-center scale-105"
                src="/assets/images/hero-portrait.png"
                loading="eager"
              />
            </div>

            {/* Rotating Circular Badge */}
            <div className="absolute -top-3 -right-3 sm:-right-4 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-forest text-white flex items-center justify-center shadow-xl border-2 border-amber z-10">
              <div className="relative w-full h-full flex items-center justify-center">
                <svg className="w-full h-full animate-spin-slow p-1" viewBox="0 0 100 100">
                  <path
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="transparent"
                    id="heroBadgePath"
                  ></path>
                  <text className="text-[9.5px] font-bold uppercase fill-amber tracking-[0.2em]">
                    <textPath href="#heroBadgePath">
                      HIRE ME • WEB DEVELOPER •
                    </textPath>
                  </text>
                </svg>
                <div className="absolute w-8 h-8 rounded-full bg-amber flex items-center justify-center text-forest font-bold">
                  <span className="material-symbols-outlined text-[16px]">star</span>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute -bottom-2 -left-3 sm:-left-6 bg-amber text-forest px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg flex items-center gap-2 border border-amber-light z-10">
              <span className="w-2.5 h-2.5 rounded-full bg-forest animate-pulse"></span>
              Full Stack Engineer
            </div>

            <div className="absolute bottom-14 sm:bottom-16 -right-2 sm:-right-6 bg-forest text-white px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg flex items-center gap-2 border border-amber/40 z-10">
              <span className="material-symbols-outlined text-amber text-[18px]">verified</span>
              UI/UX Specialist
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
