import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { siteConfig } from '../config/siteConfig';
import { CheckCircle, AlertCircle, Info, Monitor, Cpu, HardDrive, Wifi, Shield } from 'lucide-react';

const requirements = [
  { 
    labelKey: 'requirements.os' as const, 
    value: siteConfig.systemRequirements.os,
    icon: Monitor,
    status: 'supported',
  },
  { 
    labelKey: 'requirements.architecture' as const, 
    value: siteConfig.systemRequirements.architecture,
    icon: Cpu,
    status: 'supported',
  },
  { 
    labelKey: 'requirements.processor' as const, 
    value: siteConfig.systemRequirements.processor,
    icon: Cpu,
    status: 'recommended',
  },
  { 
    labelKey: 'requirements.ram' as const, 
    value: siteConfig.systemRequirements.ram,
    icon: HardDrive,
    status: 'recommended',
  },
  { 
    labelKey: 'requirements.diskSpace' as const, 
    value: siteConfig.systemRequirements.diskSpace,
    icon: HardDrive,
    status: 'minimum',
  },
  { 
    labelKey: 'requirements.internet' as const, 
    value: siteConfig.systemRequirements.internet,
    icon: Wifi,
    status: 'conditional',
  },
] as const;

const statusStyles = {
  supported: { badge: 'bg-emerald-100 text-emerald-700', icon: CheckCircle, label: 'Pris en charge' },
  recommended: { badge: 'bg-emerald-100 text-emerald-700', icon: CheckCircle, label: 'Recommandé' },
  minimum: { badge: 'bg-amber-100 text-amber-700', icon: AlertCircle, label: 'Minimum' },
  conditional: { badge: 'bg-sky-100 text-sky-700', icon: Info, label: 'Conditionnel' },
};

export const SystemRequirements: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="requirements"
      className="py-16 md:py-24 bg-white"
      aria-labelledby="requirements-title"
    >
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
            {t('requirements.title').split(' ')[0]}
          </motion.span>
          <motion.h2
            id="requirements-title"
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 leading-tight"
          >
            Configuration <span className="text-primary">requise</span>
          </motion.h2>
        </motion.header>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.div
            className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm"
            whileHover={{ boxShadow: '0 20px 40px -10px rgb(0 0 0 / 0.1)' }}
          >
            <div className="overflow-x-auto">
              <table className="w-full" role="table">
                <thead>
                  <tr className="bg-neutral-50 border-b border-neutral-200">
                    <th className="px-6 py-4 text-left font-semibold text-neutral-900" scope="col">
                      Composant
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-neutral-900" scope="col">
                      Spécification
                    </th>
                    <th className="px-6 py-4 text-center font-semibold text-neutral-900" scope="col">
                      Statut
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {requirements.map((req, index) => {
                    const status = statusStyles[req.status];
                    const StatusIcon = status.icon;
                    return (
                      <motion.tr
                        key={index}
                        className="hover:bg-neutral-50 transition-colors duration-200"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                      >
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-4">
                            <motion.div
                              className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10"
                              whileHover={{ scale: 1.1 }}
                            >
                              <req.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                            </motion.div>
                            <div>
                              <p className="font-medium text-neutral-900">{t(req.labelKey)}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-5 text-neutral-600 font-medium">
                          {req.value}
                        </td>
                        <td className="px-6 py-5 text-center">
                          <motion.span
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium ${status.badge}`}
                            whileHover={{ scale: 1.02 }}
                          >
                            <StatusIcon className="w-4 h-4" aria-hidden="true" />
                            {status.label}
                          </motion.span>
                        </td>
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div
            className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-primary-light/50 rounded-2xl border border-primary/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="flex items-start gap-4">
              <motion.div
                className="flex-shrink-0 p-3 bg-primary/10 rounded-xl"
                whileHover={{ scale: 1.05 }}
              >
                <Info className="w-6 h-6 text-primary" aria-hidden="true" />
              </motion.div>
              <div className="flex-1">
                <motion.h3 className="text-lg font-semibold text-primary-dark mb-2">
                  Notes importantes
                </motion.h3>
                <ul className="text-primary-dark text-sm space-y-2 list-disc list-inside">
                  <li>Les exigences ci-dessus correspondent à la version {siteConfig.app.version}</li>
                  <li>L'application fonctionne en mode hors-ligne après activation initiale</li>
                  <li>Une connexion Internet est requise pour le téléchargement, l'activation et les mises à jour</li>
                  <li>Vérifiez la page des releases GitHub pour les notes de version détaillées</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <motion.a
              href={siteConfig.github.releasesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              whileHover={{ x: 4 }}
            >
              <Shield className="w-5 h-5" aria-hidden="true" />
              Voir les détails sur GitHub Releases
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};