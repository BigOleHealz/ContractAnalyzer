import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TestComponent from '../components/TestComponent';

describe('TestComponent', () => {
    it('renders without crashing', () => {
        const { getByText } = render(<TestComponent />);
        expect(getByText('Hello, World!')).toBeInTheDocument();
    });
});
