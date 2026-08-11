import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the flight booking form', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /form đặt vé máy bay/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /đặt vé/i })).toBeInTheDocument();
});
