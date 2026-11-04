import React, { useState, useEffect, useRef } from 'react';

export default function IntroAnimation({ onExit, onComplete }) {
  const [phase, setPhase] = useState('reveal'); // 'reveal' -> 'glow' -> 'exit' -> 'done'
  
  // Guard against React StrictMode duplicate execution and re-renders
  const hasStartedRef = useRef(false);
  const onExitRef = useRef(onExit);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onExitRef.current = onExit;
    onCompleteRef.current = onComplete;
  }, [onExit, onComplete]);

  useEffect(() => {
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;

    // Stage 1: Logo reveals and violet glow surges
    const timer1 = setTimeout(() => {
      setPhase('glow');
    }, 700);

    // Stage 2: Exit fade & scale begins
    const timer2 = setTimeout(() => {
      setPhase('exit');
      if (onExitRef.current) onExitRef.current();
    }, 2100);

    // Stage 3: Finished completely
    const timer3 = setTimeout(() => {
      setPhase('done');
      if (onCompleteRef.current) onCompleteRef.current();
    }, 2800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const handleSkip = () => {
    setPhase('exit');
    if (onExitRef.current) onExitRef.current();
    setTimeout(() => {
      setPhase('done');
      if (onCompleteRef.current) onCompleteRef.current();
    }, 350);
  };

  if (phase === 'done') return null;

  return (
    <div
      id="bob-intro-overlay"
      aria-hidden={phase === 'exit'}
      style={{
        backgroundColor: '#050B20',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), filter 0.7s ease',
        opacity: phase === 'exit' ? 0 : 1,
        transform: phase === 'exit' ? 'scale(1.05)' : 'scale(1)',
        filter: phase === 'exit' ? 'blur(8px)' : 'none',
        pointerEvents: phase === 'exit' ? 'none' : 'auto'
      }}
    >
      {/* Ambient background glow orbs */}
      <div
        style={{
          position: 'absolute',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(89, 56, 232, 0.45) 0%, rgba(89, 56, 232, 0.08) 50%, transparent 70%)',
          filter: 'blur(70px)',
          transform: phase === 'glow' || phase === 'exit' ? 'scale(1.3)' : 'scale(0.85)',
          transition: 'transform 1.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.8s ease',
          opacity: phase === 'reveal' ? 0.35 : 0.9,
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
          transform: phase === 'reveal' ? 'translateY(14px) scale(0.96)' : 'translateY(0) scale(1)',
          opacity: phase === 'reveal' ? 0.75 : 1,
          transition: 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease',
          textAlign: 'center',
          padding: '2rem'
        }}
      >
        {/* Actual brand logo visual */}
        <div style={{ position: 'relative', marginBottom: '1.25rem' }}>
          <img
            src="/assets/bob-logo.png"
            alt="BOB Digital - Web Development & Web Design Studio Hyderabad and Karimnagar"
            width="380"
            height="140"
            style={{
              maxHeight: '140px',
              maxWidth: '380px',
              width: '90vw',
              objectFit: 'contain',
              filter: phase === 'glow' ? 'drop-shadow(0 0 28px rgba(89, 56, 232, 0.65))' : 'drop-shadow(0 0 10px rgba(89, 56, 232, 0.2))',
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
              boxShadow: '0 0 12px #5938E8',
              width: phase === 'glow' || phase === 'exit' ? '100%' : '15%',
              transition: 'width 1.4s cubic-bezier(0.2, 0.8, 0.2, 1)'
            }}
          />
        </div>

        {/* Skip button for accessibility */}
        <button
          onClick={handleSkip}
          aria-label="Skip intro animation"
          style={{
            marginTop: '2rem',
            background: 'transparent',
            border: 'none',
            color: 'rgba(255, 255, 255, 0.45)',
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
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.45)';
            e.currentTarget.style.background = 'transparent';
          }}
        >
          Skip Intro &rarr;
        </button>
      </div>
    </div>
  );
}
