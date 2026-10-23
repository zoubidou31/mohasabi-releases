import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { HardDrive, History, Save } from 'lucide-react';
import type { TranslationKey } from '../i18n/translations';

const points = [
  { icon: HardDrive, titleKey: 'security.s1.title', descKey: 'security.s1.desc' },
  { icon: Save, titleKey: 'security.s2.title', descKey: 'security.s2.desc' },
  { icon: History, titleKey: 'security.s3.title', descKey: 'security.s3.desc' },
] as const satisfies ReadonlyArray<{
  icon: React.ComponentType<{ className?: string }>;
  titleKey: TranslationKey;
  descKey: TranslationKey;
}>;

export const DataSecurity: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-white" aria-labelledby="security-title">
      <div className="container mx-auto px-4 md:px-6">
        <header className="max-w-3xl mb-12">
          <h2
            id="security-title"
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 leading-tight text-balance"
          >
            {t('security.title')}
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">{t('security.body')}</p>
        </header>

        <ul className="grid md:grid-cols-3 gap-6 mb-10">
          {points.map((point, index) => (
            <motion.li
              key={point.titleKey}
              className="rounded-2xl border border-neutral-200 p-6 md:p-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary-light text-primary border border-primary/10 mb-4">
                <point.icon className="w-5 h-5" aria-hidden="true" />
              </span>
              <h3 className="font-semibold text-neutral-900 mb-1.5">{t(point.titleKey)}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{t(point.descKey)}</p>
            </motion.li>
          ))}
        </ul>

        <p className="rounded-xl bg-primary-light border border-primary/10 p-5 text-sm text-neutral-700 leading-relaxed max-w-3xl">
          {t('security.disclaimer')}
        </p>
      </div>
    </section>
  );
};
