import { motion, easeOut } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { 
  WifiOff, 
  FileText, 
  Database, 
  Key, 
  RefreshCw, 
  LayoutDashboard,
  ArrowUpRight
} from 'lucide-react';

const features = [
  {
    icon: WifiOff,
    titleKey: 'features.offline.title' as const,
    descKey: 'features.offline.desc' as const,
    color: 'from-emerald-500 to-green-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-100',
    highlight: 'Fonctionne sans Internet',
  },
  {
    icon: FileText,
    titleKey: 'features.invoices.title' as const,
    descKey: 'features.invoices.desc' as const,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-100',
    highlight: 'Facturation complète',
  },
  {
    icon: Database,
    titleKey: 'features.localData.title' as const,
    descKey: 'features.localData.desc' as const,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-100',
    highlight: 'Données locales',
  },
  {
    icon: Key,
    titleKey: 'features.license.title' as const,
    descKey: 'features.license.desc' as const,
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-100',
    highlight: 'Licence par appareil',
  },
  {
    icon: RefreshCw,
    titleKey: 'features.updates.title' as const,
    descKey: 'features.updates.desc' as const,
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-100',
    highlight: 'Mises à jour régulières',
  },
  {
    icon: LayoutDashboard,
    titleKey: 'features.ui.title' as const,
    descKey: 'features.ui.desc' as const,
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-100',
    highlight: 'UX optimisée',
  },
] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

export const Features: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="features"
      className="py-16 md:py-24 bg-gradient-to-b from-neutral-50/50 to-white relative overflow-hidden"
      aria-labelledby="features-title"
    >
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-from)_0%,_transparent_70%)] from-primary/5 via-transparent to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.header
          className="text-center mb-12 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
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
            Fonctionnalités
          </motion.span>
          <motion.h2
            id="features-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 leading-tight"
          >
            Tout ce dont vous avez besoin pour <span className="text-primary">organiser votre activité</span>
          </motion.h2>
          <motion.p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </motion.p>
        </motion.header>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className={`group relative p-6 md:p-8 rounded-2xl border transition-all duration-500 ${feature.bgColor} ${feature.borderColor} hover:border-transparent hover:shadow-2xl hover:shadow-primary/5`}
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="absolute top-6 right-6 px-3 py-1 text-xs font-semibold text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(135deg, ${feature.color.split(' to ')[0]}, ${feature.color.split(' to ')[1]})` }}
              >
                {feature.highlight}
              </motion.div>

              <motion.div
                className={`relative flex items-center justify-center w-14 h-14 rounded-xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                style={{ background: `linear-gradient(135deg, ${feature.color.split(' to ')[0]}, ${feature.color.split(' to ')[1]})` }}
                whileHover={{ rotate: 6 }}
              >
                <feature.icon className="w-7 h-7" aria-hidden="true" />
              </motion.div>

              <motion.h3 className="text-lg md:text-xl font-semibold text-neutral-900 mb-3">
                {t(feature.titleKey)}
              </motion.h3>
              <motion.p className="text-neutral-600 leading-relaxed mb-6">
                {t(feature.descKey)}
              </motion.p>

              <motion.div
                className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all duration-300"
                whileHover={{ x: 4 }}
              >
                <span>En savoir plus</span>
                <motion.span
                  className="inline-flex items-center justify-center w-6 h-6 bg-primary/10 rounded-full"
                  whileHover={{ scale: 1.1, backgroundColor: 'var(--color-primary)' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </motion.span>
              </motion.div>

              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                aria-hidden="true"
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};