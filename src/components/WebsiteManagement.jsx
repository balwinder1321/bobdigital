import React from 'react';
import { ShieldCheck, RefreshCw, HardDrive, Zap, Clock, MessageCircle, Activity } from 'lucide-react';

export default function WebsiteManagement() {
  const managementFeatures = [
    {
      icon: HardDrive,
      title: 'Daily Cloud Backups',
      description: 'Automated daily snapshots stored on redundant, encrypted cloud servers. 1-click instant restoration ensures your data is never lost.'
    },
    {
      icon: ShieldCheck,
      title: 'Active Security & Firewalls',
      description: 'Proactive malware scanning, SSL certificate renewals, brute-force defenses, and continuous hardening against modern threats.'
    },
    {
      icon: Zap,
      title: 'Continuous Speed Audits',
      description: 'Regular Core Web Vitals profiling, asset minification, cache fine-tuning, and server response monitoring for blistering load speeds.'
    },
    {
      icon: RefreshCw,
      title: 'Content & Tech Updates',
      description: 'Need new banners, blog posts, pricing adjustments, or plugin updates? We handle all requests swiftly so you stay focused on business.'
    }
  ];

  const slaMetrics = [
    { label: 'Uptime Guarantee', value: '99.9%', icon: Activity },
    { label: 'Emergency Response', value: '< 2 Hours', icon: Clock },
    { label: 'Backup Frequency', value: 'Daily', icon: HardDrive },
    { label: 'Support Channel', value: 'Direct WhatsApp', icon: MessageCircle }
  ];

  return (
    <section
      id="management"
      className="section-padding"
      style={{
        backgroundColor: '#050B20',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background glow element */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(89, 56, 232, 0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div className="section-header dark">
          <div className="badge-pill dark" style={{ marginBottom: '1rem' }}>
            Hands-Free Reliability
          </div>
          <h2
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.85rem)',
              fontWeight: 800,
              color: '#FFFFFF'
            }}
          >
            Website Management{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #7A5AF8 0%, #C4B5FD 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              & Ongoing Care
            </span>
          </h2>
          <p className="section-subtitle">
            A website is never just 'done'. We protect your investment with continuous technical supervision, automated backups, speed audits, and instant support for businesses across Hyderabad, Karimnagar, and Telangana.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.75rem',
            marginBottom: '3.5rem'
          }}
        >
          {managementFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="glass-card-dark"
                style={{
                  padding: '2.25rem 1.75rem',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  background: 'rgba(11, 19, 43, 0.7)'
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '14px',
                    backgroundColor: 'rgba(89, 56, 232, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#7A5AF8',
                    border: '1px solid rgba(89, 56, 232, 0.35)'
                  }}
                >
                  <Icon size={24} />
                </div>

                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.65rem' }}>
                    {feat.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: '#94A3B8', lineHeight: 1.6 }}>
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* SLA Guarantee Strip & CTA Card */}
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(89, 56, 232, 0.35)',
            borderRadius: '24px',
            padding: '2.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem'
          }}
        >
          {/* Metrics */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              textAlign: 'center'
            }}
          >
            {slaMetrics.map((sla, i) => {
              const SlaIcon = sla.icon;
              return (
                <div
                  key={i}
                  style={{
                    padding: '1.25rem 1rem',
                    borderRadius: '16px',
                    backgroundColor: 'rgba(5, 11, 32, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.06)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem', color: '#7A5AF8' }}>
                    <SlaIcon size={22} />
                  </div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.2rem' }}>
                    {sla.value}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {sla.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Direct CTA Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            <div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.25rem' }}>
                Have an existing website that needs reliable maintenance?
              </h4>
              <p style={{ fontSize: '0.92rem', color: '#94A3B8' }}>
                We audit, secure, speed up, and maintain websites built on WordPress, Shopify, React, or custom stacks.
              </p>
            </div>

            <a
              href="https://wa.me/916303248510?text=Hello%20BOB%20DIGITAL,%20I%20would%20like%20to%20know%20more%20about%20your%20Website%20Management%20%26%20Maintenance%20plans."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                padding: '0.85rem 1.85rem',
                fontSize: '0.95rem',
                whiteSpace: 'nowrap'
              }}
            >
              <MessageCircle size={18} />
              <span>Contact Us on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
