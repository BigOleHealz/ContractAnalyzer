import React from 'react';
import { render } from '@testing-library/react';
import TestComponent from '../src/components/TestComponent';

test('renders TestComponent', () => {
  const { getByText } = render(<TestComponent />);
  const headerElement = getByText(/Test Component/i);
  expect(headerElement).toBeInTheDocument();
});

// This test checks if the TestComponent renders correctly.
// It looks for the presence of the text 'Test Component' in the document.
