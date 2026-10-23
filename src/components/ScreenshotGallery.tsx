import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { siteConfig } from '../config/siteConfig';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { TranslationKey } from '../i18n/translations';

export const ScreenshotGallery: React.FC = () => {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const screenshots = siteConfig.assets.screenshots;

  // Check if screenshots are real images (not SVG placeholders)
  const hasRealScreenshots = screenshots.some(s => !s.src.endsWith('.svg'));

  if (!hasRealScreenshots) {
    return null;
  }

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = '';
  };

  const navigate = (direction: 'prev' | 'next') => {
    if (selectedIndex === null) return;
    const newIndex = direction === 'prev' 
      ? (selectedIndex - 1 + screenshots.length) % screenshots.length
      : (selectedIndex + 1) % screenshots.length;
    setSelectedIndex(newIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') navigate('prev');
      else if (e.key === 'ArrowRight') navigate('next');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <section
      id="screenshots"
      className="py-16 md:py-24 bg-white relative overflow-hidden"
      aria-labelledby="screenshots-title"
    >
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-primary/5 via-transparent to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.header
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.span
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            Galerie
          </motion.span>
          <motion.h2
            id="screenshots-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 leading-tight"
          >
            Découvrez l'interface <span className="text-primary">Mohasabi</span>
          </motion.h2>
          <motion.p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {t('screenshots.subtitle')}
          </motion.p>
        </motion.header>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {screenshots.map((screenshot, index) => (
            <motion.article
              key={index}
              className="group relative"
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            >
              <button
                onClick={() => openLightbox(index)}
                className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-200 hover:shadow-2xl hover:border-primary/30 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label={`${t(screenshot.alt as TranslationKey)} - Cliquer pour agrandir`}
              >
                <div className="w-full h-full relative bg-neutral-50 group-hover:scale-[1.02] transition-transform duration-700">
                  <motion.img
                    src={screenshot.src}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={1000}
                    height={750}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6" aria-hidden="true">
                    <motion.div
                      className="w-full text-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                    >
                      <h3 className="text-lg font-semibold mb-1">{t(screenshot.alt as TranslationKey)}</h3>
                      <p className="text-sm opacity-80">{t(screenshot.title as TranslationKey)}</p>
                    </motion.div>
                  </div>
                </div>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                >
                  <motion.div
                    className="p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Maximize2 className="w-6 h-6 text-primary" aria-hidden="true" />
                  </motion.div>
                </motion.div>
              </button>
            </motion.article>
          ))}
        </motion.div>

        <motion.p
          className="text-center text-sm text-neutral-500 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Cliquez sur une capture pour l'agrandir • Navigation au clavier disponible
        </motion.p>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            role="dialog"
            aria-modal="true"
            aria-label={t(screenshots[selectedIndex].alt as TranslationKey)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
          >
            <motion.button
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              className="absolute top-6 right-6 z-10 p-2 bg-white/10 backdrop-blur-sm rounded-xl text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Fermer la visionneuse"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6" aria-hidden="true" />
            </motion.button>

            {selectedIndex > 0 && (
              <motion.button
                onClick={(e) => { e.stopPropagation(); navigate('prev'); }}
                className="absolute left-6 z-10 p-3 bg-white/10 backdrop-blur-sm rounded-xl text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Capture précédente"
                whileHover={{ scale: 1.1, x: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-8 h-8" aria-hidden="true" />
              </motion.button>
            )}

            <motion.div
              className="relative max-w-6xl max-h-[90vh] w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={screenshots[selectedIndex].src}
                alt={t(screenshots[selectedIndex].alt as TranslationKey)}
                className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
                loading="lazy"
              />
            </motion.div>

            {selectedIndex < screenshots.length - 1 && (
              <motion.button
                onClick={(e) => { e.stopPropagation(); navigate('next'); }}
                className="absolute right-6 z-10 p-3 bg-white/10 backdrop-blur-sm rounded-xl text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Capture suivante"
                whileHover={{ scale: 1.1, x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-8 h-8" aria-hidden="true" />
              </motion.button>
            )}

            <motion.div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <span className="text-white/70 text-sm font-medium">
                {selectedIndex + 1} / {screenshots.length}
              </span>
              <span className="text-white text-sm font-medium">
                {t(screenshots[selectedIndex].title as TranslationKey)}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};