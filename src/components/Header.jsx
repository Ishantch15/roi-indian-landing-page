import React, { useState } from 'react';
import logo from '../assets/roilogo.jpg';

export default function Header({ scrollY, onOpenModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`roi-header ${scrollY > 20 ? 'scrolled' : ''}`}>
      <div className="roi-header-content">
        <div className="roi-logo">
          <img src={logo} alt="ROI Spectrum" style={{ height: '50px', width: 'auto' }} />
        </div>
        <nav className="roi-nav">
          <a href="#" className="active">Solutions</a>
          <a href="#">Results</a>
          <a href="#">Framework</a>
          <a href="#">Insights</a>
        </nav>

        <div className="roi-header-cta">
          <button className="roi-btn roi-btn-primary" onClick={onOpenModal}>Get a Free Audit</button>
        </div>

        <button
          className="roi-mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      <div className={`roi-mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <a href="#" className="active" style={{ padding: '12px 16px', borderRadius: '12px', background: 'rgba(255,102,0,0.06)', color: '#ff6600', fontWeight: 600, fontSize: '15px', textDecoration: 'none' }}>Solutions</a>
          <a href="#" style={{ padding: '12px 16px', borderRadius: '12px', color: '#444', fontWeight: 600, fontSize: '15px', textDecoration: 'none' }}>Results</a>
          <a href="#" style={{ padding: '12px 16px', borderRadius: '12px', color: '#444', fontWeight: 600, fontSize: '15px', textDecoration: 'none' }}>Framework</a>
          <a href="#" style={{ padding: '12px 16px', borderRadius: '12px', color: '#444', fontWeight: 600, fontSize: '15px', textDecoration: 'none' }}>Insights</a>
        </nav>
        <button className="roi-btn roi-btn-primary" style={{ width: '100%', marginTop: '16px', padding: '14px', fontSize: '15px' }} onClick={onOpenModal}>Get Free Audit</button>
      </div>
    </header>
  );
}
