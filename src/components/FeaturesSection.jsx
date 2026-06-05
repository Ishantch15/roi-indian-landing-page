import React from 'react';
import { Bot, Eye, Users, Zap, CheckCircle } from 'lucide-react';
import { featureItems } from '../data';

const iconMap = { Bot, Eye, Users, Zap, CheckCircle };

export default function FeaturesSection() {
  return (
    <section className="features section">
      <div className="section-header">
        <h2 className="section-h2">What Makes <span className="orange">ROI Spectrum</span> Different?</h2>
      </div>

      <div className="grid-5">
        {featureItems.map((feature, i) => {
          const IconComponent = iconMap[feature.icon];
          return (
            <div key={i} className="feature-card">
              <div className="feature-icon">
                <IconComponent size={32} color="#ff6600" />
              </div>
              <h4 className="feature-h4">{feature.title}</h4>
              <p className="feature-p">{feature.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
