import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { siteConfig } from '../config/siteConfig';

const screenshotData = [
  { key: 'screenshots.alt.main', index: 0 },
  { key: 'screenshots.alt.customers', index: 1 },
  { key: 'screenshots.alt.invoices', index: 2 },
  { key: 'screenshots.alt.products', index: 3 },
] as const;

export const ScreenshotGallery: React.FC = () => {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = '';
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft' && selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    } else if (e.key === 'ArrowRight' && selectedIndex !== null && selectedIndex < screenshotData.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const screenshots = siteConfig.assets.screenshots;

  if (selectedIndex !== null) {
    const current = screenshotData[selectedIndex];
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
        role="dialog"
        aria-modal="true"
        aria-label={t(current.key)}
        onClick={closeLightbox}
        onKeyDown={handleKeyDown}
      >
        <button
          onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
          className="absolute top-4 right-4 z-10 p-2 text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
          aria-label="Close lightbox"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {selectedIndex > 0 && (
          <button
            onClick={(e) => { e.stopPropagation(); setSelectedIndex(selectedIndex - 1); }}
            className="absolute left-4 z-10 p-2 text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
            aria-label="Previous screenshot"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        <div className="relative max-w-5xl max-h-[90vh] w-full">
          <img
            src={screenshots[selectedIndex]}
            alt={t(current.key)}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            loading="lazy"
          />
        </div>

        {selectedIndex < screenshotData.length - 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); setSelectedIndex(selectedIndex + 1); }}
            className="absolute right-4 z-10 p-2 text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
            aria-label="Next screenshot"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    );
  }

  return (
    <section
      id="screenshots"
      className="py-16 md:py-24 bg-white"
      aria-labelledby="screenshots-title"
    >
      <div className="container mx-auto px-4 md:px-6">
        <header className="text-center mb-12 md:mb-16">
          <h2 id="screenshots-title" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            {t('screenshots.title')}
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {t('screenshots.subtitle')}
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {screenshotData.map((item, index) => (
            <article key={index} className="group relative">
              <button
                onClick={() => openLightbox(index)}
                className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-neutral-200 hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label={t(item.key)}
              >
                <div className="w-full h-full relative bg-neutral-100">
                  <img
                    src={screenshots[index]}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4" aria-hidden="true">
                    <span className="text-white font-medium text-sm w-full text-center">
                      {t(item.key)}
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true">
                  <svg className="w-10 h-10 text-white bg-black/50 rounded-full p-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </button>
            </article>
          ))}
        </div>

        <p className="text-center text-sm text-neutral-500 mt-8">
          {t('screenshots.subtitle')}
        </p>
      </div>
    </section>
  );
};