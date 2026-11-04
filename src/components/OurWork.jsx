import React, { useState } from 'react';
import { ExternalLink, Eye, ArrowUpRight, CheckCircle, X, Globe } from 'lucide-react';

export default function OurWork() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'client', label: 'Client Work' },
    { id: 'restaurant', label: 'Restaurant' },
    { id: 'retail', label: 'Retail & E-Com' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'corporate', label: 'Corporate' }
  ];

  const projects = [
    {
      id: 'together-we-rise',
      title: 'Together We Rise Network',
      category: 'client',
      subtitle: 'Digital Presence & Community Platform',
      image: '/assets/together-we-rise.jpg',
      badge: 'First Client Project',
      isClientProject: true,
      liveUrl: 'https://togetherwerise-network.vercel.app/',
      tags: ['First Client Project', 'Live Website', 'Custom Design', 'Mobile-First'],
      summary: 'Our first client project, designed and developed by BOB Digital to establish a professional digital presence for the Together We Rise Network.',
      features: [
        'Established the premier digital presence for Together We Rise Network',
        'Custom brand styling and elegant typography tailored for community empowerment',
        'Engineered for blazing fast load speeds across mobile viewports',
        'Live and deployed in production'
      ],
      whatsappMsg: 'Hi BOB DIGITAL, I visited the Together We Rise Network website you developed. I would like to consult about building a website for our brand.'
    },
    {
      id: 'saffron-sage',
      title: 'Saffron & Sage',
      category: 'restaurant',
      subtitle: 'Luxury Fine Dining & Hospitality',
      image: '/assets/work-restaurant.jpg',
      badge: 'Hospitality Concept',
      isClientProject: false,
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
      isClientProject: false,
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
      isClientProject: false,
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
      isClientProject: false,
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
            Featured Portfolio & Client Work
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
            Explore our completed client solutions and curated demonstration projects. High-impact web development, modern web design, and e-commerce solutions crafted for businesses in Hyderabad, Karimnagar, and beyond.
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

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.5rem'
          }}
        >
          {filteredProjects.map((project) => {
            const isClient = project.isClientProject;

            return (
              <div
                key={project.id}
                className="glass-card-dark"
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  border: isClient
                    ? '2px solid rgba(89, 56, 232, 0.65)'
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: isClient
                    ? '0 20px 50px rgba(89, 56, 232, 0.25), 0 0 30px rgba(89, 56, 232, 0.15)'
                    : 'none',
                  background: isClient
                    ? 'linear-gradient(180deg, #0D173C 0%, #050B20 100%)'
                    : 'linear-gradient(180deg, #0A1330 0%, #050B20 100%)',
                  position: 'relative'
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
                    alt={`${project.title} - ${project.subtitle} by BOB Digital`}
                    loading="lazy"
                    width="600"
                    height="338"
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

                  {/* Highlighted Status Pill */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      backgroundColor: isClient ? 'rgba(16, 185, 129, 0.9)' : 'rgba(5, 11, 32, 0.85)',
                      backdropFilter: 'blur(8px)',
                      border: isClient ? '1px solid rgba(255, 255, 255, 0.4)' : '1px solid rgba(89, 56, 232, 0.4)',
                      color: '#FFFFFF',
                      padding: '4px 12px',
                      borderRadius: '8px',
                      fontSize: '0.74rem',
                      fontWeight: 800,
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      boxShadow: isClient ? '0 4px 15px rgba(16, 185, 129, 0.4)' : 'none'
                    }}
                  >
                    {isClient && (
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: '#FFFFFF',
                          boxShadow: '0 0 6px #FFFFFF'
                        }}
                      />
                    )}
                    <span>{project.badge}</span>
                  </div>

                  {/* Live Web Indicator for Client Project */}
                  {isClient && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        backgroundColor: 'rgba(5, 11, 32, 0.85)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(89, 56, 232, 0.4)',
                        color: '#B8A5FF',
                        padding: '4px 10px',
                        borderRadius: '8px',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px'
                      }}
                    >
                      <Globe size={13} color="#10B981" />
                      <span>Live on Vercel</span>
                    </div>
                  )}

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
                    <span>Inspect Project</span>
                  </div>
                </div>

                {/* Card Body */}
                <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span
                        style={{
                          fontSize: '0.8rem',
                          color: isClient ? '#34D399' : '#7A5AF8',
                          fontWeight: 700,
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase'
                        }}
                      >
                        {project.subtitle}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.65rem' }}>
                      {project.title}
                    </h3>

                    <p style={{ fontSize: '0.92rem', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                      {project.summary}
                    </p>

                    {/* Feature Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          style={{
                            fontSize: '0.74rem',
                            backgroundColor: isClient && i === 0 ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.06)',
                            color: isClient && i === 0 ? '#34D399' : '#CBD5E1',
                            padding: '3px 9px',
                            borderRadius: '6px',
                            border: isClient && i === 0 ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(255, 255, 255, 0.08)',
                            fontWeight: isClient && i === 0 ? 700 : 500
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Strip */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    {isClient ? (
                      /* Highlighted Visit Live Website Link */
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          flex: 1,
                          padding: '0.75rem 1.25rem',
                          borderRadius: '12px',
                          backgroundColor: '#5938E8',
                          color: '#FFFFFF',
                          fontSize: '0.88rem',
                          fontWeight: 700,
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          boxShadow: '0 4px 18px rgba(89, 56, 232, 0.45)',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#4827D1';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#5938E8';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                      >
                        <span>Visit Live Website</span>
                        <ExternalLink size={16} />
                      </a>
                    ) : (
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
                    )}

                    <a
                      href={`https://wa.me/916303248510?text=${encodeURIComponent(project.whatsappMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: '0.7rem 1.1rem',
                        borderRadius: '12px',
                        backgroundColor: isClient ? 'rgba(255, 255, 255, 0.08)' : '#5938E8',
                        border: isClient ? '1px solid rgba(255, 255, 255, 0.15)' : 'none',
                        color: '#FFFFFF',
                        fontSize: '0.86rem',
                        fontWeight: 600,
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        transition: 'background 0.2s'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = isClient ? 'rgba(255, 255, 255, 0.16)' : '#4827D1')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = isClient ? 'rgba(255, 255, 255, 0.08)' : '#5938E8')}
                    >
                      <span>{isClient ? 'Inquire' : 'Request Similar'}</span>
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
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
                <span
                  style={{
                    fontSize: '0.78rem',
                    color: selectedProject.isClientProject ? '#34D399' : '#7A5AF8',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  {selectedProject.isClientProject ? '★ First Client Project by BOB DIGITAL' : 'Demonstration Project by BOB DIGITAL'}
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
              {/* Image Preview */}
              <div
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  marginBottom: '2rem',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
                  position: 'relative'
                }}
              >
                <img
                  src={selectedProject.image}
                  alt={`${selectedProject.title} showcase - Web Development by BOB Digital`}
                  width="1000"
                  height="560"
                  style={{ width: '100%', display: 'block', height: 'auto' }}
                />

                {selectedProject.isClientProject && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '16px',
                      left: '16px',
                      backgroundColor: 'rgba(5, 11, 32, 0.85)',
                      backdropFilter: 'blur(10px)',
                      padding: '8px 16px',
                      borderRadius: '12px',
                      border: '1px solid rgba(16, 185, 129, 0.4)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: '#E2E8F0',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981', boxShadow: '0 0 8px #10B981' }} />
                    <span>Live client production deployment</span>
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem', color: '#CBD5E1' }}>
                    Project Overview
                  </h4>
                  <p style={{ fontSize: '0.94rem', color: '#94A3B8', lineHeight: 1.65 }}>
                    {selectedProject.summary}
                  </p>
                </div>

                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem', color: '#CBD5E1' }}>
                    Key Deliverables & Architecture
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {selectedProject.features.map((feat, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', color: '#E2E8F0' }}>
                        <CheckCircle size={16} color={selectedProject.isClientProject ? '#10B981' : '#7A5AF8'} style={{ marginTop: '2px', flexShrink: 0 }} />
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
                    {selectedProject.isClientProject
                      ? 'Experience the full live website directly on Vercel'
                      : 'Need a website built with this level of quality?'}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>
                    {selectedProject.isClientProject
                      ? 'Designed and built by BOB Digital for the Together We Rise Network.'
                      : 'Direct WhatsApp quote with Sardar Balwinder Singh (Founder & Developer).'}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {selectedProject.isClientProject && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem', backgroundColor: '#10B981', borderColor: 'rgba(255,255,255,0.2)' }}
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink size={16} />
                    </a>
                  )}

                  <a
                    href={`https://wa.me/916303248510?text=${encodeURIComponent(selectedProject.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{
                      padding: '0.75rem 1.5rem',
                      fontSize: '0.9rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      color: '#FFFFFF',
                      borderColor: 'rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    <span>Inquire on WhatsApp</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
