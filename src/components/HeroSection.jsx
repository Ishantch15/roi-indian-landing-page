import React from 'react';
import AnimatedHeadline from './AnimatedHeadline';

export default function HeroSection({ subtitleVisible, buttonsVisible, statsVisible, onOpenModal }) {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-left">
          <h1 className="hero-h1">
            <AnimatedHeadline />
          </h1>

          <p className={`hero-subtitle${subtitleVisible ? ' visible' : ''}`}>
            We combine next-gen SEO with Answer Engine Optimization — so your brand shows up everywhere your customers are searching, including AI.
          </p>

          <div className={`hero-buttons${buttonsVisible ? ' visible' : ''}`}>
            <button className="btn-main" onClick={onOpenModal}>Start Your Free Audit ↗</button>
            <button className="btn-secondary">View Case Studies</button>
          </div>

          <div className={`hero-stats${statsVisible ? ' visible' : ''}`}>
            <div className="hero-stat-pill">
              <span className="hero-stat-pill-num">4,000+</span>
              <span>Brands Grown</span>
            </div>
            <div className="hero-stat-pill">
              <span className="hero-stat-pill-num">2.5x</span>
              <span>Avg. Lead Growth</span>
            </div>
            <div className="hero-stat-pill">
              <span className="hero-stat-pill-num">Top 3</span>
              <span>AI Visibility</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
