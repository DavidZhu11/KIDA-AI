import React from 'react';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-12 border-t border-white/5 bg-background-dark/50 backdrop-blur-sm relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          <div className="text-center md:text-left md:border-r border-white/10 md:pr-12 min-w-max">
            <p className="text-4xl font-bold text-white tracking-tight">40,000+</p>
            <p className="text-sm text-gray-500 mt-1">People use us to engage their team</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 w-full opacity-60">
             {/* Simple text representation for logos to avoid external image dependencies breaking */}
             <div className="group transition-all duration-300 hover:opacity-100 hover:scale-110 cursor-pointer">
                <span className="text-xl font-bold font-sans tracking-tight text-white group-hover:text-green-500 transition-colors">Spotify</span>
             </div>
             <div className="group transition-all duration-300 hover:opacity-100 hover:scale-110 cursor-pointer flex items-center gap-1">
                <span className="text-xl font-serif font-bold text-white group-hover:text-blue-400 transition-colors">Allianz</span>
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
             </div>
             <div className="group transition-all duration-300 hover:opacity-100 hover:scale-110 cursor-pointer">
                <span className="text-xl font-sans tracking-[0.2em] text-white">L'ORÉAL</span>
             </div>
             <div className="group transition-all duration-300 hover:opacity-100 hover:scale-110 cursor-pointer">
                <span className="text-2xl font-display font-bold italic text-white group-hover:text-red-500 transition-colors">Kellogg's</span>
             </div>
             <div className="group transition-all duration-300 hover:opacity-100 hover:scale-110 cursor-pointer">
                <span className="text-2xl font-sans font-black tracking-tighter text-white group-hover:text-red-600 transition-colors">NETFLIX</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};