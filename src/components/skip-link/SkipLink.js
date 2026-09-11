import { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext'

const SKIP_LINK_LABEL = {
  EN: 'Skip to main content',
  ES: 'Ir al contenido principal'
}

export const SkipLink = () => {
  const { siteLang } = useContext(LanguageContext)
  const label = SKIP_LINK_LABEL[siteLang] == null
    ? SKIP_LINK_LABEL.EN
    : SKIP_LINK_LABEL[siteLang]

  const handleClick = (event) => {
    event.preventDefault()

    const main = document.getElementById('main-content')
    if (main == null) {
      return
    }

    main.focus()
  }

  return (
    <a
      className='skip-link'
      href='#main-content'
      onClick={handleClick}
    >
      {label}
    </a>
  )
}
