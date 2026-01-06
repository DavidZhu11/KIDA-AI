import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { ProcessSection } from './components/ProcessSection';
import { OriginStorySection } from './components/OriginStorySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { ParticleBackground } from './components/ui/ParticleBackground';

function App() {
  return (
    <div className="min-h-screen text-white selection:bg-primary/30 selection:text-white relative">
      <ParticleBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <ProcessSection />
        <OriginStorySection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;