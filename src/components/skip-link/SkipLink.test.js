import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LanguageProvider } from '../../context/LanguageProvider';
import { SkipLink } from './SkipLink';

test('skip link focuses main without changing the route', async () => {
  window.history.pushState({}, '', '/projects');

  render(
    <LanguageProvider>
      <SkipLink />
      <main id='main-content' tabIndex={-1}>Content</main>
    </LanguageProvider>
  );

  const skip = screen.getByRole('link', { name: /skip to main content|ir al contenido principal/i });
  await userEvent.click(skip);

  expect(document.getElementById('main-content')).toHaveFocus();
  expect(window.location.pathname).toBe('/projects');
});
