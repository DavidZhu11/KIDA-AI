import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden border-t border-white/5">
       {/* Background glow to make it pop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Ready to Scale Your <span className="gold-text-gradient">Outreach?</span>
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto font-light">
          Stop relying on guesswork. Implement a proven AI infrastructure that generates consistent, high-quality leads on autopilot.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="primary" 
              className="!px-10 !py-4 text-lg" 
              icon={<ArrowRight size={20} />}
              href="https://cal.com/david-zhu/cold-email-systems-audit"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Your Free Systems Audit
            </Button>
        </div>
      </div>
    </section>
  );
};