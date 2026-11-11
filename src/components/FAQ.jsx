import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Can BOB Digital build a website for my business in Hyderabad or Karimnagar?',
      a: 'Yes, absolutely! BOB Digital specializes in professional website development and modern web design for businesses across Hyderabad and Karimnagar, Telangana. Whether you run a retail showroom, clinic, restaurant, startup, or educational institution, we build custom, high-speed, mobile-responsive websites and e-commerce platforms engineered to attract local customers and build online authority.'
    },
    {
      q: 'How much does it cost to build a website in Hyderabad or Karimnagar?',
      a: 'Our website packages are completely transparent and budget-friendly for local businesses. The Starter Plan is ₹4,999 (ideal for small businesses needing a clean 5-page site), our most popular Business Plan is ₹9,999 (custom design up to 10 pages with SEO setup), and Custom / E-Commerce Plans start from ₹14,999+ for full online stores with UPI/Razorpay payment gateway integrations. We have no hidden charges.'
    },
    {
      q: 'What types of websites does BOB Digital build?',
      a: 'We build corporate websites, e-commerce stores with Indian payment gateways (UPI, Google Pay, PhonePe, Cards), portfolio sites for professionals, booking portals, and bespoke web applications. Every website is built with clean modern code (React, Next.js architecture), lightning-fast loading speeds under 1.5s, and 100% mobile responsiveness.'
    },
    {
      q: 'How long does it take to build and launch my website?',
      a: 'A standard 5 to 10-page business website is typically built, reviewed, and launched within 3 to 7 working days. More comprehensive e-commerce platforms or custom applications usually take 10 to 14 days, including payment testing, mobile optimization, and local SEO setup.'
    },
    {
      q: 'Will my website show on Google when people search in Hyderabad or Karimnagar?',
      a: 'Yes! Every website we build includes foundational technical and on-page SEO: custom meta tags, schema structured data (LocalBusiness/ProfessionalService), XML sitemap submission, Google Search Console indexing configuration, and mobile speed optimization. We also guide you on setting up your Google Business Profile so your business ranks on Google Maps when local customers search for your services in Hyderabad or Karimnagar.'
    },
    {
      q: 'Do you offer ongoing website management and maintenance after launch?',
      a: 'Yes. We provide complete hands-free website management plans including 24/7 uptime monitoring, daily automated cloud backups, regular security patching, speed audits, and quick content updates. You can focus entirely on running your business while we handle all technical maintenance.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="faq"
      className="section-padding"
      style={{
        backgroundColor: '#FFFFFF',
        position: 'relative',
        borderTop: '1px solid rgba(5, 11, 32, 0.06)'
      }}
    >
      <div className="container-custom" style={{ maxWidth: '960px', margin: '0 auto' }}>
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <HelpCircle size={15} />
            <span>Frequently Asked Questions</span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.85rem)',
              color: '#050B20',
              fontWeight: 800,
              lineHeight: 1.2
            }}
          >
            Looking to Build a Website in{' '}
            <span style={{ color: '#5938E8' }}>Hyderabad or Karimnagar?</span>
          </h2>
          <p className="section-subtitle" style={{ maxWidth: '680px', margin: '0.75rem auto 0' }}>
            Common questions answered about website development costs, delivery timelines, local SEO, and ongoing maintenance with BOB Digital.
          </p>
        </div>

        {/* Accordion Container */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  borderRadius: '18px',
                  border: isOpen ? '1px solid rgba(89, 56, 232, 0.35)' : '1px solid rgba(5, 11, 32, 0.08)',
                  backgroundColor: isOpen ? '#FBFBFE' : '#FFFFFF',
                  boxShadow: isOpen ? '0 10px 30px rgba(89, 56, 232, 0.08)' : '0 2px 8px rgba(0, 0, 0, 0.02)',
                  transition: 'all 0.25s ease',
                  overflow: 'hidden'
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    padding: '1.4rem 1.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#050B20',
                    fontFamily: 'inherit'
                  }}
                >
                  <span
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: isOpen ? '#5938E8' : '#050B20',
                      transition: 'color 0.2s ease',
                      lineHeight: 1.4
                    }}
                  >
                    {faq.q}
                  </span>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: isOpen ? 'rgba(89, 56, 232, 0.12)' : 'rgba(5, 11, 32, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      color: isOpen ? '#5938E8' : '#5A657D',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease, background-color 0.2s ease'
                    }}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 1.75rem 1.5rem',
                      color: '#4A5568',
                      fontSize: '0.96rem',
                      lineHeight: 1.7,
                      borderTop: '1px solid rgba(89, 56, 232, 0.08)',
                      paddingTop: '1.1rem'
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Question CTA */}
        <div
          style={{
            marginTop: '3rem',
            padding: '1.75rem 2rem',
            borderRadius: '20px',
            backgroundColor: '#050B20',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.25rem'
          }}
        >
          <div>
            <div style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.25rem' }}>
              Have a specific question about your website project?
            </div>
            <div style={{ fontSize: '0.9rem', color: '#94A3B8' }}>
              Speak directly with Sardar Balwinder Singh (Founder & Developer) on WhatsApp.
            </div>
          </div>
          <a
            href="https://wa.me/916303248510?text=Hello%20BOB%20DIGITAL,%20I%20have%20a%20question%20about%20building%20a%20website%20in%20Hyderabad%20/%20Karimnagar."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#25D366',
              color: '#FFFFFF',
              padding: '0.75rem 1.4rem',
              borderRadius: '9999px',
              fontWeight: 700,
              fontSize: '0.92rem',
              textDecoration: 'none',
              boxShadow: '0 6px 20px rgba(37, 211, 102, 0.35)',
              transition: 'transform 0.2s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <MessageCircle size={18} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
