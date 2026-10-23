import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { getDownloadState } from '../config/siteConfig';
import { Download, HardDrive, Rocket } from 'lucide-react';
import type { TranslationKey } from '../i18n/translations';

const steps = [
  { icon: Download, titleKey: 'how.step1.title', descKey: 'how.step1.desc', ctaKey: 'how.step1.cta' },
  { icon: HardDrive, titleKey: 'how.step2.title', descKey: 'how.step2.desc', ctaKey: 'how.step2.cta' },
  { icon: Rocket, titleKey: 'how.step3.title', descKey: 'how.step3.desc', ctaKey: 'how.step3.cta' },
] as const satisfies ReadonlyArray<{
  icon: React.ComponentType<{ className?: string }>;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  ctaKey: TranslationKey;
}>;

export const HowItWorks: React.FC = () => {
  const { t } = useLanguage();
  const download = getDownloadState();
  const isReady = download.status === 'ready';

  const handleDownload = () => {
    if (!isReady) return;
    window.open(download.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white" aria-labelledby="how-title">
      <div className="container mx-auto px-4 md:px-6">
        <header className="text-center mb-12">
          <h2
            id="how-title"
            className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight text-balance"
          >
            {t('how.title')}
          </h2>
        </header>

        <ol className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.li
              key={step.titleKey}
              className="relative rounded-2xl border border-neutral-200 p-6 md:p-7 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary text-white text-sm font-bold tabular-nums">
                  {index + 1}
                </span>
                <step.icon className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">{t(step.titleKey)}</h3>
              <p className="text-neutral-600 leading-relaxed mb-5 grow">{t(step.descKey)}</p>
              {index === 0 ? (
                <button
                  type="button"
                  onClick={handleDownload}
                  disabled={!isReady}
                  title={!isReady ? t('hero.pendingNote') : undefined}
                  className="self-start inline-flex items-center gap-2 text-primary font-medium hover:text-primary-dark transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  {t(isReady ? 'how.step1.cta' : 'hero.downloadPendingBtn')}
                </button>
              ) : (
                <Link
                  to="/guide"
                  className="self-start inline-flex items-center gap-2 text-primary font-medium hover:text-primary-dark transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded"
                >
                  {t(step.ctaKey)}
                </Link>
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};
