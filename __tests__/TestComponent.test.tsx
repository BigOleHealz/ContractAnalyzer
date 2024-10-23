import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestComponent from '../src/components/TestComponent';

describe('TestComponent', () => {
  it('renders the test component message', () => {
    render(<TestComponent />);
    const messageElement = screen.getByText(/this is a test component/i);
    expect(messageElement).toBeInTheDocument();
  });
});
