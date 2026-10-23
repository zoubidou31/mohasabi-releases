import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import {
  buildMailtoPlanUrl,
  buildPlanWhatsAppUrl,
  formatAmount,
  siteConfig,
  type DurationId,
} from '../config/siteConfig';

export const LicensePlans: React.FC = () => {
  const { t } = useLanguage();
  const [duration, setDuration] = useState<DurationId>('year');

  const { plans, durations, currencySymbol } = siteConfig.pricing;
  const activeDuration = durations.find((item) => item.id === duration) ?? durations[3];
  const durationLabel = t(activeDuration.labelKey);

  const amountLabel = (value: number): string => `${formatAmount(value)} ${currencySymbol}`;

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <p className="text-sm font-medium text-neutral-500 mb-2">{t('pricing.durationLabel')}</p>
          <div
            className="inline-flex flex-wrap gap-1 rounded-xl border border-neutral-200 bg-white p-1"
            role="group"
            aria-label={t('pricing.durationLabel')}
          >
            {durations.map((item) => {
              const isActive = item.id === duration;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setDuration(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                    isActive ? 'bg-primary text-white' : 'text-neutral-700 hover:bg-primary-light'
                  }`}
                >
                  {t(item.labelKey)}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <motion.div
        className="grid lg:grid-cols-3 gap-6 mb-14"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {plans.map((plan) => {
          const price = plan.prices[duration];
          const requestUrl = buildPlanWhatsAppUrl(
            plan.name,
            durationLabel,
            amountLabel(price),
            t('pricing.whatsappIntro'),
          );
          const inquiryUrl = buildPlanWhatsAppUrl(
            plan.name,
            durationLabel,
            amountLabel(price),
            t('pricing.inquiryIntro'),
          );
          const mailUrl = buildMailtoPlanUrl(
            plan.name,
            durationLabel,
            amountLabel(price),
            t('pricing.askPlan'),
            t('pricing.inquiryIntro'),
          );

          return (
            <article
              key={plan.id}
              className="relative flex flex-col rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm hover:shadow-lg transition-shadow"
              style={{ borderTopColor: plan.accent, borderTopWidth: 4 }}
            >
              {plan.recommended && (
                <span
                  className="absolute top-4 end-7 inline-flex items-center gap-1 text-xs font-semibold text-white px-3 py-1 rounded-full"
                  style={{ backgroundColor: plan.accent }}
                >
                  <Check className="w-3.5 h-3.5" aria-hidden="true" />
                  {t('pricing.recommended')}
                </span>
              )}

              <h3 className="text-lg font-bold text-neutral-900 mb-1" style={{ color: plan.accent }}>
                {t(plan.nameKey)}
              </h3>

              <p className="mt-5 mb-1 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-neutral-900 tabular-nums">
                  {formatAmount(price)}
                </span>
                <span className="text-sm font-medium text-neutral-500">{currencySymbol}</span>
              </p>
              <p className="text-sm text-neutral-500 mb-6">{durationLabel}</p>

              <div className="mt-auto space-y-2">
                <a
                  href={requestUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full font-semibold text-white px-5 py-3 rounded-xl transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  style={{ backgroundColor: plan.accent }}
                >
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  {t('pricing.selectPlan')}
                </a>
                <a
                  href={inquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full font-medium text-neutral-700 border border-neutral-300 px-5 py-2.5 rounded-xl hover:bg-neutral-50 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {t('pricing.askPlan')}
                </a>
                <a
                  href={mailUrl}
                  className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-800 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  {t('pricing.orEmail')}
                </a>
              </div>
            </article>
          );
        })}
      </motion.div>

      <div className="overflow-x-auto rounded-2xl border border-neutral-200">
        <table className="w-full text-sm border-collapse min-w-[520px]">
          <caption className="text-start caption-top sr-only">{t('pricing.title')}</caption>
          <thead>
            <tr className="bg-neutral-50">
              <th scope="col" className="text-start px-5 py-3 font-semibold text-neutral-700">
                {t('pricing.planCol')}
              </th>
              {durations.map((item) => (
                <th key={item.id} scope="col" className="text-end px-5 py-3 font-semibold text-neutral-700">
                  {t(item.labelKey)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {plans.map((plan) => (
              <tr key={plan.id} className="border-t border-neutral-200">
                <th scope="row" className="text-start px-5 py-3 font-medium text-neutral-900">
                  <span className="inline-flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: plan.accent }}
                      aria-hidden="true"
                    />
                    {t(plan.nameKey)}
                  </span>
                </th>
                {durations.map((item) => (
                  <td
                    key={item.id}
                    className={`text-end px-5 py-3 tabular-nums ${
                      item.id === duration ? 'font-semibold text-neutral-900' : 'text-neutral-600'
                    }`}
                  >
                    {formatAmount(plan.prices[item.id])} {currencySymbol}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 flex items-center gap-2 text-sm text-neutral-500">
        <ArrowLeft className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
        {t('pricing.contactBody')}
      </p>
    </div>
  );
};
