import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "\"I've tried cold email before. It didn't work.\"",
    answer: "That's because you were selling the same thing as everyone else. We don't just fix your emails. We fix your offer. That's the difference between being ignored and being the only option."
  },
  {
    question: "\"I don't have time for this.\"",
    answer: "You do one 60-minute strategy call. We handle everything else: research, copy, infrastructure, sending, iteration. Your job is to show up to the meetings we book."
  },
  {
    question: "\"What if it doesn't work?\"",
    answer: "We keep going until you close a deal. That's the guarantee. No arbitrary timelines. No \"sorry, your 30 days are up.\""
  },
  {
    question: "\"How do you ensure the leads are actually high-quality?\"",
    answer: "We source leads with extreme precision by layering intent signals (such as recent hiring trends, funding rounds, or specific technology stacks) with your custom ICP filters. Most importantly, you maintain total control: you approve every lead list before we begin sending, ensuring 100% alignment with your brand standards."
  },
  {
    question: "\"What kind of visibility do I have into the process?\"",
    answer: "Transparency is built into our process. You will have full visibility into the lead sourcing, the specific research angles being used, and real-time metrics like reply rates and responses."
  },
  {
    question: "\"Do I need to commit to a long-term contract?\"",
    answer: "No. We start with the 30-Day Offer Testing Sprint. During this time, we set up your entire infrastructure, test multiple messaging angles, and refine your lead-tiering logic. At the end of the sprint, we analyze the data together to ensure the system is delivering results before we decide to scale the partnership long-term."
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-primary/5 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Questions You <span className="gold-text-gradient">Might Have</span>
          </h2>
          <p className="text-gray-400 text-lg font-light">
            Everything you need to know about The 30-Day Offer Testing Sprint.
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