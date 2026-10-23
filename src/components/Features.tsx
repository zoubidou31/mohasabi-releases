import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { 
  WifiOff, 
  FileText, 
  Database, 
  LayoutDashboard,
  ArrowUpRight
} from 'lucide-react';

const features = [
  {
    icon: WifiOff,
    titleKey: 'features.offline.title' as const,
    descKey: 'features.offline.desc' as const,
    highlight: 'يعمل دون إنترنت',
  },
  {
    icon: FileText,
    titleKey: 'features.invoices.title' as const,
    descKey: 'features.invoices.desc' as const,
    highlight: 'إدارة الفواتير',
  },
  {
    icon: Database,
    titleKey: 'features.localData.title' as const,
    descKey: 'features.localData.desc' as const,
    highlight: 'بيانات محلية',
  },
  {
    icon: LayoutDashboard,
    titleKey: 'features.ui.title' as const,
    descKey: 'features.ui.desc' as const,
    highlight: 'واجهة سهلة',
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const Features: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="features"
      className="py-16 md:py-24 bg-white"
      aria-labelledby="features-title"
    >
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
            {t('features.title')}
          </motion.span>
          <motion.h2
            id="features-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 leading-tight"
          >
            {t('features.subtitle')}
          </motion.h2>
        </motion.header>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="group relative p-6 md:p-8 rounded-2xl border border-neutral-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300 bg-white"
              whileHover={{ y: -4 }}
            >
              <motion.div
                className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300"
              >
                <feature.icon className="w-6 h-6" aria-hidden="true" />
              </motion.div>

              <motion.h3 className="text-lg font-semibold text-neutral-900 mb-3">
                {t(feature.titleKey)}
              </motion.h3>
              <motion.p className="text-neutral-600 leading-relaxed mb-6">
                {t(feature.descKey)}
              </motion.p>

              <motion.div
                className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all duration-300"
                whileHover={{ x: 4 }}
              >
                <span>{feature.highlight}</span>
                <motion.span
                  className="inline-flex items-center justify-center w-6 h-6 bg-primary/10 rounded-full"
                  whileHover={{ scale: 1.1, backgroundColor: 'var(--color-primary)', color: 'white' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </motion.span>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};