import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { getDownloadState, siteConfig } from '../config/siteConfig';
import { Download, BookOpenText } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const download = getDownloadState();
  const isReady = download.status === 'ready';

  const handleDownloadClick = () => {
    if (!isReady) return;
    window.open(download.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20 overflow-hidden bg-gradient-to-b from-primary-light to-white"
      aria-labelledby="hero-title"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10 py-12 md:py-20">
        <motion.div
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="text-center lg:text-start order-2 lg:order-1">
            <p className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              {t('hero.version')} {download.version} · {t('hero.windowsOnly')}
            </p>

            <h1
              id="hero-title"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6 text-balance"
            >
              {t('hero.title')}
            </h1>

            <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-4">
              <button
                type="button"
                onClick={handleDownloadClick}
                disabled={!isReady}
                aria-describedby="download-status-note"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold px-8 py-4 rounded-xl hover:from-primary-dark hover:to-primary focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 transition-all duration-200 shadow-xl shadow-primary/30 min-w-[220px] disabled:opacity-60 disabled:cursor-not-allowed disabled:shadow-none"
              >
                <Download className="w-5 h-5" aria-hidden="true" />
                {t(isReady ? 'hero.downloadBtn' : 'hero.downloadPendingBtn')}
              </button>
              <Link
                to="/guide"
                className="flex items-center justify-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-xl border-2 border-primary hover:bg-primary-light focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 transition-all duration-200 min-w-[220px]"
              >
                <BookOpenText className="w-5 h-5" aria-hidden="true" />
                {t('hero.guideBtn')}
              </Link>
            </div>

            <p id="download-status-note" className="text-sm text-neutral-500 mb-8 max-w-xl mx-auto lg:mx-0">
              {isReady ? (
                t('cta.note')
              ) : (
                <>
                  {t('hero.pendingNote')}{' '}
                  <a
                    href={download.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:underline focus-visible:outline-2 focus-visible:outline-primary rounded"
                  >
                    {t('hero.releasesLink')}
                  </a>
                </>
              )}
            </p>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div
              className="absolute -inset-6 md:-inset-10 bg-[radial-gradient(circle_at_60%_40%,var(--color-primary)_0%,transparent_65%)] opacity-[0.07]"
              aria-hidden="true"
            />
            <motion.div
              className="absolute inset-x-6 top-4 bottom-0 bg-white/70 border border-primary/15 rounded-3xl shadow-sm"
              style={{ rotate: -2.5 }}
              initial={{ opacity: 0, y: 30, rotate: -5 }}
              animate={{ opacity: 1, y: 0, rotate: -2.5 }}
              transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
              aria-hidden="true"
            />
            <figure className="relative max-w-xl mx-auto">
              <motion.div
                className="relative bg-white rounded-2xl shadow-xl shadow-neutral-900/10 border border-neutral-200/60 overflow-hidden aspect-[4/3]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              >
                <img
                  src={siteConfig.assets.heroScreenshot}
                  alt={t('hero.illustrationAlt')}
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                  width={800}
                  height={600}
                />
              </motion.div>
              <figcaption className="mt-3 text-center text-sm text-neutral-500">
                {t('hero.illustrationCaption')}
              </figcaption>
            </figure>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
