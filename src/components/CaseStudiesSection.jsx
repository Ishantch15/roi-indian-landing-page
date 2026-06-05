import React from 'react';
import heroVideo from '../assets/video.mp4';
import { caseStudyCards } from '../data';

export default function CaseStudiesSection() {
  return (
    <section className="case-studies section">
      <div className="case-header">
        <div>
          <h2 className="section-h2">Cinematic <span className="italic-orange">Success Modules</span></h2>
          <p className="section-p" style={{ marginTop: '8px' }}>Real data. Real growth. High-impact results.</p>
        </div>
        <a href="#" className="case-link">View All Case Studies →</a>
      </div>

      <div className="case-hero">
        <video
          src={heroVideo}
          autoPlay loop muted playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div className="case-overlay">
          <div className="case-content">
            <div>
              <h3 className="case-title">Luna Visuals: 350% Growth in Inbound Leads</h3>
              <p className="case-desc">Pivoting from traditional SEO to an AEO-first approach captured high-intent traffic across all major AI search platforms.</p>
            </div>
            <div className="metrics">
              <div className="metric">
                <div className="metric-num">+350%</div>
                <div className="metric-label">Leads Growth</div>
              </div>
              <div className="metric">
                <div className="metric-num">-40%</div>
                <div className="metric-label">CPA Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="case-cards">
        {caseStudyCards.map((study, i) => (
          <div key={i} className="case-card">
            <div className="case-card-header">
              <div className="case-tag">{study.tag}</div>
              <div className="case-metric">
                <div className="case-metric-num">{study.metric}</div>
                <div className="case-metric-label">{study.label}</div>
              </div>
            </div>
            <h4 className="case-card-h4">{study.title}</h4>
            <p className="case-card-p">{study.desc}</p>
            <a href="#" className="case-link">Read Study →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
