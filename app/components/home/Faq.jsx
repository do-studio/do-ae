"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Array of FAQs with fallback answers
const faqs = [
  {
    question: `What services does a digital marketing agency in Dubai typically offer?`,
    answer: `A digital marketing agency in Dubai provides a range of services including SEO, social
media marketing, PPC advertising, web design, content marketing, and branding to help
businesses grow online.`,
  },
  {
    question: `Why should I hire a local digital marketing agency in Dubai?`,
    answer: `Hiring a Dubai-based digital marketing agency ensures you get market-specific insights,
local audience targeting, and compliance with regional regulations, giving your
campaigns a competitive edge.`,
  },
  {
    question: `How can SEO services benefit my Dubai business?`,
    answer: `SEO services improve your website’s visibility on search engines like Google, driving
organic traffic from potential customers in Dubai and the UAE, which increases leads
and sales.`,
  },
  {
    question: `What social media platforms are popular for marketing in Dubai?`,
    answer: `Popular platforms in Dubai include Instagram, Facebook, LinkedIn, and TikTok. A social
media marketing agency in Dubai can help tailor your content and ads to engage the
local audience effectively.`,
  },
  {
    question: `How long does it take to see results from digital marketing campaigns?`,
    answer: `Results vary based on the service and industry, but SEO can take 3-6 months, while
PPC and social media ads can deliver quicker results. A reliable agency will provide
clear timelines and regular performance reports.`,
  },
  {
    question: `Do you offer customized digital marketing strategies for businesses in Dubai?`,
    answer: `Yes, every business is unique. Our digital marketing agency in Dubai creates tailored
strategies aligned with your goals, target audience, and budget to maximize ROI.`,
  },
  {
    question: `How much does digital marketing cost in Dubai?`,
    answer: `Costs vary depending on the scope of services and campaign size. Many Dubai
agencies offer flexible packages to suit startups, SMEs, and large enterprises. Contact
us for a custom quote.`,
  },
  {
    question: `Can your agency help with multilingual digital marketing in Dubai?`,
    answer: `Absolutely! We offer bilingual digital marketing strategies in English and Arabic to
effectively reach Dubai’s diverse population.`,
  },
  {
    question: `How do you measure the success of digital marketing campaigns?`,
    answer: `We use analytics tools to track key metrics like traffic, engagement, leads, and
conversions. Transparent reporting helps clients understand ROI and optimize
campaigns continuously.`,
  },
  {
    question: `What makes Do Studio a top digital marketing agency in Dubai?`,
    answer: `Do Studio combines local market expertise with global best practices, certified
professionals, and a focus on data-driven results to deliver exceptional digital growth for
Dubai businesses.`,
  },
];

const INITIAL_FAQS = 5;

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(3);
  const [showAll, setShowAll] = useState(false);

  const displayFaqs = showAll ? faqs : faqs.slice(0, INITIAL_FAQS);

  const handleToggle = (idx) => {
    setOpenIndex(idx === openIndex ? null : idx);
  };

  return (
    <div className="w-11/12 mx-auto py-10 xl:pt-20">
      <div className="flex items-center gap-3 mb-8">
        <span className="block h-3 w-3 rounded-full primary-bg" />
        <span className="text-white font-medium text-sm tracking-widest">FAQ</span>
      </div>

      {/* Animate the FAQ list container */}
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-5 xl:gap-10 mt-10"
      >
        <AnimatePresence>
          {displayFaqs.map((faq, idx) => {
            const realIdx = showAll ? idx : idx;
            const isOpen = openIndex === (showAll ? realIdx : idx);
            return (
              <motion.div
                layout
                key={realIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="flex items-start w-full"
              >
                <div className="flex-1">
                  <div className="text-sm md:text-[1.75rem] font-normal text-white">{faq.question}</div>
                  <motion.div
                    initial={{ opacity: 0, maxHeight: 0 }}
                    animate={{
                      opacity: isOpen ? 1 : 0,
                      maxHeight: isOpen ? 500 : 0, // Adjust 500 if needed depending on content size
                    }}
                    transition={{ duration: 0.1, ease: "easeInOut" }}
                    className="mt-4 text-[10px] md:text-[1rem] text-white opacity-80 leading-relaxed overflow-hidden"
                    aria-hidden={!isOpen}
                  >
                    {faq.answer || "Answer not available yet."}
                  </motion.div>
                </div>
                <button
                  onClick={() => handleToggle(showAll ? idx : idx)}
                  className="ml-3 xl:ml-8"
                  aria-label={isOpen ? "Hide answer" : "Show answer"}
                >
                  <span className="w-10 h-10 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-[#262626] transition-colors duration-150">
                    <span className="text-white text-xl md:text-4xl pointer-events-none select-none">{isOpen ? "−" : "+"}</span>
                  </span>
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {faqs.length > INITIAL_FAQS && (
        <div className="flex justify-start mt-5">
          <button className="capitalize text-white font-semibold" onClick={() => setShowAll(!showAll)}>
            {!showAll ? "Show more" : ""}
          </button>
        </div>
      )}
    </div>
  );
};

export default Faq;
