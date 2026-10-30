import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { ui } from './ui.js'

const I18nContext = createContext(null)
const STORAGE_KEY = 'erasmus-seville-lang'

function initialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && ui[saved]) return saved
  } catch {
    // localStorage indisponible : on garde le français
  }
  return 'fr'
}

// Texte localisé : une chaîne simple (valable pour toutes les langues) ou { fr, es, en }.
export function pick(value, lang) {
  if (value == null) return ''
  if (typeof value === 'string') return value
  return value[lang] ?? value.fr ?? ''
}

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(initialLang)

  const setLang = useCallback((next) => {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignoré
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = ui[lang].home.title
  }, [lang])

  const value = useMemo(
    () => ({ lang, setLang, t: ui[lang], l: (v) => pick(v, lang) }),
    [lang, setLang],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  return useContext(I18nContext)
}
