import React from 'react'


const techIcons = {
    Acf: <div className='stack-icon-place acf'>
          <img className='icon-replacement' src={`${process.env.PUBLIC_URL}/assets/images/icons/acf-logo.png`} alt='' />
        </div>,
      // name: "Advanced Custom Fields"
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
    Github:  <i class="devicon-github-original-wordmark"></i>,
    GitLab: <i class="devicon-gitlab-plain"></i>,
    Html5: <i className="devicon-html5-plain"></i>,
    Invision: <div className='stack-icon-place'>
                <img className='icon-replacement invision' src={`${process.env.PUBLIC_URL}/assets/images//assets/images/icons/invision-lt.png`} alt='' />
              </div>,
    Figma:  <i class="devicon-figma-plain"></i>,
    Filezilla:  <i class="devicon-filezilla-plain"></i>,
    Heroku:  <i class="devicon-heroku-plain"></i>,
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
    VSCode: <i class="devicon-vscode-plain"></i>,
    Slack:  <i class="devicon-slack-plain"></i>,
    Swiper:  <i class="devicon-swiper-original"></i>,
    Tailwind:  <i class="devicon-tailwindcss-original"></i>,
    Trello:  <i class="devicon-trello-plain"></i>,
    TypeScript: <i class="devicon-typescript-plain"></i>,
    Vite:  <i class="devicon-vitejs-plain"></i>,
    Vue:  <i class="devicon-vuejs-plain"></i>,
    Webflow:  <i class="devicon-webflow-original"></i>,
    Woocommerce:  <i class="devicon-woocommerce-plain"></i>,
    WordPress:  <i class="devicon-wordpress-plain"></i>,
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
