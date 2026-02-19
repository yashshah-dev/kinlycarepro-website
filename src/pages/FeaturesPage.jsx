import React from 'react';
import SEO from '../components/SEO';
import GuardianAI from '../components/GuardianAI';
import Features from '../components/Features';
import ExperienceShowcase from '../components/ExperienceShowcase';

const FeaturesPage = () => {
  return (
    <>
      <SEO
        title="Features - Mobile Apps, Smart Rostering & Billing Automation"
        description="Offline mobile apps with GPS geofencing, live operations map, smart rostering, one-click PRODA exports, and Guardian safety checks. Complete NDIS platform features."
        keywords="NDIS mobile app, care rostering software, NDIS billing automation, GPS geofencing, PRODA export, live operations map, fatigue tracking, NDIS price guide"
        url="https://kinlycarepro.com.au/features"
      />
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-white text-center px-4">
        <p className="text-accent font-semibold tracking-[0.4em] uppercase text-xs">Features</p>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">Deep dive into Guardian + Kinly CarePro platform.</h1>
        <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
          Explore how Kinly CarePro automates compliance, operations, and billing with purpose-built workflows for frontline teams and head office.
        </p>
      </section>
      <GuardianAI />
      <Features />
      <ExperienceShowcase />
    </>
  );
};

export default FeaturesPage;
