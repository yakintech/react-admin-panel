import React from "react";
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { trTranslation } from "./config/language/tr";
import { enTranslation } from "./config/language/en";
import { arTranslation } from "./config/language/ar";
import { grTranslation } from "./config/language/gr";


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: enTranslation
      },
      tr: {
        translation: trTranslation
      },
      ar: {
        translation: arTranslation
      },
      gr:{
        translation: grTranslation
      }
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

