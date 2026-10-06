import React, { useState } from 'react';
import { FAQS } from '../data/portfolioData';

export default function FAQ() {
  const [openId, setOpenId] = useState(2); // Item 2 open by default as in PRD/design

  const toggleFAQ = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-24 bg-forest text-white" id="faq">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-amber text-xs uppercase tracking-widest mb-2 font-bold">
            <span className="w-6 h-[2px] bg-amber"></span> FAQs
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Questions? <span className="text-amber">Look here.</span>
          </h2>
        </div>

        {/* Accordion Rows */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-amber text-forest border-2 border-amber-light shadow-lg'
                    : 'bg-forest-dark/80 text-white border border-white/10 hover:border-white/25'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex justify-between items-center p-6 text-left font-bold text-base select-none cursor-pointer focus:outline-none"
                >
                  <span className="pr-4">{faq.question}</span>
                  <span
                    className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-transform duration-300 ${
                      isOpen
                        ? 'bg-forest text-amber rotate-180'
                        : 'bg-white/10 text-amber'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {isOpen ? 'remove' : 'add'}
                    </span>
                  </span>
                </button>

                {isOpen && (
                  <div
                    className={`px-6 pb-6 text-sm leading-relaxed transition-all duration-300 animate-in fade-in duration-200 ${
                      isOpen ? 'text-forest/90 font-medium' : 'text-white/80'
                    }`}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
