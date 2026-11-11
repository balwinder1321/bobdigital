import React from 'react';
import { Mail, MapPin, ArrowUp, MessageCircle } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer
      style={{
        backgroundColor: '#050B20',
        color: '#FFFFFF',
        borderTop: '1px solid rgba(89, 56, 232, 0.25)',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '5rem',
        paddingBottom: '3rem'
      }}
    >
      {/* Ambient background glow */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '300px',
          background: 'radial-gradient(ellipse at center, rgba(89, 56, 232, 0.2) 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 2 }}>
        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem'
          }}
        >
          {/* Col 1: Brand Info */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 900,
                  fontSize: '1.75rem',
                  letterSpacing: '-0.03em',
                  color: '#FFFFFF'
                }}
              >
                BOB
              </span>
              <div
                style={{
                  width: '7px',
                  height: '20px',
                  backgroundColor: '#5938E8',
                  transform: 'skewX(-20deg)',
                  borderRadius: '1px'
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  letterSpacing: '0.22em',
                  color: '#CBD5E1',
                  marginLeft: '2px',
                  marginTop: '4px'
                }}
              >
                DIGITAL
              </span>
            </div>

            <p style={{ fontSize: '1rem', fontWeight: 600, color: '#D4C9FF', marginBottom: '0.85rem' }}>
              Websites That Grow Businesses.
            </p>

            <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Hyderabad & Karimnagar's dedicated web development studio crafting high-converting websites, modern web design, and scalable e-commerce solutions across Telangana.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.8rem',
                color: '#CBD5E1',
                padding: '6px 14px',
                borderRadius: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <MapPin size={14} color="#7A5AF8" />
              <span>Serving Hyderabad & Karimnagar, Telangana</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#FFFFFF',
                marginBottom: '1.25rem'
              }}
            >
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'Home', href: '#home' },
                { label: 'Services', href: '#services' },
                { label: 'Our Work', href: '#work' },
                { label: 'Pricing Plans', href: '#pricing' },
                { label: 'Website Management', href: '#management' },
                { label: 'About Us', href: '#about' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Contact', href: '#contact' },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    style={{
                      color: '#94A3B8',
                      textDecoration: 'none',
                      fontSize: '0.92rem',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#FFFFFF',
                marginBottom: '1.25rem'
              }}
            >
              Specializations
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                'Website Development in Hyderabad',
                'Web Design in Karimnagar',
                'E-Commerce Platforms & Stores',
                'Custom React Web Applications',
                'Technical Local SEO & Speed Tuning',
                'Ongoing Website Maintenance'
              ].map((srv, idx) => (
                <li key={idx} style={{ fontSize: '0.92rem', color: '#94A3B8' }}>
                  {srv}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Direct Connect */}
          <div>
            <h4
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#FFFFFF',
                marginBottom: '1.25rem'
              }}
            >
              Direct Studio Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a
                href="https://wa.me/916303248510"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: '#25D366',
                  textDecoration: 'none',
                  fontSize: '0.94rem',
                  fontWeight: 600
                }}
              >
                <MessageCircle size={18} />
                <span>+91 6303248510</span>
              </a>

              <a
                href="mailto:bobdigitalpvt@gmail.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: '#CBD5E1',
                  textDecoration: 'none',
                  fontSize: '0.92rem'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#5938E8')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#CBD5E1')}
              >
                <Mail size={18} />
                <span>bobdigitalpvt@gmail.com</span>
              </a>

              <div style={{ marginTop: '0.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontSize: '0.82rem', color: '#CBD5E1', fontWeight: 600 }}>
                  Founder & Web Developer:
                </div>
                <div style={{ fontSize: '0.94rem', color: '#FFFFFF', fontWeight: 700, marginTop: '2px' }}>
                  Sardar Balwinder Singh
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div style={{ fontSize: '0.86rem', color: '#94A3B8' }}>
            © {CURRENT_YEAR} BOB DIGITAL. All rights reserved. Professional Web Development, Web Design & E-Commerce Studio in Hyderabad & Karimnagar, Telangana.
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#FFFFFF',
              padding: '0.5rem 1.1rem',
              borderRadius: '20px',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.16)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)')}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
