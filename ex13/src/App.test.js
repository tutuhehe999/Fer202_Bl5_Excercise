import { render, screen } from '@testing-library/react';
import App from './App';

test('renders exercise 13 title', () => {
  render(<App />);
  expect(screen.getByText(/Exercise 13: useEffect/i)).toBeInTheDocument();
});
