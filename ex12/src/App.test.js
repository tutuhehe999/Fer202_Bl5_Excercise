import { render, screen } from '@testing-library/react';
import App from './App';

test('renders exercise 12 title', () => {
  render(<App />);
  expect(screen.getByText(/Exercise 12: useState/i)).toBeInTheDocument();
});
