import { render, screen } from '@testing-library/react';
import App from './App';

test('renders planets header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Planets!/i);
  expect(headerElement).toBeInTheDocument();
});
