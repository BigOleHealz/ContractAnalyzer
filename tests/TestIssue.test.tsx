import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test('renders without crashing', () => {
  render(<div>Test Issue</div>);
  expect(screen.getByText('Test Issue')).toBeInTheDocument();
});
