import React from 'react';
import { PRICING_TIERS } from '../data/portfolioData';

export default function Pricing({ onSelectTier }) {
  return (
    <section className="py-24 bg-forest text-white" id="pricing">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-amber text-xs uppercase tracking-widest mb-2 font-bold">
              <span className="w-6 h-[2px] bg-amber"></span> Pricing Table
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              My <span className="text-amber">Pricing Models</span>
            </h2>
            <p className="text-white/70 text-sm sm:text-base mt-2">
              Flexible design packages tailored to your project's goals and requirements.
            </p>
          </div>
          <a
            className="inline-flex items-center gap-3 bg-amber text-forest font-bold pl-6 pr-2 py-2 rounded-full text-sm self-start md:self-auto hover:bg-amber-warm transition-all shadow-sm group"
            href="#contact"
            onClick={() => onSelectTier && onSelectTier('professional')}
          >
            <span>Get Started</span>
            <span className="w-7 h-7 rounded-full bg-forest flex items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-0.5">
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </span>
          </a>
        </div>

        {/* 3 Tier Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={
                tier.popular
                  ? 'bg-amber text-forest rounded-2xl p-8 border-2 border-amber-light shadow-2xl flex flex-col justify-between relative transform lg:-translate-y-3'
                  : 'bg-forest-dark/70 rounded-2xl p-8 border border-white/10 flex flex-col justify-between hover:border-amber/50 transition-all duration-300'
              }
            >
              {tier.badge && (
                <div className="absolute -top-3.5 right-6 bg-forest text-amber px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                  {tier.badge}
                </div>
              )}

              <div>
                <div className="flex justify-between items-start mb-6">
                  <span
                    className={`text-sm font-bold ${
                      tier.popular ? 'text-forest' : 'text-white/80'
                    }`}
                  >
                    {tier.name}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      tier.popular
                        ? 'bg-forest text-amber'
                        : 'bg-white/10 text-amber'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      {tier.popular ? 'star' : 'north_east'}
                    </span>
                  </span>
                </div>

                <div className="flex items-baseline gap-1 mb-2">
                  <span
                    className={`text-4xl font-extrabold ${
                      tier.popular ? 'text-forest' : 'text-amber'
                    }`}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={`text-xs ${
                      tier.popular ? 'text-forest/80 font-semibold' : 'text-white/60'
                    }`}
                  >
                    {tier.frequency}
                  </span>
                </div>

                <p
                  className={`text-xs mb-6 ${
                    tier.popular ? 'text-forest/80 font-medium' : 'text-white/70'
                  }`}
                >
                  {tier.description}
                </p>

                <ul
                  className={`space-y-3.5 mb-8 text-sm ${
                    tier.popular ? 'text-forest font-medium' : 'text-white/80'
                  }`}
                >
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span
                        className={`material-symbols-outlined text-[18px] ${
                          tier.popular ? 'text-forest' : 'text-amber'
                        }`}
                      >
                        check_circle
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                onClick={() => onSelectTier && onSelectTier(tier.id)}
                className={`w-full py-3.5 rounded-full font-bold text-center text-sm transition-all duration-200 block ${
                  tier.popular
                    ? 'bg-forest hover:bg-forest-deep text-white shadow-md active:scale-95'
                    : 'border border-white/20 text-white hover:bg-white/10 active:scale-95'
                }`}
              >
                {tier.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
