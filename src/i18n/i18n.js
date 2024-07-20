import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from "./locales/ru/ru.json"
import en from "./locales/en/en.json"
import kg from "./locales/kg/kg.json"

i18n.use(initReactI18next).init({
     resources: {
        ru: {
            translation: ru 
        },
        en: {
            translation: en
        },
        kg: {
            translation: kg
        }
     },
    lng:"en",
    fallbackLng:"ru",
    interpolation: {
        escapeValue: false
      }
})

export default i18n  