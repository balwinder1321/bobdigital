import React from 'react';
import { Target, Smartphone, HeartHandshake, TrendingUp, MessageCircle, MapPin, Award, Code2, ShieldCheck, CheckCircle2, UserCheck } from 'lucide-react';

export default function AboutUs() {
  const highlights = [
    {
      icon: Target,
      title: 'Business-Focused Development',
      description: 'We prioritize outcomes over buzzwords. Every layout, button, and user journey is architected to drive genuine inquiries and transactions.'
    },
    {
      icon: Smartphone,
      title: 'Modern and Responsive Design',
      description: 'Over 75% of your customers browse on mobile. We design mobile-first to ensure fluid, premium experiences across every viewport.'
    },
    {
      icon: HeartHandshake,
      title: 'Personalised Client Support',
      description: 'No ticket queues or disconnected middlemen. You collaborate directly with the founder and developer who understands your vision.'
    },
    {
      icon: TrendingUp,
      title: 'Long-Term Digital Growth',
      description: 'We build future-proof digital assets that scale effortlessly as your product catalogue, customer base, and operations expand.'
    }
  ];

  return (
    <section
      id="about"
      className="section-padding"
      style={{
        backgroundColor: '#FFFFFF',
        position: 'relative',
        borderTop: '1px solid rgba(5, 11, 32, 0.06)'
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            Leadership & Vision
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.25rem)',
              color: '#050B20',
              fontWeight: 800
            }}
          >
            Built with Vision.{' '}
            <span style={{ color: '#5938E8' }}>Driven by Technology.</span>
          </h2>
          <p className="section-subtitle">
            Founded with a clear mission: to engineer world-class web experiences for businesses that refuse to settle for mediocre templates.
          </p>
        </div>

        {/* Founder Profile Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'stretch',
            marginBottom: '4.5rem'
          }}
        >
          {/* Executive Founder Card (No photo) */}
          <div
            style={{
              backgroundColor: '#050B20',
              borderRadius: '26px',
              padding: '2.75rem 2.25rem',
              color: '#FFFFFF',
              border: '1px solid rgba(89, 56, 232, 0.35)',
              boxShadow: '0 20px 50px rgba(5, 11, 32, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Ambient Violet Glow */}
            <div
              style={{
                position: 'absolute',
                top: '-40px',
                right: '-40px',
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(89, 56, 232, 0.35) 0%, transparent 70%)',
                pointerEvents: 'none'
              }}
            />

            <div>
              {/* Header Badge */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '2rem'
                }}
              >
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '16px',
                    backgroundColor: 'rgba(89, 56, 232, 0.18)',
                    border: '1px solid rgba(89, 56, 232, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#B8A5FF'
                  }}
                >
                  <Code2 size={26} />
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#10B981',
                    backgroundColor: 'rgba(16, 185, 129, 0.12)',
                    padding: '4px 12px',
                    borderRadius: '20px'
                  }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                  Founder & Web Developer
                </div>
              </div>

              {/* Founder Name & Designation */}
              <div style={{ marginBottom: '1.75rem' }}>
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#7A5AF8',
                    display: 'block',
                    marginBottom: '0.35rem'
                  }}
                >
                  BOB DIGITAL LEADERSHIP
                </span>
                <h3
                  style={{
                    fontSize: 'clamp(1.75rem, 2.5vw, 2.2rem)',
                    fontWeight: 900,
                    color: '#FFFFFF',
                    lineHeight: 1.2,
                    marginBottom: '0.5rem'
                  }}
                >
                  Sardar Balwinder Singh
                </h3>
                <p style={{ fontSize: '1rem', color: '#B8A5FF', fontWeight: 600 }}>
                  Founder & Web Developer, BOB Digital
                </p>
              </div>

              {/* Founder Credentials & Location */}
              <div
                style={{
                  padding: '1.25rem 0',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  marginBottom: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#CBD5E1' }}>
                  <MapPin size={16} color="#7A5AF8" />
                  <span>Hyderabad, Telangana, India</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#CBD5E1' }}>
                  <ShieldCheck size={16} color="#7A5AF8" />
                  <span>Direct Technical Supervision on Every Project</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#CBD5E1' }}>
                  <UserCheck size={16} color="#7A5AF8" />
                  <span>Personalised Client Support & Consultation</span>
                </div>
              </div>

              <p style={{ fontSize: '0.94rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '2rem' }}>
                Dedicated to helping businesses scale with cutting-edge web architecture, clean engineering, and modern visual design.
              </p>
            </div>

            {/* Direct Connect Action */}
            <a
              href="https://wa.me/916303248510?text=Hello%20Sardar%20Balwinder%20Singh,%20I%20would%20like%20to%20connect%20regarding%20a%20website%20development%20project%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '0.9rem 1.5rem',
                borderRadius: '9999px',
                backgroundColor: '#5938E8',
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '0.94rem',
                textDecoration: 'none',
                boxShadow: '0 8px 25px rgba(89, 56, 232, 0.45)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#4827D1')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#5938E8')}
            >
              <MessageCircle size={18} />
              <span>Connect with Sardar Balwinder Singh</span>
            </a>
          </div>

          {/* Founder Story & Philosophy */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.85rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#5938E8',
                marginBottom: '1rem'
              }}
            >
              <Award size={18} />
              <span>Founder's Message</span>
            </div>

            <h3
              style={{
                fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)',
                fontWeight: 800,
                color: '#050B20',
                marginBottom: '1.25rem',
                lineHeight: 1.25
              }}
            >
              "Your website is the definitive digital storefront of your business."
            </h3>

            <p style={{ fontSize: '1.02rem', lineHeight: 1.7, color: '#4A5568', marginBottom: '1.25rem' }}>
              <strong>BOB Digital</strong> was established to help businesses build a strong digital presence through quality website development, modern design and reliable technical solutions.
            </p>

            <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: '#5A657D', marginBottom: '1.75rem' }}>
              Based in the tech capital of Hyderabad, we believe that an exceptional website does not just look impressive—it commands trust, communicates value clearly, and reliably converts visitors into customers. By pairing world-class modern UI aesthetics with resilient, clean code, we ensure your business stays ahead of the competition.
            </p>

            {/* Quote Block */}
            <div
              style={{
                backgroundColor: 'rgba(89, 56, 232, 0.05)',
                borderLeft: '4px solid #5938E8',
                padding: '1.25rem 1.5rem',
                borderRadius: '0 16px 16px 0',
                marginBottom: '2rem'
              }}
            >
              <p style={{ fontSize: '0.95rem', fontStyle: 'italic', color: '#050B20', lineHeight: 1.6 }}>
                "We treat every client website as if it were our own company's flagship product. No shortcuts, no bloatware—just pure technical excellence."
              </p>
              <div style={{ marginTop: '0.5rem', fontSize: '0.82rem', fontWeight: 700, color: '#5938E8' }}>
                — Sardar Balwinder Singh, Founder & Web Developer
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card-light"
                style={{
                  padding: '2rem 1.75rem',
                  borderRadius: '20px',
                  background: '#FFFFFF',
                  border: '1px solid rgba(5, 11, 32, 0.07)'
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    backgroundColor: 'rgba(89, 56, 232, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#5938E8',
                    marginBottom: '1.25rem'
                  }}
                >
                  <Icon size={24} />
                </div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#050B20', marginBottom: '0.5rem' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#5A657D', lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
