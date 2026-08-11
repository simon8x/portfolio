import { useContext } from 'react';

import { MainNavBar } from '../../components/main-nav-bar/MainNavBar';
import { BackgroundShapes } from '../../components/background-shapes/BackgroundShapes';
import { TestimonialCard } from '../../components/testimonial-card/TestimonialCard';

import { recomendationsData } from '../../data/recomendationsContent';
import { LanguageContext } from '../../context/LanguageContext';


export const Testimonials = () => {

    const { siteLang } = useContext(LanguageContext);

    // El titular vive en la primera entrada de la data.
    const headLine = recomendationsData[0].headLine[siteLang];

    return (
        <>
            <BackgroundShapes />
            <header className='header'>
                <MainNavBar />
            </header>
            <main className='main-section'>
                <div className='container'>
                    <section className='testimonial-section'>

                        <div className='testimonial-header-row'>
                            <h2 className='section-title flotate'>{headLine}</h2>
                        </div>

                        <div className='testimonial-grid-row'>
                            <div className='testimonial-card-grid'>
                                {recomendationsData.map(recomendacion => (
                                    <TestimonialCard
                                        key={recomendacion.name}
                                        recomendacion={recomendacion}
                                    />
                                ))}
                            </div>
                        </div>

                    </section>
                </div>
            </main>
        </>
    )
}
