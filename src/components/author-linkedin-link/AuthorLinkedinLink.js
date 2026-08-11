import { useContext } from 'react';

import { LanguageContext } from '../../context/LanguageContext';


// La variante neutral cubre los casos sin género declarado.
const linkCopy = {
    EN: {
        male: "Find him on LinkedIn",
        female: "Find her on LinkedIn",
        neutral: "View LinkedIn profile"
    },
    ES: {
        male: "Encuéntralo en LinkedIn",
        female: "Encuéntrala en LinkedIn",
        neutral: "Ver perfil en LinkedIn"
    }
};


export const AuthorLinkedinLink = ({ url, gender }) => {

    const { siteLang } = useContext(LanguageContext);

    if (url == null || url === "") {
        return null;
    }

    const copyByLang = linkCopy[siteLang] == null ? linkCopy.EN : linkCopy[siteLang];
    const label = copyByLang[gender] == null ? copyByLang.neutral : copyByLang[gender];

    return (
        <a
            className='author-linkedin-link'
            href={url}
            target='_blank'
            rel='noopener noreferrer'
        >
            <span className='author-linkedin-link-text'>{label}</span>
            <svg
                className='external-link-icon'
                viewBox='0 0 24 24'
                fill='currentColor'
                aria-hidden='true'
                focusable='false'
            >
                <path d='M14 3a1 1 0 0 0 0 2h3.59l-8.3 8.29a1 1 0 0 0 1.42 1.42L19 6.41V10a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1h-6z' />
                <path d='M5 5h5a1 1 0 0 0 0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a1 1 0 0 0-2 0v5H5V5z' />
            </svg>
        </a>
    )
}
