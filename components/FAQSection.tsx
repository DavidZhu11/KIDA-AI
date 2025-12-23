import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How do we avoid sounding like a "robotic" spam bot?',
    answer: 'Unlike generic tools that just swap out names, our Human-in-the-Loop engine performs deep contextual research on every prospect—analyzing LinkedIn activity, recent interviews, and company news—to craft messages that pass the modern "Turing Test".'
  },
  {
    question: 'Will my primary domain reputation be at risk?',
    answer: 'No. We never send from your primary business domain. We protect your reputation by building a sophisticated Reputation Security infrastructure using custom subdomains and multi-inbox rotation to maintain a 99%+ deliverability rate.'
  },
  {
    question: 'How do you ensure the leads are actually "High-Quality"?',
    answer: 'We source leads with extreme precision by layering intent signals—such as recent hiring trends, funding rounds, or specific technology stacks—with your custom ICP filters. Most importantly, you maintain total control: you approve every lead list before we begin sending, ensuring 100% alignment with your brand standards.'
  },
  {
    question: 'What exactly happens during the "Free Systems Audit"?',
    answer: 'It is a technical deep dive into your current outreach infrastructure. We scan for SPF/DKIM leaks, check your copywriting for spam words, and show you a sample of the AI research angles our engine would generate for your specific target market.'
  },
  {
    question: 'What kind of visibility do I have into the process?',
    answer: 'Transparency is built into our dashboard. You will have full visibility into the lead sourcing, the specific research angles being used, and real-time metrics like reply rates and responses.'
  },
  {
    question: 'Do I need to commit to a long-term contract?',
    answer: 'No. We operate as a high-tier founding partner for our clients, which is why we start with a 30-Day Pilot Phase. During this month, we set up your entire infrastructure, test multiple messaging angles, and refine your lead-tiering logic. At the end of the pilot, we analyze the dashboard data together to ensure the system is delivering high-impact outreach before we decide to scale the partnership long-term.'
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
            Frequently Asked <span className="gold-text-gradient">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg font-light">
            Everything you need to know about our process and partnership model.
          </p>
        </div>

        <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
          {faqs.map((faq, index) => (
            <article
              key={index}
              className={`group border border-white/5 rounded-2xl bg-white/[0.02] overflow-hidden transition-all duration-300 hover:border-primary/20 hover:bg-white/[0.03] ${openIndex === index ? 'border-primary/20 bg-white/[0.04]' : ''}`}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className={`text-lg font-medium transition-colors duration-300 ${openIndex === index ? 'text-primary' : 'text-white group-hover:text-primary/80'}`} itemProp="name">
                  {faq.question}
                </span>
                <span className={`ml-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-white/10 transition-all duration-300 ${openIndex === index ? 'bg-primary text-black rotate-180' : 'bg-transparent text-gray-400 group-hover:border-primary/50 group-hover:text-primary'}`}>
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-transparent" itemProp="text">
                  {faq.answer}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};