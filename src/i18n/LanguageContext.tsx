import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { type Locale, type TranslationKey, getTranslation, isRTL, locales, localeNames } from './translations';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
  isRTL: boolean;
  availableLocales: Locale[];
  localeNames: Record<Locale, string>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('mohasabi-locale') as Locale | null;
      if (saved && locales.includes(saved)) {
        return saved;
      }
      const browserLang = navigator.language.slice(0, 2) as Locale;
      if (locales.includes(browserLang)) {
        return browserLang;
      }
    }
    return 'ar';
  });

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== 'undefined') {
      localStorage.setItem('mohasabi-locale', newLocale);
      document.documentElement.lang = newLocale;
      document.documentElement.dir = isRTL(newLocale) ? 'rtl' : 'ltr';
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = isRTL(locale) ? 'rtl' : 'ltr';
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute('content', getTranslation(locale, 'seo.description'));
    }
  }, [locale]);

  const t = useCallback((key: TranslationKey) => {
    return getTranslation(locale, key);
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, isRTL: isRTL(locale), availableLocales: locales, localeNames }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};