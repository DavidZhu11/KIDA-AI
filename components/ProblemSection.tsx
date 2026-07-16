import React from 'react';
import { SpotlightCard } from './ui/SpotlightCard';
import { RefreshCcw, Megaphone, DollarSign } from 'lucide-react';

const problems = [
  {
    title: "Referrals are great — until they dry up.",
    description: "Word of mouth built your agency. But you can't control when the next one comes. Some months you're turning work away. Others, you're wondering where the next project is.",
    icon: RefreshCcw,
  },
  {
    title: "Outbound feels wrong.",
    description: "You got into this to create great content, not to cold-pitch strangers on LinkedIn. Every template you've tried sounds like spam — because it was.",
    icon: Megaphone,
  },
  {
    title: "The wrong clients find you.",
    description: "Budget shoppers, one-off projects, brands that want a $500 TikTok. Meanwhile, the brands that would pay $5K-$15K/month retainers don't know you exist.",
    icon: DollarSign,
  },
];

export const ProblemSection: React.FC = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 -left-10 w-96 h-96 bg-primary/5 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Sound <span className="gold-text-gradient">Familiar?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            If you run a video or content agency, you've probably felt this.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((item, index) => (
            <SpotlightCard key={index} className="group p-8 h-full">
              <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-8 border border-white/5 group-hover:border-primary/20 group-hover:bg-primary/10 transition-all duration-300">
                <item.icon className="text-primary w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-lg font-bold text-white mb-4 group-hover:text-primary transition-colors">
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
