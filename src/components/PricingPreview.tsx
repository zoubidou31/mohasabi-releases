import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { ArrowRight } from 'lucide-react';
import {
  buildPlanWhatsAppUrl,
  formatAmount,
  siteConfig,
} from '../config/siteConfig';
import type { PlanId } from '../config/siteConfig';
import type { TranslationKey } from '../i18n/translations';

const tags: Record<PlanId, TranslationKey> = {
  standard: 'preview.tag.standard',
  pro: 'preview.tag.pro',
  enterprise: 'preview.tag.enterprise',
};

export const PricingPreview: React.FC = () => {
  const { t } = useLanguage();
  const { plans, currencySymbol } = siteConfig.pricing;

  return (
    <section id="pricing-preview" className="py-16 md:py-24 bg-white" aria-labelledby="preview-title">
      <div className="container mx-auto px-4 md:px-6">
        <header className="max-w-3xl mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-5">
            {t('pricing.badge')}
          </span>
          <h2
            id="preview-title"
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 leading-tight text-balance"
          >
            {t('preview.title')}
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">{t('preview.subtitle')}</p>
        </header>

        <ul className="grid md:grid-cols-3 gap-6 mb-8">
          {plans.map((plan, index) => {
            const amount = `${formatAmount(plan.prices.month)} ${currencySymbol}`;
            const href = buildPlanWhatsAppUrl(
              plan.name,
              t('duration.month'),
              amount,
              t('pricing.whatsappIntro'),
            );

            return (
              <motion.li
                key={plan.id}
                className="relative rounded-2xl border border-neutral-200 p-6 md:p-7 flex flex-col"
                style={plan.recommended ? { borderColor: plan.accent, borderWidth: 2 } : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                {plan.recommended && (
                  <span
                    className="absolute -top-3 end-6 px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: plan.accent }}
                  >
                    {t('pricing.recommended')}
                  </span>
                )}
                <h3 className="text-lg font-bold text-neutral-900 mb-1" style={{ color: plan.accent }}>
                  {plan.name}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-5">{t(tags[plan.id])}</p>
                <p className="text-neutral-500 text-sm mb-1">{t('preview.from')}</p>
                <p className="text-2xl font-bold text-neutral-900 tabular-nums mb-6">
                  {amount} <span className="text-base font-medium text-neutral-600">/ {t('duration.month')}</span>
                </p>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ backgroundColor: plan.accent }}
                >
                  {t('preview.ask')} {plan.name}
                </a>
              </motion.li>
            );
          })}
        </ul>

        <div className="flex flex-wrap items-center gap-4 mb-6">
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-neutral-300 text-neutral-900 font-medium hover:border-primary hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
          >
            {t('preview.compare')}
            <ArrowRight className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
          </Link>
        </div>

        <p className="text-sm text-neutral-500 leading-relaxed max-w-3xl">{t('preview.note')}</p>
      </div>
    </section>
  );
};
