import React from 'react';

export default function Footer() {
  return (
    <footer className="roi-footer">
      <div className="footer-content">
        <div>
          <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '24px', fontWeight: 900, color: 'white', marginBottom: '16px' }}>ROI Spectrum</div>
          <p className="footer-desc">Driving data-driven growth through next-generation SEO & Answer Engine Optimization. High-impact visibility for the AI era.</p>
        </div>
        <div>
          <div className="footer-title">Solutions</div>
          <ul className="footer-links">
            <li><a href="#">SEO Excellence</a></li>
            <li><a href="#">AEO Framework</a></li>
            <li><a href="#">Content Velocity</a></li>
            <li><a href="#">Link Authority</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-title">Company</div>
          <ul className="footer-links">
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">Our Framework</a></li>
            <li><a href="#">Blog Insights</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-title">Legal</div>
          <ul className="footer-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © 2024 ROI Spectrum Agency. All rights reserved. Precise Data-Driven Growth.
      </div>
    </footer>
  );
}
