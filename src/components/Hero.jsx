import React from 'react';
import { ArrowUpRight, ChevronDown, Sparkles, CheckCircle2, ShieldCheck, Zap, TrendingUp } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
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
    <section
      id="home"
      style={{
        position: 'relative',
        backgroundColor: '#050B20',
        color: '#FFFFFF',
        paddingTop: '140px',
        paddingBottom: '100px',
        overflow: 'hidden'
      }}
    >
      {/* Background radial glow & geometric grid */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '600px',
          background: 'radial-gradient(ellipse at center, rgba(89, 56, 232, 0.28) 0%, rgba(89, 56, 232, 0.05) 50%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          right: '5%',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(122, 90, 248, 0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '54px 54px',
          opacity: 0.7,
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 2 }}>
        {/* Top Centered Content */}
        <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
          {/* Status Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(89, 56, 232, 0.14)',
              border: '1px solid rgba(89, 56, 232, 0.35)',
              marginBottom: '1.75rem',
              backdropFilter: 'blur(8px)'
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#10B981',
                boxShadow: '0 0 10px #10B981'
              }}
            />
            <span style={{ fontSize: '0.84rem', fontWeight: 600, color: '#D4C9FF', letterSpacing: '0.02em' }}>
              Hyderabad Web Development Studio • Accepting New Projects
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: '-0.035em',
              marginBottom: '1.5rem',
              color: '#FFFFFF'
            }}
          >
            Websites That{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #7A5AF8 0%, #A384FF 50%, #FFFFFF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}
            >
              Grow Businesses.
            </span>
          </h1>

          {/* Description */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              lineHeight: 1.65,
              color: '#94A3B8',
              maxWidth: '680px',
              margin: '0 auto 2.5rem',
              fontWeight: 400
            }}
          >
            We create high-quality, modern websites that help businesses build credibility, attract customers and grow online.
          </p>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '3.5rem'
            }}
          >
            <a
              href="#services"
              onClick={(e) => handleScrollTo(e, 'services')}
              className="btn-secondary"
              style={{
                padding: '0.9rem 2rem',
                fontSize: '1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                color: '#FFFFFF',
                borderColor: 'rgba(255, 255, 255, 0.18)',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
              }}
            >
              <span>Explore Our Services</span>
              <ChevronDown size={18} />
            </a>

            <a
              href="https://wa.me/916303248510?text=Hello%20BOB%20DIGITAL,%20I%20would%20like%20to%20get%20started%20with%20a%20website%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                padding: '0.9rem 2.2rem',
                fontSize: '1rem',
                boxShadow: '0 8px 30px rgba(89, 56, 232, 0.45)'
              }}
            >
              <span>Get Started</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        {/* Laptop & Device Showcase with Floating Badges */}
        <div style={{ position: 'relative', maxWidth: '1060px', margin: '0 auto', perspective: '1200px' }}>
          {/* Laptop Screen Frame */}
          <div
            style={{
              backgroundColor: '#0F172A',
              borderRadius: '20px 20px 6px 6px',
              padding: '12px 12px 0 12px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 25px 70px -15px rgba(0, 0, 0, 0.8), 0 0 50px rgba(89, 56, 232, 0.22)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Window bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '6px 10px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                marginBottom: '8px'
              }}
            >
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#EF4444' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#F59E0B' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10B981' }} />
              </div>
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  padding: '3px 18px',
                  borderRadius: '12px',
                  fontSize: '0.74rem',
                  color: '#94A3B8',
                  letterSpacing: '0.02em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#5938E8' }} />
                bobdigital.in
              </div>
              <div style={{ width: '40px' }} />
            </div>

            {/* Showcase Image */}
            <div style={{ position: 'relative', borderRadius: '8px 8px 0 0', overflow: 'hidden' }}>
              <img
                src="/assets/hero-dashboard.jpg"
                alt="BOB DIGITAL High Performance Web Platform"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  maxHeight: '520px',
                  objectFit: 'cover',
                  objectPosition: 'top center'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, transparent 70%, rgba(5, 11, 32, 0.8) 100%)',
                  pointerEvents: 'none'
                }}
              />
            </div>
          </div>

          {/* Laptop Base Stand */}
          <div
            style={{
              height: '14px',
              backgroundColor: '#1E293B',
              borderRadius: '0 0 18px 18px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderTop: 'none',
              maxWidth: '1120px',
              margin: '0 auto',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
              position: 'relative'
            }}
          >
            <div
              style={{
                width: '140px',
                height: '5px',
                backgroundColor: '#334155',
                borderRadius: '0 0 4px 4px',
                margin: '0 auto'
              }}
            />
          </div>

          {/* Floating Metric Card 1: Top Left */}
          <div
            className="animate-float"
            style={{
              position: 'absolute',
              top: '15%',
              left: '-20px',
              backgroundColor: 'rgba(5, 11, 32, 0.88)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(89, 56, 232, 0.4)',
              borderRadius: '16px',
              padding: '14px 18px',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4), 0 0 20px rgba(89, 56, 232, 0.25)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              zIndex: 3
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                backgroundColor: 'rgba(89, 56, 232, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#7A5AF8'
              }}
            >
              <TrendingUp size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Conversion Lift
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF' }}>
                +300.4%
              </div>
            </div>
          </div>

          {/* Floating Metric Card 2: Bottom Right */}
          <div
            className="animate-float"
            style={{
              position: 'absolute',
              bottom: '12%',
              right: '-20px',
              animationDelay: '1.5s',
              backgroundColor: 'rgba(5, 11, 32, 0.88)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(16, 185, 129, 0.35)',
              borderRadius: '16px',
              padding: '14px 18px',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              zIndex: 3
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#10B981'
              }}
            >
              <Zap size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Google PageSpeed
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF' }}>
                99 / 100 Score
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges Strip */}
        <div
          style={{
            marginTop: '4.5rem',
            paddingTop: '2.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            textAlign: 'center'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <CheckCircle2 size={18} color="#7A5AF8" />
            <span style={{ fontSize: '0.9rem', color: '#CBD5E1', fontWeight: 500 }}>
              100% Mobile Responsive
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <Zap size={18} color="#7A5AF8" />
            <span style={{ fontSize: '0.9rem', color: '#CBD5E1', fontWeight: 500 }}>
              Ultra-Fast Performance
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <ShieldCheck size={18} color="#7A5AF8" />
            <span style={{ fontSize: '0.9rem', color: '#CBD5E1', fontWeight: 500 }}>
              Secure & SEO Optimised
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <Sparkles size={18} color="#7A5AF8" />
            <span style={{ fontSize: '0.9rem', color: '#CBD5E1', fontWeight: 500 }}>
              Direct Founder Support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
