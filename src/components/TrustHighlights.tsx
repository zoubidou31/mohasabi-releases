import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { Shield, HardDrive, Key, RefreshCw, CheckCircle } from 'lucide-react';

const trustItems = [
  {
    icon: Shield,
    titleKey: 'trust.offline' as const,
    descKey: 'trust.offlineDesc' as const,
    badge: 'Hors-ligne',
    color: 'from-emerald-500 to-green-600',
    bgColor: 'bg-emerald-50 border-emerald-100',
  },
  {
    icon: HardDrive,
    titleKey: 'trust.localData' as const,
    descKey: 'trust.localDataDesc' as const,
    badge: 'Local First',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50 border-blue-100',
  },
  {
    icon: Key,
    titleKey: 'trust.license' as const,
    descKey: 'trust.licenseDesc' as const,
    badge: 'Licence Device',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50 border-purple-100',
  },
  {
    icon: RefreshCw,
    titleKey: 'trust.updates' as const,
    descKey: 'trust.updatesDesc' as const,
    badge: 'Mises à jour',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50 border-orange-100',
  },
] as const;

export const TrustHighlights: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="trust"
      className="py-16 md:py-24 bg-white relative overflow-hidden"
      aria-labelledby="trust-title"
    >
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.header
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.span
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            {t('trust.title')}
          </motion.span>
          <motion.h2
            id="trust-title"
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4"
          >
            Pourquoi faire <span className="text-primary">confiance</span> à Mohasabi ?
          </motion.h2>
        </motion.header>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {trustItems.map((item, index) => (
            <motion.article
              key={index}
              className={`group relative p-6 md:p-8 rounded-2xl border transition-all duration-500 ${item.bgColor} hover:border-transparent hover:shadow-2xl hover:shadow-primary/5`}
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            >
              <motion.div
                className={`absolute top-6 right-6 px-3 py-1 text-xs font-semibold text-white rounded-full ${item.color}`}
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.5 + index * 0.1, type: 'spring', stiffness: 260, damping: 20 }}
              >
                {item.badge}
              </motion.div>

              <motion.div
                className={`relative flex items-center justify-center w-14 h-14 rounded-xl ${item.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 6 }}
              >
                <item.icon className="w-7 h-7" aria-hidden="true" />
              </motion.div>

              <motion.h3
                className="text-lg md:text-xl font-semibold text-neutral-900 mb-3"
                whileHover={{ x: 4 }}
              >
                {t(item.titleKey)}
              </motion.h3>
              <motion.p
                className="text-neutral-600 leading-relaxed"
              >
                {t(item.descKey)}
              </motion.p>

              <motion.div
                className="absolute bottom-6 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              />
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center gap-4 text-sm text-neutral-500"
          >
            <motion.span
              className="flex items-center gap-1.5"
              whileHover={{ scale: 1.05 }}
            >
              <CheckCircle className="w-5 h-5 text-primary" aria-hidden="true" />
              <span>Aucune donnée cloud</span>
            </motion.span>
            <motion.span
              className="flex items-center gap-1.5"
              whileHover={{ scale: 1.05 }}
            >
              <CheckCircle className="w-5 h-5 text-primary" aria-hidden="true" />
              <span>Open Source Friendly</span>
            </motion.span>
            <motion.span
              className="flex items-center gap-1.5"
              whileHover={{ scale: 1.05 }}
            >
              <CheckCircle className="w-5 h-5 text-primary" aria-hidden="true" />
              <span>RGPD Compliant</span>
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};