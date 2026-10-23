import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const faqItems = [
  { qKey: 'faq.offline.q' as const, aKey: 'faq.offline.a' as const },
  { qKey: 'faq.os.q' as const, aKey: 'faq.os.a' as const },
  { qKey: 'faq.latest.q' as const, aKey: 'faq.latest.a' as const },
  { qKey: 'faq.updates.q' as const, aKey: 'faq.updates.a' as const },
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
      <div className="container mx-auto px-4 md:px-6">
        <header className="text-center mb-12 md:mb-16">
          <h2 id="faq-title" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            {t('faq.title')}
          </h2>
        </header>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <details
              key={index}
              className="group bg-white rounded-xl border border-neutral-200 overflow-hidden"
              open={openIndex === index}
              onToggle={() => toggleFAQ(index)}
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset">
                <h3 className="text-lg font-semibold text-neutral-900 pr-4">
                  {t(item.qKey)}
                </h3>
                <svg
                  className="w-5 h-5 text-neutral-400 group-open:rotate-180 transition-transform duration-200 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 pt-0 animate-slide-down">
                <p className="text-neutral-600 leading-relaxed">
                  {t(item.aKey)}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};