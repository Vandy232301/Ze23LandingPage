import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import enTranslations from '../translations/en.json';
import ruTranslations from '../translations/ru.json';
import zhTranslations from '../translations/zh.json';
import deTranslations from '../translations/de.json';
import koTranslations from '../translations/ko.json';
import esTranslations from '../translations/es.json';
import frTranslations from '../translations/fr.json';
import jaTranslations from '../translations/ja.json';

type Language = 'EN' | 'RU' | 'ZH' | 'DE' | 'KO' | 'ES' | 'FR' | 'JA';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

const translationsMap: Record<Language, Record<string, string>> = {
  EN: enTranslations,
  RU: ruTranslations,
  ZH: zhTranslations,
  DE: deTranslations,
  KO: koTranslations,
  ES: esTranslations,
  FR: frTranslations,
  JA: jaTranslations,
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within TranslationProvider');
  }
  return context;
};

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('EN');

  useEffect(() => {
    const saved = localStorage.getItem('ze23-language') as Language;
    if (saved && ['EN', 'RU', 'ZH', 'DE', 'KO', 'ES', 'FR', 'JA'].includes(saved)) {
      setLanguage(saved);
    }
  }, []);

  const setLanguageAndSave = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('ze23-language', lang);
  };

  const t = useMemo(() => {
    return (key: string): string => {
      const translations = translationsMap[language];
      return translations?.[key] || key;
    };
  }, [language]);

  return (
    <TranslationContext.Provider value={{ language, setLanguage: setLanguageAndSave, t }}>
      {children}
    </TranslationContext.Provider>
  );
};
