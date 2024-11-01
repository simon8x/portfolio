import React from 'react'


const techIcons = {
    Acf: <div className='stack-icon-place acf'>
          <img className='icon-replacement' src={`${process.env.PUBLIC_URL}/assets/images/icons/acf-logo.png`} alt='' />
        </div>,
    Aws:  <i class="devicon-amazonwebservices-plain-wordmark"></i>,
    Bem: <div className='stack-icon-place acf'>
            <img className='icon-replacement' src={`${process.env.PUBLIC_URL}/assets/images/icons/bem-logo.png`} alt='' />
          </div>,
    Bitbucket:  <i class="devicon-bitbucket-original-wordmark"></i>,
    Bootstrap:  <i class="devicon-bootstrap-plain"></i>,
    CSS:  <i class="devicon-css3-plain"></i>,
    Django:  <i class="devicon-django-plain"></i>,
    Divi: <svg class="divi-icon">
            <path d="M14,2c6.62,0,12,5.38,12,12s-5.38,12-12,12S2,20.62,2,14S7.38,2,14,2 M14,0C6.27,0,0,6.27,0,14 c0,7.73,6.27,14,14,14s14-6.27,14-14C28,6.27,21.73,0,14,0L14,0z"></path>
            <path d="M17.92,17.49c0.37-0.44,0.65-0.96,0.84-1.55c0.19-0.6,0.44-2.64-0.01-3.98c-0.2-0.59-0.48-1.11-0.85-1.54 c-0.37-0.43-0.82-0.76-1.36-1C16,9.18,15.36,9,14.65,9H11v10h3.65c0.72,0,1.36-0.24,1.91-0.49C17.1,18.27,17.56,17.92,17.92,17.49z M17.22,7.54c0.81,0.34,1.51,0.83,2.08,1.45c0.56,0.62,0.99,1.36,1.28,2.2C20.86,12.03,21,13.01,21,14c0,0.97-0.13,1.83-0.41,2.67 c-0.28,0.84-0.7,1.59-1.26,2.21c-0.56,0.63-1.25,1.13-2.08,1.49C16.44,20.72,15.49,21,14.43,21H10c-0.55,0-1-0.45-1-1V8 c0-0.55,0.45-1,1-1h4.43C15.47,7,16.41,7.2,17.22,7.54z"></path>
          </svg>,
    Elementor: <div className='stack-icon-place'>
                <img className='icon-replacement elementor' src={`${process.env.PUBLIC_URL}/assets/images/icons/elementor.png`} alt='' />
              </div>,
    Github:  <i class="devicon-github-original-wordmark"></i>,
    GitLab: <i class="devicon-gitlab-plain"></i>,
    Html5: <i className="devicon-html5-plain"></i>,
    Figma:  <i class="devicon-figma-plain"></i>,
    Filezilla:  <i class="devicon-filezilla-plain"></i>,
    Heroku:  <i class="devicon-heroku-plain"></i>,
    Invision: <div className='stack-icon-place'>
                <img className='icon-replacement invision' src={`${process.env.PUBLIC_URL}/assets/images/icons/invision-lt.png`} alt='' />
              </div>,
    Jira:  <i class="devicon-jira/assets/images/-plain"></i>,
    Js: <i class="devicon-javascript-plain"></i>, 
    Jquery:  <i class="devicon-jquery-plain"></i>,
    MaterializeCss: <i className="devicon-materializecss-plain"></i>,
    Miro: <div className='stack-icon-place'>
            <svg className='icon-replacement miro'>
              <g>
                <path fill='transparent' d="M10.4,0h27.2C43.3,0,48,4.7,48,10.4v27.2C48,43.3,43.3,48,37.6,48H10.4C4.7,48,0,43.3,0,37.6V10.4 C0,4.7,4.7,0,10.4,0z"></path>
                <path fill='white' d="M33.3,6h-5.3l4.4,7.7L22.8,6h-5.3l4.8,9.4L12.3,6H7l5.3,12L7,42h5.3l10.1-25.7L17.5,42h5.3l9.7-27.4L28.1,42 h5.3L43,12L33.3,6z"></path>
              </g>
            </svg>
          </div>,
    Mui:  <i class="devicon-materialui-plain"></i>,
    Npm:  <i class="devicon-npm-original-wordmark"></i>,
    Postman:  <i class="devicon-postman-plain"></i>,
    Python:  <i class="devicon-python-plain"></i>,
    Redux:  <i class="devicon-redux-original"></i>,
    ReactJs: <i className="devicon-react-original"></i>,
    Ror:  <i class="devicon-rails-plain"></i>,
    Rubi:  <i class="devicon-ruby-plain"></i>,
    Salesforce: <i class="devicon-salesforce-plain"></i>,
    Sass: <i className="devicon-sass-original"></i>,
    Shopify: <div className='stack-icon-place'>
              <svg className='icon-replacement shopify' >
                <g>
                  <path d="M888.5,282.5c0-4.7-4.7-4.7-9.4-4.7c-4.7,0-60.9-4.7-60.9-4.7S780.7,235.7,776,231c0,0,0,0-4.7,0l-28.1,656.2l0,0l225-46.9
                    C968.2,835.7,888.5,287.2,888.5,282.5z"/>
                  <path d="M762,226.3c0,0-9.4,0-23.4,4.7c-14.1-37.5-37.5-70.3-79.7-70.3h-4.7c-9.4-18.8-23.4-23.4-37.5-23.4
                    c-98.4,0-145.3,121.9-159.4,182.8c-37.5,9.4-60.9,18.8-65.6,18.8c-23.4,9.4-23.4,9.4-23.4,28.1c0,14.1-56.2,440.6-56.2,440.6
                    l421.9,79.7L762,226.3L762,226.3z M654.2,254.4L654.2,254.4c-23.4,14.1-51.6,18.8-75,28.1c14.1-56.3,42.2-84.4,65.6-93.8
                    C649.5,207.5,654.2,226.3,654.2,254.4z M612,165.4L612,165.4c4.7,0,9.4,0,14.1,4.7c-28.1,14.1-65.6,46.9-79.7,121.9
                    c-18.8,4.7-37.5,14.1-56.3,18.8C504.2,254.4,546.3,165.4,612,165.4z M630.7,488.8L630.7,488.8c0,0-28.1-14.1-56.2-14.1
                    c-46.9,0-46.9,28.1-46.9,37.5c0,37.5,103.1,51.6,103.1,145.3c0,70.3-46.9,117.2-107.8,117.2c-75,0-112.5-46.9-112.5-46.9l18.8-65.6
                    c0,0,37.5,32.8,70.3,32.8c23.4,0,28.1-18.8,28.1-28.1c0-51.6-84.4-51.6-84.4-135.9c0-70.3,46.9-135.9,150-135.9
                    c37.5,0,56.2,9.4,56.2,9.4L630.7,488.8z M677.6,249.7V245c0-23.4-4.7-42.2-9.4-56.3l0,0l0,0l0,0c23.4,0,37.5,28.1,46.9,56.3
                    C701,245,691.7,249.7,677.6,249.7z"/>
                </g>
              </svg>
            </div>,
    Slack:  <i class="devicon-slack-plain"></i>,
    Swiper:  <i class="devicon-swiper-original"></i>,
    Tailwind:  <i class="devicon-tailwindcss-original"></i>,
    Trello:  <i class="devicon-trello-plain"></i>,
    TypeScript: <i class="devicon-typescript-plain"></i>,
    VSCode: <i class="devicon-vscode-plain"></i>,
    Vite:  <i class="devicon-vitejs-plain"></i>,
    Vue:  <i class="devicon-vuejs-plain"></i>,
    Webflow:  <i class="devicon-webflow-original"></i>,
    Woocommerce:  <i class="devicon-woocommerce-plain"></i>,
    WordPress:  <i class="devicon-wordpress-plain"></i>,
    Wpbackery:<div className='stack-icon-place'>
                <img className='icon-replacement wp-backery' src={`${process.env.PUBLIC_URL}/assets/images/icons/vc-logo.png`} alt='' />
              </div>,
  };


export const TechStack = ({ stack }) => {
  return (
    <div className="tech-stack">
        {stack.map((tech, index) => (
        <div key={index} className="tech-icon">
            {techIcons[tech] || <span>{tech}</span>} {/* Si no hay ícono, mostrar el nombre */}
        </div>
        ))}
    </div>    
  )
}
