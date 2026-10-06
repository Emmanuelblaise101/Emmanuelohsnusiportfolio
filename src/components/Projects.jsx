import React from 'react';
import { PROJECTS } from '../data/portfolioData';

export default function Projects({ onOpenProject }) {
  return (
    <section className="py-24 bg-canvas-muted" id="projects">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-forest text-xs uppercase tracking-widest mb-2 font-bold">
              <span className="w-6 h-[2px] bg-amber"></span> My Portfolio
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-ink-primary">
              My Latest <span className="text-amber">Projects</span>
            </h2>
          </div>
          <a
            className="inline-flex items-center gap-3 bg-forest hover:bg-forest-deep text-white pl-6 pr-2 py-2 rounded-full text-sm font-semibold self-start md:self-auto transition-all shadow-sm group"
            href="#contact"
          >
            <span>View All Projects</span>
            <span className="w-7 h-7 rounded-full bg-amber flex items-center justify-center text-forest font-bold transition-transform duration-300 group-hover:translate-x-0.5">
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </span>
          </a>
        </div>

        {/* 2x2 Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => onOpenProject && onOpenProject(project)}
              className="bg-white rounded-2xl border border-canvas-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-canvas-muted">
                <img
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={project.image}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-forest/10 group-hover:opacity-0 transition-opacity duration-300"></div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-amber-soft text-forest text-xs font-bold border border-amber/30">
                      {project.categoryBadge}
                    </span>
                    {project.secondaryTags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-canvas-muted text-ink-secondary text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-ink-primary mb-2 group-hover:text-forest transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-ink-secondary text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Meta & Arrow */}
                <div className="flex items-center justify-between pt-4 border-t border-canvas-border">
                  <span className="text-xs font-medium text-ink-muted">{project.meta}</span>
                  <div
                    className="w-10 h-10 rounded-full bg-forest text-white flex items-center justify-center group-hover:bg-amber group-hover:text-forest transition-all duration-300 shadow-sm"
                    aria-label={`View details for ${project.title}`}
                  >
                    <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      north_east
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
