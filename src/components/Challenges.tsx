import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { Eye, FolderOpen, WifiOff } from 'lucide-react';
import type { TranslationKey } from '../i18n/translations';

const benefits = [
  { icon: FolderOpen, titleKey: 'challenges.b1.title', descKey: 'challenges.b1.desc' },
  { icon: Eye, titleKey: 'challenges.b2.title', descKey: 'challenges.b2.desc' },
  { icon: WifiOff, titleKey: 'challenges.b3.title', descKey: 'challenges.b3.desc' },
] as const satisfies ReadonlyArray<{
  icon: React.ComponentType<{ className?: string }>;
  titleKey: TranslationKey;
  descKey: TranslationKey;
}>;

export const Challenges: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-primary-light" aria-labelledby="challenges-title">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2
            id="challenges-title"
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-5 leading-tight text-balance"
          >
            {t('challenges.title')}
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-4">{t('challenges.body1')}</p>
          <p className="text-lg text-neutral-700 leading-relaxed">{t('challenges.body2')}</p>
        </div>

        <ul className="grid sm:grid-cols-3 gap-5 md:gap-6">
          {benefits.map((benefit, index) => (
            <motion.li
              key={benefit.titleKey}
              className="bg-white rounded-2xl p-6 md:p-7 border border-neutral-200 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary mb-4">
                <benefit.icon className="w-5 h-5" aria-hidden="true" />
              </span>
              <h3 className="font-semibold text-neutral-900 mb-1.5">{t(benefit.titleKey)}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{t(benefit.descKey)}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};
