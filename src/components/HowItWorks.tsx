import { motion, easeOut } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { siteConfig } from '../config/siteConfig';
import { Download, Monitor, Rocket, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  { 
    number: '01', 
    icon: Download,
    titleKey: 'howItWorks.step1.title' as const, 
    descKey: 'howItWorks.step1.desc' as const,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    highlight: 'Téléchargement sécurisé',
  },
  { 
    number: '02', 
    icon: Monitor,
    titleKey: 'howItWorks.step2.title' as const, 
    descKey: 'howItWorks.step2.desc' as const,
    color: 'from-emerald-500 to-green-600',
    bgColor: 'bg-emerald-50',
    highlight: 'Installation guidée',
  },
  { 
    number: '03', 
    icon: Rocket,
    titleKey: 'howItWorks.step3.title' as const, 
    descKey: 'howItWorks.step3.desc' as const,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    highlight: 'Prêt à l\'emploi',
  },
] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

export const HowItWorks: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="how-it-works"
      className="py-16 md:py-24 bg-gradient-to-b from-neutral-50/50 to-white relative overflow-hidden"
      aria-labelledby="how-it-works-title"
    >
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-from)_0%,_transparent_70%)] from-primary/5 via-transparent to-transparent"
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
            Démarrage rapide
          </motion.span>
          <motion.h2
            id="how-it-works-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 leading-tight"
          >
            Commencez avec <span className="text-primary">Mohasabi</span> en 3 étapes
          </motion.h2>
        </motion.header>

        <motion.div
          className="relative max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: easeOut }}
            aria-hidden="true"
          />

          <ol className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
            {steps.map((step, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="relative flex flex-col items-center text-center lg:w-1/3 z-10"
              >
                <motion.div
                  className={`relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-2xl text-white font-bold text-2xl md:text-3xl mb-8 shadow-xl shadow-primary/20 ${step.color}`}
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="relative z-10">{step.number}</span>
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-white/20 to-transparent"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    aria-hidden="true"
                  />
                </motion.div>

                <motion.div
                  className={`absolute -top-3 -right-3 w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center ${step.color}`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.2, type: 'spring', stiffness: 260, damping: 15 }}
                >
                  <CheckCircle className="w-4 h-4" aria-hidden="true" />
                </motion.div>

                <motion.h3 className="text-lg md:text-xl font-semibold text-neutral-900 mb-3">
                  {t(step.titleKey)}
                </motion.h3>
                <motion.p className="text-neutral-600 leading-relaxed px-2 lg:px-8 mb-6">
                  {t(step.descKey)}
                </motion.p>

                <motion.div
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-white ${step.color}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, type: 'spring', stiffness: 260, damping: 20 }}
                >
                  {step.highlight}
                  <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </motion.div>

                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-10 md:top-12 left-full w-full h-px bg-gradient-to-r from-primary/30 via-transparent to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.7 + index * 0.2, duration: 0.8, ease: easeOut }}
                    aria-hidden="true"
                  />
                )}
              </motion.li>
            ))}
          </ol>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.p className="text-neutral-600 mb-4">
            Besoin d'aide ? Consultez notre <a href={siteConfig.contact.supportUrl} target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">documentation</a> ou <a href={siteConfig.contact.issuesUrl} target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">ouvrez un ticket</a>.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};