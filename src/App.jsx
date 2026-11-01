import React, { useState } from 'react';
import IntroAnimation from './components/IntroAnimation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import OurWork from './components/OurWork';
import Pricing from './components/Pricing';
import WebsiteManagement from './components/WebsiteManagement';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#F7F7FA] text-[#4A5568] selection:bg-[#5938E8] selection:text-white">
      {/* Intro Animation on load */}
      <IntroAnimation onComplete={() => setIntroFinished(true)} />

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
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp />
    </div>
  );
}
