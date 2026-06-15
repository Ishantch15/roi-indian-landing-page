import AuditForm from './AuditForm';
import { MapPin, Mail } from 'lucide-react';
export default function CTASection({ onAuditSuccess }) {
  return (
    <section className="cta">
      <style>{`
  .cta-address-desktop { display: block; }
  .cta-address-mobile  { display: none;  }
  @media (max-width: 1024px) {
    .cta-address-desktop { display: none; }
    .cta-address-mobile  { display: block; }
  }
`}</style>
      <div className="cta-container">
        <div className="cta-grid">
          <div className="cta-left">
            <div className="cta-address-desktop"> {/* OR cta-address-mobile for the second one */}
              <div style={{ marginTop: '12px', padding: '14px 20px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.04)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                  <MapPin size={14} color="rgba(255,255,255,0.55)" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: '1.7', margin: 0 }}>
                    A-21, 1st Floor, Block A, Sector 67,<br />Noida, Uttar Pradesh, 201301
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Mail size={14} color="rgba(255,255,255,0.55)" style={{ flexShrink: 0 }} />
                  <a href="mailto:growth@roispectrum.com" style={{ fontSize: '13px', color: '#ff6600', textDecoration: 'none' }}>
                    growth@roispectrum.com
                  </a>
                </div>
              </div>
            </div>
            <h2 className="cta-h2">
              <span style={{ color: 'white', fontStyle: 'normal' }}>Claim Your Free </span>
              <span style={{ color: '#ff6600', fontStyle: 'italic' }}>SEO & AI Visibility Audit Today.</span>
            </h2>
            <p className="cta-p">Our team of senior analysts will manually review your website, identify "leaking" conversion paths, and build a customized AI Search roadmap for your brand. No generic reports. No automated fluff.</p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '10px', padding: '16px 20px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.04)', maxWidth: '100%' }}>
              <span style={{ fontSize: '18px', color: '#ff6600', flexShrink: 0 }}>🛡</span>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)', lineHeight: '1.6', margin: 0 }}>
                Verified data-driven results for 100+ brands worldwide.
              </p>
            </div>
            {/* Desktop Address Block */}
            <div
              style={{
                padding: '16px 20px',
                borderRadius: '14px',
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.04)',
                maxWidth: '100%',
                textAlign: 'left',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  marginBottom: '10px',
                }}
              >
                <MapPin
                  size={16}
                  color="#ff6600"
                  style={{ flexShrink: 0, marginTop: '2px' }}
                />
                <p
                  style={{
                    fontSize: '13px',
                    color: 'rgba(255,255,255,0.65)',
                    lineHeight: '1.6',
                    margin: 0,
                  }}
                >
                  A-21, 1st Floor, Block A, Sector 67, Noida, Uttar Pradesh,
                  201301
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <Mail
                  size={16}
                  color="#ff6600"
                  style={{ flexShrink: 0 }}
                />

                <a
                  href="mailto:growth@roispectrum.com"
                  style={{
                    fontSize: '13px',
                    color: '#ff9933',
                    lineHeight: '1.6',
                    textDecoration: 'none',
                    fontWeight: 600,
                  }}
                >
                  growth@roispectrum.com
                </a>
              </div>
            </div>
          </div>

          <div className="cta-form">
            <AuditForm onSubmit={onAuditSuccess} />
          </div>

          {/* Mobile Address Block */}
          <div
            className="cta-address-mobile"
            style={{
              padding: '16px 20px',
              borderRadius: '14px',
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(255,255,255,0.04)',
              textAlign: 'left',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                marginBottom: '10px',
              }}
            >
              <MapPin
                size={16}
                color="#ff6600"
                style={{ flexShrink: 0, marginTop: '2px' }}
              />
              <p
                style={{
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.65)',
                  lineHeight: '1.6',
                  margin: 0,
                }}
              >
                A-21, 1st Floor, Block A, Sector 67, Noida, Uttar Pradesh,
                201301
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <Mail
                size={16}
                color="#ff6600"
                style={{ flexShrink: 0 }}
              />

              <a
                href="mailto:growth@roispectrum.com"
                style={{
                  fontSize: '13px',
                  color: '#ff9933',
                  lineHeight: '1.6',
                  textDecoration: 'none',
                  fontWeight: 600,
                }}
              >
                growth@roispectrum.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
