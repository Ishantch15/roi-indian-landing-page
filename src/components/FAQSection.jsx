import React, { useState } from 'react';
import { faqItems } from '../data';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  return (
    <section className="faq section">
      <div className="section-header">
        <h2 className="section-h2">Frequently Asked Questions</h2>
      </div>

      <div className="faq-container">
        <div className="faq-grid">
          <div className="faq-column">
            {faqItems.slice(0, 2).map((item, i) => (
              <div key={i} className="faq-item">
                <button className="faq-toggle" onClick={() => toggleFAQ(i)}>
                  <span className="faq-question">{item.question}</span>
                  <span className={`faq-chevron ${openFAQ === i ? 'open' : ''}`}>▼</span>
                </button>
                <div className={`faq-answer ${openFAQ === i ? 'open' : ''}`}>
                  <div className="faq-answer-text">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-column">
            {faqItems.slice(2).map((item, i) => (
              <div key={i + 2} className="faq-item">
                <button className="faq-toggle" onClick={() => toggleFAQ(i + 2)}>
                  <span className="faq-question">{item.question}</span>
                  <span className={`faq-chevron ${openFAQ === i + 2 ? 'open' : ''}`}>▼</span>
                </button>
                <div className={`faq-answer ${openFAQ === i + 2 ? 'open' : ''}`}>
                  <div className="faq-answer-text">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
