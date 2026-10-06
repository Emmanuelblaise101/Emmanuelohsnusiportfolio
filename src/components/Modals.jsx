import React from 'react';

export function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-dark/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-canvas-border shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-canvas-muted hover:bg-amber hover:text-forest flex items-center justify-center transition-colors z-10 cursor-pointer"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div className="h-64 sm:h-80 w-full overflow-hidden bg-canvas-muted relative rounded-t-3xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <span className="px-3.5 py-1 rounded-full bg-amber text-forest font-bold text-xs uppercase tracking-wider mb-2 inline-block">
              {project.categoryBadge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h3>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 bg-canvas-muted rounded-2xl border border-canvas-border text-xs">
            <div>
              <span className="text-ink-muted uppercase font-bold block mb-1">Client</span>
              <strong className="text-ink-primary text-sm">{project.client}</strong>
            </div>
            <div>
              <span className="text-ink-muted uppercase font-bold block mb-1">Timeline</span>
              <strong className="text-ink-primary text-sm">{project.timeline}</strong>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-ink-muted uppercase font-bold block mb-1">Role</span>
              <strong className="text-ink-primary text-sm">{project.role}</strong>
            </div>
          </div>

          <div>
            <h4 className="text-base font-bold text-ink-primary mb-2">Project Overview</h4>
            <p className="text-sm text-ink-secondary leading-relaxed">
              {project.fullOverview || project.description}
            </p>
          </div>

          {project.deliverables && (
            <div>
              <h4 className="text-base font-bold text-ink-primary mb-3">Key Deliverables</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-forest">
                    <span className="material-symbols-outlined text-amber text-[16px]">check_circle</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-canvas-border flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-ink-muted font-medium">{project.meta}</span>
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 bg-forest hover:bg-forest-deep text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-sm transition-all"
            >
              <span>Inquire About Similar Project</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BlogModal({ blog, onClose }) {
  if (!blog) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-dark/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-canvas-border shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-canvas-muted hover:bg-amber hover:text-forest flex items-center justify-center transition-colors z-10 cursor-pointer"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div className="h-60 w-full overflow-hidden bg-canvas-muted relative rounded-t-3xl">
          <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 to-transparent"></div>
          <div className="absolute bottom-4 left-6 right-6">
            <span className="px-3 py-1 rounded-full bg-amber text-forest font-bold text-xs">
              {blog.tag}
            </span>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-xs text-ink-muted">
            <span>By {blog.author}</span>
            <span>•</span>
            <span>{blog.date}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>

          <h3 className="text-2xl font-bold text-ink-primary">{blog.title}</h3>
          
          <div className="text-sm text-ink-secondary leading-relaxed space-y-3">
            <p className="font-semibold text-forest">{blog.excerpt}</p>
            <p>{blog.content}</p>
            <p>
              In my design workflow, I continuously validate assumptions against real usage analytics to guarantee that interface decisions create tangible business results rather than purely ornamental satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CVModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-dark/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-canvas-border shadow-2xl relative p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-canvas-muted hover:bg-amber hover:text-forest flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div className="text-center space-y-3 pb-6 border-b border-canvas-border">
          <div className="w-16 h-16 rounded-full bg-amber-soft text-forest mx-auto flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-[32px]">description</span>
          </div>
          <h3 className="text-2xl font-extrabold text-ink-primary">Emmanuel Ohanusi CV</h3>
          <p className="text-xs text-ink-secondary max-w-sm mx-auto">
            Web App Developer &amp; UI Specialist Curriculum Vitae (2026 Edition)
          </p>
        </div>

        <div className="py-6 space-y-4 text-xs text-ink-secondary">
          <div className="flex items-center justify-between p-3 bg-canvas-muted rounded-xl">
            <span className="font-bold text-ink-primary">Latest Roles</span>
            <span>Product Designer &amp; Developer (Creative Digital Studio)</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-canvas-muted rounded-xl">
            <span className="font-bold text-ink-primary">Education</span>
            <span>B.Sc. Computer Science (2020 – 2024)</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-canvas-muted rounded-xl">
            <span className="font-bold text-ink-primary">Core Stack</span>
            <span>Figma, React, Next.js, TypeScript, Tailwind</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <a
            href="/files/Emmanuel_Ohanusi_CV.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-forest hover:bg-forest-deep text-white py-3 rounded-full text-xs font-bold shadow-md transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">open_in_new</span>
            <span>Open &amp; Print / Save as PDF</span>
          </a>
          <a
            href="/files/Emmanuel_Ohanusi_CV.html"
            download="Emmanuel_Ohanusi_CV.html"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-amber hover:bg-amber-warm text-forest py-3 rounded-full text-xs font-bold shadow-md transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">download</span>
            <span>Download HTML CV</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export function LegalModal({ type, onClose }) {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-dark/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-xl w-full max-h-[85vh] overflow-y-auto border border-canvas-border shadow-2xl relative p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-canvas-muted hover:bg-amber hover:text-forest flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <h3 className="text-2xl font-extrabold text-ink-primary mb-4">
          {type === 'terms' ? 'User Terms & Conditions' : 'Privacy Policy'}
        </h3>

        <div className="text-xs text-ink-secondary space-y-4 leading-relaxed">
          <p>
            Welcome to the portfolio website of <strong>Emmanuel Ohanusi</strong>. By accessing this site, you agree to comply with and be bound by the following terms regarding intellectual property, design showcase rights, and contact inquiries.
          </p>
          <p>
            <strong>Intellectual Property:</strong> All client case studies, custom mockups, and UI design assets displayed remain the property of their respective copyright holders and Emmanuel Ohanusi. Unauthorized reproduction without prior written consent is strictly prohibited.
          </p>
          <p>
            <strong>Privacy &amp; Data:</strong> Information submitted via the contact form is processed strictly for project evaluation and direct communication. No client data is sold or provided to third-party ad networks.
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-canvas-border text-right">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-forest text-white rounded-full text-xs font-bold hover:bg-forest-deep transition-all cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
