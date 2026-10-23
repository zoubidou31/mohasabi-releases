import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Banknote, ClipboardCheck, MessageCircle, ReceiptText } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { usePageTitle } from '../i18n/usePageTitle';
import { PageHeader } from '../components/PageHeader';
import { LicensePlans } from '../components/LicensePlans';
import { siteConfig } from '../config/siteConfig';
import type { TranslationKey } from '../i18n/translations';

const notes = [
  { icon: ReceiptText, titleKey: 'pricing.indicativeTitle', bodyKey: 'pricing.indicativeBody' },
  { icon: Banknote, titleKey: 'pricing.paymentTitle', bodyKey: 'pricing.paymentBody' },
  { icon: ClipboardCheck, titleKey: 'pricing.termsTitle', bodyKey: 'pricing.termsBody' },
] as const satisfies ReadonlyArray<{
  icon: React.ComponentType<{ className?: string }>;
  titleKey: TranslationKey;
  bodyKey: TranslationKey;
}>;

export const PricingPage: React.FC = () => {
  const { t } = useLanguage();
  usePageTitle('seo.page.pricing');

  return (
    <>
      <PageHeader
        badge={t('pricing.badge')}
        title={t('pricing.title')}
        subtitle={t('pricing.subtitle')}
        titleId="pricing-title"
      />

      <section className="py-14 md:py-20 bg-white" aria-labelledby="pricing-plans-title">
        <h2 id="pricing-plans-title" className="sr-only">
          {t('pricing.title')}
        </h2>
        <LicensePlans />
      </section>

      <section className="py-14 md:py-20 bg-primary-light border-t border-primary/10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            {notes.map((note) => (
              <div key={note.titleKey} className="bg-white rounded-2xl border border-neutral-200 p-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary mb-4">
                  <note.icon className="w-5 h-5" aria-hidden="true" />
                </span>
                <h3 className="font-semibold text-neutral-900 mb-2">{t(note.titleKey)}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{t(note.bodyKey)}</p>
              </div>
            ))}
          </motion.div>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl bg-white border border-neutral-200 p-6">
            <div>
              <p className="font-semibold text-neutral-900">{t('pricing.contactTitle')}</p>
              <p className="text-sm text-neutral-600 mt-1 max-w-xl">{t('pricing.contactBody')}</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white font-medium px-5 py-2.5 rounded-xl hover:bg-primary-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                {t('contact.whatsapp')}
              </a>
              <Link
                to="/support"
                className="inline-flex items-center gap-2 border border-neutral-300 text-neutral-700 font-medium px-5 py-2.5 rounded-xl hover:bg-neutral-50 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {t('guide.supportCta')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
