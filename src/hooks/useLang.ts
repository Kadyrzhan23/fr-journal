import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import { api } from '../store/api.ts'
import type { AppDispatch } from '../store/store'

export type Lang = 'uz' | 'ru' | 'en' | 'kz'

export const useLang = () => {
    const { i18n } = useTranslation()
    const dispatch = useDispatch<AppDispatch>()

    const currentLang = (Cookies.get('lang') || 'uz') as Lang

    const changeLang = (lang: Lang) => {
        Cookies.set('lang', lang, { expires: 365 })
        i18n.changeLanguage(lang)
        dispatch(api.util.resetApiState()) // сбрасывает кеш → refetch
    }

    return { currentLang, changeLang }
}