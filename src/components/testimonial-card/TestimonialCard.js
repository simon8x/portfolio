import { useContext, useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

import { LanguageContext } from '../../context/LanguageContext';
import { TestimonialAuthor } from '../testimonial-author/TestimonialAuthor';
import { finishAppearAnimation, useAppearOnView } from '../../utils/appear';

// 'card' | 'avatar' — cambiar acá para probar el otro target.
const TESTIMONIAL_GLOW_TARGET = 'card';
const TESTIMONIAL_GLOW_CLASS = ' glow--epic glow-target-' + TESTIMONIAL_GLOW_TARGET;

export const TestimonialCard = ({ recomendacion, className, style, appearReveal }) => {

    const { appearRef, enterClass } = useAppearOnView({ reveal: appearReveal });
    const extraClassName = className == null ? '' : ' ' + className;

    const { siteLang } = useContext(LanguageContext);
    const [open, setOpen] = useState(false);

    // Fallback a EN por si se suma un idioma sin traducir todas las entradas.
    const paragraphs = recomendacion.text[siteLang] == null
        ? recomendacion.text.EN
        : recomendacion.text[siteLang];

    const openLabel = siteLang === 'ES'
        ? `Leer el testimonio de ${recomendacion.name}`
        : `Read ${recomendacion.name}'s testimonial`;

    const relationCopy = recomendacion.relation == null
        ? null
        : (recomendacion.relation[siteLang] == null
            ? recomendacion.relation.EN
            : recomendacion.relation[siteLang]);

    return (
        <>
            <button
                type='button'
                ref={appearRef}
                className={'testimonial-card hover-enlarge' + extraClassName + TESTIMONIAL_GLOW_CLASS + enterClass}
                style={style}
                onClick={() => setOpen(true)}
                onAnimationEnd={finishAppearAnimation}
                aria-label={openLabel}
                data-relation-level={recomendacion.relationLevel}
            >
                {/* <ChatBubble /> */}
                {
                    relationCopy == null
                        ? null
                        : <span className='testimonial-role-chip'>{relationCopy}</span>
                }
                <TestimonialAuthor recomendacion={recomendacion} showLinkedinLink={false} />
            </button>

            <Modal
                open={open}
                onClose={() => setOpen(false)}
                center
                classNames={{
                    overlay: 'testimonial-modal-overlay',
                    modal: 'testimonial-modal'
                }}
            >
                <article className='testimonial-modal-wrapper'>
                    <div className='quote-wrapper'>
                        {paragraphs.map((item, index) =>
                            <p className='testimonial-paragraph' key={index}>
                                {item}
                            </p>
                        )}
                    </div>
                    <TestimonialAuthor recomendacion={recomendacion} showLinkedinLink={true} />
                </article>
            </Modal>
        </>
    )
}
