import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { siteConfig } from '../config/siteConfig';
import { Download, Menu, X } from 'lucide-react';
import { type Locale } from '../i18n/translations';

const navItems = [
  { id: 'features', key: 'nav.features' as const },
  { id: 'screenshots', key: 'nav.screenshots' as const },
  { id: 'how-it-works', key: 'nav.howItWorks' as const },
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
    window.open(siteConfig.download.directUrl, '_blank', 'noopener,noreferrer');
  };

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
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 md:h-18">
          <motion.a
            href="#home"
            className="flex items-center gap-2 text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md"
            aria-label={`${siteConfig.app.name} - Home`}
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="relative p-1.5 bg-gradient-to-br from-primary to-primary-dark rounded-xl"
              whileHover={{ rotate: 6, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={siteConfig.assets.logo}
                alt=""
                className="h-8 w-auto"
                aria-hidden="true"
              />
            </motion.div>
            <span className="font-bold text-xl text-neutral-900 hidden sm:block">
              {siteConfig.app.name}
            </span>
          </motion.a>

          <motion.div
            className="hidden md:flex items-center gap-1"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                className="relative px-4 py-2 text-sm font-medium text-neutral-600 hover:text-primary transition-colors rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05, duration: 0.4 }}
                whileHover={{ y: -2 }}
              >
                {t(item.key)}
                <motion.span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-primary rounded-full"
                  animate={{ width: '60%' }}
                  initial={{ width: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <motion.div
              className="hidden md:flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
            >
              <label htmlFor="language-select" className="sr-only">
                {t('language.ar')}
              </label>
              <select
                id="language-select"
                value={locale}
                onChange={(e) => setLocale(e.target.value as Locale)}
                className="text-sm text-neutral-700 bg-white/80 border border-neutral-300/50 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary appearance-none cursor-pointer backdrop-blur-sm"
                aria-label="Select language"
              >
                {availableLocales.map((loc) => (
                  <option key={loc} value={loc}>
                    {localeNames[loc]}
                  </option>
                ))}
              </select>
            </motion.div>

            <motion.button
              onClick={handleDownloadClick}
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white font-medium px-5 py-2.5 rounded-lg hover:from-primary-dark hover:to-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 shadow-lg shadow-primary/30"
              aria-label={t('nav.download')}
              whileHover={{ scale: 1.02, boxShadow: '0 10px 25px -5px rgb(27 94 32 / 0.4)' }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              {t('nav.download')}
            </motion.button>

            <motion.button
              type="button"
              className="md:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </motion.div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              className="md:hidden overflow-hidden"
              role="navigation"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <motion.div
                className="flex flex-col gap-2 pt-4 border-t border-neutral-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ staggerChildren: 0.05 }}
              >
                {navItems.map((item) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    className="px-3 py-2.5 text-base font-medium text-neutral-700 hover:text-primary hover:bg-primary-light rounded-lg transition-colors"
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                  >
                    {t(item.key)}
                  </motion.a>
                ))}
                <motion.div className="flex items-center gap-3 px-3 py-2">
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
                </motion.div>
                <motion.button
                  onClick={handleDownloadClick}
                  className="mx-3 mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white font-medium px-5 py-3 rounded-lg hover:from-primary-dark hover:to-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 shadow-lg shadow-primary/30"
                  aria-label={t('nav.download')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-5 h-5" aria-hidden="true" />
                  {t('nav.download')}
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};