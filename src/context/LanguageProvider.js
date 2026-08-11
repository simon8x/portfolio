import { useEffect, useState } from "react"
import { LanguageContext } from "./LanguageContext"

const STORAGE_KEY = 'siteLang'
const SUPPORTED_LANGS = ['EN', 'ES']

const readStoredLang = () => {
	try {
		const stored = window.localStorage.getItem(STORAGE_KEY)

		return SUPPORTED_LANGS.indexOf(stored) >= 0 ? stored : null
	} catch (error) {
		// Safari en modo privado puede bloquear el acceso a localStorage.
		return null
	}
}

const storeLang = (lang) => {
	try {
		window.localStorage.setItem(STORAGE_KEY, lang)
	} catch (error) {
		// Sin persistencia el sitio funciona igual, solo se pierde la preferencia.
	}
}

const detectBrowserLang = () => {
	const languages = navigator.languages
	const preferred = languages == null || languages.length === 0 ? navigator.language : languages[0]

	if (preferred == null) {
		return 'EN'
	}

	// Comparar solo el primer subtag cubre es, es-AR, es-ES y es-419.
	return preferred.toLowerCase().split('-')[0] === 'es' ? 'ES' : 'EN'
}

// La elección manual guardada tiene prioridad sobre el idioma del navegador.
const getInitialLang = () => {
	const stored = readStoredLang()

	return stored == null ? detectBrowserLang() : stored
}

export const LanguageProvider = ({ children }) => {

    const [siteLang, setSiteLang] = useState(getInitialLang)

    useEffect(() => {
        document.documentElement.lang = siteLang.toLowerCase()
    }, [siteLang])

    const handleLang = () => {
        const nextLang = siteLang === 'EN' ? 'ES' : 'EN'

        storeLang(nextLang)
        setSiteLang(nextLang)
	  }
  
  return (
    <LanguageContext.Provider  value = {{ siteLang, handleLang  }}>
        { children }
    </LanguageContext.Provider>
  )
}
