import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { siteConfig, getDownloadState } from '../config/siteConfig';
import { Download, Menu, X } from 'lucide-react';
import { type Locale } from '../i18n/translations';
import type { TranslationKey } from '../i18n/translations';

const navItems = [
  { to: '/', key: 'nav.home', end: true },
  { to: '/guide', key: 'nav.guide', end: false },
  { to: '/pricing', key: 'nav.pricing', end: false },
  { to: '/support', key: 'nav.support', end: false },
] as const satisfies ReadonlyArray<{ to: string; key: TranslationKey; end: boolean }>;

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

  const download = getDownloadState();
  const isReady = download.status === 'ready';

  const handleDownloadClick = () => {
    if (!isReady) return;
    window.open(download.url, '_blank', 'noopener,noreferrer');
  };

  const linkClass = ({ isActive }: { isActive: boolean }): string =>
    `relative px-4 py-2 text-sm font-medium rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 ${
      isActive ? 'text-primary' : 'text-neutral-600 hover:text-primary'
    }`;

  const mobileLinkClass = ({ isActive }: { isActive: boolean }): string =>
    `block px-3 py-2.5 text-base font-medium rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 ${
      isActive ? 'text-primary bg-primary-light' : 'text-neutral-700 hover:text-primary hover:bg-primary-light'
    }`;

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-neutral-200/50'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <motion.nav
        className="container mx-auto px-4 md:px-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        aria-label={t('a11y.mainNav')}
      >
        <div className="flex items-center justify-between h-16 md:h-18">
          <Link
            to="/"
            className="flex items-center gap-2 text-primary focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded-md"
            aria-label={siteConfig.app.name}
          >
            <img
              src={siteConfig.assets.logo}
              alt=""
              className="h-9 w-9 object-contain"
              width={36}
              height={36}
              decoding="async"
              aria-hidden="true"
            />
            <span className="font-bold text-xl tracking-tight text-neutral-900">
              {siteConfig.app.name}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.05, duration: 0.35 }}
              >
                <NavLink to={item.to} end={item.end} className={linkClass}>
                  {({ isActive }) => (
                    <>
                      {t(item.key)}
                      <span
                        className={`absolute bottom-0 start-4 end-4 h-0.5 rounded-full bg-primary transition-opacity ${
                          isActive ? 'opacity-100' : 'opacity-0'
                        }`}
                        aria-hidden="true"
                      />
                    </>
                  )}
                </NavLink>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2">
              <label htmlFor="language-select" className="sr-only">
                {t('language.label')}
              </label>
              <select
                id="language-select"
                value={locale}
                onChange={(e) => setLocale(e.target.value as Locale)}
                className="text-sm text-neutral-700 bg-white/80 border border-neutral-300/50 rounded-lg px-3 py-1.5 focus:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary appearance-none cursor-pointer backdrop-blur-sm"
              >
                {availableLocales.map((loc) => (
                  <option key={loc} value={loc}>
                    {localeNames[loc]}
                  </option>
                ))}
              </select>
            </div>

            <motion.button
              onClick={handleDownloadClick}
              disabled={!isReady}
              title={!isReady ? t('hero.pendingNote') : undefined}
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white font-medium px-5 py-2.5 rounded-lg hover:from-primary-dark hover:to-primary focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 transition-all duration-200 shadow-lg shadow-primary/30 disabled:opacity-60 disabled:cursor-not-allowed disabled:shadow-none"
              aria-label={t(isReady ? 'nav.download' : 'hero.downloadPendingBtn')}
              whileHover={isReady ? { scale: 1.02 } : undefined}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              {t(isReady ? 'nav.download' : 'hero.downloadPendingBtn')}
            </motion.button>

            <button
              type="button"
              className="md:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={t('a11y.toggleMenu')}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              className="md:hidden overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <nav
                className="flex flex-col gap-1 pt-4 pb-2 border-t border-neutral-200"
                aria-label={t('a11y.mobileNav')}
              >
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.end}
                    className={mobileLinkClass}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t(item.key)}
                  </NavLink>
                ))}
                <div className="flex items-center gap-3 px-3 py-2 mt-2">
                  <label htmlFor="mobile-language-select" className="sr-only">
                    {t('language.label')}
                  </label>
                  <select
                    id="mobile-language-select"
                    value={locale}
                    onChange={(e) => setLocale(e.target.value as Locale)}
                    className="flex-1 text-sm text-neutral-700 bg-white border border-neutral-300 rounded-lg px-3 py-2 focus:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary appearance-none cursor-pointer"
                  >
                    {availableLocales.map((loc) => (
                      <option key={loc} value={loc}>
                        {localeNames[loc]}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  type="button"
                  onClick={handleDownloadClick}
                  disabled={!isReady}
                  className="mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white font-medium px-5 py-3 rounded-lg hover:from-primary-dark hover:to-primary focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  aria-label={t(isReady ? 'nav.download' : 'hero.downloadPendingBtn')}
                >
                  <Download className="w-5 h-5" aria-hidden="true" />
                  {t(isReady ? 'nav.download' : 'hero.downloadPendingBtn')}
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};
