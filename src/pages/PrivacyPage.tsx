import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, HardDrive, MessageCircle, Save, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { usePageTitle } from '../i18n/usePageTitle';
import { PageHeader } from '../components/PageHeader';
import { siteConfig } from '../config/siteConfig';
import type { TranslationKey } from '../i18n/translations';

const sections = [
  {
    icon: HardDrive,
    titleKey: 'privacy.local.title',
    bodyKey: 'privacy.local.body',
  },
  {
    icon: ShieldCheck,
    titleKey: 'privacy.site.title',
    bodyKey: 'privacy.site.body',
  },
  {
    icon: MessageCircle,
    titleKey: 'privacy.contact.title',
    bodyKey: 'privacy.contact.body',
  },
  {
    icon: Save,
    titleKey: 'privacy.backup.title',
    bodyKey: 'privacy.backup.body',
  },
] as const satisfies ReadonlyArray<{
  icon: React.ComponentType<{ className?: string }>;
  titleKey: TranslationKey;
  bodyKey: TranslationKey;
}>;

export const PrivacyPage: React.FC = () => {
  const { t } = useLanguage();
  usePageTitle('seo.page.privacy');

  return (
    <>
      <PageHeader
        badge={t('footer.links.privacy')}
        title={t('privacy.title')}
        subtitle={t('privacy.subtitle')}
        titleId="privacy-title"
        tone="light"
      />

      <section className="py-14 md:py-20 bg-neutral-50" aria-labelledby="privacy-sections-title">
        <div className="container mx-auto px-4 md:px-6">
          <h2 id="privacy-sections-title" className="sr-only">
            {t('privacy.title')}
          </h2>
          <motion.ul
            className="max-w-3xl space-y-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {sections.map((section) => (
              <li
                key={section.titleKey}
                className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-7 flex gap-5"
              >
                <span className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary">
                  <section.icon className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    {t(section.titleKey)}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">{t(section.bodyKey)}</p>
                </div>
              </li>
            ))}
          </motion.ul>

          <div className="mt-10 max-w-3xl rounded-2xl bg-primary-light border border-primary/10 p-6 md:p-7">
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">{t('support.title')}</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">{t('faq.support.a')}</p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white font-medium px-6 py-3 rounded-xl hover:bg-primary-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                {t('contact.whatsapp')}
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center gap-2 border border-primary/30 text-primary font-medium px-6 py-3 rounded-xl hover:bg-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {t('contact.email')}
              </a>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-neutral-600 hover:text-primary font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
              >
                <ArrowLeft className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
                {t('footer.links.home')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
