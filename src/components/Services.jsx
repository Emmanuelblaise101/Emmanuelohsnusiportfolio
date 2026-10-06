import React from 'react';
import { SERVICES } from '../data/portfolioData';

export default function Services({ onSelectService }) {
  return (
    <section className="py-24 bg-canvas-muted" id="services">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-forest text-xs uppercase tracking-widest mb-2 font-bold">
              <span className="w-6 h-[2px] bg-amber"></span> Services
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-ink-primary">
              <span className="text-forest">Services</span> <span className="text-amber">I Provide</span>
            </h2>
          </div>
          <a
            className="inline-flex items-center gap-3 bg-forest hover:bg-forest-deep text-white pl-6 pr-2 py-2 rounded-full text-sm font-semibold self-start md:self-auto transition-all shadow-sm group"
            href="#contact"
          >
            <span>View All Services</span>
            <span className="w-7 h-7 rounded-full bg-amber flex items-center justify-center text-forest font-bold transition-transform duration-300 group-hover:translate-x-0.5">
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </span>
          </a>
        </div>

        {/* 3 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-2xl border border-canvas-border flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 shadow-sm hover:shadow-md group"
            >
              <div>
                <div className="w-14 h-14 rounded-full bg-canvas-muted flex items-center justify-center text-forest mb-6 group-hover:bg-amber group-hover:text-forest transition-colors duration-300">
                  <span className="material-symbols-outlined text-[28px]">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-ink-primary mb-3">{service.title}</h3>
                <p className="text-ink-secondary text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
              <a
                className="inline-flex items-center gap-2 text-forest font-bold text-sm group-hover:text-forest transition-colors cursor-pointer"
                href="#contact"
                onClick={() => onSelectService && onSelectService(service.title)}
              >
                <span>Learn more</span>
                <span className="material-symbols-outlined text-[16px] text-amber transition-transform duration-300 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
