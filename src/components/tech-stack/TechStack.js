import React from 'react'


const techIcons = {
    Django:  <i class="devicon-django-plain"></i>,
    GitHub: <i class="devicon-github-original"></i>,
    GitLab: <i class="devicon-gitlab-plain"></i>,
    Html5: <i className="devicon-html5-plain colored"></i>,
    Figma:  <i class="devicon-figma-plain"></i>,
    Filezilla:  <i class="devicon-filezilla-plain"></i>,
    Heroku:  <i class="devicon-heroku-original"></i>,
    MaterializeCss: <i className="devicon-materializecss-plain colored"></i>,
    Npm:  <i class="devicon-npm-original-wordmark"></i>,
    Postman:  <i class="devicon-postman-plain"></i>,
    Python:  <i class="devicon-python-plain"></i>,
    Redux:  <i class="devicon-redux-original"></i>,
    ReactJs: <i className="devicon-react-original colored"></i>,
    Ror:  <i class="devicon-rails-plain"></i>,
    Rubi:  <i class="devicon-ruby-plain"></i>,
    Salesforce: <i class="devicon-salesforce-plain"></i>,
    Sass: <i className="devicon-sass-original colored"></i>,
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
