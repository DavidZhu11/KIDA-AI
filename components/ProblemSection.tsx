import React from 'react';
import { Users, Mail, RefreshCcw, Clock } from 'lucide-react';
import { SpotlightCard } from './ui/SpotlightCard';

const problems = [
  {
    title: "\"My offer sounds like everyone else's.\"",
    description: "On sales calls, you're compared to 3 other agencies. You know you're better, but they don't see it. So you compete on price. And lose.",
    icon: Users,
  },
  {
    title: "\"I'm stuck on the referral rollercoaster.\"",
    description: "Great months followed by dry spells. You know you need a predictable pipeline, but nothing seems to stick.",
    icon: RefreshCcw,
  },
  {
    title: "\"Cold outreach doesn't work for me.\"",
    description: "You've tried it. Generic templates, bought lists, maybe even an agency. The result? Crickets. Or worse, spam complaints.",
    icon: Mail,
  },
];

export const ProblemSection: React.FC = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/2 -left-10 w-96 h-96 bg-primary/5 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Sound <span className="gold-text-gradient">Familiar?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            If you're a B2B service provider struggling to differentiate, you're not alone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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