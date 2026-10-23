import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { siteConfig } from '../config/siteConfig';
import { GithubIcon } from './GithubIcon';
import { FileText, Globe, GitFork, Mail, MessageCircle, Percent, ShieldCheck } from 'lucide-react';
import type { TranslationKey } from '../i18n/translations';

const currentYear = new Date().getFullYear();

const pageLinks: ReadonlyArray<{ labelKey: TranslationKey; to: string }> = [
  { labelKey: 'footer.links.home', to: '/' },
  { labelKey: 'footer.links.guide', to: '/guide' },
  { labelKey: 'footer.links.pricing', to: '/pricing' },
  { labelKey: 'footer.links.support', to: '/support' },
  { labelKey: 'footer.links.privacy', to: '/privacy' },
];

const sectionLinks: ReadonlyArray<{
  labelKey: TranslationKey;
  to: string;
  hash: string;
}> = [
  { labelKey: 'footer.links.features', to: '/', hash: '#features' },
  { labelKey: 'footer.links.faq', to: '/', hash: '#faq' },
  { labelKey: 'footer.links.requirements', to: '/guide', hash: '#requirements' },
];

const resourceLinks: ReadonlyArray<{
  labelKey: TranslationKey;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}> = [
  {
    labelKey: 'footer.links.releases',
    href: siteConfig.github.releasesUrl,
    icon: GitFork,
  },
  {
    labelKey: 'footer.links.repository',
    href: siteConfig.github.releasesUrl.replace('/releases', ''),
    icon: Globe,
  },
];

const externalLinkClass =
  'text-neutral-400 hover:text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded';
const internalLinkClass =
  'text-neutral-400 hover:text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-neutral-950 text-white relative overflow-hidden" role="contentinfo">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-from)_0%,_transparent_70%)] from-primary/10 via-transparent to-transparent"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-12">
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-flex items-center gap-3 mb-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-xl"
              aria-label={`${siteConfig.app.name} - ${t('footer.links.home')}`}
            >
              <img
                src={siteConfig.assets.logo}
                alt={t('a11y.logoAlt')}
                className="h-11 w-11 rounded-xl object-contain ring-1 ring-white/15"
                width={44}
                height={44}
                decoding="async"
              />
              <span className="font-bold text-2xl tracking-tight text-white">
                {siteConfig.app.name}
              </span>
            </Link>
            <p className="text-neutral-400 text-base leading-relaxed max-w-md mb-6">
              {t('footer.description')}
            </p>

            <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <li>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
                >
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  {t('contact.whatsapp')}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
                >
                  <Mail className="w-5 h-5" aria-hidden="true" />
                  {t('contact.email')}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.github.releasesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
                >
                  <GithubIcon className="w-5 h-5" aria-hidden="true" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <nav aria-labelledby="footer-pages-title">
            <h3 id="footer-pages-title" className="font-semibold text-white mb-4">
              {t('footer.pagesTitle')}
            </h3>
            <ul className="space-y-2.5">
              {pageLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className={internalLinkClass}>
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-8">
            <nav aria-labelledby="footer-sections-title">
              <h3 id="footer-sections-title" className="font-semibold text-white mb-4">
                {t('footer.sectionsTitle')}
              </h3>
              <ul className="space-y-2.5">
                {sectionLinks.map((link) => (
                  <li key={`${link.to}${link.hash}`}>
                    <Link to={{ pathname: link.to, hash: link.hash }} className={internalLinkClass}>
                      {t(link.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-labelledby="footer-resources-title">
              <h3 id="footer-resources-title" className="font-semibold text-white mb-4">
                {t('footer.resourcesTitle')}
              </h3>
              <ul className="space-y-2.5">
                {resourceLinks.map((link) => (
                  <li key={link.labelKey}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 ${externalLinkClass}`}
                    >
                      <link.icon className="w-4 h-4" aria-hidden="true" />
                      {t(link.labelKey)}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-start">
            <p className="text-neutral-500 text-sm">
              &copy; {currentYear} {siteConfig.app.name}. {t('footer.copyright')}
            </p>
            <p className="text-neutral-600 text-xs mt-2 max-w-md leading-relaxed">
              {t('footer.trademark')}
            </p>
          </div>

          <div className="flex items-center gap-5">
            <Link
              to="/pricing"
              className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
            >
              <Percent className="w-4 h-4" aria-hidden="true" />
              {t('footer.links.pricing')}
            </Link>
            <Link
              to="/guide"
              className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
            >
              <FileText className="w-4 h-4" aria-hidden="true" />
              {t('footer.links.guide')}
            </Link>
            <Link
              to="/privacy"
              className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
            >
              <ShieldCheck className="w-4 h-4" aria-hidden="true" />
              {t('footer.links.privacy')}
            </Link>
            <div className="flex items-center gap-2 text-neutral-500">
              <span>{t('footer.versionLabel')}</span>
              <span className="px-2 py-1 bg-primary/20 text-primary rounded-full text-xs font-mono">
                {siteConfig.release.version}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
