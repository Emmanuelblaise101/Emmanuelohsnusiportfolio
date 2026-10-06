import React from 'react';
import { TOOLS } from '../data/portfolioData';

export default function Tools() {
  return (
    <section className="py-24 bg-canvas-base" id="tools">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Section Eyebrow & Title */}
        <div className="inline-flex items-center gap-2 text-forest text-xs uppercase tracking-widest mb-3 font-bold">
          <span className="w-6 h-[2px] bg-amber"></span> My Favorite Tools
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-ink-primary mb-16">
          Exploring the <span className="text-amber">Tools</span> Behind My Designs
        </h2>

        {/* 6 Tool Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {TOOLS.map((tool) => (
            <div
              key={tool.name}
              className="bg-white p-6 rounded-2xl border border-canvas-border flex flex-col items-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 text-forest font-bold transition-transform duration-300 group-hover:scale-110 ${
                  tool.bgSoft ? 'bg-amber-soft' : 'bg-canvas-muted'
                }`}
              >
                <span className="material-symbols-outlined text-[32px]">{tool.icon}</span>
              </div>
              <span className="text-2xl font-extrabold text-ink-primary">{tool.percentage}</span>
              <span className="text-sm font-semibold text-ink-secondary mt-1">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
