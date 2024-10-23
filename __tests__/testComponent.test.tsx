import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestComponent from '../src/components/TestComponent';

describe('TestComponent', () => {
    it('renders the test component with correct text', () => {
        render(<TestComponent />);
        const heading = screen.getByText(/Test Component/i);
        const paragraph = screen.getByText(/This is a test component./i);
        expect(heading).toBeInTheDocument();
        expect(paragraph).toBeInTheDocument();
    });
});
