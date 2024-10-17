import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestComponent from '../TestComponent';

describe('TestComponent', () => {
    test('renders the test component message', () => {
        render(<TestComponent />);
        const messageElement = screen.getByText(/Test Component is working!/i);
        expect(messageElement).toBeInTheDocument();
    });
});
