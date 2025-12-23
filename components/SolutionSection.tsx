import React from 'react';
import { SpotlightCard } from './ui/SpotlightCard';
import { History, Sparkles, XCircle, CheckCircle2 } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  return (
    <section id="solution" className="relative py-32 border-t border-white/5 overflow-hidden" aria-labelledby="solution-heading">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 id="solution-heading" className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            The New Standard of <span className="gold-text-gradient">Outreach</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            Why settle for generic blasts when you can have surgical precision?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Traditional Card */}
          <div className="p-10 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.03] transition-colors duration-300">
            <div className="flex items-center gap-4 mb-10 pb-6 border-b border-white/5">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                <History className="text-gray-500 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-400">Traditional Agencies</h3>
            </div>
            
            <div className="space-y-8">
              {[
                { title: "Generic Templates", desc: '"Hi [First_Name], do you want more leads?"' },
                { title: "Bulk Blasts", desc: "High volume, low deliverability, high risk." },
                { title: "Lead Lists", desc: "Scraping outdated databases." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-5 group">
                  <XCircle className="text-gray-600 w-6 h-6 mt-1 flex-shrink-0 group-hover:text-gray-500 transition-colors" />
                  <div>
                    <h4 className="text-gray-300 font-semibold text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed italic">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Solution Card */}
          <SpotlightCard className="p-10 !border-primary/20 !bg-gradient-to-b !from-primary/10 !to-transparent shadow-[0_0_40px_rgba(212,175,55,0.05)]">
             <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
             
             <div className="flex items-center gap-4 mb-10 pb-6 border-b border-primary/10">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                <Sparkles className="text-primary w-6 h-6 animate-pulse" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">Your AI-Hybrid Agency</h3>
            </div>

            <div className="space-y-8">
              {[
                { title: "Contextual Intelligence", desc: "Deep-web research on every prospect to craft messages that are indistinguishable from a hand-written note." },
                { title: "Infrastructure First", desc: "Multi-inbox rotation and custom tracking domains." },
                { title: "Intent Signals", desc: "Prospecting based on recent hires or funding rounds." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-5 group">
                  <CheckCircle2 className="text-primary w-6 h-6 mt-1 flex-shrink-0 drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
                  <div>
                    <h4 className="text-primary font-semibold text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};