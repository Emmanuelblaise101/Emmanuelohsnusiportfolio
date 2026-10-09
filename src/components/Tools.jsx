import React from 'react';
import { TOOLS } from '../data/portfolioData';
import {
  FigmaLogo,
  BubbleLogo,
  SquarespaceLogo,
  ClaudeCodeLogo,
  SupabaseLogo,
  AntigravityLogo,
} from './ToolLogos';

const LOGO_COMPONENTS = {
  figma: FigmaLogo,
  bubble: BubbleLogo,
  squarespace: SquarespaceLogo,
  claude: ClaudeCodeLogo,
  supabase: SupabaseLogo,
  antigravity: AntigravityLogo,
};

export default function Tools() {
  return (
    <section className="py-24 bg-canvas-base" id="tools">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Section Eyebrow & Title */}
        <div className="inline-flex items-center gap-2 text-forest text-xs uppercase tracking-widest mb-3 font-bold">
          <span className="w-6 h-[2px] bg-amber"></span> My Favorite Tools
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-ink-primary mb-4">
          Exploring the <span className="text-amber">Tools</span> Behind My Work
        </h2>
        <p className="text-ink-secondary text-sm md:text-base max-w-2xl mx-auto mb-16">
          From high-fidelity UI design systems to AI-powered agentic coding and full-stack architecture, these are the instruments I rely on every day.
        </p>

        {/* 6 Tool Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {TOOLS.map((tool) => {
            const LogoComponent = LOGO_COMPONENTS[tool.id] || FigmaLogo;

            return (
              <div
                key={tool.id}
                className={`bg-white p-6 rounded-2xl border border-canvas-border flex flex-col items-center justify-between shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group cursor-default relative overflow-hidden ${tool.bgHover}`}
              >
                {/* Subtle Hover Gradient Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${tool.glowColor} 0%, transparent 70%)`,
                  }}
                />

                {/* Circular Logo Container */}
                <div className="w-16 h-16 rounded-2xl bg-canvas-muted flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:shadow-md border border-black/[0.04]">
                  <LogoComponent className="w-8 h-8" />
                </div>

                {/* Proficiency Percentage */}
                <span className="text-2xl font-extrabold text-ink-primary tracking-tight">
                  {tool.percentage}
                </span>

                {/* Tool Name */}
                <span className="text-sm font-bold text-ink-primary mt-1">
                  {tool.name}
                </span>

                {/* Category Subtitle */}
                <span className="text-[11px] font-medium text-ink-muted mt-0.5">
                  {tool.category}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
