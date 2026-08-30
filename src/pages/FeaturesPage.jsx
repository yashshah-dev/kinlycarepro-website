import React from 'react';
import SEO from '../components/SEO';
import Features from '../components/Features';
import SecurityStrip from '../components/SecurityStrip';
import FinalCta from '../components/FinalCta';
import { Sparkles } from 'lucide-react';

const FeaturesPage = () => {
  return (
    <>
      <SEO
        title="NDIS Software Features - 8 Core Architectural Pillars | Kinly CarePro"
        description="Explore the 8 core pillars of Kinly CarePro: Deterministic NDIS Billing (PAPL 2025-26), Guardian AI Note QA, GPS Caregiver App, Copy-Week Wizard, Payroll Engine, 3-Tier Staff Screening, 17+ Reports Hub, and Data Isolation."
        keywords="NDIS software features, NDIS billing engine, Guardian AI note QA, NDIS mobile app GPS, copy week wizard rostering, NDIS payroll engine, 3 tier worker screening, NDIS incident management, NDIS reports hub"
        url="https://www.kinlycarepro.com/features"
        breadcrumbs={[{ name: "Features", path: "/features" }]}
      />
      
      {/* Header Banner */}
      <section className="pt-32 pb-8 bg-gradient-to-b from-[#f2fbff] via-white to-slate-50 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold tracking-widest uppercase text-xs mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Architecture Tour</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
            The 8 Core Value Pillars
          </h1>
          <p className="mt-5 text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Every capability below is built directly into the core platform architecture. 100% included for every provider with zero paywalls, no feature gating, and unlimited staff accounts.
          </p>
        </div>
      </section>

      {/* 8 Core Pillars Detailed Interactive Architecture Showcase */}
      <Features />

      {/* Enterprise Security Strip */}
      <SecurityStrip />

      {/* Final Call to Action */}
      <FinalCta />
    </>
  );
};

export default FeaturesPage;
