
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '@/locales/en.json';
import id from '@/locales/id.json';

const translations = { en, id };

type Language = 'en' | 'id';

interface I18nContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, replacements?: { [key: string]: string | number }) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('id');

  const t = (key: string, replacements?: { [key: string]: string | number }) => {
    let translation = translations[language][key as keyof typeof translations[Language]] || key;
    if (replacements) {
      Object.keys(replacements).forEach(re_key => {
        translation = translation.replace(`{{${re_key}}}`, String(replacements[re_key]));
      });
    }
    return translation;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within a LanguageProvider');
  }
  return context;
};
