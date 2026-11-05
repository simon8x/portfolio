import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { faqItems, faqSectionTitle } from '../../data/faqContent';

const getLocalizedField = (field, siteLang) => {
  if (field == null) {
    return '';
  }

  const localized = field[siteLang];

  return localized == null ? field.EN : localized;
};

export const FaqSection = ({ asPage }) => {
  const { siteLang } = useContext(LanguageContext);
  const heading = getLocalizedField(faqSectionTitle, siteLang);
  const isPage = asPage === true;
  const headingId = isPage === true ? 'faq-page-heading' : 'home-faq-heading';
  const sectionClassName = isPage === true
    ? 'faq-section faq-section--page'
    : 'faq-section';
  const TitleTag = isPage === true ? 'h1' : 'h2';

  return (
    <section className={sectionClassName} aria-labelledby={headingId}>
      <TitleTag id={headingId} className='faq-section__title'>
        {heading}
      </TitleTag>
      <div className='faq-section__list'>
        {faqItems.map((item) => (
          <article className='faq-section__item' key={item.id}>
            <h3 className='faq-section__question'>
              {getLocalizedField(item.question, siteLang)}
            </h3>
            <p className='faq-section__answer'>
              {getLocalizedField(item.answer, siteLang)}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};
