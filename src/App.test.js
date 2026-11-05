import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the home skip link', () => {
  render(<App />);
  expect(
    screen.getByRole('link', { name: /skip to main content|ir al contenido principal/i })
  ).toBeInTheDocument();
});
