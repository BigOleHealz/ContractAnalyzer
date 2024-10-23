import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestPage from '../src/pages/test';

describe('TestPage', () => {
    it('renders the test page with correct text and component', () => {
        render(<TestPage />);
        const heading = screen.getByText(/Test Page/i);
        const componentHeading = screen.getByText(/Test Component/i);
        const componentParagraph = screen.getByText(/This is a test component./i);
        expect(heading).toBeInTheDocument();
        expect(componentHeading).toBeInTheDocument();
        expect(componentParagraph).toBeInTheDocument();
    });
});
