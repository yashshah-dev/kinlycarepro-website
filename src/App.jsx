import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import ResourcesPage from './pages/ResourcesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import CompliancePage from './pages/CompliancePage';
import SecurityPage from './pages/SecurityPage';
import ShiftCareComparisonPage from './pages/ShiftCareComparisonPage';
import WhyParticipantPricingPage from './pages/WhyParticipantPricingPage';
import NdisPriceGuidePage from './pages/NdisPriceGuidePage';
import GuardianAIPage from './pages/GuardianAIPage';

import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-accent/30 flex flex-col justify-between">
        <SpeedInsights />
        <Analytics />
        <Navbar />
        <ScrollToTop />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/guardian-ai" element={<GuardianAIPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/vs/shiftcare" element={<ShiftCareComparisonPage />} />
            <Route path="/why-participant-pricing" element={<WhyParticipantPricingPage />} />
            <Route path="/ndis-price-guide" element={<NdisPriceGuidePage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/compliance" element={<CompliancePage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
