import React from 'react';
import { campaignItems, resultItems } from '../data';

export default function CampaignSection() {
  return (
    <section className="campaign section" style={{ padding: '80px 24px' }}>
      <div className="campaign-grid" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="campaign-left">
          <h2 className="campaign-h2">Everything Included in <br /><span className="italic-orange">Your Campaign</span></h2>

          <div className="campaign-items">
            {campaignItems.map((item, i) => (
              <div key={i} className="campaign-item">
                <div className="campaign-icon" style={{ fontSize: '20px' }}>✓</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="results-box">
          <h2 style={{ fontSize: '32px', fontWeight: 800 }}>What Results <br /><span className="italic-orange">Can You Expect?</span></h2>

          <div className="results-grid">
            {resultItems.map((item, i) => (
              <div key={i}>
                <div className="result-num">{item.num}</div>
                <div className="result-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
