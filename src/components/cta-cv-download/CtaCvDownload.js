import { useContext } from "react"
import { CtaCvDownloadContent } from "../../data/ctaCvDownloadData"
import { LanguageContext } from "../../context/LanguageContext"

export const CtaCvDownload = () => {

  const { siteLang } = useContext( LanguageContext )
  const content = CtaCvDownloadContent[siteLang] || CtaCvDownloadContent.EN

  return (
    <div className='cta-wrapper'>
      <header className='cta-header'>
          <h3 className='cta-title'>{content.title}</h3>        
      </header>
      <div className='cta-body'>
          <p className='cta-pharagrap'>{content.description}</p>
          <a 
            href={ content.btnUrl }
            download 
            className='cta-button'
          >
            {' '}
            {content.btnText} 
            <img className="btn-icon" src={`${process.env.PUBLIC_URL}/assets/images/icons/download-file.png`} alt=''/>
          </a>
      </div>
    </div>
  )
}
