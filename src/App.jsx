import React, { useState } from 'react';

import styles from './styles';
import { useScrollY, useToast, useJivoChat, useHeroAnimations, useBodyScrollLock } from './hooks';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import DashboardGallery from './components/DashboardGallery';
import ChallengesSection from './components/ChallengesSection';
import FrameworkSection from './components/FrameworkSection';
import FeaturesSection from './components/FeaturesSection';
import AEOSection from './components/AEOSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import ComparisonSection from './components/ComparisonSection';
import CampaignSection from './components/CampaignSection';
import FAQSection from './components/FAQSection';
import ProcessSection from './components/ProcessSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import AuditModal from './components/AuditModal';
import { ToastContainer } from './components/Toast';

export default function ROISpectrum() {
  const [modalOpen, setModalOpen] = useState(false);

  const scrollY = useScrollY();
  const { toasts, addToast, removeToast } = useToast();
  const { subtitleVisible, buttonsVisible, statsVisible } = useHeroAnimations();

  useJivoChat();
  useBodyScrollLock(modalOpen);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleAuditSuccess = () => {
    addToast('Audit Request Received!', "We'll review your site and be in touch within 24 hours.");
  };

  return (
    <div>
      <style>{styles}</style>

      {modalOpen && (
        <AuditModal onClose={closeModal} onSuccess={handleAuditSuccess} />
      )}

      <ToastContainer toasts={toasts} onRemove={removeToast} />

      <Header scrollY={scrollY} onOpenModal={openModal} />

      <main>
        <HeroSection
          subtitleVisible={subtitleVisible}
          buttonsVisible={buttonsVisible}
          statsVisible={statsVisible}
          onOpenModal={openModal}
        />
        <DashboardGallery />
        <ChallengesSection />
        <FrameworkSection />
        <FeaturesSection />
        <AEOSection />
        <CaseStudiesSection />
        <ComparisonSection />
        <CampaignSection />
        <FAQSection />
        <ProcessSection />
        <CTASection onAuditSuccess={handleAuditSuccess} />
      </main>

      <Footer />
    </div>
  );
}
