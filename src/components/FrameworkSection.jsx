import React from 'react';
import { useInView } from '../hooks';
import { frameworkPhases } from '../data';

export default function FrameworkSection() {
  const [frameworkRef, frameworkInView] = useInView(0.1);

  return (
    <section className="framework section">
      <div className="section-header">
        <h2 className="section-h2">Our Proven <span className="italic-orange">Growth Framework</span></h2>
        <p className="section-p">A systematic 5-phase approach to market dominance and sustainable ROI.</p>
      </div>

      <div className="framework-grid" ref={frameworkRef}>
        {frameworkPhases.map((phase, i) => (
          <div
            key={i}
            className={`phase-card${frameworkInView ? ' card-visible' : ''}`}
            style={frameworkInView ? { animationDelay: `${i * 0.12}s` } : {}}
          >
            <div className="phase-num">{phase.num}</div>
            <h4 className="phase-h4">{phase.title}</h4>
            <ul className="phase-list">
              {phase.items.map((item, j) => (
                <li key={j}><span>›</span> {item}</li>
              ))}
            </ul>
            <div className="phase-connector" />
          </div>
        ))}
      </div>
    </section>
  );
}
