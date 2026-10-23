import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { siteConfig } from '../config/siteConfig';
import { Download, Shield, CheckCircle, ArrowRight } from 'lucide-react';

const patternBg = "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 36v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 6V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")";

export const DownloadCTA: React.FC = () => {
  const { t } = useLanguage();

  const handleDownloadClick = () => {
    window.open(siteConfig.download.directUrl, '_blank', 'noopener,noreferrer');
  };

  const benefits = [
    { icon: Shield, text: '100% Hors-ligne & Sécurisé' },
    { icon: CheckCircle, text: 'Installation en 2 minutes' },
    { icon: Download, text: 'Mises à jour gratuites' },
  ];

  return (
    <section
      id="download-cta"
      className="py-16 md:py-24 relative overflow-hidden"
      aria-labelledby="cta-title"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-primary-dark"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        aria-hidden="true"
      />

      <motion.div
        className="absolute inset-0"
        style={{ backgroundImage: patternBg }}
        aria-hidden="true"
      />

      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.span
            className="w-2 h-2 bg-white rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          {siteConfig.app.version} • {siteConfig.app.versionSize}
        </motion.div>

        <motion.h2
          id="cta-title"
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {t('cta.title')}
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-primary-light mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {t('cta.subtitle')}
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white text-sm"
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.2)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
            >
              <benefit.icon className="w-5 h-5 text-white" aria-hidden="true" />
              <span>{benefit.text}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          onClick={handleDownloadClick}
          className="inline-flex items-center justify-center gap-3 bg-white text-primary font-semibold px-10 py-4 rounded-xl hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary transition-all duration-200 shadow-2xl shadow-black/20 min-w-[300px]"
          aria-label={t('cta.downloadBtn')}
          whileHover={{ scale: 1.02, boxShadow: '0 25px 50px -10px rgb(0 0 0 / 0.3)' }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <Download className="w-6 h-6" aria-hidden="true" />
          {t('cta.downloadBtn')}
          <motion.span className="group-hover:translate-x-1 transition-transform">
            <ArrowRight className="w-6 h-6" aria-hidden="true" />
          </motion.span>
        </motion.button>

        <motion.p
          className="mt-6 text-primary-light text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          {t('cta.note')}
        </motion.p>

        <motion.div
          className="mt-12 flex justify-center gap-8 text-sm text-primary-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.a
            href={siteConfig.github.releasesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
            whileHover={{ x: 4 }}
          >
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
            Voir toutes les versions
          </motion.a>
          <motion.a
            href={siteConfig.github.releasesUrl.replace('/releases', '')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
            whileHover={{ x: 4 }}
          >
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
            Code source
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};