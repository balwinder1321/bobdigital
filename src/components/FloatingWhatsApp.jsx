import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);

  return (
    <aside
      aria-label="Direct WhatsApp Support"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 900,
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}
    >
      {/* Tooltip */}
      {hovered && (
        <div
          style={{
            backgroundColor: '#050B20',
            color: '#FFFFFF',
            padding: '6px 14px',
            borderRadius: '12px',
            fontSize: '0.82rem',
            fontWeight: 600,
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(89, 56, 232, 0.4)',
            whiteSpace: 'nowrap',
            animation: 'fadeIn 0.2s ease-out'
          }}
        >
          Chat on WhatsApp with Founder
        </div>
      )}

      {/* Floating Button */}
      <a
        href="https://wa.me/916303248510?text=Hi%20BOB%20DIGITAL,%20I%20have%20an%20enquiry%20regarding%20website%20services%20in%20Hyderabad%20/%20Karimnagar."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with BOB DIGITAL on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 30px rgba(37, 211, 102, 0.45)',
          textDecoration: 'none',
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
          position: 'relative'
        }}
      >
        {/* Pulse ring */}
        <span
          style={{
            position: 'absolute',
            inset: '-4px',
            borderRadius: '50%',
            border: '2px solid rgba(37, 211, 102, 0.6)',
            animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
            pointerEvents: 'none'
          }}
        />
        <MessageCircle size={28} />
      </a>

      <style>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }
      `}</style>
    </aside>
  );
}
