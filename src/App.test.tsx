import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders about', () => {
  render(<App />);
  const Element = screen.getByText(/Book-Inventory application making use of ice and fire api/i);
  expect(Element).toBeInTheDocument();
});
