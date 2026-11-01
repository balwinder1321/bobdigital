import React, { useState } from 'react';
import { ExternalLink, Eye, ArrowUpRight, CheckCircle, X, Sparkles, Smartphone, Monitor } from 'lucide-react';

export default function OurWork() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState('desktop'); // 'desktop' or 'mobile'

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'restaurant', label: 'Restaurant' },
    { id: 'retail', label: 'Retail & E-Com' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'corporate', label: 'Corporate' }
  ];

  const projects = [
    {
      id: 'saffron-sage',
      title: 'Saffron & Sage',
      category: 'restaurant',
      subtitle: 'Luxury Fine Dining & Hospitality',
      image: '/assets/work-restaurant.jpg',
      badge: 'Hospitality Concept',
      tags: ['Next.js', 'Online Reservations', 'Michelin Aesthetic', 'Speed 99'],
      summary: 'An immersive digital culinary experience designed with dark ambient tones, rich gold accents, interactive table reservation booking, and gourmet menu exploration.',
      features: [
        'Interactive table reservation engine with real-time slot selection',
        'Mobile-first sensory food photography showcase',
        'Award distinction badges and culinary press integrations',
        'Instant WhatsApp table inquiry routing'
      ],
      whatsappMsg: 'Hi BOB DIGITAL, I love the Saffron & Sage restaurant website mockup. I would like to build a similar website for my restaurant/hospitality business.'
    },
    {
      id: 'aura-timepieces',
      title: 'Aura Timepieces & Eyewear',
      category: 'retail',
      subtitle: 'Minimalist Luxury E-Commerce',
      image: '/assets/work-retail.jpg',
      badge: 'E-Commerce Concept',
      tags: ['Online Store', 'Product Catalog', 'Razorpay & UPI', 'Cart Drawer'],
      summary: 'High-end retail storefront engineered for seamless customer shopping, high-converting product grids, smooth checkout UX, and instant payment integration.',
      features: [
        'Clean high-contrast luxury grid with instant add-to-bag preview',
        'Integrated multi-currency & Indian UPI/Card checkout pathways',
        'Mobile-friendly product zoom & specifications drawer',
        'Automated order confirmation notifications'
      ],
      whatsappMsg: 'Hi BOB DIGITAL, I saw the Aura Timepieces E-Commerce mockup. I need a premium online store like this for my retail brand.'
    },
    {
      id: 'studio-zenith',
      title: 'Studio Zenith Architecture',
      category: 'portfolio',
      subtitle: 'Editorial Architectural & Design Studio',
      image: '/assets/work-portfolio.jpg',
      badge: 'Portfolio Concept',
      tags: ['Brutalist Layout', 'High-Res Showcase', 'Micro-Interactions', 'Fast Load'],
      summary: 'Monochrome architectural portfolio emphasizing spatial mastery, minimalist typography, case study depth, and subtle violet design accents.',
      features: [
        'Editorial modular masonry grid tailored for high-res projects',
        'Comprehensive project specification cards (year, location, area)',
        'Fluid scroll animations and effortless client exploration',
        'Direct consultation booking & inquiry pipeline'
      ],
      whatsappMsg: 'Hi BOB DIGITAL, I was impressed by the Studio Zenith architectural portfolio mockup. I want a bespoke portfolio website for my studio/agency.'
    },
    {
      id: 'apex-capital',
      title: 'Apex Capital Advisory',
      category: 'corporate',
      subtitle: 'Strategic Corporate & Financial Advisory',
      image: '/assets/work-business.jpg',
      badge: 'Corporate Concept',
      tags: ['Enterprise Web', 'Dashboard Preview', 'Trust Metrics', 'B2B Lead Gen'],
      summary: 'Authoritative fintech and enterprise advisory platform featuring interactive portfolio graphs, trust telemetry, skyscraper imagery, and executive consultation booking.',
      features: [
        'Interactive financial analytics dashboard visualization',
        'Key performance statistics ($14.2B AUM, 99% retention stats)',
        'Executive consultation booking module',
        'Enterprise-grade security and corporate compliance badges'
      ],
      whatsappMsg: 'Hi BOB DIGITAL, I saw the Apex Capital corporate website mockup. I want to build a corporate/enterprise website for our company.'
    }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="work"
      className="section-padding"
      style={{
        backgroundColor: '#050B20',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Ambient background glows */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '-5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(89, 56, 232, 0.16) 0%, transparent 70%)',
          filter: 'blur(90px)',
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(122, 90, 248, 0.12) 0%, transparent 70%)',
          filter: 'blur(90px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div className="section-header dark">
          <div className="badge-pill dark" style={{ marginBottom: '1rem' }}>
            Featured Portfolio
          </div>
          <h2
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.85rem)',
              color: '#FFFFFF',
              fontWeight: 800
            }}
          >
            Proof of Craft.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #7A5AF8 0%, #B8A5FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Real World Precision.
            </span>
          </h2>
          <p className="section-subtitle">
            Explore our curated demonstration website mockups across retail, dining, architecture, and corporate verticals. Every design is built to demonstrate what is possible for your business.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.6rem',
            marginBottom: '3rem'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '0.55rem 1.35rem',
                borderRadius: '9999px',
                fontSize: '0.88rem',
                fontWeight: 600,
                border: '1px solid',
                borderColor: activeCategory === cat.id ? '#5938E8' : 'rgba(255, 255, 255, 0.12)',
                backgroundColor: activeCategory === cat.id ? '#5938E8' : 'rgba(255, 255, 255, 0.05)',
                color: activeCategory === cat.id ? '#FFFFFF' : '#CBD5E1',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 2x2 Showcase Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.5rem'
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card-dark"
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                background: 'linear-gradient(180deg, #0A1330 0%, #050B20 100%)'
              }}
            >
              {/* Image Preview with Badge & Hover Overlay */}
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  aspectRatio: '16/9',
                  backgroundColor: '#020617',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />

                {/* Demonstration Notice Pill */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: 'rgba(5, 11, 32, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(89, 56, 232, 0.4)',
                    color: '#D4C9FF',
                    padding: '4px 10px',
                    borderRadius: '8px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase'
                  }}
                >
                  Demo Project
                </div>

                {/* Quick View Button Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    backgroundColor: 'rgba(89, 56, 232, 0.9)',
                    color: '#FFFFFF',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  <Eye size={14} />
                  <span>Inspect Details</span>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.8rem', color: '#7A5AF8', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                      {project.subtitle}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.65rem' }}>
                    {project.title}
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {project.summary}
                  </p>

                  {/* Feature Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '0.74rem',
                          backgroundColor: 'rgba(255, 255, 255, 0.06)',
                          color: '#CBD5E1',
                          padding: '3px 9px',
                          borderRadius: '6px',
                          border: '1px solid rgba(255, 255, 255, 0.08)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Strip */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <button
                    onClick={() => setSelectedProject(project)}
                    style={{
                      flex: 1,
                      padding: '0.7rem 1rem',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#FFFFFF',
                      fontSize: '0.86rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      transition: 'background 0.2s'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.16)')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)')}
                  >
                    <Eye size={16} />
                    <span>View Mockup</span>
                  </button>

                  <a
                    href={`https://wa.me/916303248510?text=${encodeURIComponent(project.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '0.7rem 1.1rem',
                      borderRadius: '12px',
                      backgroundColor: '#5938E8',
                      color: '#FFFFFF',
                      fontSize: '0.86rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      transition: 'background 0.2s'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#4827D1')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#5938E8')}
                  >
                    <span>Request Similar</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Project Preview Modal */}
      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(5, 11, 32, 0.88)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            overflowY: 'auto'
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            style={{
              backgroundColor: '#0A1330',
              border: '1px solid rgba(89, 56, 232, 0.4)',
              borderRadius: '24px',
              maxWidth: '960px',
              width: '100%',
              maxHeight: '92vh',
              overflowY: 'auto',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(89, 56, 232, 0.3)',
              position: 'relative',
              color: '#FFFFFF'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                padding: '1.5rem 2rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'sticky',
                top: 0,
                backgroundColor: '#0A1330',
                zIndex: 10
              }}
            >
              <div>
                <span style={{ fontSize: '0.78rem', color: '#7A5AF8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Demonstration Project by BOB DIGITAL
                </span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '2px', color: '#FFFFFF' }}>
                  {selectedProject.title}
                </h3>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <button
                  onClick={() => setSelectedProject(null)}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: 'none',
                    color: '#FFFFFF',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '2rem' }}>
              {/* Full Mockup Preview */}
              <div
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  marginBottom: '2rem',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.5)'
                }}
              >
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  style={{ width: '100%', display: 'block', height: 'auto' }}
                />
              </div>

              {/* Project Details */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem', color: '#CBD5E1' }}>
                    Concept & Strategy
                  </h4>
                  <p style={{ fontSize: '0.94rem', color: '#94A3B8', lineHeight: 1.65 }}>
                    {selectedProject.summary}
                  </p>
                </div>

                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem', color: '#CBD5E1' }}>
                    Architecture Highlights
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {selectedProject.features.map((feat, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', color: '#E2E8F0' }}>
                        <CheckCircle size={16} color="#7A5AF8" style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom CTA Bar */}
              <div
                style={{
                  backgroundColor: 'rgba(89, 56, 232, 0.12)',
                  border: '1px solid rgba(89, 56, 232, 0.3)',
                  borderRadius: '16px',
                  padding: '1.25rem 1.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF' }}>
                    Need a website built with this level of quality?
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>
                    Direct WhatsApp quote with Sardar Balwinder Singh (Founder & Developer).
                  </div>
                </div>

                <a
                  href={`https://wa.me/916303248510?text=${encodeURIComponent(selectedProject.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ padding: '0.75rem 1.75rem', fontSize: '0.9rem' }}
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
