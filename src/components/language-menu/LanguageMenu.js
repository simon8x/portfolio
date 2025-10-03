import { useContext } from "react"
import { LanguageContext } from "../../context/LanguageContext"

export const LangMenu = () => {
	
	const {siteLang, handleLang}  =  useContext( LanguageContext)

  return (
    <>
			<button 
				className='control-item-btn'
				onClick={ handleLang }
		  	>
					{siteLang}
			</button>
    </>
  )
}
