import React from 'react';
import { History, Zap, XCircle, CheckCircle, Target } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  return (
    <section id="solution" className="relative py-32 border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            What If Cold Outreach Wasn't About Getting Leads...<br className="hidden md:block" />
            <span className="gold-text-gradient">But About Finding the One Offer That Makes Competitors Irrelevant?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto font-light mt-6">
            Most agencies sell leads. We sell the <span className="text-white font-medium">offer strategy</span> that makes leads convert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Traditional Card */}
          <div className="p-10 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.03] transition-colors duration-300">
            <div className="flex items-center gap-4 mb-10 pb-6 border-b border-white/5">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                <History className="text-gray-500 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-400">What They Sell</h3>
            </div>

            <div className="space-y-8">
              {[
                { title: "Leads", desc: "Promise you more meetings without fixing why you're losing them." },
                { title: "6-Month Retainers", desc: "Lock you in before proving anything actually works." },
                { title: "Generic Copy", desc: "Same templates sent to everyone, hoping something sticks." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-5 group">
                  <XCircle className="text-gray-600 w-6 h-6 mt-1 flex-shrink-0 group-hover:text-gray-500 transition-colors" />
                  <div>
                    <h4 className="text-white font-semibold mb-1 group-hover:text-gray-300 transition-colors">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Solution Card */}
          <div className="p-10 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-sm hover:border-primary/30 transition-colors duration-300 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="flex items-center gap-4 mb-10 pb-6 border-b border-primary/10 relative z-10">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">What We Deliver</h3>
            </div>

            <div className="space-y-8 relative z-10">
              {[
                { title: "3 Differentiated Offers", desc: "We craft positioning that makes you the only logical choice." },
                { title: "3 Target Markets Tested", desc: "Real data on who responds, so you stop guessing." },
                { title: "Results-First Guarantee", desc: "We don't stop until you close a deal. Period." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-5 group">
                  <CheckCircle className="text-primary w-6 h-6 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Outcomes */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg mb-6">You walk away knowing:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "What offer resonates most with buyers",
              "Which market responds fastest",
              "How to position yourself as the only option"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <Target className="text-primary w-4 h-4" />
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};