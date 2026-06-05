import React from 'react';
import background from '../assets/background.jpg';

export default function DashboardGallery() {
  return (
    <section className="dashboard-gallery">
      <img
        src={background}
        alt="Dashboard"
        className="gallery-image"
        style={{ width: '100%', display: 'block', objectFit: 'cover' }}
      />
    </section>
  );
}
