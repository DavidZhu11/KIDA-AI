import React from 'react';
import { SpotlightCard } from './ui/SpotlightCard';
import { MessageSquareQuote, CheckCheck } from 'lucide-react';

const replies = [
  {
    salutation: "Hi David,",
    content: "Not sure if your email was written with AI or not, but if so, it's one of the first I've received that correctly interpreted our work and made the personalization feel real."
  },
  {
    salutation: "Best nurture email I have received,",
    content: "and I get 85 avg per day. I'm interested in learning more."
  },
  {
    salutation: "David,",
    content: "Thanks for the email and loved the way you researched my profile before reaching out to me."
  }
];

export const ProofSection: React.FC = () => {
  return (
    <section id="results" className="relative py-24 border-b border-white/5 overflow-hidden" aria-labelledby="proof-heading">
      {/* Background Decor */}
      <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-gold-dark/10 rounded-full mix-blend-screen filter blur-[80px] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <CheckCheck size={14} />
            <span>Human-Level Quality</span>
          </div>
          <h2 id="proof-heading" className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Responses that we <span className="gold-text-gradient">usually get</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            Worried about AI sounding robotic? Our prospects can't tell the difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {replies.map((reply, index) => (
            <SpotlightCard key={index} className="flex flex-col h-full bg-gradient-to-br from-white/[0.03] to-white/[0.01]">
              <div className="p-8 flex flex-col h-full">
                <div className="mb-6">
                   <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                     <MessageSquareQuote size={20} />
                   </div>
                </div>
                
                <div className="flex-grow">
                  <p className="text-primary/90 font-medium mb-2 font-display italic text-lg">{reply.salutation}</p>
                  <p className="text-gray-300 leading-relaxed">
                    "{reply.content}"
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs text-gray-500 font-mono uppercase">Positive Reply • Verified</span>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};