import { render, screen } from '@testing-library/react';
import App from './App';

test('renders exercise 11 title', () => {
  render(<App />);
  expect(screen.getByText(/Exercise 11: React Component/i)).toBeInTheDocument();
});
