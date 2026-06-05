const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400;1,9..40,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: white;
  }

  /* Header */
  .roi-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 50;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(200, 200, 200, 0.2);
  transition: all 0.3s ease;
}

  .roi-header.scrolled {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .roi-header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 16px;
  max-width: 1280px;
  margin: 0 auto;
}
  @media (min-width: 768px) {
  .roi-header-content {
    height: 80px;
    padding: 0 24px;
  }
}

  .roi-logo {
    font-size: 24px;
    font-weight: 900;
    letter-spacing: -0.5px;
    color: #1a1a1a;
  }

  .roi-nav {
    display: flex;
    gap: 32px;
    align-items: center;
  }

  @media (max-width: 1024px) {
    .roi-nav {
      display: none;
    }
  }

  .roi-nav a {
    font-weight: 600;
    font-size: 14px;
    color: #666;
    text-decoration: none;
    padding: 8px 0;
    transition: color 0.3s;
    border-bottom: 2px solid transparent;
  }

  .roi-nav a:hover {
    color: #ff6600;
  }

  .roi-nav a.active {
    color: #ff6600;
    border-bottom-color: #ff6600;
  }

  .roi-header-cta {
    display: flex;
    gap: 16px;
    align-items: center;
  }

  @media (max-width: 640px) {
    .roi-header-cta a {
      display: none;
    }
  }

  .roi-btn {
    padding: 12px 24px;
    border: none;
    border-radius: 9999px;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s;
    font-family: 'DM Sans', sans-serif;
  }

  .roi-btn-primary {
    background: #ff6600;
    color: white;
    box-shadow: 0 4px 12px rgba(255, 102, 0, 0.3);
  }

  .roi-btn-primary:hover {
    transform: scale(1.05);
  }

  .roi-mobile-menu {
  display: none;
  background: white;
  border-top: 1px solid rgba(200, 200, 200, 0.15);
  padding: 12px 16px 20px;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 999;
  box-shadow: 0 8px 30px rgba(0,0,0,0.12);
}

.roi-mobile-menu.open {
  display: block;
}

.roi-mobile-menu a:hover {
  background: rgba(255,102,0,0.06);
  color: #ff6600;
  border-radius: 12px;
}

.roi-mobile-menu-btn {
  display: none;
  background: none;
  border: 1.5px solid #ddd;
  border-radius: 10px;
  cursor: pointer;
  font-size: 20px;
  padding: 6px 10px;
  color: #1a1a1a;
  transition: all 0.3s;
}

.roi-mobile-menu-btn:hover {
  border-color: #ff6600;
  color: #ff6600;
}

@media (max-width: 1024px) {
  .roi-mobile-menu-btn {
    display: block;
  }
  .roi-header-cta {
    display: none;
  }
}

  /* Main Content */
  main {
    padding-top: 80px;
  }
#root {
  width: 100%;
  overflow-x: hidden;
}

  /* ===================== HERO SECTION ===================== */
  .hero {
  background: #0f172a;
  color: white;
  overflow: hidden;
  padding: 60px 0 80px;
  position: relative;
  width: 100%;
}

  .hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,102,0,0.12) 0%, transparent 70%),
                radial-gradient(ellipse 40% 40% at 20% 20%, rgba(255,153,51,0.06) 0%, transparent 60%);
    pointer-events: none;
  }

  .hero::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
  }

  @media (min-width: 768px) {
    .hero {
      padding: 80px 64px 120px;
    }
  }

  .hero-grid {
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 48px;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  .hero-left {
    display: flex;
    flex-direction: column;
    gap: 40px;
    text-align: center;
    align-items: center;
  }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 20px;
    border-radius: 9999px;
    background: rgba(255, 102, 0, 0.12);
    color: #ff9933;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    border: 1px solid rgba(255, 102, 0, 0.25);
    width: fit-content;
    opacity: 0;
    transform: translateY(16px);
    animation: fadeSlideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.2s forwards;
  }

  .hero-badge::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ff6600;
    display: inline-block;
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.7); }
  }

  .hero-h1 {
  font-size: 38px;
  font-weight: 700;
  line-height: 1.2;
  max-width: 700px;
}
@media (min-width: 768px) {
  .hero-h1 {
    font-size: 50px;
    max-width: 800px;
  }
}

.hero-letter {
  display: inline-block;
  opacity: 0;
  transform: translateY(30px);
  animation: letterReveal 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

@keyframes letterReveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-letter.orange {
  color: #ff6600;
  font-style: italic;
}

.hero-letter.space {
  width: 0.25em;
}

  .hero-word {
    display: inline-block;
    opacity: 0;
    transform: translateY(40px) rotateX(-20deg);
    transform-origin: top center;
    animation: wordReveal 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    margin-right: 0.22em;
  }

  .hero-word:last-child {
    margin-right: 0;
  }

  @keyframes wordReveal {
    0% { opacity: 0; transform: translateY(40px) rotateX(-20deg); }
    60% { opacity: 1; }
    100% { opacity: 1; transform: translateY(0) rotateX(0deg); }
  }

  .hero-word.orange {
    color: #ff6600;
    position: relative;
  }

  .hero-word.orange::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 3px;
    background: linear-gradient(90deg, #ff6600, #ff9933);
    border-radius: 2px;
    transition: width 0.4s ease 0.2s;
  }

  .hero-word.orange.underline-visible::after {
    width: 100%;
  }

  .hero-word.italic {
    font-style: italic;
    color: #ff9933;
  }

  .hero-subtitle {
    font-size: 18px;
    color: rgba(255,255,255,0.65);
    max-width: 560px;
    line-height: 1.7;
    opacity: 0;
    transform: translateY(20px);
  }

  .hero-subtitle.visible {
    animation: fadeSlideUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }

  @keyframes fadeSlideUp {
    to { opacity: 1; transform: translateY(0); }
  }

  .hero-buttons {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-top: 8px;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transform: translateY(20px);
  }

  .hero-buttons.visible {
    animation: fadeSlideUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }

  @media (min-width: 640px) {
    .hero-buttons {
      flex-direction: row;
    }
  }

  .hero-stats {
    display: flex;
    gap: 24px;
    justify-content: center;
    flex-wrap: wrap;
    opacity: 0;
    transform: translateY(16px);
  }

  .hero-stats.visible {
    animation: fadeSlideUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }

  .hero-stat-pill {
    display: flex;
    align-items: center;
    gap: 10px;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 9999px;
    padding: 10px 20px;
    font-size: 13px;
    font-weight: 600;
    color: rgba(255,255,255,0.75);
    transition: all 0.3s;
  }

  .hero-stat-pill:hover {
    background: rgba(255,102,0,0.1);
    border-color: rgba(255,102,0,0.3);
    color: white;
  }

  .hero-stat-pill-num {
    color: #ff9933;
    font-size: 16px;
    font-weight: 800;
  }

  /* ===================== END HERO ===================== */

  .btn-main {
    background: #ff6600;
    color: white;
    padding: 18px 36px;
    border: none;
    border-radius: 9999px;
    font-weight: 700;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.3s;
    box-shadow: 0 4px 20px rgba(255, 102, 0, 0.4);
    font-family: 'DM Sans', sans-serif;
    letter-spacing: 0.3px;
  }

  .btn-main:hover {
    transform: scale(1.05) translateY(-2px);
    box-shadow: 0 8px 30px rgba(255, 102, 0, 0.5);
  }

  .btn-secondary {
    border: 2px solid rgba(255, 255, 255, 0.2);
    color: white;
    padding: 18px 36px;
    border-radius: 9999px;
    font-weight: 600;
    font-size: 15px;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s;
    font-family: 'DM Sans', sans-serif;
  }

  .btn-secondary:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255,255,255,0.4);
  }

  /* Dashboard Images Gallery */
  .dashboard-gallery {
  background: white;
  padding: 0;
  margin: 0;
  width: 100%;
}

  @media (min-width: 768px) {
    .dashboard-gallery {
      padding: 60px 24px;
    }
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
    align-items: center;
  }

  @media (min-width: 768px) {
    .gallery-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .gallery-image {
    width: 100%;
    border-radius: 24px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(200, 200, 200, 0.3);
    object-fit: cover;
  }

  /* Section Base Styles */
  .section {
    padding: 80px 24px;
    max-width: 1280px;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    .section {
      padding: 120px 64px;
    }
  }

  .section-header {
    text-align: center;
    margin-bottom: 60px;
  }

  .section-h2 {
    font-size: 36px;
    font-weight: 800;
    color: #1a1a1a;
    margin-bottom: 16px;
    letter-spacing: -0.5px;
  }

  @media (min-width: 768px) {
    .section-h2 {
      font-size: 48px;
    }
  }

  .section-h2 .orange {
    color: #ff6600;
    text-decoration: underline;
    text-decoration-thickness: 4px;
    text-underline-offset: 8px;
  }

  .section-h2 .italic-orange {
    color: #ff6600;
    font-style: italic;
  }

  .section-p {
    color: #666;
    max-width: 700px;
    margin: 0 auto;
    font-size: 18px;
  }

  /* Card Grids */
  .grid-3 {
    display: grid;
    gap: 24px;
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    .grid-3 {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .grid-3 {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .grid-5 {
    display: grid;
    gap: 24px;
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    .grid-5 {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .grid-5 {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  .card {
    background: white;
    border: 1px solid #ddd;
    border-radius: 24px;
    padding: 32px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    transition: all 0.3s;
  }

  .card:hover {
    border-color: #ff6600;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .card-icon {
    font-size: 36px;
    margin-bottom: 16px;
  }

  .card-h4 {
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 8px;
    color: #1a1a1a;
  }

  .card-p {
    color: #666;
    font-size: 14px;
  }

  /* Challenges Section */
  .challenges {
    background: white;
  }

  .challenge-card {
    background: white;
    border: 1px solid #eee;
    border-radius: 24px;
    padding: 32px;
    position: relative;
    overflow: hidden;
    cursor: default;
    transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .challenge-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255,102,0,0.04) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  .challenge-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #ff6600, #ff9933);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .challenge-card:hover {
    border-color: rgba(255,102,0,0.25);
    transform: translateY(-8px);
    box-shadow: 0 20px 50px rgba(255,102,0,0.1), 0 4px 12px rgba(0,0,0,0.06);
  }

  .challenge-card:hover::before { opacity: 1; }
  .challenge-card:hover::after { transform: scaleX(1); }

  .challenge-card:hover .challenge-icon-wrap {
    background: #ff6600;
    color: white;
    transform: rotate(-8deg) scale(1.1);
  }

  .challenge-card:hover .challenge-bar-fill {
    width: 100%;
  }

  .challenge-card-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .challenge-icon-wrap {
    width: 56px;
    height: 56px;
    background: rgba(255,102,0,0.08);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ff6600;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .challenge-num {
    font-size: 28px;
    font-weight: 800;
    color: rgba(255,102,0,0.15);
    font-family: 'Syne', sans-serif;
    letter-spacing: -1px;
    transition: color 0.3s ease;
  }

  .challenge-card:hover .challenge-num { color: rgba(255,102,0,0.3); }

  .challenge-title {
    font-weight: 700;
    font-size: 18px;
    color: #1a1a1a;
    letter-spacing: -0.3px;
  }

  .challenge-desc {
    color: #888;
    font-size: 14px;
    line-height: 1.6;
    flex: 1;
  }

  .challenge-bar {
    height: 3px;
    background: #f0f0f0;
    border-radius: 9999px;
    overflow: hidden;
    margin-top: 8px;
  }

  .challenge-bar-fill {
    height: 100%;
    width: 30%;
    background: linear-gradient(90deg, #ff6600, #ff9933);
    border-radius: 9999px;
    transition: width 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }

  /* ===================== FRAMEWORK SECTION ===================== */
  .framework {
    background: #0f172a;
    position: relative;
    overflow: hidden;
  }

  .framework::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 60% 50% at 50% 100%, rgba(255,102,0,0.08) 0%, transparent 70%),
      radial-gradient(ellipse 30% 40% at 10% 10%, rgba(255,153,51,0.04) 0%, transparent 60%);
    pointer-events: none;
  }

  .framework::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
  }

  .framework .section-h2 { color: white; }
  .framework .section-p { color: rgba(255,255,255,0.55); }

  .framework-grid {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr;
    position: relative;
    z-index: 1;
  }

  @media (min-width: 1024px) {
    .framework-grid {
      grid-template-columns: repeat(5, 1fr);
      gap: 16px;
    }
  }

  .phase-card {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 24px;
    padding: 36px 28px;
    position: relative;
    overflow: hidden;
    cursor: default;
    transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
    opacity: 0;
    transform: translateY(50px);
  }

  .phase-card.card-visible {
    animation: phaseCardReveal 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }

  @keyframes phaseCardReveal {
    0% { opacity: 0; transform: translateY(50px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  .phase-card:nth-child(1) { animation-delay: 0.0s; }
  .phase-card:nth-child(2) { animation-delay: 0.1s; }
  .phase-card:nth-child(3) { animation-delay: 0.2s; }
  .phase-card:nth-child(4) { animation-delay: 0.3s; }
  .phase-card:nth-child(5) { animation-delay: 0.4s; }

  .phase-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #ff6600, #ff9933, transparent);
    opacity: 0.5;
    transition: opacity 0.4s ease;
  }

  .phase-card::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,102,0,0.12) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
    border-radius: 24px;
  }

  .phase-card:hover {
    background: rgba(255,255,255,0.07);
    border-color: rgba(255, 102, 0, 0.4);
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(255, 102, 0, 0.15), 0 0 0 1px rgba(255,102,0,0.2);
  }

  .phase-card:hover::before { opacity: 1; }
  .phase-card:hover::after { opacity: 1; }
  .phase-card:hover .phase-num { transform: scale(1.15) rotate(10deg); box-shadow: 0 8px 25px rgba(255, 102, 0, 0.5); }
  .phase-card:hover .phase-h4 { color: #ff9933; }
  .phase-card:hover .phase-connector { width: 100%; }

  .phase-num {
    width: 52px;
    height: 52px;
    background: linear-gradient(135deg, #ff6600, #ff9933);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 22px;
    color: white;
    margin-bottom: 20px;
    box-shadow: 0 4px 15px rgba(255, 102, 0, 0.35);
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    position: relative;
    z-index: 1;
  }

  .phase-h4 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 20px;
    color: white;
    letter-spacing: -0.3px;
    position: relative;
    z-index: 1;
    transition: color 0.3s ease;
  }

  .phase-connector {
    position: absolute;
    bottom: 0; left: 0;
    height: 2px;
    width: 0;
    background: linear-gradient(90deg, #ff6600, transparent);
    transition: width 0.5s ease;
    border-radius: 0 0 24px 24px;
  }

  .phase-list {
    list-style: none;
    position: relative;
    z-index: 1;
  }

  .phase-list li {
    display: flex;
    gap: 10px;
    font-size: 13.5px;
    color: rgba(255,255,255,0.55);
    margin-bottom: 14px;
    font-weight: 500;
    align-items: flex-start;
    transition: color 0.3s ease;
  }

  .phase-card:hover .phase-list li { color: rgba(255,255,255,0.75); }

  .phase-list li span:first-child {
    color: #ff6600;
    font-weight: 700;
    flex-shrink: 0;
    margin-top: 1px;
  }

  /* ===================== END FRAMEWORK ===================== */

  /* Features Section */
  .features { background: white; }

  .feature-card {
    background: #f0f4ff;
    border: 1px solid #ddd;
    border-radius: 24px;
    padding: 32px;
    text-align: center;
    transition: all 0.3s;
  }

  .feature-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(255,102,0,0.1);
    border-color: #ff6600;
  }

  .feature-icon { font-size: 36px; margin-bottom: 16px; }
  .feature-h4 { font-weight: 700; font-size: 18px; margin-bottom: 8px; color: #1a1a1a; }
  .feature-p { font-size: 14px; color: #666; }

  /* Dark Sections */
  .dark-section {
    background: #0f172a;
    color: white;
    position: relative;
    overflow: hidden;
  }

  .dark-grid {
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 64px;
    align-items: center;
    position: relative;
    z-index: 10;
  }

  @media (min-width: 1024px) {
    .dark-grid { grid-template-columns: 1fr 1fr; }
  }

  .dark-left { display: flex; flex-direction: column; gap: 32px; }

  .dark-h2 {
    font-size: 36px;
    font-weight: 800;
    letter-spacing: -0.5px;
  }

  @media (min-width: 768px) { .dark-h2 { font-size: 48px; } }

  .dark-p { font-size: 18px; color: #d1d5db; line-height: 1.7; }

  .stat-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .stat-box {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 24px;
  }

  .stat-num { color: #ff6600; font-size: 28px; font-weight: 800; margin-bottom: 8px; }
  .stat-label { font-size: 10px; font-weight: 600; letter-spacing: 1px; color: rgba(255, 255, 255, 0.6); }

  .aeo-items { display: flex; flex-direction: column; gap: 16px; }

  .aeo-item {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 24px;
    border-radius: 24px;
    display: flex;
    gap: 16px;
    transition: all 0.3s;
  }

  .aeo-item:hover {
    background: rgba(255,102,0,0.08);
    border-color: rgba(255,102,0,0.3);
  }

  .aeo-icon {
    width: 48px; height: 48px;
    background: rgba(255, 102, 0, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: 20px;
  }

  .aeo-content h4 { font-weight: 700; font-size: 18px; margin-bottom: 4px; }
  .aeo-content p { font-size: 14px; color: #d1d5db; }

  /* Case Studies */
  .case-studies { background: white; }

  .case-header {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 48px;
  }

  @media (min-width: 768px) {
    .case-header { flex-direction: row; justify-content: space-between; align-items: flex-end; }
  }

  .case-hero {
    position: relative;
    height: 300px;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    margin-bottom: 32px;
  }

  @media (min-width: 768px) { .case-hero { height: 500px; } }

  .case-hero img { width: 100%; height: 100%; object-fit: cover; }
  .case-hero video { width: 100%; height: 100%; object-fit: cover; }

  .case-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(15, 23, 42, 0.9), transparent);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 32px;
    color: white;
  }

  .case-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    align-items: flex-end;
  }

  @media (min-width: 768px) { .case-content { grid-template-columns: 1fr auto; } }

  .case-tag {
    display: inline-block;
    background: #ff6600;
    color: white;
    padding: 6px 12px;
    border-radius: 9999px;
    font-size: 11px;
    font-weight: 700;
    width: fit-content;
  }

  .case-title { font-size: 24px; font-weight: 700; }
  @media (min-width: 768px) { .case-title { font-size: 32px; } }
  .case-desc { color: rgba(255, 255, 255, 0.7); font-size: 14px; }

  .metrics { display: flex; gap: 16px; }

  .metric {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 16px;
    border-radius: 16px;
    text-align: center;
    min-width: 120px;
  }

  .metric-num { font-size: 24px; font-weight: 700; color: #ff9933; margin-bottom: 4px; }
  .metric-label { font-size: 10px; font-weight: 600; letter-spacing: 0.5px; color: rgba(255, 255, 255, 0.6); }

  .case-cards {
    display: grid;
    gap: 24px;
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) { .case-cards { grid-template-columns: repeat(2, 1fr); } }

  .case-card {
    background: #ffffff;
    border: 1px solid #ddd;
    border-radius: 24px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    transition: all 0.3s;
  }

  .case-card:hover { transform: translateY(-4px); box-shadow: 0 12px 30px rgba(255,102,0,0.1); border-color: #ff6600; }

  .case-card-header { display: flex; justify-content: space-between; align-items: flex-start; }
  .case-metric { text-align: right; }
  .case-metric-num { font-size: 28px; font-weight: 700; color: #ff6600; }
  .case-metric-label { font-size: 10px; font-weight: 600; color: #666; }
  .case-card-h4 { font-size: 20px; font-weight: 700; color: #1a1a1a; }
  .case-card-p { color: #666; font-size: 14px; }
  .case-link { color: #ff6600; font-weight: 600; text-decoration: none; font-size: 14px; cursor: pointer; }

  /* ===================== COMPARISON — CARD LAYOUT ===================== */
  .comparison { background: #f5f5f5; }

  .comparison-wrapper {
    background: white;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
    border: 1px solid #e8e8e8;
  }

  /* Header row */
  .comparison-header {
    display: grid;
    grid-template-columns: 1.2fr 1fr 1.2fr 1fr;
    background: #0f172a;
  }

  @media (max-width: 768px) {
    .comparison-header {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }

  .comparison-header-cell {
    padding: 20px 24px;
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 0.3px;
    color: rgba(255,255,255,0.6);
    border-right: 1px solid rgba(255,255,255,0.06);
  }

  .comparison-header-cell:last-child { border-right: none; }

  .comparison-header-cell.col-highlight {
    background: #ff6600;
    color: white;
    position: relative;
  }

  .comparison-header-cell.col-highlight::after {
    content: '★ BEST';
    display: block;
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 1.5px;
    color: rgba(255,255,255,0.75);
    margin-top: 4px;
  }

  /* Data rows */
  .comparison-row {
    display: grid;
    grid-template-columns: 1.2fr 1fr 1.2fr 1fr;
    border-top: 1px solid #f0f0f0;
    transition: background 0.2s ease;
  }

  @media (max-width: 768px) {
    .comparison-row {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }

  .comparison-row:hover { background: #fafafa; }

  .comparison-cell {
    padding: 20px 24px;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    color: #555;
    border-right: 1px solid #f0f0f0;
    display: flex;
    align-items: center;
    line-height: 1.5;
  }

  .comparison-cell:last-child { border-right: none; }

  .comparison-cell.col-feature {
    font-weight: 700;
    color: #1a1a1a;
    font-size: 14px;
    background: #fafafa;
  }

  .comparison-cell.col-highlight {
    font-weight: 700;
    color: #ff6600;
    background: rgba(255, 102, 0, 0.02);
    font-size: 14px;
    position: relative;
  }

  .comparison-cell.col-muted {
    color: #999;
    font-size: 13px;
  }

  @media (max-width: 640px) {
    .comparison-cell {
      padding: 16px 12px;
      font-size: 12px;
    }
    .comparison-cell.col-feature {
      font-size: 12px;
    }
    .comparison-header-cell {
      padding: 16px 12px;
      font-size: 11px;
    }
  }
  /* ===================== END COMPARISON ===================== */

  /* Campaign */
  .campaign { background: #0f172a; color: white; }

  .campaign-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 64px;
  }

  @media (min-width: 1024px) { .campaign-grid { grid-template-columns: 1fr 1fr; } }

  .campaign-left { display: flex; flex-direction: column; gap: 32px; }

  .campaign-h2 {
    font-size: 32px;
    font-weight: 800;
    letter-spacing: -0.5px;
  }

  .campaign-items {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
  }

  @media (min-width: 640px) { .campaign-items { grid-template-columns: repeat(2, 1fr); } }

  .campaign-item { display: flex; gap: 16px; }
  .campaign-icon { flex-shrink: 0; margin-top: 4px; color: #ff6600; }
  .campaign-item h4 { font-weight: 700; margin-bottom: 4px; }
  .campaign-item p { font-size: 12px; color: #a0aec0; }

  .results-box {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .results-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; }

  .result-num { font-size: 48px; font-weight: 800; color: #ff6600; margin-bottom: 8px; }
  .result-label { font-size: 12px; font-weight: 600; letter-spacing: 0.5px; color: rgba(255, 255, 255, 0.6); }

  /* FAQ */
  .faq { background: #f0f4ff; }
  .faq-container { max-width: 1200px; margin: 0 auto; }

  .faq-grid {
    display: grid;
    gap: 24px;
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) { .faq-grid { grid-template-columns: repeat(2, 1fr); } }

  .faq-column { display: flex; flex-direction: column; gap: 12px; }

  .faq-item {
    background: white;
    border: 1px solid #ddd;
    border-radius: 24px;
    margin-bottom: 12px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    transition: all 0.3s;
  }

  .faq-item:hover { border-color: rgba(255,102,0,0.3); }

  .faq-toggle {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 32px;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    transition: background 0.3s;
    font-family: 'DM Sans', sans-serif;
  }

  .faq-toggle:hover { background: #f0f4ff; }
  .faq-question { font-weight: 700; font-size: 18px; color: #1a1a1a; }
  .faq-chevron { flex-shrink: 0; color: #ff6600; transition: transform 0.3s; }
  .faq-chevron.open { transform: rotate(180deg); }

  .faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    border-top: 1px solid #eee;
  }

  .faq-answer.open { max-height: 500px; }
  .faq-answer-text { padding: 24px 32px; color: #666; line-height: 1.7; font-size: 14px; }

  /* Process */
  .process { background: white; }

  .process-grid {
    display: grid;
    gap: 24px;
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) { .process-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (min-width: 1024px) { .process-grid { grid-template-columns: repeat(4, 1fr); } }

  .process-step {
    background: white;
    border: 1px solid #ddd;
    border-radius: 24px;
    padding: 32px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 16px;
    transition: all 0.3s;
  }

  .process-step:hover { border-color: #ff6600; box-shadow: 0 8px 24px rgba(255,102,0,0.1); transform: translateY(-4px); }

  .step-num {
    width: 48px; height: 48px;
    background: #ff6600;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    font-weight: 700;
    font-size: 18px;
  }

  .step-title { font-weight: 700; color: #1a1a1a; }
  .step-desc { font-size: 14px; color: #666; }

  /* CTA */
  .cta { background: #0f172a; color: white; position: relative; overflow: hidden; }

  .cta-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 48px;
    align-items: center;
    position: relative;
    z-index: 10;
  }

  @media (min-width: 1024px) { .cta-grid { grid-template-columns: 1fr 1fr; } }

  .cta-left { display: flex; flex-direction: column; gap: 32px; }

  .cta-h2 {
    font-size: 36px;
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: -0.5px;
  }

  @media (min-width: 768px) { .cta-h2 { font-size: 56px; } }

  .cta-p { font-size: 18px; color: #d1d5db; line-height: 1.7; }

  .cta-check {
    display: flex;
    gap: 16px;
    padding: 20px;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.05);
    max-width: 400px;
  }

  .cta-form {
    background: white;
    color: #1a1a1a;
    padding: 32px;
    border-radius: 24px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 768px) { .cta-form { padding: 48px; } }

  .form-group { display: grid; gap: 24px; }

  .form-row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }

  @media (min-width: 768px) { .form-row { grid-template-columns: repeat(2, 1fr); } }

  .form-field { display: flex; flex-direction: column; gap: 8px; }
  .form-label { font-weight: 600; font-size: 12px; color: #666; letter-spacing: 0.5px; }

  .form-input,
  .form-select {
    padding: 16px 20px;
    border-radius: 9999px;
    background: #f0f4ff;
    border: 2px solid transparent;
    font-size: 14px;
    transition: border-color 0.3s;
    font-family: 'DM Sans', sans-serif;
    color: #1a1a1a;
    width: 100%;
    appearance: none;
    -webkit-appearance: none;
  }

  .form-select-wrapper {
    position: relative;
  }

  .form-select-wrapper::after {
    content: '▾';
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: #ff6600;
    font-size: 14px;
    pointer-events: none;
  }

  .form-input:focus, .form-select:focus {
    outline: none;
    border-color: #ff6600;
  }

  .form-submit {
    background: #ff6600;
    color: white;
    padding: 20px 32px;
    border-radius: 9999px;
    font-weight: 700;
    font-size: 16px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.3s;
    box-shadow: 0 4px 20px rgba(255, 102, 0, 0.3);
    margin-top: 8px;
    font-family: 'DM Sans', sans-serif;
    width: 100%;
  }

  .form-submit:hover { transform: scale(1.02); box-shadow: 0 8px 30px rgba(255, 102, 0, 0.4); }
  .form-disclaimer { text-align: center; font-size: 11px; color: #666; letter-spacing: 0.5px; }

  /* ===================== MODAL ===================== */
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.65);
    backdrop-filter: blur(6px);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    opacity: 0;
    animation: modalFadeIn 0.3s ease forwards;
  }

  @keyframes modalFadeIn {
    to { opacity: 1; }
  }

  .modal-box {
    background: white;
    border-radius: 28px;
    padding: 40px;
    width: 100%;
    max-width: 560px;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    box-shadow: 0 30px 80px rgba(0,0,0,0.3);
    transform: translateY(24px);
    animation: modalSlideUp 0.35s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }

  @keyframes modalSlideUp {
    to { transform: translateY(0); }
  }

  .modal-close {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 36px;
    height: 36px;
    background: #f0f4ff;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    transition: all 0.2s;
  }

  .modal-close:hover {
    background: #ff6600;
    color: white;
  }

  .modal-title {
    font-family: 'Syne', sans-serif;
    font-size: 26px;
    font-weight: 800;
    color: #1a1a1a;
    margin-bottom: 6px;
    letter-spacing: -0.5px;
    padding-right: 40px;
  }

  .modal-subtitle {
    color: #888;
    font-size: 14px;
    margin-bottom: 28px;
    line-height: 1.6;
  }

  .modal-title .orange { color: #ff6600; font-style: italic; }
  /* ===================== END MODAL ===================== */

  /* ===================== TOAST ===================== */
  .toast-container {
    position: fixed;
    bottom: 32px;
    right: 32px;
    z-index: 2000;
    display: flex;
    flex-direction: column;
    gap: 12px;
    pointer-events: none;
  }

  @media (max-width: 640px) {
    .toast-container {
      bottom: 20px;
      right: 16px;
      left: 16px;
    }
  }

  .toast {
    display: flex;
    align-items: center;
    gap: 14px;
    background: #0f172a;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 16px 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255,102,0,0.15);
    pointer-events: all;
    min-width: 300px;
    max-width: 400px;
    transform: translateX(120%);
    opacity: 0;
    animation: toastSlideIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }

  .toast.toast-exit {
    animation: toastSlideOut 0.35s cubic-bezier(0.55, 0, 1, 0.45) forwards;
  }

  @keyframes toastSlideIn {
    to { transform: translateX(0); opacity: 1; }
  }

  @keyframes toastSlideOut {
    to { transform: translateX(120%); opacity: 0; }
  }

  @media (max-width: 640px) {
    .toast {
      min-width: unset;
      max-width: 100%;
      transform: translateY(100%);
    }
    .toast.toast-exit {
      animation: toastSlideOutMobile 0.35s cubic-bezier(0.55, 0, 1, 0.45) forwards;
    }
    @keyframes toastSlideOutMobile {
      to { transform: translateY(100%); opacity: 0; }
    }
  }

  .toast-icon {
    width: 36px;
    height: 36px;
    background: linear-gradient(135deg, #ff6600, #ff9933);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: 16px;
  }

  .toast-body {
    flex: 1;
  }

  .toast-title {
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
    font-size: 14px;
    color: white;
    margin-bottom: 2px;
  }

  .toast-msg {
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    color: rgba(255,255,255,0.55);
    line-height: 1.5;
  }

  .toast-close {
    background: none;
    border: none;
    cursor: pointer;
    color: rgba(255,255,255,0.35);
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    transition: color 0.2s;
    flex-shrink: 0;
  }

  .toast-close:hover { color: white; }

  .toast-progress {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #ff6600, #ff9933);
    border-radius: 0 0 0 16px;
    animation: toastProgress 4s linear forwards;
  }

  @keyframes toastProgress {
    from { width: 100%; }
    to { width: 0%; }
  }
  /* ===================== END TOAST ===================== */

  /* Footer */
  .roi-footer {
    background: #0f172a;
    color: #999;
    padding: 60px 24px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
  }

  @media (min-width: 768px) { .roi-footer { padding: 80px 64px; } }

  .footer-content {
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    gap: 48px;
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) { .footer-content { grid-template-columns: repeat(4, 1fr); gap: 48px; } }

  .footer-title { font-weight: 600; color: white; font-size: 12px; letter-spacing: 1px; margin-bottom: 24px; }
  .footer-desc { font-size: 14px; line-height: 1.7; }
  .footer-links { list-style: none; }
  .footer-links li { margin-bottom: 12px; }
  .footer-links a { color: #999; text-decoration: none; font-size: 14px; transition: color 0.3s; }
  .footer-links a:hover { color: #ff6600; }

  .footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    padding-top: 32px;
    text-align: center;
    font-size: 12px;
    letter-spacing: 0.5px;
    opacity: 0.4;
  }

  @media (min-width: 768px) { .footer-bottom { text-align: left; } }
`;

export default styles;
