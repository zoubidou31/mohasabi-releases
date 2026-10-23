import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import {
  Boxes,
  Building2,
  FileText,
  Languages,
  PieChart,
  ShieldCheck,
  Wallet,
} from 'lucide-react';
import type { TranslationKey } from '../i18n/translations';

type Feature = {
  icon: React.ComponentType<{ className?: string }>;
  titleKey: TranslationKey;
  descKey: TranslationKey;
};

const lead = {
  icon: FileText,
  titleKey: 'features.documents.title',
  descKey: 'features.documents.desc',
} as const satisfies Feature;

const secondary = [
  {
    icon: Building2,
    titleKey: 'features.partners.title',
    descKey: 'features.partners.desc',
  },
  {
    icon: Wallet,
    titleKey: 'features.debts.title',
    descKey: 'features.debts.desc',
  },
  {
    icon: Boxes,
    titleKey: 'features.stock.title',
    descKey: 'features.stock.desc',
  },
  {
    icon: PieChart,
    titleKey: 'features.reports.title',
    descKey: 'features.reports.desc',
  },
  {
    icon: Languages,
    titleKey: 'features.languages.title',
    descKey: 'features.languages.desc',
  },
  {
    icon: ShieldCheck,
    titleKey: 'features.localData.title',
    descKey: 'features.localData.desc',
  },
] as const satisfies readonly Feature[];

export const Features: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-16 md:py-24 bg-white" aria-labelledby="features-title">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <header className="lg:col-span-5">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-5">
              {t('features.badge')}
            </span>
            <h2
              id="features-title"
              className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 leading-tight text-balance"
            >
              {t('features.title')}
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">{t('features.subtitle')}</p>

            <motion.article
              className="mt-9 rounded-2xl bg-primary-dark text-white p-7 md:p-8 overflow-hidden relative"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="absolute -end-10 -top-10 w-40 h-40 rounded-full bg-white/10"
                aria-hidden="true"
              />
              <LeadFeature />
            </motion.article>
          </header>

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
              {secondary.map((feature) => (
                <li key={feature.titleKey} className="flex gap-5 py-6">
                  <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-primary-light text-primary border border-primary/10">
                    <feature.icon className="w-6 h-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1.5">
                      {t(feature.titleKey)}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">{t(feature.descKey)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const LeadFeature: React.FC = () => {
  const { t } = useLanguage();
  const Icon = lead.icon;

  return (
    <>
      <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/15 text-white mb-5">
        <Icon className="w-6 h-6" aria-hidden="true" />
      </span>
      <h3 className="text-xl font-semibold mb-3">{t(lead.titleKey)}</h3>
      <p className="text-primary-light/90 leading-relaxed">{t(lead.descKey)}</p>
    </>
  );
};
