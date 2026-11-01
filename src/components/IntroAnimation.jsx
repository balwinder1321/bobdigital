import React, { useState, useEffect } from 'react';

export default function IntroAnimation({ onComplete }) {
  const [phase, setPhase] = useState('reveal'); // 'reveal' -> 'glow' -> 'exit' -> 'done'

  useEffect(() => {
    // Stage 1: Logo reveals and violet glow surges
    const timer1 = setTimeout(() => {
      setPhase('glow');
    }, 700);

    // Stage 2: Exit fade & scale
    const timer2 = setTimeout(() => {
      setPhase('exit');
    }, 2100);

    // Stage 3: Finished
    const timer3 = setTimeout(() => {
      setPhase('done');
      if (onComplete) onComplete();
    }, 2800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-700 ease-out ${
        phase === 'exit'
          ? 'opacity-0 pointer-events-none scale-105 filter blur-sm'
          : 'opacity-100 pointer-events-auto'
      }`}
      style={{
        backgroundColor: '#050B20',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Ambient background glow orbs */}
      <div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(89, 56, 232, 0.4) 0%, rgba(89, 56, 232, 0.05) 50%, transparent 70%)',
          filter: 'blur(60px)',
          transform: phase === 'glow' ? 'scale(1.25)' : 'scale(0.8)',
          transition: 'transform 1.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.8s ease',
          opacity: phase === 'reveal' ? 0.4 : 0.85,
          pointerEvents: 'none'
        }}
      />

      {/* Grid line pattern background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          opacity: 0.6,
          pointerEvents: 'none'
        }}
      />

      {/* Logo Container */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transform: phase === 'reveal' ? 'translateY(16px) scale(0.95)' : 'translateY(0) scale(1)',
          opacity: phase === 'reveal' ? 0.7 : 1,
          transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease',
          textAlign: 'center',
          padding: '2rem'
        }}
      >
        {/* Actual brand logo visual or text graphic */}
        <div style={{ position: 'relative', marginBottom: '1.25rem' }}>
          <img
            src="/assets/bob-logo.png"
            alt="BOB DIGITAL"
            style={{
              maxHeight: '140px',
              maxWidth: '380px',
              width: '90vw',
              objectFit: 'contain',
              filter: phase === 'glow' ? 'drop-shadow(0 0 25px rgba(89, 56, 232, 0.6))' : 'none',
              transition: 'filter 1s ease'
            }}
          />
        </div>

        {/* Dynamic progress line */}
        <div
          style={{
            width: '180px',
            height: '2px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '2px',
            overflow: 'hidden',
            marginTop: '1.5rem',
            position: 'relative'
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              height: '100%',
              backgroundColor: '#5938E8',
              boxShadow: '0 0 10px #5938E8',
              width: phase === 'glow' || phase === 'exit' ? '100%' : '15%',
              transition: 'width 1.4s cubic-bezier(0.2, 0.8, 0.2, 1)'
            }}
          />
        </div>

        {/* Skip button for accessibility */}
        <button
          onClick={() => {
            setPhase('exit');
            setTimeout(() => {
              setPhase('done');
              if (onComplete) onComplete();
            }, 400);
          }}
          style={{
            marginTop: '2rem',
            background: 'transparent',
            border: 'none',
            color: 'rgba(255, 255, 255, 0.4)',
            fontSize: '0.78rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            padding: '0.4rem 1rem',
            borderRadius: '20px',
            transition: 'color 0.2s ease, background 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#FFFFFF';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.4)';
            e.currentTarget.style.background = 'transparent';
          }}
        >
          Skip Intro &rarr;
        </button>
      </div>
    </div>
  );
}
