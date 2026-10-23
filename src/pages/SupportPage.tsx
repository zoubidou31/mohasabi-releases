import { motion } from 'framer-motion';
import { GithubIcon } from '../components/GithubIcon';
import { AlertTriangle, ListChecks, Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { usePageTitle } from '../i18n/usePageTitle';
import { PageHeader } from '../components/PageHeader';
import { buildWhatsAppUrl, siteConfig } from '../config/siteConfig';
import type { TranslationKey } from '../i18n/translations';

const requestTypes = [
  'support.req.install',
  'support.req.activation',
  'support.req.duration',
  'support.req.renewal',
  'support.req.purchase',
  'support.req.other',
] as const satisfies readonly TranslationKey[];

const usefulInfo = [
  'support.info1',
  'support.info2',
  'support.info3',
  'support.info4',
  'support.info5',
] as const satisfies readonly TranslationKey[];

const neverSend = ['support.avoid1', 'support.avoid2', 'support.avoid3'] as const satisfies readonly TranslationKey[];

const supportFaq = [
  { qKey: 'support.faq1.q', aKey: 'support.faq1.a' },
  { qKey: 'support.faq2.q', aKey: 'support.faq2.a' },
] as const satisfies ReadonlyArray<{ qKey: TranslationKey; aKey: TranslationKey }>;

export const SupportPage: React.FC = () => {
  const { t } = useLanguage();
  usePageTitle('seo.page.support');

  const channels = [
    {
      icon: MessageCircle,
      titleKey: 'support.whatsappTitle',
      bodyKey: 'support.whatsappBody',
      href: siteConfig.contact.whatsappUrl,
      label: siteConfig.contact.whatsappNumber,
      external: true,
    },
    {
      icon: Mail,
      titleKey: 'support.emailTitle',
      bodyKey: 'support.emailBody',
      href: `mailto:${siteConfig.contact.email}`,
      label: siteConfig.contact.email,
      external: false,
    },
    {
      icon: GithubIcon,
      titleKey: 'support.issuesTitle',
      bodyKey: 'support.issuesBody',
      href: siteConfig.contact.issuesUrl,
      label: siteConfig.github.repo,
      external: true,
    },
  ] as const;

  return (
    <>
      <PageHeader
        badge={t('support.badge')}
        title={t('support.title')}
        subtitle={t('support.subtitle')}
        titleId="support-title"
      />

      <section className="py-14 md:py-20 bg-white" aria-labelledby="support-channels-title">
        <div className="container mx-auto px-4 md:px-6">
          <h2 id="support-channels-title" className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8">
            {t('support.requestTitle')}
          </h2>

          <p className="text-neutral-600 mb-6 max-w-2xl">{t('support.requestBody')}</p>

          <motion.div
            className="flex flex-wrap gap-3 mb-14"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, staggerChildren: 0.04 }}
          >
            {requestTypes.map((key) => (
              <a
                key={key}
                href={buildWhatsAppUrl(`${t('support.reqIntro')} ${t(key)}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-primary/25 bg-primary-light text-neutral-800 font-medium px-4 py-2.5 rounded-xl hover:bg-primary hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                {t(key)}
              </a>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {channels.map((channel) => (
              <div key={channel.titleKey} className="border border-neutral-200 rounded-2xl p-6 bg-white">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary mb-4">
                  <channel.icon className="w-5 h-5" aria-hidden="true" />
                </span>
                <h3 className="font-semibold text-neutral-900 mb-2">{t(channel.titleKey)}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-4">{t(channel.bodyKey)}</p>
                <a
                  href={channel.href}
                  {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="text-sm font-medium text-primary hover:underline break-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {channel.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-neutral-50 border-y border-neutral-200" aria-labelledby="support-info-title">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-10">
          <div>
            <h2
              id="support-info-title"
              className="text-xl md:text-2xl font-bold text-neutral-900 mb-5 flex items-center gap-2"
            >
              <ListChecks className="w-6 h-6 text-primary" aria-hidden="true" />
              {t('support.infoTitle')}
            </h2>
            <ol className="space-y-3">
              {usefulInfo.map((key, index) => (
                <li key={key} className="flex gap-3 text-neutral-700">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="text-sm leading-relaxed">{t(key)}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-2xl border border-neutral-300 bg-white p-6">
            <h2 className="text-lg font-bold text-neutral-900 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-neutral-900" aria-hidden="true" />
              {t('support.avoidTitle')}
            </h2>
            <ul className="space-y-3">
              {neverSend.map((key) => (
                <li key={key} className="flex gap-2 text-sm text-neutral-800 leading-relaxed">
                  <span aria-hidden="true" className="text-neutral-500 font-bold">
                    —
                  </span>
                  {t(key)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white" aria-labelledby="support-faq-title">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 id="support-faq-title" className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8">
            {t('faq.title')}
          </h2>
          <dl className="space-y-6">
            {supportFaq.map((item) => (
              <div key={item.qKey} className="border-s-2 border-primary ps-5">
                <dt className="font-semibold text-neutral-900 mb-2">{t(item.qKey)}</dt>
                <dd className="text-neutral-600 leading-relaxed">{t(item.aKey)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
};
