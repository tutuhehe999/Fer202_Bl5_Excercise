import { render, screen } from '@testing-library/react';
import App from './App';

test('renders three card columns', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /cards columns/i })).toBeInTheDocument();
  expect(screen.getAllByText(/some text inside the first card/i)).toHaveLength(3);
});
