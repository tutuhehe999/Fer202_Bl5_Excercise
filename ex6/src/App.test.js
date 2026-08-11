import { render, screen } from '@testing-library/react';
import App from './App';

test('renders new products', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /new product/i })).toBeInTheDocument();
  expect(screen.getAllByText('Product')).toHaveLength(4);
});
