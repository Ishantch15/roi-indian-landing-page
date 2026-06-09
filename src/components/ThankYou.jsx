import { useEffect } from 'react';
import logo from '../assets/roilogo.jpg';
import heroVideo from '../assets/video.mp4';
import { Search, DollarSign, Mail, Clock } from 'lucide-react';
export default function ThankYou({ onGoHome }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f8f9fb',
      fontFamily: 'Arial, sans-serif',
      color: '#1a1a1a',
    }}>

      {/* Background glow */}
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none',
        background: `
          radial-gradient(ellipse 60% 40% at 50% 0%, rgba(255,102,0,0.06) 0%, transparent 70%),
          radial-gradient(ellipse 40% 40% at 80% 80%, rgba(255,153,51,0.04) 0%, transparent 60%)
        `,
      }} />

      {/* ===================== HERO ===================== */}
      <section style={{
        textAlign: 'center',
        padding: '64px 24px 48px',
        position: 'relative',
        zIndex: 1,
        maxWidth: '700px',
        margin: '0 auto',
      }}>

        {/* Logo */}
        <div style={{ marginBottom: '24px' }}>
          <img src={logo} alt="ROI Spectrum" style={{ height: '52px', width: 'auto', margin: '0 auto' }} />
        </div>

        {/* Checkmark */}
        <div style={{
          width: '64px', height: '64px',
          background: 'linear-gradient(135deg, #ff6600, #ff9933)',
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 28px',
          boxShadow: '0 8px 32px rgba(255,102,0,0.25)',
          fontSize: '26px', color: 'white',
        }}>✓</div>

        <h1 style={{
          fontSize: 'clamp(26px, 5vw, 40px)',
          fontWeight: 700, lineHeight: 1.2, marginBottom: '16px',
          letterSpacing: '-0.5px', color: '#1a1a1a',
        }}>
          Thank You for Choosing{' '}
          <span style={{ color: '#ff6600', fontStyle: 'italic' }}>ROI Spectrum.</span>
        </h1>

        <p style={{
          fontSize: '16px', color: '#555', lineHeight: 1.7,
          maxWidth: '520px', margin: '0 auto 36px',
        }}>
          Your audit request is being processed. While our engine parses your data, take the next step toward market dominance with our expert-led growth strategies.
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { label: 'Start Your Campaign', href: 'https://app.roispectrum.com', primary: true },
            { label: 'Schedule a Call with a Google Certified Expert', href: 'https://calendly.com', primary: false },
          ].map((btn, i) => (
            <button key={i} onClick={() => window.location.href = btn.href} style={{
              flex: '1 1 220px', maxWidth: '300px',
              background: btn.primary ? '#ff6600' : 'transparent',
              color: btn.primary ? 'white' : '#ff6600',
              border: btn.primary ? 'none' : '2px solid #ff6600',
              borderRadius: '9999px', padding: '14px 24px',
              fontSize: '15px', fontWeight: 600, cursor: 'pointer',
              fontFamily: 'Arial, sans-serif',
              boxShadow: btn.primary ? '0 4px 20px rgba(255,102,0,0.3)' : 'none',
              transition: 'all 0.3s', lineHeight: 1.4,
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.03)';
                if (!btn.primary) e.currentTarget.style.background = 'rgba(255,102,0,0.06)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                if (!btn.primary) e.currentTarget.style.background = 'transparent';
              }}
            >{btn.label}</button>
          ))}
        </div>

        {onGoHome && (
          <button onClick={onGoHome} style={{
            marginTop: '20px', background: 'none', border: 'none',
            color: '#aaa', fontSize: '13px', cursor: 'pointer',
            fontFamily: 'Arial, sans-serif', textDecoration: 'underline', transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.color = '#555'}
            onMouseLeave={e => e.currentTarget.style.color = '#aaa'}
          >← Back to Home</button>
        )}
      </section>

      {/* ===================== WHAT HAPPENS NEXT ===================== */}
      <section style={{ padding: '0 24px 80px', maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>

          <h2 style={{ fontSize: '38px', fontWeight: 700, color: '#1a1a1a', letterSpacing: '-0.5px' }}>
            What Happens Next?
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
          {[
            { num: '1', title: 'Data Aggregation', desc: "Our proprietary AI begins analyzing your site's semantic signature and technical performance architecture." },
            { num: '2', title: 'Expert Review', desc: "ROI Spectrum's senior SEO specialists manually verify AI findings to ensure strategic precision." },
            { num: '3', title: 'Strategy Delivery', desc: 'Your custom performance roadmap is delivered to your inbox within 24 hours of submission.' },
          ].map((step, i) => (
            <div key={i} style={{
              background: '#fff', border: '1px solid #e8e8e8', borderRadius: '16px',
              padding: '28px 24px', textAlign: 'left', transition: 'all 0.3s',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,102,0,0.4)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,102,0,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#e8e8e8'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'; }}
            >
              <div style={{
                width: '36px', height: '36px', background: '#ff6600', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '16px', fontWeight: 700, color: 'white', marginBottom: '16px',
              }}>{step.num}</div>
              <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '10px', color: '#1a1a1a' }}>{step.title}</h4>
              <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.65 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== VIDEO SECTION ===================== */}
      <section style={{ padding: '0 24px 72px', maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>

          <h2 style={{ fontSize: '38px', fontWeight: 700, color: '#ff6600', letterSpacing: '-0.3px' }}>
            Watch Our Platform In Action
          </h2>
        </div>

        {/* Browser chrome frame */}
        <div style={{
          background: '#fff',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 16px 60px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.06)',
          border: '1px solid #e8e8e8',
        }}>
          {/* Browser top bar */}
          <div style={{
            background: '#f5f5f5', borderBottom: '1px solid #e8e8e8',
            padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '8px',
          }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
            <div style={{ flex: 1, height: 22, background: '#e8e8e8', borderRadius: '6px', margin: '0 16px' }} />
            <div style={{ width: 24, height: 10, background: '#e0e0e0', borderRadius: '4px' }} />
          </div>

          {/* Video */}
          <div style={{ width: '100%', aspectRatio: '16/9', background: '#f0f0f0' }}>
            <video
              src={heroVideo}
              autoPlay loop muted playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* ===================== EXPLORE MORE RESOURCES ===================== */}
      <section style={{ padding: '0 24px 60px', maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontSize: '38px', fontWeight: 700, marginBottom: '24px', color: '#1a1a1a', letterSpacing: '-0.3px' }}>
          Explore More Resources
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

          {/* Featured Case Study — expanded */}
          <div
            onClick={() => window.open('https://roispectrum.com/blogs/seo-case-study-personalise-wholesaleblanks-co-uk', '_blank')}
            style={{
              background: '#fff', border: '1px solid #e8e8e8', borderRadius: '16px',
              padding: '28px', cursor: 'pointer', transition: 'all 0.3s',
              textAlign: 'left', boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,102,0,0.4)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,102,0,0.1)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#e8e8e8'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'; }}
          >
            <div>
              <span style={{
                background: '#ff6600', color: 'white', fontSize: '10px',
                fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase',
                padding: '4px 12px', borderRadius: '9999px', marginBottom: '16px', display: 'inline-block',
              }}>Featured Case Study</span>

              {/* Metric highlight */}
              <div style={{
                background: 'rgba(255,102,0,0.06)', border: '1px solid rgba(255,102,0,0.15)',
                borderRadius: '12px', padding: '14px 18px', marginBottom: '16px',
                display: 'flex', gap: '24px', flexWrap: 'wrap',
              }}>
                {[
                  { num: '£5.1M', label: 'Goal Value' },
                  { num: '6,200', label: 'Conversions' },
                  { num: '+823K', label: 'Impressions' },
                ].map((m, i) => (
                  <div key={i}>
                    <div style={{ fontSize: '20px', fontWeight: 800, color: '#ff6600', lineHeight: 1.1 }}>{m.num}</div>
                    <div style={{ fontSize: '11px', fontWeight: 600, color: '#888', marginTop: '3px' }}>{m.label}</div>
                  </div>
                ))}
              </div>

              <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '10px', lineHeight: 1.35, color: '#1a1a1a' }}>
                How We Drove £5.1M in Goal Value for an E-Commerce Brand
              </h4>
              <p style={{ fontSize: '16px', color: '#1a1a1a', lineHeight: 1.7, marginBottom: '8px' }}>
                A deep dive into the technical SEO overhaul, entity-rich content strategy, and internal linking architecture that drove 6,200+ conversions and over 823K new impressions for personalise-wholesaleblanks.co.uk — all within a single campaign period.
              </p>
              <p style={{ fontSize: '16px', color: '#1a1a1a', lineHeight: 1.6, marginBottom: '16px' }}>
                Organic sessions grew from near zero to 56.6K, accounting for 54% of all site traffic, while attributed goal value surpassed £5.1M.
              </p>
            </div>
            <span style={{ color: '#ff6600', fontSize: '14px', fontWeight: 700 }}>
              Read Full Case Study →
            </span>
          </div>

          {/* Right column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {/* Card 1 — Competitor Intelligence */}
            <div
              onClick={() => window.open('https://roispectrum.com/features', '_blank')}
              style={{
                background: '#fff', border: '1px solid #e8e8e8', borderRadius: '16px', padding: '20px',
                cursor: 'pointer', transition: 'all 0.3s', flex: 1, textAlign: 'left',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,102,0,0.4)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,102,0,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#e8e8e8'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'; }}
            >
              <div style={{
                width: '32px', height: '32px', borderRadius: '8px',
                background: 'rgba(255,102,0,0.1)', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '16px', marginBottom: '12px',
              }}><Search size={16} color="#ff6600" /></div>
              <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px', color: '#1a1a1a' }}>
                Competitor Intelligence Engine
              </h4>
              <p style={{ fontSize: '16px', color: '#1a1a1a', lineHeight: 1.6, marginBottom: '12px' }}>
                We go beyond basic keyword tracking — monitor what your rivals are doing and stay one step ahead with real-time competitor analysis using latest features.
              </p>
              <span style={{ color: '#ff6600', fontSize: '13px', fontWeight: 600 }}>Explore Features →</span>
            </div>

            {/* Card 2 — SEO Pricing */}
            <div
              onClick={() => window.open('https://roispectrum.com/seopricing', '_blank')}
              style={{
                background: '#fff', border: '1px solid #e8e8e8', borderRadius: '16px', padding: '20px',
                cursor: 'pointer', transition: 'all 0.3s', flex: 1, textAlign: 'left',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,102,0,0.4)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,102,0,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#e8e8e8'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'; }}
            >
              <div style={{
                width: '32px', height: '32px', borderRadius: '8px',
                background: 'rgba(255,102,0,0.1)', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '16px', marginBottom: '12px',
              }}><DollarSign size={16} color="#ff6600" /></div>
              <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '6px', color: '#1a1a1a' }}>
                Transparent SEO Pricing
              </h4>
              <p style={{ fontSize: '16px', color: '#1a1a1a', lineHeight: 1.6, marginBottom: '14px' }}>
                Starter plans from $89/month. No locked contracts, no hidden fees — powerful enough to prove our impact from day one.
              </p>
              <button
                onClick={e => { e.stopPropagation(); window.open('https://roispectrum.com/seopricing', '_blank'); }}
                style={{
                  background: '#ff6600', color: 'white', border: 'none',
                  borderRadius: '9999px', padding: '8px 20px',
                  fontSize: '13px', fontWeight: 600, cursor: 'pointer', fontFamily: 'Arial, sans-serif',
                }}>View Pricing</button>
            </div>
          </div>
        </div>

        {/* ===================== NEWSLETTER ===================== */}
        <div style={{
          marginTop: '20px',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
          borderRadius: '20px',
          padding: '36px 32px',
          display: 'flex',
          gap: '32px',
          alignItems: 'center',
          flexWrap: 'wrap',
          boxShadow: '0 8px 32px rgba(15,23,42,0.12)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Glow accent */}
          <div style={{
            position: 'absolute', top: '-40px', right: '-40px',
            width: '180px', height: '180px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,102,0,0.2) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          {/* Left text */}
          <div style={{ flex: '1 1 220px', textAlign: 'left' }}>
            <span style={{
              fontSize: '10px', fontWeight: 700, letterSpacing: '2px',
              textTransform: 'uppercase', color: '#ff9933',
              background: 'rgba(255,102,0,0.15)', border: '1px solid rgba(255,102,0,0.25)',
              padding: '4px 12px', borderRadius: '9999px',
              display: 'inline-block', marginBottom: '14px',
            }}>Newsletter</span>
            <h4 style={{ fontSize: '22px', fontWeight: 700, color: 'white', marginBottom: '8px', letterSpacing: '-0.3px' }}>
              The Fusion Dispatch
            </h4>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, margin: 0 }}>
              Weekly intelligence for high-performance marketing teams — strategy breakdowns, algorithm updates, and agency playbooks.
            </p>
          </div>

          {/* Right input */}
          <div style={{ flex: '1 1 260px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                type="email"
                placeholder="your@company.com"
                style={{
                  flex: 1, padding: '13px 18px', borderRadius: '9999px',
                  background: 'rgba(255,255,255,0.08)', border: '2px solid rgba(255,255,255,0.12)',
                  color: 'white', fontSize: '14px', fontFamily: 'Arial, sans-serif',
                  outline: 'none', transition: 'border-color 0.2s',
                }}
                onFocus={e => e.currentTarget.style.borderColor = '#ff6600'}
                onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'}
              />
              <button style={{
                background: '#ff6600', color: 'white', border: 'none',
                borderRadius: '9999px', padding: '13px 22px',
                fontSize: '15px', fontWeight: 700, cursor: 'pointer',
                fontFamily: 'Arial, sans-serif',
                boxShadow: '0 4px 16px rgba(255,102,0,0.4)',
                transition: 'all 0.2s', whiteSpace: 'nowrap',
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >Subscribe →</button>
            </div>

          </div>
        </div>
      </section>

      {/* ===================== NEED IMMEDIATE FUEL ===================== */}
      <section style={{ padding: '0 24px 80px', maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{
          background: '#fff', border: '1px solid #e8e8e8', borderRadius: '20px',
          padding: '40px 32px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '10px', color: '#1a1a1a', textAlign: 'left' }}>
            Need immediate fuel?
          </h2>
          <p style={{ fontSize: '16px', color: '#1a1a1a', marginBottom: '32px', lineHeight: 1.6, textAlign: 'left' }}>
            Our specialists are available for urgent performance inquiries during standard market hours.
          </p>
          <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
            {[
              {
                icon: <Mail size={20} color="#ff6600" />,
                label: 'Email Support',
                content: <a href="mailto:ops@roispectrum.com" style={{ color: '#ff6600', fontSize: '15px', fontWeight: 600, textDecoration: 'none' }}
                  onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                  onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
                >ops@roispectrum.com</a>,
              },
              {
                icon: <Clock size={20} color="#ff6600" />,
                label: 'Office Hours',
                content: <p style={{ color: '#1a1a1a', fontSize: '15px', fontWeight: 600, margin: 0 }}>Mon–Fri: 09:00 – 18:00 EST</p>,
              },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '50%',
                  background: 'rgba(255,102,0,0.1)', border: '1px solid rgba(255,102,0,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '18px', flexShrink: 0,
                }}>{item.icon}</div>
                <div style={{ textAlign: 'left' }}>
                  <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: '#999', marginBottom: '5px' }}>
                    {item.label}
                  </p>
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
