import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from '../../context/LanguageProvider';
import { DocumentMeta } from './DocumentMeta';

const renderWithRoute = (path, langBeforeRender) => {
  if (langBeforeRender != null) {
    window.localStorage.setItem('siteLang', langBeforeRender);
  }

  return render(
    <LanguageProvider>
      <MemoryRouter initialEntries={[path]}>
        <DocumentMeta />
        <Routes>
          <Route path='*' element={<span />} />
        </Routes>
      </MemoryRouter>
    </LanguageProvider>
  );
};

describe('DocumentMeta', () => {
  beforeEach(() => {
    window.localStorage.setItem('siteLang', 'EN');
  });

  test('sets home title and description in English', () => {
    renderWithRoute('/');

    expect(document.title).toBe('Simón Ibalo — UX/UI Engineer');
    expect(document.querySelector('meta[name="description"]').getAttribute('content')).toMatch(
      /9\+ years/
    );
  });

  test('sets projects meta in Spanish', () => {
    renderWithRoute('/projects', 'ES');

    expect(document.title).toBe('Proyectos — Simón Ibalo');
    expect(document.querySelector('meta[name="description"]').getAttribute('content')).toMatch(
      /React/
    );
  });

  test('falls back to home meta for unknown routes', () => {
    renderWithRoute('/unknown-route');

    expect(document.title).toBe('Simón Ibalo — UX/UI Engineer');
  });
});
