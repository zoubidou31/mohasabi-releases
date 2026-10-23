import { useLanguage } from '../i18n/LanguageContext';

const trustItems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    titleKey: 'trust.offline' as const,
    descKey: 'trust.offlineDesc' as const,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    titleKey: 'trust.localData' as const,
    descKey: 'trust.localDataDesc' as const,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    titleKey: 'trust.license' as const,
    descKey: 'trust.licenseDesc' as const,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    titleKey: 'trust.updates' as const,
    descKey: 'trust.updatesDesc' as const,
  },
] as const;

export const TrustHighlights: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="trust"
      className="py-16 md:py-24 bg-white border-y border-neutral-200"
      aria-labelledby="trust-title"
    >
      <div className="container mx-auto px-4 md:px-6">
        <header className="text-center mb-12 md:mb-16">
          <h2 id="trust-title" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            {t('trust.title')}
          </h2>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {trustItems.map((item, index) => (
            <article
              key={index}
              className="group p-6 bg-white rounded-xl border border-neutral-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary-light text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                {t(item.titleKey)}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {t(item.descKey)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};