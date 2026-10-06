import React from 'react';

export default function MarqueeStrip({ items, isSecondary = false }) {
  // Repeat items to ensure continuous seamless loop
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <section 
      className={`bg-amber overflow-hidden border-y border-amber-warm/60 shadow-inner ${
        isSecondary ? 'py-3.5' : 'py-4'
      }`}
      aria-label="Skill marquee"
    >
      <div className="relative flex items-center select-none overflow-hidden">
        <div className={`animate-marquee whitespace-nowrap flex items-center gap-8 text-forest font-extrabold uppercase tracking-wider ${
          isSecondary ? 'text-sm md:text-base' : 'text-base md:text-lg'
        }`}>
          {repeatedItems.map((item, index) => (
            <React.Fragment key={index}>
              <span>{item}</span>
              <span className="text-forest/60 select-none">✻</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
