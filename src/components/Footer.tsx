import { useLanguage } from '../i18n/LanguageContext';
import { siteConfig } from '../config/siteConfig';

export const Footer: React.FC = () => {
  const { t, locale, setLocale, availableLocales, localeNames } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white" role="contentinfo">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-4" aria-label={`${siteConfig.app.name} - Home`}>
              <img src={siteConfig.assets.logo} alt="" className="h-8 w-auto" aria-hidden="true" />
              <span className="font-bold text-xl">{siteConfig.app.name}</span>
            </a>
            <p className="text-neutral-400 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          <nav aria-labelledby="footer-nav-title" className="lg:col-span-1">
            <h3 id="footer-nav-title" className="font-semibold mb-4">الصفحات</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-neutral-400 hover:text-white transition-colors text-sm">{t('footer.links.home')}</a></li>
              <li><a href="#features" className="text-neutral-400 hover:text-white transition-colors text-sm">{t('footer.links.features')}</a></li>
              <li><a href="#screenshots" className="text-neutral-400 hover:text-white transition-colors text-sm">{t('footer.links.screenshots')}</a></li>
              <li><a href="#requirements" className="text-neutral-400 hover:text-white transition-colors text-sm">{t('footer.links.requirements')}</a></li>
              <li><a href="#faq" className="text-neutral-400 hover:text-white transition-colors text-sm">{t('footer.links.faq')}</a></li>
            </ul>
          </nav>

          <nav aria-labelledby="footer-resources-title" className="lg:col-span-1">
            <h3 id="footer-resources-title" className="font-semibold mb-4">الموارد</h3>
            <ul className="space-y-3">
              <li>
                <a href={siteConfig.github.releasesUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors text-sm flex items-center gap-2">
                  {t('footer.links.releases')}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
              <li>
                <a href={siteConfig.github.releasesUrl.replace('/releases', '')} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors text-sm flex items-center gap-2">
                  {t('footer.links.repository')}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
              <li>
                <a href={siteConfig.contact.issuesUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors text-sm flex items-center gap-2">
                  {t('footer.links.privacy')}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>

          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-4">اللغة</h3>
            <div className="flex flex-wrap gap-2">
              {availableLocales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => setLocale(loc)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    locale === loc
                      ? 'bg-primary text-white'
                      : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white'
                  }`}
                  aria-pressed={locale === loc}
                >
                  {localeNames[loc]}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm">
            &copy; {currentYear} {siteConfig.app.name}. {t('footer.copyright')}
          </p>

          <div className="flex items-center gap-6">
            <a href={siteConfig.github.releasesUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors" aria-label="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};