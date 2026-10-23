import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { Building2, Store, Users, Wrench } from 'lucide-react';
import type { TranslationKey } from '../i18n/translations';

const audiences = [
  { icon: Store, titleKey: 'audience.merchants.title', descKey: 'audience.merchants.desc' },
  { icon: Wrench, titleKey: 'audience.craft.title', descKey: 'audience.craft.desc' },
  { icon: Building2, titleKey: 'audience.small.title', descKey: 'audience.small.desc' },
  { icon: Users, titleKey: 'audience.teams.title', descKey: 'audience.teams.desc' },
] as const satisfies ReadonlyArray<{
  icon: React.ComponentType<{ className?: string }>;
  titleKey: TranslationKey;
  descKey: TranslationKey;
}>;

export const Audience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-primary-light" aria-labelledby="audience-title">
      <div className="container mx-auto px-4 md:px-6">
        <header className="text-center mb-12">
          <h2
            id="audience-title"
            className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight text-balance"
          >
            {t('audience.title')}
          </h2>
        </header>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {audiences.map((audience, index) => (
            <motion.li
              key={audience.titleKey}
              className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm flex flex-col gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary">
                <audience.icon className="w-5 h-5" aria-hidden="true" />
              </span>
              <h3 className="font-semibold text-neutral-900">{t(audience.titleKey)}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{t(audience.descKey)}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};
