import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    service: 'Website Development',
    plan: 'Business Plan (₹9,999)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const servicesList = [
    'Website Development',
    'E-Commerce Platform',
    'Custom Website Development',
    'Website Management & Maintenance',
    'Other / Consultation'
  ];

  const plansList = [
    'Starter Plan (₹4,999)',
    'Business Plan (₹9,999) - Most Popular',
    'Custom Plan (Starting ₹14,999+)',
    'Management Only Plan',
    'Undecided / Need Consultation'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format WhatsApp message with all entered details
    const text = `*New Website Project Enquiry — BOB DIGITAL*

*Name:* ${formData.name}
*Business / Brand:* ${formData.business}
*Email:* ${formData.email}
*Service Required:* ${formData.service}
*Preferred Plan:* ${formData.plan}
*Project Details:*
${formData.message || 'Ready to discuss requirements.'}

_Sent via BOB DIGITAL Website Enquiry Form_`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/916303248510?text=${encodedText}`;

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 90,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#5938E8', '#7A5AF8', '#10B981', '#FFFFFF']
      });
    } catch {
      // Ignore if confetti is not available
    }

    setSubmitted(true);
    setIsSubmitting(false);

    // Open WhatsApp in new tab after brief delay
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  return (
    <section
      id="contact"
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
            Get In Touch
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.25rem)',
              color: '#050B20',
              fontWeight: 800
            }}
          >
            Let's Build Something{' '}
            <span style={{ color: '#5938E8' }}>Exceptional Together.</span>
          </h2>
          <p className="section-subtitle">
            Tell us about your brand vision, requirements, or desired timeline. We will review your goals and provide a direct roadmap and quote.
          </p>
        </div>

        {/* 2-Column Contact Container */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}
        >
          {/* Left: Contact Information Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Quick WhatsApp Connect Banner */}
            <div
              style={{
                backgroundColor: '#050B20',
                color: '#FFFFFF',
                borderRadius: '24px',
                padding: '2.25rem 2rem',
                border: '1px solid rgba(89, 56, 232, 0.35)',
                boxShadow: '0 15px 40px rgba(5, 11, 32, 0.15)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-30px',
                  right: '-30px',
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(89, 56, 232, 0.35) 0%, transparent 70%)',
                  pointerEvents: 'none'
                }}
              />

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(37, 211, 102, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#25D366'
                  }}
                >
                  <MessageCircle size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#10B981', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Fastest Response
                  </div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF' }}>
                    Direct WhatsApp
                  </h4>
                </div>
              </div>

              <p style={{ fontSize: '0.92rem', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Prefer an instant chat? Connect directly with Sardar Balwinder Singh to discuss requirements, pricing, or technical questions.
              </p>

              <a
                href="https://wa.me/916303248510?text=Hello%20BOB%20DIGITAL,%20I%20would%20like%20to%20enquire%20about%20a%20website%20project."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#25D366',
                  color: '#FFFFFF',
                  padding: '0.85rem 1.6rem',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  fontSize: '0.94rem',
                  textDecoration: 'none',
                  boxShadow: '0 6px 20px rgba(37, 211, 102, 0.35)',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <MessageCircle size={18} />
                <span>+91 6303248510</span>
              </a>
            </div>

            {/* Email Card */}
            <div
              className="glass-card-light"
              style={{
                padding: '1.75rem',
                borderRadius: '20px',
                background: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                border: '1px solid rgba(5, 11, 32, 0.08)'
              }}
            >
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(89, 56, 232, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#5938E8',
                  flexShrink: 0
                }}
              >
                <Mail size={24} />
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', color: '#718096', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Email Inquiries
                </div>
                <a
                  href="mailto:bobdigitalpvt@gmail.com"
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#050B20',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#5938E8')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#050B20')}
                >
                  bobdigitalpvt@gmail.com
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div
              className="glass-card-light"
              style={{
                padding: '1.75rem',
                borderRadius: '20px',
                background: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                border: '1px solid rgba(5, 11, 32, 0.08)'
              }}
            >
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(89, 56, 232, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#5938E8',
                  flexShrink: 0
                }}
              >
                <MapPin size={24} />
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', color: '#718096', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Studio Headquarters
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#050B20' }}>
                  Hyderabad, Telangana, India
                </div>
              </div>
            </div>

            {/* Operating Response Indicator */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.75rem 1rem',
                backgroundColor: 'rgba(16, 185, 129, 0.08)',
                borderRadius: '12px',
                border: '1px solid rgba(16, 185, 129, 0.2)'
              }}
            >
              <Clock size={16} color="#10B981" />
              <span style={{ fontSize: '0.84rem', color: '#065F46', fontWeight: 500 }}>
                Typical response time: <strong>15–30 minutes</strong> during working hours.
              </span>
            </div>
          </div>

          {/* Right: Working Interactive Enquiry Form */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '26px',
              padding: '2.5rem',
              border: '1px solid rgba(5, 11, 32, 0.1)',
              boxShadow: '0 20px 45px rgba(5, 11, 32, 0.06)'
            }}
          >
            <div style={{ marginBottom: '1.75rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#050B20', marginBottom: '0.35rem' }}>
                Project Enquiry Form
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#718096' }}>
                Enter your details below. On clicking submit, your enquiry will be formatted and opened directly in WhatsApp.
              </p>
            </div>

            {submitted && (
              <div
                style={{
                  backgroundColor: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid #10B981',
                  borderRadius: '14px',
                  padding: '1.25rem',
                  marginBottom: '1.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <CheckCircle2 size={24} color="#10B981" />
                <div>
                  <div style={{ fontSize: '0.94rem', fontWeight: 700, color: '#065F46' }}>
                    Enquiry Form Processed!
                  </div>
                  <div style={{ fontSize: '0.84rem', color: '#047857' }}>
                    Redirecting to WhatsApp with your project message. If WhatsApp did not open, you can also click the direct chat button.
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
              {/* Name & Business Name Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: '#050B20',
                      marginBottom: '0.45rem'
                    }}
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      border: '1px solid rgba(5, 11, 32, 0.15)',
                      fontSize: '0.95rem',
                      backgroundColor: '#F7F7FA',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#5938E8')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(5, 11, 32, 0.15)')}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: '#050B20',
                      marginBottom: '0.45rem'
                    }}
                  >
                    Business / Brand Name *
                  </label>
                  <input
                    type="text"
                    name="business"
                    required
                    placeholder="e.g. Apex Tech / Zenith Cafe"
                    value={formData.business}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      border: '1px solid rgba(5, 11, 32, 0.15)',
                      fontSize: '0.95rem',
                      backgroundColor: '#F7F7FA',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#5938E8')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(5, 11, 32, 0.15)')}
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: '#050B20',
                    marginBottom: '0.45rem'
                  }}
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(5, 11, 32, 0.15)',
                    fontSize: '0.95rem',
                    backgroundColor: '#F7F7FA',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#5938E8')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(5, 11, 32, 0.15)')}
                />
              </div>

              {/* Service Required & Plan Selection */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: '#050B20',
                      marginBottom: '0.45rem'
                    }}
                  >
                    Service Required
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      border: '1px solid rgba(5, 11, 32, 0.15)',
                      fontSize: '0.95rem',
                      backgroundColor: '#F7F7FA',
                      outline: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    {servicesList.map((srv, i) => (
                      <option key={i} value={srv}>
                        {srv}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: '#050B20',
                      marginBottom: '0.45rem'
                    }}
                  >
                    Target Plan / Budget
                  </label>
                  <select
                    name="plan"
                    value={formData.plan}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      border: '1px solid rgba(5, 11, 32, 0.15)',
                      fontSize: '0.95rem',
                      backgroundColor: '#F7F7FA',
                      outline: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    {plansList.map((pln, i) => (
                      <option key={i} value={pln}>
                        {pln}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: '#050B20',
                    marginBottom: '0.45rem'
                  }}
                >
                  Project Details / Specific Goals
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us what you want to achieve with your website (e.g. number of pages, design preferences, reference links, desired launch date)..."
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(5, 11, 32, 0.15)',
                    fontSize: '0.95rem',
                    backgroundColor: '#F7F7FA',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#5938E8')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(5, 11, 32, 0.15)')}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary"
                style={{
                  padding: '1rem',
                  fontSize: '1rem',
                  fontWeight: 700,
                  width: '100%',
                  marginTop: '0.5rem',
                  cursor: isSubmitting ? 'wait' : 'pointer'
                }}
              >
                <Send size={18} />
                <span>Submit & Chat on WhatsApp</span>
              </button>

              <div style={{ textAlign: 'center', fontSize: '0.78rem', color: '#718096', marginTop: '0.25rem' }}>
                🔒 Your privacy is strictly protected. No spam ever.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
