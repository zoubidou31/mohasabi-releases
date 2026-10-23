import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { getDownloadState, siteConfig } from '../config/siteConfig';
import { Download } from 'lucide-react';

export const DownloadCTA: React.FC = () => {
  const { t } = useLanguage();
  const download = getDownloadState();
  const isReady = download.status === 'ready';

  const handleDownloadClick = () => {
    if (!isReady) return;
    window.open(download.url, '_blank', 'noopener,noreferrer');
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          {t('cta.title')}
        </motion.h2>
        <motion.p
          className="text-lg text-primary-light mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          {t('cta.subtitle')}
        </motion.p>

        <button
          type="button"
          onClick={handleDownloadClick}
          disabled={!isReady}
          aria-describedby="cta-status-note"
          className="inline-flex items-center justify-center gap-3 bg-white text-primary font-semibold px-10 py-4 rounded-xl hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2  transition-all duration-200 shadow-xl min-w-[280px] disabled:opacity-60 disabled:cursor-not-allowed disabled:shadow-none"
        >
          <Download className="w-6 h-6" aria-hidden="true" />
          {t(isReady ? 'cta.downloadBtn' : 'hero.downloadPendingBtn')}
        </button>

        <p className="mt-5 text-sm text-primary-light/90 tabular-nums">
          {siteConfig.release.version} · {siteConfig.systemRequirements.os} ·{' '}
          {siteConfig.release.setupAssetName}
        </p>

        <p id="cta-status-note" className="mt-3 text-primary-light text-sm">
          {isReady ? (
            <>
              {t('cta.note')}{' '}
              <Link
                to="/guide"
                className="underline font-medium focus-visible:outline-2 focus-visible:outline-white rounded"
              >
                {t('nav.guide')}
              </Link>
            </>
          ) : (
            <>
              {t('hero.pendingNote')}{' '}
              <a
                href={download.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium focus-visible:outline-2 focus-visible:outline-white rounded"
              >
                {t('hero.releasesLink')}
              </a>
            </>
          )}
        </p>
      </div>
    </section>
  );
};
