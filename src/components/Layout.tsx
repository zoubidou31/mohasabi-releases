import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout: React.FC = () => {
  const { t } = useLanguage();
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        const headerHeight = document.querySelector('header')?.offsetHeight || 72;
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - headerHeight,
          behavior: reduceMotion ? 'auto' : 'smooth',
        });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <div className="min-h-screen bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:start-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:outline-2 focus:outline-offset-2 focus:outline-primary"
      >
        {t('a11y.skipToContent')}
      </a>
      <Header />
      <main id="main-content" className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
