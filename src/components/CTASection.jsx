import React from 'react';
import AuditForm from './AuditForm';

export default function CTASection({ onAuditSuccess }) {
  return (
    <section className="cta dark-section" style={{ padding: '80px 24px' }}>
      <div className="cta-grid" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="cta-left">
          <h2 className="cta-h2">Claim Your Free <br /><span className="italic-orange">SEO & AI Visibility Audit</span> Today.</h2>
          <p className="cta-p">Our team of senior analysts will manually review your website, identify "leaking" conversion paths, and build a customized AI Search roadmap for your brand. No generic reports. No automated fluff.</p>
          <div className="cta-check">
            <span style={{ fontSize: '20px' }}>✓</span>
            <p>Verified data-driven results for 4,000+ brands worldwide.</p>
          </div>
        </div>

        <div className="cta-form">
          <AuditForm onSubmit={onAuditSuccess} />
        </div>
      </div>
    </section>
  );
}
