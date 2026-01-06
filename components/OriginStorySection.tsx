import React from 'react';
import { Sparkles } from 'lucide-react';

export const OriginStorySection: React.FC = () => {
    return (
        <section className="relative py-28 overflow-hidden">
            {/* Bold background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full mix-blend-screen filter blur-[150px] pointer-events-none"></div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md mb-8">
                        <Sparkles className="text-primary w-5 h-5" />
                        <span className="text-base font-semibold text-primary">Why This Works</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
                        We Know Because <br className="hidden md:block" />
                        <span className="gold-text-gradient">We Did It Ourselves</span>
                    </h2>
                </div>

                {/* Before/After Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* Before Card */}
                    <div className="p-10 rounded-3xl border border-white/10 bg-white/[0.02] relative overflow-hidden group hover:border-white/20 transition-colors">
                        <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-gray-800/80 border border-gray-600 text-sm text-gray-300 font-semibold">
                            Before
                        </div>
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-400 mb-6 mt-6">
                            "AI Cold Email Agency"
                        </h3>
                        <ul className="space-y-4 text-gray-400 text-lg">
                            <li className="flex items-start gap-3">
                                <span className="text-gray-500 mt-1">•</span>
                                <span>Competing on price with 50+ other agencies</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-gray-500 mt-1">•</span>
                                <span>Selling "leads" like everyone else</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-gray-500 mt-1">•</span>
                                <span>Stuck explaining why we're different</span>
                            </li>
                        </ul>
                    </div>

                    {/* After Card */}
                    <div className="p-10 rounded-3xl border-2 border-primary/40 bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden shadow-[0_0_60px_rgba(212,175,55,0.1)]">
                        <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-primary/30 border border-primary/50 text-sm text-primary font-semibold">
                            After
                        </div>
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6 mt-6">
                            "The 30-Day Offer Testing Sprint"
                        </h3>
                        <ul className="space-y-4 text-gray-200 text-lg">
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1 text-xl">✓</span>
                                <span>The only sprint-based offer testing service</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1 text-xl">✓</span>
                                <span>Selling offer strategy, not commodity leads</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1 text-xl">✓</span>
                                <span>Premium clients who "get it" immediately</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Story Copy */}
                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                        KIDA AI started as yet another AI cold email agency, fighting for attention in a sea of identical offers.
                        Then we applied the exact framework we now teach to our clients.
                    </p>
                    <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8">
                        We stopped selling "leads" and started selling <span className="gold-text-gradient">the offer strategy that makes leads convert</span>.
                    </p>
                    <p className="text-2xl md:text-3xl text-primary font-display font-bold">
                        Now we help you do the same. In 30 days.
                    </p>
                </div>
            </div>
        </section>
    );
};
