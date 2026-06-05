import React from 'react';
import { MessageCircle, Sparkles, Brain } from 'lucide-react';
import { aeoItems } from '../data';

const iconMap = { MessageCircle, Sparkles, Brain };

export default function AEOSection() {
  return (
    <section className="aeo dark-section" style={{ padding: '80px 24px' }}>
      <div className="dark-grid" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="dark-left">
          <h2 className="dark-h2">Why SEO Alone Is <span className="italic-orange">No Longer Enough</span></h2>
          <p className="dark-p">We are entering the era of Answer Engine Optimization. Users are moving away from traditional lists of links and towards direct answers provided by platforms like ChatGPT, Gemini, and Perplexity.</p>

          <div className="stat-grid">
            <div className="stat-box">
              <div className="stat-num">40%</div>
              <div className="stat-label">Decrease in Traditional CTR</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">65%</div>
              <div className="stat-label">Users Trust AI Answers</div>
            </div>
          </div>
        </div>

        <div className="aeo-items">
          {aeoItems.map((item, i) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div key={i} className="aeo-item">
                <div className="aeo-icon">
                  <IconComponent size={24} color="#ff6600" />
                </div>
                <div className="aeo-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
