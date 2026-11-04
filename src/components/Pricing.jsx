import React from 'react';
import { Laptop, ShoppingCart, Layers, Check, ShieldCheck, CloudUpload, BarChart3, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      icon: Laptop,
      badge: null,
      subtitle: 'Ideal for individuals & small businesses',
      price: '₹4,999',
      features: [
        'Up to 5 Pages',
        'Responsive Design',
        'Contact Form',
        'Basic SEO'
      ],
      whatsappMsg: 'Hello BOB DIGITAL, I am interested in the STARTER Plan (₹4,999). Please share the details and next steps.',
      isPopular: false
    },
    {
      id: 'business',
      name: 'Business',
      icon: ShoppingCart,
      badge: 'Most Popular',
      subtitle: 'Perfect for growing businesses',
      price: '₹9,999',
      features: [
        'Up to 10 Pages',
        'Custom Design',
        'Enquiry Forms',
        'SEO Setup'
      ],
      whatsappMsg: 'Hello BOB DIGITAL, I am interested in the BUSINESS Plan (₹9,999) [Most Popular]. Please share the details and next steps.',
      isPopular: true
    },
    {
      id: 'custom',
      name: 'Custom',
      icon: Layers,
      badge: null,
      subtitle: 'Tailored solutions for unique needs',
      price: '₹14,999+',
      features: [
        'Fully Custom Website',
        'Advanced Features',
        'Integrations',
        'Ongoing Support Options'
      ],
      whatsappMsg: 'Hello BOB DIGITAL, I am interested in the CUSTOM Plan (Starting ₹14,999+). Here are my project requirements:',
      isPopular: false
    }
  ];

  return (
    <section
      id="pricing"
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
          <div
            style={{
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#5A657D',
              marginBottom: '0.5rem'
            }}
          >
            WEB SOLUTIONS
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.25rem)',
              fontWeight: 800,
              color: '#050B20',
              marginBottom: '0.75rem'
            }}
          >
            Pricing <span style={{ color: '#5938E8' }}>Plans</span>
          </h2>
          <p className="section-subtitle" style={{ fontSize: '1.15rem' }}>
            Transparent pricing for website development, web design, and e-commerce services in Hyderabad and Karimnagar.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch',
            maxWidth: '1140px',
            margin: '0 auto 4rem'
          }}
        >
          {plans.map((plan) => {
            const Icon = plan.icon;
            const isDark = plan.isPopular;

            return (
              <div
                key={plan.id}
                style={{
                  position: 'relative',
                  borderRadius: '26px',
                  padding: '2.75rem 2rem 2.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease',
                  backgroundColor: isDark ? '#081028' : '#FFFFFF',
                  color: isDark ? '#FFFFFF' : '#050B20',
                  border: isDark
                    ? '2px solid #5938E8'
                    : '1px solid rgba(5, 11, 32, 0.1)',
                  boxShadow: isDark
                    ? '0 25px 60px rgba(89, 56, 232, 0.25), 0 10px 30px rgba(5, 11, 32, 0.15)'
                    : '0 10px 30px rgba(5, 11, 32, 0.05)',
                  transform: isDark ? 'scale(1.03)' : 'scale(1)',
                  zIndex: isDark ? 2 : 1,
                  overflow: 'hidden'
                }}
              >
                {/* Most Popular Badge on Top */}
                {plan.badge && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: '#E8D4B0',
                      color: '#050B20',
                      fontWeight: 800,
                      fontSize: '0.75rem',
                      letterSpacing: '0.04em',
                      padding: '5px 20px',
                      borderRadius: '0 0 14px 14px',
                      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    {plan.badge}
                  </div>
                )}

                {/* Subtle Violet Wave at bottom for Business Card (as in user's image) */}
                {isDark && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '110px',
                      background: 'radial-gradient(ellipse at bottom, rgba(89, 56, 232, 0.5) 0%, transparent 75%)',
                      pointerEvents: 'none',
                      zIndex: 0
                    }}
                  />
                )}

                <div style={{ position: 'relative', zIndex: 1 }}>
                  {/* Top Icon */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      marginBottom: '1.25rem'
                    }}
                  >
                    <div
                      style={{
                        width: '54px',
                        height: '54px',
                        borderRadius: '16px',
                        backgroundColor: isDark ? 'rgba(89, 56, 232, 0.2)' : 'rgba(5, 11, 32, 0.04)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isDark ? '#B8A5FF' : '#050B20'
                      }}
                    >
                      <Icon size={28} />
                    </div>
                  </div>

                  {/* Plan Name & Subtitle */}
                  <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
                    <h3
                      style={{
                        fontSize: '1.75rem',
                        fontWeight: 800,
                        color: isDark ? '#FFFFFF' : '#050B20',
                        marginBottom: '0.35rem'
                      }}
                    >
                      {plan.name}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.88rem',
                        color: isDark ? '#94A3B8' : '#718096',
                        lineHeight: 1.4
                      }}
                    >
                      {plan.subtitle}
                    </p>
                  </div>

                  {/* Price Display */}
                  <div
                    style={{
                      textAlign: 'center',
                      padding: '1.25rem 0',
                      marginBottom: '1.75rem',
                      borderTop: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(5, 11, 32, 0.06)',
                      borderBottom: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(5, 11, 32, 0.06)'
                    }}
                  >
                    <div
                      style={{
                        fontSize: 'clamp(2.4rem, 3.5vw, 2.9rem)',
                        fontWeight: 900,
                        fontFamily: 'var(--font-heading)',
                        color: isDark ? '#FFFFFF' : '#050B20',
                        letterSpacing: '-0.03em'
                      }}
                    >
                      {plan.price}
                    </div>
                  </div>

                  {/* Features List */}
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: '0 0 2.25rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.9rem'
                    }}
                  >
                    {plan.features.map((feat, i) => (
                      <li
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          fontSize: '0.94rem',
                          color: isDark ? '#E2E8F0' : '#4A5568',
                          fontWeight: 500
                        }}
                      >
                        <div
                          style={{
                            width: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            backgroundColor: isDark ? 'rgba(89, 56, 232, 0.3)' : 'rgba(5, 11, 32, 0.07)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}
                        >
                          <Check
                            size={12}
                            color={isDark ? '#FFFFFF' : '#050B20'}
                            strokeWidth={3}
                          />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Select Plan Button */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <a
                    href={`https://wa.me/916303248510?text=${encodeURIComponent(plan.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '0.9rem 1.5rem',
                      borderRadius: '9999px',
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                      backgroundColor: isDark ? '#5938E8' : '#050B20',
                      color: '#FFFFFF',
                      boxShadow: isDark
                        ? '0 8px 25px rgba(89, 56, 232, 0.5)'
                        : '0 4px 15px rgba(5, 11, 32, 0.12)'
                    }}
                    onMouseEnter={(e) => {
                      if (isDark) {
                        e.currentTarget.style.backgroundColor = '#4827D1';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      } else {
                        e.currentTarget.style.backgroundColor = '#5938E8';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (isDark) {
                        e.currentTarget.style.backgroundColor = '#5938E8';
                        e.currentTarget.style.transform = 'translateY(0)';
                      } else {
                        e.currentTarget.style.backgroundColor = '#050B20';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }
                    }}
                  >
                    <span>Select Plan</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Badges Strip (from user design poster) */}
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto 3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            gap: '1.5rem',
            padding: '1.5rem 2rem',
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            border: '1px solid rgba(5, 11, 32, 0.08)',
            boxShadow: '0 8px 24px rgba(5, 11, 32, 0.04)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'rgba(89, 56, 232, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#5938E8'
              }}
            >
              <ShieldCheck size={20} />
            </div>
            <span style={{ fontSize: '0.94rem', fontWeight: 600, color: '#050B20' }}>
              Maintenance Included
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'rgba(89, 56, 232, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#5938E8'
              }}
            >
              <CloudUpload size={20} />
            </div>
            <span style={{ fontSize: '0.94rem', fontWeight: 600, color: '#050B20' }}>
              Hosting Setup
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'rgba(89, 56, 232, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#5938E8'
              }}
            >
              <BarChart3 size={20} />
            </div>
            <span style={{ fontSize: '0.94rem', fontWeight: 600, color: '#050B20' }}>
              SEO Setup
            </span>
          </div>
        </div>

        {/* Global Get Started CTA Bar */}
        <div style={{ textAlign: 'center' }}>
          <a
            href="https://wa.me/916303248510?text=Hello%20BOB%20DIGITAL,%20I%20would%20like%20to%20consult%20and%20get%20started%20with%20a%20website%20plan."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark"
            style={{
              padding: '1rem 2.5rem',
              fontSize: '1rem',
              fontWeight: 700,
              boxShadow: '0 10px 30px rgba(5, 11, 32, 0.2)'
            }}
          >
            <span>Get Started</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
