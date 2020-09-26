import React from 'react';
import { render } from '@testing-library/react';
import App from '../../App/Pages';

test('lookin` for text', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});
