import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { siteConfig } from '../config/siteConfig';
import type { TranslationKey } from './translations';

export const usePageTitle = (titleKey: TranslationKey): void => {
  const { t } = useLanguage();
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = t(titleKey);

    const url = `${siteConfig.site.url}${pathname}`;
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) canonical.href = url;
    const ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    if (ogUrl) ogUrl.content = url;
  }, [t, titleKey, pathname]);
};
