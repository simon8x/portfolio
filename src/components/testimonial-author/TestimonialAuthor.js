import { useContext, useState } from 'react';

import { CountryFlag } from '../country-flag/CountryFlag';
import { AuthorLinkedinLink } from '../author-linkedin-link/AuthorLinkedinLink';
import { LanguageContext } from '../../context/LanguageContext';


export const TestimonialAuthor = ({ recomendacion, showLinkedinLink }) => {

    const { siteLang } = useContext(LanguageContext);
    const [avatarLoaded, setAvatarLoaded] = useState(false);

    const relationCopy = recomendacion.relation == null
        ? null
        : (recomendacion.relation[siteLang] == null
            ? recomendacion.relation.EN
            : recomendacion.relation[siteLang]);

    // El error también corta el shimmer: un avatar roto no debe quedar animándose.
    const avatarWrapperClass = avatarLoaded === true
        ? 'testimonial-author-avatar-wrapper is-loaded'
        : 'testimonial-author-avatar-wrapper';

    return (
        <div
            className='testimonial-author-wrapper'
            data-relation-level={recomendacion.relationLevel}
        >
            <div className='testimonial-author-avatar-col'>
                <div className={avatarWrapperClass}>
                    <img
                        className='testimonial-author-avatar-img'
                        src={recomendacion.avatarUrl}
                        alt={recomendacion.name}
                        onLoad={() => setAvatarLoaded(true)}
                        onError={() => setAvatarLoaded(true)}
                    />
                    {
                        relationCopy == null
                            ? null
                            : <span className='testimonial-author-relation'>{relationCopy}</span>
                    }
                </div>
                {
                    relationCopy == null
                        ? null
                        : <span className='testimonial-role-chip-below'>{relationCopy}</span>
                }
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
