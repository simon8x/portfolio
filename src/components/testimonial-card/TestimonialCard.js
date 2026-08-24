import { useContext, useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

import { LanguageContext } from '../../context/LanguageContext';
import { ChatBubble } from '../chat-bubble/ChatBubble';
import { TestimonialAuthor } from '../testimonial-author/TestimonialAuthor';


export const TestimonialCard = ({ recomendacion }) => {

    const { siteLang } = useContext(LanguageContext);
    const [open, setOpen] = useState(false);

    // Fallback a EN por si se suma un idioma sin traducir todas las entradas.
    const paragraphs = recomendacion.text[siteLang] == null
        ? recomendacion.text.EN
        : recomendacion.text[siteLang];

    const openLabel = siteLang === 'ES'
        ? `Leer el testimonio de ${recomendacion.name}`
        : `Read ${recomendacion.name}'s testimonial`;

    return (
        <>
            <button
                type='button'
                className='testimonial-card hover-enlarge'
                onClick={() => setOpen(true)}
                aria-label={openLabel}
            >
                {/* <ChatBubble /> */}
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
