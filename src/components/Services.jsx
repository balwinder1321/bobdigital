import React from 'react';
import { Layout, ShoppingCart, Cpu, Wrench, ArrowRight, Check } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'website-development',
      title: 'Website Development',
      badge: 'Core Solution',
      icon: Layout,
      description: 'High-performance, beautifully branded websites engineered for speed, authority, and seamless user experience across every device.',
      deliverables: [
        'Mobile-first responsive architecture',
        'Conversion-optimised layout & UX',
        'Fast loading speeds under 1.5s',
        'On-page technical SEO setup'
      ],
      whatsappMsg: 'Hello BOB DIGITAL, I would like to enquire about your Website Development services.'
    },
    {
      id: 'ecommerce-platforms',
      title: 'E-Commerce Platforms',
      badge: 'Revenue Focused',
      icon: ShoppingCart,
      description: 'Conversion-optimized digital storefronts designed to showcase products elegantly, manage inventory, and securely process payments.',
      deliverables: [
        'Razorpay, UPI, & Stripe integrations',
        'Intuitive product catalog & cart',
        'Mobile checkout optimisation',
        'Automated order email alerts'
      ],
      whatsappMsg: 'Hello BOB DIGITAL, I would like to enquire about building an E-Commerce Platform.'
    },
    {
      id: 'custom-web-dev',
      title: 'Custom Website Development',
      badge: 'Bespoke Engineering',
      icon: Cpu,
      description: 'Tailor-made web applications, custom workflows, interactive portals, and bespoke UI/UX designs built to your exact specifications.',
      deliverables: [
        'Modern React & component design',
        'Third-party API & CRM integrations',
        'Custom admin dashboards & tools',
        'Scalable cloud infrastructure'
      ],
      whatsappMsg: 'Hello BOB DIGITAL, I have custom website development requirements and would like to consult.'
    },
    {
      id: 'website-management',
      title: 'Website Management & Maintenance',
      badge: 'Worry-Free Care',
      icon: Wrench,
      description: 'Comprehensive proactive care ensuring your website remains blazing fast, impenetrable to threats, regularly backed up, and fresh.',
      deliverables: [
        '24/7 uptime & health monitoring',
        'Daily automated cloud backups',
        'Software & security vulnerability patches',
        'Priority content updates & bug fixes'
      ],
      whatsappMsg: 'Hello BOB DIGITAL, I would like to enquire about your ongoing Website Management & Maintenance plans.'
    }
  ];

  return (
    <section
      id="services"
      className="section-padding"
      style={{
        backgroundColor: '#F7F7FA',
        position: 'relative',
        borderTop: '1px solid rgba(5, 11, 32, 0.06)'
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            What We Do
          </div>
          <h2
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.85rem)',
              color: '#050B20',
              fontWeight: 800
            }}
          >
            Engineered for Impact.{' '}
            <span style={{ color: '#5938E8' }}>Built to Grow.</span>
          </h2>
          <p className="section-subtitle">
            We don't build generic templates. Every website is engineered from scratch to reflect your brand's unique prestige and convert traffic into actual revenue.
          </p>
        </div>

        {/* 2x2 Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="glass-card-light"
                style={{
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '24px',
                  position: 'relative',
                  overflow: 'hidden',
                  background: '#FFFFFF',
                  border: '1px solid rgba(5, 11, 32, 0.08)'
                }}
              >
                {/* Subtle top-corner gradient aura */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-40px',
                    right: '-40px',
                    width: '140px',
                    height: '140px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(89, 56, 232, 0.12) 0%, transparent 70%)',
                    pointerEvents: 'none'
                  }}
                />

                <div>
                  {/* Top Row: Icon + Badge */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.75rem'
                    }}
                  >
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '16px',
                        backgroundColor: '#050B20',
                        color: '#7A5AF8',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 20px rgba(5, 11, 32, 0.15)'
                      }}
                    >
                      <Icon size={28} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        color: '#5938E8',
                        backgroundColor: 'rgba(89, 56, 232, 0.08)',
                        padding: '4px 12px',
                        borderRadius: '20px'
                      }}
                    >
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3
                    style={{
                      fontSize: '1.45rem',
                      fontWeight: 700,
                      marginBottom: '0.85rem',
                      color: '#050B20'
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.96rem',
                      lineHeight: 1.6,
                      color: '#5A657D',
                      marginBottom: '1.75rem'
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div style={{ marginBottom: '2rem' }}>
                    <div
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        color: '#050B20',
                        marginBottom: '0.85rem'
                      }}
                    >
                      Key Deliverables
                    </div>
                    <ul className="feature-list">
                      {service.deliverables.map((item, i) => (
                        <li key={i} style={{ fontSize: '0.9rem', color: '#4A5568' }}>
                          <div
                            style={{
                              width: '18px',
                              height: '18px',
                              borderRadius: '50%',
                              backgroundColor: 'rgba(89, 56, 232, 0.12)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0
                            }}
                          >
                            <Check size={12} color="#5938E8" strokeWidth={3} />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <a
                  href={`https://wa.me/916303248510?text=${encodeURIComponent(service.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.85rem 1.25rem',
                    borderRadius: '14px',
                    backgroundColor: '#F7F7FA',
                    border: '1px solid rgba(5, 11, 32, 0.08)',
                    color: '#050B20',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#5938E8';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.borderColor = '#5938E8';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#F7F7FA';
                    e.currentTarget.style.color = '#050B20';
                    e.currentTarget.style.borderColor = 'rgba(5, 11, 32, 0.08)';
                  }}
                >
                  <span>Enquire on WhatsApp</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
