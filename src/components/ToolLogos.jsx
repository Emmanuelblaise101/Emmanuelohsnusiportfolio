import React from 'react';

// 1. FIGMA (Official 5-color vector logo)
export function FigmaLogo({ className = 'w-8 h-8' }) {
  return (
    <svg viewBox="0 0 38 57" className={className} fill="none" aria-label="Figma">
      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
    </svg>
  );
}

// 2. BUBBLE.IO (Official double-bubble mark: dark navy + electric Bubble blue)
export function BubbleLogo({ className = 'w-8 h-8' }) {
  return (
    <svg viewBox="0 0 40 48" className={className} fill="none" aria-label="Bubble.io">
      <ellipse cx="20" cy="14" rx="13" ry="13" fill="#03254C" />
      <ellipse cx="20" cy="34" rx="13" ry="13" fill="#2C4BFF" />
    </svg>
  );
}

// 3. SQUARESPACE (Official double-chain vector mark)
export function SquarespaceLogo({ className = 'w-8 h-8' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#111111" aria-label="Squarespace">
      <path d="M22.655 8.719c-1.802-1.801-4.726-1.801-6.564 0l-7.351 7.35c-.45.45-.45 1.2 0 1.65.45.449 1.2.449 1.65 0l7.351-7.351c.899-.899 2.362-.899 3.264 0 .9.9.9 2.364 0 3.264l-7.239 7.239c.9.899 2.362.899 3.263 0l5.589-5.589c1.836-1.838 1.836-4.763.037-6.563zm-2.475 2.437c-.451-.45-1.201-.45-1.65 0l-7.354 7.389c-.9.899-2.361.899-3.262 0-.45-.45-1.2-.45-1.65 0s-.45 1.2 0 1.649c1.801 1.801 4.726 1.801 6.564 0l7.351-7.35c.449-.487.449-1.239.001-1.688zm-2.439-7.35c-1.801-1.801-4.726-1.801-6.564 0l-7.351 7.351c-.45.449-.45 1.199 0 1.649s1.2.45 1.65 0l7.395-7.351c.9-.899 2.371-.899 3.27 0 .451.45 1.201.45 1.65 0 .421-.487.421-1.199-.029-1.649h-.021zm-2.475 2.437c-.45-.45-1.2-.45-1.65 0l-7.351 7.389c-.899.9-2.363.9-3.265 0-.9-.899-.9-2.363 0-3.264l7.239-7.239c-.9-.9-2.362-.9-3.263 0L1.35 8.719c-1.8 1.8-1.8 4.725 0 6.563 1.801 1.801 4.725 1.801 6.564 0l7.35-7.351c.451-.488.451-1.238 0-1.688h.002z" />
    </svg>
  );
}

// 4. CLAUDE CODE (Official Anthropic Claude sunburst / spark in terracotta #CC785C)
export function ClaudeCodeLogo({ className = 'w-8 h-8' }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="#CC785C" aria-label="Claude Code">
      <path d="m19.6 66.5 19.7-11 .3-1-.3-.5h-1l-3.3-.2-11.2-.3L14 53l-9.5-.5-2.4-.5L0 49l.2-1.5 2-1.3 2.9.2 6.3.5 9.5.6 6.9.4L38 49.1h1.6l.2-.7-.5-.4-.4-.4L29 41l-10.6-7-5.6-4.1-3-2-1.5-2-.6-4.2 2.7-3 3.7.3.9.2 3.7 2.9 8 6.1L37 36l1.5 1.2.6-.4.1-.3-.7-1.1L33 25l-6-10.4-2.7-4.3-.7-2.6c-.3-1-.4-2-.4-3l3-4.2L28 0l4.2.6L33.8 2l2.6 6 4.1 9.3L47 29.9l2 3.8 1 3.4.3 1h.7v-.5l.5-7.2 1-8.7 1-11.2.3-3.2 1.6-3.8 3-2L61 2.6l2 2.9-.3 1.8-1.1 7.7L59 27.1l-1.5 8.2h.9l1-1.1 4.1-5.4 6.9-8.6 3-3.5L77 13l2.3-1.8h4.3l3.1 4.7-1.4 4.9-4.4 5.6-3.7 4.7-5.3 7.1-3.2 5.7.3.4h.7l12-2.6 6.4-1.1 7.6-1.3 3.5 1.6.4 1.6-1.4 3.4-8.2 2-9.6 2-14.3 3.3-.2.1.2.3 6.4.6 2.8.2h6.8l12.6 1 3.3 2 1.9 2.7-.3 2-5.1 2.6-6.8-1.6-16-3.8-5.4-1.3h-.8v.4l4.6 4.5 8.3 7.5L89 80.1l.5 2.4-1.3 2-1.4-.2-9.2-7-3.6-3-8-6.8h-.5v.7l1.8 2.7 9.8 14.7.5 4.5-.7 1.4-2.6 1-2.7-.6-5.8-8-6-9-4.7-8.2-.5.4-2.9 30.2-1.3 1.5-3 1.2-2.5-2-1.4-3 1.4-6.2 1.6-8 1.3-6.4 1.2-7.9.7-2.6v-.2H49L43 72l-9 12.3-7.2 7.6-1.7.7-3-1.5.3-2.8L24 86l10-12.8 6-7.9 4-4.6-.1-.5h-.3L17.2 77.4l-4.7.6-2-2 .2-3 1-1 8-5.5Z" />
    </svg>
  );
}

// 5. SUPABASE (Official emerald lightning mark in #3ECF8E)
export function SupabaseLogo({ className = 'w-8 h-8' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#3ECF8E" aria-label="Supabase">
      <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z" />
    </svg>
  );
}

// 6. ANTIGRAVITY (Google Antigravity futuristic agentic spark with vibrant Google AI gradient)
export function AntigravityLogo({ className = 'w-8 h-8' }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" aria-label="Antigravity">
      <defs>
        <linearGradient id="antigravityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1A73E8" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#00F2FE" />
        </linearGradient>
        <radialGradient id="antigravityGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#1A73E8" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="38" fill="url(#antigravityGlow)" />
      <ellipse cx="50" cy="58" rx="34" ry="14" stroke="url(#antigravityGrad)" strokeWidth="3" strokeDasharray="6 3" opacity="0.85" />
      <path
        d="M50 14 C50 32 32 50 14 50 C32 50 50 68 50 86 C50 68 68 50 86 50 C68 50 50 32 50 14 Z"
        fill="url(#antigravityGrad)"
      />
      <circle cx="50" cy="50" r="6" fill="#FFFFFF" opacity="0.95" />
    </svg>
  );
}
