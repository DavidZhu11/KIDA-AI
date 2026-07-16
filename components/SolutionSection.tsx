import React from 'react';
import { SpotlightCard } from './ui/SpotlightCard';
import { Sparkles, CheckCircle2, Building2, Target, UserCheck } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  return (
    <section id="solution" className="relative py-32 border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            What If You Knew Exactly Which Brands{' '}<br className="hidden md:block" />
            <span className="gold-text-gradient">Need You Right Now?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto font-light mt-6">
            We research brands actively scaling content — new campaigns, hiring creators, ramping social — and match them to your agency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: Building2,
              title: "20 Hand-Picked Brands",
              desc: "Brands that match your exact service offering — UGC, video production, social content, podcast production. Vetted and researched, not scraped from a database."
            },
            {
              icon: Target,
              title: "The Pitch Angle for Each",
              desc: "Not a generic template. A specific angle based on what that brand is doing right now — their latest campaign, a recent hire, a gap in their content strategy."
            },
            {
              icon: UserCheck,
              title: "The Decision-Maker",
              desc: "The founder, CMO, or head of content who signs the check. Not the intern managing the inbox."
            }
          ].map((item, idx) => (
            <SpotlightCard key={idx} className="p-8 !border-primary/20 !bg-gradient-to-b !from-primary/5 !to-transparent">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 border border-primary/20">
                <item.icon className="text-primary w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </SpotlightCard>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg mb-8">The list is yours to keep. Use it however you want. Or let us handle the outreach.</p>
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {[
              "Brands actively scaling content production",
              "Matched to your specific services",
              "Ready to book — not cold leads"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-2 text-white">
                <CheckCircle2 className="text-primary w-5 h-5" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
