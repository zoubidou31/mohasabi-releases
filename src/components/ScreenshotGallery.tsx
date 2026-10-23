import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { siteConfig } from '../config/siteConfig';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { TranslationKey } from '../i18n/translations';

export const ScreenshotGallery: React.FC = () => {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const screenshots = siteConfig.assets.screenshots;
  const hasRealScreenshots = screenshots.some((s) => !s.src.endsWith('.svg'));

  const closeLightbox = useCallback(() => setSelectedIndex(null), []);

  const navigate = useCallback(
    (direction: 'prev' | 'next') => {
      setSelectedIndex((current) => {
        if (current === null) return current;
        return direction === 'prev'
          ? (current - 1 + screenshots.length) % screenshots.length
          : (current + 1) % screenshots.length;
      });
    },
    [screenshots.length]
  );

  useEffect(() => {
    if (!hasRealScreenshots || selectedIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') navigate('prev');
      else if (e.key === 'ArrowRight') navigate('next');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [hasRealScreenshots, selectedIndex, closeLightbox, navigate]);

  useEffect(() => {
    if (!hasRealScreenshots || selectedIndex === null) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [hasRealScreenshots, selectedIndex]);

  if (!hasRealScreenshots) {
    return null;
  }

  const active = selectedIndex !== null ? screenshots[selectedIndex] : null;

  return (
    <section
      id="screenshots"
      className="py-16 md:py-24 bg-white"
      aria-labelledby="screenshots-title"
    >
      <div className="container mx-auto px-4 md:px-6">
        <header className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            {t('screenshots.badge')}
          </span>
          <h2
            id="screenshots-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 leading-tight"
          >
            {t('screenshots.title')}
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">{t('screenshots.subtitle')}</p>
        </header>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          {screenshots.map((screenshot, index) => (
            <article key={screenshot.src} className="group relative">
              <button
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-200 hover:shadow-xl hover:border-primary/30 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
                aria-label={t(screenshot.alt as TranslationKey)}
              >
                <div className="w-full h-full relative bg-neutral-50">
                  <img
                    src={screenshot.src}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width={1000}
                    height={750}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 flex items-end p-6"
                    aria-hidden="true"
                  >
                    <h3 className="text-lg font-semibold text-white">
                      {t(screenshot.title as TranslationKey)}
                    </h3>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity">
                    <span className="p-3 bg-white/90 rounded-xl shadow-lg">
                      <Maximize2 className="w-6 h-6 text-primary" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </button>
            </article>
          ))}
        </motion.div>

        <p className="text-center text-sm text-neutral-500 mt-10">{t('screenshots.zoomHint')}</p>
      </div>

      <AnimatePresence>
        {active && selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            role="dialog"
            aria-modal="true"
            aria-label={t(active.alt as TranslationKey)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="absolute top-6 end-6 z-10 p-2 bg-white/10 rounded-xl text-white/70 hover:text-white hover:bg-white/20 transition-colors focus-visible:outline-2 focus-visible:outline-primary"
              aria-label={t('screenshots.closeAria')}
            >
              <X className="w-6 h-6" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                navigate('prev');
              }}
              className="absolute start-6 z-10 p-3 bg-white/10 rounded-xl text-white/70 hover:text-white hover:bg-white/20 transition-colors focus-visible:outline-2 focus-visible:outline-primary"
              aria-label={t('screenshots.prevAria')}
            >
              <ChevronLeft className="w-8 h-8 rtl:rotate-180" aria-hidden="true" />
            </button>

            <div
              className="relative max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={active.src}
                alt={t(active.alt as TranslationKey)}
                className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              />
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                navigate('next');
              }}
              className="absolute end-6 z-10 p-3 bg-white/10 rounded-xl text-white/70 hover:text-white hover:bg-white/20 transition-colors focus-visible:outline-2 focus-visible:outline-primary"
              aria-label={t('screenshots.nextAria')}
            >
              <ChevronRight className="w-8 h-8 rtl:rotate-180" aria-hidden="true" />
            </button>

            <div className="absolute bottom-6 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center gap-4 bg-white/10 rounded-xl px-6 py-3">
              <span className="text-white/70 text-sm font-medium">
                {selectedIndex + 1} / {screenshots.length}
              </span>
              <span className="text-white text-sm font-medium">
                {t(active.title as TranslationKey)}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
