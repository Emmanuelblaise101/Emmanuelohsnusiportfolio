import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeStrip from './components/MarqueeStrip';
import Services from './components/Services';
import About from './components/About';
import Tools from './components/Tools';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Blogs from './components/Blogs';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { ProjectModal, BlogModal, CVModal, LegalModal } from './components/Modals';
import { MARQUEE_1_ITEMS, MARQUEE_2_ITEMS } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState(null);
  const [prefilledTier, setPrefilledTier] = useState(null);

  const handleSelectTier = (tierId) => {
    setPrefilledTier(tierId);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle) => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-canvas-base text-ink-primary font-sans antialiased selection:bg-amber selection:text-forest-dark">
      {/* 1. Fixed floating navigation */}
      <Navbar />

      <main>
        {/* 2. Hero Section */}
        <Hero onOpenCV={() => setIsCVOpen(true)} />

        {/* 3. First Mint Marquee Strip */}
        <MarqueeStrip items={MARQUEE_1_ITEMS} />

        {/* 4. Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* 5. About Me Section (Deep Petrol Teal Green) */}
        <About onOpenCV={() => setIsCVOpen(true)} />

        {/* 6. Tools Behind My Designs Section */}
        <Tools />

        {/* 7. My Latest Projects (2x2 Grid) */}
        <Projects onOpenProject={(proj) => setSelectedProject(proj)} />

        {/* 8. Academic and Professional Journey */}
        <Journey />

        {/* 9. My Pricing Models (Deep Petrol Teal Green) */}
        <Pricing onSelectTier={handleSelectTier} />

        {/* 10. Contact Section */}
        <Contact prefilledTier={prefilledTier} />

        {/* 11. Client Testimonials Section */}
        <Testimonials />

        {/* 12. Our Latest News & Blogs */}
        <Blogs onOpenBlog={(blog) => setSelectedBlog(blog)} />

        {/* 13. Questions? Look here. (FAQ Section) */}
        <FAQ />

        {/* 14. Second Mint Marquee Strip Divider */}
        <MarqueeStrip items={MARQUEE_2_ITEMS} isSecondary={true} />
      </main>

      {/* 15. Footer & Final CTA */}
      <Footer onOpenLegal={(type) => setLegalModalType(type)} />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <BlogModal
        blog={selectedBlog}
        onClose={() => setSelectedBlog(null)}
      />

      {isCVOpen && (
        <CVModal onClose={() => setIsCVOpen(false)} />
      )}

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
