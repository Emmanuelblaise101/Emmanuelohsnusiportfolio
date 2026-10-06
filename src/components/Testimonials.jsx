import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/portfolioData';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1); // Michael Anderson (index 1) default elevated

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-canvas-muted" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-forest text-xs uppercase tracking-widest mb-2 font-bold">
            <span className="w-6 h-[2px] bg-amber"></span> Clients Testimonials
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-ink-primary">
            The Impact of My Work: <span className="text-amber">Client Testimonials</span>
          </h2>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => {
            const isElevated = idx === activeIndex;
            return (
              <div
                key={t.id}
                onClick={() => setActiveIndex(idx)}
                className={`bg-white p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                  isElevated
                    ? 'border-2 border-amber shadow-lg md:-translate-y-2'
                    : 'border border-canvas-border shadow-sm hover:border-amber/50'
                }`}
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[20px] text-amber fill-1">
                        star
                      </span>
                    ))}
                    <span className="text-xs font-bold text-ink-primary ml-2">{t.rating}</span>
                  </div>

                  <p className="text-ink-secondary text-sm leading-relaxed mb-6 italic">
                    {t.quote}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-canvas-border">
                  <img
                    alt={t.author}
                    className="w-11 h-11 rounded-full object-cover border border-canvas-border"
                    src={t.avatar}
                    loading="lazy"
                  />
                  <div>
                    <div className="text-sm font-bold text-ink-primary">{t.author}</div>
                    <div className="text-xs text-ink-muted">{t.role}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Navigation Controls with Active Indicators */}
        <div className="flex flex-col items-center justify-center gap-4 mt-12">
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-forest text-white flex items-center justify-center hover:bg-forest-deep active:scale-95 transition-all shadow-sm cursor-pointer"
              aria-label="Previous testimonial"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            </button>

            {/* Indicator dots */}
            <div className="flex items-center gap-2 px-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === activeIndex ? 'w-8 bg-amber' : 'w-2.5 bg-canvas-border'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-amber text-forest flex items-center justify-center font-bold hover:bg-amber-warm active:scale-95 transition-all shadow-sm cursor-pointer"
              aria-label="Next testimonial"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
