import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestPage from '../src/pages/test';

describe('TestPage', () => {
  it('renders the test page message', () => {
    render(<TestPage />);
    const messageElement = screen.getByText(/this is a test page/i);
    expect(messageElement).toBeInTheDocument();
  });
});
