import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { siteConfig } from '../config/siteConfig';
import { Download, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const handleDownloadClick = () => {
    window.open(siteConfig.download.directUrl, '_blank', 'noopener,noreferrer');
  };

  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      const header = document.querySelector('header');
      const headerHeight = header?.offsetHeight || 72;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20 overflow-hidden bg-gradient-to-b from-neutral-50 to-white"
      aria-labelledby="hero-title"
    >
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-primary/10 via-transparent to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-12 md:py-20">
        <motion.div
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className="text-center lg:text-start order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.span
                className="w-2 h-2 bg-primary rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              {t('hero.version')}: {siteConfig.app.version}
            </motion.div>

            <motion.h1
              id="hero-title"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6 text-balance"
            >
              {t('hero.title').split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.05, duration: 0.5 }}
                >
                  {word} {' '}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <motion.button
                onClick={handleDownloadClick}
                className="group flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold px-8 py-4 rounded-xl hover:from-primary-dark hover:to-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 shadow-xl shadow-primary/30 min-w-[220px]"
                aria-label={t('hero.downloadBtn')}
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px -10px rgb(27 94 32 / 0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-5 h-5" aria-hidden="true" />
                {t('hero.downloadBtn')}
                <motion.span className="group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </motion.span>
              </motion.button>
              <motion.button
                onClick={scrollToFeatures}
                className="flex items-center justify-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-xl border-2 border-primary hover:bg-primary-light hover:border-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 min-w-[220px]"
                aria-label={t('hero.featuresBtn')}
                whileHover={{ scale: 1.02, borderColor: 'var(--color-primary-dark)' }}
                whileTap={{ scale: 0.98 }}
              >
                {t('hero.featuresBtn')}
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative max-w-xl mx-auto">
              <motion.div
                className="relative bg-white rounded-2xl shadow-2xl shadow-neutral-900/10 border border-neutral-200/50 overflow-hidden aspect-[4/3] max-w-xl mx-auto"
                whileHover={{ y: -8, boxShadow: '0 30px 60px -10px rgb(27 94 32 / 0.2)' }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" aria-hidden="true" />
                <img
                  src={siteConfig.assets.heroScreenshot}
                  alt={t('screenshots.alt.main')}
                  className="w-full h-full object-cover relative z-10"
                  loading="eager"
                  width={1000}
                  height={750}
                />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" aria-hidden="true" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <motion.button
          className="p-3 bg-white/80 backdrop-blur-sm rounded-full text-neutral-500 hover:text-primary hover:bg-white transition-all duration-300 shadow-lg"
          onClick={scrollToFeatures}
          aria-label="Scroll down"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.button>
      </motion.div>
    </section>
  );
};