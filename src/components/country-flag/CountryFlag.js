import { useContext, useState } from 'react';

import { LanguageContext } from '../../context/LanguageContext';
import { countriesData } from '../../data/countriesData';


export const CountryFlag = ({ countryCode }) => {

    const { siteLang } = useContext(LanguageContext);
    const [imageFailed, setImageFailed] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const country = countriesData[countryCode];

    if (country == null) {
        return null;
    }

    const countryName = country[siteLang] == null ? country.EN : country[siteLang];
    const countryInitials = countryCode.toUpperCase();
    const flagClass = imageLoaded === true ? 'country-flag is-loaded' : 'country-flag';

    // El tooltip vive en el contenedor porque un img no admite pseudo-elementos.
    return (
        <span className='country-flag-wrapper' data-country-label={countryName}>
            {
                imageFailed === true
                    ? <span className='country-flag country-flag-fallback' role='img' aria-label={countryName}>
                        {countryInitials}
                      </span>
                    : <img
                        className={flagClass}
                        src={`${process.env.PUBLIC_URL}/assets/images/flags/flag-${countryCode.toLowerCase()}.png`}
                        alt={countryName}
                        onLoad={() => setImageLoaded(true)}
                        onError={() => setImageFailed(true)}
                      />
            }
        </span>
    )
}
