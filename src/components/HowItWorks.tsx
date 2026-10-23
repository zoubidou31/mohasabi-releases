import { useLanguage } from '../i18n/LanguageContext';

const steps = [
  { number: '01', titleKey: 'howItWorks.step1.title' as const, descKey: 'howItWorks.step1.desc' as const },
  { number: '02', titleKey: 'howItWorks.step2.title' as const, descKey: 'howItWorks.step2.desc' as const },
  { number: '03', titleKey: 'howItWorks.step3.title' as const, descKey: 'howItWorks.step3.desc' as const },
] as const;

export const HowItWorks: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="how-it-works"
      className="py-16 md:py-24 bg-neutral-50"
      aria-labelledby="how-it-works-title"
    >
      <div className="container mx-auto px-4 md:px-6">
        <header className="text-center mb-12 md:mb-16">
          <h2 id="how-it-works-title" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            {t('howItWorks.title')}
          </h2>
        </header>

        <div className="relative max-w-4xl mx-auto">
          <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-primary/20" aria-hidden="true" />

          <ol className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0">
            {steps.map((step, index) => (
              <li
                key={index}
                className="relative flex flex-col items-center text-center md:w-1/3 z-10"
              >
                <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary text-white font-bold text-xl md:text-2xl mb-6 shadow-lg shadow-primary/30">
                  {step.number}
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-neutral-900 mb-3">
                  {t(step.titleKey)}
                </h3>
                <p className="text-neutral-600 leading-relaxed px-2 md:px-6">
                  {t(step.descKey)}
                </p>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-primary/20" aria-hidden="true" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};