import React from 'react';
import { SpotlightCard } from './ui/SpotlightCard';
import { Star, User, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Dona Baker",
    role: "Agency Owner",
    quote: "40% acceptance, 30%+ replies, meeting booked in week 1.",
  },
  {
    name: "Landon Steele",
    role: "Growth Director",
    quote: "High-quality, high-impact outreach... it's working.",
  },
  {
    name: "Domenic Werner",
    role: "Founder",
    quote: "Expert in AI automation and bringing clarity to technical setups.",
  }
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="results" className="relative py-32 overflow-hidden">
       <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full max-h-[500px] bg-primary/5 rounded-full mix-blend-screen filter blur-[120px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Real <span className="gold-text-gradient">Results</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            What our clients are seeing from outreach we've built.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <SpotlightCard key={index} className="h-full">
              <div className="p-8 h-full flex flex-col relative overflow-hidden group">
                <div className="absolute top-4 right-4 text-white/5 group-hover:text-primary/10 transition-colors duration-500">
                  <Quote size={80} />
                </div>

                <div className="flex gap-1 mb-6 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="text-xl font-medium text-white mb-8 relative z-10 leading-relaxed">
                  "{item.quote}"
                </p>

                <div className="mt-auto flex items-center gap-4 relative z-10 pt-6 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-black border border-white/10 flex items-center justify-center">
                    <User size={18} className="text-gray-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{item.name}</h4>
                    <p className="text-primary text-xs font-medium">{item.role}</p>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};
