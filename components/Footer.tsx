import React from 'react';
import { Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark border-t border-white/5 pt-12 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div>
            <span className="font-display font-bold text-2xl text-white block mb-2">KIDA AI</span>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Pipeline for video and content agencies. We find brands that need your services and hand you the pitch angle.
            </p>
          </div>

          <a
            href="https://cal.com/david-zhu/quick-chat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-white transition-colors text-sm font-medium"
          >
            Get Your Free Brand List &rarr;
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/5">
          <p className="text-gray-500 text-xs">&copy; 2026 KIDA AI. All rights reserved.</p>
          <a href="https://www.linkedin.com/in/davidlzhu/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors mt-4 md:mt-0">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
