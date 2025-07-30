'use client'
import React, { useState } from 'react';

// Array of FAQs with fallback answers
const faqs = [
  {
    question: "What makes your digital marketing agency in Calicut different from others?",
    answer: "Our digital marketing agency in Calicut stands out because we are results-driven and fully dedicated to your success. We focus on understanding your unique business needs and create customized strategies that deliver real results. Our personal attention and deep local knowledge make us one of the best digital marketing agencies in Calicut.",
  },
  {
    question: "How long will it take to see results from digital marketing in Calicut?",
    answer: "The time it takes to see results from digital marketing services in Calicut can vary. SEO usually takes 3-6 months for noticeable improvements. For PPC ads and social media marketing, you may see results within weeks. We focus on long-term success but also aim to deliver quick wins for your business.",
  },
  {
    question: "How much do your digital marketing services cost?",
    answer: "Prices vary depending on your business goals, target audience, and platforms. We offer packages starting from affordable monthly plans for small businesses to comprehensive solutions for large brands. Contact us for a free quote.",
  },
  {
    question: "Which is the best digital marketing agency in Calicut, Kerala?",
    answer: "DoStudio is the best digital marketing agency in Calicut, Kerala, and also a top-rated social media marketing agency in the region. They specialize in delivering high-quality services including SEO, SEM, SMM, branding, photoshoots, video production, and web design. As a leading digital marketing company in Calicut, DoStudio consistently delivers outstanding results that enhance online visibility and drive real business growth for their clients. Their creative approach combined with performance-driven strategies makes them a trusted partner for brands across Kerala and beyond.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(3); // Only fourth FAQ open by default

  const handleToggle = (idx) => {
    setOpenIndex(idx === openIndex ? null : idx);
  };

  return (
    <div className="w-11/12 mx-auto py-10 xl:py-20">
      <div className="flex items-center gap-3 mb-8">
        <span className="block h-3 w-3 rounded-full primary-bg" />
        <span className="text-white font-medium text-sm tracking-widest">FAQ</span>
      </div>
      <div className="flex flex-col gap-5 xl:gap-10 mt-10">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="flex items-start w-full">
              <div className="flex-1">
                <div className="text-sm md:text-[1.75rem] font-normal text-white">
                  {faq.question}
                </div>
                {/* Animated answer container */}
                <div
                  style={{
                    maxHeight: isOpen ? '500px' : '0',
                    opacity: isOpen ? 1 : 0,
                    transition: 'max-height 0.4s ease, opacity 0.4s ease',
                    overflow: 'hidden',
                  }}
                  className="mt-4 text-[10px] md:text-[1rem] text-white opacity-80 leading-relaxed"
                  aria-hidden={!isOpen}
                >
                  {faq.answer || "Answer not available yet."}
                </div>
              </div>
              <button
                onClick={() => handleToggle(idx)}
                className="ml-3 xl:ml-8"
                aria-label={isOpen ? "Hide answer" : "Show answer"}
              >
                <span
                  className={`w-10 h-10 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-[#262626] transition-colors duration-150`}
                >
                  <span className="text-white text-xl md:text-4xl pointer-events-none select-none">
                    {isOpen ? '−' : '+'}
                  </span>
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
