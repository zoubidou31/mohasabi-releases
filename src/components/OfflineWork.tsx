import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { AlertTriangle, WifiOff } from 'lucide-react';

export const OfflineWork: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-neutral-900 text-white" aria-labelledby="offline-title">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-sm font-medium mb-5">
              <WifiOff className="w-4 h-4" aria-hidden="true" />
              Windows
            </span>
            <h2
              id="offline-title"
              className="text-3xl md:text-4xl font-bold mb-5 leading-tight text-balance"
            >
              {t('offline.title')}
            </h2>
            <p className="text-primary-light/90 text-lg leading-relaxed mb-4">{t('offline.body1')}</p>
            <p className="text-white/70 leading-relaxed">{t('offline.body2')}</p>
          </div>

          <motion.aside
            className="lg:col-span-5 rounded-2xl bg-white/5 border border-white/10 p-6 md:p-7 flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45 }}
          >
            <AlertTriangle className="w-6 h-6 flex-shrink-0 text-white" aria-hidden="true" />
            <p className="text-white/85 leading-relaxed">{t('offline.note')}</p>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};
