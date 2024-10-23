import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestComponent from '../components/TestComponent';

describe('TestComponent', () => {
    test('renders the test message', () => {
        render(<TestComponent />);
        const messageElement = screen.getByText(/Test Successful!/i);
        expect(messageElement).toBeInTheDocument();
    });
});
