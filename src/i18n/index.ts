import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import all language resources
import enTranslation from './locales/en.json';
import zhTWTranslation from './locales/zh-TW.json';
import jaTranslation from './locales/ja.json';
import koTranslation from './locales/ko.json';
import esTranslation from './locales/es.json';
import ptTranslation from './locales/pt.json';
import frTranslation from './locales/fr.json';
import plTranslation from './locales/pl.json';
import ruTranslation from './locales/ru.json';
import arTranslation from './locales/ar.json';

// Configure i18next
i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    debug: process.env.NODE_ENV === 'development',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    resources: {
      en: {
        translation: enTranslation 
      },
      'zh-TW': {
        translation: zhTWTranslation
      },
      ja: {
        translation: jaTranslation
      },
      ko: {
        translation: koTranslation
      },
      es: {
        translation: esTranslation
      },
      pt: {
        translation: ptTranslation
      },
      fr: {
        translation: frTranslation
      },
      pl: {
        translation: plTranslation
      },
      ru: {
        translation: ruTranslation
      },
      ar: {
        translation: arTranslation
      }
    },
    // Language detection options
    detection: {
      order: ['navigator', 'htmlTag', 'path', 'cookie'],
      caches: ['cookie'],
      cookieExpirationDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365), // 1 year
      cookieDomain: window.location.hostname,
    }
  });

