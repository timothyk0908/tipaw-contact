import React from 'react';
import { render } from '@testing-library/react';
import NotFound from './NotFound';

test('renders the not found page', () => {
  const { getByText } = render(<NotFound />);
  const h3Element = getByText("This page doesn't exist ( yet ? )");
  expect(h3Element).toBeInTheDocument();
});
