import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the default students exercise', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /students detail/i })).toBeInTheDocument();
  expect(screen.getByText('DE160182')).toBeInTheDocument();
});
