import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

test('renders creates a footer', () => {
  const { getByText } = render(<Footer />);
  const linkElement = getByText(/Footer content/i);
  expect(linkElement).toBeInTheDocument();
});
