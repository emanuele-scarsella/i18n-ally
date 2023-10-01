import i18next from "i18next";
import { createI18nStore } from "svelte-i18next";
import de_pages_home from "./assets/locales/de/pages/home.json"
import de_translation from "./assets/locales/de/translation.json";
import en_pages_home from "./assets/locales/en/pages/home.json";
import en_translation from "./assets/locales/en/translation.json";

i18next.init({
  fallbackLng: "en",
  debug: true,
  resources: {
    en: {
      translation: en_translation,
      pages: {
        home: en_pages_home
      }
    },
    de: {
      translation: de_translation,
      pages: {
        home: de_pages_home
      }
    }
  },
  interpolation: {
    escapeValue: false // not needed for svelte as it escapes by default
  }
});

const i18n = createI18nStore(i18next);

export { i18next, i18n };
