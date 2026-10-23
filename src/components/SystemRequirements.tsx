import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { siteConfig } from '../config/siteConfig';
import { Monitor, Cpu, HardDrive, Wifi } from 'lucide-react';
import type { TranslationKey } from '../i18n/translations';

type Status = 'supported' | 'recommended' | 'minimum' | 'conditional';

const statusLabelKey: Record<Status, TranslationKey> = {
  supported: 'requirements.statusSupported',
  recommended: 'requirements.statusRecommended',
  minimum: 'requirements.statusMinimum',
  conditional: 'requirements.statusConditional',
};

const notes: TranslationKey[] = [
  'requirements.note1',
  'requirements.note2',
  'requirements.note3',
  'requirements.note4',
];

export const SystemRequirements: React.FC = () => {
  const { t } = useLanguage();
  const req = siteConfig.systemRequirements;

  const rows: Array<{ labelKey: TranslationKey; value: string; icon: React.ComponentType<{ className?: string }>; status: Status }> = [
    { labelKey: 'requirements.os', value: req.os, icon: Monitor, status: 'supported' },
    { labelKey: 'requirements.architecture', value: req.architecture, icon: Cpu, status: 'supported' },
    { labelKey: 'requirements.processor', value: req.processor, icon: Cpu, status: 'recommended' },
    { labelKey: 'requirements.ram', value: req.ram, icon: HardDrive, status: 'recommended' },
    { labelKey: 'requirements.diskSpace', value: req.diskSpace, icon: HardDrive, status: 'minimum' },
    { labelKey: 'requirements.internet', value: t('requirements.internet.desc'), icon: Wifi, status: 'conditional' },
  ];

  return (
    <section
      id="requirements"
      className="py-16 md:py-24 bg-white"
      aria-labelledby="requirements-title"
    >
      <div className="container mx-auto px-4 md:px-6">
        <header className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            {t('requirements.badge')}
          </span>
          <h2
            id="requirements-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 leading-tight"
          >
            {t('requirements.title')}
          </h2>
        </header>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-2xl border border-neutral-200 overflow-hidden bg-white">
            <div className="overflow-x-auto">
              <table className="w-full">
                <caption className="sr-only">{t('requirements.title')}</caption>
                <thead>
                  <tr className="bg-neutral-50 border-b border-neutral-200">
                    <th scope="col" className="px-6 py-4 text-start font-semibold text-neutral-900">
                      {t('requirements.colComponent')}
                    </th>
                    <th scope="col" className="px-6 py-4 text-start font-semibold text-neutral-900">
                      {t('requirements.colSpec')}
                    </th>
                    <th scope="col" className="px-6 py-4 text-center font-semibold text-neutral-900">
                      {t('requirements.colStatus')}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {rows.map((row) => (
                    <tr key={row.labelKey} className="hover:bg-neutral-50 transition-colors">
                      <th scope="row" className="px-6 py-5 text-start font-medium text-neutral-900">
                        <span className="flex items-center gap-3">
                          <row.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                          {t(row.labelKey)}
                        </span>
                      </th>
                      <td className="px-6 py-5 text-neutral-600">{row.value}</td>
                      <td className="px-6 py-5 text-center">
                        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary">
                          {t(statusLabelKey[row.status])}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 p-6 bg-primary-light rounded-2xl border border-primary/20">
            <h3 className="text-lg font-semibold text-primary-dark mb-3">
              {t('requirements.notesTitle')}
            </h3>
            <ul className="text-primary-dark text-sm space-y-2 list-disc ps-5">
              {notes.map((key) => (
                <li key={key}>{t(key)}</li>
              ))}
            </ul>
          </div>

          <p className="mt-8 text-center">
            <a
              href={siteConfig.github.releasesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline focus-visible:outline-2 focus-visible:outline-primary rounded"
            >
              {t('requirements.viewReleases')}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
