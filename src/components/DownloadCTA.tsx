import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { siteConfig } from '../config/siteConfig';
import { Download, ArrowRight } from 'lucide-react';

export const DownloadCTA: React.FC = () => {
  const { t } = useLanguage();

  const handleDownloadClick = () => {
    window.open(siteConfig.download.directUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="download-cta"
      className="py-16 md:py-20 bg-primary text-white"
      aria-labelledby="cta-title"
    >
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.h2
          id="cta-title"
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t('cta.title')}
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-primary-light mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {t('cta.subtitle')}
        </motion.p>

        <motion.button
          onClick={handleDownloadClick}
          className="inline-flex items-center justify-center gap-3 bg-white text-primary font-semibold px-10 py-4 rounded-xl hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary transition-all duration-200 shadow-xl min-w-[280px]"
          aria-label={t('cta.downloadBtn')}
          whileHover={{ scale: 1.02, boxShadow: '0 20px 40px -10px rgb(0 0 0 / 0.3)' }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Download className="w-6 h-6" aria-hidden="true" />
          {t('cta.downloadBtn')}
          <motion.span className="group-hover:translate-x-1 transition-transform">
            <ArrowRight className="w-6 h-6" aria-hidden="true" />
          </motion.span>
        </motion.button>

        <motion.p
          className="mt-6 text-primary-light text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {t('cta.note')}
        </motion.p>
      </div>
    </section>
  );
};