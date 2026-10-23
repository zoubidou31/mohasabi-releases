import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { siteConfig } from '../config/siteConfig';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqItems = [
  { qKey: 'faq.offline.q' as const, aKey: 'faq.offline.a' as const },
  { qKey: 'faq.latest.q' as const, aKey: 'faq.latest.a' as const },
  { qKey: 'faq.data.q' as const, aKey: 'faq.data.a' as const },
  { qKey: 'faq.support.q' as const, aKey: 'faq.support.a' as const },
] as const;

export const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-16 md:py-24 bg-neutral-50"
      aria-labelledby="faq-title"
    >
      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.header
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <HelpCircle className="w-4 h-4" aria-hidden="true" />
            <span>{t('faq.badge')}</span>
          </motion.span>
          <motion.h2
            id="faq-title"
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 leading-tight"
          >
            {t('faq.title')}
          </motion.h2>
          <motion.p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {t('faq.intro')}
          </motion.p>
        </motion.header>

        <motion.div
          className="max-w-3xl mx-auto space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-start focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <motion.h3 className="text-lg font-semibold text-neutral-900 pe-4 flex-1">
                  {t(item.qKey)}
                </motion.h3>
                <motion.div
                  className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-100 text-neutral-500 transition-all duration-300 group-hover:bg-primary/10 group-hover:text-primary"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <ChevronDown className="w-5 h-5" aria-hidden="true" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    className="px-6 pb-6"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <motion.div
                      className="pt-4 border-t border-neutral-100"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                    >
                      <motion.p className="text-neutral-600 leading-relaxed">
                        {t(item.aKey)}
                      </motion.p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.p className="text-neutral-600 mb-4">
            {t('faq.moreHelp')}
          </motion.p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/support"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <HelpCircle className="w-5 h-5" aria-hidden="true" />
              {t('nav.support')}
            </Link>
            <a
              href={siteConfig.contact.issuesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-300 text-neutral-700 font-medium rounded-xl hover:bg-neutral-50 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {t('faq.openTicket')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};