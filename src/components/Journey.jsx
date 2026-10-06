import React from 'react';
import { EDUCATION, EXPERIENCE } from '../data/portfolioData';

export default function Journey() {
  return (
    <section className="py-24 bg-canvas-base" id="journey">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-forest text-xs uppercase tracking-widest mb-2 font-bold">
            <span className="w-6 h-[2px] bg-amber"></span> Education &amp; Work
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-ink-primary">
            My <span className="text-amber">Academic and Professional</span> Journey
          </h2>
        </div>

        {/* 2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education Card */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-canvas-border shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full bg-amber-soft flex items-center justify-center text-forest">
                <span className="material-symbols-outlined text-[28px]">school</span>
              </div>
              <h3 className="text-2xl font-bold text-ink-primary">Education</h3>
            </div>

            <div className="space-y-8 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-canvas-muted">
              {EDUCATION.map((item, idx) => (
                <div key={idx} className="relative pl-8">
                  <span className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-amber border-2 border-white shadow-sm"></span>
                  <span className="text-xs font-bold text-forest">{item.period}</span>
                  <h4 className="text-lg font-bold text-ink-primary mt-1">{item.title}</h4>
                  <p className="text-sm text-ink-secondary mt-1">
                    {item.institution} • {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience Card */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-canvas-border shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full bg-amber-soft flex items-center justify-center text-forest">
                <span className="material-symbols-outlined text-[28px]">work</span>
              </div>
              <h3 className="text-2xl font-bold text-ink-primary">Work Experience</h3>
            </div>

            <div className="space-y-8 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-canvas-muted">
              {EXPERIENCE.map((item, idx) => (
                <div key={idx} className="relative pl-8">
                  <span className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-forest border-2 border-white shadow-sm"></span>
                  <span className="text-xs font-bold text-forest">{item.period}</span>
                  <h4 className="text-lg font-bold text-ink-primary mt-1">{item.title}</h4>
                  <p className="text-sm text-ink-secondary mt-1">
                    {item.company} • {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
