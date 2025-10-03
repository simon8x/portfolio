import { useState } from "react"
import { LanguageContext } from "./LanguageContext"

export const LanguageProvider = ({ children }) => {
  
    const [siteLang, setSiteLang] = useState('EN')

    const handleLang = () => {
		  setSiteLang(prev => (prev === 'EN' ? 'ES' : 'EN'))
	  }
  
  return (
    <LanguageContext.Provider  value = {{ siteLang, handleLang  }}>
        { children }
    </LanguageContext.Provider>
  )
}
