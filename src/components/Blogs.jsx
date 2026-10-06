import React from 'react';
import { BLOGS } from '../data/portfolioData';

export default function Blogs({ onOpenBlog }) {
  return (
    <section className="py-24 bg-canvas-base" id="blogs">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-forest text-xs uppercase tracking-widest mb-2 font-bold">
              <span className="w-6 h-[2px] bg-amber"></span> News &amp; Blogs
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-ink-primary">
              Our Latest <span className="text-amber">News &amp; Blogs</span>
            </h2>
          </div>
          <a
            className="inline-flex items-center gap-3 bg-forest hover:bg-forest-deep text-white pl-6 pr-2 py-2 rounded-full text-sm font-semibold self-start md:self-auto transition-all shadow-sm group"
            href="#contact"
          >
            <span>View All Blogs</span>
            <span className="w-7 h-7 rounded-full bg-amber flex items-center justify-center text-forest font-bold transition-transform duration-300 group-hover:translate-x-0.5">
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </span>
          </a>
        </div>

        {/* 3 Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOGS.map((blog) => (
            <div
              key={blog.id}
              onClick={() => onOpenBlog && onOpenBlog(blog)}
              className="bg-white rounded-2xl border border-canvas-border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col cursor-pointer"
            >
              <div className="h-48 overflow-hidden bg-canvas-muted relative">
                <img
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={blog.image}
                  loading="lazy"
                />
              </div>

              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center gap-2 text-xs text-ink-muted mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-soft text-forest font-bold">
                      {blog.tag}
                    </span>
                    <span>• {blog.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-ink-primary mb-2 group-hover:text-forest transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-ink-secondary text-xs leading-relaxed mb-4">
                    {blog.excerpt}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-forest group-hover:text-amber transition-colors pt-2">
                  <span>Read More</span>
                  <span className="material-symbols-outlined text-[14px] transition-transform duration-300 group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
