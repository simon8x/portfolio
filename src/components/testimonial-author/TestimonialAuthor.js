import { useState } from 'react';

import { CountryFlag } from '../country-flag/CountryFlag';
import { AuthorLinkedinLink } from '../author-linkedin-link/AuthorLinkedinLink';


export const TestimonialAuthor = ({ recomendacion, showLinkedinLink }) => {

    const [avatarLoaded, setAvatarLoaded] = useState(false);

    // El error también corta el shimmer: un avatar roto no debe quedar animándose.
    const avatarWrapperClass = avatarLoaded === true
        ? 'testimonial-author-avatar-wrapper is-loaded'
        : 'testimonial-author-avatar-wrapper';

    return (
        <div className='testimonial-author-wrapper'>
            <div className={avatarWrapperClass}>
                <img
                    className='testimonial-author-avatar-img'
                    src={recomendacion.avatarUrl}
                    alt=''
                    onLoad={() => setAvatarLoaded(true)}
                    onError={() => setAvatarLoaded(true)}
                />
            </div>
            <div className='testimonial-author-data-wrapper'>
                <h4 className='testimonial-author-name'>
                    {recomendacion.name}
                    <CountryFlag countryCode={recomendacion.country} />
                </h4>
                <span className='testimonial-author-position'>{recomendacion.position}</span>
                {
                    showLinkedinLink === true
                        ? <AuthorLinkedinLink
                            url={recomendacion.authorLinkedinUrl}
                            gender={recomendacion.authorGender}
                          />
                        : null
                }
            </div>
        </div>
    )
}
