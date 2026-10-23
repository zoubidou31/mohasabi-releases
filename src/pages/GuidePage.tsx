import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ClipboardList, Database, Download, FileText, LayoutDashboard, LifeBuoy, MonitorPlay, Rocket, WifiOff } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { usePageTitle } from '../i18n/usePageTitle';
import { PageHeader } from '../components/PageHeader';
import { TutorialVideo } from '../components/TutorialVideo';
import { SystemRequirements } from '../components/SystemRequirements';
import { getDownloadState, siteConfig } from '../config/siteConfig';
import type { TranslationKey } from '../i18n/translations';

const steps = [
  { icon: Download, titleKey: 'guide.step1.title', descKey: 'guide.step1.desc' },
  { icon: MonitorPlay, titleKey: 'guide.step2.title', descKey: 'guide.step2.desc' },
  { icon: Rocket, titleKey: 'guide.step3.title', descKey: 'guide.step3.desc' },
  { icon: ClipboardList, titleKey: 'guide.step4.title', descKey: 'guide.step4.desc' },
] as const satisfies ReadonlyArray<{
  icon: React.ComponentType<{ className?: string }>;
  titleKey: TranslationKey;
  descKey: TranslationKey;
}>;

const coreFunctions = [
  { icon: WifiOff, titleKey: 'features.offline.title' },
  { icon: FileText, titleKey: 'features.invoices.title' },
  { icon: Database, titleKey: 'features.localData.title' },
  { icon: LayoutDashboard, titleKey: 'features.ui.title' },
] as const satisfies ReadonlyArray<{
  icon: React.ComponentType<{ className?: string }>;
  titleKey: TranslationKey;
}>;

export const GuidePage: React.FC = () => {
  const { t } = useLanguage();
  usePageTitle('seo.page.guide');
  const download = getDownloadState();
  const isReady = download.status === 'ready';

  return (
    <>
      <PageHeader
        badge={t('guide.badge')}
        title={t('guide.title')}
        subtitle={t('guide.subtitle')}
        titleId="guide-title"
      />

      <TutorialVideo />

      <section className="py-14 md:py-20 bg-primary-light" aria-labelledby="guide-steps-title">
        <div className="container mx-auto px-4 md:px-6">
          <h2 id="guide-steps-title" className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
            {t('guide.stepsTitle')}
          </h2>
          <p className="text-neutral-600 mb-10 max-w-2xl">{t('guide.stepNote')}</p>

          <motion.ol
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            {steps.map((step, index) => (
              <li
                key={step.titleKey}
                className="relative bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="absolute top-6 end-6 text-sm font-mono text-neutral-400">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary mb-4">
                  <step.icon className="w-5 h-5" aria-hidden="true" />
                </span>
                <h3 className="font-semibold text-neutral-900 mb-2">{t(step.titleKey)}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{t(step.descKey)}</p>
              </li>
            ))}
          </motion.ol>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => isReady && window.open(download.url, '_blank', 'noopener,noreferrer')}
              disabled={!isReady}
              className="inline-flex items-center gap-2 bg-primary text-white font-medium px-6 py-3 rounded-xl hover:bg-primary-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Download className="w-5 h-5" aria-hidden="true" />
              {t(isReady ? 'hero.downloadBtn' : 'hero.downloadPendingBtn')}
            </button>
            <span className="text-sm text-neutral-600">
              {siteConfig.release.version} · {siteConfig.release.setupAssetName}
            </span>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white border-b border-neutral-200" aria-labelledby="guide-functions-title">
        <div className="container mx-auto px-4 md:px-6">
          <h2 id="guide-functions-title" className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
            {t('guide.functionsTitle')}
          </h2>
          <p className="text-neutral-600 mb-8 max-w-2xl">{t('guide.functionsIntro')}</p>

          <ul className="grid sm:grid-cols-2 gap-4 max-w-3xl">
            {coreFunctions.map((fn) => (
              <li
                key={fn.titleKey}
                className="flex items-start gap-3 rounded-xl border border-neutral-200 bg-neutral-50 px-5 py-4"
              >
                <fn.icon className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" aria-hidden="true" />
                <span className="font-medium text-neutral-800">{t(fn.titleKey)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SystemRequirements />

      <section className="py-14 md:py-20 bg-neutral-900 text-white" aria-labelledby="guide-help-title">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 id="guide-help-title" className="text-2xl md:text-3xl font-bold mb-3">
            {t('guide.helpTitle')}
          </h2>
          <p className="text-neutral-300 mb-8 max-w-xl mx-auto">{t('guide.helpBody')}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/support"
              className="inline-flex items-center gap-2 bg-white text-neutral-900 font-medium px-6 py-3 rounded-xl hover:bg-neutral-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <LifeBuoy className="w-5 h-5" aria-hidden="true" />
              {t('guide.supportCta')}
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 border border-white/40 font-medium px-6 py-3 rounded-xl hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {t('guide.pricingCta')}
              <ArrowLeft className="w-5 h-5 rtl:rotate-180" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
