import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" aria-label="Hero section">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] z-10 pointer-events-none"></div>

      {/* Soft animated gradient texture */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] bg-gold-dark/20 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[40%] bg-primary/10 rounded-full blur-[150px] animate-blob animation-delay-4000"></div>
      </div>

      {/* Light Beam / Field Texture */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Beam 1 */}
        <div className="absolute -top-[50%] left-[30%] w-[200px] h-[200%] bg-gradient-to-b from-transparent via-white/[0.03] to-transparent rotate-[25deg] blur-3xl transform-gpu"></div>
        {/* Beam 2 */}
        <div className="absolute -top-[50%] left-[60%] w-[150px] h-[200%] bg-gradient-to-b from-transparent via-primary/[0.05] to-transparent rotate-[20deg] blur-2xl transform-gpu animate-pulse-slow"></div>
        {/* Texture Overlay (Grain) */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)] mb-10 animate-float hover:bg-white/10 transition-colors cursor-default select-none group">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">For High Ticket B2B Service Businesses</span>
          <Sparkles className="text-primary w-3.5 h-3.5" />
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white leading-[1.1] mb-8 drop-shadow-2xl">
          Stop Competing on{' '}
          <span className="relative inline-block group">
            <span className="text-gray-500 line-through decoration-gray-600 decoration-2 transition-all duration-300 group-hover:text-gray-400">Price</span>
          </span>
          . <br className="hidden md:block" />
          Start Being{' '}
          <span className="relative inline-block group">
            <span className="gold-text-gradient italic relative z-10 transition-all duration-500 group-hover:brightness-125">The Only Option</span>
            {/* Underline decoration */}
            <svg className="absolute w-[110%] h-3 -bottom-2 -left-[5%] text-primary opacity-60 z-0 transition-opacity duration-300 group-hover:opacity-100" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.00025 6.99997C25.7201 5.20232 94.6295 -2.46369 198.003 2.49997" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 bg-primary/20 blur-xl -z-10 transform scale-110 opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
          </span>
          .
        </h1>

        {/* Subheadline */}
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-400 leading-relaxed font-light mb-10">
          Same service. Different positioning. Suddenly, you're not competing. You're the only option.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full sm:w-auto">
          <Button
            variant="primary"
            icon={<ArrowRight size={18} />}
            className="w-full sm:w-auto"
            href="https://cal.com/david-zhu/cold-email-systems-audit"
            target="_blank"
            rel="noopener noreferrer"
          >
            Free Systems Audit
          </Button>
        </div>
      </div>
    </section>
  );
};