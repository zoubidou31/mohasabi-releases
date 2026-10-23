import { useLanguage } from '../i18n/LanguageContext';
import { siteConfig } from '../config/siteConfig';

export const DownloadCTA: React.FC = () => {
  const { t } = useLanguage();

  const handleDownloadClick = () => {
    const downloadUrl = siteConfig.download.directUrl;
    window.open(downloadUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="download-cta"
      className="py-16 md:py-24 bg-primary text-white"
      aria-labelledby="cta-title"
    >
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 id="cta-title" className="text-3xl md:text-4xl font-bold mb-4">
          {t('cta.title')}
        </h2>
        <p className="text-lg md:text-xl text-primary-light mb-8 max-w-2xl mx-auto">
          {t('cta.subtitle')}
        </p>

        <button
          onClick={handleDownloadClick}
          className="inline-flex items-center justify-center gap-3 bg-white text-primary font-semibold px-10 py-4 rounded-lg hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary transition-all duration-200 shadow-lg min-w-[280px]"
          aria-label={t('cta.downloadBtn')}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          {t('cta.downloadBtn')}
        </button>

        <p className="mt-6 text-primary-light text-sm">
          {t('cta.note')}
        </p>
      </div>
    </section>
  );
};