import { useContext, useMemo } from 'react';

import { MainNavBar } from '../../components/main-nav-bar/MainNavBar';
import { TestimonialCard } from '../../components/testimonial-card/TestimonialCard';

import { recomendationsData } from '../../data/recomendationsContent';
import { LanguageContext } from '../../context/LanguageContext';
import { ExitNavigateContext } from '../../context/ExitNavigateContext';
import { AppearBlock, useAppearRevealMode, useExitNavigate } from '../../utils/appear';

const CARD_APPEAR_FROM = ['top', 'up', 'left', 'right'];
const DESKTOP_STAGGER_MS = 70;
const DESKTOP_STAGGER_CAP = 4;

export const Testimonials = () => {

    const { siteLang } = useContext(LanguageContext);
    const { isExiting, requestNavigate } = useExitNavigate();
    const exitingClass = isExiting === true ? ' appear--exiting' : '';
    const appearReveal = useAppearRevealMode();

    const cardFromByName = useMemo(() => {
        return recomendationsData.reduce((acc, rec) => {
            const index = Math.floor(Math.random() * CARD_APPEAR_FROM.length);
            acc[rec.name] = CARD_APPEAR_FROM[index];
            return acc;
        }, {});
    }, []);

    const headLine = recomendationsData[0].headLine[siteLang];

    return (
        <ExitNavigateContext.Provider value={requestNavigate}>
            <header className='header'>
                <MainNavBar />
            </header>
            <main className='main-section'>
                <div className='container'>
                    <section className='testimonial-section'>

                        <div className='testimonial-header-row'>
                            <AppearBlock
                                reveal={appearReveal}
                                className={'appear appear--from-left appear--offscreen' + exitingClass}
                            >
                                <h2 className='section-title flotate'>{headLine}</h2>
                            </AppearBlock>
                        </div>

                        <div className='testimonial-grid-row'>
                            <div className='testimonial-card-grid'>
                                {recomendationsData.map((recomendacion, index) => {
                                    const from = cardFromByName[recomendacion.name];
                                    const delayIndex = index <= DESKTOP_STAGGER_CAP ? index : DESKTOP_STAGGER_CAP;
                                    const appearStyle = appearReveal === 'load'
                                        ? { '--appear-delay': (delayIndex * DESKTOP_STAGGER_MS) + 'ms' }
                                        : undefined;
                                    return (
                                        <TestimonialCard
                                            key={recomendacion.name}
                                            recomendacion={recomendacion}
                                            appearReveal={appearReveal}
                                            className={'appear appear--from-' + from + ' appear--offscreen' + exitingClass}
                                            style={appearStyle}
                                        />
                                    );
                                })}
                            </div>
                        </div>

                    </section>
                </div>
            </main>
        </ExitNavigateContext.Provider>
    )
}
