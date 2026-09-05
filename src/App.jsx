import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';

// Lazy-loaded routes for code-splitting
const FeaturesPage = lazy(() => import('./pages/FeaturesPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const CompliancePage = lazy(() => import('./pages/CompliancePage'));
const SecurityPage = lazy(() => import('./pages/SecurityPage'));
const ShiftCareComparisonPage = lazy(() => import('./pages/ShiftCareComparisonPage'));
const WhyParticipantPricingPage = lazy(() => import('./pages/WhyParticipantPricingPage'));
const NdisPriceGuidePage = lazy(() => import('./pages/NdisPriceGuidePage'));
const GuardianAIPage = lazy(() => import('./pages/GuardianAIPage'));
const NdisProgressNotesGuidePage = lazy(() => import('./pages/NdisProgressNotesGuidePage'));
const SolutionsHubPage = lazy(() => import('./pages/SolutionsHubPage'));
const SolutionPage = lazy(() => import('./pages/SolutionPage'));
const CompareHubPage = lazy(() => import('./pages/CompareHubPage'));
const CompetitorComparisonPage = lazy(() => import('./pages/CompetitorComparisonPage'));
const BlogArticlePage = lazy(() => import('./pages/BlogArticlePage'));

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
          <Suspense fallback={
            <div className="min-h-[60vh] flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border-2 border-primary/20 border-t-primary animate-spin"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/solutions" element={<SolutionsHubPage />} />
              <Route path="/solutions/ndis-provider-software" element={<SolutionPage slug="ndis-provider-software" />} />
              <Route path="/solutions/disability-service-provider-software" element={<SolutionPage slug="disability-service-provider-software" />} />
              <Route path="/solutions/care-management-software" element={<SolutionPage slug="care-management-software" />} />
              <Route path="/solutions/ndis-rostering-software" element={<SolutionPage slug="ndis-rostering-software" />} />
              <Route path="/solutions/participant-management-software" element={<SolutionPage slug="participant-management-software" />} />
              <Route path="/solutions/ndis-invoicing-claiming-software" element={<SolutionPage slug="ndis-invoicing-claiming-software" />} />
              <Route path="/solutions/disability-support-worker-scheduling-software" element={<SolutionPage slug="disability-support-worker-scheduling-software" />} />
              <Route path="/compare" element={<CompareHubPage />} />
              <Route path="/vs/deputy" element={<CompetitorComparisonPage slug="deputy" />} />
              <Route path="/vs/care-master" element={<CompetitorComparisonPage slug="care-master" />} />
              <Route path="/vs/myp" element={<CompetitorComparisonPage slug="myp" />} />
              <Route path="/vs/nightingale" element={<CompetitorComparisonPage slug="nightingale" />} />
              <Route path="/guardian-ai" element={<GuardianAIPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/vs/shiftcare" element={<ShiftCareComparisonPage />} />
              <Route path="/why-participant-pricing" element={<WhyParticipantPricingPage />} />
              <Route path="/ndis-price-guide" element={<NdisPriceGuidePage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/resources/ndis-progress-notes-guide" element={<NdisProgressNotesGuidePage />} />
              <Route path="/resources/ndis-billing-guide" element={<BlogArticlePage slug="ndis-billing-guide" />} />
              <Route path="/resources/ndis-rostering-software-guide" element={<BlogArticlePage slug="ndis-rostering-software-guide" />} />
              <Route path="/resources/ndis-audit-preparation-guide" element={<BlogArticlePage slug="ndis-audit-preparation-guide" />} />
              <Route path="/resources/ndis-software-buyers-checklist" element={<BlogArticlePage slug="ndis-software-buyers-checklist" />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/compliance" element={<CompliancePage />} />
              <Route path="/security" element={<SecurityPage />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
