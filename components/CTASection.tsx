import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Your Next 20 Clients Are Out There.{' '}<br className="hidden md:block" />
          <span className="gold-text-gradient">Let Us Find Them.</span>
        </h2>
        <p className="text-gray-400 text-lg mb-4 max-w-2xl mx-auto font-light">
          20 brands that need your exact services. The pitch angle to land each one. Delivered free.
        </p>
        <p className="text-gray-500 text-base mb-10 max-w-xl mx-auto">
          No more waiting for referrals. No more spray-and-pray. Just brands that need what you do.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="primary"
            className="!px-10 !py-4 text-lg"
            icon={<ArrowRight size={20} />}
            href="https://cal.com/david-zhu/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Your Free Brand List
          </Button>
        </div>
        <p className="text-gray-500 text-sm mt-6 italic">
          15-minute call. No pitch. We just learn about your agency and build the list.
        </p>
      </div>
    </section>
  );
};
