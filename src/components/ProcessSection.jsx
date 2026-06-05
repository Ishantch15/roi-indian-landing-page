import React from 'react';
import { processSteps } from '../data';

export default function ProcessSection() {
  return (
    <section className="process section">
      <div className="section-header">
        <h2 className="section-h2">What Happens <span className="italic-orange">After You Book?</span></h2>
      </div>

      <div className="process-grid">
        {processSteps.map((step, i) => (
          <div key={i} className="process-step">
            <div className="step-num">{step.num}</div>
            <h4 className="step-title">{step.title}</h4>
            <p className="step-desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
