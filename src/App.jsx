import React, { useState, useEffect } from 'react';
import styles from './styles';
import { useJivoChat, useToast } from './hooks';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ChallengesSection from './components/ChallengesSection';
import FrameworkSection from './components/FrameworkSection';
import FeaturesSection from './components/FeaturesSection';
import AEOSection from './components/AEOSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import ComparisonSection from './components/ComparisonSection';
import RealResultsSection from './components/RealResultsSection';
import VideoSection from './components/VideoSection';
import CampaignSection from './components/CampaignSection';
import FAQSection from './components/FAQSection';
import ProcessSection from './components/ProcessSection';
import CTASection from './components/CTASection';
import AuditModal from './components/AuditModal';
import TestimonialsSection from './components/TestimonialsSection';
import ThankYou from './components/ThankYou';
import certBadge from './assets/ads-certified.png';
import { ToastContainer } from './components/Toast';

function MainSite({ onFormSuccess }) {
  const [scrollY, setScrollY] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { toasts, addToast, removeToast } = useToast();

  useJivoChat();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [modalOpen]);

  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const handleAuditSuccess = () => {
    addToast('Audit Request Received!', "We'll review your site and be in touch within 24 hours.");
    onFormSuccess();
  };

  return (
    <div>
      {modalOpen && <AuditModal onClose={closeModal} onSuccess={handleAuditSuccess} />}

      <ToastContainer toasts={toasts} onRemove={removeToast} />

      <Header
        scrollY={scrollY}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        openModal={openModal}
      />

      <main>
        {/* Fixed Google Ads Certified Badge */}
        <div
          style={{ position: 'fixed', bottom: '24px', left: '24px', zIndex: 999, cursor: 'pointer' }}
          onClick={() => window.open('https://skillshop.credential.net/c9275dc8-5408-47d6-9052-db744a80d3cc#acc.TCgPDe7l')}
          title="Google Ads Search Certified"
        >
          <img
            src={certBadge}
            alt="Google Ads Search Certified"
            style={{
              width: '72px', height: '72px', borderRadius: '50%',
              boxShadow: '0 4px 24px rgba(0,0,0,0.3), 0 0 0 3px white, 0 0 0 5px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.4), 0 0 0 3px white, 0 0 0 5px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.3), 0 0 0 3px white, 0 0 0 5px rgba(0,0,0,0.1)';
            }}
          />
        </div>

        <HeroSection openModal={openModal} />
        <ChallengesSection />
        <FrameworkSection openModal={openModal} />
        <FeaturesSection />
        <AEOSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <ComparisonSection />
        <RealResultsSection />
        <VideoSection />
        <CampaignSection />
        <FAQSection openFAQ={openFAQ} toggleFAQ={toggleFAQ} />
        <ProcessSection />
        <CTASection onAuditSuccess={handleAuditSuccess} />
      </main>
    </div>
  );
}

export default function ROISpectrum() {
  const [page, setPage] = useState(() => {
    // Support direct URL access e.g. yourdomain.com/thank-you
    return window.location.pathname === '/thank-you' ? 'thankyou' : 'home';
  });

  const goToThankYou = () => {
    window.history.pushState({}, '', '/thank-you');
    window.scrollTo(0, 0);
    setPage('thankyou');
  };

  const goHome = () => {
    window.history.pushState({}, '', '/');
    window.scrollTo(0, 0);
    setPage('home');
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const onPop = () => {
      setPage(window.location.pathname === '/thank-you' ? 'thankyou' : 'home');
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  return (
    <>
      <style>{styles}</style>
      {page === 'thankyou'
        ? <ThankYou onGoHome={goHome} />
        : <MainSite onFormSuccess={goToThankYou} />
      }
    </>
  );
}
