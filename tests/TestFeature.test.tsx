import React from 'react';
import { render, screen } from '@testing-library/react';
import TestFeature from '../src/components/TestFeature';

describe('TestFeature Component', () => {
  test('renders Test Feature heading', () => {
    render(<TestFeature />);
    const headingElement = screen.getByText(/Test Feature/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders test feature description', () => {
    render(<TestFeature />);
    const descriptionElement = screen.getByText(/This is a test feature component./i);
    expect(descriptionElement).toBeInTheDocument();
  });
});