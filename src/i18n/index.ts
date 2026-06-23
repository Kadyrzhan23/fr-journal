// src/i18n/index.ts
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Cookies from 'js-cookie'
import uz from './locales/uz.json'
import ru from './locales/ru.json'
import en from './locales/en.json'
import kz from './locales/kz.json'

i18n.use(initReactI18next).init({
    resources: {
        uz: { translation: uz },
        ru: { translation: ru },
        en: { translation: en },
        kz: { translation: kz },
    },
    lng: Cookies.get('lang') || 'uz',  // читаем из куки при старте
    fallbackLng: 'uz',
    interpolation: { escapeValue: false },
}).then()

export default i18n