import React from 'react';
import { SpotlightCard } from './ui/SpotlightCard';
import { TrendingDown, Activity, Ban } from 'lucide-react';

const problems = [
  {
    title: "The Lead Rollercoaster",
    description: "One month of frantic closing followed by two months of 'dry spells' because you stopped prospecting.",
    icon: TrendingDown,
  },
  {
    title: "The Signal Noise",
    description: "Burning your sales team's time on calls with 'prospects' who lack the budget or the authority.",
    icon: Activity,
  },
  {
    title: "The Deliverability Trap",
    description: "Sending to your whole lead list only to realize your domain has been blacklisted for weeks.",
    icon: Ban,
  },
];

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="relative py-32 overflow-hidden" aria-labelledby="problem-heading">
        {/* Background blobs */}
       <div className="absolute top-1/2 -left-10 w-96 h-96 bg-primary/5 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 id="problem-heading" className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            The Status Quo is <span className="gold-text-gradient">Broken</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Outdated strategies are costing you revenue. It's time to face the reality of modern prospecting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <SpotlightCard key={index} className="group p-8 h-full">
              <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-8 border border-white/5 group-hover:border-primary/20 group-hover:bg-primary/10 transition-all duration-300">
                <item.icon className="text-primary w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};