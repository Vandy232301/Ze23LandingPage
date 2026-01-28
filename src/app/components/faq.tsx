import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "@/app/contexts/TranslationContext";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.05] last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group transition-all duration-300"
      >
        <span className="text-[13px] md:text-[14px] text-white font-medium group-hover:text-white/80 transition-colors pr-8 leading-tight tracking-tight">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-3.5 h-3.5 text-white/70" strokeWidth={2.5} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-12 text-white/50 leading-relaxed text-[12px] font-light max-w-3xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ = () => {
  const { t } = useTranslation();
  const faqData = [
    {
      question: t("faq.whatMakesDifferent"),
      answer: t("faq.whatMakesDifferentAnswer")
    },
    {
      question: t("faq.howEarnTokens"),
      answer: t("faq.howEarnTokensAnswer")
    },
    {
      question: t("faq.whatMakesSecure"),
      answer: t("faq.whatMakesSecureAnswer")
    },
    {
      question: t("faq.whatAreCreatorTokens"),
      answer: t("faq.whatAreCreatorTokensAnswer")
    },
    {
      question: t("faq.needToInvest"),
      answer: t("faq.needToInvestAnswer")
    },
    {
      question: t("faq.canAdvertise"),
      answer: t("faq.canAdvertiseAnswer")
    },
    {
      question: t("faq.availablePlatforms"),
      answer: t("faq.availablePlatformsAnswer")
    }
  ];

  return (
    <section id="faq" className="pt-32 pb-32 px-6 relative bg-black overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-light tracking-tighter text-white mb-6 leading-tight"
          >
            {t("faq.title")} <span className="font-normal italic bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">{t("faq.titleItalic")}</span>
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#050505] border border-white/[0.05] rounded-[32px] px-8 py-4 md:px-12 md:py-8"
        >
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
