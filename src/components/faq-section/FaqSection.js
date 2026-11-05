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

export const FaqSection = () => {
  const { siteLang } = useContext(LanguageContext);
  const heading = getLocalizedField(faqSectionTitle, siteLang);

  return (
    <section className='faq-section' aria-labelledby='home-faq-heading'>
      <h2 id='home-faq-heading' className='faq-section__title'>
        {heading}
      </h2>
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
