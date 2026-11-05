import { MainNavBar } from '../../components/main-nav-bar/MainNavBar';
import { FaqSection } from '../../components/faq-section/FaqSection';
import { ExitNavigateContext } from '../../context/ExitNavigateContext';
import { useExitNavigate } from '../../utils/appear';

export const Faq = () => {
  const { requestNavigate } = useExitNavigate();

  return (
    <ExitNavigateContext.Provider value={requestNavigate}>
      <header className='header'>
        <MainNavBar />
      </header>
      <main id='main-content' className='main-section' tabIndex={-1}>
        <div className='container'>
          <FaqSection asPage />
        </div>
      </main>
    </ExitNavigateContext.Provider>
  );
};
