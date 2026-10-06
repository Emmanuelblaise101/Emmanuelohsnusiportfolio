import React from 'react';
import { ABOUT_STATS, ABOUT_TAGS } from '../data/portfolioData';

export default function About({ onOpenCV }) {
  return (
    <section className="py-24 bg-forest text-white relative overflow-hidden" id="about">
      {/* Ambient background glow */}
      <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-amber/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Column: Circular Portrait & Badges */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[380px] md:h-[380px]">
            {/* Mint Arc Background */}
            <div className="absolute inset-0 rounded-full bg-amber opacity-95"></div>

            {/* Portrait Container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-forest shadow-2xl bg-forest-dark flex items-center justify-center">
              <img
                alt="About Emmanuel"
                className="w-full h-full object-cover object-center scale-105"
                src="/assets/images/about-portrait.png"
                loading="lazy"
              />
            </div>

            {/* Orbiting Tags */}
            {ABOUT_TAGS.map((tag, idx) => (
              <div
                key={idx}
                className={`absolute ${tag.position} px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md z-10 select-none transition-transform duration-300 hover:scale-105 ${
                  tag.color === 'amber'
                    ? 'bg-amber text-forest'
                    : 'bg-white text-forest'
                }`}
              >
                {tag.text}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Narrative & Stats */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          <div className="flex items-center gap-2 text-amber text-xs uppercase tracking-widest font-bold">
            <span className="w-6 h-[2px] bg-amber"></span> About Me
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Who is <span className="text-amber">Emmanuel Ohanusi?</span>
          </h2>
          
          <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl">
            I'm a passionate product designer and web application specialist focused on creating thoughtful digital experiences. I combine research, strategy, and engineering precision to solve real problems and build products that people enjoy using.
          </p>

          {/* 4 Metric Counters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 w-full border-y border-white/15">
            {ABOUT_STATS.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <div className="text-3xl sm:text-4xl font-extrabold text-amber">
                  {stat.value}
                </div>
                <div className="text-xs text-white/70 uppercase tracking-wider mt-1 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Action Button & Handwritten Signature */}
          <div className="flex flex-wrap items-center justify-between w-full pt-4 gap-6">
            <button
              onClick={onOpenCV}
              className="inline-flex items-center gap-3 bg-amber text-forest font-bold pl-6 pr-2 py-2.5 rounded-full text-sm shadow-md hover:bg-amber-warm transition-all group cursor-pointer"
            >
              <span>Download CV</span>
              <span className="w-8 h-8 rounded-full bg-forest text-amber flex items-center justify-center transition-transform duration-300 group-hover:translate-y-0.5">
                <span className="material-symbols-outlined text-[18px]">download</span>
              </span>
            </button>

            <span className="font-signature text-3xl sm:text-4xl text-amber tracking-wider select-none">
              Emmanuel Ohanusi
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
