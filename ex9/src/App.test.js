import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the default simple website', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /contact/i })).toBeInTheDocument();
});
