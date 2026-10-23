import { useLanguage } from '../i18n/LanguageContext';
import { siteConfig } from '../config/siteConfig';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const handleDownloadClick = () => {
    const downloadUrl = siteConfig.download.directUrl;
    window.open(downloadUrl, '_blank', 'noopener,noreferrer');
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
      className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20 overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 bg-primary-light/50" aria-hidden="true" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="text-center lg:text-start order-2 lg:order-1">
            <h1
              id="hero-title"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6"
            >
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <button
                onClick={handleDownloadClick}
                className="group flex items-center justify-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 shadow-lg shadow-primary/30 min-w-[200px]"
                aria-label={t('hero.downloadBtn')}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {t('hero.downloadBtn')}
              </button>
              <button
                onClick={scrollToFeatures}
                className="flex items-center justify-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-lg border-2 border-primary hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 min-w-[200px]"
                aria-label={t('hero.featuresBtn')}
              >
                {t('hero.featuresBtn')}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 text-sm text-neutral-500 max-w-2xl mx-auto lg:mx-0">
              <div className="flex flex-col items-center gap-1 p-3 bg-white/50 rounded-lg border border-neutral-200">
                <span className="font-medium text-neutral-700">{t('hero.version')}</span>
                <span className="font-mono text-primary">—</span>
              </div>
              <div className="flex flex-col items-center gap-1 p-3 bg-white/50 rounded-lg border border-neutral-200">
                <span className="font-medium text-neutral-700">{t('hero.size')}</span>
                <span className="font-mono text-primary">—</span>
              </div>
              <div className="flex flex-col items-center gap-1 p-3 bg-white/50 rounded-lg border border-neutral-200">
                <span className="font-medium text-neutral-700">{t('hero.date')}</span>
                <span className="font-mono text-primary">—</span>
              </div>
              <div className="flex flex-col items-center gap-1 p-3 bg-white/50 rounded-lg border border-neutral-200">
                <span className="font-medium text-neutral-700">{t('hero.os')}</span>
                <span className="font-mono text-primary">Windows 10/11</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative max-w-md mx-auto">
              <div className="relative bg-white rounded-2xl shadow-2xl shadow-neutral-900/10 border border-neutral-200 overflow-hidden aspect-[4/3] max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" aria-hidden="true" />
                <img
                  src={siteConfig.assets.heroScreenshot}
                  alt={t('screenshots.alt.main')}
                  className="w-full h-full object-cover"
                  loading="eager"
                  width={800}
                  height={600}
                />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" aria-hidden="true" />
              </div>
              <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 w-24 h-24 md:w-32 md:h-32 bg-primary rounded-full opacity-10 blur-3xl" aria-hidden="true" />
              <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-20 h-20 md:w-28 md:h-28 bg-primary/20 rounded-full blur-3xl" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg className="w-6 h-6 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};