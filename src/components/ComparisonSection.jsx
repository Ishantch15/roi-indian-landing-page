import React from 'react';
import { comparisonRows } from '../data';

export default function ComparisonSection() {
  return (
    <section className="comparison section">
      <div className="section-header">
        <h2 className="section-h2">Traditional Agencies <span className="italic-orange">vs. ROI Spectrum</span></h2>
      </div>

      <div className="comparison-wrapper">
        <div className="comparison-header">
          <div className="comparison-header-cell">Service Feature</div>
          <div className="comparison-header-cell" style={{ opacity: 0.55 }}>Traditional Agency</div>
          <div className="comparison-header-cell col-highlight">ROI Spectrum (AEO+SEO)</div>
          <div className="comparison-header-cell" style={{ opacity: 0.55 }}>Freelancers</div>
        </div>

        {comparisonRows.map((row, i) => (
          <div key={i} className="comparison-row">
            <div className="comparison-cell col-feature">{row.feature}</div>
            <div className="comparison-cell col-muted">{row.trad}</div>
            <div className="comparison-cell col-highlight">{row.roi}</div>
            <div className="comparison-cell col-muted">{row.free}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
