import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Do I have to pay for the brand list?",
    answer: "No. The list of 20 brands is completely free. We build it for you after a 15-minute call where we learn about your agency, your services, and the kind of brands you want to work with. No cost, no commitment."
  },
  {
    question: "How do you find the brands?",
    answer: "We use AI-powered research combined with human verification. We look for brands actively scaling content — launching new campaigns, hiring creators, ramping up social, or expanding into new channels. Then we match them to your specific services and price range."
  },
  {
    question: "I've tried cold outreach before and it didn't work.",
    answer: "That's because most outreach is generic templates sent to random lists. We research each brand individually and write outreach based on what they're actually doing right now. It reads like a real person who did their homework — because we did."
  },
  {
    question: "What if I'm not a video production agency?",
    answer: "We work with any content production agency — UGC studios, social media content shops, podcast production, content repurposing, short-form video. If brands pay you to create content, we can find brands that need you."
  },
  {
    question: "What does the full outreach service cost?",
    answer: "The brand list is free. If you want us to handle the full outreach — personalized messages, follow-ups, meeting booking — that starts at $2,500/month. But there's zero pressure. Most people start with the free list and decide from there."
  },
  {
    question: "How fast will I see results?",
    answer: "The brand list is delivered within 48 hours of our first call. If you opt into the full outreach service, most agencies see their first meeting booked within 2-3 weeks of launching."
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 border-t border-white/5">
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-primary/5 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Questions You <span className="gold-text-gradient">Might Have</span>
          </h2>
          <p className="text-gray-400 text-lg font-light">
            Everything you need to know before booking your call.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group border border-white/5 rounded-2xl bg-white/[0.02] transition-all duration-300 hover:border-primary/20 hover:bg-white/[0.03] ${openIndex === index ? 'border-primary/20 bg-white/[0.04]' : ''}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`text-lg font-medium transition-colors duration-300 ${openIndex === index ? 'text-primary' : 'text-white group-hover:text-primary/80'}`}>
                  {faq.question}
                </span>
                <span className={`ml-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-white/10 transition-all duration-300 ${openIndex === index ? 'bg-primary text-black' : 'bg-transparent text-gray-400 group-hover:border-primary/50 group-hover:text-primary'}`}>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  />
                </span>
              </button>

              <div
                style={{
                  display: 'grid',
                  gridTemplateRows: openIndex === index ? '1fr' : '0fr',
                  transition: 'grid-template-rows 300ms ease-in-out'
                }}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
