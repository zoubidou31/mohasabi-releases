import { useLanguage } from '../i18n/LanguageContext';

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    titleKey: 'features.offline.title' as const,
    descKey: 'features.offline.desc' as const,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    titleKey: 'features.invoices.title' as const,
    descKey: 'features.invoices.desc' as const,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    ),
    titleKey: 'features.localData.title' as const,
    descKey: 'features.localData.desc' as const,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    titleKey: 'features.license.title' as const,
    descKey: 'features.license.desc' as const,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    titleKey: 'features.updates.title' as const,
    descKey: 'features.updates.desc' as const,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    titleKey: 'features.ui.title' as const,
    descKey: 'features.ui.desc' as const,
  },
] as const;

export const Features: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="features"
      className="py-16 md:py-24 bg-neutral-50"
      aria-labelledby="features-title"
    >
      <div className="container mx-auto px-4 md:px-6">
        <header className="text-center mb-12 md:mb-16">
          <h2 id="features-title" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            {t('features.title')}
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <article
              key={index}
              className="group p-6 md:p-8 bg-white rounded-xl border border-neutral-200 hover:border-primary/50 hover:shadow-xl transition-all duration-300 h-full"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-light text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                {t(feature.titleKey)}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {t(feature.descKey)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};