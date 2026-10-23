import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { siteConfig } from '../config/siteConfig';
import { Globe, GitFork } from 'lucide-react';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: t('footer.links.home'), href: '#home' },
    { label: t('footer.links.features'), href: '#features' },
    { label: t('footer.links.screenshots'), href: '#screenshots' },
    { label: t('footer.links.howItWorks'), href: '#how-it-works' },
    { label: t('footer.links.requirements'), href: '#requirements' },
    { label: t('footer.links.faq'), href: '#faq' },
  ];

  const resourceLinks = [
    { 
      label: t('footer.links.releases'), 
      href: siteConfig.github.releasesUrl, 
      external: true,
      icon: GitFork 
    },
    { 
      label: t('footer.links.repository'), 
      href: siteConfig.github.releasesUrl.replace('/releases', ''), 
      external: true,
      icon: Globe 
    },
  ];

  return (
    <footer className="bg-neutral-950 text-white relative overflow-hidden" role="contentinfo">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-from)_0%,_transparent_70%)] from-primary/10 via-transparent to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 relative z-10">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div className="lg:col-span-2" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}>
            <motion.a
              href="#home"
              className="flex items-center gap-2 mb-4"
              aria-label={`${siteConfig.app.name} - Home`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="relative p-2 bg-gradient-to-br from-primary to-primary-dark rounded-xl"
                whileHover={{ rotate: 6, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={siteConfig.assets.logo} alt="" className="h-10 w-auto" aria-hidden="true" />
              </motion.div>
              <span className="font-bold text-2xl text-white">{siteConfig.app.name}</span>
            </motion.a>
            <motion.p className="text-neutral-400 text-base leading-relaxed max-w-xs mb-6">
              {t('footer.description')}
            </motion.p>
            
            <motion.div className="flex items-center gap-4">
              <motion.a
                href={siteConfig.github.releasesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 bg-neutral-800/50 border border-neutral-700 rounded-xl text-neutral-400 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                aria-label="GitHub"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <GithubIcon className="w-5 h-5" aria-hidden="true" />
              </motion.a>
              <motion.a
                href={siteConfig.github.releasesUrl.replace('/releases', '')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 bg-neutral-800/50 border border-neutral-700 rounded-xl text-neutral-400 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                aria-label="Repository"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe className="w-5 h-5" aria-hidden="true" />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.nav aria-labelledby="footer-nav-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
            <h3 id="footer-nav-title" className="font-semibold text-white mb-4">{t('footer.links.home')}</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.05, duration: 0.4 }}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>

          <motion.nav aria-labelledby="footer-resources-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}>
            <h3 id="footer-resources-title" className="font-semibold text-white mb-4">{t('footer.links.releases')}</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.05, duration: 0.4 }}>
                  <motion.a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200"
                    whileHover={{ x: 4 }}
                  >
                    <link.icon className="w-4 h-4" aria-hidden="true" />
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        </motion.div>

        <motion.div
          className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.p className="text-neutral-500 text-sm">
            &copy; {currentYear} {siteConfig.app.name}. {t('footer.copyright')}
          </motion.p>

          <motion.div className="flex items-center gap-4">
            <motion.a
              href={siteConfig.github.releasesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
              whileHover={{ scale: 1.1, y: -2, color: 'white' }}
            >
              <GithubIcon className="w-5 h-5" aria-hidden="true" />
              <span className="hidden sm:block">GitHub</span>
            </motion.a>

            <motion.div className="hidden md:flex items-center gap-2 text-neutral-500">
              <span>Version</span>
              <span className="px-2 py-1 bg-primary/20 text-primary rounded-full text-xs font-mono">
                {siteConfig.app.version}
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};