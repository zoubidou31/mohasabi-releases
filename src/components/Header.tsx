import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { siteConfig } from '../config/siteConfig';
import { type Locale } from '../i18n/translations';

const navItems = [
  { id: 'home', key: 'nav.home' as const },
  { id: 'features', key: 'nav.features' as const },
  { id: 'screenshots', key: 'nav.screenshots' as const },
  { id: 'requirements', key: 'nav.requirements' as const },
  { id: 'faq', key: 'nav.faq' as const },
] as const;

export const Header: React.FC = () => {
  const { t, locale, setLocale, availableLocales, localeNames } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = headerRef.current?.offsetHeight || 72;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handleDownloadClick = () => {
    const downloadUrl = siteConfig.download.directUrl;
    window.open(downloadUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-neutral-200'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav className="container mx-auto px-4 md:px-6" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-18">
          <a
            href="#home"
            className="flex items-center gap-2 text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md"
            aria-label={`${siteConfig.app.name} - Home`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            <img
              src={siteConfig.assets.logo}
              alt=""
              className="h-8 w-auto"
              aria-hidden="true"
            />
            <span className="font-bold text-xl text-neutral-900 hidden sm:block">
              {siteConfig.app.name}
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm font-medium text-neutral-700 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {t(item.key)}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2">
              <label htmlFor="language-select" className="sr-only">
                {t('language.ar')}
              </label>
              <select
                id="language-select"
                value={locale}
                onChange={(e) => setLocale(e.target.value as Locale)}
                className="text-sm text-neutral-700 bg-white border border-neutral-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary appearance-none cursor-pointer"
                aria-label="Select language"
              >
                {availableLocales.map((loc) => (
                  <option key={loc} value={loc}>
                    {localeNames[loc]}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleDownloadClick}
              className="hidden sm:flex items-center gap-2 bg-primary text-white font-medium px-5 py-2.5 rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors shadow-sm"
              aria-label={t('nav.download')}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {t('nav.download')}
            </button>

            <button
              type="button"
              className="md:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-2 pt-4 border-t border-neutral-200">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-3 py-2.5 text-base font-medium text-neutral-700 hover:text-primary hover:bg-primary-light rounded-lg transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {t(item.key)}
              </a>
            ))}
            <div className="flex items-center gap-3 px-3 py-2">
              <label htmlFor="mobile-language-select" className="sr-only">
                {t('language.ar')}
              </label>
              <select
                id="mobile-language-select"
                value={locale}
                onChange={(e) => setLocale(e.target.value as Locale)}
                className="flex-1 text-sm text-neutral-700 bg-white border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary appearance-none cursor-pointer"
                aria-label="Select language"
              >
                {availableLocales.map((loc) => (
                  <option key={loc} value={loc}>
                    {localeNames[loc]}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={handleDownloadClick}
              className="mx-3 mt-2 flex items-center justify-center gap-2 bg-primary text-white font-medium px-5 py-3 rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors shadow-sm"
              aria-label={t('nav.download')}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {t('nav.download')}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};