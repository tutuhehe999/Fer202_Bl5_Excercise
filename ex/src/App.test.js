import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders all main JSX and ES6 exercise sections', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /JSX & ES6/i })).toBeInTheDocument();
  expect(screen.getByText('This is JSX')).toBeInTheDocument();
  expect(screen.getByText('Course names')).toBeInTheDocument();
  expect(screen.getByText('ReactNative')).toBeInTheDocument();
  expect(screen.getAllByText('Ann (19)')).toHaveLength(2);
  expect(screen.getByText('Elisabeth (16)')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Promise$/ })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Bài tập sản phẩm$/ })).toBeInTheDocument();
  expect(screen.getAllByText('Laptop ASUS').length).toBeGreaterThan(0);
  expect(screen.getByText('Hết hàng')).toBeInTheDocument();
});

test('renders the required calculated results', () => {
  render(<App />);

  expect(screen.getByRole('cell', { name: '1993' })).toBeInTheDocument();
  expect(screen.getByRole('cell', { name: '1990' })).toBeInTheDocument();
  expect(screen.getByRole('cell', { name: '1982' })).toBeInTheDocument();
  expect(screen.getByText('Area = 40')).toBeInTheDocument();
  expect(screen.getByText('Area = 30')).toBeInTheDocument();
});

test('closure counter starts at zero and increments', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Call counter' });
  const counterOutput = screen.getByLabelText('Counter value');

  fireEvent.click(button);
  expect(counterOutput).toHaveTextContent('0');

  fireEvent.click(button);
  expect(counterOutput).toHaveTextContent('1');
});
