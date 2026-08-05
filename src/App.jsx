import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProtocolMarquee from './components/ProtocolMarquee';
import HowItWorksSection from './components/HowItWorksSection';
import UnderTheHoodSection from './components/UnderTheHoodSection';
import FeaturesSection from './components/FeaturesSection';
import AutopilotSection from './components/AutopilotSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0c0c0c] text-white selection:bg-white selection:text-black font-sans">
      {/* Fixed Ambient Background Effects */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="tx-dots absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_center,#000_25%,transparent_82%)]"></div>
        <div
          className="absolute -top-[20%] left-1/2 h-[55vh] w-[80vw] -translate-x-1/2 rounded-full blur-[150px]"
          style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.07), transparent 70%)' }}
        ></div>
        <div
          className="absolute top-[35%] right-[6%] h-[40vh] w-[35vw] rounded-full blur-[150px]"
          style={{ background: 'radial-gradient(circle, rgba(250,204,21,0.04), transparent 70%)' }}
        ></div>
        <div className="tx-noise absolute inset-0 opacity-[0.035] mix-blend-soft-light"></div>
        <div className="absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.55))]"></div>
      </div>

      <Header />
      <main className="relative">
        <HeroSection />
        <ProtocolMarquee />
        <HowItWorksSection />
        <UnderTheHoodSection />
        <FeaturesSection />
        <AutopilotSection />
      </main>
      <Footer />
    </div>
  );
}
