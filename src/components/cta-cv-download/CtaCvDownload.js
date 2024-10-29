import React from 'react'

export const CtaCvDownload = () => {
  return (
    <div className='cta-wrapper'>
    <header className='cta-header'>
        <h3 className='cta-title'>My Resume</h3>        
    </header>
    <div className='cta-body'>
        <p className='cta-pharagrap'>Click here and download my resume</p>
        <a 
          href='./assets/downloads/simon-ibalo-web-ui-engineer-en.pdf'
          download 
          className='cta-button'
        >
          {' '}
          Download Resume
        </a>
    </div>
    </div>
  )
}
