import React from 'react';
import { Search, Bot, Zap, BarChart2, Settings, Brain } from 'lucide-react';
import { challengeItems } from '../data';

const iconMap = { Search, Bot, Zap, BarChart2, Settings, Brain };

export default function ChallengesSection() {
  return (
    <section className="challenges section">
      <div className="section-header">
        <h2 className="section-h2">Is Your Website <span className="orange">Costing You</span> Customers?</h2>
        <p className="section-p">Most agencies focus on traffic. We focus on ROI. In the age of AI search, simply "ranking" isn't enough.</p>
      </div>

      <div className="grid-3">
        {challengeItems.map((item, i) => {
          const IconComponent = iconMap[item.icon];
          return (
            <div key={i} className="challenge-card">
              <div className="challenge-card-top">
                <div className="challenge-icon-wrap">
                  <IconComponent size={28} />
                </div>
                <div className="challenge-num">{item.num}</div>
              </div>
              <h4 className="challenge-title">{item.title}</h4>
              <p className="challenge-desc">{item.desc}</p>
              <div className="challenge-bar">
                <div className="challenge-bar-fill" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
