import React, { useState, useCallback } from 'react';
import IntroAnimation from './components/IntroAnimation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import OurWork from './components/OurWork';
import Pricing from './components/Pricing';
import WebsiteManagement from './components/WebsiteManagement';
import AboutUs from './components/AboutUs';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const checkShouldSkipIntro = () => {
  try {
    if (typeof window === 'undefined') return true;
    if (sessionStorage.getItem('bob_digital_intro_seen') === 'true') return true;
    const isBot = /bot|googlebot|bingbot|slurp|duckduckbot|baiduspider|yandexbot|sogou|exabot|facebot|facebookexternalhit|ia_archiver/i.test(navigator.userAgent || '');
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return Boolean(isBot || prefersReducedMotion);
  } catch {
    return false;
  }
};

export default function App() {
  const [alreadySeen] = useState(() => checkShouldSkipIntro());
  const [showIntro, setShowIntro] = useState(() => !alreadySeen);
  const [introExiting, setIntroExiting] = useState(false);
  const [introFinished, setIntroFinished] = useState(() => alreadySeen);

  const handleIntroExit = useCallback(() => {
    setIntroExiting(true);
  }, []);

  const handleIntroComplete = useCallback(() => {
    setIntroFinished(true);
    setShowIntro(false);
    try {
      sessionStorage.setItem('bob_digital_intro_seen', 'true');
    } catch {
      // Safe fallback if sessionStorage is restricted
    }
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#050B20',
        minHeight: '100vh',
        position: 'relative'
      }}
    >
      {/* Intro Animation overlay on initial load */}
      {showIntro && (
        <IntroAnimation
          onExit={handleIntroExit}
          onComplete={handleIntroComplete}
        />
      )}

      {/* 
        Entire Homepage Wrapper:
        Kept accessible and crawlable in the DOM while the fixed intro overlay smoothly completes.
      */}
      <div
        id="homepage-wrapper"
        style={{
          opacity: introFinished ? 1 : introExiting ? 1 : 0.99,
          pointerEvents: introFinished || introExiting ? 'auto' : 'none',
          transition: introExiting
            ? 'opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1)'
            : 'none',
          backgroundColor: '#F7F7FA',
          color: '#4A5568',
          minHeight: '100vh',
          position: 'relative'
        }}
      >
        {/* Sticky Navigation */}
        <Navbar />

        {/* Main Single Page Content */}
        <main id="main-content">
          <Hero />
          <Services />
          <OurWork />
          <Pricing />
          <WebsiteManagement />
          <AboutUs />
          <FAQ />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating WhatsApp Action */}
        <FloatingWhatsApp />
      </div>
    </div>
  );
}
